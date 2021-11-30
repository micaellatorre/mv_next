import React from 'react'
import {
    item_bacckground,
} from './Items.styles'


const Items = React.forwardRef(({ content }, ref) => (
    <>
        {content.map(item => {
            return (
                <div class="item" style={item_bacckground}>
                    <p>{item.nombre}</p>
                    <p>$ {item.monto}</p>
                </div>
            )
        })
        }
    </>

))

export default Items