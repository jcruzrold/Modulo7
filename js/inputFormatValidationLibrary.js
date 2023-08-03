/**
 * Determines if a given value satisfies the format defined by the given regular expression
 * @param {string} stringToValidate 
 * @param {RegExp} REGEXP_FORMAT 
 * @returns 
 */
let isValidFormat = (stringToValidate, REGEXP_FORMAT) => (REGEXP_FORMAT.test(stringToValidate)) ? true : false;

/**
 * Creates a helping message element next to the input control which helps the user to determine 
 * if the introduced value matches the format marked by the regular expression
 * @param {string} elementId 
 * @param {string} message 
 * @param {className} messageClass 
 * @returns 
 */
let createHelpingMessage = (elementId, message, messageClass) => {
    let helpingMessageElement = document.createElement("span");
    let helpingMessageText = document.createTextNode(message);

    helpingMessageElement.appendChild(helpingMessageText);
    helpingMessageElement.setAttribute("id", elementId);
    helpingMessageElement.setAttribute("class", messageClass);

    return helpingMessageElement;
}

/**
 * Resets the input element's validation classes
 * @param {Element} inputElement 
 * @param {Array} inputElementValidationClasses 
 */
let resetInputEffects = (inputElement, inputElementValidationClasses) => {
    if(inputElement.classList.contains(inputElementValidationClasses[0])) {
        inputElement.classList.remove(inputElementValidationClasses[0]);
    }
    if(inputElement.classList.contains(inputElementValidationClasses[1])) {
        inputElement.classList.remove(inputElementValidationClasses[1]);
    }
    if(inputElement.classList.contains(inputElementValidationClasses[2])) {
        inputElement.classList.remove(inputElementValidationClasses[2]);
    }
}

/**
 * Performs validation effects if applicable based on whether the entered value conforms to the format defined by the regular expression
 * @param {Element} helpingMessageElement 
 * @param {string} helpingMessageId 
 * @param {string} message 
 * @param {className} messageClass 
 * @param {Element} inputElement 
 * @param {Array} inputElementValidationClasses 
 * @param {number} selectedClass 
 */
let changeValidationEffects = (helpingMessageElement, helpingMessageId, message, messageClass, inputElement, inputElementValidationClasses, selectedClass) => {
    if(helpingMessageElement === null) {
        if(message.length !== 0) {
            inputElement.after(createHelpingMessage(helpingMessageId, message, messageClass));
        }
    }
    else {
        if(helpingMessageElement.className != messageClass) {
            helpingMessageElement.remove();
            if(message.length !== 0) {
                inputElement.after(createHelpingMessage(helpingMessageId, message, messageClass));
            }
        }
    }

    if(inputElement.className != inputElementValidationClasses[selectedClass]) {
        resetInputEffects(inputElement, inputElementValidationClasses);
        inputElement.classList.add(inputElementValidationClasses[selectedClass]);
    }
}

/**
 * Once the event is triggered, this function validates if the value matches the regular expression and produces the effects associated to every state
 * @param {RegExp} REGEXP_FORMAT 
 * @param {string} inputElementId 
 * @param {Array} inputElementValidationClasses 
 * @param {Array} helpingMessages 
 * @param {Array} helpingMessagesClasses 
 */
let setValidationEffects = (REGEXP_FORMAT, inputElementId, inputElementValidationClasses, helpingMessages, helpingMessagesClasses) => {
    let inputElement = document.getElementById(inputElementId);
    const helpingMessageId = inputElementId + "_helpingMessage";
    let helpingMessageElement = document.getElementById(helpingMessageId);

    if (inputElement.value.length === 0) {
        changeValidationEffects(helpingMessageElement, helpingMessageId, helpingMessages[0], helpingMessagesClasses[0], inputElement, inputElementValidationClasses, 0);
    }
    else {
        if(isValidFormat(inputElement.value, REGEXP_FORMAT)) {
            changeValidationEffects(helpingMessageElement, helpingMessageId, helpingMessages[1], helpingMessagesClasses[1], inputElement, inputElementValidationClasses, 1);
        }
        else {
            changeValidationEffects(helpingMessageElement, helpingMessageId, helpingMessages[2], helpingMessagesClasses[2], inputElement, inputElementValidationClasses, 2);
        }
    }
}

/**
 * Once the event is triggered, this function validates if the value matches one of the regular expression and produces the effects associated to every 
 * regular expression
 * @param {Array} regExps 
 * @param {string} inputElementId 
 * @param {Array} inputElementValidationClasses 
 * @param {Array} helpingMessages 
 * @param {Array} helpingMessagesClasses 
 */
let setMultipleValidationEffects = (regExps, inputElementId, inputElementValidationClasses, helpingMessages, helpingMessagesClasses) => {
    let inputElement = document.getElementById(inputElementId);
    const helpingMessageId = inputElementId + "_helpingMessage";
    let helpingMessageElement = document.getElementById(helpingMessageId);

    if (inputElement.value.length === 0) {
        changeValidationEffects(helpingMessageElement, helpingMessageId, helpingMessages[0], helpingMessagesClasses[0], inputElement, inputElementValidationClasses, 0);
    }
    else {
        for(let regExp of regExps) {
            if(isValidFormat(inputElement.value,regExp)) {
                changeValidationEffects(helpingMessageElement, helpingMessageId, helpingMessages[regExps.indexOf(regExp) + 1], helpingMessagesClasses[regExps.indexOf(regExp) + 1], inputElement, inputElementValidationClasses, regExps.indexOf(regExp) + 1);
                break;
            }
        }
    }
}