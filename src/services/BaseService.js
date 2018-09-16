import axios from 'axios'

export default class BaseService {
  http = axios
  baseURL = 'http://localhost:8000/api/v1'

  buildEndpoint(endpoint) {
    return `${this.baseURL}${endpoint}`
  }
}