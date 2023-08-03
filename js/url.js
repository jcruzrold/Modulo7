window.onload = () => {
    /**
    * Validate URL.
    * The string should start with either http or https followed by ://. The combined length of the sub-domain and root domain must be between 2 and 256. 
    * It should only contain alphanumeric characters and/or special characters. The TLD (Top-Level Domain) should only contain alphabetic characters and 
    * it should be between two and six characters long. The end of the URL string could contain alphanumeric characters and/or special characters. 
    * and it could repeat zero or more times.
    */
    const REGEXP_URL = /^(http(s)?:\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
    
    let urlInputElement = document.getElementById("urlInput");

    setValidationEffects(REGEXP_URL, "urlInput", ["input-no-value","input-right-format","input-wrong-format"], ["Introduce url","correcto","incorrecto"], ["no-value","successfull","unsuccessfull"]);

    urlInputElement.addEventListener("input",() => {
        setValidationEffects(REGEXP_URL, "urlInput", ["input-no-value","input-right-format","input-wrong-format"], ["Introduce url","correcto","incorrecto"], ["no-value","successfull","unsuccessfull"]);
    });
}