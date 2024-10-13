import { Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Setting from './Settings';
import Profile from './Profile';
import Header from './Header';
import { useState } from 'react';

const DashboardHome = () => (
  <div className="p-4">
    <h2 className="text-2xl font-semibold mb-4">Welcome to your Dashboard</h2>
    <p>dashboard screen</p>
  </div>
);


export default function Dashboard() {
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
    <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    <div className="flex-1 flex flex-col overflow-hidden">
      <Header toggleSidebar={toggleSidebar} />
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div className="container mx-auto px-6 py-8">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="profile" element={<Profile />} />
            <Route path="setting" element={<Setting />} />
          </Routes>
        </div>
      </main>
    </div>
    {sidebarOpen && (
      <div 
        className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-10 md:hidden"
        onClick={toggleSidebar}
      ></div>
    )}
  </div>
  );
};

