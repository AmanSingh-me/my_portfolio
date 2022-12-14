function Navabar() {
  return (
    <nav className="sm:flex hidden" >
      {
        [
            { menu_name: "Skills", href: "#skills" },
            { menu_name: "Projects", href: "#projects" },
            { menu_name: "Education", href: "#education" },
            { menu_name: "Blogs", href: "#blogs" },
            { menu_name: "Contact", href: "#contact" },
        ].map((obj) => {
               return (
                    <a href={obj.href} className="ml-7 text-white-300 hover:text-teal hover:underline hover:underline-offset-8 text-lg "> {obj.menu_name} </a>
                )
            })
      }
      
    </nav>
  );
}


export default Navabar;
