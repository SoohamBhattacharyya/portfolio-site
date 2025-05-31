export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-center py-6 mt-12 border-t">
      <p className="text-sm">
        © {new Date().getFullYear()} Sooham Bhattacharyya. All rights reserved.
      </p>
    </footer>
  );
}
