const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Form = require("../models/Form");
const generateBillPDF = require("../generateBillPDF");
const sendBillEmail = require("../emailSender");
const path = require("path");

// Payment success route
router.post("/payment-success", async (req, res) => {
  try {
    const { userId, formId, pricePerHour } = req.body;

    // 1. Fetch user
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ success: false, error: "User not found" });

    // 2. Fetch form
    const form = await Form.findById(formId);
    if (!form) return res.status(404).json({ success: false, error: "Form not found" });

    // 3. Calculate rental hours
    const pickup = new Date(`${form.pickup_date} ${form.pickup_time}`);
    const dropoff = new Date(`${form.dropoff_date} ${form.dropoff_time}`);
    const hours = Math.ceil((dropoff - pickup) / (1000 * 60 * 60));

    // 4. Generate PDF
    const filePath = path.join(__dirname, `../bills/${user.name}_bill.pdf`);
    await generateBillPDF(
      {
        name: user.name,
        email: user.email,
        car: form.selected_car,
        pickup_location: form.pickup_location,
        dropoff_location: form.dropoff_location,
        pickup_date: form.pickup_date,
        pickup_time: form.pickup_time,
        dropoff_date: form.dropoff_date,
        dropoff_time: form.dropoff_time,
        hours,
        pricePerHour,
      },
      filePath
    );

    // 5. Send bill
    await sendBillEmail(user.email, filePath);

    res.json({ success: true, message: "✅ Bill generated & sent to email" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

module.exports = router;