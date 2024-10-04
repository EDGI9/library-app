import { describe, it, expect, afterAll,beforeEach } from "vitest";
import { render, cleanup, RenderResult } from '@testing-library/react';
import React from "react";

import Footer from "../Footer.jsx";

describe('Footer component', () => {
    let component: RenderResult;
    let footerElement: HTMLElement;

    beforeEach(()=> {
        component = render(<Footer/>);
    });

    afterAll(() => {
        cleanup();
    });

    it('Renders Component', () => {
        footerElement = component.getByTestId('qa-footer');
        expect(footerElement).toBeTruthy();
    });
});