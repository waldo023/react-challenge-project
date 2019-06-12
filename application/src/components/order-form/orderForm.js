import React, { Component } from 'react';
import { Template } from '../../components';
import './orderForm.css';

class OrderForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: "",
            quantity: 0
        }
    }

    render() {
        return (
            <Template>
                <form>

                </form>
            </Template>
        );
    }
}

export default OrderForm;