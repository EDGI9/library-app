import { describe, it, expect, afterAll, vi, beforeEach } from "vitest";
import { fireEvent, render, cleanup, RenderResult } from '@testing-library/react';
import React from "react";

import Book from "../Book.jsx";

import mockBook from "../../__mocks__/components/Book.js"

describe('Book component', () => {
    let book = mockBook;
    let mockGoToBook: vi.Mock;
    let component: RenderResult;
    let bookElement: HTMLElement;

    beforeEach(()=> {
        mockGoToBook = vi.fn();
        component = render(<Book book={book} goToBook={mockGoToBook}/>);
    });

    afterAll(() => {
        cleanup();
    });

    it('Renders Component', () => {
        bookElement = component.getByTestId('qa-book');
        expect(bookElement).toBeTruthy();
    });

    it('Book is clickable', () => {
        const clickableDiv = component.getByTestId("qa-book_clickable");
        fireEvent.click(clickableDiv as HTMLElement);

        expect(mockGoToBook).toHaveBeenCalledWith(book.id);
        expect(mockGoToBook).toHaveBeenCalledOnce();
    });
});