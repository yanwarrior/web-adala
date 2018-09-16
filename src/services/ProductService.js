import BaseService from '@/services/BaseService'

export default class ProductService extends BaseService {

  all(categorySlug=null) {
    let endpoint = ''
    
    if (categorySlug) {
      endpoint = this.buildEndpoint(`/products/products/${categorySlug}/`)
    } else {
      endpoint = this.buildEndpoint(`/products/products/${categorySlug}/`)
    }

    return this.http.get(endpoint)
        .then(resp => resp)
        .catch(err => err.response)
  }
  
  search(q) {
    return this.http.get(this.buildEndpoint('/products/products/'), {
      params: {
        q: q
      }
    })
      .then(resp => resp)
      .catch(err => err.response)
  }
}