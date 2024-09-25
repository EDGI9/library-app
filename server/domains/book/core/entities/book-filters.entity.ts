export interface BookFiltersEntity{
    name: string;
    genre: string;
    author: string;
}

export interface BookProcessedFiltersEntity{
    name: { $regex: RegExp };
    genre: { $in: string[] };
    author: { $regex: RegExp };
}