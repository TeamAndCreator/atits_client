apiready = function() {
    api.parseTapmode();
    var header = $api.byId('aui-header');
    $api.fixStatusBar(header);
    var headerPos = $api.offset(header);
    var body_h = $api.offset($api.dom('body')).h;
    var system_id = api.pageParam.id; //接收manegement——frame页面传递过来的id参数
    api.openFrame({
        name: 'activity',
        url: './activity_detail.html',
        bounces: false,
        rect: {
            x: 0,
            y: headerPos.h,
            w: 'auto',
            h: 'auto'
        },
        pageParam:{
          id:system_id
        }
    })
};

function closeWin() {
    api.closeWin({});
}
