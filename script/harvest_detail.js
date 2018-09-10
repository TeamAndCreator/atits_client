apiready = function() {
    api.showProgress(); //显示加载进度框
    var harvest_id = api.pageParam.id;
    urlParam = param + '/harvest/findById';
    $.ajax({
        url: urlParam,
        type: 'get',
        data:{
          'id':harvest_id
        },
        dataType: 'json',
        success: function(result) {
            api.hideProgress();
            // console.log(JSON.stringify(result));
            var harvest = result.data.harvest;
            var Ele = '<h2>' + harvest.title + '</h2><h5><span>来源:' + harvest.system.systemName + '</span>&nbsp;&nbsp;<span>编辑人:'+harvest.user.profile.name+'</span> &nbsp;&nbsp;<span>时间:'+harvest.date+'</span></h5><hr/><div class="widget-main">'+harvest.content+'</div>';
            $(Ele).appendTo("div");
        },
        error : function(){
          alert("获取数据失败！")
        }
    });

}
