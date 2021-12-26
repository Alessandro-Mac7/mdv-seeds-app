<template>
    <div class="card mx-auto shadow-lg">
        <div v-if="title" class="card-header">
            {{ title }}
        </div>
        <div class="card-body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style scoped>
.card-header{
    background-color: #fff ;
    border-block-color: #fff;
}
.card {
    color: #29140b;
    width: 90%;
    -webkit-border-radius: 1.563rem;
    -moz-border-radius: 1.563rem;
    border-radius: 1.563rem;
    min-height: 75vh;

}


/* Small devices (landscape phones, 576px and up) 
@media (min-width: 576px) { ... }

/* Medium devices (tablets, 768px and up) 
@media (min-width: 768px) { ... }

/* Large devices (desktops, 992px and up) 
@media (min-width: 992px) { ... }

/* Extra large devices (large desktops, 1200px and up) 
@media (min-width: 1200px) { ... }*/
</style>