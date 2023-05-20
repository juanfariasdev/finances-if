export function MenuItem({ icon, text, active }) {
  return (
    <a
      href="#a"
      className={`flex p-2 gap-2 items-center rounded ${
        active && " bg-emerald-600"
      }`}
    >
      {/* ICON */}
      {icon}
      {/* TEXTO */}
      <span className="">{text}</span>
    </a>
  );
}
