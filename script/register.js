apiready = function(){
  keybackEventListener();
}

$(".register").on("click", function() {
    // alert($("#register_form").serialize());
    urlParam = param +'/register';
    $.ajax({
        url: urlParam,
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
