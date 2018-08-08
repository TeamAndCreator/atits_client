apiready = function() {

    urlParam = param + '/profile/';

   var psw = $api.getStorage('password');
    console.log(psw);
    $("#oldPassword").blur(function() {
        var oldPsw = $("#oldPassword").val();
        if ( oldPsw == psw ) {
            $("#tip1").html("<font color=\"#87b87f\" size=\"2\"> 密码正确 </font>");
        } else {
            $("#tip1").html("<font color=\"red\" size=\"2\"> 密码错误 </font>");
        }
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
                $("#tip3").html("<font color=\"#87b87f\" size=\"2\"> 密码正确 </font>");
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
                url: urlParam,
                data: '',
                success: function(result) {
                    if (result.code == 1) {
                        $("#tip4").show().html("<font color=\"#87b87f\" size=\"3\"> 密码修改成功!</font>");
                        $("#oldPassword").val("");
                        $("#newPassword").val("");
                        $("#repeatPassword").val("");
                        $("#tip1").empty();
                        $("#tip2").empty();
                        $("#tip3").empty();
                        $("#tip4").delay(2000).hide(0);
                    } else {
                        $("#tip4").show().html("<font color=\"red\" size=\"3\"> 密码修改失败! </font>");
                    }
                }
            });
        } else {
            $("#tip4").show().html("<font color=\"red\" size=\"3\">  密码修改失败!</font>");
        }
    });
}
