import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';

import OrderForm from './order-form';

describe('Order Form', () => {
    test('renders order form', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <OrderForm />
                </MemoryRouter>
            </Provider>
        );

    })
});