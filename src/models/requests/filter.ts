export interface Filter {
    Name?: string,
    "OrderBy.Ascendent": boolean,
    "OrderBy.Column": string,
    CurrentPage: number,
    PageSize: number
}