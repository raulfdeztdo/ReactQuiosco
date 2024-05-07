import { Outlet } from "react-router-dom";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import Sidebar from "../components/Sidebar";
import Resumen from "../components/Resumen";
import ModalProducto from "../components/ModalProducto";
import useQuiosco from "../hooks/useQuiosco";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "rgb(255 251 235)",
        border: "1px solid #ccc",
        borderRadius: "20px",
        boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.5)",
    },
};

Modal.setAppElement("#root");

export default function Layout() {

    const { modal } = useQuiosco();

    return (
        <>
            <div className="flex flex-col md:flex-row px-5 py-10 justify-center mb-5">
                <Sidebar />

                <main className="flex-1 px-5 md:px-10 h-screen overflow-y-scroll">
                    <Outlet />
                </main>

                <Resumen />
            </div>

            <Modal isOpen={modal} style={customStyles}>
                <ModalProducto />
            </Modal>

            <ToastContainer
                autoClose={5000}
                closeOnClick
                draggable
                theme="dark"
            />
        </>
    )
}
