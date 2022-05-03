import React, { createContext, useState, useContext } from 'react'

const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  const [itemNumber1, setItemNumber1] = useState(0)
  const [itemNumber2, setItemNumber2] = useState(0)

  const addItemNumber = itemNumber1 + itemNumber2

  const data = {
    itemNumber1,
    setItemNumber1,
    itemNumber2,
    setItemNumber2,
    addItemNumber,
  }

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}

export { CartContext, CartContextProvider, useContext }
