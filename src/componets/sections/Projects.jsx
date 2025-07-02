export const Projects= ()=>{
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border-white/10 hover:-translate-y-3 hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">
                        <h3 className="font-bold">Blog Webiste</h3>
                        <p>Built a secure blog website with React, Vite, Tailwind CSS, and Firebase, featuring authentication, CRUD operations, and smooth navigation.</p>
                        <div className="mt-5 flex gap-3">
                            {["React","Firebase","TailwindCSS","Redux"].map((tech,key)=>{
                                return(<span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3  text-sm hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">
                                    {tech}
                                </span>);
                            })}
                        </div>
                        
                        <div className="flex items-center">
                            <a href="https://github.com/shaleen69/blog-website" className="text-blue-400 hover:text-blue-300 transition-colors my-4 bg-blue-500/10 text-blue-500 py-1 px-3  text-sm hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">View Project -&gt; </a>
                        </div>
                        
                    </div>

                    <div className="p-6 rounded-xl border-white/10 hover:-translate-y-3 hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">
                        <h3 className="font-bold">AI-Gemini-Chatbot</h3>
                        <p>Developed a responsive AI chatbot using React, Vite, and Gemini API with Axios for efficient response handling and Postman for API key validation.</p>
                        <div className="mt-5 flex gap-3">
                            {["React","API's","TailwindCSS","Redux","Postman"].map((tech,key)=>{
                                return(<span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3  text-sm hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">
                                    {tech}
                                </span>);
                            })}
                        </div>

                        <div className="flex items-center">
                            <a href="https://github.com/shaleen69/AI-gemini-chatbot" className="text-blue-400 hover:text-blue-300 transition-colors my-4 bg-blue-500/10 text-blue-500 py-1 px-3  text-sm hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">View Project -&gt; </a>
                        </div>
                        
                    </div>

                     <div className="p-6 rounded-xl border-white/10 hover:-translate-y-3 hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">
                        <h3 className="font-bold">Employee Management System</h3>
                        <p>Built a task management system using React and Tailwind with local storage, featuring secure auth, admin task assignment, and a real-time employee dashboard with task stats.</p>
                        <div className="mt-5 flex gap-3">
                            {["React","Firebase","TailwindCSS","Redux"].map((tech,key)=>{
                                return(<span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3  text-sm hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">
                                    {tech}
                                </span>);
                            })}
                        </div>
                        <div className="flex items-center">
                            <a href="https://github.com/shaleen69/Employee-management-system" className="text-blue-400 hover:text-blue-300 transition-colors my-4 bg-blue-500/10 text-blue-500 py-1 px-3  text-sm hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">View Project -&gt; </a>
                        </div>
                        
                        
                    </div>

                     <div className="p-6 rounded-xl border-white/10 hover:-translate-y-3 hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">
                        <h3 className="font-bold">Weather Forecast Application</h3>
                        <p>Built a responsive weather forecasting app using React that auto-detects user location and displays real-time weather data.</p>
                        <div className="mt-5 flex gap-3">
                            {["HTML","CSS","Javascript","API","Postman"].map((tech,key)=>{
                                return(<span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3  text-sm hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">
                                    {tech}
                                </span>);
                            })}
                        </div>
                        <div className="flex items-center">
                            <a href="https://github.com/shaleen69/weather-forecast-application" className="text-blue-400 hover:text-blue-300 transition-colors my-4 bg-blue-500/10 text-blue-500 py-1 px-3  text-sm hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">View Project -&gt; </a>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </section>
    )
}