import Head from 'next/head';
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css';
import { auth, db } from '../firebase';
import * as EmailValidator from "email-validator";
import { useAuthState } from 'react-firebase-hooks/auth';

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	const [user] = useAuthState(auth);
	const createChat = () => {
		const input = prompt('Please enter an email address for the user');

		if (!input) return;

		if (EmailValidator.validate(input)) {
			db.collection('chats').add({
				users: [user.email, input],
			});

		}
	};
  return (
    <div className={styles.container}>
      <Head>
        <title>This is whats app 2.0</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
			<center>
				<h1>Your chats</h1>
				<button onClick={createChat}>Start a chat</button>
				<button onClick={() => auth.signOut()}>Log out</button>
			</center>
    </div>
  )
}
