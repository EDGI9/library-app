import { describe, it, expect, afterAll, beforeEach, vi } from 'vitest';
import {
    render,
    cleanup,
    RenderResult,
    fireEvent,
    screen,
} from '@testing-library/react';
import { faker } from '@faker-js/faker';
import React from 'react';
import DOMPurify from 'dompurify';

import TextInput from '../TextInput.jsx';

describe('TextInput component', () => {
    let component: RenderResult;
    let textInput: HTMLElement;
    const props = {
        name: faker.word.words(1),
        placeholder: faker.word.words(2),
        value: faker.word.words(2),
        onChange: vi.fn(),
    };

    beforeEach(() => {
        component = render(<TextInput {...props} />);
        textInput = component.getByTestId('qa-text-input');
    });

    afterAll(() => {
        cleanup();
    });

    it('Renders Component', () => {
        expect(textInput).toBeTruthy();
    });

    it('Component has correct property values', () => {
        const name = textInput.getAttribute('name');
        const placeholder = textInput.getAttribute('placeholder');
        const value = textInput.value;

        expect(name).toEqual(props.name);
        expect(placeholder).toEqual(props.placeholder);
        expect(value).toEqual(props.value);
    });

    it('Component emits change', async () => {
        const newValue = faker.word.words(1);
        const value = textInput.value;

        expect(value).toEqual(props.value);

        await fireEvent.change(textInput, { target: { value: newValue } });

        expect(props.onChange).toHaveBeenCalledOnce();
        expect(props.onChange).toHaveBeenCalledWith(newValue);
    });

    it('Input content is sanitized', async () => {
        const dirtyText = '<script>test</script>';
        const cleanComparisonText = DOMPurify.sanitize(dirtyText);

        const value = textInput.value;

        await fireEvent.change(textInput, { target: { value: dirtyText } });

        expect(props.onChange).toHaveBeenCalled();
        expect(props.onChange).toHaveBeenCalledWith(cleanComparisonText);
        expect(value).not.toEqual(cleanComparisonText);
    });
});
