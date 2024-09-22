import styles from "../page.module.scss";

export default function Contact() {
	return (
		<main className={styles.main}>
			<header className={styles.title}>
				<h1>Contact Me</h1>
				<div className={styles.contactCard}>
					<h3>Let's get in touch!</h3>
				</div>
			</header>
		</main>
	);
}
