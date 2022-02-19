import React, {useContext, useEffect, useState} from 'react';
import {Button, Form, FormGroup} from "react-bootstrap";
import {
    Alert,
    Input,
    Label,
} from "reactstrap";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import {ContextApp} from "../../App";
import {
    calculatePrice,
    createBuyer,
    createOrder,
    validateData
} from "../../functions/funcions";

const PurchaseForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [id, setId] = useState('')
    const [total, setTotal] = useState(0)
    const [cleanCart, setCleanCart] = useState(false)
    const {productsInCart, clear} = useContext(ContextApp)

    const definePrice = async (e) => {
        calculatePrice(productsInCart).then(amount => {
            saveOrder(e, amount)
        })
    }

    const saveOrder = async (e, amount) => {
        e.preventDefault()
        if (await validateData(firstName, lastName, phone, email, productsInCart)){
            const buyer = createBuyer(firstName, lastName, phone, email)
            const order = createOrder(buyer, amount, productsInCart);
            const db = getFirestore()
            const orderCollection = collection(db, "orders")
            await addDoc(orderCollection, order).then(({id}) => setId(id))
            setCleanCart(true)
        }
    }

    useEffect(() => {
        if (cleanCart) {
            clear()
        }
    }, [cleanCart]);

    function handleFirstName(event) {
        setFirstName(event.target.value);
    }

    function handleLastName(event) {
        setLastName(event.target.value);
    }

    function handlePhone(event) {
        setPhone(event.target.value);
    }

    function handleEmail(event) {
        setEmail(event.target.value);
    }

    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-10 offset-1'>
                    <span className='h3'>Complete your personal data</span>
                    <Form className='col-8 offset-2 mt-3'>
                        <FormGroup>
                            <Label for="firstName">
                                First Name
                            </Label>
                            <Input onChange={handleFirstName}
                                   className='text-center'
                                   id="firstName"
                                   name="firstName"
                                   placeholder="Write here your first name"
                                   type="text"
                            />
                        </FormGroup>
                        <FormGroup className='mt-3'>
                            <Label for="lastName">
                                Last Name
                            </Label>
                            <Input onChange={handleLastName}
                                   className='text-center'
                                   id="lastName"
                                   name="lastName"
                                   placeholder="Write here your last name"
                                   type="text"
                            />
                        </FormGroup>
                        <FormGroup className='mt-3'>
                            <Label for="Phone">
                                Phone
                            </Label>
                            <Input onChange={handlePhone}
                                   className='text-center'
                                   id="phone"
                                   name="phone"
                                   placeholder="Write here your phone"
                                   type="text"
                            />
                        </FormGroup>
                        <FormGroup className='mt-3'>
                            <Label for="email">
                                Email
                            </Label>
                            <Input onChange={handleEmail}
                                   className='text-center'
                                   id="email"
                                   name="email"
                                   placeholder="Write here your email"
                                   type="email"
                            />
                        </FormGroup>
                        <div className='mt-3'>
                            <Button onClick={definePrice} color="success">Complete purchase</Button>
                        </div>
                    </Form>
                    {
                        id === '' ? <></> : <Alert
                        className='mt-4'
                        color="danger"
                    >
                        Thank you for your purchase, your order number is: {id}
                    </Alert>
                    }
                </div>
            </div>
        </div>
    );
};

export default PurchaseForm;