apiready = function() {
    urlParam = param + '/harvest/findAll1';

    $.ajax({
        url: urlParam,
        type: 'get',
        dataType: 'json',
        success: function(result) {
            var harvests = result.data.harvests;

            $.each(harvests, function(index, harvest) {
                var liEle = '<li><a tapmode onclick="fnOpenHarvestDetail('+harvest.id+')";><p class="wz-l">' + harvest.title + '</p><span class="wz-r">' + harvest.date + '</span></a></li>';
                $(liEle).appendTo("ul");
            });
        }
    });
}

function fnOpenHarvestDetail(harvest_id){
  api.openWin({
      name: 'harvest_detail',
      url: './harvest_detail.html',
      pageParam: {
        id:harvest_id
      }
  });
}
