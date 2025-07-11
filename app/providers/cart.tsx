"use client"

import { createContext, ReactNode, useMemo, useState } from "react";
import { ProductWithTotalPrice } from "../helpers/product";

export interface CartProduct extends ProductWithTotalPrice{
    quantity: number
}

export interface ICartContext {
    products: CartProduct[]
    totalBasePrice: number
    totalPrice: number
    totalDiscount: number
    subTotal: number,
    total: number,
    addToCart: (product: CartProduct) => void
    addQuantity: (product: CartProduct) => void
    removeQuantity: (product: CartProduct) => void
    removeFromCart: (product: CartProduct) => void
}

export const CartContext = createContext<ICartContext>({
    products: [],
    totalBasePrice: 0,
    totalPrice: 0,
    totalDiscount: 0,
    subTotal: 0,
    total: 0,
    addToCart: () => {},
    addQuantity: () => {},
    removeQuantity: () => {},
    removeFromCart: () => {}
}) 

const CartProvider = ({children}: {children : ReactNode}) => {
    //estado para o carrinho armazenar os produtos
    const [products, setProducts] = useState<CartProduct[]>([])

    //função que adiciona produtos ao carrinhos
    const addToCart = (product: CartProduct) => {
        //verificar se o produto já existe
        const productExists = products.find(prevProduct => prevProduct.id === product.id )
        if(productExists){
            const newProduct = products.map(p => {
                if(p.id === product.id){
                    const newQuantity = p.quantity + product.quantity
                    return {
                        ...p,
                        quantity: newQuantity,
                        totalPrice: newQuantity * product.totalPrice
                    }
                    
                }
                return p
            })
            setProducts(newProduct)
            return
        }
 

        setProducts(prev => [...prev, {
            ...product,
            totalPrice: product.quantity * product.totalPrice
        }])
    }

    //função que adicona quantidade através do sheet do carrinho
    const addQuantity = (product: CartProduct) => {
        const newProduct = products.map(p => {
            if(p.id === product.id){
                return {
                    ...p,
                    quantity: p.quantity + 1,
                    totalPrice: p.totalPrice + product.totalPrice
                }
            } return p

        })
        setProducts(newProduct)
    }

    //remover um produto do carrinho
    const removeQuantity = (product: CartProduct) => {
        const currencyQuantity = products.map(p => {
            //identifica que estou no produto atuyal que quero alterar
            if(p.id === product.id && p.quantity > 1){
                return {
                    ...p,
                    quantity: p.quantity -1,
                    totalPrice: p.totalPrice - product.totalPrice

                }
            } return p
        })
        
        setProducts(currencyQuantity)
    }
    
    const removeFromCart = (product: CartProduct) => {
        const currrencyCart = products.filter( i => i.id != product.id)
        setProducts(currrencyCart)
    }

    const subTotal = useMemo(() => {
        return products.reduce((total, product) => {
            const baseTotal = product.quantity * Number(product.basePrice)
            return total + baseTotal
        }, 0)
    }, [products]) 

    const total = useMemo(() => {
        return products.reduce((total, product) => {
            return total + product.totalPrice
        }, 0)
    }, [products])

    const totalDiscount = useMemo(() => {
        return products.reduce((total, product) => {
            const totalBase = Number(product.basePrice) * product.quantity
            return total + (totalBase - product.totalPrice) 
        }, 0)
    }, [products])



    return ( 
        <CartContext.Provider value={{
            products,
            totalBasePrice: Number(0),
            totalPrice:  Number(0),
            totalDiscount,
            subTotal,
            total,
            addToCart,
            addQuantity,
            removeQuantity,
            removeFromCart
        }} >{children}</CartContext.Provider>
     );
}
 
export default CartProvider;