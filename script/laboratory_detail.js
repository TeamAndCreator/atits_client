apiready = function() {
    api.showProgress();
    var laboratory_id = api.pageParam.id;
    urlParam = param + '/laboratory/findById';

    $.ajax({
        url: urlParam,
        type: 'get',
        data: {
            'id': laboratory_id
        },
        dataType: 'json',
        success: function(result) {
            api.hideProgress();
            // console.log(JSON.stringify(result));
            var laboratorys = result.data;
            var Ele = '<h1>' + laboratorys.laboratory.labName + '</h1><div><h3>基本内容展示：</h3><ul><li><font>建设依托单位：</font></li><div style="display:block;padding-left:15px;">'+laboratorys.laboratory.company+'</div>';
            Ele += '<li><font>所属体系：</font></li><div style="display:block;padding-left:15px;">'+laboratorys.laboratory.system.systemName+'</div><li><font>研究室主任：</font></li><div style="display:block;padding-left:15px;">'+laboratorys.research_director+'（兼）</div>';
            Ele += '<li><font>岗位专家：</font></li><div style="display:block;padding-left:15px;">';
            for (var i = 0; i < laboratorys.job_expert.length; i++) {
                Ele += laboratorys.job_expert[i]+'&nbsp;&nbsp';
            }
            Ele += '</div><li><font>基本信息：</font></li><div style="display:block;padding-left:15px;">'+laboratorys.laboratory.content+'</div>';

            $(Ele).appendTo("div");

        },
        error : function(){
          alert("获取数据失败！")
        }
    });

}
