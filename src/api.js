const { default: Axios } = require("axios")

export const api = {
  getEndpoints: (callback) => {
    Axios({
      method: "get",
      url: `${process.env.VUE_APP_API}endpoints`,
    }).then((res) => {
      callback(res.data)
    })
  },
  checkLoggedIn: (callback) => {
    Axios({
      method: "post",
      url: `${process.env.VUE_APP_API}admin/login`,
      withCredentials: true,
    }).then((res) => callback(res.status))
      .catch((res) => callback(res.status))
  },
  getOne: (endpoint, nsfw, callback) => {
    Axios({
      method: "get",
      url: `${process.env.VUE_APP_API}${nsfw ? "nsfw" : "sfw"}/${endpoint}`,
    }).then((res) => {
      callback(res.data)
    })
  },
}
