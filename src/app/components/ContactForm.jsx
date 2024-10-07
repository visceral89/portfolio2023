import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import styles from "./ContactForm.module.scss";

// https://web3forms.com/platforms/nextjs-contact-form

export const ContactForm = () => {
	const { register, reset, handleSubmit } = useForm();
	const { isSuccess, setIsSuccsess } = useState(false);
	const { result, setResult } = useState(null);
	const [captchatoken, setCaptchaToken] = useState("");

	const accessKey = process.env.CONTACT_KEY;
	const recaptchaKey = process.env.CAPTCH_KEY;

	return;
};
