"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const router = useRouter();

  const handlesignout = async () => {
    alert("You have been signed out.");
    router.push("/");
  };

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-64 bg-gray-900 border-r border-gray-800 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-800">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
              InventoryFlow
            </h2>
          </div>

          <nav className="flex-1 p-4 space-y-2">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-purple-600/20 text-purple-400 border border-purple-500/30 hover:bg-purple-600/30 transition-colors"
            >
              <span className="text-xl">🏠</span>
              <span className="font-medium">Dashboard</span>
            </Link>
            <Link
              href="/inventory"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
            >
              <span className="text-xl">📦</span>
              <span className="font-medium">Inventory</span>
            </Link>
            <Link
              href="/analytics"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
            >
              <span className="text-xl">📈</span>
              <span className="font-medium">Analytics</span>
            </Link>
            <Link
              href="/categories"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
            >
              <span className="text-xl">🗂️</span>
              <span className="font-medium">Categories</span>
            </Link>
            <Link
              href="/settings"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
            >
              <span className="text-xl">⚙️</span>
              <span className="font-medium">Settings</span>
            </Link>
          </nav>

          <div className="p-4 border-t border-gray-800">
            <button
              onClick={handlesignout}
              className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-gray-400 hover:bg-red-600/20 hover:text-red-400 transition-colors"
            >
              <span className="text-xl">🚪</span>
              <span className="font-medium">Sign Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={onClose}
        />
      )}
    </>
  );
}