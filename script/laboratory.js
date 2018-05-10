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
                var liEle = '<li><a tapmode onclick="fnOpenLaboratoryDetail(' + system.id + ')";><p class="wz-l">' + system.systemName + '</p></a></li>';
                $(liEle).appendTo("ul");
            });
        }
    });
}

function fnOpenLaboratoryDetail(system_id){
  api.openWin({
      name: 'laboratory_detail',
      url: './laboratory_detail.html',
      pageParam: {
        id:system_id
      }
  });
}
