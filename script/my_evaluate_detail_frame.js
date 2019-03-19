var userRole =  $api.getStorage('userRole');
apiready = function(){
  api.addEventListener({name: 'viewappear'}, function(ret, err){
    //根据role获取相应的打分详情
    var status = $api.getStorage('status');
    $("input[name='sum_score']").attr("disabled","disabled")
    if(status == 1){
      // 首席、副首席专家考评
      $("input[name='a7']").attr('oninput', 'if(value<0)value=0');
      $("input[name='a7']").prev().attr('onclick','this.form.a7.value--;if(this.form.a7.value<0){this.form.a7.value = 0}')
      $("input[name='a7']").next().attr('onclick','this.form.a7.value++;if(this.form.a7.value<0){this.form.a7.value = 0}')
      if (userRole == 1 || userRole == 2) {
        $("#title1").text("1．团队建设情况（15分）");
        if (userRole == 2)
          $("#title1").text("1．协助首席带领团队建设情况（15）");
        $("#title2").text("2．支撑产业发展情况（50分）");
        $("#title3").text("3．应急事件处置及参与重大活动情况（10分）");
        $("#title4").text("4．经费使用情况（10分）");
        $("#title5").text("5．宣传推动情况（10分）");
        $("#title6").text("6．对接协作情况（5分）");

        $("input[name='a1']").attr('oninput', 'if(value>15)value=15;if(value<0)value=0');
        $("input[name='a2']").attr('oninput', 'if(value>50)value=50;if(value<0)value=0');
        $("input[name='a3']").attr('oninput', 'if(value>10)value=10;if(value<0)value=0');
        $("input[name='a4']").attr('oninput', 'if(value>10)value=10;if(value<0)value=0');
        $("input[name='a5']").attr('oninput', 'if(value>10)value=10;if(value<0)value=0');
        $("input[name='a6']").attr('oninput', 'if(value>5)value=5;if(value<0)value=0');


        $("input[name='a1']").prev().attr('onclick','this.form.a1.value--;if(this.form.a1.value<0){this.form.a1.value = 0}else if(this.form.a1.value>15){this.form.a1.value=15}')
        $("input[name='a1']").next().attr('onclick','this.form.a1.value++;if(this.form.a1.value<0){this.form.a1.value = 0}else if(this.form.a1.value>15){this.form.a1.value=15}')

        $("input[name='a2']").prev().attr('onclick','this.form.a2.value--;if(this.form.a2.value<0){this.form.a2.value = 0}else if(this.form.a2.value>50){this.form.a2.value=50}')
        $("input[name='a2']").next().attr('onclick','this.form.a2.value++;if(this.form.a2.value<0){this.form.a2.value = 0}else if(this.form.a2.value>50){this.form.a2.value=50}')

        $("input[name='a3']").prev().attr('onclick','this.form.a3.value--;if(this.form.a3.value<0){this.form.a3.value = 0}else if(this.form.a3.value>10){this.form.a3.value=10}')
        $("input[name='a3']").next().attr('onclick','this.form.a3.value++;if(this.form.a3.value<0){this.form.a3.value = 0}else if(this.form.a3.value>10){this.form.a3.value=10}')

        $("input[name='a4']").prev().attr('onclick','this.form.a4.value--;if(this.form.a4.value<0){this.form.a4.value = 0}else if(this.form.a4.value>10){this.form.a4.value=10}')
        $("input[name='a4']").next().attr('onclick','this.form.a4.value++;if(this.form.a4.value<0){this.form.a4.value = 0}else if(this.form.a4.value>10){this.form.a4.value=10}')

        $("input[name='a5']").prev().attr('onclick','this.form.a5.value--;if(this.form.a5.value<0){this.form.a5.value = 0}else if(this.form.a5.value>10){this.form.a5.value=10}')
        $("input[name='a5']").next().attr('onclick','this.form.a5.value++;if(this.form.a5.value<0){this.form.a5.value = 0}else if(this.form.a5.value>10){this.form.a5.value=10}')

        $("input[name='a6']").prev().attr('onclick','this.form.a6.value--;if(this.form.a6.value<0){this.form.a6.value = 0}else if(this.form.a6.value>5){this.form.a6.value=5}')
        $("input[name='a6']").next().attr('onclick','this.form.a6.value++;if(this.form.a6.value<0){this.form.a6.value = 0}else if(this.form.a6.value>5){this.form.a6.value=5}')


     } else if (userRole == 3) {
        //岗位专家考评
        $("#title1").text("1．任务完成情况（50分）");
        $("#title2").text("2．遵规守纪情况（20分）");
        $("#title3").text("3．经费使用情况（10分）");
        $("#title4").text("4．宣传推动情况（10分）");
        $("#title5").text("5．其他（10分）");
        $("#last_li").css("display","none")
        $("input[name='a1']").attr('oninput', 'if(value>50)value=50;if(value<0)value=0');
        $("input[name='a2']").attr('oninput', 'if(value>20)value=20;if(value<0)value=0');
        $("input[name='a3']").attr('oninput', 'if(value>10)value=10;if(value<0)value=0');
        $("input[name='a4']").attr('oninput', 'if(value>10)value=10;if(value<0)value=0');
        $("input[name='a5']").attr('oninput', 'if(value>10)value=10;if(value<0)value=0');

         //设置加减号
        $("input[name='a1']").prev().attr('onclick','this.form.a1.value--;if(this.form.a1.value<0){this.form.a1.value = 0}else if(this.form.a1.value>50){this.form.a1.value=50}')
        $("input[name='a1']").next().attr('onclick','this.form.a1.value++;if(this.form.a1.value<0){this.form.a1.value = 0}else if(this.form.a1.value>50){this.form.a1.value=50}')

        $("input[name='a2']").prev().attr('onclick','this.form.a2.value--;if(this.form.a2.value<0){this.form.a2.value = 0}else if(this.form.a2.value>20){this.form.a2.value=20}')
        $("input[name='a2']").next().attr('onclick','this.form.a2.value++;if(this.form.a2.value<0){this.form.a2.value = 0}else if(this.form.a2.value>20){this.form.a2.value=20}')

        $("input[name='a3']").prev().attr('onclick','this.form.a3.value--;if(this.form.a3.value<0){this.form.a3.value = 0}else if(this.form.a3.value>10){this.form.a3.value=10}')
        $("input[name='a3']").next().attr('onclick','this.form.a3.value++;if(this.form.a3.value<0){this.form.a3.value = 0}else if(this.form.a3.value>10){this.form.a3.value=10}')

        $("input[name='a4']").prev().attr('onclick','this.form.a4.value--;if(this.form.a4.value<0){this.form.a4.value = 0}else if(this.form.a4.value>10){this.form.a4.value=10}')
        $("input[name='a4']").next().attr('onclick','this.form.a4.value++;if(this.form.a4.value<0){this.form.a4.value = 0}else if(this.form.a4.value>10){this.form.a4.value=10}')

        $("input[name='a5']").prev().attr('onclick','this.form.a5.value--;if(this.form.a5.value<0){this.form.a5.value = 0}else if(this.form.a5.value>10){this.form.a5.value=10}')
        $("input[name='a5']").next().attr('onclick','this.form.a5.value++;if(this.form.a5.value<0){this.form.a5.value = 0}else if(this.form.a5.value>10){this.form.a5.value=10}')

      } else if (userRole == 4) {
        //试验站站长考评
         $("#title1").text("1．任务完成情况（50分）");
         $("#title2").text("2．遵规守纪情况（20分）");
         $("#title3").text("3．经费使用情况（10分）");
         $("#title4").text("4．宣传推动情况（10分）");
         $("#title5").text("5．争取支持情况（5分）");
         $("#title6").text("6．其他（5分）");
         $("input[name='a1']").attr('oninput', 'if(value>50)value=50;if(value<0)value=0');
         $("input[name='a2']").attr('oninput', 'if(value>20)value=20;if(value<0)value=0');
         $("input[name='a3']").attr('oninput', 'if(value>10)value=10;if(value<0)value=0');
         $("input[name='a4']").attr('oninput', 'if(value>10)value=10;if(value<0)value=0');
         $("input[name='a5']").attr('oninput', 'if(value>5)value=5;if(value<0)value=0');
         $("input[name='a6']").attr('oninput', 'if(value>5)value=5;if(value<0)value=0');

         $("input[name='a1']").prev().attr('onclick','this.form.a1.value--;if(this.form.a1.value<0){this.form.a1.value = 0}else if(this.form.a1.value>50){this.form.a1.value=50}')
         $("input[name='a1']").next().attr('onclick','this.form.a1.value++;if(this.form.a1.value<0){this.form.a1.value = 0}else if(this.form.a1.value>50){this.form.a1.value=50}')

         $("input[name='a2']").prev().attr('onclick','this.form.a2.value--;if(this.form.a2.value<0){this.form.a2.value = 0}else if(this.form.a2.value>20){this.form.a2.value=20}')
         $("input[name='a2']").next().attr('onclick','this.form.a2.value++;if(this.form.a2.value<0){this.form.a2.value = 0}else if(this.form.a2.value>20){this.form.a2.value=20}')

         $("input[name='a3']").prev().attr('onclick','this.form.a3.value--;if(this.form.a3.value<0){this.form.a3.value = 0}else if(this.form.a3.value>10){this.form.a3.value=10}')
         $("input[name='a3']").next().attr('onclick','this.form.a3.value++;if(this.form.a3.value<0){this.form.a3.value = 0}else if(this.form.a3.value>10){this.form.a3.value=10}')

         $("input[name='a4']").prev().attr('onclick','this.form.a4.value--;if(this.form.a4.value<0){this.form.a4.value = 0}else if(this.form.a4.value>10){this.form.a4.value=10}')
         $("input[name='a4']").next().attr('onclick','this.form.a4.value++;if(this.form.a4.value<0){this.form.a4.value = 0}else if(this.form.a4.value>10){this.form.a4.value=10}')

         $("input[name='a5']").prev().attr('onclick','this.form.a5.value--;if(this.form.a5.value<0){this.form.a5.value = 0}else if(this.form.a5.value>5){this.form.a5.value=5}')
         $("input[name='a5']").next().attr('onclick','this.form.a5.value++;if(this.form.a5.value<0){this.form.a5.value = 0}else if(this.form.a5.value>5){this.form.a5.value=5}')

         $("input[name='a6']").prev().attr('onclick','this.form.a6.value--;if(this.form.a6.value<0){this.form.a6.value = 0}else if(this.form.a6.value>5){this.form.a6.value=5}')
         $("input[name='a6']").next().attr('onclick','this.form.a6.value++;if(this.form.a6.value<0){this.form.a6.value = 0}else if(this.form.a6.value>5){this.form.a6.value=5}')

      }else if (userRole == 5) {
        //研究室主任考评
         $("#title1").text("1．本室建设情况（5分）");
         $("#title2").text("2．任务完成情况（50分）");
         $("#title3").text("3．遵规守纪情况（20分）");
         $("#title4").text("4．经费使用情况（10分）");
         $("#title5").text("5．宣传推动情况（10分）");
         $("#title6").text("6．其他（5分）");
         $("input[name='a1']").attr('oninput', 'if(value>5)value=5;if(value<0)value=0');
         $("input[name='a2']").attr('oninput', 'if(value>50)value=50;if(value<0)value=0');
         $("input[name='a3']").attr('oninput', 'if(value>20)value=20;if(value<0)value=0');
         $("input[name='a4']").attr('oninput', 'if(value>10)value=10;if(value<0)value=0');
         $("input[name='a5']").attr('oninput', 'if(value>10)value=10;if(value<0)value=0');
         $("input[name='a6']").attr('oninput', 'if(value>5)value=5;if(value<0)value=0');

         $("input[name='a1']").prev().attr('onclick','this.form.a1.value--;if(this.form.a1.value<0){this.form.a1.value = 0}else if(this.form.a1.value>5){this.form.a1.value=5}')
         $("input[name='a1']").next().attr('onclick','this.form.a1.value++;if(this.form.a1.value<0){this.form.a1.value = 0}else if(this.form.a1.value>5){this.form.a1.value=5}')

         $("input[name='a2']").prev().attr('onclick','this.form.a2.value--;if(this.form.a2.value<0){this.form.a2.value = 0}else if(this.form.a2.value>50){this.form.a2.value=50}')
         $("input[name='a2']").next().attr('onclick','this.form.a2.value++;if(this.form.a2.value<0){this.form.a2.value = 0}else if(this.form.a2.value>50){this.form.a2.value=50}')

         $("input[name='a3']").prev().attr('onclick','this.form.a3.value--;if(this.form.a3.value<0){this.form.a3.value = 0}else if(this.form.a3.value>20){this.form.a3.value=20}')
         $("input[name='a3']").next().attr('onclick','this.form.a3.value++;if(this.form.a3.value<0){this.form.a3.value = 0}else if(this.form.a3.value>20){this.form.a3.value=20}')

         $("input[name='a4']").prev().attr('onclick','this.form.a4.value--;if(this.form.a4.value<0){this.form.a4.value = 0}else if(this.form.a4.value>10){this.form.a4.value=10}')
         $("input[name='a4']").next().attr('onclick','this.form.a4.value++;if(this.form.a4.value<0){this.form.a4.value = 0}else if(this.form.a4.value>10){this.form.a4.value=10}')

         $("input[name='a5']").prev().attr('onclick','this.form.a5.value--;if(this.form.a5.value<0){this.form.a5.value = 0}else if(this.form.a5.value>10){this.form.a5.value=10}')
         $("input[name='a5']").next().attr('onclick','this.form.a5.value++;if(this.form.a5.value<0){this.form.a5.value = 0}else if(this.form.a5.value>10){this.form.a5.value=10}')

         $("input[name='a6']").prev().attr('onclick','this.form.a6.value--;if(this.form.a6.value<0){this.form.a6.value = 0}else if(this.form.a6.value>5){this.form.a6.value=5}')
         $("input[name='a6']").next().attr('onclick','this.form.a6.value++;if(this.form.a6.value<0){this.form.a6.value = 0}else if(this.form.a6.value>5){this.form.a6.value=5}')

      }
    }else{

      if (userRole == 1 || userRole == 2) {
        $("#title1").text("1．团队建设情况（15分）");
        if (userRole == 2)
          $("#title1").text("1．协助首席带领团队建设情况（15）");
        $("#title2").text("2．支撑产业发展情况（50分）");
        $("#title3").text("3．应急事件处置及参与重大活动情况（10分）");
        $("#title4").text("4．经费使用情况（10分）");
        $("#title5").text("5．宣传推动情况（10分）");
        $("#title6").text("6．对接协作情况（5分）");
        $('#sub').css("display", "none");
        $('input').attr("disabled","disabled")
      } else if (userRole == 3) {
        $("#title1").text("1．任务完成情况（50分）");
        $("#title2").text("2．遵规守纪情况（20分）");
        $("#title3").text("3．经费使用情况（10分）");
        $("#title4").text("4．宣传推动情况（10分）");
        $("#title5").text("5．其他（10分）");
        $("#last_li").css("display","none")
        $('#sub').css("display", "none");
        $('input').attr("disabled","disabled")
      } else if (userRole == 4) {
        $("#title1").text("1．任务完成情况（50分）");
        $("#title2").text("2．遵规守纪情况（20分）");
        $("#title3").text("3．经费使用情况（10分）");
        $("#title4").text("4．宣传推动情况（10分）");
        $("#title5").text("5．争取支持情况（5分）");
        $("#title6").text("6．其他（5分）");
        $('#sub').css("display", "none");
        $('input').attr("disabled","disabled")
      }else if (userRole == 5) {
        $("#title1").text("1．本室建设情况（5分）");
        $("#title2").text("2．任务完成情况（50分）");
        $("#title3").text("3．遵规守纪情况（20分）");
        $("#title4").text("4．经费使用情况（10分）");
        $("#title5").text("5．宣传推动情况（10分）");
        $("#title6").text("6．其他（5分）");
        $('#sub').css("display", "none");
        $('input').attr("disabled","disabled")
      }

    }

//输入框监听算总分
    $(".a1 , .a2 , .a3 , .a4 , .a5 , .a6 , .a7").on("change",function(){
      A1=parseFloat($('.a1').val());
      if (A1==0||isNaN(A1)){
        $('.a1').val(0)
        $('.a1').css('border','none')
      }else{
        $('.a1').css('border','1px solid green')
      }

      A2=parseFloat($('.a2').val());
      if (A2==0||isNaN(A2)){
        $('.a2').val(0)
        $('.a2').css('border','none')
      }
      else{
        $('.a2').css('border','1px solid green')
      }

      A3=parseFloat($('.a3').val());
      if (A3==0||isNaN(A3)){
        $('.a3').val(0)
        $('.a3').css('border','none')
      }else{
        $('.a3').css('border','1px solid green')
      }

      A4=parseFloat($('.a4').val());
      if (A4==0||isNaN(A4)){
        $('.a4').val(0)
        $('.a4').css('border','none')
      }else{
        $('.a4').css('border','1px solid green')
      }

      A5=parseFloat($('.a5').val());
      if (A5==0||isNaN(A5)){
        $('.a5').val(0)
        $('.a5').css('border','none')
      }else{
        $('.a5').css('border','1px solid green')
      }

      A6=parseFloat($('.a6').val());
      if (A6==0||isNaN(A6)){
        $('.a6').val(0)
        $('.a6').css('border','none')
      }else{
        $('.a6').css('border','1px solid green')
      }

      A7=parseFloat($('.a7').val());
      if (A7==0||isNaN(A7)){
        $('.a7').val(0)
        $('.a7').css('border','none')
      }else{
        $('.a7').css('border','1px solid green')
      }

      sum = A1+A2+A3+A4+A5+A6+A7;
      $(".sum_score").val(sum);
    })

//加减号监听算总分
    $("input[value='-'],input[value='+']").on("click",function(){
      A1=parseFloat($('.a1').val());
      if (A1==0||isNaN(A1)){
        $('.a1').val(0)
        $('.a1').css('border','none')
      }else{
        $('.a1').css('border','1px solid green')
      }

      A2=parseFloat($('.a2').val());
      if (A2==0||isNaN(A2)){
        $('.a2').val(0)
        $('.a2').css('border','none')
      }
      else{
        $('.a2').css('border','1px solid green')
      }

      A3=parseFloat($('.a3').val());
      if (A3==0||isNaN(A3)){
        $('.a3').val(0)
        $('.a3').css('border','none')
      }else{
        $('.a3').css('border','1px solid green')
      }

      A4=parseFloat($('.a4').val());
      if (A4==0||isNaN(A4)){
        $('.a4').val(0)
        $('.a4').css('border','none')
      }else{
        $('.a4').css('border','1px solid green')
      }

      A5=parseFloat($('.a5').val());
      if (A5==0||isNaN(A5)){
        $('.a5').val(0)
        $('.a5').css('border','none')
      }else{
        $('.a5').css('border','1px solid green')
      }

      A6=parseFloat($('.a6').val());
      if (A6==0||isNaN(A6)){
        $('.a6').val(0)
        $('.a6').css('border','none')
      }else{
        $('.a6').css('border','1px solid green')
      }

      A7=parseFloat($('.a7').val());
      if (A7==0||isNaN(A7)){
        $('.a7').val(0)
        $('.a7').css('border','none')
      }else{
        $('.a7').css('border','1px solid green')
      }

      sum = A1+A2+A3+A4+A5+A6+A7;
      $(".sum_score").val(sum);
    })
  //获取
  $.ajax({
    type: 'get',
    dataType: 'JSON',
    url: param + '/testscore/findById',
    data: { "id": $api.getStorage('score_id')},
    success : function(result){
              $('.a1').val(JSON.stringify(result.data.testScore.a1))
              if (result.data.testScore.a1!=0)
                $('.a1').css('border','1px solid green')

              $('.a2').val(JSON.stringify(result.data.testScore.a2))
              if (result.data.testScore.a2!=0)
                $('.a2').css('border','1px solid green')
              $('.a3').val(JSON.stringify(result.data.testScore.a3))
              if (result.data.testScore.a3!=0)
                $('.a3').css('border','1px solid green')
              $('.a4').val(JSON.stringify(result.data.testScore.a4))
              if (result.data.testScore.a4!=0)
                $('.a4').css('border','1px solid green')
              $('.a5').val(JSON.stringify(result.data.testScore.a5))
              if (result.data.testScore.a5!=0)
                $('.a5').css('border','1px solid green')
              if('.a6'){
                $('.a6').val(JSON.stringify(result.data.testScore.a6))
                if (result.data.testScore.a6!=0)
                  $('.a6').css('border','1px solid green')
              }
              $('.a7').val(JSON.stringify(result.data.testScore.a7))
              if (result.data.testScore.a7!=0)
                $('.a7').css('border','1px solid green')
              A1=parseFloat($('.a1').val());
              A2=parseFloat($('.a2').val());
              A3=parseFloat($('.a3').val());
              A4=parseFloat($('.a4').val());
              A5=parseFloat($('.a5').val());
              A6=parseFloat($('.a6').val());
              A7=parseFloat($('.a7').val());
              sum = A1+A2+A3+A4+A5+A6+A7;
              $(".sum_score").val(sum);
    }
  })




});
}


