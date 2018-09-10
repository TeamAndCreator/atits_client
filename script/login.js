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
                    success: function(result) {
                            if (result.code == 100) {
                                //console.log(JSON.stringify(result));
                                //console.log(JSON.stringify(result.data.user));
                                var userId = JSON.stringify(result.data.user.id);
                                var userName = JSON.stringify(result.data.user.userName);
                                var systemId = JSON.stringify(result.data.user.system.id);
                                var systemName = JSON.stringify(result.data.user.system.systemName);
                                var password = JSON.stringify(result.data.user.password);
                                var roles = result.data.user.roles;
                                //console.log(JSON.stringify(roles.length)) 1
                                var rolesId = [];
                                for (var i = 0; i < roles.length; i++) {
                                     rolesId.push(roles[i].id);
                                }
                                $api.setStorage('rolesId', rolesId);
                                $api.setStorage('password', password);
                                $api.setStorage('userId', userId);
                                $api.setStorage('userName', userName);
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
                            } else {
                                alert("登录出现异常，请重新登录！");
                            }
                        }
                });
  })
}
