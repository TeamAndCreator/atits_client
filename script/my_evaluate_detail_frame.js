var userRole =  $api.getStorage('userRole');
apiready = function(){
  api.addEventListener({name: 'viewappear'}, function(ret, err){
    //根据role获取相应的打分详情

    var status = $api.getStorage('status');
    if(status == 1){
      if (userRole == 1 || userRole == 2) {
          $('#score1').css("display", "block");
          $('#sub').css("display", "block");
      } else if (userRole == 3) {
        $('#score2').css("display", "block");
        $('#sub').css("display", "block");
      } else if (userRole == 4) {
          $('#score3').css("display", "block");
          $('#sub').css("display", "block");
      }
    }else{
      if (userRole == 1 || userRole == 2) {
          $('#score1').css("display", "block");
          $('#score1 input').attr("disabled","disabled")
      } else if (userRole == 3) {
        $('#score2').css("display", "block");
        $('#score2 input').attr("disabled","disabled")
      } else if (userRole == 4) {
          $('#score3').css("display", "block");
          $('#score3 input').attr("disabled","disabled")
      }
    }

  //获取
  $.ajax({
    type: 'get',
    dataType: 'JSON',
    url: param + '/testscore/findById',
    data: { "id": $api.getStorage('score_id')},
    success : function(result){
              $('.a1').val(JSON.stringify(result.data.testScore.a1))
              $('.a2').val(JSON.stringify(result.data.testScore.a2))
              $('.a3').val(JSON.stringify(result.data.testScore.a3))
              $('.a4').val(JSON.stringify(result.data.testScore.a4))
              $('.a5').val(JSON.stringify(result.data.testScore.a5))
              if('.a6'){
                $('.a6').val(JSON.stringify(result.data.testScore.a6))
              }
    }
  })



});



}


//发送数据
$('#yes').on("click",function() {
    id = $api.getStorage('score_id');
    A1 = 0;
    A2 = 0;
    A3 = 0;
    A4 = 0;
    A5 = 0;
    A6 = 0;
    if (userRole == 1 || userRole == 2) {
        A1=parseInt($('#score1 .a1').val());
        A2=parseInt($('#score1 .a2').val());
        A3=parseInt($('#score1 .a3').val());
        A4=parseInt($('#score1 .a4').val());
        A5=parseInt($('#score1 .a5').val());
        A6=parseInt($('#score1 .a6').val());
    } else if (userRole == 3) {
      A1=parseInt($('#score2 .a1').val());
      A2=parseInt($('#score2 .a2').val());
      A3=parseInt($('#score2 .a3').val());
      A4=parseInt($('#score2 .a4').val());
      A5=parseInt($('#score2 .a5').val());
    } else if (userRole == 4) {
      A1=parseInt($('#score3 .a1').val());
      A2=parseInt($('#score3 .a2').val());
      A3=parseInt($('#score3 .a3').val());
      A4=parseInt($('#score3 .a4').val());
      A5=parseInt($('#score3 .a5').val());
      A6=parseInt($('#score3 .a6').val());
    }
    urlParam = param + '/testscore/score';
    $.ajax({
        type: 'post',
        dataType: 'JSON',
        url: urlParam,
        data: {
            _method: "put",
            "id": id,
            "A1": A1,
            "A2": A2,
            "A3": A3,
            "A4": A4,
            "A5": A5,
            "A6": A6
        },
        async: false,
        traditional: true,
        success: function(result) {
            alert("打分成功！");
            api.openWin({
                name: 'my_evaluate',
                url: './my_evaluate_win.html',
            });
        },
        error: function(result){
          alert("打分失败！")
        }
    });
})
