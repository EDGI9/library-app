import { describe, it, expect, afterAll, beforeEach, vi } from "vitest";
import { render, cleanup, RenderResult, fireEvent } from '@testing-library/react';
import { faker } from "@faker-js/faker";
import '@testing-library/jest-dom';
import React from "react";

import Pill from "../Pill.jsx";

describe('Pill component', () => {
    let component: RenderResult;
    let pill: HTMLElement;
    const props ={
        isEditable: false,
        text: faker.word.words(1),
        actionText: "close",
        onClick: vi.fn(),
    }
   
    beforeEach(()=> {
        component = render(
            <Pill {...props} />
        );
    });

    afterAll(() => {
        cleanup();
    });

    it('Renders Component', () => {
        pill = component.getByTestId('qa-pill');
        expect(pill).toBeTruthy();
    });

    it('Can toggle edit mode', () => {
        let pillButton = component.queryByTestId('qa-pill_button');
        expect(pillButton).not.toBeInTheDocument();
        
        
        props.isEditable = true;
        component.rerender(<Pill {...props} />);
        
        pillButton = component.queryByTestId('qa-pill_button');
        expect(pillButton).toBeInTheDocument();
    });

    it('Component is clickable', async () => {
        props.isEditable = true;
        component.rerender(<Pill {...props} />);
        const pillButton = component.getByTestId('qa-pill_button');
        fireEvent.click(pillButton as HTMLElement);

        expect(props.onClick).toHaveBeenCalledOnce();
        //TODO: Fix clieck event
        //expect(props.onClick).toStrictEqual(expect.any(Number))
    });
});