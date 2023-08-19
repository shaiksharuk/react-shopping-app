import { useState } from "react";
import { createAuthWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import  FormInput   from "../form-input/form-input.component";
import './sign-up-form.component.scss'
import { Button }  from "../button/button.component";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    console.log(formFields);

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const HandleOnSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("both passwords dont match");
            return;
        }
        try {
            const { user } = await createAuthWithEmailAndPassword(email, password);
            console.log(user);
            await createUserDocumentFromAuth(user, { displayName })
            setFormFields(defaultFormFields);
        } catch (err) {
            if (err.code === 'auth/email-already-in-use') {
                alert("email already in use");
            }
            console.error(err);
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account ?</h2>
            <span>Sign up with email and password</span>
            <form onSubmit={HandleOnSubmit}>
                <FormInput label='Display Name' required type="text" value={displayName} name="displayName" onChange={changeHandler} />
                <FormInput label='Email' required type="email" value={email} name="email" onChange={changeHandler} />
                <FormInput label='Password' required type="password" value={password} name="password" onChange={changeHandler} />
                <FormInput label='Confirm Password' required type="password" value={confirmPassword} name="confirmPassword" onChange={changeHandler} />
                <Button  type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;