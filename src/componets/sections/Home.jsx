export const Home=()=>{
    return <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl  font-bold md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
                Hi, I'm Kumar Shaleen
            </h1>
            <p className="text-4xl  text-lg mb-8 max-w-lg mx-auto">
               I am full stack developer who loves creating clean, scalable web application. Integrating advanced technology in real world projects helps me to solve real world issues.
            </p>
            <div className="flex justify-center space-x-4">
               <a href="#projects" className="bg-blue-500  text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_15px_rgba
               (59,130,246,0.4)">View Projects</a>

               <a href="#contact" className="border border-blue-500/50  text-blue-500 py-3 px-6 rounded font-medium tarnsition-all duartion-200 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">Contact Me</a>
            </div>
        </div>
    </section>
}