apiready = function() {
//根据不同角色，获取不同数据
    if ($api.getStorage('systemId') == 1) {
        $.ajax({
            crossDomain: true,
            url: param + "/report/findForTXB",
            dataType: "json",
            data:{"systemId":$api.getStorage('systemId')},
            type: "get",
            async: false,
            success: function (result) {
                var reports = result.data.reports;
                $.each(reports, function(index, report) {
                    var liEle = '<li><a tapmode onclick="fnOpenReportDetail('+report.id+')";><p class="wz-l">' + report.title + '</p><span class="wz-r">' + report.date + '</span></a></li>';
                    $(liEle).appendTo("ul");
                });
            }

        });
    } else if ($api.getStorage('rolesId').indexOf(3) != -1) {
        $.ajax({
            crossDomain: true,
            url: param + "/report/findForSX",
            dataType: "json",
            data:{"systemId":$api.getStorage('systemId')},
            type: "get",
            async: false,
            success: function (result) {
              var reports = result.data.reports;
              $.each(reports, function(index, report) {
                  var liEle = '<li><a tapmode onclick="fnOpenReportDetail('+report.id+')";><p class="wz-l">' + report.title + '</p><span class="wz-r">' + report.date + '</span></a></li>';
                  $(liEle).appendTo("ul");
              });
            }

        });
    } else {
        $.ajax({
            crossDomain: true,
            url: param + "/report/findFor",
            dataType: "json",
            data:{"systemId":$api.getStorage('systemId')},
            type: "get",
            async: false,
            success: function (result) {
              var reports = result.data.reports;
              $.each(reports, function(index, report) {
                  var liEle = '<li><a tapmode onclick="fnOpenReportDetail('+report.id+')";><p class="wz-l">' + report.title + '</p><span class="wz-r">' + report.date + '</span></a></li>';
                  $(liEle).appendTo("ul");
              });
            }

        });
    }
}

function fnOpenReportDetail(report_id){
  api.openWin({
      name: 'report_detail',
      url: './report_detail_win.html',
      pageParam: {
        id:report_id
      }
  });
}
