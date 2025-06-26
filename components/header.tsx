import { Link } from "@remix-run/react";

export function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <Link to="/">
        <h1 className="text-xl font-bold">next-app</h1>
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="#">Menu Item 1</Link>
          </li>
          <li>
            <Link to="#">Menu Item 2</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
