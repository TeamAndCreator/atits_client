function fnOpenMyEvalusteDetailWin(role, id, status) {
    $api.setStorage('userRole', role);
    $api.setStorage('score_id', id);
    $api.setStorage('status', status);
    api.openWin({
        name: 'my_evaluate_detail',
        url: './my_evaluate_detail_win.html',
        pageParam: {
            userRole: role,
            score_id: id
        }
    });

}

apiready = function() {
    urlParam = param + '/testscore/findByEvaluation';
    api.showProgress(); //显示加载进度框
    api.addEventListener({
        name: 'viewappear'
    }, function(ret, err) {
        $.ajax({
            url: urlParam,
            type: 'get',
            dataType: 'json',
            async: false,
            data: {
                "evaluationId": $api.getStorage('userId')
            },
            success: function(result) {
                //console.log(JSON.stringify(result));
                api.hideProgress(); //隐藏加载进度框
                var htmlStr = '';
                for (i = 0; i < JSON.stringify(result.data.testScores.length); i++) {
                    if (JSON.stringify(result.data.testScores[i].testStart.state) == 1) {
                        if (result.data.testScores[i].time == null) {
                            htmlStr += '<tr><td> ' + JSON.stringify(result.data.testScores[i].testStart.year).replace(/\"/g, "") +
                                ' </td> <td> ' + JSON.stringify(result.data.testScores[i].evaluationed.profile.name).replace(/\"/g, "") +
                                ' </td> <td class="state" tapmode onclick="fnOpenMyEvalusteDetailWin(' + JSON.stringify(result.data.testScores[i].role) +
                                ' ,' + JSON.stringify(result.data.testScores[i].id) + ',' + JSON.stringify(result.data.testScores[i].testStart.state) + ');"><span class="aui-btn aui-btn-success"> 未评分 </span></td></tr>';
                        } else {
                            htmlStr += '<tr><td> ' + JSON.stringify(result.data.testScores[i].testStart.year).replace(/\"/g, "") +
                                ' </td> <td> ' + JSON.stringify(result.data.testScores[i].evaluationed.profile.name).replace(/\"/g, "") +
                                ' </td> <td class="state" tapmode onclick="fnOpenMyEvalusteDetailWin(' + JSON.stringify(result.data.testScores[i].role) +
                                ' ,' + JSON.stringify(result.data.testScores[i].id) + ',' + JSON.stringify(result.data.testScores[i].testStart.state) + ');"><span class="aui-btn aui-btn-info"> 已评分 </span></td></tr>';
                        }




                    }
                    if (JSON.stringify(result.data.testScores[i].testStart.state) == 2) {
                        htmlStr += '<tr><td> ' + JSON.stringify(result.data.testScores[i].testStart.year).replace(/\"/g, "") +
                            ' </td> <td> ' + JSON.stringify(result.data.testScores[i].evaluationed.profile.name).replace(/\"/g, "") +
                            ' </td> <td class="state" tapmode onclick="fnOpenMyEvalusteDetailWin(' + JSON.stringify(result.data.testScores[i].role) +
                            ' ,' + JSON.stringify(result.data.testScores[i].id) + ',' + JSON.stringify(result.data.testScores[i].testStart.state) + ');"><span class="aui-btn aui-btn-default"> 已结束 </span></td></tr>';

                    }
                }
                $("#form-content").empty();
                $("#form-content").append(htmlStr);
            },
            error: function(err) {
                alert('考评未启动')
            }

        });
    })
}
