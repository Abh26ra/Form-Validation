import React from 'react'

const Valid = (values) => {

let errors={}
if(!values.fullname){
  errors.fullname="Name is required";
}
if(!values.email){
  errors.email="Emaili is required";
}

if(!values.password){
  errors.password="Password is required";
}
else if(values.password.length<5){
  errors.password="Password length must be greater than 5"
}

return errors;
}

export default Valid
