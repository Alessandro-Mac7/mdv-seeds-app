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

        <section class="row my-4">
          <div class="col-12">
            <h5 class="color3">Pace e bene, {{ userName }}</h5>
          </div>
        </section>

        <section v-if="hasLastSeed" class="row gy-3 my-4">
          <div class="col-12 mx-auto color3">
            <div>
              Ultimo semino pescato
            </div>
          </div>
          <div class="col-12 mx-auto">
            <div class="card card-body shadow-lg ">
              <h5 class="my-3">{{ lastSeedTitle }}</h5>
              <p class="small">{{ lastSeed.message }}</p>
            </div>
          </div>
        </section>
        <section v-else class="row gy-3 my-4">
          <div class="col-12 mx-auto color3">
            <div>
              Nessun semino pescato
            </div>
          </div>
          <div class="col-12 mx-auto">
            <div  v-if="!isLoading" class="card card-body shadow-lg ">
              <h5 class="my-3">Semino non disponibile</h5>
              <p class="small">Nessun semino disponibile, raccogliene uno per ricevere una santa parola.</p>
            </div>
          </div>
        </section>

        <section class="row mt-5">
          <div class="col-12">
            <base-button title="Pesca un semino" @click="handleClick"></base-button>
          </div>
        </section>

        <section class="row mt-5">
          <div class="col-12 mx-auto">
            <i class="fas fa-sign-out-alt signout-icon " @click="handleSignout"></i>
          </div>
        </section>

      </base-card>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  created() {
    this.loadLastSeed();
  },
  data() {
    return {
      isLoading: false,
      toast: {
          val: false,
          message: '',
          type: 'danger'
      }
    }
  },
  computed: {
    userName() {
      return this.$store.getters.name;
    },
    lastSeed() {
      return this.$store.getters['userSeed/lastSeed'];
    },
    hasLastSeed() {
      return this.$store.getters['userSeed/hasLastSeed'];
    },
    lastSeedTitle() {
      return 'Semino ' + this.lastSeed.pickDate
    }
  },
  methods: {
    async loadLastSeed() {
      this.isLoading = true;
      try {
          await this.$store.dispatch('userSeed/loadLastSeed');
          // const redirectUrl = '/' + (this.$route.query.redirect || 'user/home');
      } catch (error) {
        this.showToast(error.message || 'Errore nel caricamento semino!');
      }
      this.isLoading = false;
    },
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
    async handleSignout() {
      this.isLoading = true;
      try {
          await this.$store.dispatch('logout');
          this.$router.replace('/home');
          // const redirectUrl = '/' + (this.$route.query.redirect || 'user/home');
      } catch (error) {
        this.showToast(error.message || 'Errore nel logout!');
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
  font-size: 0.70rem;
}
.bg-layout {
    background: url('../assets/layout-3.png');
    background-position: center center; 
    background-repeat: no-repeat; 
    background-size: 100% 100%;
    background-color: #fff;
}
.signout-icon {
  cursor: pointer;
  font-size: 1.5rem;
  color: #6e4f3a;
  transition: all .1s;
}

.signout-icon:hover, .signout-icon:focus {
  color: #908286;
  transform: scale(0.93);
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
