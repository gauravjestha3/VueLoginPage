export default {
  data () {
    return {
      alert: {
        showAlert: false,
        heading: '',
        message: '',
        buttonText: ''

      }
    }
  },
  methods: {
    showAlert (heading, message, buttonText) {
      this.alert.showAlert = true
      this.alert.heading = heading
      this.alert.message = message
      this.alert.buttonText = buttonText
    }
  }
}
