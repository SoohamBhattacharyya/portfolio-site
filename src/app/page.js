import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-8">
      {/* Navbar */}
      <nav className="flex justify-center gap-6 mb-10">
        <Link href="/about" className="text-blue-600 hover:underline">About</Link>
        <Link href="/teaching" className="text-blue-600 hover:underline">Teaching</Link>
        <Link href="/projects" className="text-blue-600 hover:underline">Projects</Link>
        <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link>
      </nav>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/sooham.jpg"
          alt="Sooham Bhattacharyya"
          width={150}
          height={150}
          className="rounded-full mb-6"
        />
        
      <h1 className="text-4xl font-bold mb-4">Hi, I&rsquo;m Sooham Bhattacharyya</h1>
        <p className="text-lg text-center max-w-xl">
          I&rsquo;m a passionate teacher and developer. I love to share knowledge, help students grow, and build useful software projects.
        </p>
      </div>
    </main>
  );
}
