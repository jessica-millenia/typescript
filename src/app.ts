let userName: string;

let userInput2: any;
userInput2 = "Hai";
userName = userInput2 //not error because use any not unknown

let userInput: unknown;
userInput = 'Hi';
// userName = userInput; //error because unknown
if (typeof userInput === 'string') {
  userName = userInput;
}

//never type
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError('An error occurred', 500);