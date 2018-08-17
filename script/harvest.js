apiready = function() {
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
                var harvests = result.data.harvests;
                $.each(harvests, function(index, harvest) {
                    var liEle = '<li><a tapmode onclick="fnOpenHarvestDetail('+harvest.id+')";><p class="wz-l">' + harvest.title + '</p><span class="wz-r">' + harvest.date + '</span></a></li>';
                    $(liEle).appendTo("ul");
                });
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
              var harvests = result.data.harvests;
              $.each(harvests, function(index, harvest) {
                  var liEle = '<li><a tapmode onclick="fnOpenHarvestDetail('+harvest.id+')";><p class="wz-l">' + harvest.title + '</p><span class="wz-r">' + harvest.date + '</span></a></li>';
                  $(liEle).appendTo("ul");
              });
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
              var harvests = result.data.harvests;
              $.each(harvests, function(index, harvest) {
                  var liEle = '<li><a tapmode onclick="fnOpenHarvestDetail('+harvest.id+')";><p class="wz-l">' + harvest.title + '</p><span class="wz-r">' + harvest.date + '</span></a></li>';
                  $(liEle).appendTo("ul");
              });
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
