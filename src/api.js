import axios from "axios";

const axiosAPI = axios.create({
  baseURL: "http://127.0.0.1:8080",
});

const apiRequest = (method, url, request) => {
  const headers = {
    authorization: "",
  };
  //using the axios instance to perform the request that received from each http method
  return axiosAPI({
    method,
    url,
    data: request,
    headers,
  })
    .then((res) => {
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

const get = (url, request) => apiRequest("get", url, request);

const deleteRequest = (url, request) => apiRequest("delete", url, request);

const post = (url, request) => apiRequest("post", url, request);

const put = (url, request) => apiRequest("put", url, request);

const patch = (url, request) => apiRequest("patch", url, request);

const API = {
  get,
  delete: deleteRequest,
  post,
  put,
  patch,
};

export default API;
