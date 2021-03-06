const CallApi = async (url, options = {}) => {

    options.headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
    };
    
    const response = await fetch("http://localhost:3002/api" + url, options);
    const data = await response.json();
    
    return data;
};

const api = {
    productos: {
        list() {
            return CallApi("/productos")
        },
        create(producto) {
            return CallApi("/productos", {
                method: "POST",
                body: JSON.stringify(producto),
            });
        },
        delete(id) {
            return CallApi(`/productos/${id}`, {method: "DELETE",});

        },

        edit(producto) {
            return CallApi(`/productos/${producto._id}`, {
                method: "PUT",
                body: JSON.stringify(producto),
            });
        },
        getProducto(id) {
            return CallApi(`/productos/${id}`);
        },
        
    },
    ventas: {
        list() {
            return CallApi("/ventas")
        },
        create(venta) {
            return CallApi("/ventas", {
                method: "POST",
                body: JSON.stringify(venta),
            });
        },
        delete(id) {
            return CallApi(`/ventas/${id}`, {method: "DELETE",});

        },
        edit(venta) {
            return CallApi(`/ventas/${venta._id}`, {
                method: "PUT",
                body: JSON.stringify(venta),
            });
        },
        getVenta(id) {
            return CallApi(`/ventas/${id}`);
        },
    },
    usuarios: {
        list() {
            return CallApi("/usuarios")
        },
        create(usuario) {
            return CallApi("/usuarios", {
                method: "POST",
                body: JSON.stringify(usuario),
            });
        },
        delete(id) {
            return CallApi(`/usuarios/${id}`, {method: "DELETE",});

        },
        edit(usuario) {
            return CallApi(`/usuarios/${usuario._id}`, {
                method: "PUT",
                body: JSON.stringify(usuario),
            });
        },
        getUsuario(id) {
            return CallApi(`/usuarios/${id}`);
        },
    },

};

export default api;