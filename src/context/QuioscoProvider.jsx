import React, { createContext, useState, useEffect } from 'react'
import { categorias as categoriasDb } from "../data/categorias"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {

    const [categorias, setCategorias] = useState(categoriasDb)
    const [categoriaActual, setCategoriaActual] = useState(categoriasDb[0])
    const [modal, setModal] = useState(false)
    const [producto, setProducto] = useState({})
    const [pedido, setPedido] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const total = pedido.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0)
        setTotal(total)
    }, [pedido])

    const handleClickCategoria = categoriaP => {
        const categoria = categorias.filter( categoria => categoriaP.id === categoria.id)[0]
        setCategoriaActual(categoria)
    }

    const handleClickModal = () => {
        setModal(!modal);
    }

    const handleSetProducto = producto => {
        setProducto(producto);
    }

    const handleAgregarPedido = ({categoria_id, ...producto}) => {
        if (pedido.some( pedidoState => pedidoState.id === producto.id)) {
            const pedidoActualizado = pedido.map( pedidoState => pedidoState.id === producto.id ? producto : pedidoState)
            setPedido(pedidoActualizado)
            toast.success("Producto actualizado")
        } else {
            setPedido([...pedido, producto ])
            toast.success("Producto agregado al pedido")
        }
    }

    const handleEditarCantidad = id => {
        const productoActualizado = pedido.filter( pedidoState => pedidoState.id === id )[0]
        setProducto(productoActualizado)
        setModal(!modal)
        toast.success("Producto actualizado")
    }

    const handleEliminarProductoPedido = id => {
        const pedidoActualizado = pedido.filter( pedidoState => pedidoState.id !== id)
        setPedido(pedidoActualizado)
        toast.success("Producto eliminado del pedido")
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
                handleAgregarPedido,
                handleEditarCantidad,
                handleEliminarProductoPedido,
                total,
            }}
        >{children}</QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}
export default QuioscoContext