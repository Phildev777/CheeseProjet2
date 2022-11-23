const cheeses = [
  {
    id: 1,
    fromageName: "Gruyère français",
    fromageImage:
      "https://www.radiofrance.fr/s3/cruiser-production/2012/12/845baa51-4423-11e2-a7b7-782bcb76618d/870x489_gruyere-food-pictures.webp",
    typeDeLait: "vache cru",
    typeDePate: "pressée cuite",
    origine: "Franche-Comté",
    description:
      "Le gruyère français est un fromage fabriqué en Franche-Comté et en Savoie. C'est un fromage au lait cru de vache, à pâte pressée cuite, dont la meule a un poids moyen de 42 kg. Il contient des trous, particularité qui provient de la température pendant la phase de maturation, plus élevée pour le gruyère de France que pour le gruyère suisse. L'appellation Gruyère de France est préservée par le biais d'une Indication Géographique Protégée européenne. Sa couleur et son goût varient en fonction de l'alimentation des vaches, qui influe sur la composition du lait.",
  },

  {
    id: 2,
    fromageName: "Bleu d'Auvergne",
    fromageImage:
      "https://www.maison-lorho.fr/562-thickbox_default/bleu-d-auvergne.jpg",
    typeDeLait: "vache cru",
    typeDePate: "persillée",
    origine: "Puy-de-Dôme",
    description:
      "Le bleu d’Auvergne est un fromage à pâte persillée fabriqué en France dans le Massif central à partir de lait de vache. Son persillage allant du bleu au bleu noir. Son appellation d'origine bénéficie de protections depuis 1975. Sa meilleure période de consommation s'étend de juin à décembre.",
  },
  {
    id: 3,
    fromageName: "Munster",
    fromageImage:
      "https://www.aurelaisdalsace.com/data/uploads/2021/06/fromage-munster-alsace.jpg",
    typeDeLait: "vache cru",
    typeDePate: "molle à croûte lavée",
    origine: "Bas-Rhin",
    description:
      "Le munster et le munster-géromé (ou encore minschterkäs en francique lorrain ou minschterkaas en alsacien) constituent une appellation d'origine désignant un fromage de lait de vache de l'Est de la France, qui est protégée nationalement depuis 1969 par une appellation d'origine contrôlée (AOC) et dans l'ensemble des pays de l'Union européenne depuis 1996 par une appellation d'origine protégée (AOP). Sa meilleure période de consommation s'étend de mai à octobre.",
  },
  {
    id: 4,
    fromageName: "Pont-l'évèque",
    fromageImage:
      "https://www.maison-lorho.fr/652-thickbox_default/pont-l-eveque.jpg",
    typeDeLait: "vache cru",
    typeDePate: "molle à croûte lavée",
    origine: "Calvados",
    description:
      "Le pont-l’évêque est un fromage à pâte molle à croûte lavée de lait de vache produit et affiné en France sur le territoire de la Normandie historique. Il est protégé par une appellation d'origine. Sa meilleure période de consommation s'étend de juin à mars.",
  },
  {
    id: 5,
    fromageName: "Tomme des Pyrénées",
    fromageImage:
      "https://irqualim.fr/wp-content/uploads/2021/04/tomme-des-pyrenees1_0.jpeg",
    typeDeLait: "vache cru",
    typeDePate: "pressée non cuite",
    origine: "Pyrénées Atlantique, Hautes-Pyrénées, Ariège",
    description:
      "Tomme des Pyrénées est une dénomination protégée par Indication géographique protégée (IGP) désignant un fromage au lait de vache cru et pasteurisé fabriqué dans les Pyrénées françaises.",
  },
  {
    id: 6,
    fromageName: "Brie de Meaux",
    fromageImage:
      "https://www.maison-lorho.fr/502-thickbox_default/brie-de-meaux.jpg",
    typeDeLait: "vache cru",
    typeDePate: "molle à croûte fleurie",
    origine: "Seine-et-Marne",
    description:
      "Le brie de Meaux est un fromage au lait cru dont l'appellation d'origine est préservée commercialement via une AOC depuis 1980. Son aire de production s'étend des plaines briardes jusqu'à la Meuse. Son appellation vient de la région de la Brie et de la commune de Meaux en France. Sa meilleure période de consommation s'étend de juillet à mars.",
  },
  {
    id: 7,
    fromageName: "Charolais",
    fromageImage:
      "https://comptoir.maison-lorho.fr/586-large_default/charolais.jpg",
    typeDeLait: "chèvre cru",
    typeDePate: "molle à croûte naturelle",
    origine: "Saône-et-Loire",
    description:
      "Charolais est une appellation d'origine française désignant un fromage au lait cru de chèvre, à pâte molle à croûte naturelle. Originaire des collines du Charolais et du Brionnais, en Bourgogne, ce fromage est aujourd'hui produit dans certaines communes de Saône-et-Loire majoritairement, mais aussi dans l'Allier, la Loire et le Rhône. Cette appellation est protégée en France depuis 2010 par une appellation d'origine contrôlée (AOC) et depuis juin 2014 par une appellation d'origine protégée (AOP). Sa meilleure période de consommation s'étend d'avril à novembre.",
  },
  {
    id: 8,
    fromageName: "Morbier",
    fromageImage: "https://www.maison-lorho.fr/650-home_default/morbier.jpg",
    typeDeLait: "vache cru",
    typeDePate: "pressée non cuite",
    origine: "Doubs",
    description:
      "Morbier est une appellation d'origine désignant un fromage de lait cru de vache, fabriqué dans le massif du Jura en France, et qui tire son nom du bourg jurassien de Morbier. Cette appellation est protégée grâce à une AOP depuis 2002. Sa meilleure période de consommation s'étend de janvier à mars.",
  },
  {
    id: 9,
    fromageName: "Cabécou",
    fromageImage:
      "https://www.maison-lorho.fr/677-thickbox_default/rocamadour.jpg",
    typeDeLait: "chèvre cru",
    typeDePate: "molle à croûte fleurie",
    origine: "Périgord",
    description:
      "Le cabécou est un fromage généralement de lait cru de chèvre originaire des régions du Massif central comme le Quercy, le Rouergue, la Haute-Auvergne, le Bas-Limousin et le Périgord. Il s'agit d'une appellation agricole. Sa meilleure période de consommation s'étend d'avril à août.",
  },
  {
    id: 10,
    fromageName: "Epoisses",
    fromageImage:
      "https://www.francebleu.fr/s3/cruiser-production/2021/11/caed6e0a-b962-499c-8ee6-3f783fc7ad6d/1200x680_epoisses_perriere.jpg",
    typeDeLait: "vache",
    typeDePate: "molle à croûte lavée",
    origine: "Côte-dOr",
    description:
      "L'époisses est un fromage français de la région Bourgogne, bénéficiant d'une AOC depuis 1991 et d'une AOP depuis 1996. Son aire d'appellation couvre environ la moitié nord-ouest de la Côte-d'Or, deux cantons de la Haute-Marne et trois cantons de l'Yonne. Son nom est celui du village d'Époisses, situé dans l'ouest de ce territoire. Sa meilleure période de consommation s'étend de mai à octobre.",
  },
  {
    id: 11,
    fromageName: "Bleu de Gex",
    fromageImage:
      "https://www.maison-lorho.fr/571-home_default/bleu-de-gex.jpg",
    typeDeLait: "vache",
    typeDePate: "persillée",
    origine: "Ain",
    description:
      "Le bleu de Gex Haut-Jura ou bleu de Septmoncel est un fromage au lait de vache à pâte persillée produit dans les plateaux du Haut-Jura, à cheval sur les départements de l'Ain et du Jura en France. Son appellation d'origine est préservée via le label AOC, depuis le 20 septembre 1977, et AOP depuis le 25 septembre 2008. C'est un bleu doux. Le mot « Gex » est imprimé en relief sur la croûte. Les moines de l'abbaye de Saint-Claude le fabriquaient déjà au xiiie siècle. Sa meilleure période de consommation s'étend de juin à février.",
  },
  {
    id: 12,
    fromageName: "Bleu des Causses",
    fromageImage:
      "https://www.maison-lorho.fr/573-home_default/bleu-des-causses.jpg",
    typeDeLait: "vache",
    typeDePate: "persillée",
    origine: "Aveyron",
    description:
      "Le bleu des Causses (anciennement bleu de l’Aveyron) est un fromage à pâte persillée produit en France au centre-sud du Massif central à partir de lait de vache. Il fait partie des fromages français bénéficiant d’une appellation d'origine contrôlée depuis 1953 et d’une appellation d'origine protégée depuis 1996. Il a une longue histoire commune avec le roquefort, avant que l'instauration des AOC ne les sépare. L'affinage dans des caves naturellement thermorégulées est l'élément majeur qui lui donne son arôme particulier. Sa meilleure période de consommation s'étend de juin à janvier.",
  },
  {
    id: 13,
    fromageName: "Mont d'Or ou vacherin du Haut-Doubs",
    fromageImage:
      "https://www.maison-lorho.fr/649-home_default/fromage-mont-d-or.jpg",
    typeDeLait: "vache cru",
    typeDePate: "molle à croûte lavée",
    origine: "Doubs",
    description:
      "Les appellations d'origines mont d'Or et Vacherin Mont-d'Or désignent deux fromages au lait de vache à pâte molle à croûte lavée élaborés dans une zone située au cœur du massif du Jura. Le fromage produit en France, dans une partie du département du Doubs, est appelé « mont d'Or » (sans majuscule ni trait d'union) ou « vacherin du Haut-Doubs », tandis que celui produit en Suisse dans le canton de Vaud est appelé « Vacherin Mont-d'Or » (avec majuscule et trait d'union) ou simplement « Vacherin ». Bien que les deux fromages soient très similaires, il existe quelques différences, les plus importantes étant d'une part l'utilisation exclusive de lait cru en France et, depuis 2003, de lait thermisé en Suisse et d'autre part un affinage obligatoirement sur planche d’épicéa, de 17 à 25 jours en Suisse pour 12 jours en France. Ces fromages, particulièrement coulants, ont la particularité d'être ceinturés par une sangle en écorce (liber) d'épicéa, à l'origine afin d'en faciliter le transport, et d'être livrés dans une boite en bois du même arbre. Une autre spécificité est d'être élaborés exclusivement saisonnièrement entre août et mars, et donc disponibles à la vente entre septembre et mai.",
  },
  {
    id: 14,
    fromageName: "Crottin de Chavignol",
    fromageImage:
      "https://www.maison-lorho.fr/594-home_default/crottin-de-chavignol.jpg",
    typeDeLait: "chèvre cru",
    typeDePate: "molle à croûte naturelle",
    origine: "Cher",
    description:
      "Le crottin de Chavignol est un fromage de chèvre français originaire du village berrichon de Chavignol situé dans le département du Cher, la région Centre-Val de Loire et la région naturelle du Sancerrois. Il bénéficie d'une appellation d'origine contrôlée (AOC) depuis 1976 et de l'appellation d'origine protégée (AOP) depuis 1996. Le Syndicat du crottin de Chavignol est une association à laquelle adhèrent les éleveurs et fromagers de l'AOP. Sa meilleure période de consommation s'étend d'avril à novembre.",
  },
  {
    id: 15,
    fromageName: "Emmental de Savoie",
    fromageImage:
      "https://www.maison-lorho.fr/632-home_default/emmental-francais.jpg",
    typeDeLait: "vache lait cru",
    typeDePate: "pressée cuite",
    origine: "Savoie",
    description:
      "L'emmental de Savoie est un fromage de vache au lait cru fabriqué en France dans les départements alpins de la Savoie et de la Haute-Savoie. Il fait partie de la famille des fromages à pâte pressée cuite. Le nom de ce fromage français est une indication géographique protégée. Il est parfois appelé à tort « gruyère ». Sa meilleure période de consommation s'étend de mai à octobre.",
  },
  {
    id: 16,
    fromageName: "Neufchâtel",
    fromageImage: "https://www.maison-lorho.fr/670-home_default/neufchatel.jpg",
    typeDeLait: "vache cru",
    typeDePate: "molle à croûte fleurie",
    origine: "Seine-Maritime",
    description:
      "Le neufchâtel est un fromage français fabriqué dans le pays de Bray1 et plus particulièrement aux alentours de Neufchâtel-en-Bray (134 communes). Cette appellation d'origine est préservée via une AOC depuis 19692. La forme en cœur est typique de ce fromage mais les formes en briquette, bonde, double bonde, carré et triple-cœur sont également enregistrées dans le cahier des charges de la protection. La race des vaches et leur alimentation (pâturage au moins six mois par an), ainsi que la fabrication du fromage sont définies dans le décret de l'appellation. C'est un fromage lactique à base de lait de vache mis en œuvre majoritairement cru, à pâte molle à croûte fleurie, affiné au moins dix jours, d'un poids de 100 à 600 g selon le format. Sa période de consommation idéale s'étale de mai à août.",
  },
  {
    id: 17,
    fromageName: "Ossau-iraty",
    fromageImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiVn6ll-j5IU6w8pa7kHiOvo7aLRIfN3PJqg&usqp=CAU",
    typeDeLait: "brebis",
    typeDePate: "pressée non cuite",
    origine: "Pyrénées-Atlantiques",
    description:
      "Ossau-Iraty est l'appellation d'origine d'un fromage français de lait de brebis à pâte pressée non cuite fabriqué dans le Pays basque français et le Béarn. Cette appellation a pour origine le pic du Midi d'Ossau et la forêt d'Iraty et est commercialement préservée via une AOC depuis 1980 et une AOP depuis 1996. Sa meilleure période de consommation s'étend de juin à novembre.",
  },
  {
    id: 18,
    fromageName: "Saint-Nectaire",
    fromageImage:
      "https://www.maison-lorho.fr/511-home_default/saint-nectaire-fermier.jpg",
    typeDeLait: "vache cru ou pasteurisé",
    typeDePate: "pressée non cuite",
    origine: "Cantal",
    description:
      "Saint-nectaire est une appellation d'origine désignant un fromage français de lait de vache fabriqué dans la micro-région des Monts Dore, pays à cheval sur les départements du Cantal et du Puy-de-Dôme en France. Le savoir-faire des artisans du Saint-Nectaire a été reconnu par le ministère de la Culture est inscrit à l'inventaire du patrimoine culturel immatériel en France en 2019. Sa meilleure période de consommation s'étend de septembre à novembre.",
  },
  {
    id: 19,
    fromageName: "Abondance",
    fromageImage:
      "https://www.maison-lorho.fr/567-home_default/abondance-fermiere.jpg",
    typeDeLait: "vache cru",
    typeDePate: "pressée cuite",
    origine: "Haute-Savoie",
    description:
      "L'Abondance est un fromage au lait cru français fabriqué en Haute-Savoie, qui bénéficie d'une appellation d'origine protégée. Ce fromage à pâte pressée cuite est exclusivement issu de la transformation de laits crus de vache produits dans le département. Il partage son nom avec la vallée qui l'a vu naître, le val d'Abondance, et la race bovine qui lui donne son lait, l'Abondance. Son goût de noisette le fait apprécier tel quel ou fondu dans de nombreux plats cuisinés. Sa meilleure période de consommation s'étend de juin à décembre.",
  },
  {
    id: 20,
    fromageName: "Beaufort",
    fromageImage:
      "https://www.maison-lorho.fr/561-home_default/beaufort-ete.jpg",
    typeDeLait: "vache cru",
    typeDePate: "pressée cuite",
    origine: "Savoie",
    description:
      "La production du lait et sa transformation s'effectuent dans une aire comprenant la région du Beaufortain d'où il tire son nom. Il est formé en meule à talon légèrement concave. L'appellation beaufort est préservée commercialement via une Appellation d'Origine Protégée. Son appellation a été préservée dès 1968 via une AOC. Il est aujourd'hui un des représentants de la cuisine savoyarde : de la fondue savoyarde au gratin de crozets, le beaufort est présent sur de nombreuses tables de lieux touristiques du pays. Brillat-Savarin l'a surnommé le « Prince des gruyères ».",
  },
  {
    id: 21,
    fromageName: "Bethmale",
    fromageImage:
      "https://www.maison-lorho.fr/513-home_default/bethmale-chevre.jpg",
    typeDeLait: "vache cru",
    typeDePate: "pressée non cuite",
    origine: "Pyrénées ariégeoises",
    description:
      "Le bethmale ou oustet est un des rares fromages de vache originaires des Pyrénées ariégeoises. Il tire son nom de la vallée de Bethmale où il était fabriqué à l'origine. Selon la légende du terroir, le premier bethmale daterait de l'occupation des Maures, au xive siècle. C'est un fromage à pâte pressée non cuite, en forme de petite meule. Sa pâte est dense, avec parfois quelques trous de la taille d'un grain de riz. Historiquement, le lait utilisé provenait de vaches de race casta ou gasconne.",
  },
  {
    id: 22,
    fromageName: "Bleu du Quercy",
    fromageImage:
      "https://www.maison-lorho.fr/658-home_default/roquefort-carles.jpg",
    typeDeLait: "vache",
    typeDePate: "pâte persillée",
    origine: "Quercy",
    description:
      "Il est à base de lait de vache, il a une pâte molle persillée recouverte d'une croûte naturelle. Il fait partie de la famille des bleus à croûte amincie par brossage. 12 semaines d'affinage en cave humide lui sont nécessaires avant de pouvoir être dégusté. ",
  },
  {
    id: 23,
    fromageName: "Camembert",
    fromageImage:
      "https://www.produits-laitiers-aop.fr/wp-content/uploads/2021/09/camembert-de-normandie.jpg",
    typeDeLait: "vache",
    typeDePate: "molle à croûte fleurie",
    origine: "Normandie",
    description:
      "Camembert est une appellation générique qui désigne généralement un fromage à pâte molle et à croûte fleurie. Commercialement, cette appellation d'origine normande ne fait l'objet d'aucune protection et se voit utilisée pour des fromages n'ayant parfois que peu de rapport avec le camembert origine. Dans certaines régions de France, le camembert est appelé « claquos », « clacos », « calendos ». Pour se distinguer de cette multitude de fromages appelés « camembert » par leurs fabricants, la filière de production agricole normande du camembert originel a demandé et obtenu l'enregistrement comme AOP, une protection de l'Union européenne, de l'appellation d'origine « camembert de Normandie ». La production du lait et sa transformation en fromage sont assurées uniquement par cette filière composée d'agriculteurs producteurs fermiers et de transformateurs qui respectent le cahier des charges attaché à ce label officiel.",
  },
  {
    id: 24,
    fromageName: "Bouton de Culotte",
    fromageImage:
      "https://www.maison-lorho.fr/576-large_default/bouton-de-culotte.jpg",
    typeDeLait: "chèvre cru",
    typeDePate: "molle à croûte fleurie",
    origine: "Mâconnais",
    description:
      "Le Bouton de culotte est le poids plume des fromages français au lait de chèvre… mais pas le moins goûteux. C'est un petit fromage à pâte molle à croûte fleurie et de couleur blanche, jaune ou bleue selon sa maturité. Le Bouton de culotte se déguste aussi bien frais, dans les quelques jours suivant sa fabrication, que sec, compact et rabougri, couvert d’une croûte bleutée à brune, après plusieurs semaines d’affinage. Le goût se développant sous l’action des ferments à la surface du fromage, sa petite taille fait que le fromage devient assez corsé.",
  },
  {
    id: 25,
    fromageName: "Bresse Bleu",
    fromageImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Bresse_Bleu_Fromage_500g_08.jpg/800px-Bresse_Bleu_Fromage_500g_08.jpg?20170122192827",
    typeDeLait: "vache pasteurisé",
    typeDePate: "persillée",
    origine: "Ain",
    description:
      "Bresse Bleu (aussi appelé Bleu de Bresse) est un fromage au lait de vache pasteurisé, à pâte persillée produit en Bresse depuis sa création en 1952. Il fait partie de la catégorie des fromages à pâte persillées ou bleus. Son caractère de bleu et son crémeux unique font de Bresse Bleu un allié de goût pour apporter une touche de gourmandise et d’authenticité à un plateau de fromage ou en cuisine. ",
  },
  {
    id: 26,
    fromageName: "Brezain",
    fromageImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcIvSQ8e7q0JVWFWP24afuDa0-MvnoTAmapA&usqp=CAU",
    typeDeLait: "vache pasteurisé",
    typeDePate: "pressée non cuite",
    origine: "Haute-Savoie",
    description:
      "C'est un fromage à base de lait de vache pasteurisé au goût fruité et fumé. La particularité de sa fabrication réside dans une exposition à un feu de bois de hêtre qui lui donne une texture fondante et une croûte brune-orange. Il possède une pâte pressée non cuite de couleur blanc à ivoire. Ce fromage à pâte demi-ferme, contient 48 % de matière grasse. Il se présente sous la forme d'une meule d'environ 6kg.",
  },
  {
    id: 27,
    fromageName: "Cantal",
    fromageImage:
      "https://www.auvergne-destination.com/wp-content/uploads/2021/11/thio-ph-fromage-cantalelisabeth-albiol-17-1600x900.jpg",
    typeDeLait: "vache cru ou pasteurisé",
    typeDePate: "pressée non cuite",
    origine: "Cantal",
    description:
      "Le lait caillé et pressé s'appelle la tomme de cantal. Cette tome une fois brisée et salée, est mise en moule, et de nouveau pressée. C'est ainsi que sont réalisées les fourmes de Cantal. Son goût et son aspect changent en foncion de l'affinage : cantal jeune (1 à 2 mois d'affinage), entre-deux (3 à 7 mois), ou vieux (plus de 8 mois). Sa meilleure période de consommation s'étend de mai à janvier.",
  },
  {
    id: 28,
    fromageName: "Caprice des Dieux",
    fromageImage:
      "https://i.pinimg.com/736x/53/04/0c/53040c2c41e1329026fb03fdfdd9badf.jpg",
    typeDeLait: "vache pasteurisé",
    typeDePate: "molle à croûte fleurie",
    origine: "Haute-Marne",
    description:
      "Créé dans les années 1950, Caprice des dieux devient le premier fromage ovale dans un univers constitué de produits traditionnels ronds (camemberts, coulommiers) ou carrés. Par sa douceur et son équilibre, Caprice des Dieux est un fromage crémeux qui s’adresse à toutes les générations. Fabriqué à partir de lait pasteurisé enrichi de crème, il présente une texture soyeuse, fondante à coeur. Avec son goût pur et frais de crème fraiche, il est adapté à toutes les occasions : du petit moment de plaisir au petit creux. En cuisine, il apporte une sensation de fraîcheur à l'apéritif ou dans une salade. ",
  },
  {
    id: 29,
    fromageName: "Ch'ti Crémeux",
    fromageImage:
      "https://www.legourmeur.fr/wp-content/uploads/2020/05/xhucqueliers-scaled.jpg.pagespeed.ic.EpepUSRIYB.jpg",
    typeDeLait: "vache cru",
    typeDePate: "molle à croûte fleurie",
    origine: "Pas-de-Calais",
    description:
      "Ch'ti Crémeux, également appelé Ch'ti Crémeux de Rety, est une marque commerciale désignant un fromage fermier français fabriqué dans la commune de Réty, département du Pas-de-Calais.",
  },
  {
    id: 30,
    fromageName: "Chaource",
    fromageImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQbkDLOPNs8_03CcXsjD83dzI2oOowN58Ejt4889AgQyOmFmbnE1dqdRdRo4UeN9tIPag&usqp=CAU",
    typeDeLait: "vache cru",
    typeDePate: "molle à croûte fleurie",
    origine: "Aube",
    description:
      "Sa pâte, salée au sel sec, est onctueuse, souple et assez ferme à la fois. Il a la particularité de présenter un affinage centripète faisant ressortir au fil du temps le contraste entre son pourtour crémeux et la texture fine et légèrement granuleuse du coeur. Son nom provient du village de Chaource dans l'Aube qui est l'épicentre de son émergence historique. Sa meilleure période de consommation s'étend de juillet à novembre.",
  },
  {
    id: 31,
    fromageName: "Comté",
    fromageImage: "https://www.rustica.fr/images/okcomte-l760-h550.jpg",
    typeDeLait: "vache cru",
    typeDePate: "pressée cuite",
    origine: "Jura",
    description:
      "Le Comté se caractérise par son étonnante richesse aromatique. Ce n’est pas un fromage à goût uniforme. Chaque meule de Comté révèle un profil aromatique différent selon sa micro-région d’origine, sa saison, selon le tour de main particulier du maître fromager, selon la cave où elle a été élevée. Les vaches de races Montbéliarde et Simmental françaises sont les seules autorisées pour la production du lait à Comté. Chaque jour, le Comté est élaboré artisanalement dans environ 140 fromageries de village, aussi appelées « fruitières ». Ensuite c’est une question de temps ! Chaque meule de Comté doit passer au minimum 4 mois en cave d’affinage avant d’être proposée aux gourmands.",
  },
  {
    id: 32,
    fromageName: "Coulommiers",
    fromageImage:
      "https://media.routard.com/image/99/2/coulommiers.1484992.w740.jpg",
    typeDeLait: "vache cru ou pasteurisé",
    typeDePate: "molle, non pressée et non cuite",
    origine: "Seine-et-Marne",
    description:
      "Aussi appelé Brie de Coulommiers, il est plus petit et plus épais que le brie de Meaux par exemple. Son goût est dû à la qualité du lait — un lait riche en crème, emprésuré dès la traite — et est un peu plus prononcé que celui du brie de Meaux et avec une pointe d'amertume, mais plus doux que le brie de Melun. Sa meilleure période de consommation s'étend d'octobre à fin mars",
  },
  {
    id: 33,
    fromageName: "Cousteron",
    fromageImage:
      "https://www.mundoquesos.com/wp-content/uploads/2020/07/Cousteron.jpg",
    typeDeLait: "vache pasteurisé",
    typeDePate: "pressée non cuite",
    origine: "Sarthe",
    description:
      "Cousteron est une marque commerciale appartenant au groupe Bel, apposée sur un fromage industriel de lait de vache pasteurisé fabriqué dans deux usines fromagères, une dans la commune de Sablé, dans le département de la Sarthe et l'autre dans la commune de Cléry-le-Petit dans le département de la Meuse, en France.",
  },
  {
    id: 34,
    fromageName: "Etorki",
    fromageImage:
      "https://www.zounko.com/products/3222110000801-etorki-etorki-reserve-etorki.jpg",
    typeDeLait: "brebis pasteurisé",
    typeDePate: "pressée non cuite",
    origine: "Pyrénées-Atlantique",
    description:
      "En basque, Etorki signifie « origine ». Le fromage Etorki a été créé en 1979 avec la volonté d'offrir aux consommateurs un « pur brebis » fin, subtil, séducteur, sans les accents piquants qui caractérisaient parfois les fromages venus de la montagne. Il se présente sous la forme d'une petite meule affinée environ 7 semaines. Sa pâte, ferme au toucher mais tendre sous la dent, libère des arômes pointus et très rafraîchissants du lait des brebis pyrénéennes.",
  },
  {
    id: 35,
    fromageName: "Fourme d'Ambert",
    fromageImage:
      "https://www.maison-lorho.fr/617-home_default/fourme-d-ambert.jpg",
    typeDeLait: "vache cru ou pasteurisé",
    typeDePate: "persillée à croûte fleurie",
    origine: "Auvergne",
    description:
      "C'est un fromage à base de lait de vache, à pâte persillée, non cuite et non pressée, à croûte sèche et fleurie, se présentant sous la forme d'un cylindre. Possède une texture souple et onctueuse, d’une grande douceur et des arômes délicats de sous-bois. Affinage minimum de 28 jours.",
  },
  {
    id: 36,
    fromageName: "Langres",
    fromageImage:
      "https://confreries-grand-est.fr/wp-content/uploads/52-langres-specialite.jpg",
    typeDeLait: "vache cru ou pasteurisé",
    typeDePate: "molle à croûte lavée",
    origine: "Haute-Marne",
    description:
      "Fromage d'une saveur particulièrement caratéristique, d'une force agréable mais sans outrance. Apparenté à l'Epoisses et au Munster, et produit surtout en petite laiterie, le fromage Langres est la spécialité de la Champagne humide. Son nom vient du principal centre de commercialisation du fromage, dans le département de la Haute-Marne. Le fromage Langres se caractérise par sa forme tronçonique marquée d'une dépression central. Sa meilleure période de consommation s'étend de mai à décembre",
  },
  {
    id: 37,
    fromageName: "Le Brebiou",
    fromageImage:
      "https://www.coursesu.com/dw/image/v2/BBQX_PRD/on/demandware.static/-/Sites-digitalu-master-catalog/default/dwf3cf2c08/2804183000004_A_3890716_S01.jpg?sw=250&sh=250&sm=fit",
    typeDeLait: "brebis pasteurisé",
    typeDePate: "molle à croûte naturelle",
    origine: "Béarn",
    description:
      "Cette marque désigne des élaborations fromagères à base de laits de brebis mélangés entre eux et pasteurisés. La pâte est molle à croûte naturelle. La croûte prend une couleur blanche à la suite d'un affinage rapide de 2 semaines. Ces fromages se caractérisent par un goût unique et une texture crémeuse.",
  },
  {
    id: 38,
    fromageName: "Le Curé Nantais",
    fromageImage:
      "http://www.fromagerie-bale.fr/sites/default/files/styles/large/public/products/curr_nantais.jpg?itok=usoeuJDA",
    typeDeLait: "vache cru",
    typeDePate: "molle à croûte lavée",
    origine: "Loire-Atlantique",
    description:
      "Sa recette aurait été transmise au XIXe siècle à Saint-Julien-de-Concelles dans le vignoble nantais par un curé de passage. Il est aujourd’hui fabriqué à Pornic, à l’ouest de Nantes. À l'origine carré, le fromage Le Curé Nantais, également appelé fromage à curé, fromage du curé ou le fromage nantais, existe aussi sous une forme ronde. Fromage fort, sa pâte est souple et percée de quelques petits trous, elle révèle une saveur de lard fumé et un final épicé.",
  },
  {
    id: 39,
    fromageName: "Le Trou du Cru",
    fromageImage:
      "https://www.lecomptoirdufromage.fr/wp-content/uploads/2017/02/Trou-du-Cru.jpg",
    typeDeLait: "vache pasteurisé",
    typeDePate: "molle à croûte lavée",
    origine: "Côte-d'Or",
    description:
      "C'est un fromage à pâte molle à croûte lavée, moulé dans une petite taille (environ 60 grammes), affiné avec du marc de Bourgogne durant environ 3 semaines d’affinage. Il dégage une odeur et un goût puissants avec d’arrières notes florales surprenantes.",
  },
  {
    id: 40,
    fromageName: "Brique de brebis",
    fromageImage:
      "https://media.placedumarche.fr/p-565x436/33491-1-brique-de-brebis-200-g-82787.jpg",
    typeDeLait: "brebis cru",
    typeDePate: "molle à croûte légèrement fleurie",
    origine: "Lozère",
    description:
      "Ce fromage a une pâte moelleuse et onctueuse avec une saveur très douce, peu salée, accompagnée d’un arôme de brebis, de paille et de lait chaud. Il a été inventé par la fromagerie Le Fédou de Hyelzas en 1992. La brique de brebis est aujourd’hui fabriquée par plusieurs fromageries fermières et industrielles, au lait cru ou pasteurisé. Il est affiné durant une dizaine de jours. Sa forme plate donne une présentation originale sur un plateau et facilite le service.",
  },
  {
    id: 41,
    fromageName: "Mimolette",
    fromageImage:
      "https://www.maison-lorho.fr/648-home_default/mimolette-vielle.jpg",
    typeDeLait: "vache cru",
    typeDePate: "pressée non cuite",
    origine: "Nord-Pas-de-Calais",
    description:
      "La mimolette, appelée aussi « boule de Lille » ou « vieux hollande », est un fromage traditionnellement produit en Flandre française d'où elle est originaire, dans la région de Lille. Ce fromage est une imitation du fromage d'édam fabriqué aux Pays-Bas, datant de 1672, lorsque les fromages de provenance étrangère étaient interdits par le mercantilisme sous Colbert. La mimolette a pris sa couleur orangée pour marquer la différence entre les fromages français et les fromages néerlandais. Sa meilleure période de consommation s'étend d'avril à septembre.",
  },
  {
    id: 42,
    fromageName: "P'tit Basque",
    fromageImage:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBcWFRgVFhYYGRgaGiEaGRwcHR4cHh4aHB8aIRkcGhofIS4lHB8rHxgaJzgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjYrJSs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0NjQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAIwBDgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAgMFBgcBAAj/xAA8EAABAgQEAwUHAwMEAgMAAAABAhEAAyExBBJBUQVhcQYiMoGRE0KhscHR8AdS4RRi8SNygpIz4hVDwv/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACoRAAICAgICAQMCBwAAAAAAAAABAhEDEiExQVFhEyJxBDIjM0KRscHR/9oADAMBAAIRAxEAPwCqplB/wQ4JTQqXf5jeCkIFhHOXB0I0eCAkipHmPvDnsTtHUyiD3FEcj9oAxzMCKH8+RhyVNan56GFJkpNSCDys/SPLwyhVgobj6pMAw9mB/j7R5IhhBIJ5X1A9aiCEB6ivMQrChSPz8/xD/tGobdPpb0hoHekK9kWpc6XfoIDkl2xlFvodJBsbaXH3ELTOp3gCnfxD0uI4jBLFwH5VDaHT8eCpWERqTm6tfQtpteF38UHX5BjMTcOOY7yfS4hyXMVc97mK/G/rBIwqR4gX116Vh0SUGmVD6/QnYnfWF29mobRjE7sTvbzNvWHPbMGIb4giPDASyWSGPy+hhBwYALLKWooOCA/I6xrZuBzOnQtzH0NxCzMcHvP+bwDNwcxNQkEcjlLjkaHTWOSsQFGoKVi9GPpqOdo1+A/JOScWxqfJV+bKg1OJBFQ4/H5fKK9KUx1+Y/6wQkPUG+1R6Q6k0K4plhQQbfF/8t0cR0ICg5DjQio9RaIRGJWnYj1+FxBMjHglx3SbkH5m/q8MpJiOLD14XQKpsfz7wKqUpOhb1EEoxINSx3Zh/B+EeSp/Cryrb/afmILSfQLa7A1S8wZqa6jzBhpeDfVqa95LbP4k+RiQUGLqDf3J+o09D1hWVxmBCuY+8K+BrI4dy4Yb+JP/AGunzhCpBuNDu4eD1seRHkfS0BT5QfMAyt091XmnwqjII0qWQSbv8elf4hxAegUUlhyD9IbUo0oTvlLK5Ok3PnHvaBR7pSulfcWPJqQDAylqSVJZJOyaHfzMNCebDMnqPvtBk1ABzEkOLFnFnY28qQJiFAEZFAg/ufm/SsMlYOhxCieY5b60MMTElPhUzl6lvRhCfaAhwkMNtrN/mGJU0Objo7cx6wHEKkVdcsDX86wtAAsfX6GPYacggBR9bQRKQCe6lvv0ipMXKVS/r94dSa1/POEJlO4F9I6UG3zhbDQ+hjY23qPXSFhxq3xHrDKUEV/PWFpJFQfSA2GggLPvJcG5HzhhMgJJyVHOhEESppIdh+fKOZwTXXyPkbGMEWmSGcgioAGppUdOcHmWlNWO+YW8toGTOCSEhgfccgGoDg7Cj84Iwxaiw1XSdH1GxehcbRyqScnfZ0NVFUPIUg0PhfmCDS35WFTZRBoqjOC1ISQEuAmxathuD032rDiJpoGoWarB3vuH+0Z+mBLyj0t1U28JH1G0OjDENTvbNRzd1CFKS5chnOoq/PaJHCpHhcmlH5c/OJyUl/0Laq0RUzCA1HdVoQddbVA5Wh9aAUF2sQHADE7jS8SM3Cg6QIvCkWPqM3o9vKCpSjfFiWpeQFIIGVQIADPeou4Ft3rAfEMEpQo4WmqSKMb32I+YiUOZNSHbm0CYuZ3FBPjILCgqaCtg14EssWqbr8jwi74IzCYgqApTcXfVx1g1KArwkE7WLwKMKUBDD3avSusEJkvQGuxpHRBtxTfoSSSk0hzOXYgjrX4iohExDt83PzEPKWtNCCzdR94Y/qALgnmND0vGYBleImIUClynf/H1iQw3GQaLDc2pzP8AiAkrSo+KvpSOLlDX1s/0MFOgNJlow8zMlwcydwaiOplAhwWO4LHof5EVYTVJqglJ3sf8QbhuMKFJic4Goor7H4Q6kn2K4tdE37P91Rofyno0NTcMWdJcDf8AHEJw2LQv/wAawS1UksqmuUw4Ddqfm2kM0qFtgNzUVG/0OnSOT5AV4k2sXYjooVgmdIBrr6fH7w17Mg0ccjby/PKEGsGmJWAwImHTOwV0CmrAE5D3ofeSqh/40Y23iWKmqR5i38fOEzJYO3zH8RrCQc7DgkU+DN6XhKOHKcgOdSCm23z+MShwzXT9R6xwyW0PR7ecHYGpnWR7g+UHYUlIABNPy2kCze6xFofkr5xVikgnGVdQat9IMxM33klxqAHpvEclehsdxSEAFHhJHQ2+4hTUSaUMH0+UelrynLsajryhnCcW0WkHRxfzEBY7ikupKwCa0LmlqCsCjWTKmunzFv4hJUGqAOv4xitYjtKn3EE81HKPg5PwiMxXHZqrrCRsn73g6MGyLlxqQlSFKAHcGupck9KGhdzEXK4iuUUgHuqqhKnUl7UJqlomOKsWDsgFyUhzo/UsQx5xH4iTm7iGs73d/wBrsE0LPHC35O6L4omMJxpC/GgooEqAqgjQjV+tvhEvh8TKsmYKEipcA9Dq0V2Vw2mZZGcMARY0pnds1AAQOVYNl4MqAyhgD4WBrzpV9DekL9aUX1Yfpxl06Jlawa5klVnzAdH2+/WCMDOAWg5wQFAEGhrQ+dbHaIM8NBSQADUuSA3Qc+Xq0PYPh7Gl3BUfSr62p9olPNtXHP5D9Javkuq0NAq0wdNFTAswR0HCgRaIAxcjWJJQhmcmkTyxuLRTHJqSIftJi0SvZ5lZQpakObZmCg50cAkdIalTA+x9P4iM/UeuDlUtNSOndWPN7RRcBxmbKYIWSn9qu8n41HkRHbgW2NNCZJayaNUWbXvv8YFxEtKta35xC8K4wiaGByrZ1IJ9Sh7jp5tEoibyzD0PoY0o0GLETUkNUODQ3bz+8LM8XP5+GEzS5pZr6PCEq0IprZoWhrHyuzgMaecL9kDR2Og0/iG14c+7R/SBBilB0rH5uIBheMwRFcqqV7heu41FdocwfGZqQBmCxqF+Mf8AK583j0vFtq43hyZIQrvEB9CL8i4gqVGa9kvhOKIXQnIrY/e0GJU5tFamSQe8b+hPmKRyRPWg9xR6GzfmxEHYVxLRQ0+nzhmZhxcU6fURHSuKhwFjKd9IORikljmB6X84a0wU0JytQFvl5iGpiWuD5OYMQgK6/npDc2WdPh9mI+UK0FMy+ZLqWUBvsfKOySB4iwfX7xDYniC1UDJGwFfMn6NAi5yjclWz1+EdOjIbIsUziKEkhKs5FTlDjoTYesBYnjijRCQkNc1P2HxiHKzb+I8np+dYOqBsx/EYla6rJPy9BQ+cMiOiOwQHPWOKLB9q9WrCo4sUI1ZowTTOKgKAmFTJoGAulaUnzL2A0EQokrKigKqllIVUPsCNDU+YiUXNC5cuYokDIk0DlilLkCzk3f4xGYhSjMZAZqgguQDZ1lqF9hHkyrk9GBMycQtff99NC9gDcpOgL3+sSWGmE967aWrqDsGiMwhKHKqr96lKtQJ562ESWFLVoNkk1cH5VuY5pT+7ssoqg2dMoAABViDTLskC3n6bw5hVgjuggg1ew36n4dTDUlde6WIFRej+ihy5+cFSi75UkK1GgHJWg5fONs5O1/gDSUaLDMgWZBS/pAqzHYecMKhmZaHVmGploE/2seHZUf1CUBgkJ1VOS1f2hZP2jNY0X9Q1AYWWNTPNeiVP9IzqOr9H/KQmb97PImFJCkkgixFCOhFYsPDe0y0kCd3xooAZh5Cih8esV4RwiOhpPskm10aTIxSVpdCwobjTkdQesdRNKTVmPKvOM6w+KWhWZCik7jbY6EdYs+A7UpUwmAJV+4+Hq/uxKUK6Kxn7LOZr05U0fz1jqZYPiDuNbwIjFJUxFBelRD/t6pYaabxOh7HF8OQU5kb1Fj6Q0jDEFgfIn5GClTylOYlxy/PnCQUkEknNt/EBhTGVTCksaPoaw2taSWqPlBgtlpvW0CrlhwGYnW4/iFoawfISCzEfm8eRiCmgcNs9N+YghqWIePJAbKS/zjWGgjD8RILhlcxQ/KvpElK4ghQqQ/Mt9Q/xiBn4YEULfnwgJWHWPCTzr9ReCmK4meA8oU0dnIyrWlwcqil3cEjaOD8aPQOMSU7QkjeHX2jxDwoRAUOseCtgI8qXHG3jGOvCgPz+BCQY6DAMXrhpC8HJW75AZbAXYqBDXUrLlLf2vEeqWorCUvmPeRpmSXYDmbN9492SxGaWuUSo5FiYAKd1QyqY6d4D1js7PMmDLlS57odmL2KjUqBH2jzM0Ups9DDJuKLFhsUpffoVJA7rMEhQ90N3a0e4NDEjhgFAdag0IJsFm4+R+UNgkKTV3W7KUQyc2oUD4lGz684mZan77FJI8Ir1Bf3bUNY4slXbOhekGSaFiADz08hbkfSCpKqNUKa3869YCQ9zT4+Qu/StoOluqwY35dX06ekIpcmkuCcUug6D5QMswAOJpqCbHKeopCxigdY9BNM818DqoZWaR0zBDc1dIE+IsePZRf1JxAyYaWLkrmE+iG9SfSKKDFn7f4sKxCEC0qWEn/evvrfnVMVeO39NHXEl8EsruTFPHgY8mWopUsJJSkgKUAWSVPkCjYEsW3aEvFiYogbwgiOvDmHwy1rCJaFrWXZKAVKIAc0GgGsYw5gceuUXSaap0O/Q/lYtGA4yhYZ8qtjQ+Wh8ophjxhZRUhoyaNNw+IGUdHH8wUiWlszkE+9ceYjPuH8eUghK++AP+Q+/n6xauH8RSsOheZrjZ7ONLGIyg0WjJMlpqWGYENrWkDTZwDu6fiIZOKroIdUoKDKccxUekTKBKJoKR3wwrSo6HUQNOceFnGor8fvEbNwq0HOguN0/UQRgsW5dQINiUf8A6TpGowUiqXLV0I1hC5Rd0qIe4h9KblmSdRXzIhSlKFGcaMAfnGDZD8X4GlZOQXUM4YB91Aj3iKV5WikTndaiMrKYpIIyu7UNfdN+sauUEgZrmgI+BiI41wJM1CmyiYQxLXYHLXfQEuzmOqM/DOSUfKM8CoUDBGPw/sgELHfDAgCgJDqBPN6dXtAyPzyv5RWhBQMdYQnNCoARKk+fyhsv/AoPW5h544RAMPcJxyZM1JVVBBQtnolXvUqcpY+RiwcQlutyQUFu8C4qAUrH+6kVKagRyRj1oTkfOjQE25g6dLRDLh35XZfFl14fRf5CpgU2f2hSBkUa90tptoWtWJ/CzirukZVai4NLuKqS3SM64dxhAAAWUnQKpldnKdA9LbRonBcHiJqEzAlKw2ZC8wD5S2U1fNsOlY8+eGe1UdayRq7JGQsqpR/Wn9v5pBiSUlgOhNn1b90QaMWSpzQgkFwygoGqVJs768oJmcRYOpkl97jpvzjneqT9lOWUPtKFy8diFIUpClLzOkkeJKSaWLkw1K7Q4lJ8SVdUj5paCe0k4LxK1/uSk+eVvpEUpMepjUZwTa8I86bcW0vZOye26gO/Jc/2rpzcKEFy+3soPmlTaWDJOY7Eg90PR4p6kiGVJEF4YPj/AGZTkj2JxK5i1zFl1rUVqPNRf0FhyAj2Fw6pi0S0B1rWEJHNRa3K/lCCIuv6b8LzLXiVCkt0S+ayO+r/AIpIHVRizdIRml8N7MYdGDVgwnNLWkiYqmZajdZP7nAI2YNaML47wpeGnrw66qQaK0Wg1QsdR8QRpH0Dw+fpFZ/Uzs3/AFOH9shLzpAKg11S7rTzI8Q5gjWDGWysToxRAJISkOSQABqSWA8yRG/djOzUrByzkdU1fjmKACi3upA8KQdNbl4y39OuF+0nqxCg6JIGXYzFju/9UurzEa7wrEMcphJZNZKIWrRkX6jcC/psWpSA0qe8xGwU/wDqJGzKLgbL5RBcD4TMxU5MiUHWqpJ8KUDxLX/aH6kkDWNt7fcB/q8IpKR/qS/9SV/uSC6eikuOrRWv0/4UcNJExYaZOZSgQxSj3EHY1zEbkbQ0siirZlySfF+wsr/49WGkJHtEDOhZAzrmJqc6r94OlrB07RjGHxC0KCkEpUPxlDXWhj6ZkTMweMU/U7gP9PifbIDSp7qDWTMHjTyfxjqqDF2ZEZhONgsJgY/usm9HrTz9YnJGJLXFYocP4bFLQe4W5aekCWNPorHI12X9Cq+Kp2+u8PFYKg6Q7XTRXprFf4VxULZDss6HXfLv8+USSVVpcVbfziEotPkqpJ9BylkVCgQ/TyMNrxId9/KOuCHWA3oq9n1huYEpoWI0csYUYTgMepNEnMkaG8TuGxSFp0SQLGK0mRmAIYOHf/EE4cpS7167G9YpdCuKZI8T4KjEJ0SsBkLIzMD4gQ7EEOOT0jPMZw9clZC05AHF3Z3DA+8GYvs8aHg8cR3RbQXIh/H8NlYlAQtTLYhKhQgqDKAfcRSGTwyU8fkyZSSktr+MfMVjoiW49wZcqYc7VJPdBKW7zEDYJSkEfeIYgi4IPP7RYiOBQjheEhUdeMEYnEwItcGrtT+ICWK2aCjHJYKiEs5JYDcmwrrH0R2Hwv8AT4GRLWkIUEZlp2Uokly92Z/TSMZ7E8M9rPzk0lZVkZQoqKlMAkGgNzmLs1njbMLNHseaipn2BYX6Rz551wFIH7QdnpeLOaXNXJmj/wCxDEHb2iTRXUEHrFC4r2G4kkEoxMubd0uUHyCksfWNP4UlkkuWJoNH1LQclQNDE4auKbSv8IbaUXSb/ufPpw06UcmIQtE0aLocpsQdRzEeKzG947guHnBpslC6MCpLqAJdkqumtaGKpxb9N5C0k4da5awDlClZ0KLUBfvJfcGKV6F2vsypREMrh7GSVS1rlrDLQopUHBZQvXUcxAqlQRj0tClqShAdaiEpG6lFgOjmNr4Vw9OHkokpqEJYn9yrrV5qJPpFC/TrheecrEqHdld1HOYoX/4oJ81CNIMJN+AMew81jE7hpuYAxWgYkcBiGLROMtWZq0AS+Dow2ZEtOVC1rmAbKUXUOgoByaPJVlLxYMVKzobW6esV2dCZbUho9Fiwc/MkGIrimHyLcWVXz1H1hHCsUym3iXxknOgp1uOukO/4kPlC9SI7AYhi0I7V8FGMwy5NM5GaWT7sxNUHobHkoxHoWUnpE/gcRmTAwT/pDONcnzYuWpKilQKVJJCgbhQLKB5ggiORfP1V4F7KeMSgdydRbaTUip/5JD9UmKHHahDoOuor9olcFx1aD33WN/e/9vn1iJMJMBxT4YVJrovGGx6VpZKgobX/AJBhM2cXr8foYpcqapBdJIO4idwvHUEf6iVBQ1RUHqNDEpYmui0cqfZPStxa9PqNIJBe46tfzhEyXV0uWpTxDdxrHkLtZzR9D12hGOggEAOlQfTcco4icoUdxzv6w0sh3ZjuKj+YeWUqcgv3QdiDr8WhKGDVKROTknozos9lJPUVik8d4AZKiQVLSolQmEgAAVCCnQgDz0sws6MwqA4+sPJmJWgoWkKSbjnFIZHHvoSWNS6MxJjzxYe0PClIJWHWg5lZjdJ7rJIF3NjtTma9OlFCikio/OkdKaatHM006YlReGJqHh144YxiZ7E8UTh55C0LV7QJQkJIBz5xlzP7rmrVjYeJJWpacqVMq7VANzbzMYPLUxBdiCCDYgguCPOLXxPtfip0kSlzWSfFkTkKg3hUU6asGr6RLLjU+GHaujVp3EZcpKQqZLQGYZ1oSTvR35xCzP1DwiF5FKWsfvlpK0D5F+gMZEhA0AHNq+sKCAC5jaoU15P6lYUv3J7OQ+S4Fj4tdriKz2q7crngy5GaXKIZajRa3uKeBHIFzqRaK1w7hs3Ef+FIWc2VnALs5LftGp5iLBK/T3EKQ65spEwvlll1dApaaJJ8wNYP2o1FMW5qS5N3N/PWGFE2aun8wdMwE5JmAylgyi03ukhB/vUAwBuDYitoGgUOazwCSiRIRJSQcodRHvLVVagdiaDkBEqJjxj3C+OTZBSkHNKSfAdAb5VXSX8uUWTCds0EgLStDm5ZSQNHKa+bRBxknyrGpPpl9zQ7KWxis4ftDLWAoLQQX94A0vQsR6QYniqBdSR1UBTe8SlJeQqDLrhMQ6YheMrCVZhY36/zEKvtdh5PjmpD2CTnJa7BLxTuKdsxNnKPeEpNJZy1O6lpuFH4ARrlOPCsKjT5ZeZOIq7xa8DigpAjJsF2klFv9VA/3HKfMGxiewXbHDIouegPsSpuuUGEhKUHVPn4YZQtWmT3GlBK8wsq/wDu19YVwvGMbxmvG+3SlzVBCQZIPdclClEe+o1YPUDa9YTh+3CUXRMen7W51eHeOaeyQPtaps1XtNg0YnDLkLssd06pWKoWOim8njAp8lSFqQsZVoJSobKFDFt432+VNl+zkpVLJoqYSM2XZAHhJ1Lu1t4pzx149vJJqjkcMdeEkxYB5o48dSl7CHRKADlQOlATBSA2aDLVm71zuKKHXcQ4pBYksw94a9RA8gu51BoRQ/CFJmFsz1BbqOYtHIdZ5aCLUpu4P2hSVElqA0pv0iQnSxlzgMWFBat6QDiZYBAApG7MeK1ElLEKGmlIYXmBc0e3OFJmkG+sELosp0gBOZwpACw4Lg/UHeKxxfgwSXSSpJUKftBS3dA0okNpFixIylhZ7aR7EoGUwYycXaBKCkuTOTLOnebavnSEROcekhIQU0JRpSma1NOUQV1VjrXKs5fNChCxNhA+kN6wGYPSt7Re+xvZXDzZKcTiCtfeJ9mO6khKlJZZuUlgaNtaM7l6jT59Y0DsLxWdiFTvbTVq/p5Y9nVqLIQUqbxJYAgGxDi5ecnSbNRe+HYmUFiVJlJlIN8iQkEt3Qpt9zBU/CrzJ9kqqh3iqvRj9BAMvuSwpOgBbR61I1MSSQ+HDkuE0Ot944d3JNMeq5Q5glnKyyCQsvzSzEHcU10jKMX2CxQmrATLTLzkpWFukIJJSyGzUBAY7RpvC1lRrV0l4KkzSQXr1ikJvWwNUzPZ36ep/p8slYViMySta+6nK6swQACUUI3zNpFN45wdeFnKkLIUpISoKS4SpKg4Ul6tceRjfAKecYv+oc8niE1JZkJlpTSrFANTcsSWe0dGNtrkVlaVKBuBDS8MDoPSCkwqHsyAE4drCHjKpBJEcML5GsCXKjyJMFx5oLYExoS497KHlQkwEZsHMto4YcmWjmHDltOUUigNiUpff856Q/JwqlnKkFynNlFVHZokOF4VKlpBFDU83NQeUWaXISFMABS4v6xpS14NGO3JEYDs/MJBICG0ur5sDeLDwrgklDgor/cHPxhvD4hTkO4bWJj4xzSytl44kj//2Q==",
    typeDeLait: "brebis pasteurisé",
    typeDePate: "pressée non cuite",
    origine: "France",
    description:
      "Ce fromage pur brebis offre une grande finesse de goût et un caractère délicat. Sous sa croûte caramel se cache une pâte souple de couleur crème, à la coupe franche et aux saveurs équilibrées, douces et fruitées. Sa texture souple et fondante fait l’unanimité.",
  },
  {
    id: 43,
    fromageName: "Petit Billy",
    fromageImage:
      "https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/chevre-frais-aux-pommes-et-au-miel-de-printemps-2069368/21743722-2-fre-FR/Chevre-frais-aux-pommes-et-au-miel-de-printemps.jpg",
    typeDeLait: "chèvre pasteurisé",
    typeDePate: "fromage frais",
    origine: "Ile-et-Vilaine",
    description:
      "Fromage de chèvre de Bretagne moulé à la louche, à partir de lait de producteurs locaux, tous situés à moins de 70km du site de production. Il se mange en tartine ou s'ajoute très facilement à n'importe quel plat : pâtes, croquemonsieur, tartine, wrap… ",
  },
  {
    id: 44,
    fromageName: "Port-Salut",
    fromageImage:
      "https://upload.wikimedia.org/wikipedia/commons/2/20/Port_Salut_cheese.jpg",
    typeDeLait: "vache pasteurisé",
    typeDePate: "pressée non cuite",
    origine: "Mayenne",
    description:
      "Le Port Salut est un fromage très agréable et très doux, particulièrement apprécié des enfants, mais également au delà de nos frontières, notamment en Grande Bretagne, où son goût subtil et son odeur peu envahissante ravissent nos voisins... Il tire ses origines de l'Abbaye du Port-du-Salut à Entrammes, près de Laval en Mayenne.",
  },
  {
    id: 45,
    fromageName: "Raclette",
    fromageImage:
      "https://www.maison-lorho.fr/663-home_default/raclette-fumee.jpg",
    typeDeLait: "vache cru",
    typeDePate: "pressée non cuite",
    origine: "Suisse",
    description:
      "Le raclette est un fromage à base de lait cru de vache, à pâte pressée non cuite d'origine du canton du Valais en Suisse. Il est notamment utilisé pour la préparation de la raclette. Des fromages à raclette au lait cru ou de type pasteurisé sont aujourd'hui fabriqués dans de nombreuses régions de Suisse, en France dans les régions d'Auvergne, de Savoie, de Franche-Comté et de Bretagne, au Québec et en Australie.",
  },
  {
    id: 46,
    fromageName: "Reblochon",
    fromageImage:
      "https://www.produits-laitiers-aop.fr/wp-content/uploads/2021/09/reblochon.jpg",
    typeDeLait: "vache cru",
    typeDePate: "pressée non cuite",
    origine: "Haute-Savoie",
    description:
      "C'est un fromage au lait cru et entier de vache à pâte pressée non cuite et croûte lavée, fabriqué à partir du lait de races bovines montagnardes Abondance, Tarine et Montbéliarde. Le reblochon de Savoie est un fromage de terroir, apprécié aussi bien cuit, en tartiflette, que tout simplement sur un plateau de fromages.",
  },
  {
    id: 47,
    fromageName: "Maroilles",
    fromageImage: "https://www.maison-lorho.fr/614-home_default/maroilles.jpg",
    typeDeLait: "vache cru",
    typeDePate: "molle à croûte lavée",
    origine: "Nord",
    description:
      "Considéré comme le roi des fromages du Nord, et présenté comme le plus fin des fromages forts. La fabrication du Maroilles a lieu dans une cave humide, où il est affiné pendant 3 à 5 semaines selon le format, au cours desquelles il est brossé et lavé à l’eau salée. Il s’agit d’une opération importante qui va conditionner la qualité du fromage et lui donner sa magnifique couleur orangée naturelle, sa saveur originale et ses arômes spécifiques.",
  },
  {
    id: 48,
    fromageName: "Sainte Maure de Touraine",
    fromageImage:
      "https://www.maison-lorho.fr/685-home_default/sainte-maure-de-touraine.jpg",
    typeDeLait: "chèvre cru",
    typeDePate: "molle à croûte naturelle",
    origine: "Indre-et-Loire, Loir-et-Cher",
    description:
      "Le Sainte- Maure de Touraine est un fromage de chèvre à croûte naturelle et à pâte molle. Il est percé dune paille en son centre, sur toute la longueur. Cette tige sert à tenir le fromage et à éviter qu'il ne casse. Son goût légèrement typé chèvre et acidulé ainsi que sa texture fine et fondante séduiront les amateurs de fromages frais.",
  },
];

module.exports = cheeses;
