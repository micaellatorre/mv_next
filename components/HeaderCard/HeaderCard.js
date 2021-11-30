import React from 'react'
import Items from '../Items/Items'
import styles from './HeaderCard.module.css'

let montoDisponible = (content) => {
    let toting = 0;
    let totgf = 0;
    let disponible = 0;
    content.ingresos.map((item) => { toting = toting + item.monto; })
    content.gastosFijos.map((item) => { totgf = totgf + item.monto; })
    disponible = toting - totgf
    return (disponible)
}

let ahorro = (disponible, p) => {
    let ahorro = 0
    ahorro = disponible * p
    return (ahorro)
}

const HeaderCard = React.forwardRef(({ title, content }, ref) => (
    <div className={styles.card_background} ref={ref}>
        <div className={styles.card_header}>
            <h1>{title}</h1>
            <h2>AR$ {montoDisponible(content)-ahorro(montoDisponible(content), 0.25)}</h2>
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h3>Disponible Bruto: AR$ {montoDisponible(content)}</h3>
            <h3>Ahorro (25%): AR$ {ahorro(montoDisponible(content), 0.25)}</h3>
        </div>
    </div>
))

export default HeaderCard