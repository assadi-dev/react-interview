export const getLikesPourcent = (likes, dislikes) => {
    const total = parseInt(likes) + parseInt(dislikes);
    const pourcent = (100 * parseInt(likes)) / total;
    return Math.ceil(pourcent);
};

export const get_dataMovieContent = (data, title) => {
    return data.filter((d) => d.title === title)[0];
};

export const random_arrayIndex = (array) => {
    const number = Math.floor(Math.random() * array.length);
    return array[number];
};

export const sortData = (mode, data, key) => {
    const sortedData = [...data];
    if (mode === "*" || mode === undefined) {
        return sortedData;
    }
    if (mode === "asc") {
        return sortedData.sort((a, b) => (a[key] > b[key] ? 1 : -1));
    }
    return sortedData.sort((a, b) => (a[key] > b[key] ? -1 : 1));
};