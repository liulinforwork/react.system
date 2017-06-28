/***@author blue @create date 2017-06-14 @info register.js***/
(function ($,w) {

    var wait=60;

    function time(o) {
        if (wait == 0) {
            o.removeAttribute("disabled");
            $(o).css('backgroundColor','#0099FF').css('color','white');
            o.value="获取验证码";
            wait = 60;
        } else {
            o.setAttribute("disabled", true);
            $(o).css('backgroundColor','#E6E7EC').css('color','#ABA6B8');
            o.value="重新发送(" + wait + ")";
            wait--;
            setTimeout(function() {
                time(o)
            }, 1000)
        }
    }

    $(function(){
        $('.sendYzm').on('click',function () {
            layer.msg('验证码已发送至你的手机');
            time(this);
        });

        $(".jsForm").validate({
            rules : {
                phone : {
                    required : true,
                    // // 自定义方法：校验手机号在数据库中是否存在
                    // checkPhoneExist : true,
                    isMobile :true
                },
                yzm : {
                    required : true,
                    minlength : 4,
                    digits : true
                },
                pwd : {
                    required : true,
                    minlength: 6,
                    isLength:true
                },
                'pwd--again' : {
                    required : true,
                    minlength: 6,
                    isLength:true,
                    equalTo:"#pwd"
                },
                user : {
                    required : true,
                    minlength:6,
                    isUser:true
                }
            },
            messages : {
                phone : {
                    required : "请输入你的手机号"
                },
                yzm : {
                    required : "请输入验证码",
                    minlength:"验证码错误",
                    digits : "验证码应该输入数字"
                },
                pwd : {
                    required : "请输入你的密码",
                    minlength:"至少6位字母、数字、下划线组成"
                },
                'pwd--again' : {
                    required : "请输入你的密码",
                    minlength:"至少6位字母、数字、下划线组成",
                    equalTo:"前后密码输入不一致"
                },
                user : {
                    required : "请输入你的用户名",
                    minlength:"至少6位汉字、字母、数字、下划线组成"
                }
            },
            submitHandler: function() {

                //验证通过后 的js代码写在这里
                var data = {
                    status:1
                };
                switch (data.status){
                    case 0:

                        var obj = $('.jsForm').serialize();
                        console.log(obj);

                        layer.alert('账号无法登录该电脑，请登录绑定的电脑', {
                            icon: 5,
                            skin: 'layer-ext-moon'
                        });
                        break;
                    case 1:
                        window.location.href = "../../html/user/status.html";
                        break;
                    default:
                        break;
                }

            },
            errorPlacement:function(error,element) {
                error.appendTo(element.parent().parent());
            },
            debug:true
        })

    });


    // 点击通过ajax方式提交表单验证
    $('.register_sub').on('click',function (e) {
        $('.jsForm').submit();
    })

})(jQuery,window);