const Appointment = require('../models/Appointment');
const LabRequest = require('../models/laboratoryModel');
const Medicine = require('../models/medicalOrderModel');
const User = require('../models/Registration');

const getDashboardStats = async (req, res) => {
    try {
        const [appointmentsCount, labRequestsCount, medicinesCount, patientsCount] = await Promise.all([
            Appointment.countDocuments(),
            LabRequest.countDocuments(),
            Medicine.countDocuments(),
            User.countDocuments()
        ]);

        res.json({
            appointments: appointmentsCount,
            labRequests: labRequestsCount,
            medicines: medicinesCount,
            patients: patientsCount
        });
    } catch (error) {
        console.error("Dashboard stats error:", error);
        res.status(500).json({ message: "Failed to fetch dashboard stats" });
    }
};

module.exports = { getDashboardStats };
