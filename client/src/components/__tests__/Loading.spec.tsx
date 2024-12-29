import { describe, it, expect, afterAll, beforeEach } from 'vitest';
import { render, cleanup, RenderResult } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import React from 'react';

import Loading from '../Loading.jsx';

describe('Loading component', () => {
    let component: RenderResult;
    let loading: HTMLElement;

    beforeEach(() => {
        component = render(<Loading  />);
    });

    afterAll(() => {
        cleanup();
    });

    it('Renders Component', () => {
        loading = component.getByTestId('qa-loading');
        expect(loading).toBeTruthy();
    });
});
