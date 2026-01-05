"use client";
import { useState } from "react";
import Sidebar from "@/app/components/sidebar";

export default function DashboardClientPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const stats = [
    { label: "Total Items", value: "1,234", change: "+12%", icon: "📦" },
    { label: "Low Stock", value: "23", change: "-5%", icon: "⚠️" },
    { label: "Total Value", value: "$124,560", change: "+8%", icon: "💰" },
    { label: "Categories", value: "48", change: "+3", icon: "📊" },
  ];

  const recentActivity = [
    { item: "Laptop Dell XPS 15", action: "Added", quantity: 10, time: "2 hours ago" },
    { item: "Office Chair Pro", action: "Updated", quantity: 5, time: "4 hours ago" },
    { item: "Wireless Mouse", action: "Removed", quantity: 3, time: "6 hours ago" },
    { item: "USB-C Cable", action: "Added", quantity: 50, time: "1 day ago" },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <span className="text-2xl">☰</span>
              </button>
              <h1 className="text-2xl font-bold">Dashboard</h1>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 rounded-lg hover:bg-gray-800 transition-colors relative">
                <span className="text-xl">🔔</span>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center font-bold">
                JD
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{stat.icon}</span>
                  <span
                    className={`text-sm font-semibold px-2 py-1 rounded-full ${
                      stat.change.startsWith("+")
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-3 font-semibold">
              <span className="text-xl">➕</span>
              Add New Item
            </button>
            <button className="p-4 bg-gradient-to-r from-pink-600 to-pink-700 rounded-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-3 font-semibold">
              <span className="text-xl">📥</span>
              Import Data
            </button>
            <button className="p-4 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-3 font-semibold">
              <span className="text-xl">📊</span>
              Generate Report
            </button>
          </div>

          {/* Recent Activity */}
          <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
            <div className="p-6 border-b border-gray-800">
              <h2 className="text-xl font-bold">Recent Activity</h2>
            </div>
            <div className="divide-y divide-gray-800">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="p-6 hover:bg-gray-800/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{activity.item}</h3>
                      <p className="text-sm text-gray-400">
                        {activity.action} • Quantity: {activity.quantity}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}