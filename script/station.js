apiready = function() {
    api.showProgress();
    var systemId = $api.getStorage('systemId');  
    urlParam = param + '/station/findAll1';
    $.ajax({
        url: urlParam,
        type: 'get',
        dataType: 'json',
        data:{
          "systemId":systemId
        },
        success: function(result) {
            api.hideProgress();
            //console.log(JSON.stringify(result));

            for(var i = 0;i<JSON.stringify(result.data.stations.length);i++){
               var liEle = '<li><a tapmode onclick="fnOpenStationDetail(' + JSON.stringify(result.data.stations[i].station.id) + ')\
                          ";><p class="wz-l">' + JSON.stringify(result.data.stations[i].station.staName).replace(/\"/g, "")+ '</p><span>('+JSON.stringify(result.data.stations[i].station.system.systemName).replace(/\"/g, "")+')</span></a></li>';
               $(liEle).appendTo(".nav");
           }
        },
        error : function(){
          alert("获取数据失败！")
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
