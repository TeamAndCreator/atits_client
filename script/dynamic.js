apiready = function() {
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
                  var dynamics = result.data.dynamics;
                  $.each(dynamics, function(index, dynamic) {
                      var liEle = '<li><a tapmode onclick="fnOpenDynamicDetail('+dynamic.id+')";><p class="wz-l">' + dynamic.title + '</p><span class="wz-r">' + dynamic.date + '</span></a></li>';
                      $(liEle).appendTo("ul");
                  });
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
                var dynamics = result.data.dynamics;
                $.each(dynamics, function(index, dynamic) {
                    var liEle = '<li><a tapmode onclick="fnOpenDynamicDetail('+dynamic.id+')";><p class="wz-l">' + dynamic.title + '</p><span class="wz-r">' + dynamic.date + '</span></a></li>';
                    $(liEle).appendTo("ul");
                });
              }

          });
      } else {
          $.ajax({
              crossDomain: true,
              url: param + "/dynamic/findFor",
              dataType: "json",
              data:{"systemId":$api.getStorage('systemId')},
              type: "get",
              async: false,
              success: function (result) {
                var dynamics = result.data.dynamics;
                $.each(dynamics, function(index, dynamic) {
                    var liEle = '<li><a tapmode onclick="fnOpenDynamicDetail('+dynamic.id+')";><p class="wz-l">' + dynamic.title + '</p><span class="wz-r">' + dynamic.date + '</span></a></li>';
                    $(liEle).appendTo("ul");
                });
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
