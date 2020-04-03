var userInput;
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
//Function generateError return never(type from typescript)
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error has come', 2131);
