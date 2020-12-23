//When the user submits on sign up 
const emailInput = $(`#email-input`).value()
const message = getEmailError(emailInput)


getEmailError(emailInput) // <- call this
getPasswordError(passwordInput) // <- call this

function getEmailError(emailInput); {
    //check the user email input against all validation.
    //if emailInput is blank
    //return Please enter your email address.
    //else return '' // an empty string
}

function getPasswordError(passwordInput); {
    //check the user Password input against all validation.
    //if passwordInput is blank
    //return "Please create a password."
    //if passwordInput is less than 9 chars
    //return "Your password must be at least 9 characters"
    //if password contains part or all of the local-part of email
    //return "All or part of your email cannot be used in your password"
    //if password contains unacceptable password
    //return 'Your password contains a commonly used password [passwordInput], and can easily be discovered by attackers. Please use something else.`
    //else return '' // an empty string

}

//if there is an email error // if message !== blank
showErrorValidation("#email-error", message)
// pass the email error id and the message from getEmailError()

//if there is an password error // if message !== blank
showErrorValidation("#password-error", message)
// pass the password error id and the message from getPasswordError()

function showErrorValidation(id, message){
// user jQuerry to toggle the error message and error styling
}


//Put in their own files
//getPasswordError.js
//getEmailError.js
//password lists
