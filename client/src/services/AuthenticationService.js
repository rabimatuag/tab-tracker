const Api = require('./Api')

export default{
  register (credentials) {
    return Api().post('register', credentials)  //  allows to call register method
  }
}