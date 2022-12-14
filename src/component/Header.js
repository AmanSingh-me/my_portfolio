import Logo from "./header/Logo";
import Navbar from "./header/Navbar";
import MobileNav from "./header/MobileNav";


function Header(){
    return(
        <header  className="flex justify-between items-center">
            <Logo/>
            <Navbar/>
            <MobileNav/>
        </header>
    )
}

export default Header;