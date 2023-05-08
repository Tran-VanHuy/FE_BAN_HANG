export interface BaseInfo {

    createdAt?: string,
    updatedAt?: string,
}

export interface PageData<T> {
    message?: string;
    pageNo: number;
    pageSize: number;
    total: number;
    data: T[];
    status?: boolean;
  }