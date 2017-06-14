/***@author blue @create date 2017-06-14 @info login.js***/
(function ($,w) {
    // 判断ie 提示修改模式
    if(/ie/gi.test(navigator.userAgent)){
        console.log("温馨提示")
        console.log("检测到您正在使用兼容模式浏览，为了更好体验，请切换极速模式或者高版本浏览器！")
    }
    //随机生成验证码
    var yzm = {
        create:function(){
            var yzm = [];
            //小写字母
            for(var i = 0; i < 26; i++){
                yzm.push(String.fromCharCode(65+i));
            }
            //大写字母
            for(var j = 0; j < 26; j++){
                yzm.push(String.fromCharCode(97+j));
            }
            //数字
            for(var k = 0; k < 10; k++){
                yzm.push(k);
            }
            return yzm;
        },
        random:function(){
            return Math.floor(Math.random()*61+1);
        },
        build:function(number){
            var ran = [];
            for(var i = 0; i < number; i++){
                ran.push(this.create()[this.random()]);
            }
            return ran;
        }
    };
    var cetyzm = {
        create:function(num){
            var html = "";
            for(var i = 0; i < num; i++){
                html += yzm.build(num)[i];
            }
            $(".codeYzm").html(html);
        }
    };
    cetyzm.create(4);
    $(".codeYzm").click(function(){
        cetyzm.create(4);
    });

    $(function(){
        //jquery.validate
        $(".jsForm").validate({
            groups:{
                username:"username",
                pwd:"pwd"
            },
            invalidHandler: function(form, validator) {
                $.each(validator.invalid,function(key,value){
                    $('.login_error').html(value);
                    $('.tips').addClass('tips--add');
                    return false;
                }); //这里循环错误map，只报错第一个
            },
            debug:true,
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
                        window.location.href = "../../../dashboard";
                        break;
                    default:
                        break;
                }

            },
            errorPlacement:function(error,element) {
            }
        })

    });

    $('#login').on('click',function (e) {
        $('.jsForm').submit();
    })
})(jQuery,window);
