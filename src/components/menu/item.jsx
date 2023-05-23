import { Link, useLocation } from "react-router-dom";

export function MenuItem({ icon, text, url }) {
  const { pathname } = useLocation();
  const active = pathname === url;
  return (
    <Link to={url}>
      <div
        className={`flex p-2 gap-2 items-center rounded ${
          active && " bg-emerald-600"
        }`}
      >
        {/* ICON */}
        {icon}
        {/* TEXTO */}
        <span className="">{text}</span>
      </div>
    </Link>
  );
}
