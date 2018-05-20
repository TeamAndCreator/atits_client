apiready = function() {
    urlParam = param + '/dynamic/findAll1';

    $.ajax({
        url: urlParam,
        type: 'get',
        dataType: 'json',
        success: function(result) {
            var dynamics = result.data.dynamics;

            $.each(dynamics, function(index, dynamic) {
                var Ele = '<li><a tapmode onclick="fnOpenDynamicDetail('+dynamic.id+')";><p class="wz-l">' + dynamic.title + '</p><span class="wz-r">' + dynamic.date + '</span></a></li>';
                $(Ele).appendTo("ul");
            });
        }
    });


}

function fnOpenDynamicDetail(dynamic_id){
  api.openWin({
      name: 'dynamic_detail',
      url: './dynamic_detail_win.html',
      pageParam: {
        name:'test',
        id:dynamic_id
      }
  });
}
