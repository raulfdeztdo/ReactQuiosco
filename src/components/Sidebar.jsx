import Categoria from "./Categoria";
import useQuiosco from "../hooks/useQuiosco";

export default function Sidebar() {

    const { categorias } = useQuiosco();

    return (
        <aside className="md:w-72">
            <div className="p-4 flex justify-center items-center">
                <img src="img/logo.svg" alt="Imagen Logo" className="w-40" />
            </div>

            <div className="mt-10 flex gap-2 flex-col">
                {categorias.map( categoria => (
                    <Categoria
                        key={categoria.id}
                        categoria={categoria}
                    />
                ))}
            </div>

            <div className="my-5 px-5">
                <button className="text-center bg-red-400 w-full p-3 font-bold text-white truncate rounded-xl hover:bg-red-600" type="button">Cancelar orden</button>
            </div>
        </aside>
    )
}