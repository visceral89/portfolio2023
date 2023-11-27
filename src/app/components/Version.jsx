import packageInfo from "../../package.json";

const Version = () => {
	return (
		<div>
			<p>Version: {packageInfo.Version}</p>
		</div>
	);
};

export default Version;
