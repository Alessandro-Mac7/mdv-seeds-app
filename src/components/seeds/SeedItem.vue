<template>
    <base-dialog :show="!!dialog" :title="'Semino ' + pickDate" @close="clearDialog">
    <p>{{ message }}</p>
    </base-dialog>

    <div class="seed-card p-3 shadow color3">
        <div class="row">
            <div class="col-7 me-auto"><h6>{{ pickDate }}</h6></div>
            <div class="col-1 color" :class="color"></div>
            <div class="col-4 ms-auto"> <i class="far fa-eye icon-button" @click="showDialog"></i> </div>
        </div>
    </div>

</template>

<script>
export default {
    props: ['id', 'message', 'pickDate', 'color'],
    data() {
        return {
            dialog:false
        }
    },
    methods: {
        clearDialog() {
            this.dialog = false;
        },
        showDialog() {
            this.dialog = true;
        },
    }
}
</script>

<style scoped>
.seed-card{
    border-color: transparent;
    background-color: #eff0eb;
    height: 3rem;
}
.color {
    padding: 0;
    margin: -1rem;
    height: 3rem;
}
.icon-button {
    cursor: pointer;
    transition: all .1s;
}
.icon-button:hover, .icon-button:focus {
    color: #d3b282;
    transform: scale(0.93);
}

.blue {
    background-color: #7e93ab;
}
.yellow {
    background-color: #ffdb4f;
}
.green {
    background-color: #43b14b;
}
.light-blue {
    background-color: #1ac8db;
}
</style>