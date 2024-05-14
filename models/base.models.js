var mongoose = require('mongoose');

const baseSchema = new mongoose.Schema({
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    is_active: { type: Boolean, default: true },
    is_deleted: { type: Boolean, default: false }
});

module.exports = baseSchema;