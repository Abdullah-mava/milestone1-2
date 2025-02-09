"use client";

import React, { useState } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const ResumeBuilder: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    summary: "",
    experience: "",
    education: "",
    skills: "",
    hobbies: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica");
    doc.setFillColor(240, 240, 240);
    doc.rect(10, 10, 190, 280, "F");
    
    // Header
    doc.setFontSize(22);
    doc.setTextColor(0, 0, 102);
    doc.text(formData.fullName || "Your Name", 20, 30);
    doc.setFontSize(14);
    doc.setTextColor(50);
    doc.text(`${formData.email} | ${formData.phone} | ${formData.linkedin}`, 20, 40);

    // Sidebar - Light Gray Box
    doc.setFillColor(220, 220, 220);
    doc.rect(10, 50, 60, 200, "F");

    // Sidebar Content
    doc.setTextColor(0);
    doc.setFontSize(12);
    doc.text("Skills:", 15, 70);
    doc.setFontSize(10);
    doc.text(formData.skills || "Skill 1, Skill 2", 15, 80);

    doc.setFontSize(12);
    doc.text("Hobbies:", 15, 100);
    doc.setFontSize(10);
    doc.text(formData.hobbies || "Hobby 1, Hobby 2", 15, 110);

    // Main Content
    doc.setFontSize(16);
    doc.text("Professional Summary", 80, 70);
    doc.setFontSize(10);
    doc.text(formData.summary || "A short summary about yourself.", 80, 80, { maxWidth: 110 });

    doc.setFontSize(16);
    doc.text("Work Experience", 80, 110);
    doc.setFontSize(10);
    doc.text(formData.experience || "Your past job roles and responsibilities.", 80, 120, { maxWidth: 110 });

    doc.setFontSize(16);
    doc.text("Education", 80, 150);
    doc.setFontSize(10);
    doc.text(formData.education || "Your degrees and certifications.", 80, 160, { maxWidth: 110 });

    // Footer
    doc.setFontSize(8);
    doc.text("Generated using ResumeBuilder", 80, 280);

    doc.save("Resume.pdf");
  };

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Resume Builder</h1>
      <div className="grid grid-cols-2 gap-4">
        <input type="text" name="fullName" placeholder="Full Name" className="border p-2" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" className="border p-2" onChange={handleChange} />
        <input type="text" name="phone" placeholder="Phone" className="border p-2" onChange={handleChange} />
        <input type="text" name="linkedin" placeholder="LinkedIn" className="border p-2" onChange={handleChange} />
      </div>
      <textarea name="summary" placeholder="Professional Summary" className="border p-2 w-full mt-4" onChange={handleChange}></textarea>
      <textarea name="experience" placeholder="Work Experience" className="border p-2 w-full mt-4" onChange={handleChange}></textarea>
      <textarea name="education" placeholder="Education" className="border p-2 w-full mt-4" onChange={handleChange}></textarea>
      <textarea name="skills" placeholder="Skills" className="border p-2 w-full mt-4" onChange={handleChange}></textarea>
      <textarea name="hobbies" placeholder="Hobbies" className="border p-2 w-full mt-4" onChange={handleChange}></textarea>
      <button onClick={generatePDF} className="bg-blue-500 text-white p-3 mt-4 w-full">Download Resume</button>
      <div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Resume Preview</h2>
        <div className="border p-4 bg-white rounded-lg">
          <h3 className="text-xl font-bold">{formData.fullName}</h3>
          <p className="text-gray-700">{formData.email} | {formData.phone}</p>
          <p className="text-blue-600">{formData.linkedin}</p>
          <p className="mt-2 text-gray-600">{formData.description}</p>
          <p className="mt-2 font-bold">Skills: <span className="text-gray-700">{formData.skills}</span></p>
          <p className="mt-2 font-bold">Hobbies: <span className="text-gray-700">{formData.hobbies}</span></p>
          <p className="mt-2 font-bold">Experience: <span className="text-gray-700">{formData.experience}</span></p>
          <p className="mt-2 font-bold">Education: <span className="text-gray-700">{formData.education}</span></p>
        </div>
      </div>
    </div>
    
  );
};

export default ResumeBuilder;
