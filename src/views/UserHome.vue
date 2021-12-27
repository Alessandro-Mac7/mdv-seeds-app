<template>
  <div class="container">

    <div class="row">
      <base-card class="bg-layout">
        <header class="row my-3">
          <div class="col-6 mx-auto">
            <base-button title="Home" @click="handleNavClick('home')"></base-button>
          </div>
          <div class="col-6 mx-auto">
            <base-button title="Semini" @click="handleNavClick('seed-list')"></base-button>
          </div>
        </header>

        <section class="row my-4">
          <div class="col-12">
            <h5 class="color3">Pace e bene, Alessandro</h5>
          </div>
        </section>

        <section class="row gy-3 my-4">
          <div class="col-12 mx-auto color3">
            <div>
              Ultimo semino pescato
            </div>
          </div>
          <div class="col-12 mx-auto">
            <div class="card card-body shadow-lg ">
              <h5 class="my-3">Semino 25-12-2021</h5>
              <p class="small">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beeQuen the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and  Lorem Ipsum.</p>
            </div>
          </div>
        </section>

        <section class="row mt-5">
          <div class="col-12">
            <base-button title="Pesca un semino" @click="handleClick"></base-button>
          </div>
        </section>

      </base-card>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  methods: {
    handleNavClick(type) {
      if (type === 'home') {
        this.$router.replace('home')
      } else if (type === 'seed-list') {
        this.$router.replace('seed-list')
      }
    },
    handleClick() {
      this.$router.push('collect-seed')
    }
  }

}
</script>

<style scoped>
.card{
  border-color: transparent;
  background-color: #eff0eb;
}
.small {
  font-size: 0.70rem;
}
.bg-layout {
    background: url('../assets/layout-3.png');
    background-position: center center; 
    background-repeat: no-repeat; 
    background-size: 100% 100%;
    background-color: #fff;
}
/* Medium devices (tablets, 768px and up)  */
@media (min-width: 768px) { 
  .bg-layout {
    background: url('../assets/layout-3-lg.png');
    background-position: bottom; 
    background-repeat: no-repeat; 
    background-size: 100%;
    background-color: #fff;
  }
}
</style>
