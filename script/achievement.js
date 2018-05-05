apiready = function() {
    urlParam = param + '/achievement/findAll1';

    $.ajax({
        url: urlParam,
        type: 'get',
        dataType: 'json',
        success: function(result) {
            var achievements = result.data.achievements;

            $.each(achievements, function(index, achievement) {
                var liEle = '<li><a href=""><p class="wz-l">' + achievement.title + '</p><span class="wz-r">' + achievement.date + '</span></a></li>';
                $(liEle).appendTo("ul");
            });
        }
    });
}
