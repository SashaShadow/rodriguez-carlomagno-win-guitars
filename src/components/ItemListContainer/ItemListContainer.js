import React from "react";


const ItemListContainer = ({greeting}) => {
    return (
        <h1>{greeting}</h1>
    )
        {/*notas para mi: sin destructurar quedaría {props} en parentesis y habria que poner props.greeting */}
}

export default ItemListContainer;