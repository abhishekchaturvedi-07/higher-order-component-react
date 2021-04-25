import React from 'react'

const HOC = (Comp1) => {
    const Comp2 = (props) => {
        return (
            <Comp1 propsFromHOC="propsFromHOC" {...props}/>
        )
    }
    return Comp2
}

export default HOC
