/**
 * Extracts the digit part of the plate at one hand and on the other one the letters.
 * @param {string} blackboardId 
 * @param {boolean} setValue 
 * @param {string} inputElementValue 
 * @param {RegExp} PLATE_EXTRACTION_REGEXP 
 */
let setBlackboardValue = (blackboardId, setValue, inputElementValue, PLATE_EXTRACTION_REGEXP) => {
    let valueElements = [];
    if(setValue) {
        valueElements = PLATE_EXTRACTION_REGEXP.exec(inputElementValue);
        document.getElementById(blackboardId).value = "Parte numérica: " + valueElements[1] + "\nParte alfabética: " + valueElements[2];
    }
    else {
        document.getElementById(blackboardId).value = "";
    }
}

window.onload = () => {
    /**
     * Validate car plate.
     * It starts with four digits followed by three letters (upper case or lowercase are allowed).
     * Although not mandatory, an hyphen or a blank are admitted between the group of digits and letters. 
     */
    const REGEXP_PLATE = /^(\d{4})[\-\s]?([A-Za-z]{3})$/;
    
    let plateInputElement = document.getElementById("plateInput");

    setValidationEffects(REGEXP_PLATE, "plateInput", ["input-no-value","input-right-format","input-wrong-format"], ["Introduce matrícula","correcto","incorrecto"], ["no-value","successfull","unsuccessfull"]);

    plateInputElement.addEventListener("input",() => {
        setValidationEffects(REGEXP_PLATE, "plateInput", ["input-no-value","input-right-format","input-wrong-format"], ["Introduce matrícula","correcto","incorrecto"], ["no-value","successfull","unsuccessfull"])
        setBlackboardValue("blackboard", isValidFormat(plateInputElement.value, REGEXP_PLATE), plateInputElement.value, REGEXP_PLATE);
    });
}