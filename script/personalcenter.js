apiready = function() {

}

// $(".logout").on("click", function() {
//     // alert("123");
//     $.ajax({
//         url: 'http://47.104.26.79:8080/atits_service/login/logout ',
//         type: 'get',
//         dataType: 'json',
//         success: function(result) {
//             if (result.code == 100) {
//               // $api.setStorage('userInfo', 'result');
//               api.confirm({
//                   title: '提示',
//                   msg: '是否退出登录？',
//                   buttons: ['确定', '取消']
//               }, function(ret, err){
//                   if( ret ){
//                     api.openWin({
//                         name: 'login',
//                         url: './login.html',
//                         pageParam: {
//                             name: 'test'
//                         }
//                     });
//                   }else{
//                        alert( JSON.stringify( err ) );
//                   }
//               });
//                 //
//             } else {
//                 alert(result.msg);
//             }
//         }
//     });
// });
function logout() {
    api.confirm({
        title: '提示',
        msg: '是否退出登录',
        buttons: ['确定', '取消']
    }, function(ret, err) {
        if (ret) {
            $api.rmStorage('userInfo');

            api.toast({
                msg: '退出登录成功',
                duration: 2000,
                location: 'bottom'
            });

            api.openWin({
                name: 'login',
                url: './login.html',
                pageParam: {
                    name: 'test'
                }
            });

        } else {
            alert(JSON.stringify(err));
        }
    });

}
