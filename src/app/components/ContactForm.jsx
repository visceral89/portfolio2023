"use client";

import styles from "./ContactForm.module.scss";

// https://web3forms.com/platforms/nextjs-contact-form

export default function ContactForm() {
	const accessKey = process.env.CONTACT_KEY;

	async function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);

		formData.append("access_key", accessKey);

		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application.json",
			},
			body: json,
		});
		const result = await response.json();
		if (result.success) {
			console.log(result);
		}
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles.fieldGroup}>
				<label className={styles.label} htmlFor='name'>
					Name
				</label>
				<input type='text' name='name' placeholder='Your Name' />
			</div>
			<div className={styles.fieldGroup}>
				<label className={styles.label} htmlFor='email'>
					Email
				</label>
				<input type='email' name='email' placeholder='Email' />
			</div>
			<div className={styles.fieldGroup} id="textarea">
				<label className={styles.label} htmlFor='messege'>
					Messege
				</label>
				<textarea name='message'>Message</textarea>
			</div>
			<button className={styles.btnSubmit} type='submit'>
				Send
			</button>
		</form>
	);
}
