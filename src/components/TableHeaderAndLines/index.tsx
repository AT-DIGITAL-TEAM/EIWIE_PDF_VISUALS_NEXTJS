import { LineItem, PdfConfig } from "@/types";

const TableHeaderAndLines: React.FC<{ pdf: PdfConfig }> = ({ pdf }) => {
	const { table, lines } = pdf;

	const getColValueFromLine = (col: string, line: LineItem[]) => {
		const lineVal = line.find((i) => i.tableKey === col);

		return lineVal ? lineVal.value : "-";
	};

	const displayTableLine = (line: LineItem[]) => {
		return (
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
					minHeight: 50,
				}}
			>
				{table.columns.map((column) => {
					return (
						<div
							style={{
								flex: column.size,
							}}
							key={column.key}
						>
							<p>{getColValueFromLine(column.key, line)}</p>
						</div>
					);
				})}
			</div>
		);
	};

	const displayTableLines = () => {
		return (
			<div
				style={{
					padding: 0,
					borderBottom: "1px solid #ccc",
				}}
			>
				{lines.map((line, idx) => (
					<div key={idx}>{displayTableLine(line)}</div>
				))}
			</div>
		);
	};

	const displayTableHeader = () => {
		return (
			<div
				className="table-header"
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					background: "#00045C !important",
					backgroundColor: "#00045C !important",
					borderRadius: 8,
					paddingLeft: 10,
					paddingRight: 10,
					minHeight: 50,
				}}
			>
				{table.columns.map((column) => {
					return (
						<div
							style={{
								flex: column.size,
							}}
							key={column.key}
						>
							<p
								style={{
									color: column.color,
								}}
							>
								{column.name}
							</p>
						</div>
					);
				})}
			</div>
		);
	};

	return (
		<div>
			{table.title && (
				<div style={{ marginBottom: "20px" }}>
					<p>{table.title}</p>
				</div>
			)}

			<div>{displayTableHeader()}</div>

			<div>{displayTableLines()}</div>
		</div>
	);
};

export default TableHeaderAndLines;
