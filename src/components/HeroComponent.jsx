import React from 'react'

const HeroComponent = () => {
    return (
        <section className="min-h-screen bg-black flex items-center justify-center p-4 rounded-xl">
            <div className="w-full max-w-6xl h-full flex flex-col justify-center items-center bg-white/5 backdrop-blur-md rounded-xl px-6 py-12 md:px-16 md:py-24 shadow-2xl border border-white/10 text-center">
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-open-sans">
                    Hi, I’m Ankit
                </h1>
                <p className="text-base text-justify sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl">
                    I build robust, scalable systems that power real-time analytics, automate complex processes, and keep apps running at 99.9% uptime. With deep experience in Java, Spring Boot, and SQL, I turn backend logic into business impact — securely, efficiently, and fast.
                </p>
            </div>
        </section>
    )
}
export default HeroComponent
