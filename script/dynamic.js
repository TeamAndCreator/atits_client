apiready = function() {
  api.showProgress(); //显示加载进度框
  //根据不同角色，获取不同数据
      if ($api.getStorage('systemId') == 1) {
          $.ajax({
              crossDomain: true,
              url: param + "/dynamic/findForTXB",
              dataType: "json",
              data:{"systemId":$api.getStorage('systemId')},
              type: "get",
              async: false,
              success: function (result) {
                  api.hideProgress();
                  var dynamics = result.data.dynamics;
                  $.each(dynamics, function(index, dynamic) {
                      var liEle = '<li><a tapmode onclick="fnOpenDynamicDetail('+dynamic.id+')";><p class="wz-l">' + dynamic.title + '</p><span class="wz-r">' + dynamic.date + '</span></a></li>';
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
              url: param + "/dynamic/findForSX",
              dataType: "json",
              data:{"systemId":$api.getStorage('systemId')},
              type: "get",
              async: false,
              success: function (result) {
                api.hideProgress();
                var dynamics = result.data.dynamics;
                $.each(dynamics, function(index, dynamic) {
                    var liEle = '<li><a tapmode onclick="fnOpenDynamicDetail('+dynamic.id+')";><p class="wz-l">' + dynamic.title + '</p><span class="wz-r">' + dynamic.date + '</span></a></li>';
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
              url: param + "/dynamic/findFor",
              dataType: "json",
              data:{"userId":$api.getStorage('userId')},
              type: "get",
              async: false,
              success: function (result) {
                api.hideProgress();
                var dynamics = result.data.dynamics;
                $.each(dynamics, function(index, dynamic) {
                    var liEle = '<li><a tapmode onclick="fnOpenDynamicDetail('+dynamic.id+')";><p class="wz-l">' + dynamic.title + '</p><span class="wz-r">' + dynamic.date + '</span></a></li>';
                    $(liEle).appendTo("ul");
                });
              },
              error : function(e){
                console.log(""+e);
                alert("获取数据失败！")
              }

          });
      }

}




function fnOpenDynamicDetail(dynamic_id){
  api.openWin({
      name: 'dynamic_detail',
      url: './dynamic_detail_win.html',
      pageParam: {
        name:'test',
        id:dynamic_id
      }
  });
}
