export interface IPagination<T> {
  page: number;
  limit: number;
  count: number;
  total_pages: number;
  data: T[];
}
