apiready = function() {
    api.showProgress();
    var notice_id = api.pageParam.id;
    urlParam = param + '/notice/findById';

    $.ajax({
        url: urlParam,
        type: 'get',
        data:{
          'id':notice_id
        },
        dataType: 'json',
        success: function(result) {
            api.hideProgress();
            // console.log(JSON.stringify(result));
            var notice = result.data.notice;
            var Ele = '<h2>' + notice.title + '</h2><h5><span>来源:' + notice.system.systemName + '</span>&nbsp;&nbsp;<span>编辑人:'+notice.user.profile.name+'</span> &nbsp;&nbsp;<span>时间:'+notice.date+'</span></h5><hr/><div class="widget-main">'+notice.content+'</div>';
            $(Ele).appendTo("div");
        },
        error : function(){
          alert("获取数据失败！")
        }
    });

}
