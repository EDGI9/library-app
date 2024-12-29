import { describe, it, expect, afterAll, beforeEach } from 'vitest';
import { render, cleanup, RenderResult } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import React from 'react';

import Counter from '../Counter.jsx';

describe('Counter component', () => {
    let component: RenderResult;
    let counter: HTMLElement;
    const props = {
        icon: faker.word.words(1),
        number: faker.number.int(100),
        text: faker.word.words(1),
    };

    beforeEach(() => {
        component = render(<Counter {...props} />);
    });

    afterAll(() => {
        cleanup();
    });

    it('Renders Component', () => {
        counter = component.getByTestId('qa-counter');
        expect(counter).toBeTruthy();
    });

    it('Counter renders elements', () => {
        const image = component.getByTestId('qa-counter_image');
        const number = component.getByTestId('qa-counter_number');
        const text = component.getByTestId('qa-counter_text');

        expect(image).toBeTruthy();
        expect(number).toBeTruthy();
        expect(text).toBeTruthy();

        expect(image.getAttribute('src')).toEqual(props.icon);
        expect(number.textContent).toEqual(props.number.toString());
        expect(text.textContent).toEqual(props.text.toString());
    });
});
