import { PdfConfig } from "@/types";
import { useRouter } from "next/router";
import BottomSectionInfo from "../components/BottomSection";
import Footer from "../components/Footer";
import HeaderItems from "../components/HeaderItems";
import SenderReceiver from "../components/SenderReceiver";
import TableHeaderAndLines from "../components/TableHeaderAndLines";
import TotalDetails from "../components/TotalDetails";

const Pdf: React.FC<{}> = ({}) => {
	const router = useRouter();
	const { pdfConfig } = router.query;

	console.log("pdfConfig", pdfConfig);

	let formattedPdf =
		(Array.isArray(pdfConfig) ? pdfConfig[0] : pdfConfig) || "";

	// formattedPdf = formattedPdf.substring(1, formattedPdf.length - 1);

	console.log("formattedPdf", formattedPdf);

	let pdf: PdfConfig | null = null;

	try {
		pdf = JSON.parse(formattedPdf);
	} catch (err) {
		console.log("err", err);
	}

	if (!pdf) return <></>;

	return (
		<div
			style={{
				padding: "20px 10px",
				minWidth: "600px",
				margin: "0px auto",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "flex-start",
					justifyContent: "space-between",
				}}
			>
				<div style={{ flex: 0.5 }}>
					<SenderReceiver user={pdf.sender} />
				</div>

				<div>
					<h1 style={{ fontWeight: "bold" }}>{pdf.documentTitle}</h1>

					<div style={{ marginTop: "20%" }}>
						<SenderReceiver user={pdf.receiver} />
					</div>
				</div>
			</div>

			<div style={{ marginTop: "20px" }}>
				<HeaderItems items={pdf.table.header.headerItems} />
			</div>

			<div style={{ marginTop: "20px" }}>
				<TableHeaderAndLines pdf={pdf} />
			</div>

			<div
				style={{
					marginTop: "20px",
					display: "flex",
					flexDirection: "row",
					justifyContent: "flex-end",
					marginRight: "20px",
				}}
			>
				<TotalDetails total={pdf.total} />
			</div>

			<div
				style={{
					position: "absolute",
					left: 10,
					right: 10,
					bottom: 10,
				}}
			>
				<BottomSectionInfo bottomSection={pdf.bottomSection} />

				<div style={{ marginTop: "20px" }}>
					<Footer footer={pdf.footer} />
				</div>
			</div>
		</div>
	);
};

export default Pdf;
