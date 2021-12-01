export const totalPage = (totalItems, elements, array) => {
    const total = parseInt(totalItems);
    const nb_elements = parseInt(elements);
    return Math.ceil(total / nb_elements);
};

export const getLikesPourcent = (likes, dislikes) => {
    const total = parseInt(likes) + parseInt(dislikes);
    const pourcent = (100 * parseInt(likes)) / total;
    return Math.ceil(pourcent);
};