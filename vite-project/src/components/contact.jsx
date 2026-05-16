import React,{ useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import {MdSend} from 'react-icons/md'
import { Mail, Phone, MapPin, CheckCircle, AlertCircle} from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "masinedonald@gmail.com",
      to: "mailto:masinedonald@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+27 714 366 053",
      to: "" 
    },
    {
      icon: FaWhatsapp,
      label: "Whatsapp",
      value: 'https://wa.me/27647266704',
      to: 'https://wa.me/27647266704'
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Johannesburg, South Africa",
      to: ""
    }
  ]
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  })
  // Function to send the message
  const handleSubmit = async (e) =>{
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({type: null, message: ""});
    try{
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Checking if we're using the correct environment variables
      if(!serviceId || !templateId || !publicKey){
        throw new Error(
          "EmailJS configuration variables are missing"
        );
      }
      await emailjs.send(serviceId, templateId, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }, publicKey)
      // If successfull
      setSubmitStatus({
        type: "success",
        message: "Message sent successfully."
      })
      // Reset the form data
      setFormData({
        name: "",
        email:"",
        message:""
      })
    }
    catch(error){
      alert("Error occured trying to send email")
      console.log("Error occured trying to send email", error.message)
      setSubmitStatus({
        type: "error",
        message: error.message || "Error occured trying to send email"
      })
    }
    finally{
      setIsLoading(false);
    }
  }
  return (
    <section id='contact' className='relative overflow-hidden'>
      <div className='absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2'/>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="leftColumn space-y-4">
          <div className="title flex items-center justify-center text-4xl md:text-5xl animate-fade-in text-secondary-foreground font-medium tracking-wider uppercase">
            <span>Contact Me</span>
          </div>
          <h2 className='flex items-center justify-center font-serif italic animate-fade-in animation-delay-100 text-white'>
            Please feel free to
           <span className='font-serif italic font-normal text-secondary-foreground'> reach out </span>
           through any of the following channels 
          </h2>
        </div>

        {/* Container */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <form onSubmit={handleSubmit}>
              <div className="">
                <label htmlFor="name" className='block text-sm font-medium mb-2'>Name</label>
                <input id='name' type="text" required placeholder='Your name' value={formData.name} onChange={(e)=>setFormData({...formData, name: e.target.value})}
                className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all'/>
              </div>
              <div className="">
                <label htmlFor="email" className='block text-sm font-medium mb-2'>Email</label>
                <input id='email' type="email" required placeholder='youremail@gmail.com' value={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})}
                className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all'/>
              </div>
              <div className="">
                <label htmlFor="message" className='block text-sm font-medium mb-2'>Message</label>
                <textarea rows={5} id='message' type="text" required placeholder='Full message' value={formData.message} onChange={(e)=>setFormData({...formData, message: e.target.value})}
                className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none'/>
              </div>
              <button type='submit' disabled={isLoading}className='bg-primary rounded-full w-full h-10 text-lg flex items-center justify-center gap-2'>
               {isLoading ? (
                  <>Sending...</>
               ):(
                  <> Send <MdSend size={20} /> </>
               )}
              </button>

              {submitStatus.type && (
                <div className={`flex items-center gap-3 p-4 rounded-xl ${submitStatus.type === "success" ? 
                  "bg-green-500/10 border border-green-500/20 text-white" :
                  "bg-red-500/10 border border-red-500/20 text-red-500"
                }`}>
                  {submitStatus.type === "success" ? (
                    <CheckCircle className='w-5 h-5 flex-shrink-0' />
                  ):(
                    <AlertCircle className='w-5 h-5 flex-shrink-0' />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
