/***@author blue @create date 2017-06-14 @info common.js***/

    var portUrl = /^pre/.test(location.host)?"https://preapp.madrock.com.cn":
    /^h5/.test(location.host)?"https://appserver.madrock.com.cn":"http://test.appserver.com";


    //配置中文messages
    $.extend($.validator.messages, {
        required: "必选字段",
        remote: "请修正该字段",
        email: "请输入正确格式的电子邮件",
        url: "请输入合法的网址",
        date: "请输入合法的日期",
        dateISO: "请输入合法的日期 (ISO).",
        number: "请输入合法的数字",
        digits: "只能输入整数",
        creditcard: "请输入合法的信用卡号",
        equalTo: "请再次输入相同的值",
        yzm: "请输入正确的验证码",
        accept: "请输入拥有合法后缀名的字符串",
        maxlength: $.validator.format("请输入一个长度最多是 {0} 的字符串"),
        minlength: $.validator.format("请输入一个长度最少是 {0} 的字符串"),
        rangelength: $.validator.format("请输入一个长度介于 {0} 和 {1} 之间的字符串"),
        range: $.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
        max: $.validator.format("请输入一个最大为 {0} 的值"),
        min: $.validator.format("请输入一个最小为 {0} 的值")
    });

    //配置通用的默认提示语
    $.extend($.validator.messages, {
        required: '必填',
        equalTo: "请再次输入相同的值"
    });


    //jquery.validate
    // 手机号码验证
    $.validator.addMethod("isMobile", function(value, element) {
        var length = value.length;
        var mobile = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
        return this.optional(element) || (length == 11 && mobile.test(value));
    }, "手机号错误，请检查");

    // 6-32位字母数字下划线验证
    $.validator.addMethod("isLength", function(value, element) {
        var pwd = /^[\w]{6,32}$/;
        return this.optional(element) || (pwd.test(value));
    }, "密码格式不正确");

    // 6-32位用户名验证
    $.validator.addMethod("isUser", function(value, element) {
        var user = /^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/;
        return this.optional(element) || (user.test(value));
    }, "用户名格式不正确");

    // $.validator.addMethod("checkPhoneExist", function(value, element) {
    //     return this.optional(element) || false;
    // }, "该手机号已注册使用，请更换");

    //配置错误提示元素
    $.validator.setDefaults({
        errorElement:'span'
    });