import React from "react";

const Routes = [
  {
    name: "Master",
    href: "#",
  },
  {
    name: "SyberSecurity",
    href: "#",
  },
  {
    name: "Some",
    href: "#",
  },
  {
    name: "One",
    href: "#",
  },
];

const Nav = () => {
  return (
    <div className="p-4 flex flex-col no-scrollbar gap-2 font-thin overflow-x-scroll overflow-y-hidden">
      {Routes.map((route) => (
        <a
          key={route.name}
          href={route.href}
          className="text-gray-600 hover:text-gray-700 duration-150"
        >
          {route.name}
        </a>
      ))}
    </div>
  );
};

export default Nav;
