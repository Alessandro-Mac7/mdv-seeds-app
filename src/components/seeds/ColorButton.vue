<template>
    <button class="btn color-button rounded-circle shadow"
    :class="color"
    ></button>
</template>

<script>
export default {
    props: ['color']
}
</script>


<style scoped>
.color-button {
    padding: 1.5rem;
    border-color: transparent;
    background-color: #908286;
    transition: all .1s;
}
.blue {
    background-color: #7e93ab;
}
.blue:hover, .blue:focus {
    background-color: #98b0cc;
    transform: scale(0.93);
}
.yellow {
    background-color: #ffdb4f;
}
.yellow:hover, .yellow:focus {
    background-color: #f5dd7e;
    transform: scale(0.93);
}
.green {
    background-color: #43b14b;
}
.green:hover, .green:focus {
    background-color: #62c268;
    transform: scale(0.93);
}
.light-blue {
    background-color: #1ac8db;
}
.light-blue:hover, .light-blue:focus {
    background-color: #4adcec;
    transform: scale(0.93);
}
</style>