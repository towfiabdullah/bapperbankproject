document.getElementById('btn-submit').addEventListener('click',function(){
     const field = document.getElementById('user-email');
     const emailfield = field.value ;
        
      const passwordfield = document.getElementById('user-pasword');
       const password = passwordfield.value;
         if(emailfield === 'towfiqabdullah2@gmail.com'&& password === 'secret')
         {
                window.location.href = 'bank.html';
         }
          else{
                  console.log ('invalid user');
          }
       
})