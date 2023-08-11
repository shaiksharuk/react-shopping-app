import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user)

    }

    return (
        <div>
            <h1>This sign in page</h1>
            <button onClick={logGoogleUser}>
                sign with google popup
            </button>
        </div>
    )
}

export default SignIn;
