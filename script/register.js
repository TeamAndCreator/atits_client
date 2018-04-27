apiready = function(){

}

$(".register").on("click", function() {
    // alert($("#register_form").serialize());
    $.ajax({
        url: 'http://47.104.26.79:8080/atits_service/register ',
        type: 'post',
        data: $("#register_form").serialize(),
        dataType: 'json',
        success: function(result) {
            if(result.code == 100){
              alert(result.msg);
              api.openWin({
                  name: 'login',
                  url: './login.html',
                  pageParam: {
                      name: 'test'
                  }
              });
            }else {
              alert(result.msg);
            }
            // console.log(JSON.stringify(result));
        }
    });
});
