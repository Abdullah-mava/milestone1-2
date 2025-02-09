// In components/handleDownload.ts
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const handleDownload = () => {
  const resumeElement = document.getElementById("resume");
  if (!resumeElement) return;

  html2canvas(resumeElement, { scale: 2 }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("resume.pdf");
  });
};
