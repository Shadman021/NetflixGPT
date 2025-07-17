export const checkValidData = (email, password, name) => {

    const isEmailValid = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ .test(email);

    const isPasswordValid = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/.test(password);
      
    const isNameValid = /^[A-Za-z ]{3,}$/.test(name);

    if(!isNameValid) return "Name not valid"
    if(!isEmailValid) return "Email ID not valid";
    if(!isPasswordValid) return "Password not valid";
    

    return "clear";
}