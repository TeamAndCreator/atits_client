apiready = function(){
        keybackEventListener();
        is_login();

        $(".login").on("click", function(){
                urlParam = param + '/login/login';
                // console.log(document.cookie);
                $.ajax({
                        url: urlParam,
                        type: 'post',
                        data: $("#login_form").serialize(),
                        dataType: 'json',
                        success: function(result){
                            if(result.code == 100){
                                //console.log(JSON.stringify(result));
                                //  console.log(JSON.stringify(result.data.user.id));
                                var userId = JSON.stringify(result.data.user.id);
                                var systemId = JSON.stringify(result.data.user.system.id);
                                var systemName = JSON.stringify(result.data.user.system.systemName);
                                $api.setStorage('userId', userId);
                                $api.setStorage('systemName', systemName);
                                $api.setStorage('systemId', systemId);
                                api.alert({
                                    title: '提示',
                                    msg: '登录成功',
                                }),
                                api.openWin({
                                            name: 'index',
                                            url: '../index.html',
                                            pageParam: {
                                                name: 'test'
                                            }
                                });                              
                            }else{
                                alert(result.msg);
                            }
                        }
                });
  })
}
