apiready = function() {
    api.showProgress();
  //根据不同角色，获取不同数据

      if ($api.getStorage('systemId') == 1) {
          $.ajax({
              crossDomain: true,
              url: param + "/notice/findForTXB",
              dataType: "json",
              data:{"systemId":$api.getStorage('systemId')},
              type: "get",
              async: false,
              success: function (result) {
                  api.hideProgress();
                  var notices = result.data.notices;
                  $.each(notices, function(index, notice){
                      var liEle = '<li><a tapmode onclick="fnOpenNoticeDetail('+notice.id+')";><p class="wz-l">' + notice.title + '</p><span class="wz-r">' + notice.date + '</span></a></li>';
                      $(liEle).appendTo("ul");
                  });
              },
              error : function(){
                alert("获取数据失败！")
              }

          });
      } else if ($api.getStorage('rolesId').indexOf(3) != -1) {

          $.ajax({
              crossDomain: true,
              url: param + "/notice/findForSX",
              dataType: "json",
              data:{"systemId":$api.getStorage('systemId')},
              type: "get",
              async: false,
              success: function (result) {
                api.hideProgress();
                var notices = result.data.notices;
                $.each(notices, function(index, notice){
                    var liEle = '<li><a tapmode onclick="fnOpenNoticeDetail('+notice.id+')";><p class="wz-l">' + notice.title + '</p><span class="wz-r">' + notice.date + '</span></a></li>';
                    $(liEle).appendTo("ul");
                });
              },
              error: function(){
                alert("获取数据失败！")
              }

          });
      } else {
          $.ajax({
              crossDomain: true,
              url: param + "//notice/findFor",
              dataType: "json",
              data:{"systemId":$api.getStorage('systemId')},
              type: "get",
              async: false,
              success: function (result) {
                api.hideProgress();
                var notices = result.data.notices;
                $.each(notices, function(index, notice) {
                  var liEle = '<li><a tapmode onclick="fnOpenNoticeDetail('+notice.id+')";><p class="wz-l">' + notice.title + '</p><span class="wz-r">' + notice.date + '</span></a></li>';
                  $(liEle).appendTo("ul");
                });
              },
              error : function(){
                alert("获取数据失败！")
              }

          });
      }

}

function fnOpenNoticeDetail(notice_id){
  api.openWin({
      name: 'notice_detail',
      url: './notice_detail_win.html',
      pageParam: {
        id:notice_id
      }
  });
}
