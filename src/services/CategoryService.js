import BaseService from '@/services/BaseService'


export default class CategoryService extends BaseService {
  all() {
    return this.http.get(this.buildEndpoint('/products/categories/'))
      .then(resp => resp)
      .catch(err => err.response)
  }
}