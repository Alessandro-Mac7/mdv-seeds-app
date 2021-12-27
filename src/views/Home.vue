<template>
  <div class="container">

    <div class="row">
      <base-card class="bg-layout">
        <header class="row my-5">
          <div class="col-12 mx-auto">
            <h3 class="color3"> Raccolta dei semini </h3>
          </div>
        </header>

        <section class="row">
          <div class="col-12 mx-auto">
            <div class="card card-body shadow-lg color3">
              <h3 class="my-3">Pace e bene</h3>
              <p class="small">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beeQuen the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and  Lorem Ipsum.</p>
            </div>
          </div>
        </section>

        <base-button title="Accedi" @click="handleClick" class="my-5"></base-button>
      </base-card>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  // components: {
  //   HelloWorld
  // }
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    handleClick() {
      this.$router.push('auth');
    }
  }

}
</script>

<style scoped>
.bg-layout {
    background: url('../assets/layout-1.png');
    background-position: center center; 
    background-repeat: no-repeat; 
    background-size: 100% 100%;
    background-color: #fff;
}
.card{
  border-color: transparent;
  background-color: #eff0eb;
}
.small {
  font-size: 0.70rem;
}

/* Medium devices (tablets, 768px and up)  */
@media (min-width: 768px) { 
  .bg-layout {
    background: url('../assets/layout-1-lg.png');
    background-position: bottom; 
    background-repeat: no-repeat; 
    background-size: 100%;
    background-color: #fff;
  }
}
</style>
