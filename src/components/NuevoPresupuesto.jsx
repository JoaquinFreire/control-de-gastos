import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

    const [mensaje, setMensaje] = useState('')

    const handLePresupuesto = (e) => {
        e.preventDefault();

        if (!presupuesto || presupuesto < 1) {
            setMensaje('No es un presupuesto válido');
            return
        }
        setMensaje('');
        setIsValidPresupuesto(true);

    }

    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form action="" className="formulario" onSubmit={handLePresupuesto}>
                <div className="campo">
                    <label htmlFor="">Definir Presupuesto</label>
                    <input className="nuevo-presupuesto" type="number" placeholder="Añade tu presupuesto" value={presupuesto} onChange={(e) => setPresupuesto(e.target.value)} />
                </div>
                <input type="submit" value="Añadir" />
                {mensaje && <Mensaje tipo="error"> {mensaje}</Mensaje>}
            </form>
        </div>
    )
}

export default NuevoPresupuesto