import React from "react";
import { Bell, ChevronLeft } from "lucide-react";
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";

function CertificationDetails() {
  return (
    <div className="flex flex-row md:flex-row h-screen bg-[#EDF6F7]">
      <SideBar />
      {/* Main Content */}
      <div className="bg-[#EDF6F7] flex-1 p-4 md:p-8">
        <div className="bg-white flex-1 overflow-auto rounded-lg">
          {/* Header */}
          <Header pgTitle="Certificate Details" id="#123456" />
          {/* Main Content */}
          <div className="p-4 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Form section */}
              <div className="lg:col-span-2 bg-white rounded-lg shadow p-4 md:p-6">
                <div className="space-y-4 md:space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Certificate Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Kavindu Dilshan"
                      className="w-full p-2 rounded-md bg-[#F8FAFC] border border-gray-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Sport name</label>
                    <input
                      type="text"
                      defaultValue="IT Department"
                      className="w-full p-2 rounded-md bg-[#F8FAFC] border border-gray-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Place</label>
                    <input
                      type="text"
                      defaultValue="04"
                      className="w-full p-2 rounded-md bg-[#F8FAFC] border border-gray-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Issued Date</label>
                    <input
                      type="date"
                      defaultValue="2021-09-01"
                      className="w-full p-2 rounded-md bg-[#F8FAFC] border border-gray-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Description</label>
                    <textarea
                      defaultValue="This is a certificate"
                      type="text"
                      className="w-full p-2 rounded-md bg-[#F8FAFC] border border-gray-200"
                    />
                  </div>

                  <button className="w-32 py-2 px-4 bg-[#67CDCD] hover:bg-[#45a049] text-white rounded-md transition-colors">
                    Save
                  </button>
                </div>
              </div>
              {/* Certificate Template */}
              <div className="lg:col-span-1 flex flex-col items-center gap-4">
                <p>Certificate Template</p>
                <div className="relative w-full aspect-w-16 aspect-h-9">
                  <img
                    src="https://certifier.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fcertifier%2Fimage%2Fupload%2Fv1709650100%2F51_participation_formal_darkviolet_landscape_ff5e55e81a.png&w=3840&q=100"
                    alt="Certificate"
                    className="w-full h-full object-contain opacity-70"
                  />
                  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 py-2 px-4 bg-[#67CDCD] hover:bg-[#45a049] text-white rounded-md transition-colors">
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertificationDetails;
