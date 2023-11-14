// Import modules
import PDFDocument from "pdfkit";
import fs from "fs";

export const generatePDF = () => {
  const xHelloWorldCoordinate = 200;
  const yHelloWorldCoordinate = 300;

  // Create a document
  const document = new PDFDocument();

  // Saving the PDF file in root directory.
  document.pipe(fs.createWriteStream("example.pdf"));

  // Adding functionality
  document
    .fontSize(27)
    .text("Hello world!", xHelloWorldCoordinate, yHelloWorldCoordinate);

  const imageHeight = 300;

  // Adding an image in the PDF.
  document.image("pig_with_glasses.jpg", {
    fit: [imageHeight, imageHeight],
    align: "center",
    valign: "center",
  });

  const textCoordinates = 100;
  const fontSize = 15;

  document
    .addPage()
    .fontSize(fontSize)
    .text(
      "Generating PDF with the help of pdfkit",
      textCoordinates,
      textCoordinates
    );

  // Add some text with annotations

  const linkHeight = 27;
  const linkWidth = 160;

  document
    .addPage()
    .fillColor("red")
    .text("The link for AlexCode website", textCoordinates, textCoordinates)

    .link(
      textCoordinates,
      textCoordinates,
      linkWidth,
      linkHeight,
      "https://alex-code.com/"
    );

  // Finalize PDF file
  document.end();
};
