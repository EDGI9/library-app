import { describe, it, expect, afterAll, beforeEach, vi } from 'vitest';
import {
    fireEvent,
    render,
    screen,
    cleanup,
    RenderResult,
} from '@testing-library/react';
import { faker } from '@faker-js/faker';

import React from 'react';

import Filters from '../Filters.jsx';

describe('Filters component', () => {
    let component: RenderResult;
    let filterElement: HTMLElement;
    const props = {
        fields: {
            [faker.word.words(1)]: faker.word.words(1),
            [faker.word.words(1)]: faker.word.words(1),
            [faker.word.words(1)]: faker.word.words(1),
        },
        onChange: vi.fn(),
    };

    beforeEach(() => {
        component = render(
            <Filters
                fields={props.fields}
                onChange={props.onChange}
            />,
        );
    });

    afterAll(() => {
        cleanup();
    });

    it('Renders Component', () => {
        filterElement = component.getByTestId('qa-filters');
        expect(filterElement).toBeTruthy();
    });

    it('Renders all dynamically created inputs', () => {
        const propValues = Object.entries(props.fields);
        propValues.forEach((item) => {
            const input: HTMLInputElement = screen.getByLabelText(item[0], {
                selector: 'input',
            });
            expect(input).toBeTruthy();
        });
    });

    it('Props properly update fields', () => {
        const propValues = Object.entries(props.fields)[0];
        let input: HTMLInputElement = screen.getByLabelText(propValues[0], {
            selector: 'input',
        });

        expect(input).toBeTruthy();
        expect(input.value).toEqual(props.fields[propValues[0]]);

        props.fields[propValues[0]] = faker.word.words(2);
        component.rerender(<Filters fields={props.fields} />);
        input = screen.getByLabelText(propValues[0], { selector: 'input' });

        expect(input).toBeTruthy();
        expect(input.value).toEqual(props.fields[propValues[0]]);
    });

    it('Emits update on field change', async () => {
        const nextText: string = faker.word.words(2);
        const propValues = Object.entries(props.fields)[0];
        let input: HTMLInputElement = screen.getByLabelText(propValues[0], {
            selector: 'input',
        });

        await fireEvent.change(input, { target: { value: nextText } });

        expect(props.onChange).toHaveBeenCalledOnce();
        expect(props.onChange).toHaveBeenCalledWith({
            [propValues[0]]: nextText,
        });
    });
});
