import React, { useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// Custom component to wrap the PayPalButtons and handle currency changes
const PaypalCheckoutButton = ({ course }) => {

    const price = course?.price || '';

    const [paidFor, setPaidFor] = useState(false)
    const [error, setError] = useState(null)

    if (paidFor) {
        toast.success("Thank you for purchasing the course", {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 2000
        })
    }
    if (error) {
        toast.error("Oops, something get wrong!", {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 2000
        })
    }

    return (
        <>
            <PayPalButtons
                onClick={async (_data, actions) => {
                    const hasAlreadyBought = false
                    if (hasAlreadyBought) {
                        setError("You already bought this course")
                        return await actions.reject()
                    } else {
                        return await actions.resolve()
                    }
                }}
                createOrder={async (_data, actions) => {
                    return await actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: price,
                                },
                            },
                        ],
                    }).then((orderId) => {
                        // Your code here after create the order
                        return orderId;
                    });

                }}
                onApprove={async (_data, actions) => {
                    return await actions.order.capture().then(function () {
                        setPaidFor(true)
                    })
                }}

                onCancel={() => {
                    console.log('Canceled');
                }}
                onError={(err) => {
                    setError(err)
                    console.error('Error', err);
                }}
            />
            <div>
                <ToastContainer />
            </div>
        </>
    );
};

export default PaypalCheckoutButton