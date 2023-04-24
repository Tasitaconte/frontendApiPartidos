// para que la url funcione correctamente debe ser tipo http://127.0.0.1:5500/#/registrarse

export default () => location.hash.slice(1).split("/")[1] || "/";

