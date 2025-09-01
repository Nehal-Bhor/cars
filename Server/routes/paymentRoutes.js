import express from "express";
import User from "../models/User.js";
import Form from "../models/Form.js";
import { generateBillPDF } from "../generateBillPDF.js";
import sendBillEmail from "../emailSender.js";
import path from "path";

const router = express.Router();

router.post("/payment-success", async (req, res) => {
  try {
    const { userId, formId, pricePerHour, paymentMethod } = req.body;

    // 1. Find user & booking form
    const user = await User.findById(userId);
    const form = await Form.findById(formId);
    if (!user || !form) {
      return res.status(404).json({ error: "User or form not found" });
    }

    // 2. Calculate total hours
    const pickup = new Date(`${form.pickup_date}T${form.pickup_time}`);
    const dropoff = new Date(`${form.dropoff_date}T${form.dropoff_time}`);
    const hours = Math.ceil((dropoff - pickup) / (1000 * 60 * 60));

    // 3. Generate bill file path
    const filePath = path.join("bills", `bill_${userId}_${formId}.pdf`);

    // 4. Generate PDF with payment method included ✅
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
        paymentMethod,  // <--- here
      },
      filePath
    );

    // 5. Send bill via email
    await sendBillEmail(user.email, filePath);

    res.json({ success: true, message: "Payment successful, bill sent" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Payment processing failed" });
  }
});

export default router;