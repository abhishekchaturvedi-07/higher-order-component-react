import React from 'react'
import HOC from './HOC'

function Hello(props) {
    console.log(props)
    return (
        <div>
            Hello!
            <p>Props from - {props.propsFromHOC}</p>
            <p>Props from - {props.propsFromAppJs}</p>
        </div>
    )
}

export default HOC(Hello)
