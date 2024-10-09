"use client";

import styles from "./ContactForm.module.scss";
import { useForm } from "react-hook-form";
import useWeb3forms from "@web3forms/react";
import { useState, useEffect } from "react";

// https://web3forms.com/platforms/nextjs-contact-form

export default function ContactForm() {
	const accessKey = process.env.CONTACT_KEY;
	const { register, reset, handleSubmit } = useForm();

	const [isSuccess, setIsSuccess] = useState(false);
	const [result, setResult] = useState(null);

	const { submit: onSubmit } = useWeb3Forms({
		access_key: accessKey,
		settings: {
			from_name: "Form",
			subject: "From Website",
		},
		onSuccess: (msg, data) => {
			setIsSuccess(true);
			setResult(msg);
			reset();
		},
		onError: (msg, data) => {
			setIsSuccess(false);
			setResult(msg);
		},
	});

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.fieldGroup}>
				<label className={styles.label} htmlFor='name'>
					Name
				</label>
				<input
					type='text'
					{...register("name", { required: true })}
					name='name'
					placeholder='Your Name'
				/>
			</div>
			<div className={styles.fieldGroup}>
				<label className={styles.label} htmlFor='email'>
					Email
				</label>
				<input
					type='email'
					{...register("email", { required: true })}
					name='email'
					placeholder='Email'
				/>
			</div>
			<div className={styles.textAreaGroup}>
				<label className={styles.label} htmlFor='messege'>
					Messege
				</label>
				<textarea name='message' {...register("message", { required: true })}></textarea>
			</div>
			<button className={styles.btnSubmit} type='submit'>
				Send
			</button>
		</form>
	);
}
