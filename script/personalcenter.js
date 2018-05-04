apiready = function() {

}

$(".logout").on("click", function() {
    // alert("123");
    $.ajax({
        url: 'http://47.104.26.79:8080/atits_service/login/logout ',
        type: 'get',
        dataType: 'json',
        success: function(result) {
            if (result.code == 100) {
                $api.rmStorage('userInfo');
                // $api.setStorage('userInfo', 'result');

                api.openWin({
                    name: 'login',
                    url: './login.html',
                    pageParam: {
                        name: 'test'
                    }
                });
            } else {
                alert(result.msg);
            }
        }
    });
});
