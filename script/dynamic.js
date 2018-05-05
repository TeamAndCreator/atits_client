apiready = function() {
    urlParam = param + '/dynamic/findAll1';

    $.ajax({
        url: urlParam,
        type: 'get',
        dataType: 'json',
        success: function(result) {
            var dynamics = result.data.dynamics;

            $.each(dynamics, function(index, dynamic) {
                var Ele = '<li><a href=""><p class="wz-l">' + dynamic.title + '</p><span class="wz-r">' + dynamic.date + '</span></a></li>';
                $(Ele).appendTo("ul");
            });
        }
    });
}
