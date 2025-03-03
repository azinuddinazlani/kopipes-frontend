import axios from 'axios'

// Create an Axios instance with default settings
const apiClient = axios.create({
  baseURL: 'https://kopipes-backend-1082564059873.asia-southeast1.run.app', // Set your API base URL here
  headers: {
    'Content-Type': 'application/json',
  },
})

export default {
  // Generic POST request function
  async postData(endpoint, data) {
    try {
      const response = await apiClient.post(endpoint, data)
      return response.data
    } catch (error) {
      console.error('API POST Error:', error)
      throw error
    }
  },

  async userList(data) {
    return await this.postData('/users/', data)
  },

  async userRegister(data) {
    return await this.postData('/users/register', data)
  },

  async userLogin(data) {
    return await this.postData('/users/login', data)
  },

  async userDetail(email, data) {
    return await this.postData(`/users/${email}`, data)
  },

  async userDetailUpdate(email, data) {
    return await this.postData(`/users/${email}/update`, data)
  },
}
