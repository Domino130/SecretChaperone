export function passwordValidator(password) {
    if (!password) return "Password can't be empty."
    if (password.length < 5) return 'Password must be at least 5 characters long.'
    
    // var uppercase = false;
    // var lowercase = false;
    // var num = false;
    // var specialChar = false;
    
    // for(var i  = 0; i < password.length; i++){
    //   if(i == i.toString().toUpperCase()){
    //     uppercase = true;
    //   } 
    //   // else if (i == i.toString().toLowerCase()){
    //   //   lowercase = true;
    //   // } else if(i == /\d/.test(i)){
    //   //   num = true;
    //   // } else if(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(i)){
    //   //   specialChar = true;
    //   // }
    //   // && lowercase && num && specialChar
    //   if(uppercase ){
    //     return ''
    //   }else{
    //     return "Password must have an uppercase, lowercase, number, and special character"
    //   }
    // }

    return ''
  }