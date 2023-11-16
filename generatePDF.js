import PDFDocument from "pdfkit";
import fs from "fs";

const generatePDF = () => {
  const document = new PDFDocument();

  document.pipe(fs.createWriteStream("example.pdf"));

  const textPadding = 100;
  const fontSize = 15;

  document.fontSize(fontSize).text("Hello world!", textPadding, textPadding);

  const imageHeight = 300;

  document.image("pigWithGlasses.jpg", {
    fit: [imageHeight, imageHeight],
    align: "center",
    valign: "center",
  });

  document
    .addPage()
    .fontSize(fontSize)
    .text("Generating PDF with the help of pdfkit", textPadding, textPadding);

  const linkHeight = 27;
  const linkWidth = 160;

  document
    .addPage()
    .fillColor("red")
    .text("The link for AlexCode website", textPadding, textPadding)
    .link(
      textPadding,
      textPadding,
      linkWidth,
      linkHeight,
      "https://alex-code.com/"
    );

  document.end();
};

export default generatePDF;
