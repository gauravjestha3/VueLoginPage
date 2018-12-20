import global from './global.js'
import validationMessage from './validationMessage'
const regexNumber=global.regex.mobileNumber;
const regexMobile = {
  getMessage:field => validationMessage.mobileValidation,
 validate: value => { 
      const mobileRegex = new RegExp(regexNumber);
      return mobileRegex.test(value);
    },
  };
  export default regexMobile;
  
