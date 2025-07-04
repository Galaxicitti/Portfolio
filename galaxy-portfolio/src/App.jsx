import React from 'react';

const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen font-sans text-gray-100 transition-all duration-700">
      {/* Header */}
      <header className="bg-gray-800 shadow-lg sticky top-0 z-50 backdrop-filter backdrop-blur-md border-b border-gray-700 transform hover:scale-[1.01] transition-transform duration-300">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Galaxy Rawat</h1>
          <nav className="space-x-6 hidden md:flex">
            <a href="#about" className="text-gray-300 hover:text-blue-400 transition-all duration-300 relative group">
              About
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#projects" className="text-gray-300 hover:text-purple-400 transition-all duration-300 relative group">
              Projects
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-gray-300 hover:text-pink-400 transition-all duration-300 relative group">
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="md:w-1/2 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Hi, I'm Galaxy Rawat. Crafting AI & Web Magic Together.
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Machine learning enthusiast and full-stack developer building smart, scalable solutions.
            </p>
            <a href="#projects" className="mt-6 inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              View My Work
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzhldmgzZHhkOXJ1cTJsaDh0bG55bW1naHpqeHhuc3pkaDhtcWxlNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/S9d8XB557e8phGLBVS/giphy.gif " 
              alt="AI Developer Portfolio" 
              className="rounded-2xl shadow-2xl border border-gray-700 transform transition-all duration-500 hover:rotate-2"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-white mb-10">About Me</h3>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <img src="https://placehold.co/300x300/purple/white?text=Me" alt="Profile" className="rounded-full w-40 h-40 mx-auto object-cover border-4 border-purple-500 shadow-md transition-all duration-500 hover:scale-110"/>
            </div>
            <div className="md:w-2/3 md:pl-10">
              <p className="text-lg text-gray-300 leading-relaxed">
                A passionate developer with a deep love for Python, Machine Learning, and Full Stack Development. I specialize in creating intelligent systems that not only solve problems but also scale efficiently.
              </p>
              <p className="mt-4 text-lg text-gray-300 leading-relaxed">
                From stock price prediction models to real-time image classification apps, I enjoy bringing ideas to life through code. Always curious, always learning — especially when it comes to blending AI with web technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-white mb-12">My Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 border border-gray-700 hover:border-indigo-500">
              <img src=" https://placehold.co/400x250/indigo/white?text=Stock-Forecast" alt="Stock Forecast" className="w-full h-40 object-cover"/>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-white mb-2">Stock-Forecast</h4>
                <p className="text-sm text-gray-400 mb-4">
                  Uses LSTM neural networks to predict future stock prices by analyzing historical data.
                </p>
                <a href="#" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition duration-300">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  GitHub
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 border border-gray-700 hover:border-purple-500">
              <img src=" https://placehold.co/400x250/purple/white?text=Churn-Prediction" alt="Churn Prediction" className="w-full h-40 object-cover"/>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-white mb-2">Customer Churn Prediction</h4>
                <p className="text-sm text-gray-400 mb-4">
                  Predicts customer churn using machine learning techniques to analyze behavioral patterns and improve retention strategies.
                </p>
                <a href="#" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition duration-300">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  GitHub
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 border border-gray-700 hover:border-pink-500">
              <img src=" https://placehold.co/400x250/pink/white?text=Image-Identifier" alt="Image Identifier" className="w-full h-40 object-cover"/>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-white mb-2">Image Identification System</h4>
                <p className="text-sm text-gray-400 mb-4">
                  Lightweight web-based app for quick image classification using MobileNetV2 model and Streamlit for real-time predictions.
                </p>
                <a href="#" className="inline-flex items-center text-pink-400 hover:text-pink-300 transition duration-300">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-white mb-10">Get In Touch</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="md:w-1/2 text-center md:text-left">
              <p className="text-lg text-gray-300 mb-6">
                Have a question or want to collaborate on a project? Feel free to reach out!
              </p>
              <ul className="space-y-4">
                <li className="flex items-center justify-center md:justify-start">
                  <svg className="w-5 h-5 mr-3 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <span>gvpg223@gmail.com</span>
                </li>
                <li className="flex items-center justify-center md:justify-start mt-2">
                  <svg className="w-5 h-5 mr-3 text-purple-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22 23v-1H0v1h22z"/>
                  </svg>
                  <a href=" https://www.linkedin.com/in/galaxy-rawat/ " target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">LinkedIn Profile</a>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"/>
                <input type="email" placeholder="Your Email" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"/>
                <textarea rows="4" placeholder="Your Message" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"></textarea>
                <button type="submit" className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Galaxy Rawat. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="inline-block text-gray-400 hover:text-blue-400 transition duration-300">GitHub</a>
            <a href="https://www.linkedin.com/in/galaxy-rawat/ " target="_blank" rel="noopener noreferrer" className="inline-block text-gray-400 hover:text-purple-400 transition duration-300">LinkedIn</a>
            <a href="#" className="inline-block text-gray-400 hover:text-pink-400 transition duration-300">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;