apiready = function() {
    urlParam = param + '/report/findAll1';

    $.ajax({
        url: urlParam,
        type: 'get',
        dataType: 'json',
        success: function(result) {
            var reports = result.data.reports;

            $.each(reports, function(index, report) {
                var liEle = '<li><a tapmode onclick="fnOpenReportDetail('+report.id+')";><p class="wz-l">' + report.title + '</p><span class="wz-r">' + report.date + '</span></a></li>';
                $(liEle).appendTo("ul");
            });
        }
    });
}

function fnOpenReportDetail(report_id){
  api.openWin({
      name: 'report_detail',
      url: './report_detail.html',
      pageParam: {
        id:report_id
      }
  });
}
