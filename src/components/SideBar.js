import useNavigationHook from "../hooks/use-navigation-hook";
import Link from "./Link";

function SideBar() {
  const { currentPath } = useNavigationHook();

  const links = [
    { label: "Dropdown", to: "/" },
    { label: "Button", to: "/button" },
    { label: "Accordion", to: "/accordion" },
    { label: "Modal", to: "/modal" },
    { label: "Table", to: "/table" },
  ];

  const renderedList = links.map((link) => {
    const className = `py-1.5 px-3 text-blue-400 block hover:border-l hover:border-l-4 transition-all  ${
      currentPath === link.to ? "border-l border-l-4 font-bold" : ""
    }`;

    return (
      <li key={link.to} className="mb-2">
        <Link className={className} to={link.to}>
          {link.label}
        </Link>
      </li>
    );
  });

  return (
    <div className="p-6 w-44 border-r border-slate-400 inline-block h-full">
      <ul>{renderedList}</ul>
    </div>
  );
}

export default SideBar;
