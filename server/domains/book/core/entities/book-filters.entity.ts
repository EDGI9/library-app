export interface BookFiltersEntity{
    name: string;
    genre: string;
}

export interface BookProcessedFiltersEntity{
    name: { $regex: RegExp };
    genre: { $in: string[] };
}