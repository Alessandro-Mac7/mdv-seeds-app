<template>
  <div class="container">
    <!-- Toast -->
    <base-toast :show="!!toast.val" :type="toast.type">
        {{ toast.message }}
    </base-toast>

    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>

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

        <section v-if="hasSeeds" class="row max-height gy-4 mt-4 mb-5">
          <div v-for="seed in filteredSeeds" :key="seed.id" class="col-12 mx-auto">
            <seed-item 
                :pickDate="seed.pickDate" 
                :color="seed.color" 
                :message="seed.message"></seed-item>
          </div>
        </section>
        <section v-else class="row mt-4 mb-5">
          <div class="card card-body shadow-lg ">
              <h5 class="my-3">Semino non disponibile</h5>
              <p class="small">Nessun semino disponibile, raccogliene uno per ricevere una santa parola.</p>
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
      date: '',
      isLoading: false,
      toast: {
          val: false,
          message: '',
          type: 'danger'
      }
    }
  },
  created() {
    this.loadSeedList();
  },
  computed: {
    filteredSeeds() {
      return this.$store.getters['userSeed/seeds'];
    },    
    hasSeeds() {
      return this.$store.getters['userSeed/hasSeeds'];
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
    },
    async loadSeedList() {
      this.isLoading = true;
      try {
          await this.$store.dispatch('userSeed/loadUserSeeds');
          // const redirectUrl = '/' + (this.$route.query.redirect || 'user/home');
      } catch (error) {
        this.showToast(error.message || 'Errore nel caricamento semino!');
      }
      this.isLoading = false;
    },
    showToast(message, isSuccess = false) {
      this.toast.val = true;
      this.toast.message = message;

      if (isSuccess) {
          this.toast.type = 'success';
          setTimeout(() => {
          this.toast.val = false;
          }, 700);
      } else {
          this.toast.type = 'danger';
          setTimeout(() => {
          this.toast.val = false
          }, 3000);
      }
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
.max-height{
    max-height: 40vh !important;
    overflow-y: scroll;
    scrollbar-width: none;
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
