apiready = function(){

      //根据role获取相应的打分详情
      var userRole =  $api.getStorage('userRole');
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
      url: param + '/testscore/findByEvaluation',
      data: { "evaluationId": $api.getStorage('userId')},
      success : function(result){

          for(i = 0; i < JSON.stringify(result.data.testScores.length); i++) {
            if($api.getStorage('score_id') == JSON.stringify(result.data.testScores[i].id)){
                $('.a1').val(JSON.stringify(result.data.testScores[i].a1))
                $('.a2').val(JSON.stringify(result.data.testScores[i].a2))
                $('.a3').val(JSON.stringify(result.data.testScores[i].a3))
                $('.a4').val(JSON.stringify(result.data.testScores[i].a4))
                $('.a5').val(JSON.stringify(result.data.testScores[i].a5))
                if('.a6'){
                  $('.a6').val(JSON.stringify(result.data.testScores[i].a6))
                }

            }
          }
      }
    })





}


//发送数据
$('#yes').on("click",function() {
    id = $api.getStorage('score_id');
    A1 = parseInt($('.a1').val());
    A2 = parseInt($('.a2').val());
    A3 = parseInt($('.a3').val());
    A4 = parseInt($('.a4').val());
    A5 = parseInt($('.a5').val());
    A6 = parseInt($('.a6').val());
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
