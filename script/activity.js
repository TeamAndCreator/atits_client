apiready = function() {
//根据不同角色，获取不同数据

api.showProgress(); //显示加载进度框
    if ($api.getStorage('systemId') == 1) {
        $.ajax({
            crossDomain: true,
            url: param + "/activity/findForTXB",
            dataType: "json",
            data:{"systemId":$api.getStorage('systemId')},
            type: "get",
            async: false,
            success: function (result) {
                api.hideProgress(); //隐藏加载进度框
                var activities = result.data.activities;
                $.each(activities, function(index, activity) {
                    var liEle = '<li><a tapmode onclick="fnOpenActivityDetail('+activity.id+')";><p class="wz-l">' + activity.title + '</p><span class="wz-r">' + activity.date + '</span></a></li>';
                    $(liEle).appendTo("ul");
                });
            },
            error : function(){
              alert("获取数据失败！")
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
              api.hideProgress(); //隐藏加载进度框
              var activities = result.data.activities;
              $.each(activities, function(index, activity) {
                  var liEle = '<li><a tapmode onclick="fnOpenActivityDetail('+activity.id+')";><p class="wz-l">' + activity.title + '</p><span class="wz-r">' + activity.date + '</span></a></li>';
                  $(liEle).appendTo("ul");
              });
            },
            error : function(){
              alert("获取数据失败！")
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
              api.hideProgress(); //隐藏加载进度框
              var activities = result.data.activities;
              $.each(activities, function(index, activity) {
                  var liEle = '<li><a tapmode onclick="fnOpenActivityDetail('+activity.id+')";><p class="wz-l">' + activity.title + '</p><span class="wz-r">' + activity.date + '</span></a></li>';
                  $(liEle).appendTo("ul");
              });
            },
            error : function(){
              alert("获取数据失败！")
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
