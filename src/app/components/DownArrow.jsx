import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "../styles/ComponentStyles/DownArrow.module.scss";

const DownArrow = () => {
	return (
		<div className={styles.downArrowContainer}>
			<KeyboardArrowDownIcon fontSize='large' />
		</div>
	);
};

export default DownArrow;
