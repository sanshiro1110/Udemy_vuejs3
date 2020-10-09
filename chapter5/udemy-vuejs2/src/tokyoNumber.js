export const tokyoNumber = {
  data() {
    return {
      title: 'Welecom to Tokyo',
      subTitle: 'Tokyo is a great city',
      number: 0
    }
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  },
  created() {
    console.log('created in mixin')
  }
}
