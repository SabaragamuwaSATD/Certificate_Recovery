import React from "react";
import { Bell, ChevronLeft } from "lucide-react";

function Header({ pgTitle, id }) {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <h1 className="text-lg md:text-xl font-semibold">{pgTitle} </h1>
          <p>{id}</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Bell className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full overflow-hidden">
              <img
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-sm font-medium">Chanodya</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
