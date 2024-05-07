import { formatearPrecio } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";

export default function Producto({producto}) {

    const {handleClickModal, handleSetProducto} = useQuiosco();
    const {nombre, precio, imagen} = producto

    return (
        <div className=" border p-3 shadow-lg bg-amber-100 rounded-lg">
            <img src={`/img/${imagen}.jpg`} alt={`Imagen producto ${nombre}`} className="rounded-lg w-full" />
            <div className="p-5">
                <h3 className="font-bold">{nombre}</h3>
                <p className="mt-5 font-black text-xl text-amber-600">{formatearPrecio(precio)}</p>
                <button
                    type="button"
                    className="w-full p-3 mt-5 font-bold text-white uppercase shadow-sm cursor-pointer bg-sky-600 hover:bg-sky-800 rounded-xl"
                    onClick={ () => {
                        handleClickModal();
                        handleSetProducto(producto);
                    }}
                >
                    Agregar
                </button>
            </div>
        </div>
    )
}
