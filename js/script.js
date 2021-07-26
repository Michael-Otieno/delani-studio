$(document).ready(function() {
    $("#description-1").click(function() {
        $(".para-1").toggle();
        $(".image-1").toggle();
      });
  
      $("#description-2").click(function() {
          $(".para-2").toggle();
          $(".image-2").toggle();
        });
  
      $("#description-3").click(function() {
          $(".para-3").toggle();
          $(".image-3").toggle();
        });
      
  
        //mouse over 1
      $('#mouse-over1').mouseover(function() {
          $('#title-1').text("PROJECT 1");
         
      });
      
          $('#mouse-over1').mouseout(function() {
          $('#title-1').text("");
        
      });
      //mouse over 2
      $('#mouse-over2').mouseover(function() {
          $('#title-2').text("MIGHTY ONTARIO");
         
      });
      
          $('#mouse-over2').mouseout(function() {
          $('#title-2').text("");
        
      });
      //mouse over 3
      $('#mouse-over3').mouseover(function() {
          $('#title-3').text("PROJECT 3");
         
      });
      
          $('#mouse-over3').mouseout(function() {
          $('#title-3').text("");
        
      });
  
      //mouse over 4
      $('#mouse-over4').mouseover(function() {
          $('#title-4').text("PROJECT 4");
         
      });
      
      $('#mouse-over4').mouseout(function() {
      $('#title-4').text("");
        
      });
  
       //mouse over 5
       $('#mouse-over5').mouseover(function() {
          $('#title-5').text("HAVE A GOOD DAY");
         
      });
      
      $('#mouse-over5').mouseout(function() {
      $('#title-5').text("");
        
      });
  
       //mouse over 6
      $('#mouse-over6').mouseover(function() {
          $('#title-6').text("QUESTIONNAIRRE");
         
      });
      
      $('#mouse-over6').mouseout(function() {
      $('#title-6').text("");
        
      });
  
       //mouse over 7
      $('#mouse-over7').mouseover(function() {
          $('#title-7').text("BUNNED");
         
      });
      
      $('#mouse-over7').mouseout(function() {
      $('#title-7').text("");
        
      });
  
       //mouse over 8
       $('#mouse-over8').mouseover(function() {
          $('#title-8').text("BAILEY WONGER");
         
      });
      
      $('#mouse-over8').mouseout(function() {
      $('#title-8').text("");
        
      });



      const form = document.querySelector('form')
      const nameInput = document.querySelector('input[name="name"]');
      const emailInput = document.querySelector('input[name="email"]');
      
      const messageInput = document.querySelector('textarea[name="message"]');
      const thankyou = document.querySelector('.thank-you');
  
      
      const isValidEmail = (email) => {
          const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(String(email).toLowerCase());
  };
  
  
  
      const input = [ nameInput,emailInput,  messageInput]
  
      let isFormValid =false;
      let isValidationOn = false;
  
      
  
      const resetElm = (elm)=>{
          elm.classList.remove('invalid');
          elm.nextElementSibling.classList.add('hidden');
      
      }
  
      const invalidateElm = (elm)=>{
          elm.classList.add('invalid')
          elm.nextElementSibling.classList.remove('hidden')
      }
      
      const validateInputs = ()=>{
          if(!isValidationOn) return;
  
          isFormValid =true;
          resetElm(nameInput)
          resetElm(emailInput)
          resetElm(messageInput)
  
          if(!nameInput.value){
  
              isFormValid =false;
              invalidateElm(nameInput)
          
          }
  
          if(!isValidEmail(emailInput.value)){
  
              isFormValid =false;
              invalidateElm(emailInput)
  
  }
  
         
          if(!messageInput.value){
  
          isFormValid =false;
          invalidateElm(messageInput);
  
  }
      }
  
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        isValidationOn = true;
        validateInputs()
        if(isFormValid){
            alert(nameInput.value +' '+'we have received your message. Thank you for reaching out to us.')//form remove
            form.remove()
  
            thankyou.classList.remove('hidden')
        }
    });
  
    inputs.forEach(input => {
        input.addEventListener('input', ()=>{
            validateInputs
        })
        
    });
  
  
  
  
  })
