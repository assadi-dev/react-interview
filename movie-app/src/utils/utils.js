export const pagination = (totalItems, currentPage, pageSize, maxPage) => {
    let totalPages = Math.ceil(totalItems / pageSize);
    if (currentPage < 1) {
        currentPage = 1;
    } else if (currentPage > totalPages) {
        currentPage = totalPages;
    }
};