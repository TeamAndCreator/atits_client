apiready = function () {
    var my_task_id = api.pageParam.id;
    api.showProgress(); //显示加载进度框
    $.ajax({
        crossDomain: true,
        url: param + "/task/findById",
        dataType: "json",
        data: {"id": my_task_id},
        type: "get",
        async: false,
        success: function (result) {
            api.hideProgress(); //隐藏加载进度框
            //console.log(JSON.stringify(result.data.task));
            if(JSON.stringify(result.data.task) = null ){

            }else{
             $('#title').text(JSON.stringify(result.data.task.title));
             $('#systemName').text(JSON.stringify(result.data.task.title.system.systemName));
             $('#startDate').text(JSON.stringify(result.data.task.title.stratTime));
             $('#endDate').text(JSON.stringify(result.data.task.endTime));
             $('#user').text(JSON.stringify(result.data.task.title.user.profile.name));
             $('#date').text(JSON.stringify(result.data.task.title.date));
             $('#content').html(JSON.stringify(result.data.task.content));
           }

        }
    });
}
