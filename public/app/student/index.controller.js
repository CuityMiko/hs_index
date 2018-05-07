layui.use('layer', function() {
    var $ = layui.jquery,
        layer = layui.layer;

    var socket = io();
    // 监听从服务器端传过来的消息
    socket.on("mongodb", function(msg) {
        if (msg) {
            layer.open({
                title: '系统通知',
                content: msg,
                offset: 'rb', // 右下角显示
                skin: 'layui-layer-lan',
                area: ['400px', '240px'],
                shade: 0,
                time: 5000,
                anim: 6,
                isOutAnim: true
            });
        }
    });

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