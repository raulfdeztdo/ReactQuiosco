import Producto from "../components/Producto";
import useQuiosco from "../hooks/useQuiosco";
import { productos as data } from "../data/productos";

export default function Inicio() {

    const { categoriaActual } = useQuiosco();

    const productos = data.filter( producto => producto.categoria_id === categoriaActual.id);

    return (
        <>
            <h1 className="text-4xl font-black">{categoriaActual.nombre}</h1>
            <p className="text-xl my-10">
                Elige y personaliza tu pedido
            </p>
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                    {productos.map( producto => (
                        <Producto
                            key={producto.imagen}
                            producto={producto}
                        />
                    ))}
            </div>
        </>
    )
}
