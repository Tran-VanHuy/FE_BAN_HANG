const URL_API = "http://localhost:8081/api";

export const PAGING = (pageNo: number, pageSize: number) => `pageNo=${pageNo}&pageSize=${pageSize}`;

export const DOMAIN_API = {
    BANNER: `${URL_API}/banner`,
    INFORMAITON: `${URL_API}/information`,
    CATEGORY_PRODUCTS: `${URL_API}/category-products`,
    PRODUCTS: `${URL_API}/products`,
    LIKE_PRODUCTS: `${URL_API}/products/like`,
    CREATE_ORDER: `${URL_API}/order`,
    ADVER: `${URL_API}/advertisement`,
    BLOG: `${URL_API}/blog`,
    BRANDS: `${URL_API}/brands`
}