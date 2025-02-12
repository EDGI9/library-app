import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BookDTO } from '../../domains/books/core/dtos/book.dto';
import BookService from '../../domains/books/index';
import StorePaths from '../../domains/books/core/constants/book-store-paths.constants';
import { NotificationHandler } from '../../api/notification-handler';
import NotificationHandlerTypes from '../../config/notification-handler-types';
import { isDevMode } from '../../config/enviornment';

const initialState = {
    data: <BookDTO | {}>{},
};

const reducers = {
    SET_BOOK: (state, action) => {
        state.data = action.payload;
    },
};

export const GET_BOOK = createAsyncThunk(
    StorePaths.GET_BOOK,
    async (id: string): Promise<BookDTO | {}> => {
        return await BookService.getById(id);
    },
);

export const CREATE_BOOK = createAsyncThunk(
    StorePaths.CREATE_BOOK,
    async (dto: BookDTO): Promise<void> => {
        if (!isDevMode) {
            return;
        }
        return await BookService.create(dto);
    },
);

//@ts-ignore
export const UPDATE_BOOK = createAsyncThunk(
    StorePaths.UPDATE_BOOK,
    async ({ id: string, dto: BookDTO }): Promise<void> => {
        if (!isDevMode) {
            return;
        }
        await BookService.update(id, dto);
    },
);

export const DELETE_BOOK = createAsyncThunk(
    StorePaths.DELETE_BOOK,
    async (id: string): Promise<void> => {
        if (!isDevMode) {
            return;
        }
        await BookService.remove(id);
    },
);

const book = createSlice({
    name: 'book',
    initialState,
    reducers,
    extraReducers: (builder) => {
        builder
            .addCase(GET_BOOK.pending, () => {
                console.log('calling');
            })
            .addCase(GET_BOOK.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(GET_BOOK.rejected, (state, action) => {
                NotificationHandler(
                    NotificationHandlerTypes.ERROR,
                    'Error getting Book',
                );
            });

        builder
            .addCase(CREATE_BOOK.pending, () => {
                console.log('calling');
            })
            .addCase(CREATE_BOOK.fulfilled, (state, action) => {
                NotificationHandler(
                    NotificationHandlerTypes.SUCSSESS,
                    'Book created',
                );
            })
            .addCase(CREATE_BOOK.rejected, (state, action) => {
                NotificationHandler(
                    NotificationHandlerTypes.ERROR,
                    'Error getting Book',
                );
            });

        builder
            .addCase(UPDATE_BOOK.pending, () => {
                console.log('calling');
            })
            .addCase(UPDATE_BOOK.fulfilled, () => {
                NotificationHandler(
                    NotificationHandlerTypes.SUCSSESS,
                    'Book updated',
                );
            })
            .addCase(UPDATE_BOOK.rejected, (state, action) => {
                NotificationHandler(
                    NotificationHandlerTypes.ERROR,
                    'Error updating Book',
                );
            });

        builder
            .addCase(DELETE_BOOK.pending, () => {
                console.log('calling');
            })
            .addCase(DELETE_BOOK.fulfilled, () => {
                NotificationHandler(
                    NotificationHandlerTypes.SUCSSESS,
                    'Book deleted',
                );
            })
            .addCase(DELETE_BOOK.rejected, (state, action) => {
                NotificationHandler(
                    NotificationHandlerTypes.ERROR,
                    'Error deleting Book',
                );
            });
    },
});

export const { SET_BOOK } = book.actions;

export default book.reducer;
