<template>
    <button class="btn action-button rounded-pill"> {{ title }} </button>
</template>

<script>
export default {
    props: ['title']
}
</script>


<style scoped>
.action-button {
    color: #fff;
    padding: 0.7em 1.7em;
    border-color: transparent;
    font-size: 18px;
    background-color: #908286;
    transition: all .1s;
    -webkit-box-shadow: 3px 4px 15px -5px #7E7E7E; 
    box-shadow: 3px 4px 15px -5px #7E7E7E;
}
.action-button:hover {
    background-color: #c3b5b9;
    transform: scale(0.97);
}
.action-button:focus {
    background-color: #c3b5b9;
    transform: scale(0.93);
}
</style>