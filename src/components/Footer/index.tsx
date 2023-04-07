const Footer: React.FC<{ footer: string }> = ({ footer }) => {
	return (
		<div
			style={{
				textAlign: "center",
			}}
		>
			{footer.split("\n").map((item, idx) => {
				return (
					<p
						key={idx}
						style={{
							margin: 0,
						}}
					>
						{item}
					</p>
				);
			})}
		</div>
	);
};

export default Footer;
