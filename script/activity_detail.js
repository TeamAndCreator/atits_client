apiready = function() {

    var activity_id = api.pageParam.id;
    urlParam = param + '/activity/findById';
    api.showProgress(); //显示加载进度框
    $.ajax({
        url: urlParam,
        type: 'get',
        data:{
          'id':activity_id
        },
        dataType: 'json',
        success: function(result) {
            // console.log(JSON.stringify(result));
            api.hideProgress(); //隐藏加载进度框
            var activity = result.data.activity;
            var Ele = '<h2>' + activity.title + '</h2><h5><span>来源:' + activity.system.systemName + '</span>&nbsp;&nbsp;<span>编辑人：'+activity.user.profile.name+'</span> &nbsp;&nbsp;<span>时间：'+activity.date+'</span></h5><hr/><div class="widget-main">'+activity.content+'</div>';
            $(Ele).appendTo("div");
        },
        error : function(){
          alert("获取数据失败！")
        }
    });

}
