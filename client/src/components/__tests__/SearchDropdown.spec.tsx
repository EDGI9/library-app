import { describe, it, expect, afterAll, beforeEach, vi } from "vitest";
import { render, cleanup, RenderResult, fireEvent  } from '@testing-library/react';
import { faker } from "@faker-js/faker";
import { MemoryRouter } from "react-router-dom"

import React from "react";

import SearchDropdown from "../SearchDropdown.jsx";

import mockBookList from "../../__mocks__/components/BookList.js"

describe('SearchDropdown component', () => {
    let component: RenderResult;
    let searchDropdownContainer: HTMLElement;
    let searchDropdownInput: HTMLElement;
    let searchDropdownList: HTMLElement;
    const props ={
        items: mockBookList,
        onInput: vi.fn(),
        onClickOutside: vi.fn(),
    }
   
    beforeEach(()=> {
        component = render(
            <MemoryRouter>
                <SearchDropdown {...props}/>
            </MemoryRouter>
        );
        searchDropdownContainer = component.getByTestId('qa-search-dropdown-container');
        searchDropdownInput = component.getByTestId('qa-search-dropdown-input');
        searchDropdownList = component.getByTestId('qa-search-dropdown-list');
    });

    afterAll(() => {
        cleanup();
    });

    it('Renders Component', () => {
        expect(searchDropdownContainer).toBeTruthy();
        expect(searchDropdownInput).toBeTruthy();
        expect(searchDropdownList).toBeTruthy();
    });

    it('Renders List', () => {
        expect(searchDropdownList.children.length).toBeGreaterThan(0);
    });

    it('Emits onInput Event ', async () => {
        const nextText: string = faker.word.words(2);
        await fireEvent.change(searchDropdownInput, { target: { value: nextText } });

        expect(props.onInput).toHaveBeenCalledWith(nextText);
        expect(props.onInput).toHaveBeenCalledOnce();
    });

    it('Emits onClicoutside Event ', async () => {
        await fireEvent.mouseDown(document.body);
        expect(props.onClickOutside).toHaveBeenCalledOnce();
    });
});