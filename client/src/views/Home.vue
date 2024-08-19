<template>
    <div class="container py-5">
        <div class="card">
            <div class="card-header">
                Application list
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-dark m-0">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">email</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">Address</th>
                                <th scope="col">Annual income before tax</th>
                                <th scope="col">Incoming address</th>
                                <th scope="col">Incoming deposit</th>
                                <th scope="col">Incoming price</th>
                                <th scope="col">Incoming stamp duty</th>
                                <th scope="col">Loan amount</th>
                                <th scope="col">Loan duration</th>
                                <th scope="col">Monthly Expense</th>
                                <th scope="col">Ongiong address</th>
                                <th scope="col">Ongiong mortgage</th>
                                <th scope="col">Outgoing valuation</th>
                                <th scope="col">Saving contribution</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in applications" :key="index">
                                <th scope="row">{{item?.id}}</th>
                                <td>{{ item?.applicant_name }}</td>
                                <td>{{ item?.applicant_email }}</td>
                                <td>{{ item?.applicant_mobile_phone_number }}</td>
                                <td>{{ item?.applicant_address }}</td>
                                <td>{{ item?.annual_income_before_tax }}</td>
                                <td>{{ item?.incoming_address }}</td>
                                <td>{{ item?.incoming_deposit }}</td>
                                <td>{{ item?.incoming_price }}</td>
                                <td>{{ item?.incoming_stamp_duty }}</td>
                                <td>{{ item?.loan_amount }}</td>
                                <td>{{ item?.loan_duration }}</td>
                                <td>{{ item?.monthly_expenses }}</td>
                                <td>{{ item?.outgoing_address }}</td>
                                <td>{{ item?.outgoing_mortgage }}</td>
                                <td>{{ item?.outgoing_valuation }}</td>
                                <td>{{ item?.savings_contribution }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
    name: 'Home',
    setup() {
        const applications = ref([]);

        const onLoad = () => {
            fetch(`http://localhost:5000/api/applications`, {
                method: 'GET',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            }).then(async (res) => {
                const data = await res.json();
                applications.value = data.applications;
            });
        }

        onMounted(() => {
            onLoad()
        })

        return { applications };
    },
})
</script>