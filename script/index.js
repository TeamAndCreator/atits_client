/*
监听返回键，按两次退出，两次之间时间间隔不得长于2秒
*/
var time_count = 0;
//倒计时
function countdown() {
    if (time_count > 0) {
        setTimeout(function() {
            time_count = time_count - 20;
            countdown();
        }, 20);
    }
}

function keybackEventListener() {
    //监听返回
    api.addEventListener({
        name: 'keyback'
    }, function(ret, err) {
        if (time_count == 0) {
            //这里设置了倒计时为2秒
            time_count = 2000;
            api.toast({
                msg: '再按一次退出',
                duration: 2000,
                location: 'bottom'
            });
            countdown();
        } else {
            api.closeWidget({
                silent: true
            });
        }
    });
}


function is_login() { //这是判断是否登陆的
    var uid = $api.getStorage('userId');
    if (uid == null) {
        //关闭frame组
        api.closeFrameGroup({
            name: 'group1'
        });
        //跳转登录页面
        api.openWin({
            name: 'login',
            url: './html/login.html',
            slidBackEnabled: false,
            reload: true,
            animation: {
                type: "none", //动画类型（详见动画类型常量）
                subType: "from_right", //动画子类型（详见动画子类型常量）
                duration: 0
            }
        });
    }
}

//  //清空Storage缓存数据
