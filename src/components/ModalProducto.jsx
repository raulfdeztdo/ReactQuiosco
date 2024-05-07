import { formatearPrecio } from "../helpers";
import { useState, useEffect } from "react";
import useQuiosco from "../hooks/useQuiosco"

export default function ModalProducto() {

    const { producto, handleClickModal, handleAgregarPedido, pedido } = useQuiosco();
    const [cantidad, setCantidad] = useState(1);

    useEffect(() => {
        if (pedido.some( pedidoState => pedidoState.id === producto.id)) {
            const { cantidad } = pedido.find( pedidoState => pedidoState.id === producto.id);
            setCantidad(cantidad);
        }
    }, [pedido]);

    return (
        <div className="md:flex gap-10">
            <div className="md:w-1/3">
                <img src={`/img/${producto.imagen}.jpg`} alt={`Imagen producto ${producto.nombre}`} />
            </div>

            <div className="md:w-2/3">
                <div className="flex justify-end">
                    <button type="button" onClick={ () => { handleClickModal(); }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </div>

                <h1 className="mt-5 font-bold text-xl">
                    {producto.nombre}
                </h1>

                <p className="mt-5 font-black text-3xl text-amber-600">{formatearPrecio(producto.precio)}</p>

                <div className="flex gap-4 mt-5">
                    <button
                        type="button"
                        onClick={() => {
                            if (cantidad <= 1) return;
                                setCantidad(cantidad - 1);
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                    <p className="text-3xl">{cantidad}</p>
                    <button
                        type="button"
                        onClick={() => {
                            if (cantidad >= 5) return;
                            setCantidad(cantidad + 1);
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </div>

                <button
                    type="button"
                    className="p-3 mt-5 font-bold text-white uppercase shadow-sm cursor-pointer bg-sky-600 hover:bg-sky-800 rounded-xl"
                    onClick={() => {
                        handleAgregarPedido({...producto, cantidad});
                        handleClickModal();
                    }}
                >
                    Añadir al carrito
                </button>

            </div>
        </div>
    )
}
