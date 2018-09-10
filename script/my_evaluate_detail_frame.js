apiready = function(){
    //根据role获取相应的打分详情
    var userRole = $api.getStorage('userRole');
    //console.log(userRole);
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
}


//发送数据
$('#yes').on("click",function() {
    id = $api.getStorage('userId')
    A1 = parseInt($('#a1').val());
    A2 = parseInt($('#a2').val());
    A3 = parseInt($('#a3').val());
    A4 = parseInt($('#a4').val());
    A5 = parseInt($('#a5').val());
    A6 = parseInt($('#a6').val());
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
        error: function(){
          alert("打分失败！")
        }
    });
})

$('#no').on("click",function() {
    api.openWin({
        name: 'my_evaluate',
        url: './my_evaluate_win.html',
    });

})
