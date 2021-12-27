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
          <div class="col-12 ">
            <input type="date" class="form-control mx-auto color3" v-model="date">
          </div>
        </section>

        <section class="row gy-3 mt-4 mb-5">
          <div class="col-12 mx-auto">
            <seed-item pickDate="25-12-2021"></seed-item>
          </div>
        </section>

      </base-card>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import SeedItem from '@/components/seeds/SeedItem.vue';

export default {
  components: { SeedItem },
  data() {
    return {
      date: ''
    }
  },
  computed: {
    filteredSeeds() {
      return this.$store.getters['seed/seeds'];
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
  max-width: 15rem;
  border: none;
  box-shadow: none;
}
input, input:focus, input:hover {
  text-align: center;
  color: #a58b7a;
  background-color: transparent;
  box-shadow: none;
}

/* Medium devices (tablets, 768px and up)  */
@media (min-width: 768px) { 
  .bg-layout {
    background: url('../assets/layout-4-lg.png');
    background-position: bottom; 
    background-repeat: no-repeat; 
    background-size: 100%;
    background-color: #fff;
  }
}
</style>
