apiready = function() {
    urlParam = param + '/document/findAll1';

    $.ajax({
        url: urlParam,
        type: 'get',
        dataType: 'json',
        success: function(result) {
            var documents = result.data.documents;

            $.each(documents, function(index, document) {
                var liEle = '<li><a href=""><p class="wz-l">' + document.title + '</p><span class="wz-r">' + document.date + '</span></a></li>';
                $(liEle).appendTo("ul");
            });
        }
    });
}
