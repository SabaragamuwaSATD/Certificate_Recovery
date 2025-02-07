import React from "react";
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";

function StudentProfile() {
  const certificates = [
    {
      id: 1,
      title: "CERTIFICATE",
      name: "Name Firstname",
      details: "Certificate Details",
      date: "15 July 2024",
      image:
        "https://static.vecteezy.com/system/resources/previews/002/349/754/non_2x/modern-elegant-certificate-template-free-vector.jpg",
    },
    {
      id: 2,
      title: "CERTIFICATE",
      name: "Name Firstname",
      details: "Certificate Details",
      date: "15 July 2024",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/004/789/096/small_2x/red-certificate-template-with-flat-design-style-free-vector.jpg",
    },
    {
      id: 3,
      title: "CERTIFICATE",
      name: "Name Firstname",
      details: "Certificate Details",
      date: "15 July 2024",
      image:
        "https://marketplace.canva.com/EAF6mjR4giI/1/0/1600w/canva-blue-white-bordered-certificate-of-achievement-certificate-FgtbZo7v6O0.jpg",
    },
    {
      id: 4,
      title: "CERTIFICATE",
      name: "Name Firstname",
      details: "Certificate Details",
      date: "15 July 2024",
      image:
        "https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/overlapped-design-achievement-award-certificate-template-o1ceeh7ac9e913.webp",
    },
    {
      id: 5,
      title: "CERTIFICATE",
      name: "Name Firstname",
      details: "Certificate Details",
      date: "15 July 2024",
      image:
        "https://lh5.googleusercontent.com/FfytaIZqyxa4zTVMjtPclfaK1yZmTf0eZAbbnH8yyY2o8meia9pHEiMwmRGVDq2fVEirdKRmJ8Y-G9WagqXaTrZ4erjkPiabnn_PjjgMxwJhloBHXBQ4dIXWH1IUg58Ckxtj8y3np4K24-qx6_yryeAkv5HH3RME",
    },
    {
      id: 6,
      title: "CERTIFICATE",
      name: "Name Firstname",
      details: "Certificate Details",
      date: "15 July 2024",
      image:
        "https://i0.wp.com/www.templatescatalog.com/wp-content/uploads/2021/12/Business-Certificate-Template.jpg?fit=600%2C428&ssl=1",
    },
  ];

  return (
    <div className="flex flex-row md:flex-row h-screen bg-[#EDF6F7]">
      {/* SideBar */}
      <SideBar />
      {/* Main Content */}
      <div className="bg-[#EDF6F7] flex-1 p-4 md:p-8">
        <div className="bg-white flex-1 overflow-auto rounded-lg">
          {/* Header */}
          <Header pgTitle="Student Details" id="#123456" />
          {/* Main Content */}
          <div className="p-4 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Form section */}
              <div className="lg:col-span-2 bg-white rounded-lg shadow p-4 md:p-6">
                <div className="space-y-4 md:space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <input
                      type="text"
                      defaultValue="Kavindu Dilshan"
                      className="w-full p-2 rounded-md bg-[#F8FAFC] border border-gray-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Faculty name</label>
                    <input
                      type="text"
                      defaultValue="IT Department"
                      className="w-full p-2 rounded-md bg-[#F8FAFC] border border-gray-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Badge</label>
                    <input
                      type="text"
                      defaultValue="04"
                      className="w-full p-2 rounded-md bg-[#F8FAFC] border border-gray-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Student ID</label>
                    <input
                      type="text"
                      defaultValue="STD1234"
                      className="w-full p-2 rounded-md bg-[#F8FAFC] border border-gray-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Date of Birth</label>
                    <input
                      type="date"
                      defaultValue="2000-09-01"
                      className="w-full p-2 rounded-md bg-[#F8FAFC] border border-gray-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <input
                      type="email"
                      defaultValue="example@gmail.com"
                      className="w-full p-2 rounded-md bg-[#F8FAFC] border border-gray-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      defaultValue="+94 777 777 777"
                      className="w-full p-2 rounded-md bg-[#F8FAFC] border border-gray-200"
                    />
                  </div>

                  <button className="w-32 py-2 px-4 bg-[#67CDCD] hover:bg-[#45a049] text-white rounded-md transition-colors">
                    Request
                  </button>
                </div>
              </div>
              {/* Profile Picture Section */}
              <div className="lg:col-span-1 bg-[#EDF6F7] rounded-lg shadow p-4 md:mb-0">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-[#B9D8DB] outline-4 outline-[#67CDCD] outline-offset-2 mt-4 mb-4">
                    <img
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button className="w-full py-2 px-4 bg-[#67CDCD] hover:bg-[#7fcad3] text-black rounded-md transition-colors mb-4">
                    Request
                  </button>
                </div>
              </div>
            </div>
            {/* Certificates Section */}
            <div style={{ marginTop: "40px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "20px",
                }}
              >
                <h2 style={{ fontSize: "20px" }}>Issued Certificates</h2>
                <div style={{ display: "flex", gap: "15px" }}>
                  <select style={{ padding: "8px", borderRadius: "4px" }}>
                    <option>Sport Name</option>
                  </select>
                  <select style={{ padding: "8px", borderRadius: "4px" }}>
                    <option>15 Jul 2024</option>
                  </select>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                  gap: "20px",
                }}
              >
                {certificates.map((cert) => (
                  <div
                    key={cert.id}
                    style={{
                      backgroundColor: "#F0F9FF",
                      borderRadius: "8px",
                      padding: "16px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "white",
                        borderRadius: "8px",
                        padding: "20px",
                        marginBottom: "16px",
                        textAlign: "center",
                      }}
                    >
                      <img
                        src={cert.image}
                        alt="Certificate"
                        style={{
                          width: "100%",
                          height: "auto",
                          marginBottom: "16px",
                        }}
                      />
                      <h3 style={{ fontFamily: "serif" }}>{cert.title}</h3>
                      <p style={{ fontStyle: "italic", color: "#666" }}>
                        {cert.name}
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ fontWeight: "500" }}>{cert.details}</span>
                      <span style={{ fontSize: "14px", color: "#666" }}>
                        {cert.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <span>Showing</span>
                  <select style={{ padding: "4px", borderRadius: "4px" }}>
                    <option>06</option>
                  </select>
                  <span>items per page</span>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    style={{
                      padding: "4px 8px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                    }}
                  >
                    1
                  </button>
                  <button
                    style={{
                      padding: "4px 8px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                    }}
                  >
                    2
                  </button>
                  <button
                    style={{
                      padding: "4px 8px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                    }}
                  >
                    Next
                  </button>
                  <button
                    style={{
                      padding: "4px 8px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                    }}
                  >
                    End
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

export default StudentProfile;
