import React from 'react'
import { auth, provider} from '../firebase'
function login() {

	const signIn = () => {
		auth.signInWithPopup(provider).catch(console.error);
	}

	return (
		<div>
			<h1>Login page</h1>
			<button onClick={signIn}>Sign in with Google</button>
		</div>
	)
}

export default login
