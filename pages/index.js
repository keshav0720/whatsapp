import Head from 'next/head';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css';
import { auth, db } from '../firebase';
import * as EmailValidator from "email-validator";
import { useAuthState } from 'react-firebase-hooks/auth';
import {useCollection} from 'react-firebase-hooks/firestore';
import { useRouter } from 'next/router';


export default function Home() {
	const [user] = useAuthState(auth);
	const router = useRouter();
	const userChatsRef = db.collection('chats').where("users", 'array-contains', user.email);
	const [chatsSnapshot, loading, error] = useCollection(userChatsRef);

	const createChat = () => {
		const input = prompt('Please enter an email address for the user');

		if (!input) return;

		if (EmailValidator.validate(input)) {
			db.collection("chats").add({
				users: [user.email, input],
			});
		}
	};

	const getRecipientEmail = (users) => {
		return users.filter((userToFilter) => userToFilter !== user.email[0]);
	}
	const enterChat = (chatId) => {
		router.push(`/chat/${chatId}`)
	}

  return (
    <div className={styles.container}>
      <Head>
        <title>This is whats app 2.0</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

				<h1>Your chats</h1>



			{chatsSnapshot?.docs.map((chat) => (
				<div onClick={() => enterChat(chat.id)} key={chat.id}>
					<h2 >{getRecipientEmail(chat.data().users)}</h2>
				</div>
			))}

			<center>
				<button onClick={createChat}>Start a chat</button>
				<button onClick={() => auth.signOut()}>Log out</button>
			</center>
    </div>
  );
}
