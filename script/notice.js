apiready = function() {
    urlParam = param + '/notice/findAll1';

    $.ajax({
        url: urlParam,
        type: 'get',
        dataType: 'json',
        success: function(result) {
            var notices = result.data.notices;

            $.each(notices, function(index, notice) {
                var Ele = '<li><a tapmode onclick="fnOpenNoticeDetail('+notice.id+')";><p class="wz-l">' + notice.title + '</p><span class="wz-r">' + notice.date + '</span></a></li>';
                $(Ele).appendTo("ul");
            });
        }
    });
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
