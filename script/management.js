apiready = function() {
    api.showProgress();
    urlParam = param + '/system/findAll1';
    $.ajax({
        url: urlParam,
        type: 'get',
        dataType: 'json',
        success: function(result) {
            api.hideProgress(); 
            // console.log(JSON.stringify(result));
            var systems = result.data.systems;
            $.each(systems, function(index, system) {
                var liEle = '<li><a tapmode onclick="fnOpenManagementDetail(' + system.id + ')";><p class="wz-l">' + system.systemName + '</p></a></li>';
                $(liEle).appendTo("ul");
            });
        },
        error : function(){
          alert("获取数据失败！")
        }
    });
}

function fnOpenManagementDetail(system_id){
  api.openWin({
      name: 'management_win1',
      url: './management_win1.html',
      pageParam: {
        id:system_id
      }
  });
}
