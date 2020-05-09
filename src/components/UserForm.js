import React, { useState } from 'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstname] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastname] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmpassword] = useState("");

    const handleFirstName = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length < 2) {
            setFirstNameError("First name should have atleast 2 Chars");
        }
        else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 2) {
            setLastNameError("Last name should have atleast 2 Chars!");
        }
        else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("Email should be atleast 5 characters ");
        }
        else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        }
        else {
            setPasswordError("");
        }
    }
    
    const handleConfirmpassword = (e) => {
        setConfirmpassword(e.target.value);
        if(e.target.value !== password){
            setPasswordError("Password should match");
        }
        else {
            setPasswordError("");
        }
    }
    
    return (
        <form onSubmit={ (e) => e.preventDefault() }>
	        <div>
                <label htmlFor="firstName">First Name: </label> 
                <input type="text" onChange={ handleFirstName }/>
                {
                    firstNameError ?
                    <p>{ firstNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label htmlFor="lastName">Last Name: </label> 
                <input type="text" onChange={ handleLastName }/>
                {
                    lastNameError ?
                    <p>{ lastNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label htmlFor="email">Email: </label> 
                <input type="text" onChange={ handleEmail }/>
                {
                    emailError ?
                    <p>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label htmlFor="password">Password: </label> 
                <input type="text" onChange={ handlePassword }/>
                {
                    passwordError ?
                    <p>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password: </label> 
                <input type="text" onChange={ handleConfirmpassword }/>
            </div>
        </form>
    );
};
    
export default UserForm;