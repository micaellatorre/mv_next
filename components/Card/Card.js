import React from 'react'
import Link from 'next/link'
import Items from '../Items/Items'
import {
    card_background,
    card_header,
} from './Card.styles'

let sumtotal = (content) => {
    let toting = 0;
    content.map((item) => { toting = toting + item.monto; })
    return (toting);
}

const Card = React.forwardRef(({ title, href, content }, ref) => (
    <div style={card_background} ref={ref}>
        <div class="card-header" style={card_header}>
            <Link href={href}>
                <h2>{title}</h2>
            </Link>
            <h2>AR$ {sumtotal(content)}</h2>
        </div>
        <Items content={content} />
    </div>
))

export default Card