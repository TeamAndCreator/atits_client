apiready = function(){
   api.showProgress();
   urlParam = param + '/profile/findByUserId';
   var userId = $api.getStorage('userId');
  $.ajax({
          url: urlParam,
          type: 'get',
          data:{ "userId" : userId } ,
          dataType: 'json',
          success: function(result){
              if(result.code == 100){
                  api.hideProgress();
                  //console.log(JSON.stringify(result));
                  $('#userName').html($api.getStorage('userName').replace(/\"/g, ""));
                  $('#name').html(JSON.stringify(result.data.profile.name).replace(/\"/g, ""));
                  $('#phoneNumber').html(JSON.stringify(result.data.profile.phoneNumber));
                  $('#officePhone').html(JSON.stringify(result.data.profile.officePhone));
                  $('#email').html(JSON.stringify(result.data.profile.email).replace(/\"/g, ""));
                  $('#department').html(JSON.stringify(result.data.profile.department).replace(/\"/g, ""));
              }
          },
          error : function(){
            alert("获取数据失败！")
          }
  });
}
