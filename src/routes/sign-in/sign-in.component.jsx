import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
         await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>This sign in page</h1>
            <button onClick={logGoogleUser}>
                sign with google popup
            </button>
            <SignUpForm/>
        </div>
    )
}

export default SignIn;
