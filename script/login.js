apiready = function() {
  keybackEventListener();
}

$(".login").on("click", function() {
    urlParam = param +'/login/login';
    $.ajax({
        url: urlParam,
        type: 'post',
        data: $("#login_form").serialize(),
        dataType: 'json',
        success: function(result) {
            if (result.code == 100) {
                $api.setStorage('userInfo', 'result');
                api.alert({
                    title: '提示',
                    msg: '登录成功',
                }, function(ret, err) {
                    if (ret) {
                        api.openWin({
                            name: 'index',
                            url: '../index.html',
                            pageParam: {
                                name: 'test'
                            }
                        });
                    } else {
                        alert(JSON.stringify(err));
                    }
                });
            } else {
                alert(result.msg);
            }
            // console.log(JSON.stringify(result));


        }
    });
});
