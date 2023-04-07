import { createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react'

interface CartProviderProps {
    children: ReactNode
}

interface IProductInCart {
    id: string
    name: string
    imageUrl: string
    price: number
    formattedPrice: string
    description: string
    amount: number
    defaultPriceId: string
    // oldPrice?: string
    total: number
}

type IProduct = Omit<IProductInCart, 'total'>

interface UpdateProductAmount {
    productId: string
    amount: number
}

interface CartContextData {
    cart: IProductInCart[]
    addProduct: (product: IProduct) => Promise<void>
    removeProduct: (productId: string) => void
    updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void
    clearCart: () => void
}

const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<IProductInCart[]>([])

    const getStorage = () => {
        const storagedCart = localStorage.getItem('@PHShop:cart')

        if (storagedCart) {
            // console.log(storagedCart)
            return JSON.parse(storagedCart)
        }
        return []
    }

    useEffect(() => {
        setCart(getStorage)
    }, [])

    const prevCartRef = useRef<IProductInCart[]>()

    useEffect(() => {
        prevCartRef.current = cart
    })

    const cartPreviousValue = prevCartRef.current ?? cart

    // bellow to set in localstore whenever it changes
    useEffect(() => {
        if (cartPreviousValue !== cart) {
            localStorage.setItem('@PHShop:cart', JSON.stringify(cart))
        }
    }, [cart, cartPreviousValue])

    const addProduct = async (product: IProduct) => {
        const updatedCart = [...cart]
        const productExists = updatedCart.find((productInCart) => productInCart.id === product.id)

        const currentAmount = productExists ? productExists.amount : 0
        const productAmountRequested = currentAmount + 1

        if (productExists) {
            productExists.amount = productAmountRequested
            productExists.total = productExists.amount * product.price
            setCart(updatedCart)
            // localStorage.setItem('@PHShop:cart', JSON.stringify(updatedCart))
        } else {
            // const product = await api.get(`products/${productId}`)
            const newProduct = {
                // ...product.data,
                ...product,
                amount: 1,
                total: product.price,
            }

            updatedCart.push(newProduct)
        }
        setCart(updatedCart)
    }

    const removeProduct = (productId: string) => {
        try {
            const updatedCart = [...cart]
            // const newUpdatedCart = updatedCart.filter((product) => (product.id !== productId))

            const productToBeRemovedIndex = updatedCart.findIndex(
                (product) => product.id === productId
            )

            if (productToBeRemovedIndex >= 0) {
                updatedCart.splice(productToBeRemovedIndex, 1)
                setCart(updatedCart)
                // localStorage.setItem('@PHShop:cart', JSON.stringify(updatedCart))
            } else {
                throw Error()
            }

            // if(newUpdatedCart === null || undefined){
            //   throw Error();
            //   return;
            // }
        } catch {
            alert('Erro na remoção do produto')
        }
    }

    const updateProductAmount = async ({ productId, amount }: UpdateProductAmount) => {
        try {
            const amountRequested = amount
            if (amountRequested <= 0) {
                return
            }

            const updatedCart = [...cart]
            const productExists = updatedCart.find((product) => product.id === productId)
            if (productExists) {
                productExists.amount = amountRequested
                productExists.total = amountRequested * productExists.price

                setCart(updatedCart)
                // localStorage.setItem('@PHShop:cart', JSON.stringify(updatedCart))
            } else {
                throw Error()
            }
            // bellow i do this check, because if the user clicks on the (button -minus) it's unnecessary to make the api call

            // const currentAmountProductStock = stock.data.amount

            // bellow i am acessing the position 0, because the productExists is an array with only one position always
        } catch {
            alert('Erro na alteração de quantidade do produto')
        }
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addProduct,
                removeProduct,
                updateProductAmount,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export function useCart(): CartContextData {
    const context = useContext(CartContext)

    return context
}
