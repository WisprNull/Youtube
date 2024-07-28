import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export interface ILoginPageProps {}

const Login: React.FunctionComponent<ILoginPageProps> = (props) => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [authentication, setAuthentication] = useState(false);

    const signInWithGoogle = async () => {
        setAuthentication(true);

        signInWithPopup(auth, new GoogleAuthProvider())
            .then((response) => {
                console.log(response.user.uid);
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                setAuthentication(false);
            });
    };

    return (
        <div>
            <p>Login Page</p>
            <button onClick={() => signInWithGoogle()} disabled={authentication}>
                Sign In With Google
            </button>
        </div>
    )
}

export default Login;