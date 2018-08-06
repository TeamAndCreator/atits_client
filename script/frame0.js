var slide = new auiSlide({
    container: document.getElementById("aui-slide"),
    // "width":300,
    "height": 230,
    "speed": 300,
    "pageShow": true,
    "pageStyle": 'dot',
    "loop": true,
    'dotPosition': 'center',
    currentPage: currentFun
})

function currentFun(index) {
//     console.log(index);
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
