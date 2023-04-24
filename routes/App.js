import { Nav } from '../layouts/Nav.js';
import { Footer } from '../layouts/Footer.js';
import { Error404 } from '../pages/Error404.js';
import { PartidosCreados } from '../pages/PartidosCreados.js';
import { Registrarse } from '../pages/Registrarse.js';
import resolverRutas from '../connections/helpers/resolverRutas.js';
import gethash from '../connections/helpers/gethash.js';

const ROUTES = {
    "/": PartidosCreados,
    "/registrarse": Registrarse
}

const App = async () => {

    const header = document.querySelector("header")
    const main = document.querySelector('main')
    const footer = document.querySelector('footer')

    header.innerHTML = Nav();
    footer.innerHTML = Footer();

    let ruta = await resolverRutas(gethash());
    let pagina = (ROUTES[ruta] ? ROUTES[ruta] : Error404);

    main.innerHTML = pagina();

}

export { App };