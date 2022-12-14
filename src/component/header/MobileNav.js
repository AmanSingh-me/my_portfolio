import Hamburger_svg from "../../assets/icons/hamburger-solid.svg";
// import Xmark_svg from "../../assets/icons/xmark-solid.svg";


function MobileNav(){
    return(
        <div className="sm:hidden" >
            <img src={Hamburger_svg} alt="menu" className="w-6 cursor-pointer" />
            <div className="absolute top-14 left-0 p-3 transition-all h-1 w-full bg-green overflow-hidden">
            {
                [
                    { menu_name: "Skills", href: "#skills" },
                    { menu_name: "Projects", href: "#projects" },
                    { menu_name: "Education", href: "#education" },
                    { menu_name: "Blogs", href: "#blogs" },
                    { menu_name: "Contact", href: "#contact" },
                ].map((obj) => {
               return (
                    <a href={obj.href} target="_blank" rel="noreferrer" className="text-white-300 hover:text-[#fff] block my-2"> {obj.menu_name} </a>
                )
            })
      }
            </div>
        </div>
    )
}

export default MobileNav;