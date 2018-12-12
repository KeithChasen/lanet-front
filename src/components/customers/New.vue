<template>
    <div class="customer-new">
        <form @submit.prevent="add">

            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" class="form-control" v-model="customer.name" />
            </div>

            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" class="form-control" v-model="customer.email" />
            </div>

            <div class="form-group">
                <label for="phone">Phone</label>
                <input type="text" id="phone" class="form-control" v-model="customer.phone" />
            </div>

            <div class="form-group">
                <label for="website">Website</label>
                <input type="text" id="website" class="form-control" v-model="customer.website" />
            </div>
            <router-link to="/customers" class="btn">
                Cancel
            </router-link>
            <button type="submit" class="btn btn-primary">Create</button>
        </form>
        <div class="errors" v-if="errors">
            <ul>
                <li v-for="(fieldsError, fieldName) in errors" :key="fieldName">
                    <strong>{{ fieldName }}</strong> {{ fieldsError.join('\n')}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    import validate from 'validate.js';

    export default {
        name: "new",
        data() {
            return {
                customer: {
                    name: '',
                    email: '',
                    phone: '',
                    website: ''
                },
                errors: null
            }
        },
        computed: {
            currentUser() {
                return this.$store.getters.currentUser;
            }
        },
        methods: {
            add() {
                this.errors = null;

                const constraints = this.getConstraints();

                const errors = validate(this.$data.customer, constraints);

                if (errors) {
                    this.errors = errors;
                    return;
                }

                axios.post('http://lanet.loc/api/customers', this.$data.customer)
                .then((response) => {
                    this.$router.push('/customers');
                });
            },
            getConstraints() {
                return {
                    name: {
                        presence: true,
                        length: {
                            minimum: 3,
                            message: 'Must be at least 3 characters long'
                        }
                    },
                    email: {
                        presence: true,
                        email: true
                    },
                    phone: {
                        presence: true,
                        numericality: true,
                        length: {
                            minimum: 10,
                            message: 'Must be at least 10 digits long'
                        }
                    },
                    website: {
                        presence: true,
                        url: true
                    }
                }
            }
        }
    }
</script>

<style scoped>
.errors {
    background: lightcoral;
    border-radius: 5px;
    padding: 21px 0 2px 0;
    margin: 21px 0 2px 0;
}
</style>