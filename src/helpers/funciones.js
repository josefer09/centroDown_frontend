
export function isObjectEmpty(obj) {
    return !Object.values(obj).every(input => input !== ''); // Esto me dara true si esta vacio algun campo
}

export function anyToken() {
    const token = localStorage.getItem('token');
      if(!token) return window.location.href = "../../index.html";
  }