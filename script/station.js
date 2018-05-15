apiready = function() {

    urlParam = param + '/station/findAll';

    $.ajax({
        url: urlParam,
        type: 'get',
        dataType: 'json',
        success: function(result) {
            // console.log(JSON.stringify(result));
            var station = result.data.Station;

            $.each(station, function(index, station) {
                var liEle = '<li><a tapmode onclick="fnOpenStationDetail(' + station.id + ')";><p class="wz-l">' + station.staName + '</p><span>('+station.system.systemName+')</span></a></li>';
                $(liEle).appendTo("ul");
            });
        }
    });
}

function fnOpenStationDetail(station_id){
  api.openWin({
      name: 'station_win1',
      url: './station_win1.html',
      pageParam: {
        id:station_id
      }
  });
}
