apiready = function() {

    urlParam = param + '/laboratory/findAll';

    $.ajax({
        url: urlParam,
        type: 'get',
        dataType: 'json',
        success: function(result) {
            // console.log(JSON.stringify(result));
            var laboratory = result.data.Laboratory;

            $.each(laboratory, function(index, laboratory) {
                var liEle = '<li><a tapmode onclick="fnOpenLaboratoryDetail(' + laboratory.id + ')";><p class="wz-l">' + laboratory.labName + '</p><span>('+laboratory.system.systemName+')</span></a></li>';
                $(liEle).appendTo("ul");
            });
        }
    });
}

function fnOpenLaboratoryDetail(laboratory_id){
  api.openWin({
      name: 'laboratory_win1',
      url: './laboratory_win1.html',
      pageParam: {
        id:laboratory_id
      }
  });
}
