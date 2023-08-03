window.onload = () => {
    /**
    * Validate color.
    * It starts from ‘#’ symbol. It should be followed by the letters from a-f, A-F and/or digits from 0-9. The length of the hexadecimal color code 
    * should be either 6 or 3, excluding ‘#’ symbol.
    */
    const COLOR_URL = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    
    let colorInputElement = document.getElementById("colorInput");

    setValidationEffects(COLOR_URL, "colorInput", ["input-no-value","input-right-format","input-wrong-format"], ["Introduce color","correcto","incorrecto"], ["no-value","successfull","unsuccessfull"]);

    colorInputElement.addEventListener("input",() => {
        setValidationEffects(COLOR_URL, "colorInput", ["input-no-value","input-right-format","input-wrong-format"], ["Introduce color","correcto","incorrecto"], ["no-value","successfull","unsuccessfull"]);
    });
}