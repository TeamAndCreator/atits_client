apiready = function () {
    var my_task_id = api.pageParam.id;
    api.showProgress(); //显示加载进度框
    $.ajax({
        crossDomain: true,
        url: param + "/subTask/findById",
        dataType: "json",
        data: {"id": my_task_id},
        type: "get",
        async: false,
        success: function (result) {
            api.hideProgress(); //隐藏加载进度框
          // console.log(JSON.stringify(result));
            if(JSON.stringify(result.data.subTask) == null ){
                // console.log(JSON.stringify(result.data.task));
            }else{
             $('#title').text(result.data.subTask.title);
             $('#systemName').text(result.data.subTask.fatherTask.system.systemName);
             $('#startDate').text(result.data.subTask.startTime);
             $('#endDate').text(result.data.subTask.endTime);
             $('#user').text(result.data.subTask.bearer.profile.name);
             $('#date').text(result.data.subTask.date);
             $('#content').html(result.data.subTask.content);
           }

        }
    });
}
