<template>
  <div class="container">

    <base-dialog :show="!!dialog" title="Semino 25-12-2021" @close="clearDialog">
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and  Lorem Ipsum.</p>
    </base-dialog>

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
          <div class="col">
            <color-button color="blue"></color-button>
          </div>
          <div class="col">
            <color-button color="yellow"></color-button>
          </div>
          <div class="col">
            <color-button color="light-blue"></color-button>
          </div>
          <div class="col">
            <color-button color="green"></color-button>
          </div>
        </section>

        <section class="row mt-5">
          <base-button title="Ottini il semino" @click="showDialog"></base-button>
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
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    clearDialog() {
      this.dialog = false;
    },
    showDialog() {
      this.dialog = true;
    },
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
