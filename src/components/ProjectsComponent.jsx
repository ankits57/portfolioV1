import React from 'react'

const ProjectsComponent = () => {
    return (
        <section id="projects" className="py-10 bg-white text-black">
            <div className="max-w-8xl mx-auto px-4">
                <h2 className="text-5xl font-bold mb-4">Projects</h2>
                <p className="text-lg text-gray-600">
                    A selection of work that reflects my commitment to building efficient and scalable web applications.
                </p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {/* Project 1 */}
                <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg p-6 overflow-hidden transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
                    <div className="absolute inset-0 opacity-10 group-hover:opacity-20 bg-cover bg-center rounded-xl" style={{ backgroundImage: 'url(https://source.unsplash.com/800x600/?hotel)' }}></div>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-semibold mb-2 text-white">Hotel Booking Platform</h3>
                        <p className="text-gray-300 mb-4">
                            Full-stack hotel booking system with secure AWS S3 image handling, JWT-based authentication, and role-based admin features.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Spring Boot</span>
                            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">React</span>
                            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">MySQL</span>
                            <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm">AWS S3</span>
                        </div>
                        <a
                            href="https://github.com/ankits57/Ankit-Hotel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                        >
                            View Repository ↗
                        </a>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg p-6 overflow-hidden transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
                    <div className="absolute inset-0 opacity-10 group-hover:opacity-20 bg-cover bg-center rounded-xl" style={{ backgroundImage: 'url(https://source.unsplash.com/800x600/?dashboard)' }}></div>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-semibold mb-2 text-white">Drag & Drop Dashboard</h3>
                        <p className="text-gray-300 mb-4">
                            Responsive dashboard UI with modular drag-and-drop widgets using modern frontend practices and DnD libraries.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">React</span>
                            <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm">CSS Modules</span>
                            <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">DnD Kit</span>
                        </div>
                        <a
                            href="https://github.com/ankits57/dasboard-dnd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                        >
                            View Repository ↗
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default ProjectsComponent
