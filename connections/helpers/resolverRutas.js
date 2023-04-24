export default async (ruta) => {
    if (ruta.length < 3) {
        return (ruta === "/") ? ruta : "/:id";
    }
    // interpolación de cadenas 
    return `/${ruta}`
}