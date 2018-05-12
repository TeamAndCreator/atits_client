apiready = function() {

    urlParam = param + '/system/findById';

    $.ajax({
        url: urlParam,
        type: 'get',
        data: {
            'id': 1
        },
        dataType: 'json',
        success: function(result) {
            // console.log(JSON.stringify(result));
            var system = result.data.system;
            var Ele = '<div class="widget-main"><p>&nbsp;&nbsp;'+system.content+'</p></div>';

            $(Ele).appendTo("div");

        }
    });

}
