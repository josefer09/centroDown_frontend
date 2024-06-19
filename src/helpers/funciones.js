
export function isObjectEmpty(obj) {
    return !Object.values(obj).every(input => input !== ''); // Esto me dara true si esta vacio algun campo
}

export function validateUserSession() {
    const userInfo = JSON.parse(localStorage.getItem('userSession'));
      if(!userInfo) return window.location.href = "../../index.html";
      return userInfo;
  }