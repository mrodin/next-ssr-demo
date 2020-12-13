import Link from "next/link";

export const Menu = () => (
    <div className="pt-4">
        <Link href="/">
            <a>Home</a>
        </Link>
        <span> | </span>
        <Link href="/sources">
            <a>Sources</a>
        </Link>
    </div>
);

export default Menu;
