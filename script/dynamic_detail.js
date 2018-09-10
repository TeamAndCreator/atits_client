  apiready = function() {
      api.showProgress(); //显示加载进度框
      var dynamic_id = api.pageParam.id;
      urlParam = param + '/dynamic/findById';
      $.ajax({
          url: urlParam,
          type: 'get',
          data: {
              'id': dynamic_id
          },
          dataType: 'json',
          success: function(result) {
              api.hideProgress(); //显示加载进度框
              // console.log(JSON.stringify(result));
              var dynamic = result.data.dynamic;
              var Ele = '<h2>' + dynamic.title + '</h2><h5><span>来源:' + dynamic.system.systemName + '</span>&nbsp;&nbsp;<span>编辑人：' + dynamic.user.profile.name + '</span> &nbsp;&nbsp;<span>时间：' + dynamic.date + '</span></h5><hr/><div class="widget-main">' + dynamic.content + '</div>';
              $(Ele).appendTo("div");
          },
          error : function(){
            alert("获取数据失败！")
          }
      });
  }
