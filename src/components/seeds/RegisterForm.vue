<template>
<section>
    <form @submit.prevent="submitForm" class="mt-4 mb-2" >
        <div class="form-floating mb-3">
            <input type="text" class="form-control shadow rounded indent" v-model="name" id="floatingInputName" placeholder="Mario">
            <label for="floatingInputName">Nome</label>
        </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control shadow rounded indent" v-model="lastName" id="floatingInputLastName" placeholder="Rossi">
            <label for="floatingInputLastName">Cognome</label>
        </div>
        <div class="form-floating mb-3">
            <input type="email" class="form-control shadow rounded indent" v-model="email" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email</label>
        </div>
        <div class="form-floating mb-3">
            <input type="password" class="form-control shadow rounded indent" v-model="password" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
        </div>
        <div class="mx-auto">
            <base-button title="Iscriviti"></base-button>
        </div>
    </form>
</section>

</template>

<script>
export default {
    emits: ['register-data'],
    data() {
        return {
            toast: false,
            name: '',
            lastName: '',
            email: '',
            password: '',
        }
    },
    methods: {
        submitForm() {
            this.validateForm();

            // if (!this.formIsValid) {
            //     this.showToast();
            //     return;
            // }

            const formData = {
                name: this.name,
                lastName: this.lastName,
                email: this.email,
                password: this.password
            };

            this.$emit('register-data', formData);
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