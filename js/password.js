window.onload = () => {
    /**
    * Validate password.
    * Strong Contains at least each one of the following characters: lowercase letter, uppercase letter, number and special character.
    * Medium Contains at least each one of the following characters: lowercase letter, uppercase letter, number and the password length must be a minumum of
    * eight characters 
    * Weak Neither of others
    */
    const STRONG_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ºª\\\!\|"@·#\$~%&¬/\(\)\='\?¡¿`\^\[\+\*\]´¨\{\}\<\>\,;\.\:-]).+$/;
    const MEDIUM_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    const WEAK_PASSWORD   = /^(?!(((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ºª\\\!\|"@·#\$~%&¬/\(\)\='\?¡¿`\^\[\+\*\]´¨\{\}\<\>\,;\.\:-]).+)|((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}))).+$/;
    
    let passwordInputElement = document.getElementById("passwordInput");

    setMultipleValidationEffects([STRONG_PASSWORD,MEDIUM_PASSWORD,WEAK_PASSWORD], "passwordInput", ["input-no-value","input-strong-format","input-medium-format","input-weak-format"], ["Introduce password","fuerte","media","débil"], ["no-value","strong","medium","weak"]);

    passwordInputElement.addEventListener("input",() => {
        setMultipleValidationEffects([STRONG_PASSWORD,MEDIUM_PASSWORD,WEAK_PASSWORD], "passwordInput", ["input-no-value","input-strong-format","input-medium-format","input-weak-format"], ["Introduce password","fuerte","media","débil"], ["no-value","strong","medium","weak"]);
    });
}