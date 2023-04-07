export interface Address {
	formattedAddress: string;
	number: string;
	street: string;
	city: string;
	postalCode: string;
	country: string;
}

export interface User {
	firstName: string;
	lastName: string;
	companyName: string;
	type: "USER" | "COMPANY";
	email: string;
	phone: string;
	address: Address;
	taxNumber: string;
	icon: string;
}

export interface LineItem {
	tableKey: string;
	value: string;
}

export interface TableHeader {
	headerItems: TableHeaderItem[];
}

export interface TableHeaderItem {
	header: string;
	value: string;
}

export interface Table {
	title: string;
	backgroundColor: string;
	header: TableHeader;
	columns: TableItem[];
}

export interface TableItem {
	name: string;
	key: string;
	size: number;
	color: string;
}

export interface Tax {
	taxRate: number;
	taxAmount: number;
}

export interface TotalDetails {
	color: string;
	displayTaxes: boolean;
	totalWithoutTaxes: number;
	totalWithTaxes: number;
	taxes: Tax[];
	totalTaxAmount: number;
	tip: number;
	shippping: number;
}

export interface PdfConfig {
	documentTitle: string; // FACTURE / RECU
	sender: User;
	receiver: User;
	table: Table;
	lines: LineItem[][];
	total: TotalDetails;
	bottomSection: string;
	footer: string;
}
