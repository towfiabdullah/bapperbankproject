 document.getElementById('btn-withdraw').addEventListener('click',function(){
          //console.log("anika");
          const withrawfield =document.getElementById('withdraw-field');
            const withrawfieldstring = withrawfield.value ;
              const newwithdrawamount =parseFloat(withrawfieldstring);
                
                    
               
                const  previouswithdraw = document.getElementById('total-withdraw');
                      
                   
                 const previouswithdrawstring = previouswithdraw.innerText;
                    console.log(previouswithdrawstring);

                   const previousamount = parseFloat(previouswithdrawstring);
                      const currentwithdratotal= newwithdrawamount+previousamount;
                      
                       previouswithdraw.innerText = currentwithdratotal;

                       const balancetotalelement = document.getElementById('update-balance');
                       const previoustotalbalancestring = balancetotalelement.innerText;
                         const previousbalancetotal = parseFloat(previoustotalbalancestring);
                            const currentblancet = previousbalancetotal-newwithdrawamount;
                            balancetotalelement.innerText = currentblancet;

                       
                       

                    
 })