import { Outlet, Link } from "react-router-dom";

import Navbar from "../components/Admin/Navbar";
import Sidebar from "../components/Admin/Sidebar";

const AdminLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex pt-16 overflow-hidden bg-gray-50">
        <Sidebar />

        <div className="fixed inset-0 z-10 hidden"></div>

        <div
          id="main-content"
          className="w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 "
        >
          <main>
            <div>
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
