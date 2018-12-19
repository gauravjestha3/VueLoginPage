
import Dashboard from '@/components/Dashboard/Dashboard.vue';
import VeeValidate from 'vee-validate';
import loginService from '@/Service/loginService.js';
import utility from '@/Common/utility';
import Alert from '@/Common/Alert';
import showAlert from '@/mixins/showAlert.js';
import Vue from 'vue'
import Alertmessage from '@/components/Alertmessage/index.vue'

Vue.use(VeeValidate);

export default {
  name: 'Login',
 
  components: {
    Dashboard,
    Alertmessage
  },
  props: [],
  mixins:[showAlert],
  data() {
    return {
      username: " ",
      password: "",

    }
  },
  methods: {
    validateMobileNumber: function () {
      var regexNumbers = /[^0-9-]*/g;
      this.username = this.username.replace(regexNumbers, '');
    },

    login: function () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          const params = {
            username: this.username,
            password: utility.sha256Hashing(this.password)
          }
          loginService.login(this.$http, params).then((response) => {
            if (response) {
              this.$router.push({ name: 'Dashboard' });
            }
          }).catch(err => {
            debugger;
            
            this.showAlert(Alert.error, Alert.notAuthorized, Alert.ok);
          });
        }
      })
    }
  }
}

