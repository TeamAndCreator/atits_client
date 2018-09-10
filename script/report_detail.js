apiready = function() {
    api.showProgress();
    var report_id = api.pageParam.id;
    urlParam = param + '/report/findById';
    $.ajax({
        url: urlParam,
        type: 'get',
        data:{
          'id':report_id
        },
        dataType: 'json',
        success: function(result) {
            api.hideProgress();
            // console.log(JSON.stringify(result));
            var report = result.data.report;
            var Ele = '<h2>' + report.title + '</h2><h5><span>来源:' + report.system.systemName + '</span>&nbsp;&nbsp;<span>编辑人:'+report.user.profile.name+'</span> &nbsp;&nbsp;<span>时间:'+report.date+'</span></h5><hr/><div class="widget-main">'+report.content+'</div>';
            $(Ele).appendTo("div");

        },
        error : function(){
          alert("获取数据失败！")
        }
    });

}
