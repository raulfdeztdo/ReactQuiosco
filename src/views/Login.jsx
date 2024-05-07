import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <>
            <h1 className="text-4xl font-black">Iniciar sesión</h1>
            <p>Para crear un pedido inicia sesión con tu cuenta</p>

            <div className="px-5 py-10 mt-10 shadow-md bg-amber-100 rounded-xl">
                <form>
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
                    <input type="submit" value="Iniciar sesión" className="w-full p-3 mt-5 font-bold text-white uppercase shadow-sm cursor-pointer bg-sky-600 hover:bg-sky-800 rounded-xl" />
                </form>
            </div>

            <nav className="mt-5">
                <Link to="/auth/registro">
                    ¿No tienes cuenta? Regístrate pulsando aquí
                </Link>
            </nav>
        </>
    )
}
