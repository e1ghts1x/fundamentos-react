import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho texto='Cuck' numero={20} nerd={true} />
            <DiretaFilho texto='Net' numero={15} nerd={false} />
        </div>
    )
}