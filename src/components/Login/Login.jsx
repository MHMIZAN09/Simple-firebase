import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import app from "../../firebase/firebase.init";

const Login = () => {
    const [user, setUser] = useState(null);
    // eslint-disable-next-line no-unused-vars
    const auth = getAuth(app);
    // eslint-disable-next-line no-unused-vars
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(result);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }
    const handleGoogleSignIn = () => {
        // console.log('google mama is comming');

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            // eslint-disable-next-line no-unused-vars
            .then(result => {
                setUser(null);
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }
    return (
        <div>
            {
                !user ? <div>
                    <button onClick={handleGoogleSignIn}>Google Login</button>
                    <button onClick={handleGithubSignIn}>GitHub signIn</button>
                </div>

                    :
                    <button onClick={handleSignOut}>Google SignOut</button>
            }
            {
                user && <div>
                    <h3>user: {user.displayName}</h3>
                    <p>Email:{user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;