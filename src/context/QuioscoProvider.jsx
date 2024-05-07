import React, { createContext, useState } from 'react';
import { categorias as categoriasDb } from "../data/categorias";

const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {

    const [categorias, setCategorias] = useState(categoriasDb);
    const [categoriaActual, setCategoriaActual] = useState(categoriasDb[0]);
    const [modal, setModal] = useState(false);
    const [producto, setProducto] = useState({});
    const [pedido, setPedido] = useState([]);

    const handleClickCategoria = categoriaP => {
        const categoria = categorias.filter( categoria => categoriaP.id === categoria.id)[0];
        setCategoriaActual(categoria);
    }

    const handleClickModal = () => {
        setModal(!modal);
    }

    const handleSetProducto = producto => {
        setProducto(producto);
    }

    const handleAgregarPedido = ({categoria_id, ...producto}) => {
        const pedidoActual = [...pedido];
        const existe = pedidoActual.some( productoPedido => productoPedido.id === producto.id);
        if (existe) {
            const productos = pedidoActual.map( productoPedido => {
                if (productoPedido.id === producto.id) {
                    productoPedido.cantidad += producto.cantidad;
                    return productoPedido;
                } else {
                    return productoPedido;
                }
            });
            setPedido(productos);
        } else {
            setPedido([...pedidoActual, producto]);
        }
    }

    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                modal,
                handleClickModal,
                producto,
                handleSetProducto,
                pedido,
                handleAgregarPedido
            }}
        >{children}</QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}
export default QuioscoContext;