import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";


const Nav = ({sidebar}) => {

    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img src={headerLogo} alt="Logo" width={130} height={29} />
                </a>

                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className="font-montserrat leading-normal text-lg p-3 text-slate-gray hover:bg-slate-500 hover:text-slate-100 transition-all rounded-lg"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <img onClick={sidebar} className="max-lg:block hidden" src={hamburger} alt="Hamburger" width={25} height={25} />
            </nav>
        </header>
    );
};

export default Nav;