//发送数据
$('#yes').on("click",function() {
    id = $api.getStorage('score_id');
    A1 = 0;
    A2 = 0;
    A3 = 0;
    A4 = 0;
    A5 = 0;
    A6 = 0;
    A7 = 0;
    if (userRole == 1 || userRole == 2) {
        A1=parseFloat($('.a1').val());
        A2=parseFloat($('.a2').val());
        A3=parseFloat($('.a3').val());
        A4=parseFloat($('.a4').val());
        A5=parseFloat($('.a5').val());
        A6=parseFloat($('.a6').val());
    } else if (userRole == 3) {
      A1=parseFloat($('.a1').val());
      A2=parseFloat($('.a2').val());
      A3=parseFloat($('.a3').val());
      A4=parseFloat($('.a4').val());
      A5=parseFloat($('.a5').val());
    } else if (userRole == 4) {
      A1=parseFloat($('.a1').val());
      A2=parseFloat($('.a2').val());
      A3=parseFloat($('.a3').val());
      A4=parseFloat($('.a4').val());
      A5=parseFloat($('.a5').val());
      A6=parseFloat($('.a6').val());
    }
    A7=parseFloat($('.a7').val());
    urlParam = param + '/testscore/score';
    $.ajax({
        type: 'post',
        dataType: 'JSON',
        url: urlParam,
        data: {
            _method: "put",
            "id": id,
            "A1": A1,
            "A2": A2,
            "A3": A3,
            "A4": A4,
            "A5": A5,
            "A6": A6,
            "A7": A7
        },
        async: false,
        traditional: true,
        success: function(result) {
            alert("打分成功！");
        },
        error: function(result){
          console.log(result);
          alert("打分失败！")
        }
    });
    api.closeWin({

    });
})
