apiready = function() {
  api.showProgress();
//根据不同角色，获取不同数据
    if ($api.getStorage('systemId') == 1) {
        $.ajax({
            crossDomain: true,
            url: param + "/harvest/findForTXB",
            dataType: "json",
            data:{"systemId":$api.getStorage('systemId')},
            type: "get",
            async: false,
            success: function (result) {
                api.hideProgress();
                var harvests = result.data.harvests;
                //按时间排序
                harvests.sort(function(a,b){
                  return new Date(b.date).getTime() - new Date(a.date).getTime();
                })
                $.each(harvests, function(index, harvest) {
                    var liEle = '<li><a tapmode onclick="fnOpenHarvestDetail('+harvest.id+')";><p class="wz-l">' + harvest.title + '</p><span class="wz-r">' + harvest.date + '</span></a></li>';
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
            url: param + "/harvest/findForSX",
            dataType: "json",
            data:{"systemId":$api.getStorage('systemId')},
            type: "get",
            async: false,
            success: function (result) {
              api.hideProgress();
              var harvests = result.data.harvests;
              //按时间排序
              harvests.sort(function(a,b){
                return new Date(b.date).getTime() - new Date(a.date).getTime();
              })
              $.each(harvests, function(index, harvest) {
                  var liEle = '<li><a tapmode onclick="fnOpenHarvestDetail('+harvest.id+')";><p class="wz-l">' + harvest.title + '</p><span class="wz-r">' + harvest.date + '</span></a></li>';
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
            url: param + "/harvest/findFor",
            dataType: "json",
            data:{"systemId":$api.getStorage('systemId')},
            type: "get",
            async: false,
            success: function (result) {
              api.hideProgress();
              var harvests = result.data.harvests;
              //按时间排序
              harvests.sort(function(a,b){
                return new Date(b.date).getTime() - new Date(a.date).getTime();
              })
              $.each(harvests, function(index, harvest) {
                  var liEle = '<li><a tapmode onclick="fnOpenHarvestDetail('+harvest.id+')";><p class="wz-l">' + harvest.title + '</p><span class="wz-r">' + harvest.date + '</span></a></li>';
                  $(liEle).appendTo("ul");
              });
            },
            error : function(){
              alert("获取数据失败！")
            }

        });
    }
}
function fnOpenHarvestDetail(harvest_id){
  api.openWin({
      name: 'harvest_detail',
      url: './harvest_detail_win.html',
      pageParam: {
        id:harvest_id
      }
  });
}
