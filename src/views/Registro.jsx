import { Link } from 'react-router-dom';

export default function Registro() {
    return (
        <>
            <h1 className="text-4xl font-black">Crea tu cuenta</h1>
            <p>Crea tu cuenta rellenando el formulario</p>

            <div className="px-5 py-10 mt-10 shadow-md bg-amber-100 rounded-xl">
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="font-bold text-slate-800">
                            Nombre:
                        </label>
                        <input type="text" id="name" name="name" className="w-full p-3 mt-2 shadow-sm bg-gray-50 rounded-xl" placeholder="Tu nombre" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="font-bold text-slate-800">
                            Correo electrónico:
                        </label>
                        <input type="email" id="email" name="email" className="w-full p-3 mt-2 shadow-sm bg-gray-50 rounded-xl" placeholder="Tu correo electrónico" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="font-bold text-slate-800">
                            Contraseña:
                        </label>
                        <input type="password" id="password" name="password" className="w-full p-3 mt-2 shadow-sm bg-gray-50 rounded-xl" placeholder="Tu contraseña" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password_confirmation" className="font-bold text-slate-800">
                            Repetir contraseña:
                        </label>
                        <input type="password" id="password_confirmation" name="password_confirmation" className="w-full p-3 mt-2 shadow-sm bg-gray-50 rounded-xl" placeholder="Repite tu contraseña" />
                    </div>
                    <input type="submit" value="Crear cuenta" className="w-full p-3 mt-5 font-bold text-white uppercase shadow-sm cursor-pointer bg-sky-600 hover:bg-sky-800 rounded-xl" />
                </form>
            </div>

            <nav className="mt-5">
                <Link to="/auth/login">
                    ¿Ya tienes cuenta? Inicia sesión pulsando aquí
                </Link>
            </nav>
        </>
    )
}
