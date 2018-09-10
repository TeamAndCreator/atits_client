apiready = function() {
    api.showProgress();
    var station_id = api.pageParam.id;
    urlParam = param + '/station/findById';
    $.ajax({
        url: urlParam,
        type: 'get',
        data: {
            'id': station_id
        },
        dataType: 'json',
        success: function(result) {
            api.hideProgress();
            //console.log(JSON.stringify(result));
            var stations = result.data;
            var Ele = '<h1>' + stations.station.staName + '</h1><div><h3>基本内容展示：</h3><ul><li><font>建设依托单位：</font></li><div style="display:block;padding-left:15px;">'+stations.station.company+'</div>';
            Ele += '<li><font>所属体系：</font></li><div style="display:block;padding-left:15px;">'+stations.station.system.systemName+'</div><li><font>综合试验站站长：</font></li><div style="display:block;padding-left:15px;">'+stations.station_master+'</div>';
            Ele += '</div><li><font>基本信息：</font></li><div style="display:block;padding-left:15px;">'+stations.station.content+'</ul></div>';

            $(Ele).appendTo("div");
        },
        error : function(){
          alert("获取数据失败！")
        }
    });

}
