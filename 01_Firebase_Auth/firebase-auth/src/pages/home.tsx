import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

export interface IHomePageProps {}

const Home: React.FunctionComponent<IHomePageProps> = (props) => {
    const auth = getAuth();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser(null);
            }
        });

        return () => {
            unsubscribe();
        };
    }, [auth]);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div>
            <h1>Home Page</h1>
            { user ? (
                <p>Hello {user.displayName}</p>
            ) : (
                <p>Hello User</p>
            )}
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    )
}

export default Home;