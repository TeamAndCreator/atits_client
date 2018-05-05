apiready = function() {
    urlParam = param + '/regulation/findAll1';

    $.ajax({
        url: urlParam,
        type: 'get',
        dataType: 'json',
        success: function(result) {
            var regulations = result.data.regulations;

            $.each(regulations, function(index, regulation) {
                var Ele = '<li><a href=""><p class="wz-l">' + regulation.title + '</p><span class="wz-r">' + regulation.date + '</span></a></li>';
                $(Ele).appendTo("ul");
            });
        }
    });
}
