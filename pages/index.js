import Link from "next/link";
export default function Home() {
	return (
		<div>
			<Link href="/login">login</Link>
			<Link href="/signup">signup</Link>
			<Link href="/email-confirmation">confirmation</Link>
			<Link href="/profil">Profil</Link>
		</div>
	);
}
