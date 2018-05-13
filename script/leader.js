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
                var liEle = '<li><a tapmode onclick="fnOpenLeaderDetail(' + system.id + ')";><p class="wz-l">' + system.systemName + '</p></a></li>';
                $(liEle).appendTo("ul");
            });
        }
    });
}

function fnOpenLeaderDetail(system_id){
  api.openWin({
      name: 'leader_win1',
      url: './leader_win1.html',
      pageParam: {
        id:system_id
      }
  });
}
