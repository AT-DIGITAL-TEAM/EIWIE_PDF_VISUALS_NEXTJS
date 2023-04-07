import { TotalDetails as TotalType } from "@/types";

const TotalDetails: React.FC<{ total: TotalType }> = ({ total }) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				flex: 0.3,
			}}
		>
			<div
				style={{
					display: "flex",
					flex: 1,
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					width: "90%",
					alignSelf: "flex-end",
				}}
			>
				<p>Total HT</p>
				<p>{total.totalWithoutTaxes}</p>
			</div>

			<div
				style={{
					display: "flex",
					flex: 1,
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					width: "90%",
					alignSelf: "flex-end",
				}}
			>
				<p>TVA</p>
				<p>{total.totalTaxAmount}</p>
			</div>

			{total.displayTaxes &&
				total.taxes.map((tax) => {
					return (
						<div
							key={tax.taxRate}
							style={{
								display: "flex",
								flex: 1,
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "space-between",
							}}
						>
							<p>TVA {tax.taxRate}%</p>
							<p>{tax.taxAmount}</p>
						</div>
					);
				})}

			<div
				style={{
					display: "flex",
					flex: 1,
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					fontWeight: "bold",
				}}
			>
				<p>Total TTC</p>
				<p>{total.totalWithTaxes}</p>
			</div>
		</div>
	);
};

export default TotalDetails;
