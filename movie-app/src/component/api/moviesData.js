const url = "https://www.themoviedb.org/t/p/w1280";
const data = [{
        title: "Oceans 8",
        poster: `${url}/9fxmD5um8kqj3lCV3TBVKJqRB4P.jpg`,
        background: `${url}/scQf03Fm3jeyv4FH04qvi4fp4wh.jpg`,
        overview: "La sœur de Danny Ocean rassemble les talents d'une dizaine de ses consœurs pour mettre la main sur un collier très convoité et ainsi confondre un bijoutier crapuleux.",
        release_date: "2018-06-07",
    },
    {
        title: "Midnight Sun",
        poster: `${url}/1TH4PwfcRPenIxce3BREDIV4mBd.jpg`,
        background: `${url}/rKWg1SnU3yLyph00ZTKtTQsMJrU.jpg`,
        overview: "Katie Price est une jolie jeune fille de 17 ans, intelligente et douée pour le chant et la guitare. Elle est atteinte d’une maladie rare qui lui interdit d’être touchée par le moindre UV. Déterminée à ne pas être vaincue par sa maladie, Katie profite de la nuit pour sortir et jouer de sa musique dans une station de train local. D’une rencontre fortuite avec Charlie Reed va naître un long été idyllique…",
        release_date: "2018-03-22",
    },
    {
        title: "Sans un bruit",
        poster: `${url}/xlJCSHnR7sbaibX3OY97vEmsjxt.jpg`,
        background: `${url}/roYyPiQDQKmIKUEhO912693tSja.jpg`,
        overview: "Une famille tente de survivre sous la menace de mystérieuses créatures qui attaquent au moindre bruit. S’ils vous entendent, il est déjà trop tard.",
        release_date: "2018-04-03",
    },
    {
        title: "Les indestructibles 2",
        poster: `${url}/Apish2YD3QIAepzxZ96VLkqEZo3.jpg`,
        background: `${url}/se5Hxz7PArQZOG3Nx2bpfOhLhtV.jpg`,
        overview: "Notre famille de super‐héros préférée est de retour ! Cette fois c’est Hélène qui se retrouve sur le devant de la scène laissant à Bob le soin de mener à bien les mille et une missions de la vie quotidienne et de s’occuper de Violette, Flèche et de bébé Jack‐Jack. C’est un changement de rythme difficile pour la famille d’autant que personne ne mesure réellement l’étendue des incroyables pouvoirs du petit dernier… Lorsqu’un nouvel ennemi fait surface, la famille et Frozone vont devoir s’allier comme jamais pour déjouer son plan machiavélique.",
        release_date: "2018-06-14",
    },

    {
        title: "Creed II",
        poster: `${url}/84FrvyX2QiAy2QXYSanaCcnqgE1.jpg`,
        background: `${url}/9il7qNbeYnPMYlutsVYDsj4hRyb.jpg`,
        overview: "La vie est devenue un numéro d'équilibriste pour Adonis Creed. Entre ses obligations personnelles et son entraînement pour son prochain grand match, il est à la croisée des chemins. Et l'enjeu du combat est d'autant plus élevé que son rival est lié au passé de sa famille. Mais il peut compter sur la présence de Rocky Balboa à ses côtés : avec lui, il comprendra ce qui vaut la peine de se battre et découvrira qu'il n'y a rien de plus important que les valeurs familiales.",
        release_date: "2018-11-21",
    },

    {
        title: "Pulp Fiction",
        poster: `${url}/4TBdF7nFw2aKNM0gPOlDNq3v3se.jpg`,
        background: `${url}/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg`,
        overview: "L’odyssée sanglante et burlesque de petits malfrats dans la jungle d’Hollywood : deux petits tueurs, un dangereux gangster marié à une camée, un boxeur roublard, des prêteurs sur gages sadiques, un caïd élégant et dévoué, un dealer bon mari et de deux tourtereaux à la gâchette facile.",
        release_date: "1994-09-10",
    },
    {
        title: "Seven",
        poster: `${url}/66vBp6qBv5MdawrUis4axrQDzF9.jpg`,
        background: `${url}/f8ApV9a2cgyWvkeGTB40clSTq2N.jpg`,
        overview: "",
        release_date: "1979-09-07",
    },
    {
        title: "",
        poster: `${url}`,
        background: `${url}`,
        overview: "",
        release_date: "2018-06-07",
    },
    {
        title: "",
        poster: `${url}`,
        background: `${url}`,
        overview: "",
        release_date: "2018-06-07",
    },
    {
        title: "Inception",
        poster: `${url}/aej3LRUga5rhgkmRP6XMFw3ejbl.jpg`,
        background: `${url}/s3TBrRGB1iav7gFOCNx3H31MoES.jpg`,
        overview: "Dom Cobb est un voleur expérimenté, le meilleur dans l'art dangereux de l'extraction, voler les secrets les plus intimes enfouis au plus profond du subconscient durant une phase de rêve, lorsque l'esprit est le plus vulnérable. Les capacités de Cobb ont fait des envieux dans le monde tourmenté de l'espionnage industriel alors qu'il devient fugitif en perdant tout ce qu'il a un jour aimé. Une chance de se racheter lui est alors offerte. Une ultime mission grâce à laquelle il pourrait retrouver sa vie passée mais uniquement s'il parvient à accomplir l'impossible inception.",
        release_date: "2010-07-15",
    },
    {
        title: "Gone Girl",
        poster: `${url}/7xkJ1ACu40BjzLHVPRILWjFvW7.jpg`,
        background: `${url}/x9ezMgOtDPqHatHDvxEG0ILb6Ie.jpg`,
        overview: "Amy et Nick forment en apparence un couple modèle. Victimes de la crise, ils quittent Manhattan pour retourner s’installer dans la ville du Missouri où Nick a grandi. Mais le jour de leur 5ème anniversaire de mariage, Amy disparaît et Nick retrouve leur maison saccagée. Lors de l’enquête tout semble accuser Nick. Celui‐ci décide, de son côté, de tout faire pour savoir ce qui est arrivé à Amy et découvre qu’elle lui dissimulait beaucoup de choses.",
        release_date: "2014-10-01",
    },
];

export const dataMovies = new Promise((resolve, reject) =>
    setTimeout(resolve, 100, data)
);