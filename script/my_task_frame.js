apiready = function(){
        api.showProgress(); //显示加载进度框
        var ztasks1;
        $.ajax({
            url: param + "/subTask/findBySystemId",
            data: {
              "systemId": $api.getStorage('systemId')
            },
            dataType: "json",
            type: "get",
            async: false,
            success: function (result) {
                api.hideProgress(); //隐藏加载进度框
              //console.log(JSON.stringify(result))
                var htmlStr = '';
                 for(var i = 0; i < result.data.subTasks.length;i ++ ){
                   htmlStr += '<li class="aui-list-item aui-list-item-arrow" tapmode onclick="fnOpenActivityDetail('+JSON.stringify(result.data.subTasks[i].id)+')";>任务名称：' +JSON.stringify(result.data.subTasks[i].title).replace(/\"/g, "")+ '</li>';
                 }
                 $(".aui-list").append(htmlStr);
            }
        });

}

function fnOpenActivityDetail(my_task_id){
   api.openWin({
      name: 'my_task_detail',
      url: './my_task_detail_win.html',
      pageParam: {
        id:my_task_id
      }
  });


}
