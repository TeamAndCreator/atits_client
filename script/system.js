apiready = function() {
    api.showProgress();
    urlParam = param + '/system/findById';
    $.ajax({
        url: urlParam,
        type: 'get',
        data: {
            'id': 1
        },
        dataType: 'json',
        success: function(result) {
            api.hideProgress();
             //console.log(JSON.stringify(result));
            var system = result.data.system;
            var Ele = '<div class="widget-main">'+system.content+'</div>';
            $(Ele).appendTo("div");
        },
        error : function(){
          alert("获取数据失败！")
        }
    });

}
