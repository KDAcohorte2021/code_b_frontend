import Link from "next/link";
export default function Home() {
	return (
		<div>
			<Link href="/login">login</Link>
			<Link href="/signup">signup</Link>
		</div>
	);
}
