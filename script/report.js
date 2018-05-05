apiready = function() {
    urlParam = param + '/report/findAll1';

    $.ajax({
        url: urlParam,
        type: 'get',
        dataType: 'json',
        success: function(result) {
            var reports = result.data.reports;

            $.each(reports, function(index, report) {
                var liEle = '<li><a href=""><p class="wz-l">' + report.title + '</p><span class="wz-r">' + report.date + '</span></a></li>';
                $(liEle).appendTo("ul");
            });
        }
    });
}
