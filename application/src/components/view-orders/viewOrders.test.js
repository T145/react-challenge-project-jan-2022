import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ViewOrders from './viewOrders';

describe('View Orders', () => {
    test('view orders renders', () => {
        render(
            <MemoryRouter>
                <ViewOrders />
            </MemoryRouter>
        )
    });
})