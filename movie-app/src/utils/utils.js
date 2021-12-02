export const getLikesPourcent = (likes, dislikes) => {
    const total = parseInt(likes) + parseInt(dislikes);
    const pourcent = (100 * parseInt(likes)) / total;
    return Math.ceil(pourcent);
};

export const get_dataMovieContent = (data, title) => {
    return data.filter((d) => d.title === title)[0];
};