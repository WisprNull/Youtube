// import React, { useEffect, useState } from 'react';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';

// export interface IAuthRouteProps {}

// const AuthRoute: React.FunctionComponent<IAuthRouteProps> = (props) => {
//     const { children } = props;
//     const auth = getAuth();
//     const navigate = useNavigate();
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         authCheck();
//     }, [auth]);

//     const authCheck = onAuthStateChanged(auth, (user) => {
//         if (user) {
//             setLoading(false);
//         }
//         else {
//             console.log('unauthorized');
//             navigate("/login");
//         }
//     })

//     if (loading) return <p>Loading...</p>;

//     return <>{children}</>;
// }

// export default AuthRoute;
import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

interface IAuthRouteProps {}

const AuthRoute: React.FC<IAuthRouteProps> = (props) => {
    const { children } = props;
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const authCheck = () => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setLoading(false);
                } else {
                    console.log('Unauthorized');
                    navigate("/login");
                }
            });
        };

        authCheck(); // Call the authCheck function to start listening to auth state changes

        return () => {
            // Cleanup function
            // Remove the listener when the component unmounts
        };
    }, [auth, navigate]);

    if (loading) return <p>Loading...</p>;
    return <>{children}</>;
};

export default AuthRoute;
