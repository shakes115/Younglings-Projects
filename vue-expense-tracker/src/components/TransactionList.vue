<template>
    <h3>History</h3>
    <ul id="list" class="list">
        <li class="minus">
        Cash <span>-R400</span><button
        class="delete-btn">x</button>
        </li>  
        <li class="plus">
        Paycheck <span>R800</span><button
        class="delete-btn">x</button>
        </li> 
    </ul>
</template>

<script>
export default{
    data() {
        return{
            transactions: [
                { id: 1, text: 'Flower', amount: -19.99} ,
            ]
        }
    }
}
</script>