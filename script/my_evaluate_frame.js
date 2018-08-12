function fnOpenMyEvalusteDetailWin(role) {


     $api.setStorage('userRole',role);
     api.openWin({
         name: 'my_evaluate_detail',
         url: './my_evaluate_detail_win.html',
         pageParam: {
             role  : role,
         }
     });

}

apiready = function() {
    urlParam = param + '/testscore/findByEvaluation';
    api.showProgress(); //显示加载进度框
    $.ajax({
        url: urlParam,
        type: 'get',
        dataType: 'json',
        async: false,
        data: {
            "evaluationId": $api.getStorage('userId')
        },
        success: function(result) {
            console.log(JSON.stringify(result.data.testScores));
            api.hideProgress(); //隐藏加载进度框
            var htmlStr = '';
            for (i = 0; i < JSON.stringify(result.data.testScores.length); i++) {
                htmlStr += '<tr><td> ' + JSON.stringify(result.data.testScores[i].testStart.year).replace(/\"/g, "") +
                    ' </td> <td> ' + JSON.stringify(result.data.testScores[i].evaluationed.profile.name).replace(/\"/g, "") +
                    ' </td> <td class="state" tapmode onclick="fnOpenMyEvalusteDetailWin('+ JSON.stringify(result.data.testScores[i].role) +' );">'+JSON.stringify(result.data.testScores[i].testStart.state)+'</td></tr>';
            }
            $("#form-content").append(htmlStr);
        },
        error: function(err){
           alert('考评未启动')
        }

    });

    if($('.state').html() == 1){
      $('.state').html('<span class="aui-btn aui-btn-success"> 评分 </span>');
      function fnOpenMyEvalusteDetailWin(role) {
           $api.setStorage('userRole',role);
           api.openWin({
               name: 'my_evaluate_detail',
               url: './my_evaluate_detail_win.html',
               pageParam: {
                   role  : role,
               }
           });
      }
    }else{
      $('.state').html('<span class="aui-btn aui-btn-default"> 未评分 </span>');
    }



}
