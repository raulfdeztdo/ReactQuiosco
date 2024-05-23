import useSWR from "swr"
import Producto from "../components/Producto"
import useQuiosco from "../hooks/useQuiosco"
import clienteAxios from "../config/axios"


export default function Inicio() {

    const { categoriaActual } = useQuiosco();

    // Consulta a la API por medio de SWR
    const fetcher = () => clienteAxios('/api/productos').then( data => data.data)
    const { data, error, isLoading } = useSWR("/api/productos", fetcher, {
        refreshInterval: 1000
    })

    if (isLoading) return "Cargando productos..."

    // Asegurarse de que 'data' existe antes de intentar acceder a 'data.data'
    const productos = data.data.filter( producto => producto.categoria_id === categoriaActual.id)

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
