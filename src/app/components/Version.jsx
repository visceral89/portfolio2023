import packageInfo from "../../package.json";

const Version = () => {
	return (
		<div>
			<p>Version: {packageInfo.version}</p>
		</div>
	);
};

export default Version;
