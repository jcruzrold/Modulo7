/**
 * Sets the value of the blackboard with the country code and the control digit if the inserted value satisfies the right format
 * @param {string} blackboardId 
 * @param {boolean} setValue 
 * @param {string} inputElementValue 
 * @param {RegExp} IBAN_EXTRACTION_REGEXP 
 */
let setBlackboardValue = (blackboardId, setValue, inputElementValue, IBAN_EXTRACTION_REGEXP) => {
    let valueElements = [];
    if(setValue) {
        valueElements = IBAN_EXTRACTION_REGEXP.exec(inputElementValue);
        valueElements.forEach(element => {
            if(element !== undefined && element !== inputElementValue)
            {
                document.getElementById(blackboardId).value = element;
            }
        });
    }
    else {
        document.getElementById(blackboardId).value = "";
    }
}

window.onload = () => {
    /**
    * Validate international bank account number.
    * It starts with two letters (uppercase or lowercase) which stand for country code, and follows with twenty two digits. 
    * One blank between groups of four characters is allowed (all blanks are mandatory while one of them is placed).
    */
    const REGEXP_IBAN = /^([A-Za-z]{2}\d{2})\d{20}$|^([A-Za-z]{2}\d{2})\s\d{4}\s\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
    
    let ibanInputElement = document.getElementById("ibanInput");

    setValidationEffects(REGEXP_IBAN, "ibanInput", ["input-no-value","input-right-format","input-wrong-format"], ["","correcto","incorrecto"], ["","successfull","unsuccessfull"]);

    ibanInputElement.addEventListener("input",() => {
        setValidationEffects(REGEXP_IBAN, "ibanInput", ["input-no-value","input-right-format","input-wrong-format"], ["","correcto","incorrecto"], ["","successfull","unsuccessfull"])
        setBlackboardValue("blackboard", isValidFormat(ibanInputElement.value, REGEXP_IBAN), ibanInputElement.value, REGEXP_IBAN);
    });
}