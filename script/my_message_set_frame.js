apiready = function() {
    urlParam1 = param + '/user/verifyPassword';
    urlParam2 = param + '/user/changePassword';

    $("#oldPassword").blur(function() {
        var oldPsw = $("#oldPassword").val();
        $.ajax({
            url : urlParam1,
            type : 'post',
            dataType: 'json',
            data:{
              "userId" : $api.getStorage('userId'),
              "password" : oldPsw,
            },
            success : function(result){
              //console.log(11)
              if(result.code == 100){
                  $("#tip1").html("<font color=\"#87b87f\" size=\"2\"> 密码正确 </font>");
              }
              if(result.code == 200){
                  $("#tip1").html("<font color=\"red\" size=\"2\"> 密码错误 </font>");
              }
            }
        })
    });

    $("#newPassword").blur(function() {
        var num = $("#newPassword").val().length;
        if (num < 6) {
            $("#tip2").html("<font color=\"red\" size=\"2\"> 密码太短</font>");
        } else if (num > 18) {
            $("#tip2").html("<font color=\"red\" size=\"2\"> 密码太长</font>");
        } else {
            $("#tip2").html("<font color=\"#87b87f\" size=\"2\"> 合格 </font>");
        }
    });
    $("#repeatPassword").blur(function() {
        var tmp = $("#newPassword").val();
        var num = $("#repeatPassword").val().length;
        if ($("#repeatPassword").val() != tmp) {
            $("#tip3").html("<font color=\"red\" size=\"2\">  密码错误 </font>");
        } else {
            if (num >= 6 && num <= 18) {
                $("#tip3").html("<font color=\"#87b87f\" size=\"2\"> 合格 </font>");
            } else {
                $("#tip3").html("<font color=\"red\" size=\"2\"> 不合格  </font>");
            }
        }
    });
    $("#saveBtn").click(function() {
        var flag = true;
        var old = $("#oldPassword").val();
        var pass = $("#newPassword").val();
        var pass2 = $("#repeatPassword").val();
        var num1 = $("#newPassword").val().length;
        var num2 = $("#repeatPassword").val().length;
        if (num1 != num2 || num1 < 6 || num2 < 6 || num1 > 18 || num2 > 18 || pass != pass2) {
            flag = false;
        } else {
            flag = true;
        }
        if (flag) {

            $.ajax({
                url : 'http://47.104.26.79:8080/atits_service/user/changePassword',
                type : 'post',
                dataType: 'json',
                async: false,
                traditional: true,
                data:{
                  _method: "put",
                  "userId" : $api.getStorage('userId'),
                  "password" : pass,
                },
                success: function(result) {
                       //console.log(33)
                    if (result.code == 100) {
                      //console.log(44)
                        alert('密码修改成功！')
                        $("#oldPassword").val("");
                        $("#newPassword").val("");
                        $("#repeatPassword").val("");
                        $("#tip1").empty();
                        $("#tip2").empty();
                        $("#tip3").empty();
                        $("#tip4").delay(2000).hide(0);

                    } else {
                        alert('密码修改失败！')
                    }
                }

            });
        } else {
            $("#tip4").show().html("<font color=\"red\" size=\"3\">  密码修改失败!</font>");
        }
    });

    $('#close').click(function(){
        api.openWin({
            name: 'my_message_frame',
            url: './my_message_win.html',

        });

    })
}
