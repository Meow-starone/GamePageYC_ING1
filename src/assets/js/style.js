  //注册逻辑
  $(document).ready(function(){
   $(".register").click(function(){
     var body ={
       nickname: $("#telephone").val(), 
       password: $("#password").val(),
       address: $("#address").val(),
       invitation: $("#invitation").val()
      }
         console.log(body)

         var a = $("#telephone").val();
         var reg = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){3,15}|1[0-9]{10}$/;
         areg = reg.test(a);
         if(areg==false){alert("请输入正确的用户名");}

         $.post('http://192.168.1.212:9000',body)
         .done((data)=>{
          console.log(data)
          if(data.code==0){
            // window.location.href = 'zerg.oowan.com'
            alert("注册成功")
          }
          else
            {alert(data.msg)}
        })
         .fail(err=>{
          console.log(err)
        })

      

    });
 });



    