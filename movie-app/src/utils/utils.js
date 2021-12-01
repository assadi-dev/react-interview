export const pagination = (totalItems, currentPage, pageSize, maxPage) => {
    let totalPages = Math.ceil(totalItems / pageSize);
    if (currentPage < 1) {
        currentPage = 1;
    } else if (currentPage > totalPages) {
        currentPage = totalPages;
    }
};

export const getLikesPourcent = (likes, dislikes) => {
    const total = parseInt(likes) + parseInt(dislikes);
    const pourcent = (100 * parseInt(likes)) / total;
    return Math.ceil(pourcent);
};