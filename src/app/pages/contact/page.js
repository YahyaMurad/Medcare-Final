const ContactPage = () => {
  return (
    <div className="p-10 bg-slate-200">
      <div className="grid items-center justify-center gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">Get in touch</h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed text-slate-600 xl:text-xl/relaxed">
            Have a question or want to work together? Fill out the form and we will get back to you as soon as possible.
          </p>
        </div>
        <div className="w-full max-w-md space-y-4">
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <label className="text-black" htmlFor="name">Name</label>
                <input className="input w-full placeholder:text-white placeholder:opacity-60 text-white" id="name" placeholder="Enter your name" type="name" />
              </div>
              <div className="space-y-2">
                <label className="text-black" htmlFor="email">Email</label>
                <input className="input w-full placeholder:text-white placeholder:opacity-60 text-white" id="email" placeholder="Enter your email" type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-black" htmlFor="subject">Subject</label>
              <input className="input w-full placeholder:text-white placeholder:opacity-60 text-white" id="subject" placeholder="Enter your subject" type="subject" />
            </div>
            <div className="space-y-2">
              <label className="text-black" htmlFor="message">Message</label>
              <textarea class="w-full textarea textarea-bordered min-h-[120px] placeholder:text-white text-white placeholder:opacity-60" id="message" placeholder="Enter your message"></textarea>
            </div>
            <button className="w-full btn text-white" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage