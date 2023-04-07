import { TableHeaderItem } from "@/types";

const HeaderItems: React.FC<{ items: TableHeaderItem[] }> = ({ items }) => {
	return (
		<div>
			{items.map(({ header, value }) => {
				return (
					<div
						key={header}
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<h3
							style={{
								margin: 0,
								marginRight: "5px",
								fontWeight: "bold",
							}}
						>
							{header}:{" "}
						</h3>
						<p style={{ margin: 0 }}> {value}</p>
					</div>
				);
			})}
		</div>
	);
};

export default HeaderItems;
