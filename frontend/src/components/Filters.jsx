import React from "react";
import "./style/filters.css";

function Filter() {
    const cheeses = [{
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
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Wikicheese_Clermont-Ferrand_-_Bleu_d%27Auvergne_20220825-02.jpg/390px-Wikicheese_Clermont-Ferrand_-_Bleu_d%27Auvergne_20220825-02.jpg",
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
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Munster_01.jpg/390px-Munster_01.jpg",
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
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pont-l%27%C3%89v%C3%AAque_03.jpg/390px-Pont-l%27%C3%89v%C3%AAque_03.jpg",
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
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Tomme_noire_des_Pyrenees.jpg/390px-Tomme_noire_des_Pyrenees.jpg",
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
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Brie_01.jpg/390px-Brie_01.jpg",
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
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Fromage_charolais.jpg/390px-Fromage_charolais.jpg",
        typeDeLait: "chèvre cru",
        typeDePate: "molle à croûte naturelle",
        origine: "Saône-et-Loire",
        description:
            "Charolais est une appellation d'origine française désignant un fromage au lait cru de chèvre, à pâte molle à croûte naturelle. Originaire des collines du Charolais et du Brionnais, en Bourgogne, ce fromage est aujourd'hui produit dans certaines communes de Saône-et-Loire majoritairement, mais aussi dans l'Allier, la Loire et le Rhône. Cette appellation est protégée en France depuis 2010 par une appellation d'origine contrôlée (AOC) et depuis juin 2014 par une appellation d'origine protégée (AOP). Sa meilleure période de consommation s'étend d'avril à novembre.",
    },
    {
        id: 8,
        fromageName: "Morbier",
        fromageImage:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Morbier_%28fromage%29_01.jpg/390px-Morbier_%28fromage%29_01.jpg",
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
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Cab%C3%A9cou_de_l%27Aveyron.JPG/390px-Cab%C3%A9cou_de_l%27Aveyron.JPG",
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
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/%C3%89poisses_Gaugry_03.jpg/390px-%C3%89poisses_Gaugry_03.jpg",
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
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Bleu_de_Gex.jpg/390px-Bleu_de_Gex.jpg",
        typeDeLait: "vache",
        typeDePate: "persillée",
        origine: "Ain",
        decription:
            "Le bleu de Gex Haut-Jura ou bleu de Septmoncel est un fromage au lait de vache à pâte persillée produit dans les plateaux du Haut-Jura, à cheval sur les départements de l'Ain et du Jura en France. Son appellation d'origine est préservée via le label AOC, depuis le 20 septembre 1977, et AOP depuis le 25 septembre 2008. C'est un bleu doux. Le mot « Gex » est imprimé en relief sur la croûte. Les moines de l'abbaye de Saint-Claude le fabriquaient déjà au xiiie siècle. Sa meilleure période de consommation s'étend de juin à février.",
    },
    {
        id: 12,
        fromageName: "Bleu des Causses",
        fromageImage:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/WikiCheese_-_Bleu_des_Causses_-_20150619_-_001.jpg/390px-WikiCheese_-_Bleu_des_Causses_-_20150619_-_001.jpg",
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
            "https://www.gourmandiseries.fr/wp-content/uploads/2020/11/mont-d-or-four.jpg",
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
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Crottin_02.jpg/390px-Crottin_02.jpg",
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
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Emmental_de_Savoie_02.jpg/390px-Emmental_de_Savoie_02.jpg",
        typeDeLait: "vache lait cru",
        typeDePate: "pressée cuite",
        origine: "Savoie",
        description:
            "L'emmental de Savoie est un fromage de vache au lait cru fabriqué en France dans les départements alpins de la Savoie et de la Haute-Savoie. Il fait partie de la famille des fromages à pâte pressée cuite. Le nom de ce fromage français est une indication géographique protégée. Il est parfois appelé à tort « gruyère ». Sa meilleure période de consommation s'étend de mai à octobre.",
    },
    {
        id: 16,
        fromageName: "Neufchâtel",
        fromageImage:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/C%C5%93urs_de_Neufch%C3%A2tel_01.jpg/390px-C%C5%93urs_de_Neufch%C3%A2tel_01.jpg",
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
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Fromages_Ossau-Iraty_003.jpg/390px-Fromages_Ossau-Iraty_003.jpg",
        typeDeLait: "brebis",
        typeDePate: "pressée non cuite",
        origine: "Pyrénées-Atlantiques",
        description:
            "Ossau-Iraty est l'appellation d'origine d'un fromage français de lait de brebis à pâte pressée non cuite fabriqué dans le Pays basque français et le Béarn. Cette appellation a pour origine le pic du Midi d'Ossau et la forêt d'Iraty et est commercialement préservée via une AOC depuis 1980 et une AOP depuis 1996. Sa meilleure période de consommation s'étend de juin à novembre.",
    },];
    const [areFiltersVisible, setAreFiltersVisible] = React.useState(false);
    const [cowChecked, setCowChecked] = React.useState(false);
    const [goatChecked, setGoatChecked] = React.useState(false);
    const [sheepChecked, setSheepChecked] = React.useState(false);
    const [softChecked, setSoftChecked] = React.useState(false);
    const [hardChecked, setHardChecked] = React.useState(false);
    const [blueChecked, setBlueChecked] = React.useState(false);
    const applyFilters = () => {
        let filteredMilkCheeses = []
        if (cowChecked) {
            filteredMilkCheeses = filteredMilkCheeses.concat(cheeses.filter(cheese => cheese.typeDeLait.includes('vache')));
        }
        if (goatChecked) {
            filteredMilkCheeses = filteredMilkCheeses.concat(cheeses.filter(cheese => cheese.typeDeLait.includes('chèvre')));


        } if (sheepChecked) {
            filteredMilkCheeses = filteredMilkCheeses.concat(cheeses.filter(cheese => cheese.typeDeLait.includes('brebis')));


        }
        let filteredCheeses = [];
        if (!cowChecked && !sheepChecked && !goatChecked) { filteredMilkCheeses = cheeses };
        if (softChecked) {
            filteredCheeses = filteredCheeses.concat(filteredMilkCheeses.filter(cheese => cheese.typeDePate.includes('molle')));
        }
        if (hardChecked) {
            filteredCheeses = filteredCheeses.concat(filteredMilkCheeses.filter(cheese => cheese.typeDePate.includes('pressée')));
        }
        if (blueChecked) {
            filteredCheeses = filteredCheeses.concat(filteredMilkCheeses.filter(cheese => cheese.typeDePate.includes('persillée')));
        }
        if (!softChecked && !hardChecked && !blueChecked) { filteredCheeses = filteredMilkCheeses }
        console.log(filteredCheeses)
    }
    return (
        <div>
            <div className="buttonContainer">
                <button
                    className="showFilters"
                    onClick={() => setAreFiltersVisible(!areFiltersVisible)}
                    type="button"
                >
                    Voir les filtres
                </button>
            </div>
            {areFiltersVisible && (
                <div className="allGrey">
                    <div className="filters">
                        <button
                            className="closeFilters"
                            onClick={() => setAreFiltersVisible(!areFiltersVisible)}
                            type="button"
                        >
                            X
                        </button>
                        <h2>Filtrer par : </h2>
                        <div className="milkType filter">
                            <h4>Type de lait</h4>
                            <div className="inputContainer">
                                <label htmlFor="cowMilk">Vache</label>
                                <input type="checkbox" id="cowMilk" name="cowMilk" checked={cowChecked} onChange={() => setCowChecked(!cowChecked)} />
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="goatMilk">Chèvre</label>
                                <input type="checkbox" id="goatMilk" name="goatMilk" checked={goatChecked} onChange={() => setGoatChecked(!goatChecked)} />
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="sheepMilk">Brebis</label>
                                <input type="checkbox" id="sheepMilk" name="sheepMilk" checked={sheepChecked} onChange={() => setSheepChecked(!sheepChecked)} />
                            </div>
                        </div>
                        <hr />
                        <div className="pasteType filter">
                            <h4>Type de pâte</h4>
                            <div className="inputContainer">
                                <label htmlFor="softPaste">Pâte molle</label>
                                <input type="checkbox" id="softPaste" name="softPaste" checked={softChecked} onChange={() => setSoftChecked(!softChecked)} />
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="hardPaste">Pâte pressée</label>
                                <input type="checkbox" id="hardPaste" name="hardPaste" checked={hardChecked} onChange={() => setHardChecked(!hardChecked)} />
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="bluePaste">Pâte persillée</label>
                                <input type="checkbox" id="bluePaste" name="bluePaste" checked={blueChecked} onChange={() => setBlueChecked(!blueChecked)} />
                            </div>
                            <button
                                className="applyFilters"
                                onClick={() => {
                                    setAreFiltersVisible(!areFiltersVisible);
                                    applyFilters();
                                }}
                                type="button"
                            >
                                Appliquer
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Filter;
