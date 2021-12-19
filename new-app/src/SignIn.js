import './App.css';
import * as firebase from 'firebase';
import firebaseui from 'firebaseui';

var ui = new firebaseui.auth.AuthUI(firebase.auth());

function SignIn() {
    const uiConfig = ({
        signInFlow: 'popup',
        signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID, firebase.auth.EmailAuthProvider.PROVIDER_ID]
    });

    return (
        <>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </>
    );
}

export default SignIn;