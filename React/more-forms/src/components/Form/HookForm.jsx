

import React, { useState } from  'react';
import styles from './HookForm.module.css'



const HookForm = (props) => {
    // const [form, setForm] = useState({
        //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: '',
    // });
    
    // const updateForm = (e) => {
        //     e.preventDefault();
        
        //     const {name,value} = e.target
        
        //     setForm(currentForm => ({...currentForm, [name]:value}))
        // }
        
        
        
        // const createUser = (e) => {
            //     // we must prevent the default refresh of the browser to keep our state from being reset
            //     e.preventDefault();
            
            //     // shorthand ES6 syntax for building an object - see notes above
            //     const newUser = { firstName, lastName, email, password, confirmPassword };
            //     console.log("Welcome", newUser);
            //     setFirstName("");
            //     setLastName("");
            //     setEmail("");
            //     setPassword("");
            //     setConfirmPassword("");
            // };
            
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");  
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const validateFn = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First name is required!");
        } else if(e.target.value.length < 3) {
            setFirstNameError("First name must be 3 characters or longer!");
        } else {
            setFirstNameError("");
        }
    }
    const validateLn = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last name is required!");
        } else if(e.target.value.length < 3) {
            setLastNameError("Last name must be 3 characters or longer!");
        } else {
            setLastNameError("");
        }
    }
    const validateEm = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 3) {
            setEmailError("Email must be 3 characters or longer!");
        } else {
            setEmailError("");
        }
    }
    const validatePa = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        } else {
            setPasswordError("");
        }
    }
    const validateCpa = (e) => {
        
        setConfirmPassword(e.target.value);
        // const {password} = this.state
        console.log(e.target.value, password)
        if(e.target.value !== password ) {
            setConfirmPasswordError("Passwords must match!");
        } else {
            setConfirmPasswordError("");
        }
    }


    
    return(
        <>
            <form className={styles.form} >
                <div>
                    <label>FirstName: </label> 
                    {/* <input type="text" name='firstName' value={firstName} onChange={ (e) => setFirstName(e.target.value) } /> */}
                    <input type="text" name='firstName' value={firstName} onChange={ validateFn } />
                    <p>{firstNameError}</p>
                </div>
                <div>
                    <label>LastName: </label> 
                    {/* <input type="text" name='lastName' value={lastName} onChange={ (e) => setLastName(e.target.value) } /> */}
                    <input type="text" name='lastName' value={lastName} onChange={ validateLn } />
                    <p>{lastNameError}</p>
                </div>
                <div>
                    <label>Email Address: </label> 
                    {/* <input type="text" name='email' value={email} onChange={ (e) => setEmail(e.target.value) } /> */}
                    <input type="text" name='email' value={email} onChange={ validateEm } />
                    <p>{emailError}</p>
                </div>
                <div>
                    <label>Password: </label>
                    {/* <input type="password" name='password' value={password} onChange={ (e) => setPassword(e.target.value) } /> */}
                    <input type="password" name='password' value={password} onChange={ validatePa } />
                    <p>{passwordError}</p>
                </div>
                <div>
                    <label>ConfirmPassword: </label>
                    {/* <input type="password" name='confirmPassword' value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } /> */}
                    <input type="password" name='confirmPassword' value={confirmPassword} onChange={ validateCpa } />
                    <p>{confirmPasswordError}</p>
                </div>
                <input type="submit" value="Create User" />
            </form>

            <div>
                {/* <p> First Name: {firstName} </p>
                <p> Last Name: {lastName} </p>
                <p> Email: {email} </p>
                <p> Password: {password} </p>
                <p> Confirm Password: {confirmPassword} </p> */}
                {/* <p> First Name: {form.firstName} </p>
                <p> Last Name: {form.lastName} </p>
                <p> Email: {form.email} </p>
                <p> Password: {form.password} </p>
                <p> Confirm Password: {form.confirmPassword} </p> */}
            </div>
        </>
    );
};

export default HookForm;
