apiready = function() {

    urlParam = param + '/system/findAll1';

    $.ajax({
        url: urlParam,
        type: 'get',
        dataType: 'json',
        success: function(result) {
            // console.log(JSON.stringify(result));
            var systems = result.data.systems;

            $.each(systems, function(index, system) {
                var liEle = '<li><a tapmode onclick="fnOpenManagementDetail(' + system.id + ')";><p class="wz-l">' + system.systemName + '</p></a></li>';
                $(liEle).appendTo("ul");
            });
        }
    });
}

function fnOpenManagementDetail(system_id){
  api.openWin({
      name: 'management_win1',
      url: './management_win1.html',
      pageParam: {
        id:system_id
      }
  });
}
