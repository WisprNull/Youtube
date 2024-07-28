import React from 'react';
import { getAuth, signOut} from 'firebase/auth';

export interface IHomePageProps {}

const Home: React.FunctionComponent<IHomePageProps> = (props) => {
    const auth = getAuth();

    return (
        <div>
            <p>Home Page</p>
            <button onClick={() => signOut(auth)}>Sign Out</button>
        </div>
    )
}

export default Home;