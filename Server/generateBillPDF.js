const PDFDocument = require("pdfkit");
const fs = require("fs");

function generateBillPDF(order, filePath) {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument();
      const stream = fs.createWriteStream(filePath);
      doc.pipe(stream);

      // Title
      doc.fontSize(20).text("🚗 RentXCarz - Rental Invoice", { align: "center" });
      doc.moveDown();

      // Customer Info
      doc.fontSize(12).text(`Name: ${order.name}`);
      doc.text(`Email: ${order.email}`);
      doc.text(`Date: ${new Date().toLocaleDateString()}`);
      doc.moveDown();

      // Car & Rent Details
      doc.text(`Car: ${order.car}`);
      doc.text(`Pickup: ${order.pickup_location} on ${order.pickup_date} at ${order.pickup_time}`);
      doc.text(`Dropoff: ${order.dropoff_location} on ${order.dropoff_date} at ${order.dropoff_time}`);
      doc.moveDown();

      doc.text(`Hours: ${order.hours}`);
      doc.text(`Price per Hour: ₹${order.pricePerHour}`);
      doc.text(`Total: ₹${order.hours * order.pricePerHour}`);
      doc.moveDown();

      doc.text("✅ Thank you for renting with RentXCarz!", { align: "center" });

      doc.end();
      stream.on("finish", () => resolve(filePath));
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = generateBillPDF;