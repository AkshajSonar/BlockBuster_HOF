import React, { useState } from "react";
import { jsPDF } from "jspdf";

export default function UserPage() {
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Blockchain Basics",
      description: "Issued by XYZ University",
      image:
        "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?fm=jpg&q=60&w=3000",
    },
    {
      id: 2,
      title: "Smart Contracts 101",
      description: "Issued by ABC Institute",
      image:
        "https://images.unsplash.com/photo-1612832021107-fffe9b426ca0?fm=jpg&q=60&w=3000",
    },
    {
      id: 3,
      title: "Ethereum Developer",
      description: "Issued by DEF Labs",
      image:
        "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?fm=jpg&q=60&w=3000",
    },
    {
      id: 4,
      title: "NFT Essentials",
      description: "Issued by NFT Academy",
      image:
        "https://images.unsplash.com/photo-1606760227091-ae54bfa3be2d?fm=jpg&q=60&w=3000",
    },
    {
      id: 5,
      title: "Solidity Bootcamp",
      description: "Issued by CryptoWorld",
      image:
        "https://images.unsplash.com/photo-1624386681811-6b96f17f1f11?fm=jpg&q=60&w=3000",
    },
    {
      id: 6,
      title: "Web3 Fundamentals",
      description: "Issued by Web3 University",
      image:
        "https://images.unsplash.com/photo-1610484827664-fbbb6928e8e2?fm=jpg&q=60&w=3000",
    },
  ];

  const generateResume = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("User Resume", 20, 20);
    doc.setFontSize(12);
    doc.text(`Age: ${age}`, 20, 40);
    doc.text(`Occupation: ${occupation}`, 20, 50);
    doc.text("Certificates:", 20, 70);
    certificates.forEach((cert, index) => {
      doc.text(`• ${cert.title} - ${cert.description}`, 20, 80 + index * 10);
    });
    doc.save("resume.pdf");
  };

  return (
    <div className="p-6 bg-[#e5e5e5] min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center bg-white p-4 rounded-2xl shadow mb-6">
        <img
          src="https://images.unsplash.com/photo-1593696954577-ab3d39317b97?fm=jpg&q=60&w=3000"
          alt="Profile"
          className="w-24 h-24 rounded-full border-2 border-[#14213d] mb-4 md:mb-0 md:mr-6"
        />
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-[#14213d]">User Name</h2>
          <input
            type="number"
            placeholder="Enter Age"
            className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#fca311] mt-2"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Occupation"
            className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#fca311] mt-2"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />
        </div>
      </div>

      {/* Certificates Section */}
      <h3 className="text-xl font-semibold text-[#14213d] mb-4">
        Your Certificates
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            onClick={() => setSelectedCert(cert)}
            className="bg-white rounded-2xl shadow-md p-4 cursor-pointer transform transition hover:scale-105"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <h4 className="text-lg font-semibold text-[#14213d]">
              {cert.title}
            </h4>
            <p className="text-sm text-gray-600">{cert.description}</p>
          </div>
        ))}
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
              onClick={() => setSelectedCert(null)}
            >
              ✕
            </button>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full h-60 object-cover rounded mb-4"
            />
            <h3 className="text-2xl font-bold text-[#14213d] mb-2">
              {selectedCert.title}
            </h3>
            <p className="text-gray-700">{selectedCert.description}</p>
          </div>
        </div>
      )}

      {/* Resume Generator */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={generateResume}
          className="bg-[#fca311] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-[#e59410] transition"
        >
          Generate Resume
        </button>
      </div>
    </div>
  );
}
