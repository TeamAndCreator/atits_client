apiready = function(){

}

$(".register").on("click", function() {

    $.ajax({
        url: 'http://47.104.26.79:8080/atits_app/register ',
        type: 'post',
        data: $("#register_form").serialize(),
        dataType: 'json',
        success: function(result) {

            if(result.code == 200){
              api.openWin({
                  name: 'login',
                  url: './login.html',
                  pageParam: {
                      name: 'test'
                  }
              });

            }else {

            }


        }
    });
});
