apiready = function() {
    api.showProgress();
    var systemId = $api.getStorage('systemId');

    urlParam = param + '/laboratory/findAll1';
    $.ajax({
        url: urlParam,
        type: 'get',
        dataType: 'json',
        data: {
          "systemId":systemId
        },
        success: function(result) {
            api.hideProgress();
             //console.log(JSON.stringify(result));

             for(var i = 0;i<JSON.stringify(result.data.laboratories.length);i++){
                var liEle = '<li><a tapmode onclick="fnOpenLaboratoryDetail(' + JSON.stringify(result.data.laboratories[i].laboratory.id) + ')\
                ";><p class="wz-l">' + JSON.stringify(result.data.laboratories[i].laboratory.labName).replace(/\"/g, "")+ '</p><span>('+JSON.stringify(result.data.laboratories[i].laboratory.system.systemName).replace(/\"/g, "")+')</span></a></li>';
                $(liEle).appendTo("ul");
            }
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
