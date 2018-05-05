apiready = function() {

}

$(".logout").on("click", function() {
    // alert("123");
    urlParam = param +'/login/logout';
    $.ajax({
        url: urlParam,
        type: 'get',
        dataType: 'json',
        success: function(result) {
            if (result.code == 100) {
                $api.clearStorage();
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
