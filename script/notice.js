apiready = function() {
    urlParam = param + '/notice/findAll1';

    $.ajax({
        url: urlParam,
        type: 'get',
        dataType: 'json',
        success: function(result) {
            var notices = result.data.notices;

            $.each(notices, function(index, notice) {
                var Ele = '<li><a href=""><p class="wz-l">' + notice.title + '</p><span class="wz-r">' + notice.date + '</span></a></li>';
                $(Ele).appendTo("ul");
            });
        }
    });
}
