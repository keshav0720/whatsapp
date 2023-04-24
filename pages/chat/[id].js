import React, { useEffect, useRef }  from "react";
import {useCollection} from 'react-firebase-hooks/firestore';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db} from "../../firebase";
import { useRouter } from "next/router";
import firebase from 'firebase/compat/app';


function Chat() {
	const [user] = useAuthState(auth);
	const router = useRouter();
	const inputRef = useRef();
	const userChatRef = db.collection("chats").where("users", "array-contains", user.email);
	const [chats, loading, error] = useCollection(userChatRef);

	const sendMessage = (e) => {
		e.preventDefault();

		db.collection('chats').doc(router.query.id).collection('messages').add({
			timestamp: firebase.firestore.FieldValue.serverTimeStamp(),
			message: inputRef.current.value,
			user: user.email,
			photoURL: user.photoURL
		}).then(() => {
			inputRef.current.value = '';
		})

	};
	useEffect(() => {
		if (chats) {
			const idsTheUserHasAccessTo = chats?.docs.map((doc) => doc.id);
			const userHasAccessToRoom = idsTheUserHasAccessTo.find((id) => id === router.query.id);

			if (!userHasAccessToRoom) router.replace('/');
		}
		}
		, [chats, router]);

	return (
		<div>
			<h1>Your Chat Component</h1>
			<form action="GET">
				<input type="text" ref={inputRef}/>
				<button type="submit" onClick={sendMessage}>Send message</button>
			</form>
		</div>
	)
}

export default Chat;
