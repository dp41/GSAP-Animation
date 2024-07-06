import { navLists } from "../constants/index";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center fixed z-20">
      <nav className="flex w-full screen-max-width">
        <h1 className="text-2xl font-bold text-black">Nate Products</h1>
        <div className="mt-2 flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div key={nav} className="px-5 text-xl cursor-pointer text-black hover:text-gray transition-all">
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <button className="btn px-2 py-1">Order Now</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
