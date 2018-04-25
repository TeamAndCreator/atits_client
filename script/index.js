// api.addEventListener({ //监听返回键
//     name: 'keyback'
// }, function(ret, err) {
//     alert('按了返回键');
// });

function is_login() { //这是判断是否登陆的
    var uid = $api.getStorage('uid');
    if (uid == null) {
        //关闭frame组
        api.closeFrameGroup({
            name: 'group1'
        });
        //跳转登录页面
        api.openWin({
            name: 'login',
            url: 'html/login.html',
            slidBackEnabled: false,
            reload: true,
            animation: {
                type: "none", //动画类型（详见动画类型常量）
                subType: "from_right", //动画子类型（详见动画子类型常量）
                duration: 0
            }
        })
    }
}

// $api.clearStorage(); //清空Storage缓存数据
