layui.use('layer', function() {
    var $ = layui.jquery,
        layer = layui.layer;
    $(function() {
        $("#btnopreate").on("click", function() {
            if ($("#user_id").val().trim() == "" || $("#user_name").val().trim() == "" || $("#user_phone").val().trim() == "" ||
            $("#user_avatar").val().trim() == "" || $("#access_token").val().trim() == "") {
                layer.msg('请完善信息后提交！');
            } else {
                let _url = '';
                if ($("#hdid").val()) {
                    _url = '/mysql/user/modify'
                } else {
                    _url = '/mysql/user/add';
                }
                $.post(_url,{
                    id: $("#hdid").val(),
                    user_id: $("#user_id").val().trim(),
                    user_name: $("#user_name").val().trim(),
                    user_phone: $("#user_phone").val().trim(),
                    user_avatar: $("#user_avatar").val().trim(),
                    access_token: $("#access_token").val().trim()
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
                                window.location.href="/mysql";
                            }
                            ,yes: function(){
                                window.location.href="/mysql";
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