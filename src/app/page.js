import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-4 py-8 sm:px-6 lg:px-8">
      {/* Navbar */}
      <nav className="flex flex-wrap justify-center gap-4 mb-10 text-base sm:text-lg">
        <Link href="/about" className="text-blue-600 hover:underline">About</Link>
        <Link href="/teaching" className="text-blue-600 hover:underline">Teaching</Link>
        <Link href="/projects" className="text-blue-600 hover:underline">Projects</Link>
        <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link>
      </nav>

      {/* Main content */}
      <div className="flex flex-col items-center text-center">
        <Image
          src="/sooham.jpg"
          alt="Sooham Bhattacharyya"
          width={150}
          height={150}
          className="rounded-full mb-6"
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Hi, I&rsquo;m Sooham Bhattacharyya
        </h1>
        <p className="text-sm sm:text-base md:text-lg max-w-xl">
          I&rsquo;m a passionate teacher and developer. I love to share knowledge, help students grow, and build useful software projects.
        </p>
      </div>
    </main>
  );
}
