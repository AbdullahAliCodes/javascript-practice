function passwordStrengthChecker(password) {

    let hasUpperCase; let hasLowerCase;
    let hasDigit; let hasSpecialChar; let minChar
    let i = 0;

    while (i < password.length) {

        hasUpperCase = /[A-Z]/.test(password);
        hasLowerCase = /[a-z]/.test(password);
        hasDigit = /\d/.test(password);
        hasSpecialChar = /[!@#\$%\^\&\*\(\)\/]/.test(password); 
        minChar = (password.length > 7) ? true : false

        i++;
    }

    if (hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar && minChar) {
        return true;
    }
    else {
        return false;
    }
}

   // Test Case:
   console.log(passwordStrengthChecker("Ab1@C")); // Should return false
   console.log(passwordStrengthChecker("StrongP@ssword123")); // Should return true
   console.log(passwordStrengthChecker("Weak123")); // Should return false
   console.log(passwordStrengthChecker("AbCdEfG1@")); // Should return true
   console.log(passwordStrengthChecker("@$#123")); // Should return false










   