import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <a>בית</a>
                    </Link>
                </li>
                <li>
                    <Link href="/entries">
                        <a>ערכים</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>על אודות</a>
                    </Link>
                </li>
                <li>
                    <Link href="/entries/add">
                        <a>הוספת ערך</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
