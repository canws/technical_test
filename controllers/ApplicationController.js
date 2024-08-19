const express = require('express');
const bodyParser = require('body-parser');
const { connectDB, pool } = require('../configs/db-connection');
const {
    createLoanApplication,
    getAllLoanApplications,
} = require('../models/LoanApplicationModel');

const list = async (req, res) => {
    try {
        await connectDB();
        const applications = await getAllLoanApplications();
        return res.status(200).json({ message: 'Application lists.', applications });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const averageLoanAmount = async (req, res) => {
    try {
        await connectDB();
        const result = await pool.query('SELECT AVG(loan_amount) AS avg_loan_amount FROM loan_applications');
        const avgLoanAmount = result.rows[0].avg_loan_amount || 0;
        const averageLoanAmount = (avgLoanAmount !== null ? Number(avgLoanAmount) : 0).toFixed(2);
        return res.status(200).json({ averageLoanAmount });
      } catch (error) {
        console.error('Error getting average loan amount:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
};

const submitApplication = async (req, res) => {
    try {
        await connectDB();
        const { loan_amount, applicant_email } = req.body;
        const result = await pool.query('SELECT 1 FROM loan_applications WHERE applicant_email = $1 LIMIT 1', [applicant_email]);
        if (result.rowCount > 0) {
            res.status(400).json({ error: 'Email already exists!' });
        }
        const avgResult = await pool.query('SELECT AVG(loan_amount) AS avg_loan_amount FROM loan_applications');
        const avgLoanAmount = avgResult.rows[0].avg_loan_amount || 0;
        const isAboveAverage = loan_amount > avgLoanAmount;
        const newApplication = await createLoanApplication({ data: req.body });
        return res.status(201).json({ message: 'Application saved successfully.', newApplication, isAboveAverage });
    } catch (error) {
        console.error('Error getting average loan amount:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { submitApplication, list, averageLoanAmount };