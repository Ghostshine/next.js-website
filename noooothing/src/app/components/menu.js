import Link from "next/link";

export default function Menu() {
  return (
    <div>
        <img src="/logo.gif" alt="logo" className="logo" />
        <div className="menu-container container">
            <ul className="menu-items">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/more">Więcej</Link></li>
            </ul>
        </div>
    </div>
  );
}
