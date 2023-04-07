const BottomSectionInfo: React.FC<{ bottomSection: string }> = ({
	bottomSection,
}) => {
	if (!bottomSection) return <></>;

	return (
		<div
			style={{
				padding: 10,
				borderRadius: 8,
				borderColor: "#C3C7CB",
				borderWidth: 1,
				borderStyle: "solid",
			}}
		>
			<p>{bottomSection}</p>
		</div>
	);
};

export default BottomSectionInfo;
