const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config(); // Must be at the top of app.js
require('./config/db'); // Initialize DB connection
require('./models/association'); // Initialize DB connection
const cors = require('cors');

// const path = require('path');
const tenantTrustAuthRoutes = require('./routes/tenantTrustAuthRoutes'); // Import the careerCare route
const reviewRoutes = require('./routes/reviewRoutes'); // Import the careerCare route
const tenantTrustProfileRoutes = require('./routes/profiles/tenantTrustProfileRoutes');
const VersionControlRoutes = require('./routes/VersionControlRoutes');
const propertyRoutes = require('./routes/tenantDashboard/propertyRoutes'); // Example
const tenantPaymentRoutes = require('./routes/tenantDashboard/tenantPaymentRoutes'); // Example
const BookingProperties = require('./routes/ExploreBookingProperties/BookingProperties'); // Example
const propertyRoute = require('./routes/landlordDashboard/propertyRoute'); // Example
const propertiesRoutes = require('./routes/properties/propertiesRoutes'); // Example
const MaintenanceRoutes = require('./routes/Maintenance/MaintenanceRoutes'); // Example
const maintenanceReview = require('./routes/maintenanceReview'); // Example
const searchHistoryRoutes = require('./routes/searchHistoryRoutes'); // Example


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));


// Routes
app.use('/api', tenantTrustProfileRoutes);
app.use('/api', tenantTrustAuthRoutes); // Assuming you're using /api for your routes
app.use('/api', VersionControlRoutes); // Assuming you're using /api for your routes
app.use('/api', propertyRoutes);
app.use('/api', tenantPaymentRoutes);
app.use('/api', propertyRoute);
app.use('/api', propertiesRoutes);
app.use('/api', reviewRoutes);
app.use('/api', BookingProperties);
app.use('/api', MaintenanceRoutes);
app.use('/api', maintenanceReview);
app.use('/api', searchHistoryRoutes);





// Test route to verify server functionality (GET request)
app.get('/test', (req, res) => {
  res.status(200).json({ message: 'Server is working!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
