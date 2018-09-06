apiready = function(){
   urlParam = param + '/profile/findByUserId';
   //console.log($api.getStorage('userId'));
   var userId = $api.getStorage('userId');
  // console.log(userId);
  $.ajax({
          url: urlParam,
          type: 'get',
          data:{ "userId" : userId } ,
          dataType: 'json',
          success: function(result){
              if(result.code == 100){
                  //console.log(JSON.stringify(result));
                  $('#userName').html($api.getStorage('userName').replace(/\"/g, ""));
                  $('#name').html(JSON.stringify(result.data.profile.name).replace(/\"/g, ""));
                  $('#phoneNumber').html(JSON.stringify(result.data.profile.phoneNumber));
                  $('#officePhone').html(JSON.stringify(result.data.profile.officePhone));
                  $('#email').html(JSON.stringify(result.data.profile.email));
                  $('#department').html(JSON.stringify(result.data.profile.department));
              }

          }
  });
}
