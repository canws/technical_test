<template>
    <div class="container p-5">
        <form @submit.prevent="handleSubmit">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label for="applicant_name">Applicant Name:</label>
                        <input v-model="form.applicant_name" class="form-control" type="text" id="applicant_name" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label for="applicant_email">Applicant Email:</label>
                        <input v-model="form.applicant_email" type="email" class="form-control" id="applicant_email" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label for="applicant_mobile_phone_number">Mobile Phone Number:</label>
                        <input v-model="form.applicant_mobile_phone_number" class="form-control" type="text"
                            id="applicant_mobile_phone_number" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label for="applicant_address">Applicant Address:</label>
                        <input v-model="form.applicant_address" type="text" class="form-control"
                            id="applicant_address" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label for="annual_income_before_tax">Annual Income Before Tax:</label>
                        <input v-model="form.annual_income_before_tax" class="form-control" type="number"
                            id="annual_income_before_tax" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label for="incoming_address">Income Address:</label>
                        <input v-model="form.incoming_address" class="form-control" type="text" id="incoming_address" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label for="incoming_deposit">Income Deposit:</label>
                        <input v-model="form.incoming_deposit" class="form-control" type="number"
                            id="incoming_deposit" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label for="annual_income_before_tax">Incoming price:</label>
                        <input v-model="form.incoming_price" class="form-control" type="number" id="incoming_price" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label for="incoming_stamp_duty">Incoming stamp duty:</label>
                        <input v-model="form.incoming_stamp_duty" class="form-control" type="number"
                            id="incoming_stamp_duty" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label for="loan_amount">Loan amount:</label>
                        <input v-model="form.loan_amount" class="form-control" type="number" id="loan_amount" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label for="loan_duration">Loan duration:</label>
                        <input v-model="form.loan_duration" class="form-control" type="number" id="loan_duration" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label for="monthly_expenses">Monthly Expense:</label>
                        <input v-model="form.monthly_expenses" class="form-control" type="number"
                            id="monthly_expenses" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label for="outgoing_address">Outgoing address:</label>
                        <input v-model="form.outgoing_address" class="form-control" type="text" id="outgoing_address" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label for="outgoing_mortgage">Outgoing mortgage:</label>
                        <input v-model="form.outgoing_mortgage" class="form-control" type="number"
                            id="outgoing_mortgage" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label for="outgoing_valuation">Outgoing valuation:</label>
                        <input v-model="form.outgoing_valuation" class="form-control" type="number"
                            id="outgoing_valuation" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label for="savings_contribution">Outgoing savings contribution:</label>
                        <input v-model="form.savings_contribution" class="form-control" type="number"
                            id="savings_contribution" />
                    </div>
                </div>
            </div>

            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'LoanForm',
    setup() {
        const router = useRouter();
        const form = ref({
            applicant_name: '',
            applicant_email: '',
            applicant_mobile_phone_number: '',
            applicant_address: '',
            annual_income_before_tax: 0,
            incoming_address: '',
            incoming_deposit: 0,
            incoming_price: 0,
            incoming_stamp_duty: 0,
            loan_amount: 0,
            loan_duration: 0,
            monthly_expenses: 0,
            outgoing_address: '',
            outgoing_mortgage: 0,
            outgoing_valuation: 0,
            savings_contribution: 0,
        });

        const onSubmit = () => {
            console.log(form._rawValue)
            fetch(`http://localhost:5000/api/applications/submit`, {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form._rawValue),
            }).then(async (res) => {
                const data = await res.json();
                if (data?.error) {
                    alert(data.error)
                } else {
                    router.push('/');
                }
            }).catch((err) => {
                console.log(err)
            });
        };

        return {
            form,
            handleSubmit: onSubmit,
        };
    },
});
</script>
