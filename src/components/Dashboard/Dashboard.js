
export default {
    data() {
        return {
        }
    },
    methods: {
        logout: function () {
            localStorage.clear();
            this.$router.push({ name: 'Login' });
        }
    }
}
