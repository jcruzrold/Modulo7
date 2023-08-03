/**
 * Extracts the four digit groups of a valid credit card number.
 * @param {string} blackboardId 
 * @param {boolean} setValue 
 * @param {string} inputElementValue 
 * @param {RegExp} IBAN_EXTRACTION_REGEXP 
 */
let setBlackboardValue = (blackboardId, setValue, inputElementValue, CARD_EXTRACTION_REGEXP) => {
    let valueElements = [];
    let blackboardElement = document.getElementById(blackboardId);

    if(setValue) {
        valueElements = CARD_EXTRACTION_REGEXP.exec(inputElementValue);
        valueElements.forEach(element => {
            if(element !== undefined && element !== inputElementValue)
            {
                blackboardElement.value = blackboardElement.value + element + "\n";
            }
        });
    }
    else {
        blackboardElement.value = "";
    }
}

window.onload = () => {
    /**
    * Validate credit card.
    * The credit card number is composed of sixteen digits. It must start with fifty, fifty-one, fifty-two, fifty-three, fifty-four or fifty-five. 
    * Although not mandatory, a blank or hyphen are allowed between groups of four digits (all blanks or hyphens are mandatory while one of them is placed).
    */
    const REGEXP_CREDIT_CARD = /^(5[0-5]\d{2})(\d{4})(\d{4})(\d{4})$|^(5[0-5]\d{2})\-(\d{4})\-(\d{4})\-(\d{4})$|^(5[0-5]\d{2})\s(\d{4})\s(\d{4})\s(\d{4})$/;
    
    let cardInputElement = document.getElementById("cardInput");

    setValidationEffects(REGEXP_CREDIT_CARD, "cardInput", ["input-no-value","input-right-format","input-wrong-format"], ["Introduce tarjeta","correcto","incorrecto"], ["no-value","successfull","unsuccessfull"]);

    cardInputElement.addEventListener("input",() => {
        setValidationEffects(REGEXP_CREDIT_CARD, "cardInput", ["input-no-value","input-right-format","input-wrong-format"], ["Introduce tarjeta","correcto","incorrecto"], ["no-value","successfull","unsuccessfull"])
        setBlackboardValue("blackboard", isValidFormat(cardInputElement.value, REGEXP_CREDIT_CARD), cardInputElement.value, REGEXP_CREDIT_CARD);
    });
}