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
        <header class="row my-2">
          <div class="col-12 mx-auto">
            <back-button></back-button>
          </div>
        </header>
        <header class="row my-3">
          <div class="col-6 mx-auto">
            <base-button title="Accedi" @click="switchForm('login')"></base-button>
          </div>
          <div class="col-6 mx-auto">
            <base-button title="Iscriviti" @click="switchForm('register')"></base-button>
          </div>
        </header>

        <section class="row my-4">
          <div class="col-12 mx-auto">
            <login-form v-if="!signUp" @login-data="handleLogin"></login-form>
            <register-form v-else @register-data="handleSignup"></register-form>
          </div>
        </section>

      </base-card>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/seeds/LoginForm.vue'
import RegisterForm from '@/components/seeds/RegisterForm.vue'

export default {
  components: {
    LoginForm, RegisterForm
  },
  data() {
    return {
      dialog: false,
      isLoading: false,
      toast: {
          val: false,
          message: '',
          type: 'danger'
      },
      signUp: false
    }
  },
  methods: {
    showDialog() {
      this.dialog = true;
    },
    clearDialog() {
      this.dialog = false;
    },
    switchForm(type) {
      if (type === 'login') {
        this.signUp = false;
      } else {
        this.signUp = true;
      }
    },
    async handleLogin(data) {
      this.isLoading = true;
      try {
          await this.$store.dispatch('login', data);
          // const redirectUrl = '/' + (this.$route.query.redirect || 'user/home');
          this.$router.replace('/user/home');
      } catch (error) {
        this.showToast(error.message || 'Errore nel Login!');
      }
      this.isLoading = false;
    },
    async handleSignup(data) {
      this.isLoading = true;
      try {
          await this.$store.dispatch('signup', data);
          // const redirectUrl = '/' + (this.$route.query.redirect || 'user/home');
      } catch (error) {
        this.showToast(error.message || 'Errore nella registrazione!');
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
    background: url('../assets/layout-2.png');
    background-position: center center; 
    background-repeat: no-repeat; 
    background-size: 100% 100%;
    background-color: #fff;
}

/* Medium devices (tablets, 768px and up)  */
@media (min-width: 768px) { 
  .bg-layout {
    background: url('../assets/layout-2-lg.png');
    background-position: bottom; 
    background-repeat: no-repeat; 
    background-size: 100%;
    background-color: #fff;
  }
}
</style>
