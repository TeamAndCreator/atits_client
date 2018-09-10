



//轮播图
var slide = new auiSlide({
    container: document.getElementById("aui-slide"),
    // "width":300,
    // "height": 235,
    // "speed": 300,
    // "pageShow": true,
    // "pageStyle": 'dot',
    // "loop": true,
    // 'dotPosition': 'center',
     interval: 3000,   //自动播放间隔时间 单位ms
     autoplay: true,   // 是否自动播放
     indicator: true,  // 是否显示指示器
    circular: true,  // 是否采用衔接滑动
    currentPage: currentFun
})

function currentFun(index) {
    return (index) ;
 }




//打开一个新窗口先打开他的win窗口，再到frame
function fnOpenSystemWin() {
    //alert($api.jsonToStr(userInfo));
    api.openWin({
        name: 'system',
        url: './system_win.html',
        pageParam: {
            name: 'test'
        }
    });
}

function fnOpenLeaderWin() {
    //alert($api.jsonToStr(userInfo));
    api.openWin({
        name: 'leader',
        url: './leader_win.html',
        pageParam: {
            name: 'test'
        }
    });
}

function fnOpenLaboratoryWin() {
    //alert($api.jsonToStr(userInfo));
    api.openWin({
        name: 'laboratory',
        url: './laboratory_win.html',
        pageParam: {
            name: 'test'
        }
    });
}

function fnOpenStationWin() {
    //alert($api.jsonToStr(userInfo));
    api.openWin({
        name: 'station',
        url: './station_win.html',
        pageParam: {
            name: 'test'
        }
    });
}

function fnOpenManagementWin() {
    //alert($api.jsonToStr(userInfo));
    api.openWin({
        name: 'management',
        url: './management_win.html',
        pageParam: {
            name: 'test'
        }
    });
}
