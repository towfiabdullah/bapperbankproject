   document.getElementById('btn-deposite').addEventListener('click',function(){
     //  console.log("anol");
         const depositefield = document.getElementById('deposite-input');
          const newdepositeamountstring = depositefield.value ;
           const newdepositeamount= parseFloat(newdepositeamountstring);
              
           const depositetotalamount = document.getElementById('update-deposite');
              const  prevstring = depositetotalamount.innerText;
                   const prev = parseFloat(prevstring);
                 
               const currentdeposite = prev + newdepositeamount;
                
              depositetotalamount.innerText =currentdeposite;

                   const balancetotalelement = document.getElementById('update-balance');
                   const previoustotalbalancestring = balancetotalelement.innerText;
                     const previousbalancetotal = parseFloat(previoustotalbalancestring);
                        
                     const currentbalancetotal = previousbalancetotal+newdepositeamount;
                      balancetotalelement.innerText = currentbalancetotal;

              depositefield.value = ' ';
   
              
   })
        
    