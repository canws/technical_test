const { pool } = require('../configs/db-connection');

// Function to create a new loan application
const createLoanApplication = async (applicationData) => {
    
    const {
        applicant_name,
        applicant_email,
        applicant_mobile_phone_number,
        applicant_address,
        annual_income_before_tax,
        incoming_address,
        incoming_deposit,
        incoming_price,
        incoming_stamp_duty,
        loan_amount,
        loan_duration,
        monthly_expenses,
        outgoing_address,
        outgoing_mortgage,
        outgoing_valuation,
        savings_contribution
    } = applicationData.data;

    const result = await pool.query(
        `INSERT INTO loan_applications 
        (
            applicant_name,
            applicant_email,
            applicant_mobile_phone_number,
            applicant_address,
            annual_income_before_tax,
            incoming_address,
            incoming_deposit,
            incoming_price,
            incoming_stamp_duty,
            loan_amount,
            loan_duration,
            monthly_expenses,
            outgoing_address,
            outgoing_mortgage,
            outgoing_valuation,
            savings_contribution
        ) 
        VALUES 
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) 
        RETURNING *`,
        [
            applicant_name,
            applicant_email,
            applicant_mobile_phone_number,
            applicant_address,
            annual_income_before_tax,
            incoming_address,
            incoming_deposit,
            incoming_price,
            incoming_stamp_duty,
            loan_amount,
            loan_duration,
            monthly_expenses,
            outgoing_address,
            outgoing_mortgage,
            outgoing_valuation,
            savings_contribution
        ]
    );

    return result.rows[0];
};

// Function to get all loan applications
const getAllLoanApplications = async () => {
    const result = await pool.query('SELECT * FROM loan_applications');
    return result.rows;
};

module.exports = {
    createLoanApplication,
    getAllLoanApplications,
};
