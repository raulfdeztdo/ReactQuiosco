import useQuiosco from "../hooks/useQuiosco";
import { formatearPrecio } from "../helpers";

export default function ResumenProducto({producto}) {

    const { handleClickModal } = useQuiosco();
    const {id, nombre, precio, cantidad} = producto;

    return (
        <div className="shadow space-y-1 p-4 bg-white rounded-xl mb-5">
            <div className="space-y-2">
                <p className="text-base font-bold">{nombre}</p>
                <p className="text-base font-bold ">Cantidad: {cantidad}</p>
                <p className="text-base font-bold text-amber-600">
                    Precio: {formatearPrecio(precio)}
                </p>
                <p className="text-base text-gray-700">
                    Subtotal:{formatearPrecio(precio * cantidad)}
                </p>
            </div>

            <div className="flex justify-between gap-2 pb-4">
                <button
                    type="button"
                    className="bg-sky-600 hover:bg-sky-800 p-2 text-white rounded-md font-bold uppercase shadow-md text-center"
                    onClick={handleClickModal}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                </button>
                <button
                    type="button"
                    className="bg-red-600 hover:bg-red-800 p-2 text-white rounded-md font-bold uppercase shadow-md text-center"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"strokeWidth={2} >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                    </svg>
                </button>
            </div>
        </div>
    );

}
