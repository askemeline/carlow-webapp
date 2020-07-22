import axios from "axios";
import jwtDecode from "jwt-decode";
import jwt_decode from "jwt-decode";

/**
 * Déconnexion (supression du token du localstorage et sur axios)
 */

function logout() {
  window.localStorage.removeItem("authToken");
  delete axios.defaults.headers["Authorization"];
  console.log("logout!");
}

/**
 * Requete HTTP d'authentification et stockage du token dans le storage et sur axios
 * @param {Object} credentials
 */

function authenticate(credentials) {
  return axios
    .post("https://api-carlow.herokuapp.com/api/login_check", credentials)
    .then((response) => response.data.token)
    .then((token) => {
      //stock token dans localstorage
      window.localStorage.setItem("authToken", token);
      //on previent axios qu'on a maintenant un header par default sur toues nos futurs  requetes HTTP
      setAxiosToken(token);
      return true;
    });
}
/**
 * Positionne le token JWT sur axios
 * @param {string} token Le token JWT
 */
function setAxiosToken(token) {
  axios.defaults.headers["Authorization"] = "Bearer " + token;
}

/**
 * Mise en place lors du chargement de l'application
 */
function setup() {
  //voir le token
  const token = window.localStorage.getItem("authToken");
  //si le token est encore valide
  if (token) {
    const { exp: expiration } = jwtDecode(token);
    if (expiration * 1000 > new Date().getTime()) {
      //donner le token a axios
      setAxiosToken(token);
    }
  }
}

/**
 * Permet de savoir si on est authentifié ou pas
 * @returns boolean
 */
function isAuthenticated() {
  const token = window.localStorage.getItem("authToken");
  if (token) {
    const { exp: expiration } = jwtDecode(token);
    if (expiration * 1000 > new Date().getTime()) {
      return true;
    }
  }
  return false;
}

/**
 * Permet d'avoir l'id user
 */

function findUser() {
  const token = window.localStorage.getItem("authToken");
  var decoded = jwt_decode(token);
  const id = decoded.id;
  return axios
    .get(`https://api-carlow.herokuapp.com/api/users/${id}`)
    .then((response) => response.data);
}

/**
 * Permet d'avoir l'id user
 */

function getId() {
  const token = window.localStorage.getItem("authToken");
  var decoded = jwt_decode(token);
  const id = decoded.id;
  return id;
}

export default {
  authenticate,
  logout,
  setup,
  isAuthenticated,
  findUser,
  getId,
};
