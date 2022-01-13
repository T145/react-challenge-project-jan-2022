import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Main from './main';

describe('Main page', () => {
    test('renders front page', () => {
        render(
            <MemoryRouter>
                <Main />
            </MemoryRouter>
        );

        // expect there to be a button for logging in
        expect(screen.getByRole('button')).toBeInTheDocument();
    })
});