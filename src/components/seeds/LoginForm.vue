<template>
<section>
    <form @submit.prevent="submitForm" class="mt-4 mb-2" >
        <div class="form-floating mb-3">
            <input type="email" class="form-control shadow rounded indent" v-model="email" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email</label>
        </div>
        <div class="form-floating mb-3">
            <input type="password" class="form-control shadow rounded indent" v-model="password" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
        </div>
        <div class="mx-auto">
            <base-button title="Entra"></base-button>
        </div>
    </form>
    <div>
        <router-link to="/" class="color3 small">Hai dimenticato la password?</router-link>
    </div>
</section>

</template>

<script>
export default {
    emits: ['login-data'],
    data() {
        return {
            toast: false,
            email: '',
            password: '',
        }
    },
    methods: {
        submitForm() {
            // this.validateForm();

            // if (!this.formIsValid) {
            //     this.showToast();
            //     return;
            // }

            const formData = {
                email: this.email,
                password: this.password
            };

            this.$emit('login-data', formData);
        },
    }
}
</script>
<style scoped>
form {
    margin: auto;
}
.indent {
    text-indent: 1rem !important;
}
.form-control {
    background-color: #6e4f3a;
    border-color: transparent;
    color: #fff !important;
}
.form-floating {
    text-indent: 1rem !important;
    color: #fff !important;
}
input:focus {
    background-color: #6e4f3a;
    border-color: transparent !important;
}
.small {
    font-size: 0.70rem;
}
</style>