function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

    if (arr = document.cookie.match(reg))

        return unescape(arr[2]);
    else
        return null;
}

window.onload = function () {
    var id = getCookie('BringInfoId');

    $.ajax({
        url: "getBringInfoById",
        data: JSON.stringify({
            "id": id
        }),
        type: 'POST',
        dataType: 'json',
        timeout: 1000,
        contentType: 'application/json; charset=UTF-8',
        cache: false,
        bedforeSend: LoadFunction,
        error: erryFunction,
        success: succFunction
    });
}

function LoadFunction() {
    return;
}

function erryFunction() {
}

function succFunction(data) {

    insert(data.data);

}

function insert(data) {
    var content = document.getElementById("content");
    var html = '';
    $.each(data, function (index, val) {
        html += "<div class='top'><div class='name'>" + val.title + "</div> <br /> <div class='time'> 发布于<span>" + val.time + "</span> </div></div> <div class='middle'> <li>招聘职位：<span>" + val.name + "</span></li> <li>岗位性质：<span>" + val.type + "</span></li>  <li>单位地址：<span>" + val.location + "</span></li> <li>工作时间：<span>" + val.worktime + "</span></li> <li>工作地点：<span>" + val.workplace + "</span></li> <li>工作报酬：<span>" + val.pay + "</span></li> </div>  <div class='bottom'> <li>截止时间：<span>" + val.deadline + "</span></li> <li>性别要求：<span>" + val.sex + "</span></li>  <li>年级要求：<span>" + val.grade + "</span></li> <li>校区要求：<span>" + val.place + "</span></li> <li>工作内容：<span>" + val.need + "</span></li> </div>"+"<div class='container'> <p><strong>备注:</strong></br>1:每位同学只能参加一份校内固定岗位,不得同时报名临时岗位;</br>2:临时岗位可同时报名数个,但每月工资加起来不得超过400.00元.</br>报名的同学请及时联系合肥工业大学勤工助学中心校内岗位部.电话:<a href='tel:0551-62901052'>0551-62901052</a> ;QQ:<a href='http://wpa.qq.com/msgrd?v=1&uin=1970265443' >1970265443</a></p></div>";

        content.innerHTML = html;
    });

}