//打开一个新窗口先打开他的win窗口，再到frame
function fnOpenDynamicWin() {
    //alert($api.jsonToStr(userInfo));
    api.openWin({
        name: 'dynamic',
        url: './dynamic_win.html',
        pageParam: {
            name: 'test'
        }
    });
}

function fnOpenActivityWin() {
    //alert($api.jsonToStr(userInfo));
    api.openWin({
        name: 'activity',
        url: './activity_win.html',
        pageParam: {
            name: 'test'
        }
    });
}

function fnOpenReportWin() {
    //alert($api.jsonToStr(userInfo));
    api.openWin({
        name: 'report',
        url: './report_win.html',
        pageParam: {
            name: 'test'
        }
    });
}

function fnOpenRegulationWin() {
    //alert($api.jsonToStr(userInfo));
    api.openWin({
        name: 'regulation',
        url: './regulation_win.html',
        pageParam: {
            name: 'test'
        }
    });
}

function fnOpenHarvestWin() {
    //alert($api.jsonToStr(userInfo));
    api.openWin({
        name: 'harvest',
        url: './harvest_win.html',
        pageParam: {
            name: 'test'
        }
    });
}

function fnOpenNoticeWin() {
    //alert($api.jsonToStr(userInfo));
    api.openWin({
        name: 'notice',
        url: './notice_win.html',
        pageParam: {
            name: 'test'
        }
    });
}
