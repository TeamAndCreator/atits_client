apiready = function() {
//根据不同角色，获取不同数据
    if ($api.getStorage('systemId') == 1) {
        $.ajax({
            crossDomain: true,
            url: param + "/activity/findForTXB",
            dataType: "json",
            data:{"systemId":$api.getStorage('systemId')},
            type: "get",
            async: false,
            success: function (result) {
                var activities = result.data.activities;
                $.each(activities, function(index, activity) {
                    var liEle = '<li><a tapmode onclick="fnOpenActivityDetail('+activity.id+')";><p class="wz-l">' + activity.title + '</p><span class="wz-r">' + activity.date + '</span></a></li>';
                    $(liEle).appendTo("ul");
                });
            }

        });
    } else if ($api.getStorage('rolesId').indexOf(3) != -1) {
        $.ajax({
            crossDomain: true,
            url: param + "/activity/findForSX",
            dataType: "json",
            data:{"systemId":$api.getStorage('systemId')},
            type: "get",
            async: false,
            success: function (result) {
              var activities = result.data.activities;
              $.each(activities, function(index, activity) {
                  var liEle = '<li><a tapmode onclick="fnOpenActivityDetail('+activity.id+')";><p class="wz-l">' + activity.title + '</p><span class="wz-r">' + activity.date + '</span></a></li>';
                  $(liEle).appendTo("ul");
              });
            }

        });
    } else {
        $.ajax({
            crossDomain: true,
            url: param + "/activity/findFor",
            dataType: "json",
            data:{"systemId":$api.getStorage('systemId')},
            type: "get",
            async: false,
            success: function (result) {
              var activities = result.data.activities;
              $.each(activities, function(index, activity) {
                  var liEle = '<li><a tapmode onclick="fnOpenActivityDetail('+activity.id+')";><p class="wz-l">' + activity.title + '</p><span class="wz-r">' + activity.date + '</span></a></li>';
                  $(liEle).appendTo("ul");
              });
            }

        });
    }
}



function fnOpenActivityDetail(activity_id){
  api.openWin({
      name: 'activity_detail',
      url: './activity_detail_win.html',
      pageParam: {
        id:activity_id
      }
  });
}
