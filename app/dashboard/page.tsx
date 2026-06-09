import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="p-8 flex-1">
          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="border p-4 rounded-lg">
              Total Prompts
            </div>

            <div className="border p-4 rounded-lg">
              Documents
            </div>

            <div className="border p-4 rounded-lg">
              AI Usage
            </div>
          </div>
        </main>
      </div>
    </>
  );
}