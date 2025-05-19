// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

// Import email service
const { sendServiceRequestNotification } = require('./utils/emailService');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Atlas Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define Service Request Schema
const serviceRequestSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  serviceType: {
    type: String,
    required: true
  },
  isWarrantyExpired: {
    type: Boolean,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create model - replace 'your_collection_name' with your existing collection name if needed
const ServiceRequest = mongoose.model('your_collection_name', serviceRequestSchema);

// API endpoint to handle form submissions
app.post('/api/service-requests', async (req, res) => {
  try {
    const {
      firstName,
      phoneNumber,
      address,
      serviceType,
      isWarrantyExpired
    } = req.body;

    // Validate required fields
    if (!firstName || !phoneNumber || !address || !serviceType || isWarrantyExpired === undefined) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create new service request
    const newServiceRequest = new ServiceRequest({
      firstName,
      phoneNumber,
      address,
      serviceType,
      isWarrantyExpired
    });

    // Save to database
    await newServiceRequest.save();
    
    // Send email notification
    try {
      await sendServiceRequestNotification(newServiceRequest);
      console.log('Email notification sent successfully');
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError);
      // We don't want to fail the request if email sending fails
      // Just log the error and continue
    }
    
    res.status(201).json({ 
      success: true, 
      message: 'Service request submitted successfully',
      data: newServiceRequest
    });
  } catch (error) {
    console.error('Error submitting service request:', error);
    res.status(500).json({ 
      success: false,
      message: 'Server error occurred while submitting your request'
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});