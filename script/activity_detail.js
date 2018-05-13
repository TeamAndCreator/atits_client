apiready = function() {

    var activity_id = api.pageParam.id;
    urlParam = param + '/activity/findById';

    $.ajax({
        url: urlParam,
        type: 'get',
        data:{
          'id':activity_id
        },
        dataType: 'json',
        success: function(result) {
            // console.log(JSON.stringify(result));
            var activity = result.data.activity;
            var Ele = '<h2>' + activity.title + '</h2><h5><span>来源:' + activity.system.systemName + '</span>&nbsp;&nbsp;<span>编辑人：'+activity.user.profile.name+'</span> &nbsp;&nbsp;<span>时间：'+activity.date+'</span></h5><hr/><div class="widget-main">'+activity.content+'</div>';
            $(Ele).appendTo("div");

        }
    });

}
