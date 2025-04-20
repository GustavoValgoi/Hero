export interface IPagination<T> {
  count: number;
  page: number;
  limit: number;
  total_pages: number;
  data: T[];
}
