apiready = function() {
    api.showProgress();
    var system_id = api.pageParam.id;
    urlParam = param + '/system/findUsers';
    $.ajax({
        url: urlParam,
        type: 'get',
        data: {
            'systemId': system_id
        },
        dataType: 'json',
        success: function(result) {
            api.hideProgress(); 
            // console.log(JSON.stringify(result));
            var systemuser = result.data;
            var Ele = '<div class="row"><h3>首席专家</h3><div class = "row well"><h4>' + systemuser.chief + '</h4></div></div>';
            Ele += '<div class="row"><h3>岗位专家(共' + systemuser.job_expert.length + '人)</h3><div class = "row well"><h4>';
            for (var i = 0; i < systemuser.job_expert.length; i++) {
                Ele += systemuser.job_expert[i]+'&nbsp;&nbsp';
            }
            Ele += '</h4></div></div>'
            Ele += '<div class="row"><h3>综合试验站站长(共' + systemuser.station_master.length + '人)</h3><div class = "row well"><h4>';
            for (var i = 0; i < systemuser.station_master.length; i++) {
                Ele += systemuser.station_master[i]+'&nbsp;&nbsp';
            }
            Ele += '</h4></div></div>'

            $(Ele).appendTo("div");

        },
        error : function(){
          alert("获取数据失败！")
        }
    });

}
