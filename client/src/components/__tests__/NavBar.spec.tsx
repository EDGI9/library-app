import { describe, it, expect, afterAll, beforeEach } from 'vitest';
import { render, cleanup, RenderResult } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../../store/index.js';
import Navbar from '../Navbar.jsx';

describe('Navbar component', () => {
    let component: RenderResult;
    let navbar: HTMLElement;

    beforeEach(() => {
        component = render(
            <Provider store={store}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </Provider>,
        );
    });

    afterAll(() => {
        cleanup();
    });

    it('Renders Component', () => {
        navbar = component.getByTestId('qa-navbar');
        expect(navbar).toBeTruthy();
    });
});
