<template>
    <div class="seed-card p-3 shadow color3">
        <div class="row">
            <div class="col-7 me-auto"><h6>{{ pickDate }}</h6></div>
            <div class="col-1 color"></div>
            <div class="col-4 ms-auto"> <i class="far fa-eye icon-button"></i> </div>
        </div>
    </div>

</template>

<script>
export default {
    props: ['id', 'message', 'pickDate']
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
    background-color: green;
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
</style>