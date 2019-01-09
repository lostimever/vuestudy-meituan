export default {
  dbs: 'mongodb://144.34.216.101:27017/mtstudy',
  // dbs: 'mongodb://127.0.0.1:27017/mtstudy',
  redis: {
    get host() {
      return '144.34.216.101'
      // return '127.0.0.1'
    },
    get port() {
      return 6379
    }
  },
  smtp: {
    get host() {
      return 'smtp.qq.com'
    },
    get user() {
      return '173571145@qq.com'
    },
    get pass() {
      return 'ortloahiszvybjic'
    },
    get code() {
      return () => {
        return Math.random()
          .toString(16)
          .slice(2, 6)
          .toLocaleUpperCase()
      }
    },
    get expire() {
      return () => {
        return new Date().getTime() + 60 * 60 * 1000
      }
    }
  }
}
