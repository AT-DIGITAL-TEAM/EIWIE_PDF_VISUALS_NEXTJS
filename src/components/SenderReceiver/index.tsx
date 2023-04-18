import { User } from "@/types";
import Image from "next/image";
const SenderReceiver: React.FC<{ user: User }> = ({ user }) => {
	const displayUserInformation = () => {
		return (
			<div>
				<div>
					<p>
						{user.firstName} {user.lastName}
					</p>
				</div>

				<div>
					{user.email && (
						<a type="button" href={`mailto:${user.email}`}>
							{" "}
							<p>Email: {user.email}</p>{" "}
						</a>
					)}
					{user.phone && (
						<a type="button" href={`tel:${user.phone}`}>
							<p>Tél: {user.phone}</p>
						</a>
					)}
				</div>
			</div>
		);
	};

	const displayCompanyInformation = () => {
		return (
			<div>
				{user.icon && (
					<div style={{ marginBottom: "10px" }}>
						<Image src={user.icon} alt="Company icon" height={35} width={115} />
					</div>
				)}
				<div>
					<p>{user.companyName}</p>
				</div>

				<div>
					<p>
						{user.address.number} {user.address.street}
					</p>
					<p>
						{user.address.postalCode} {user.address.city}
					</p>
					<p>{user.address.country}</p>
				</div>
				<div>
					{user.email && (
						<a type="button" href={`mailto:${user.email}`}>
							{" "}
							<p>Email: {user.email}</p>{" "}
						</a>
					)}
					{user.phone && (
						<a type="button" href={`tel:${user.phone}`}>
							<p>Tél: {user.phone}</p>
						</a>
					)}
					{user.taxNumber && <p>Siret: {user.taxNumber}</p>}
				</div>
			</div>
		);
	};

	const displayContent = () => {
		if (user.type === "COMPANY") {
			return displayCompanyInformation();
		}

		return displayUserInformation();
	};

	return <div>{displayContent()}</div>;
};

export default SenderReceiver;
