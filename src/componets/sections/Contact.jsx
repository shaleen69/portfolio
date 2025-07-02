import emailjs from 'emailjs-com'
import { useState } from 'react'
export const Contact=()=>{
   
   const SERVICE_ID="service_ncdrm9d";
   const TEMPLATE_ID="template_s1ecjqb";
   const EMAILJS_PUBLIC_KEY="v--QlRU0HUh2r9MWl";

   const [formData,setFormData]=useState({
      name:"",
      email:"",
      message:""
   })
   

   const handlesubmit=(e)=>{
      
      e.preventDefault();
      emailjs.sendForm(
         SERVICE_ID,
         TEMPLATE_ID,
         e.target,
         EMAILJS_PUBLIC_KEY).then((res)=>{
         alert("Message sent successfully");
         setFormData({name:"",email:"",message:""})
      }).catch(()=>alert("Oops Somethong Went wrong"));
   };

   return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
     <div className="px-4 w-full max-w-xl">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Get In Touch</h2>
        <form className="space-y-6" onSubmit={handlesubmit}>

         <div  className="relative">
            <input type="text" id="name" name="name" required value={formData.name} 
            placeholder="Name" className="w-full h-30px bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus-bg-blue-500/5"
            onChange={(e)=>{
               setFormData({...formData,name:e.target.value})
            }} />
         </div>

         <div  className="relative">
            <input type="email" id="email" name="email" required value={formData.email} 
            placeholder="Email" className="w-full h-30px bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus-bg-blue-500/5" 
             onChange={(e)=>{
               setFormData({...formData,email :e.target.value})
            }}/>
         </div>

         <div  className="relative">
            <textarea  id="message" name="message" required rows={5} 
            placeholder="Message" className="w-full h-30px bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus-bg-blue-500/5"
             onChange={(e)=>{
               setFormData({...formData,message:e.target.value})
            }} />
         </div>

         <button type="submit" onClick={()=>{

         }} className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.8)]">Send Message</button>
        </form>
     </div>
    </section>
   )
}