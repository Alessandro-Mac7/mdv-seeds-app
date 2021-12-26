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

        <section class="row gy-2 mt-3 mb-4">
          <div class="col-12">
            <h5 class="color3">I miei semini</h5>
          </div>
          <div class="col-12 mx-auto color3">
            <div class="small">
              Seleziona data:
            </div>
          </div>
          <div class="col-12 mx-auto">
            <input type="date" class="form-control color3 shadow" v-model="date">
          </div>
        </section>

        <section class="row gy-3 mt-4 mb-5">
          <div class="col-12 mx-auto">
            <div class="card card-body shadow-lg color3">
              <h5 class="my-3">Semino 25-12-2021</h5>
            </div>
          </div>
        </section>

      </base-card>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      date: ''
    }
  },
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
  font-size: 1rem;
}
.bg-layout {
    background: url('../assets/layout-5.png');
    background-position: center center; 
    background-repeat: no-repeat; 
    background-size: 100% 100%;
    background-color: #fff;
}
.form-control {
  background-color: transparent;
  border: none;
}
input, input:focus {
  text-align: center;
  color: #6e4f3a;
  background-color: transparent;
}
</style>
