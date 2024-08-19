<template>
    <div class="container py-5">
        <div class="card">
            <div class="card-header text-capitalize">
                average loan amount
            </div>
            <div class="card-body">
                <div class="alert alert-primary" role="alert">
                    {{ amount }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
    name: 'LoanAmount',
    setup() {
        const amount = ref(0);

        const loanAmount = () => {
            fetch(`http://localhost:5000/api/applications/average-loan-amount`, {
                method: 'GET',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            }).then(async (res) => {
                const data = await res.json();
                amount.value = data.averageLoanAmount;
            });

        }

        onMounted(() => {
            loanAmount()
        })

        return { amount };
    },
})
</script>