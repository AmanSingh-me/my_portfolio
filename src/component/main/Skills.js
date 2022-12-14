import Html_svg from "../../assets/icons/html.svg"
import Css_svg from "../../assets/icons/css.svg"
import Tailwind_svg from "../../assets/icons/tailwind-css.svg"
import Bootstrap_svg from "../../assets/icons/bootstrap.svg"
import Javascript_svg from "../../assets/icons/javascript.svg"
import React_svg from "../../assets/icons/react-js.svg"
import Git_svg from "../../assets/icons/git.svg"


function Skills(){
    return(
        <section id="skills" >
            <div className="flex items-center" >
                <h3 className="md:text-4xl sm:text-3xl text-2xl mr-5">Skills</h3>
                <div className="border-t-4 border-white-300 border-dashed w-full"></div>
            </div>
            
            <div className="py-3" >

                {
                    [
                        { skillName:"html", icon: Html_svg, skill_Percent: "80"}, 
                        { skillName:"css", icon: Css_svg, skill_Percent: "70"}, 
                        { skillName:"tailwind css", icon: Tailwind_svg, skill_Percent: "70"}, 
                        { skillName:"bootstrap", icon: Bootstrap_svg, skill_Percent: "75"}, 
                        { skillName:"javascript", icon: Javascript_svg, skill_Percent: "80"}, 
                        { skillName:"react js", icon: React_svg, skill_Percent: "10"}, 
                        { skillName:"git", icon: Git_svg, skill_Percent: "50"}
                    ].map((obj) => {
                        return(
                            <div className=" bg-blue-400 my-5 py-2 px-3 flex items-center" >
                                <img src={obj.icon} alt="HTML" className="xs:w-10 w-7" />
                                <h4 className="uppercase mt-1 sm:mx-10 mx-5">{obj.skillName}</h4>

                                <div className="w-full bg-white-300">
                                    <div className="bg-pink xs:h-1.5 h-1 text-xs leading-3 text-center" 
                                    style={{width: `${obj.skill_Percent}%`}}>
                                    </div>
                                </div>
                            </div>
                        )           
                    })
                }

            </div>
            
        </section>
    )
}

export default Skills;