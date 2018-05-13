apiready = function() {
    urlParam = param + '/activity/findAll1';

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

function fnOpenActivityDetail(activity_id){
  api.openWin({
      name: 'activity_detail',
      url: './activity_detail.html',
      pageParam: {
        id:activity_id
      }
  });
}
