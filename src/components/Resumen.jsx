import { formatearPrecio } from "../helpers";
import useQuiosco from "../hooks/useQuiosco"
import ResumenProducto from "./ResumenProducto";

export default function Resumen() {

    const { pedido, total } = useQuiosco();

    const comprobarPedido = () => pedido.length === 0;

    return (
        <aside className="w-full md:w-72 h-screen ovwerflow-y-scroll p-5">
            <h1 className="text-4xl font-black">Carrito</h1>
            <p className="text-xl my-10">
                Aqui podrás ver el resumen de tu pedido
            </p>

            <div className="py-10">
                {pedido.length === 0 ? (
                    <p className="text-center text-lg">No hay productos en el carrito</p>
                ) : (
                    pedido.map( producto => (
                        <ResumenProducto
                            key={producto.id}
                            producto={producto}
                        />
                    ))
                )}
            </div>

            <p className="text-xl mt-10">
                Total: {''}
                <span className="font-bold text-2xl text-amber-600">{formatearPrecio(total)}</span>
            </p>

            <form className="wfull">
                <div className="mt-5">
                    <input
                        type="submit"
                        className={`p-3 mt-5 w-full font-bold text-white uppercase shadow-sm cursor-pointer ${comprobarPedido() ? 'bg-sky-100' : ' bg-sky-600 hover:bg-sky-800' } rounded-xl`}
                        value="Realizar pedido"
                        disabled={comprobarPedido()}
                    />
                </div>
            </form>
        </aside>
    )
}
