apiready = function(){

}

$(".register").on("click", function() {
    // alert("123");
    var 
    $.ajax({
        url: 'http://47.104.26.79:8080/atits_service/register ',
        type: 'post',
        data: $("#register_form").serialize(),
        dataType: 'json',
        success: function(result) {
            alert("123");
            // if(result.code == 100){
            //   api.openWin({
            //       name: 'login',
            //       url: './login.html',
            //       pageParam: {
            //           name: 'test'
            //       }
            //   });
            //
            // }else {
            //
            // }
            console.log(JSON.stringify(result));


        }
    });
});
