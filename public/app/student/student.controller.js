layui.use('layer', function() {
    var $ = layui.jquery,
        layer = layui.layer;
    $(function() {
        $("#btnopreate").on("click", function() {
            if ($("#username").val().trim() == "" || $("#age").val().trim() == "" || $("#phone").val().trim() == "") {
                layer.msg('请完善信息后提交！');
            } else {
                let _url = '';
                if ($("#hdid").val()) {
                    _url = '/mongo/student/modify'
                } else {
                    _url = '/mongo/student/add';
                }
                $.post(_url,{
                    id: $("#hdid").val(),
                    username: $("#username").val().trim(),
                    age: $("#age").val().trim(),
                    phone: $("#phone").val().trim()
                },function(res) {
                    if (res.success) {
                        layer.open({
                            title: '温馨提示'
                            ,type: 1
                            ,offset: 'auto'
                            ,anim: 0
                            ,content: '<div style="padding: 20px 80px;">保存成功！</div>'
                            ,btn: '确 定'
                            ,btnAlign: 'c' 
                            ,shade: 0.3 
                            ,cancel: function() {
                                window.location.href="/mongo";
                            }
                            ,yes: function(){
                                window.location.href="/mongo";
                            }
                        }); 
                    } else {
                        layer.msg('保存失败！');
                    }
                })
            }
        })    
    })
});