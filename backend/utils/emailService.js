// backend/utils/emailService.js
const nodemailer = require('nodemailer');

// Create email transporter
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

/**
 * Send email notification for new service requests
 * @param {Object} serviceRequest - The service request data
 * @returns {Promise} - Resolves when email is sent
 */
async function sendServiceRequestNotification(serviceRequest) {
  try {
    // Format date
    const formattedDate = new Date(serviceRequest.createdAt).toLocaleString();
    
    // Create email content
    const emailContent = {
      from: `"Appliance Service" <${process.env.EMAIL_USER}>`,
      to: process.env.NOTIFICATION_EMAIL,
      subject: `New Service Request - ${serviceRequest.serviceType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e1e1e1; border-radius: 5px;">
          <h2 style="color: #007bff; border-bottom: 2px solid #007bff; padding-bottom: 10px;">New Service Request</h2>
          
          <div style="margin: 20px 0;">
            <p><strong>Customer:</strong> ${serviceRequest.firstName}</p>
            <p><strong>Phone:</strong> ${serviceRequest.phoneNumber}</p>
            <p><strong>Address:</strong> ${serviceRequest.address}</p>
            <p><strong>Service Type:</strong> ${serviceRequest.serviceType}</p>
            <p><strong>Warranty Expired:</strong> ${serviceRequest.isWarrantyExpired ? 'Yes' : 'No'}</p>
            <p><strong>Request Time:</strong> ${formattedDate}</p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p style="margin: 0; color: #555;">This is an automated notification. Please do not reply to this email.</p>
          </div>
        </div>
      `
    };
    
    // Send email
    const info = await transporter.sendMail(emailContent);
    console.log('Email notification sent:', info.messageId);
    return info;
    
  } catch (error) {
    console.error('Error sending email notification:', error);
    throw error;
  }
}

module.exports = {
  sendServiceRequestNotification
};