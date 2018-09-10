apiready = function() {
    api.showProgress();
    urlParam = param + '/laboratory/findAll';
    $.ajax({
        url: urlParam,
        type: 'get',
        dataType: 'json',
        success: function(result) {
            api.hideProgress();
            // console.log(JSON.stringify(result));
            var laboratory = result.data.Laboratory;
            $.each(laboratory, function(index, laboratory) {
                var liEle = '<li><a tapmode onclick="fnOpenLaboratoryDetail(' + laboratory.id + ')";><p class="wz-l">' + laboratory.labName + '</p><span>('+laboratory.system.systemName+')</span></a></li>';
                $(liEle).appendTo("ul");
            });
        },
        error : function(){
          alert("获取数据失败！")
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
