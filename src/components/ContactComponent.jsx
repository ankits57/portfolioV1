import React from 'react'

const ContactComponent = () => {
    return (
        <section id="contact" className="py-10 mt-5 rounded-md bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-700 text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-5xl font-bold mb-4">Get in Touch</h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                    Whether you’re looking to collaborate, hire, or just connect, feel free to reach out. I’m always open to meaningful conversations.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-6 text-lg">
                    <a href="mailto:ankitsaurabh57@gmail.com" className="hover:text-pink-300 transition">ankitsaurabh57@gmail.com</a>
                    <a href="https://www.linkedin.com/in/ankit57/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition">LinkedIn ↗</a>
                    <a href="https://github.com/ankits57" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition">GitHub ↗</a>
                </div>
            </div>
        </section>
    )
}
export default ContactComponent
