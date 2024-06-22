import React from 'react'
// this is deafult export Method
function Greet(props){
    console.log(props)
    return (
        <div>
        <h1>Hello {props.name} aka {props.heroName}!!</h1>
        {props.children}
    </div>
    )
}
export default Greet
// Named Export
// export const Greet = () => <h1>HI Shashank I love U Cutie!!</h1>