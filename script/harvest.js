apiready = function() {
    urlParam = param + '/harvest/findAll1';

    $.ajax({
        url: urlParam,
        type: 'get',
        dataType: 'json',
        success: function(result) {
            var harvests = result.data.harvests;

            $.each(harvests, function(index, harvest) {
                var liEle = '<li><a href=""><p class="wz-l">' + harvest.title + '</p><span class="wz-r">' + harvest.date + '</span></a></li>';
                $(liEle).appendTo("ul");
            });
        }
    });
}
