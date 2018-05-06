layui.use('layer', function() {
    var $ = layui.jquery,
        layer = layui.layer;

    $(function (){
        // 删除
        $(".btndelete").on("click",function(){
            let id = $(this).data('id');
            var _layer_index = layer.confirm('确认删除？', {
                btn: ['确定','取消'] //按钮
            }, function(){
                layer.close(_layer_index);
                $.post(`/mongo/student/delete/${id}`, {}, (res) => {
                    if (res.success) {
                        layer.open({
                            title: '温馨提示'
                            ,type: 1
                            ,offset: 'rb'
                            ,anim: 2
                            ,content: '<div style="padding: 20px 80px;">删除成功！</div>'
                            ,shade: 0 //不显示遮罩
                            ,time: 1000
                            ,end: function() {
                                location.reload();
                            }
                        }); 
                    } else {
                        layer.open({
                            title: '温馨提示'
                            ,type: 1
                            ,offset: 'rb'
                            ,anim: 2
                            ,content: '<div style="padding: 20px 80px;">删除失败！</div>'
                            ,shade: 0 //不显示遮罩
                            ,time: 3000
                        });
                    }
                })
            });   
        })
    })
});