import NavItem from "./NavItem";
import { navItems } from "../../../data/navItems";

const NavItems = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-[40px] text-sm font-medium">
        {/* Loops all Nav Items */}
        {navItems.map((item, index) => (
          <NavItem key={index + 1} name={item} />
        ))}
      </ul>
    </nav>
  );
};

export default NavItems;
