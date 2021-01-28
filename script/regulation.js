apiready = function() {
//根据不同角色，获取不同数据
    api.showProgress();
    if ($api.getStorage('systemId') == 1) {
        $.ajax({
            crossDomain: true,
            url: param + "/regulation/findForTXB",
            dataType: "json",
            data:{"systemId":$api.getStorage('systemId')},
            type: "get",
            async: false,
            success: function (result) {
                api.hideProgress();
                var regulations = result.data.others;
                //按时间排序
                regulations.sort(function(a,b){
                  return new Date(b.date).getTime() - new Date(a.date).getTime();
                })
                $.each(regulations, function(index, regulation) {
                    var liEle = '<li><a tapmode onclick="fnOpenRegulationDetail('+regulation.id+')";><p class="wz-l">' + regulation.title + '</p><span class="wz-r">' + regulation.date + '</span></a></li>';
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
            url: param + "/regulation/findForSX",
            dataType: "json",
            data:{"systemId":$api.getStorage('systemId')},
            type: "get",
            async: false,
            success: function (result) {
              api.hideProgress();
              var regulations = result.data.others;
              //按时间排序
              regulations.sort(function(a,b){
                return new Date(b.date).getTime() - new Date(a.date).getTime();
              })
              $.each(regulations, function(index, regulation) {
                  var liEle = '<li><a tapmode onclick="fnOpenRegulationDetail('+regulation.id+')";>\
                  <p class="wz-l">' + regulation.title + '</p><span class="wz-r">' + regulation.date + '</span></a></li>';
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
            url: param + "/regulation/findFor",
            dataType: "json",
            data:{"systemId":$api.getStorage('systemId')},
            type: "get",
            async: false,
            success: function (result) {
              api.hideProgress();
              var regulations = result.data.others;
              //按时间排序
              regulations.sort(function(a,b){
                return new Date(b.date).getTime() - new Date(a.date).getTime();
              })
              $.each(regulations, function(index, regulation) {
                  var liEle = '<li><a tapmode onclick="fnOpenRegulationDetail('+regulation.id+')";>\
                  <p class="wz-l">' + regulation.title + '</p><span class="wz-r">' + regulation.date + '</span></a></li>';
                  $(liEle).appendTo("ul");
              });
            },
            error : function(){
              alert("获取数据失败！")
            }

        });
    }
}




function fnOpenRegulationDetail(regulation_id) {
    api.openWin({
        name: 'regulation_detail',
        url: './regulation_detail_win.html',
        pageParam: {
            id: regulation_id
        }
    });
}
