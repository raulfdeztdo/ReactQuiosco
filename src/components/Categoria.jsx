import useQuiosco from "../hooks/useQuiosco";

export default function Categoria({categoria}) {

    const {icono, id, nombre} = categoria
    const {handleClickCategoria, categoriaActual} = useQuiosco();

    return (
        <div className={`${categoriaActual.id === id ? "bg-amber-300" : "bg-amber-100"} flex rounded-xl bg-amber-100 items-center gap-4 border w-full p-3 hover:bg-amber-300 cursor-pointer `} onClick={() => handleClickCategoria(categoria)}>
            <img src={`/img/icono_${icono}.svg`} alt={`Imagen categoría ${nombre}`} className="w-12" />
            <span className="font-bold cursor-pointer truncate text-2xl md:text-base">{nombre}</span>
        </div>
    )
}
