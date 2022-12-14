

function About(){
    return(
        <section className=" min-h-[75vh] flex items-center" id="about" >

            <div className="" >
                <h4 className="md:text-3xl text-2xl pl-1.5" >Hello I'm</h4>
                <h3 className="mt-3 mb-5 font-bold md:text-7xl sm:text-5xl text-4xl">Aman Singh</h3>
                <h4 className="sm:text-3xl text-2xl" >
                    I'm <span className=" text-green underline underline-offset-8">Frontend&nbsp;Developer</span>
                </h4>
                <h4 className="mt-5 md:text-xl text-lg" > I am passionate about building solid, scalable frontend products</h4>
            </div>

        </section>
    )
}

export default About;