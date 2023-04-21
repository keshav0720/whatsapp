import '../styles/globals.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from "next/router";
import { auth } from "../firebase";
import Login from "./login";

function App({ Component, pageProps }) {

	const [user, loading, error] = useAuthState(auth);

	if (loading) {
		return (
			<center>
				<h1>loading</h1>
			</center>
		)
	}
	if (!user){
		return <Login />;
	}

  return <Component {...pageProps} />
}

export default App;
