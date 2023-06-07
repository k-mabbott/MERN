

import React, { useState } from  'react';
import styles from './HookForm.module.css'


const HookForm = (props) => {
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");  
    // const [confirmPassword, setConfirmPassword] = useState("");

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const updateForm = (e) => {
        e.preventDefault();

        const {name,value} = e.target

        setForm(currentForm => ({...currentForm, [name]:value}))
    }



    
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
    
    return(
        <>
            <form className={styles.form} >
                <div>
                    <label>FirstName: </label> 
                    {/* <input type="text" name='firstName' value={firstName} onChange={ (e) => setFirstName(e.target.value) } /> */}
                    <input type="text" name='firstName' value={form.firstName} onChange={ updateForm } />
                </div>
                <div>
                    <label>LastName: </label> 
                    {/* <input type="text" name='lastName' value={lastName} onChange={ (e) => setLastName(e.target.value) } /> */}
                    <input type="text" name='lastName' value={form.lastName} onChange={ updateForm } />
                </div>
                <div>
                    <label>Email Address: </label> 
                    {/* <input type="text" name='email' value={email} onChange={ (e) => setEmail(e.target.value) } /> */}
                    <input type="text" name='email' value={form.email} onChange={ updateForm } />
                </div>
                <div>
                    <label>Password: </label>
                    {/* <input type="password" name='password' value={password} onChange={ (e) => setPassword(e.target.value) } /> */}
                    <input type="password" name='password' value={form.password} onChange={ updateForm } />
                </div>
                <div>
                    <label>ConfirmPassword: </label>
                    {/* <input type="password" name='confirmPassword' value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } /> */}
                    <input type="password" name='confirmPassword' value={form.confirmPassword} onChange={ updateForm } />
                </div>
                <input type="submit" value="Create User" />
            </form>

            <div>
                {/* <p> First Name: {firstName} </p>
                <p> Last Name: {lastName} </p>
                <p> Email: {email} </p>
                <p> Password: {password} </p>
                <p> Confirm Password: {confirmPassword} </p> */}
                <p> First Name: {form.firstName} </p>
                <p> Last Name: {form.lastName} </p>
                <p> Email: {form.email} </p>
                <p> Password: {form.password} </p>
                <p> Confirm Password: {form.confirmPassword} </p>
            </div>
        </>
    );
};

export default HookForm;
