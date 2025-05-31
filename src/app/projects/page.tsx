export default function ProjectsPage() {
  return (
    <main className="min-h-screen p-8 text-gray-800 bg-white">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>

      <div className="space-y-6 max-w-3xl">
        {/* Project 1: Personal Portfolio Website */}
        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">Personal Portfolio Website</h2>
          <p>
            A fully responsive personal website built with <strong>Next.js</strong> and <strong>Tailwind CSS</strong>. 
            It showcases my background, teaching, and projects — and helps students and collaborators get in touch with me.
          </p>
          <p className="mt-2 text-sm text-gray-600"><em>(You're viewing this project now!)</em></p>
          <a 
            href="https://github.com/yourusername/portfolio-website" 
            target="_blank" 
            className="text-blue-600 underline mt-2 inline-block"
          >
            GitHub Repo →
          </a>
        </div>

        {/* Project 2: Pneumonia Detection using CNN */}
        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">Pneumonia Detection using CNN</h2>
          <p>
            A machine learning system to detect pneumonia from chest X-rays using a Convolutional Neural Network (CNN). 
            Built in Python using Keras and trained on a large dataset for academic research.
          </p>
          <a 
            href="https://github.com/yourusername/pneumonia-cnn" 
            target="_blank" 
            className="text-blue-600 underline mt-2 inline-block"
          >
            GitHub Repo →
          </a>
        </div>

        {/* Project 3: Bishnupur Tourism Website */}
        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">Bishnupur Tourism Website</h2>
          <p>
            A web app built to promote tourism in Bishnupur, West Bengal. It features historical places, local guides, itineraries, 
            and plans for future booking functionality. Built with <strong>Next.js</strong>.
          </p>
          <a 
            href="https://github.com/yourusername/bishnupur-tourism" 
            target="_blank" 
            className="text-blue-600 underline mt-2 inline-block"
          >
            GitHub Repo →
          </a>
        </div>

        {/* Project 4: Full-Stack E-Commerce Website */}
        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">Full-Stack E-Commerce Website</h2>
          <p>
            A complete e-commerce web application with user authentication, product catalog, cart, and checkout functionality. 
            Developed using the <strong>MERN stack</strong> (MongoDB, Express.js, React, Node.js).
          </p>
          <a 
            href="https://github.com/SoohamBhattacharyya/Eklavya-Electronics---MERN"
            target="_blank" 
            className="text-blue-600 underline mt-2 inline-block"
          >
            GitHub Repo →
          </a>
        </div>
      </div>
    </main>
  );
}
