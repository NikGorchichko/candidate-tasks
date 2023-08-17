class LoginPage {
    login(username, password, authService) {
      let result = false;
      
      // Call the authentication service to check the credentials
      if (authService.authenticate(username, password)) {
        // If the authentication service returns true, set the result to true
        result = true;
      }
      
      return result;
    }
  }


describe('Check login page function', () => {
    let loginPage new LoginPage(); 
    it('Positive scenario', () => { 
        loginPage.login("User", "Password", true); //suppose that parameters for "user" field should be in type string and more than 2 to 15 symbols 
                                                    //and "password" fields should be more than 2 to 15 symbols 
        loginPage.login("User", "Password123", true); //check that "password" field could be with letters and numbers 
        loginPage.login("User", "PasswordPasswor", true); // check boundary value for "password" field for 15 symbols 
        loginPage.login("User", "Pa", true); // check boundary value for "password" field for 2 symbols 
        loginPage.login("Us", "Password", true); // check boundary value for "user" field for 2 symbols 
        loginPage.login("UserUserUserUse", "Password", true); // check boundary value for "password" field for 15 symbols 
    }) 
    it('Negative scenarios', () => {  
        loginPage.login("", "Password", true); //check that result would be false because no data in "user" field provided 
        loginPage.login("User", "", true); //check that result would be false because no data in "password" field provided 
        loginPage.login("User", "Password", ""); //check that result would be false because no data in "authService"field provided 
        loginPage.login("User", "Password", false); //check that result would be false because there is 'false' in "authService" field provided 
        loginPage.login("U", "Password", true); // check boundary values that result would be false because "user" field can't be in one letter 
        loginPage.login("User", "P", true); // check boundary values that result would be false because "password" field can't be in one letter 
        loginPage.login("UserUserUserUserUser", "Password", true); // check boundary values that result would be false because "user" field can't be more than 15 letters (in this case 16 symbols provided)
        loginPage.login("User", "PasswordPasswordPasswordPassword", true); // check boundary values that result would be false because "password" field can't be more than 15 letters (in this case 16 symbols provided)
        loginPage.login(123, "Password", true); //check that "user" field can't be with numbers 
        loginPage.login("User123", "Password", true); //check that "user" field can't be with numbers 
        loginPage.login("User", "Password1*)&", true); // check that "password" field can't be with spec symbols 
   })
})  
