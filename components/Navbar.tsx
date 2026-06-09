export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
      <h1 className="text-2xl font-bold">NexusAI</h1>

      <div className="flex gap-4">
        <button className="px-4 py-2 rounded-lg bg-black text-white">
          Login
        </button>
      </div>
    </nav>
  );
}