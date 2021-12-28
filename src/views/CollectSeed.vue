<template>
  <div class="container">

    <base-dialog :show="!!dialog" :title="'Semino' + seedTitle" @close="clearDialog">
    <p>{{ seedMessage }}</p>
    </base-dialog>

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
          <div class="col-12 mx-auto">
            <base-button title="Indietro" @click="$router.go(-1)"></base-button>
          </div>
        </header>

        <section class="row my-5">
          <div class="col-12">
            <h5 class="color3">Scegli un colore</h5>
          </div>
        </section>

        <section class="row my-5">
          <div v-for="c in colors" :key="c.id" class="col">
            <color-button :color="c.color" @click="handleColor(c)"></color-button>
          </div>
        </section>

        <section class="row mt-5">
          <base-button title="Ottini il semino" @click="pickSeed" :disabled="!selectedColor"></base-button>
        </section>

      </base-card>
    </div>

  </div>
</template>

<script>
import ColorButton from '@/components/seeds/ColorButton.vue'
// @ is an alias to /src

export default {
  components: { ColorButton },
  computed: {
    colors() {
      return this.$store.getters['userSeed/colors'];
    }
  },
  data() {
    return {
      dialog: false,
      selectedColor: null,
      seedTitle: null,
      seedMessage: null,
      isLoading: false,
      toast: {
          val: false,
          message: '',
          type: 'danger'
      }
    }
  },
  methods: {
    clearDialog() {
      this.dialog = false;
    },
    showDialog() {
      this.dialog = true;
    },
    handleColor(c) {
      this.selectedColor = c.color;
    },
    async pickSeed() {
      this.isLoading = true;
      try {
          await this.$store.dispatch('userSeed/pickSeed');
          // const redirectUrl = '/' + (this.$route.query.redirect || 'user/home');
          const lastSeed = this.$store.getters['userSeed/lastSeed'];
          this.seedTitle = lastSeed.pickDate;
          this.seedMessage = lastSeed.message;
          this.showDialog()
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
  font-size: 0.70rem;
}
.bg-layout {
    background: url('../assets/layout-4.png');
    background-position: center center; 
    background-repeat: no-repeat; 
    background-size: 100% 100%;
    background-color: #fff;
}

/* Medium devices (tablets, 768px and up)  */
@media (min-width: 768px) { 
  .bg-layout {
    background: url('../assets/layout-5-lg.png');
    background-position: bottom; 
    background-repeat: no-repeat; 
    background-size: 100%;
    background-color: #fff;
  }
}
</style>
