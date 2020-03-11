

  function registrationFormValidatio(){
    let FN,LN,EMAIL,FILE;

      FN = document.getElementById('firstName').value;
      LN = document.getElementById('lastName').value;
      EMAIL = document.getElementById('EmailId').value;
      FILE = document.getElementById('inputFile').value;

      if(FN==""){
        document.getElementById('firstName').style.backgroundColor='#FFBABA';
        alert("Name is required");
      }
      else if(LN==""){
        document.getElementById('lastName').style.backgroundColor='#FFBABA';
        alert("Full Name is required");
      }
      else if(EMAIL==""){
        document.getElementById('EmailId').style.backgroundColor='#FFBABA';
        alert("Email is required");
      }
      else if(FILE==""){
        document.getElementById('inputFile').style.backgroundColor='#FFBABA';
        alert("Paymet Slip is required");
      }
      else{
        document.getElementById('SubminButton').innerHTML=' Submitted Successfully';

      }
  }
