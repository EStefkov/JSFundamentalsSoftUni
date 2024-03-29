function passValidator(pass) {
    function isValidLength(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        } else {
            return `Password must be between 6 nad 10 characters`;
        }
    }
    function isValidChars(pass) {
        let isValidPass = true;
        for (let i = 0; i < pass.length; i++) {
            let isValid = true;
            let code = pass[i].charCodeAt(0);
            if (code >= 65 && code <= 90 || code >= 97 && code <= 122 || code >= 48 && code <= 57) {
                isValid = true;
            } else {
                isValid = false;
                isValidPass = false;
                break;
            }

        }
        return isValidPass ? true : `Password must consist only of letters and digits`;
    }
    function atleastTwoDigits(pass) {
        // code >= 48 && code <= 57
        let digits = 0;
        for (let i = 0; i < pass.length; i++) {
            let code = pass[i].charCodeAt(0);
            if (code >= 48 && code <= 57) {
                digits++;
            }
        }
        return digits >= 2 ? true : `Password must have at least 2 digits`;
    }
    let result = [];
    if (isValidLength(pass) !== true) {
        result.push(isValidLength(pass));
    }
    if (isValidChars(pass) !== true) {
        result.push(isValidChars(pass));
    }
    if (atleastTwoDigits(pass) !== true) {
        result.push(atleastTwoDigits(pass));
    }
    if (isValidLength(pass) && isValidChars(pass) && atleastTwoDigits(pass)) {
        result.push(`Password is Valid`);
    }
    return result.join('\n');


} console.log(passValidator('MyPass'))