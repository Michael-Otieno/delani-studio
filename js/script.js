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
})