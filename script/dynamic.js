apiready = function() {
  urlParam = param + '/dynamic/findAll1';

  $.ajax({
      url: urlParam,
      type: 'get',
      dataType: 'json',
      success: function(result) {
          var dynamics = result.data.dynamics;

          $.each(dynamics, function(index, dynamic) {

              var optionEle = $("<li></li>").append("<p>"+dynamic.title+"</p>");
              // var optionEle = $("<li></li>").append(dynamic.title);
              optionEle.appendTo("#dynamic");
          });
      }
  });
}
