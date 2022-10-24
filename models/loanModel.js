const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema(
  {
    id: {
        type: String,
        required: [true, 'A loan object must have an ID'],
        unique: true
     
    },
    customerName: {
        type: String,
        required: [true, 'A customer must have a name'],
        trim: true,
        maxlength: [40, 'A customer name must have less or equal then 40 characters'],
        minlength: [10, 'A customer name must have more or equal then 10 characters']
     
    },
    phoneNumber:{
        type: String
    },
    address: {
        type: String
    },
    loanAmount: {
        type: String,
        required: [true, 'A Loan object must have a Loan Amount'],
    },
    interest: {
        type: String,
        required: [true, 'A Loan object must have an Interest']
    },
    loanTermYears: {
        type: String,
        required: [true, 'A Loan object must have a Loan Term Years']
    },
    loanType: {
        type: String
    },
    description: {
        type: String,
        required: [true, 'A description must have a loan description'],
        trim: true,
        maxlength: [40, 'A description  must have less or equal then 40 characters'],
        minlength: [10, 'A description  must have more or equal then 10 characters']
    },

});
const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;