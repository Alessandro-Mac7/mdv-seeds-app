<template>
  <div class="container">

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
            <register-form v-else></register-form>
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
    handleLogin(data) {
      console.log(data)
      this.$router.push('user/home');
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
    background: url('../assets/layout-2.png');
    background-position: center center; 
    background-repeat: no-repeat; 
    background-size: 100% 100%;
    background-color: #fff;
}
</style>
