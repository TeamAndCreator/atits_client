apiready = function() {

}

$(".login").on("click", function() {

    $.ajax({
        url: 'http://47.104.26.79:8080/atits_service/login/login ',
        type: 'post',
        data: $("#login_form").serialize(),
        dataType: 'json',
        success: function(result) {
                if (result.code == 100) {
                    api.openWin({
                        name: 'index',
                        url: '../index.html',
                        pageParam: {
                            name: 'test'
                        }
                    });

                } else {
                    alert(result.msg);
                }
                // console.log(JSON.stringify(result));


        }
    });
});
