import {Alert, Button, ButtonGroup, Input} from "reactstrap";
import React, {useEffect, useState} from "react";

function ItemCount({initial, stock, onAdd}) {
    const [quantity, setQuantity] = useState(initial)
    const [hidden, setHidden] = useState(true)
    const [buyDisabled, setBuyDisabled] = useState(false)

    useEffect(() => {
        handlerBuyDisabled()
    })

    const handlerAddItem = () => {
        onAdd(quantity)
    }

    const handlerIncrementQuantity = () => {
        if (quantity <= stock) {
            setQuantity(quantity + 1)
        } else {
            setQuantity(quantity)
            handlerHidden(false)
        }
    }

    const handlerBuyDisabled = () => {
        if (stock === 0){
            setBuyDisabled(true)
        }
    }

    const handlerDecrementQuantity = () => {
        if (quantity >= initial) {
            handlerHidden(true)
            setQuantity(quantity - 1)
        } else {
            setQuantity(initial)
        }
    }

    const handlerHidden = (val) => {
        setHidden(val)
    }

    return (
        <div className=''>
            <ButtonGroup>
                <Button onClick={handlerDecrementQuantity}>
                    -
                </Button>
                <Input className='text-center'
                       id="quantity"
                       name="quantity"
                       placeholder="Quantity"
                       value={quantity}
                />
                <Button onClick={handlerIncrementQuantity}>
                    +
                </Button>
            </ButtonGroup>
            <Button className={buyDisabled ? 'disabled my-2 mx-2' : 'my-2 mx-2'}   //'my-1 px-5 '
                color="primary"
                outline
                    onClick={handlerAddItem}
            >
                Add to cart
            </Button>
            <Alert color="danger" className={hidden ? 'invisible' : ''}>
                Sorry ! No more stock
            </Alert>
        </div>
    )
}

export default ItemCount;