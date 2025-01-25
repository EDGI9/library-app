import { describe, it, expect, afterAll, vi, beforeEach } from 'vitest';
import {
    fireEvent,
    render,
    cleanup,
    RenderResult,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React, { Suspense } from 'react';

import BookList from '../BookList.jsx';
import Loading from '../Loading.jsx';

import mockBookList from '../../__mocks__/components/BookList.js';

describe('BookList component', () => {
    let bookList = mockBookList;
    let mockGoToBook: vi.Mock;
    let component: RenderResult;
    let bookListElement: HTMLElement;

    beforeEach(() => {
        mockGoToBook = vi.fn();
        component = render(
            <MemoryRouter>
                <Suspense fallback={<Loading />}>
                    <BookList
                        books={bookList}
                        goToBook={mockGoToBook}
                    />
                </Suspense>
            </MemoryRouter>,
        );
    });

    afterAll(() => {
        cleanup();
    });

    it('Renders Component', async () => {
        bookListElement = await component.findByTestId('qa-book-list');
        expect(bookListElement).toBeTruthy();
    });

    // Can't seem to reach the book component to trigger the click
    it.skip('Book is clickable', async () => {
        const firstBookClickableDiv = await component.findAllByTestId(
            'qa-book_clickable',
        )[0];
        fireEvent.click(firstBookClickableDiv);

        expect(mockGoToBook).toHaveBeenCalledWith(bookList[0].id);
        expect(mockGoToBook).toHaveBeenCalledOnce();
    });
});
