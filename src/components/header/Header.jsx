import CusBtn from "../shared/UI/CusBtn";
import Logo from "./Logo";
import NavItems from "./NavItems";

const Header = () => {
  return (
    <header className="bg-black">
      <div className="container h-[108px] flex items-center gap-[40px]">
        {/* Logo Component */}
        <Logo />

        <div className="flex flex-1 items-center justify-end md:justify-between">
          {/* Nav Items Component */}
          <NavItems />

          <div className="block">
            {/* Custom Button Component */}
            <CusBtn py="py-[10px]" text="text-[16px]" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
