import { describe, it, expect, afterAll, beforeEach } from "vitest";
import { render, cleanup, RenderResult } from '@testing-library/react';
import React from "react";
import { MemoryRouter } from "react-router-dom"

import Navbar from "../Navbar.jsx";

describe('Navbar component', () => {
    let component: RenderResult;
    let navbar: HTMLElement;
   
    beforeEach(()=> {
        const mockContextValue = {
            future: 'Mocked Future Value',
        };
        component = render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
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