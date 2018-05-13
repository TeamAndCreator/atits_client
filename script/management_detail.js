apiready = function() {

    var system_id = api.pageParam.id;
    urlParam = param + '/system/findById';

    $.ajax({
        url: urlParam,
        type: 'get',
        data: {
            'id': system_id
        },
        dataType: 'json',
        success: function(result) {
            // console.log(JSON.stringify(result));
            var system = result.data.system;
            var Ele = '<h2>'+system.systemName+'</h2><div class="widget-main"><p>&nbsp;&nbsp;'+system.content+'</p></div>';

            $(Ele).appendTo("div");

        }
    });

}
