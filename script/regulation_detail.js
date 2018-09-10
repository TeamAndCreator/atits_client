apiready = function() {
    api.showProgress();
    var regulation_id = api.pageParam.id;
    urlParam = param + '/regulation/findById';

    $.ajax({
        url: urlParam,
        type: 'get',
        data:{
          'id':regulation_id
        },
        dataType: 'json',
        success: function(result) {
            api.hideProgress();
            // console.log(JSON.stringify(result));
            var regulation = result.data.regulation;
            var Ele = '<h2>' + regulation.title + '</h2><h5><span>来源:' + regulation.system.systemName + '</span>&nbsp;&nbsp;<span>编辑人:'+regulation.user.profile.name+'</span> &nbsp;&nbsp;<span>时间:'+regulation.date+'</span></h5><hr/><div class="widget-main">'+regulation.content+'</div>';
            $(Ele).appendTo("div");
        },
        error : function(){
          alert("获取数据失败！")
        }
    });

}
