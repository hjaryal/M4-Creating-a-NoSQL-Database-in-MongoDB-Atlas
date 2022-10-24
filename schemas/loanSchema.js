import mongoose from 'mongoose';
const { Schema } = mongoose;

const loanSchema = new Schema({
  id:  String, 
  customerName: String,
  phoneNumber:   String,
  address: String,
  loanAmount: String,
  interest: String,
  loanTermYears: String,
  loanType: String,
  description: String,
});

const loan = new Person({ 
    customerName: 'Hansika Jaryal',
    phoneNumber:   '098766xxxx',
    address: "Tempe",
    loanAmount: 25000,
    interest: 5,
    loanTermYears: 2,
    loanType: 'Payday Loan',
    description: 'IFT458 Module 4 Assignment'
 });


console.log(loan);