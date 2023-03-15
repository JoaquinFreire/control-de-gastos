import { useState, useEffect } from "react"

const Filtros = ({filtro, setFiltro}) => {
    return (
        <div className="filtros sombra contenedor">
            <form action="">
                <div className="campo">
                    <label htmlFor="">Filtrar Gastos</label>
                    <select name="" id="" value={filtro} onChange={e => setFiltro(e.target.value)}>
                        <option value="" selected >-- Todas las categorías --</option>
                        <option value="ahorro" >Ahorro</option>
                        <option value="comida" >Comida</option>
                        <option value="casa" >Casa</option>
                        <option value="gastos" >Gastos Varios</option>
                        <option value="ocio" >Hobbie</option>
                        <option value="salud" >Salud</option>
                        <option value="suscripciones" >Suscripciones</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filtros