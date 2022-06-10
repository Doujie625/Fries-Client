let apiUrl
const apiUrls = {
  production: 'https://fry-todo-api.herokuapp.com',
  development: 'http://localhost:3000'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.production
} else {
  apiUrl = apiUrls.production
}
console.log(window.location.hostname)
export default apiUrl;