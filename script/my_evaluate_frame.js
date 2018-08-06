function fnOpenMyEvalusteDetailWin() {
    //alert($api.jsonToStr(userInfo));
    api.openWin({
        name: 'my_evaluate_detail',
        url: './my_evaluate_detail_win.html',
        pageParam: {
            name: 'test'
        }
    });
}

apiready = function(){
  urlParam = param + '';
  $.ajax({
      url: urlParam,
      type: 'get',
      dataType: 'json',
      success: function(result) {
          var activitys = result.data.activitys;
          $.each(activitys, function(index, activity) {
              var liEle = '<li><a tapmode onclick="fnOpenActivityDetail('+activity.id+')";><p class="wz-l">' + activity.title + '</p><span class="wz-r">' + activity.date + '</span></a></li>';
              $(liEle).appendTo("ul");
          });
      }
  });
}
