export const About = () =>{

    const frontendskills=[
        "HTML",
        "CSS",
        "Javascript",
        "TailwindCSS",
        "Bootstrap",
    ];

    return <section id="about" className="min-h-screnn items-center justify-center py-20">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>
            <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">
                <p className="text-gray-300 mb-6 ml-10">
                    Passionate software developer and problem solver who loves to build new things.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                      <h3 className="text-xl font-bold mb-4">Frontend </h3>
                      <div className="flex flex-wrap gap-2">
                        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"  className="bg-blue-500/10 text-blue-500 py-1 px-3  text-sm hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">HTML</a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"  className="bg-blue-500/10 text-blue-500 py-1 px-3  text-sm hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">CSS</a>
                        <a href="https://tailwindcss.com/"  className="bg-blue-500/10 text-blue-500 py-1 px-3  text-sm hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">TailwindCSS</a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"  className="bg-blue-500/10 text-blue-500 py-1 px-3  text-sm hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">Javascript</a>
                        <a href="https://react.dev/"  className="bg-blue-500/10 text-blue-500 py-1 px-3  text-sm hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">React</a>
                        <a href="https://www.figma.com/"  className="bg-blue-500/10 text-blue-500 py-1 px-3  text-sm hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">Figma</a>

                      </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                      <h3 className="text-xl font-bold mb-4">Backend</h3>
                      <div className="flex flex-wrap gap-2">
                        <a href="https://nodejs.org/"  className="bg-blue-500/10 text-blue-500 py-1 px-3  text-sm hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">NodeJs</a>
                        <a href="https://expressjs.com/"  className="bg-blue-500/10 text-blue-500 py-1 px-3  text-sm hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">ExpressJs</a>
                        <a href="https://www.mongodb.com/?msockid=0164b220a95562382a6ca1b5a8966357"  className="bg-blue-500/10 text-blue-500 py-1 px-3  text-sm hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">MongoDB</a>
                        <a href="https://www.mysql.com/"  className="bg-blue-500/10 text-blue-500 py-1 px-3  text-sm hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">SQL</a>
                        <a href="https://firebase.google.com/"  className="bg-blue-500/10 text-blue-500 py-1 px-3  text-sm hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">Firebase</a>
                        <a href="https://www.python.org/"  className="bg-blue-500/10 text-blue-500 py-1 px-3  text-sm hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">Python</a>
                        
                      </div>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 ">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">
                <h3 className="text-xl font-bold mb-4">Education
                </h3>
                   <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>
                        <strong>B.E. in Electronics & Communication Engineering</strong> - Dayananda Sagar Collge of Engineering (2021-2025)
                      </li>
                      <li>
                        <strong>Senior Secondary School</strong> - Don Bosco Academy Patna (2019-2021)
                      </li>
                   </ul>
                </div>

                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">
                <h3 className="text-xl font-bold mb-4">Achievements
                </h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>
                        <strong>Ranked 2nd in institute at GeeksforGeeks among 1200 participants</strong>
                      </li>
                      <li>
                        <strong>Solved 1500+ problems across platforms like LeetCode, CodeChef, GeeksforGeeks, and Codeforces</strong>
                      </li>
                      
                      <li>
                        <strong>Achieved Rank 881 out of 7000+ in coding competition organized by IIT Madras</strong>
                      </li>
                   </ul>
                   </div>
            </div>
        </div>

        <div>
  <div className="marquee-track animate-marquee mt-20">
  {/* First group */}
  <div className="flex gap-12">
    <a href="https://www.codechef.com/users/shaeen69" className="bg-blue-500/10 text-blue-500 py-1 px-3  text-sm hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">Codechef</a>
    <a href="https://codeforces.com/profile/kumarshaleen" className="bg-blue-500/10 text-blue-500 py-1 px-3  text-sm hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">Codeforces</a>
    <a href="https://leetcode.com/u/shaleen69/" className="bg-blue-500/10 text-blue-500 py-1 px-3  text-sm hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">Leetcode</a>
    <a href="https://www.geeksforgeeks.org/user/kumarshac400/" className="bg-blue-500/10 text-blue-500 py-1 px-3  text-sm hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">Geeks for Geeks</a>
    <a href="https://www.linkedin.com/in/kumar-shaleen-087b57314/" className="bg-blue-500/10 text-blue-500 py-1 px-3  text-sm hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">Linkedin</a>
    <a href="https://github.com/shaleen69" className="bg-blue-500/10 text-blue-500 py-1 px-3  text-sm hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">Github</a>
    
  </div>

  {/* Second group */}
  <div className="flex gap-12">
    <a href="https://www.codechef.com/users/shaeen69" className="ml-12 bg-blue-500/10 text-blue-500 py-1 px-3  text-sm hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">Codechef</a>
    <a href="https://codeforces.com/profile/kumarshaleen" className="bg-blue-500/10 text-blue-500 py-1 px-3  text-sm hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">Codeforces</a>
    <a href="https://leetcode.com/u/shaleen69/" className="bg-blue-500/10 text-blue-500 py-1 px-3  text-sm hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">Leetcode</a>
    <a href="https://www.geeksforgeeks.org/user/kumarshac400/" className="bg-blue-500/10 text-blue-500 py-1 px-3  text-sm hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">Geeks for Geeks</a>
    <a href="https://www.linkedin.com/in/kumar-shaleen-087b57314/" className="bg-blue-500/10 text-blue-500 py-1 px-3  text-sm hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">Linkedin</a>
    <a href="https://github.com/shaleen69" className="bg-blue-500/10 text-blue-500 py-1 px-3  text-sm hover:border-blue-500/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition">Github</a>
  </div>

  
</div>
        </div>

    </section>
}