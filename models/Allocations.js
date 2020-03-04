const mongoose = require('mongoose');

const AllocationSchema = new mongoose.Schema({
  student_id: {
    type: String,
    trim: true,
  },
  tutor_id: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model('Allocations', AllocationSchema);