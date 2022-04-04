var containerGroups = document.getElementById("container-groups")

var containerRoundFinal = document.getElementById("container-round-final")
var round16 = document.getElementById("round-16")

var firstRound8 = document.getElementById("1round8")
var secondRound8 = document.getElementById("2round8")
var thirdRound8 = document.getElementById("3round8")
var fourthRound8 = document.getElementById("4round8")
var fivethRound8 = document.getElementById("5round8")
var sixthRound8 = document.getElementById("6round8")
var seventhRound8 = document.getElementById("7round8")
var eigthRound8 = document.getElementById("8round8")

var firstRound4 = document.getElementById("1round4")
var secondRound4 = document.getElementById("2round4")
var thirdRound4 = document.getElementById("3round4")
var fourthRound4 = document.getElementById("4round4")

var firstRound2 = document.getElementById("1round2")
var secondRound2 = document.getElementById("2round2")

var finalRound = document.getElementById("final")

var groups = [
    [{
        country: "Qatar",
        image: "./Mundial 2022/qatar.png",
        abrr: "Qat",
        points: 0,
        dif: 0,
        gfFirst: 0,
        gfSecond: 0,
        gfThird: 0,
        gcFirst: 0,
        gcSecond: 0,
        gcThird: 0,
        pg: 0,
        pe: 0,
        pp: 0
    }, {
        country: "Ecuador",
        image: "./Mundial 2022/Ecuador.png",
        abrr: "Ecu",
        points: 0,
        dif: 0,
        gfFirst: 0,
        gfSecond: 0,
        gfThird: 0,
        gcFirst: 0,
        gcSecond: 0,
        gcThird: 0,
        pg: 0,
        pe: 0,
        pp: 0
    }, {
        country: "Senegal",
        image: "./Mundial 2022/Senegal.png",
        abrr: "Sen",
        points: 0,
        dif: 0,
        gfFirst: 0,
        gfSecond: 0,
        gfThird: 0,
        gcFirst: 0,
        gcSecond: 0,
        gcThird: 0,
        pg: 0,
        pe: 0,
        pp: 0
    }, {
        country: "PaisesBajos",
        image: "./Mundial 2022/Paises Bajos.png",
        abrr: "Ned",
        points: 0,
        dif: 0,
        gfFirst: 0,
        gfSecond: 0,
        gfThird: 0,
        gcFirst: 0,
        gcSecond: 0,
        gcThird: 0,
        pg: 0,
        pe: 0,
        pp: 0
    }],
    [{
        country: "Inglaterra",
        image: "./Mundial 2022/Inglaterra.png",
        abrr: "Ing",
        points: 0,
        dif: 0,
        gfFirst: 0,
        gfSecond: 0,
        gfThird: 0,
        gcFirst: 0,
        gcSecond: 0,
        gcThird: 0,
        pg: 0,
        pe: 0,
        pp: 0
    }, {
        country: "Iran",
        image: "./Mundial 2022/Iran.png",
        abrr: "Irn",
        points: 0,
        dif: 0,
        gfFirst: 0,
        gfSecond: 0,
        gfThird: 0,
        gcFirst: 0,
        gcSecond: 0,
        gcThird: 0,
        pg: 0,
        pe: 0,
        pp: 0
    }, {
        country: "EstadosUnidos",
        image: "./Mundial 2022/Estados Unidos.png",
        abrr: "Usa",
        points: 0,
        dif: 0,
        gfFirst: 0,
        gfSecond: 0,
        gfThird: 0,
        gcFirst: 0,
        gcSecond: 0,
        gcThird: 0,
        pg: 0,
        pe: 0,
        pp: 0
    }, {
        country: "Gales",
        image: "./Mundial 2022/Gales.png",
        abrr: "Gal",
        points: 0,
        dif: 0,
        gfFirst: 0,
        gfSecond: 0,
        gfThird: 0,
        gcFirst: 0,
        gcSecond: 0,
        gcThird: 0,
        pg: 0,
        pe: 0,
        pp: 0
    }],
    [{
        country: "Argentina",
        image: "./Mundial 2022/Argentina.png",
        abrr: "Arg",
        points: 0,
        dif: 0,
        gfFirst: 0,
        gfSecond: 0,
        gfThird: 0,
        gcFirst: 0,
        gcSecond: 0,
        gcThird: 0,
        pg: 0,
        pe: 0,
        pp: 0
    }, {
        country: "ArabiaSaudita",
        image: "./Mundial 2022/Arabia Saudita.png",
        abrr: "Rsa",
        points: 0,
        dif: 0,
        gfFirst: 0,
        gfSecond: 0,
        gfThird: 0,
        gcFirst: 0,
        gcSecond: 0,
        gcThird: 0,
        pg: 0,
        pe: 0,
        pp: 0
    }, {
        country: "Mexico",
        image: "./Mundial 2022/Mexico.png",
        abrr: "Mex",
        points: 0,
        dif: 0,
        gfFirst: 0,
        gfSecond: 0,
        gfThird: 0,
        gcFirst: 0,
        gcSecond: 0,
        gcThird: 0,
        pg: 0,
        pe: 0,
        pp: 0
    }, {
        country: "Polonia",
        image: "./Mundial 2022/Polonia.png",
        abrr: "Pol",
        points: 0,
        dif: 0,
        gfFirst: 0,
        gfSecond: 0,
        gfThird: 0,
        gcFirst: 0,
        gcSecond: 0,
        gcThird: 0,
        pg: 0,
        pe: 0,
        pp: 0
    }],
    [{
        country: "Francia",
        image: "./Mundial 2022/Francia.png",
        abrr: "Fra",
        points: 0,
        dif: 0,
        gfFirst: 0,
        gfSecond: 0,
        gfThird: 0,
        gcFirst: 0,
        gcSecond: 0,
        gcThird: 0,
        pg: 0,
        pe: 0,
        pp: 0
    }, {
        country: "Peru",
        image: "./Mundial 2022/Peru.png",
        abrr: "Per",
        points: 0,
        dif: 0,
        gfFirst: 0,
        gfSecond: 0,
        gfThird: 0,
        gcFirst: 0,
        gcSecond: 0,
        gcThird: 0,
        pg: 0,
        pe: 0,
        pp: 0
    }, {
        country: "Dinamarca",
        image: "./Mundial 2022/Dinamarca.png",
        abrr: "Din",
        points: 0,
        dif: 0,
        gfFirst: 0,
        gfSecond: 0,
        gfThird: 0,
        gcFirst: 0,
        gcSecond: 0,
        gcThird: 0,
        pg: 0,
        pe: 0,
        pp: 0
    }, {
        country: "Tunez",
        image: "./Mundial 2022/Tunez.png",
        abrr: "Tun",
        points: 0,
        dif: 0,
        gfFirst: 0,
        gfSecond: 0,
        gfThird: 0,
        gcFirst: 0,
        gcSecond: 0,
        gcThird: 0,
        pg: 0,
        pe: 0,
        pp: 0
    }],
    [{
        country: "España",
        image: "./Mundial 2022/España.png",
        abrr: "Esp",
        points: 0,
        dif: 0,
        gfFirst: 0,
        gfSecond: 0,
        gfThird: 0,
        gcFirst: 0,
        gcSecond: 0,
        gcThird: 0,
        pg: 0,
        pe: 0,
        pp: 0
    }, {
        country: "CostaRica",
        image: "./Mundial 2022/Costa Rica.png",
        abrr: "Crc",
        points: 0,
        dif: 0,
        gfFirst: 0,
        gfSecond: 0,
        gfThird: 0,
        gcFirst: 0,
        gcSecond: 0,
        gcThird: 0,
        pg: 0,
        pe: 0,
        pp: 0
    }, {
        country: "Alemania",
        image: "./Mundial 2022/Alemania.png",
        abrr: "Ale",
        points: 0,
        dif: 0,
        gfFirst: 0,
        gfSecond: 0,
        gfThird: 0,
        gcFirst: 0,
        gcSecond: 0,
        gcThird: 0,
        pg: 0,
        pe: 0,
        pp: 0
    }, {
        country: "Japon",
        image: "./Mundial 2022/Japon.png",
        abrr: "Jap",
        points: 0,
        dif: 0,
        gfFirst: 0,
        gfSecond: 0,
        gfThird: 0,
        gcFirst: 0,
        gcSecond: 0,
        gcThird: 0,
        pg: 0,
        pe: 0,
        pp: 0
    }],
    [{
        country: "Belgica",
        image: "./Mundial 2022/Belgica.png",
        abrr: "Bel",
        points: 0,
        dif: 0,
        gfFirst: 0,
        gfSecond: 0,
        gfThird: 0,
        gcFirst: 0,
        gcSecond: 0,
        gcThird: 0,
        pg: 0,
        pe: 0,
        pp: 0
    }, {
        country: "Canada",
        image: "./Mundial 2022/Canada.png",
        abrr: "Can",
        points: 0,
        dif: 0,
        gfFirst: 0,
        gfSecond: 0,
        gfThird: 0,
        gcFirst: 0,
        gcSecond: 0,
        gcThird: 0,
        pg: 0,
        pe: 0,
        pp: 0
    }, {
        country: "Marruecos",
        image: "./Mundial 2022/Marruecos.png",
        abrr: "Mar",
        points: 0,
        dif: 0,
        gfFirst: 0,
        gfSecond: 0,
        gfThird: 0,
        gcFirst: 0,
        gcSecond: 0,
        gcThird: 0,
        pg: 0,
        pe: 0,
        pp: 0
    }, {
        country: "Croacia",
        image: "./Mundial 2022/Croacia.png",
        abrr: "Cro",
        points: 0,
        dif: 0,
        gfFirst: 0,
        gfSecond: 0,
        gfThird: 0,
        gcFirst: 0,
        gcSecond: 0,
        gcThird: 0,
        pg: 0,
        pe: 0,
        pp: 0
    }],
    [{
        country: "Brasil",
        image: "./Mundial 2022/Brasil.png",
        abrr: "Bra",
        points: 0,
        dif: 0,
        gfFirst: 0,
        gfSecond: 0,
        gfThird: 0,
        gcFirst: 0,
        gcSecond: 0,
        gcThird: 0,
        pg: 0,
        pe: 0,
        pp: 0
    }, {
        country: "Serbia",
        image: "./Mundial 2022/Serbia.png",
        abrr: "Ser",
        points: 0,
        dif: 0,
        gfFirst: 0,
        gfSecond: 0,
        gfThird: 0,
        gcFirst: 0,
        gcSecond: 0,
        gcThird: 0,
        pg: 0,
        pe: 0,
        pp: 0
    }, {
        country: "Suiza",
        image: "./Mundial 2022/Suiza.png",
        abrr: "Sui",
        points: 0,
        dif: 0,
        gfFirst: 0,
        gfSecond: 0,
        gfThird: 0,
        gcFirst: 0,
        gcSecond: 0,
        gcThird: 0,
        pg: 0,
        pe: 0,
        pp: 0
    }, {
        country: "Camerun",
        image: "./Mundial 2022/Camerun.png",
        abrr: "Cam",
        points: 0,
        dif: 0,
        gfFirst: 0,
        gfSecond: 0,
        gfThird: 0,
        gcFirst: 0,
        gcSecond: 0,
        gcThird: 0,
        pg: 0,
        pe: 0,
        pp: 0
    }],
    [{
        country: "Portugal",
        image: "./Mundial 2022/Portugal.png",
        abrr: "Por",
        points: 0,
        dif: 0,
        gfFirst: 0,
        gfSecond: 0,
        gfThird: 0,
        gcFirst: 0,
        gcSecond: 0,
        gcThird: 0,
        pg: 0,
        pe: 0,
        pp: 0
    }, {
        country: "Ghana",
        image: "./Mundial 2022/Ghana.png",
        abrr: "Gha",
        points: 0,
        dif: 0,
        gfFirst: 0,
        gfSecond: 0,
        gfThird: 0,
        gcFirst: 0,
        gcSecond: 0,
        gcThird: 0,
        pg: 0,
        pe: 0,
        pp: 0
    }, {
        country: "Uruguay",
        image: "./Mundial 2022/Uruguay.png",
        abrr: "Uru",
        points: 0,
        dif: 0,
        gfFirst: 0,
        gfSecond: 0,
        gfThird: 0,
        gcFirst: 0,
        gcSecond: 0,
        gcThird: 0,
        pg: 0,
        pe: 0,
        pp: 0
    }, {
        country: "CoreadelSur",
        image: "./Mundial 2022/Corea del Sur.png",
        abrr: "Cor",
        points: 0,
        dif: 0,
        gfFirst: 0,
        gfSecond: 0,
        gfThird: 0,
        gcFirst: 0,
        gcSecond: 0,
        gcThird: 0,
        pg: 0,
        pe: 0,
        pp: 0
    }]
]

var gruopsCopy;

for (var i = 0; i < 8; i++) {
    var containerGroup = document.createElement("div")
    var containerParticipants = document.createElement("div")

    containerParticipants.className = "container-participants";
    containerParticipants.innerHTML += `
        <p class="text-group">Group ${i + 1}</p>
        <div class="contain-participants">
            
        </div>
        `;
    for (var j = 0; j < 4; j++) {
        containerParticipants.innerHTML += `
                <img src="${groups[i][j].image}" alt="${groups[i][j].abrr}" class="image-group-participant">
            `;
    }

    var containerFixture = document.createElement("div")
    containerFixture.className = "container-fixture";

    containerFixture.innerHTML += `
        <div class="fixture">
            <div class="contain-participant">
                <img src="${groups[i][0].image}" alt="Qatar" class="image-group">
                <p class="abrr">${groups[i][0].abrr}</p>
            </div>
            <input type="text" class="input-goals" name="a${0}" id="a${i}${groups[i][0].country}" maxlength="1">
            <input type="text" class="input-goals" name="a${1}" id="a${i}${groups[i][1].country}" maxlength="1">
            <div class="contain-participant">
                <img src="${groups[i][1].image}" alt="Qatar" class="image-group">
                <p class="abrr">${groups[i][1].abrr}</p>
            </div>
        </div>
        <div class="fixture">
            <div class="contain-participant">
                <img src="${groups[i][2].image}" alt="Qatar" class="image-group">
                <p class="abrr">${groups[i][2].abrr}</p>
            </div>
            <input type="text" class="input-goals" name="a${2}" id="a${i}${groups[i][2].country}" maxlength="1">
            <input type="text" class="input-goals" name="a${3}" id="a${i}${groups[i][3].country}" maxlength="1">
            <div class="contain-participant">
                <img src="${groups[i][3].image}" alt="Qatar" class="image-group">
                <p class="abrr">${groups[i][3].abrr}</p>
            </div>
        </div>
        <div class="fixture">
            <div class="contain-participant">
                <img src="${groups[i][0].image}" alt="Qatar" class="image-group">
                <p class="abrr">${groups[i][0].abrr}</p>
            </div>
            <input type="text" class="input-goals" name="b${0}" id="b${i}${groups[i][0].country}" maxlength="1">
            <input type="text" class="input-goals" name="b${2}" id="b${i}${groups[i][2].country}" maxlength="1">
            <div class="contain-participant">
                <img src="${groups[i][2].image}" alt="Qatar" class="image-group">
                <p class="abrr">${groups[i][2].abrr}</p>
            </div>
        </div>
        <div class="fixture">
            <div class="contain-participant">
                <img src="${groups[i][1].image}" alt="Qatar" class="image-group">
                <p class="abrr">${groups[i][1].abrr}</p>
            </div>
            <input type="text" class="input-goals" name="b${1}" id="b${i}${groups[i][1].country}" maxlength="1">
            <input type="text" class="input-goals" name="b${3}" id="b${i}${groups[i][3].country}" maxlength="1">
            <div class="contain-participant">
                <img src="${groups[i][3].image}" alt="Qatar" class="image-group">
                <p class="abrr">${groups[i][3].abrr}</p>
            </div>
        </div>
        <div class="fixture">
            <div class="contain-participant">
                <img src="${groups[i][0].image}" alt="Qatar" class="image-group">
                <p class="abrr">${groups[i][0].abrr}</p>
            </div>
            <input type="text" class="input-goals" name="c${0}" id="c${i}${groups[i][0].country}" maxlength="1">
            <input type="text" class="input-goals" name="c${3}" id="c${i}${groups[i][3].country}" maxlength="1">
            <div class="contain-participant">
                <img src="${groups[i][3].image}" alt="Qatar" class="image-group">
                <p class="abrr">${groups[i][3].abrr}</p>
            </div>
        </div>
        <div class="fixture">
            <div class="contain-participant">
                <img src="${groups[i][1].image}" alt="Qatar" class="image-group">
                <p class="abrr">${groups[i][1].abrr}</p>
            </div>
            <input type="text" class="input-goals" name="c${1}" id="c${i}${groups[i][1].country}" maxlength="1">
            <input type="text" class="input-goals" name="c${2}" id="c${i}${groups[i][2].country}" maxlength="1">
            <div class="contain-participant">
                <img src="${groups[i][2].image}" alt="Qatar" class="image-group">
                <p class="abrr">${groups[i][2].abrr}</p>
            </div>
        </div>
        `;


    var containerPositions = document.createElement("div")
    containerPositions.className = "container-positions";
    var tablePositions = document.createElement("table")
    tablePositions.className = "table-positions";

    tablePositions.innerHTML += `
            <tr>
                <th class="container-column">
                    Country
                </th>
                <th class="container-column">
                    PG
                </th>
                <th class="container-column">
                    PE
                </th>
                <th class="container-column">
                    PP
                </th>
                <th class="container-column">
                    GF
                </th>
                <th class="container-column">
                    GC
                </th>
                <th class="container-column">
                    Dif
                </th>
                <th class="container-column">
                    Points
                </th>
            </tr>
    `;
    for (var j = 0; j < 4; j++) {
        tablePositions.innerHTML += `
            <tr>
                <td class="container-column">
                    <img src="${groups[i][j].image}" alt="Qatar" class="image-group">
                </td>
                <td class="container-column" id="pg${groups[i][j].country}">
                    ${groups[i][j].pg}
                </td>
                <td class="container-column" id="pe${groups[i][j].country}">
                    ${groups[i][j].pe}
                </td>
                <td class="container-column" id="pp${groups[i][j].country}">
                    ${groups[i][j].pp}
                </td>
                <td class="container-column" id="gf${groups[i][j].country}">
                    ${groups[i][j].gfFirst + groups[i][j].gfSecond + groups[i][j].gfThird}
                </td>
                <td class="container-column" id="gc${groups[i][j].country}">
                    ${groups[i][j].gcFirst + groups[i][j].gcSecond + groups[i][j].gcThird}
                </td>
                <td class="container-column" id="dif${groups[i][j].country}">
                    ${groups[i][j].dif}
                </td>
                <td class="container-column" id="points${groups[i][j].country}">
                    ${groups[i][j].points}
                </td>
            </tr>
        `;
    }

    containerPositions.appendChild(tablePositions)

    containerGroup.className = "container-group";
    containerGroup.appendChild(containerParticipants)
    containerGroup.appendChild(containerFixture)
    containerGroup.appendChild(containerPositions)
    containerGroups.appendChild(containerGroup)
}

var change = false;

for (var r = 0; r < 2; r++) {
    for (var i = 0; i < 8; i++) {
        if (!change) {
            round16.innerHTML += `
            <img src="${groups[i][0].image}" alt="${groups[i][0].country}" id="${r}${i}${groups[i][0].abrr}" class="image-group round">
        `;
        } else {
            round16.innerHTML += `
            <img src="${groups[i][1].image}" alt="${groups[i][1].country}" id="${r}${i}${groups[i][1].abrr}" class="image-group round">
        `;
        }
        change = !change
    }
    change = true;
}

// Points

var characters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "Backspace"]
var keyUsA0, keyUsA1, keyUsA2, keyUsA3, keyUsB0, keyUsB1, keyUsB2, keyUsB3, keyUsC0, keyUsC1, keyUsC2, keyUsC3;

document.querySelectorAll("input").forEach((input) => {

    input.addEventListener("keyup", (e) => {

        if (input.name == "a0") {
            keyUsA0 = groupOutcomeOne(1, 0, keyUsA0, e, input);
        } else if (input.name == "a1") {
            keyUsA1 = groupOutcomeOne(0, 1, keyUsA1, e, input);
        } else if (input.name == "a2") {
            keyUsA2 = groupOutcomeOne(3, 2, keyUsA2, e, input);
        } else if (input.name == "a3") {
            keyUsA3 = groupOutcomeOne(2, 3, keyUsA3, e, input);
        } else if (input.name == "b0") {
            keyUsB0 = groupOutcomeTwo(2, 0, keyUsB0, e, input);
        } else if (input.name == "b2") {
            keyUsB2 = groupOutcomeTwo(0, 2, keyUsB2, e, input);
        } else if (input.name == "b1") {
            keyUsB1 = groupOutcomeTwo(3, 1, keyUsB1, e, input);
        } else if (input.name == "b3") {
            keyUsB3 = groupOutcomeTwo(1, 3, keyUsB3, e, input);
        } else if (input.name == "c0") {
            keyUsC0 = groupOutcomeThree(3, 0, keyUsC0, e, input);
        } else if (input.name == "c3") {
            keyUsC3 = groupOutcomeThree(0, 3, keyUsC3, e, input);
        } else if (input.name == "c1") {
            keyUsC1 = groupOutcomeThree(2, 1, keyUsC1, e, input);
        } else if (input.name == "c2") {
            keyUsC2 = groupOutcomeThree(1, 2, keyUsC2, e, input);
        }

        orderTable(input.id[1])
        roundOfSixteen()
    })
})

function orderTable(id) {

    gruopsCopy = structuredClone(groups)

    for (var i = 0; i < 8; i++) {
        gruopsCopy[i].sort((a, b) => {
            if (a.points == b.points) {
                return b.dif - a.dif;
            } else {
                return b.points - a.points;
            }
        });
    }

    containerRoundFinal.removeChild(containerRoundFinal.getElementsByTagName("div")[0])

    var newRound = document.createElement("div")
    newRound.className = "round-final";
    newRound.id = "round-16";
    var change = false;

    for (var r = 0; r < 2; r++) {
        for (var i = 0; i < 8; i++) {
            if (!change) {
                newRound.innerHTML += `
            <img src="${gruopsCopy[i][0].image}" alt="${gruopsCopy[i][0].country}" id="${r}${i}${gruopsCopy[i][0].abrr}" class="image-group round">
        `;
            } else {
                newRound.innerHTML += `
            <img src="${gruopsCopy[i][1].image}" alt="${gruopsCopy[i][1].country}" id="${r}${i}${gruopsCopy[i][0].abrr}" class="image-group round">
        `;
            }
            change = !change
        }
        change = true;
    }

    containerRoundFinal.prepend(newRound)

    var group = containerGroups.getElementsByClassName("container-group")[id]
    group.removeChild(group.getElementsByTagName("div")[21])

    var newContainer = document.createElement("div")
    newContainer.className = "container-positions"

    var newTable = document.createElement("table")
    newTable.className = "table-positions";

    newTable.innerHTML += `
            <tr>
                <th class="container-column">
                    Country
                </th>
                <th class="container-column">
                    PG
                </th>
                <th class="container-column">
                    PE
                </th>
                <th class="container-column">
                    PP
                </th>
                <th class="container-column">
                    GF
                </th>
                <th class="container-column">
                    GC
                </th>
                <th class="container-column">
                    Dif
                </th>
                <th class="container-column">
                    Points
                </th>
            </tr>
    `;

    for (var i = 0; i < 4; i++) {
        newTable.innerHTML += `
        <tr>
            <td class="container-column">
                <img src="${gruopsCopy[id][i].image}" alt="Qatar" class="image-group">
            </td>
            <td class="container-column" id="pg${gruopsCopy[id][i].country}">
                ${gruopsCopy[id][i].pg}
            </td>
            <td class="container-column" id="pe${gruopsCopy[id][i].country}">
                ${gruopsCopy[id][i].pe}
            </td>
            <td class="container-column" id="pp${gruopsCopy[id][i].country}">
                ${gruopsCopy[id][i].pp}
            </td>
            <td class="container-column" id="gf${gruopsCopy[id][i].country}">
                ${gruopsCopy[id][i].gfFirst + gruopsCopy[id][i].gfSecond + gruopsCopy[id][i].gfThird}
            </td>
            <td class="container-column" id="gc${groups[id][i].country}">
                ${gruopsCopy[id][i].gcFirst + gruopsCopy[id][i].gcSecond + gruopsCopy[id][i].gcThird}
            </td>
            <td class="container-column" id="dif${gruopsCopy[id][i].country}">
                ${gruopsCopy[id][i].dif}
            </td>
            <td class="container-column" id="points${gruopsCopy[id][i].country}">
                ${gruopsCopy[id][i].points}
            </td>
        </tr>   
        `;
    }

    newContainer.appendChild(newTable)
    group.appendChild(newContainer)
}

function groupOutcomeOne(rival, us, keySpecial, event, input) {

    var found = false;

    for (var i = 0; i < characters.length; i++) {
        if (event.key == characters[i]) {
            found = true;
        }
    }

    if (found) {
        var key = parseInt(event.key)
        var keyRival = parseInt(document.getElementById(`${input.id[0]}${input.id[1]}${groups[input.id[1]][rival].country}`).value)
        if (event.key == "Backspace") {
            groups[parseInt(input.id[1])][us].dif -= groups[parseInt(input.id[1])][us].gfFirst;
            document.getElementById(`dif${groups[input.id[1]][us].country}`).innerHTML = groups[parseInt(input.id[1])][us].dif;
            groups[parseInt(input.id[1])][rival].dif += groups[parseInt(input.id[1])][us].gfFirst;
            document.getElementById(`dif${groups[input.id[1]][rival].country}`).innerHTML = groups[parseInt(input.id[1])][rival].dif;
            groups[parseInt(input.id[1])][us].gfFirst = 0;
            document.getElementById(`gf${groups[input.id[1]][us].country}`).innerHTML = groups[parseInt(input.id[1])][us].gfFirst + groups[parseInt(input.id[1])][us].gfSecond + groups[parseInt(input.id[1])][us].gfThird;
            groups[parseInt(input.id[1])][rival].gcFirst = 0;
            document.getElementById(`gc${groups[input.id[1]][rival].country}`).innerHTML = groups[parseInt(input.id[1])][rival].gcFirst + groups[parseInt(input.id[1])][rival].gcSecond + groups[parseInt(input.id[1])][rival].gcThird;
            if (document.getElementById(`${input.id[0]}${input.id[1]}${groups[input.id[1]][rival].country}`).value != "") {
                if (keySpecial > keyRival) {
                    groups[parseInt(input.id[1])][us].pg -= 1;
                    document.getElementById(`pg${groups[input.id[1]][us].country}`).innerHTML = groups[parseInt(input.id[1])][us].pg;
                    groups[parseInt(input.id[1])][rival].pp -= 1;
                    document.getElementById(`pp${groups[input.id[1]][rival].country}`).innerHTML = groups[parseInt(input.id[1])][rival].pp;
                } else if (keySpecial == keyRival) {
                    groups[parseInt(input.id[1])][us].pe -= 1;
                    document.getElementById(`pe${groups[input.id[1]][us].country}`).innerHTML = groups[parseInt(input.id[1])][us].pe;
                    groups[parseInt(input.id[1])][rival].pe -= 1;
                    document.getElementById(`pe${groups[input.id[1]][rival].country}`).innerHTML = groups[parseInt(input.id[1])][rival].pe;
                } else {
                    groups[parseInt(input.id[1])][us].pp -= 1;
                    document.getElementById(`pp${groups[input.id[1]][us].country}`).innerHTML = groups[parseInt(input.id[1])][us].pp;
                    groups[parseInt(input.id[1])][rival].pg -= 1;
                    document.getElementById(`pg${groups[input.id[1]][rival].country}`).innerHTML = groups[parseInt(input.id[1])][rival].pg;
                }
            }
            groups[parseInt(input.id[1])][us].points = groups[parseInt(input.id[1])][us].pg * 3 + groups[parseInt(input.id[1])][us].pe;
            document.getElementById(`points${groups[input.id[1]][us].country}`).innerHTML = groups[parseInt(input.id[1])][us].points;
        } else {
            keySpecial = parseInt(document.getElementById(`${input.id[0]}${input.id[1]}${groups[input.id[1]][us].country}`).value)
            if (document.getElementById(`${input.id[0]}${input.id[1]}${groups[input.id[1]][rival].country}`).value != "") {
                if (key > keyRival) {
                    groups[parseInt(input.id[1])][us].pg += 1;
                    document.getElementById(`pg${groups[input.id[1]][us].country}`).innerHTML = groups[parseInt(input.id[1])][us].pg;
                    groups[parseInt(input.id[1])][rival].pp += 1;
                    document.getElementById(`pp${groups[input.id[1]][rival].country}`).innerHTML = groups[parseInt(input.id[1])][rival].pp;
                } else if (key == keyRival) {
                    groups[parseInt(input.id[1])][us].pe += 1;
                    document.getElementById(`pe${groups[input.id[1]][us].country}`).innerHTML = groups[parseInt(input.id[1])][us].pe;
                    groups[parseInt(input.id[1])][rival].pe += 1;
                    document.getElementById(`pe${groups[input.id[1]][rival].country}`).innerHTML = groups[parseInt(input.id[1])][rival].pe;
                } else {
                    groups[parseInt(input.id[1])][us].pp += 1;
                    document.getElementById(`pp${groups[input.id[1]][us].country}`).innerHTML = groups[parseInt(input.id[1])][us].pp;
                    groups[parseInt(input.id[1])][rival].pg += 1;
                    document.getElementById(`pg${groups[input.id[1]][rival].country}`).innerHTML = groups[parseInt(input.id[1])][rival].pg;
                }
            }
            groups[parseInt(input.id[1])][us].gfFirst += key;
            document.getElementById(`gf${groups[input.id[1]][us].country}`).innerHTML = groups[parseInt(input.id[1])][us].gfFirst + groups[parseInt(input.id[1])][us].gfSecond + groups[parseInt(input.id[1])][us].gfThird;
            groups[parseInt(input.id[1])][rival].gcFirst += key;
            document.getElementById(`gc${groups[input.id[1]][rival].country}`).innerHTML = groups[parseInt(input.id[1])][rival].gcFirst + groups[parseInt(input.id[1])][rival].gcSecond + groups[parseInt(input.id[1])][rival].gcThird;

            groups[parseInt(input.id[1])][us].dif = groups[parseInt(input.id[1])][us].gfFirst + groups[parseInt(input.id[1])][us].gfSecond + groups[parseInt(input.id[1])][us].gfThird - groups[parseInt(input.id[1])][us].gcFirst - groups[parseInt(input.id[1])][us].gcSecond - groups[parseInt(input.id[1])][us].gcThird;
            document.getElementById(`dif${groups[input.id[1]][us].country}`).innerHTML = groups[parseInt(input.id[1])][us].dif;
            groups[parseInt(input.id[1])][rival].dif = groups[parseInt(input.id[1])][rival].gfFirst + groups[parseInt(input.id[1])][rival].gfSecond + groups[parseInt(input.id[1])][rival].gfThird - groups[parseInt(input.id[1])][rival].gcFirst - groups[parseInt(input.id[1])][rival].gcSecond - groups[parseInt(input.id[1])][rival].gcThird;
            document.getElementById(`dif${groups[input.id[1]][rival].country}`).innerHTML = groups[parseInt(input.id[1])][rival].dif;

            groups[parseInt(input.id[1])][us].points = groups[parseInt(input.id[1])][us].pg * 3 + groups[parseInt(input.id[1])][us].pe;
            document.getElementById(`points${groups[input.id[1]][us].country}`).innerHTML = groups[parseInt(input.id[1])][us].points;
            groups[parseInt(input.id[1])][rival].points = groups[parseInt(input.id[1])][rival].pg * 3 + groups[parseInt(input.id[1])][rival].pe;
            document.getElementById(`points${groups[input.id[1]][rival].country}`).innerHTML = groups[parseInt(input.id[1])][rival].points;
        }
    }

    return keySpecial;

}

function groupOutcomeTwo(rival, us, keySpecial, event, input) {

    var found = false;

    for (var i = 0; i < characters.length; i++) {
        if (event.key == characters[i]) {
            found = true;
        }
    }

    if (found) {
        var key = parseInt(event.key)
        var keyRival = parseInt(document.getElementById(`${input.id[0]}${input.id[1]}${groups[input.id[1]][rival].country}`).value)
        if (event.key == "Backspace") {
            groups[parseInt(input.id[1])][us].dif -= groups[parseInt(input.id[1])][us].gfSecond;
            document.getElementById(`dif${groups[input.id[1]][us].country}`).innerHTML = groups[parseInt(input.id[1])][us].dif;
            groups[parseInt(input.id[1])][rival].dif += groups[parseInt(input.id[1])][us].gfSecond;
            document.getElementById(`dif${groups[input.id[1]][rival].country}`).innerHTML = groups[parseInt(input.id[1])][rival].dif;
            groups[parseInt(input.id[1])][us].gfSecond = 0;
            document.getElementById(`gf${groups[input.id[1]][us].country}`).innerHTML = groups[parseInt(input.id[1])][us].gfFirst + groups[parseInt(input.id[1])][us].gfSecond + groups[parseInt(input.id[1])][us].gfThird;
            groups[parseInt(input.id[1])][rival].gcSecond = 0;
            document.getElementById(`gc${groups[input.id[1]][rival].country}`).innerHTML = groups[parseInt(input.id[1])][rival].gcFirst + groups[parseInt(input.id[1])][rival].gcSecond + groups[parseInt(input.id[1])][rival].gcThird;
            if (document.getElementById(`${input.id[0]}${input.id[1]}${groups[input.id[1]][rival].country}`).value != "") {
                if (keySpecial > keyRival) {
                    groups[parseInt(input.id[1])][us].pg -= 1;
                    document.getElementById(`pg${groups[input.id[1]][us].country}`).innerHTML = groups[parseInt(input.id[1])][us].pg;
                    groups[parseInt(input.id[1])][rival].pp -= 1;
                    document.getElementById(`pp${groups[input.id[1]][rival].country}`).innerHTML = groups[parseInt(input.id[1])][rival].pp;
                } else if (keySpecial == keyRival) {
                    groups[parseInt(input.id[1])][us].pe -= 1;
                    document.getElementById(`pe${groups[input.id[1]][us].country}`).innerHTML = groups[parseInt(input.id[1])][us].pe;
                    groups[parseInt(input.id[1])][rival].pe -= 1;
                    document.getElementById(`pe${groups[input.id[1]][rival].country}`).innerHTML = groups[parseInt(input.id[1])][rival].pe;
                } else {
                    groups[parseInt(input.id[1])][us].pp -= 1;
                    document.getElementById(`pp${groups[input.id[1]][us].country}`).innerHTML = groups[parseInt(input.id[1])][us].pp;
                    groups[parseInt(input.id[1])][rival].pg -= 1;
                    document.getElementById(`pg${groups[input.id[1]][rival].country}`).innerHTML = groups[parseInt(input.id[1])][rival].pg;
                }
            }
            groups[parseInt(input.id[1])][us].points = groups[parseInt(input.id[1])][us].pg * 3 + groups[parseInt(input.id[1])][us].pe;
            document.getElementById(`points${groups[input.id[1]][us].country}`).innerHTML = groups[parseInt(input.id[1])][us].points;
        } else {
            keySpecial = parseInt(document.getElementById(`${input.id[0]}${input.id[1]}${groups[input.id[1]][us].country}`).value)
            if (document.getElementById(`${input.id[0]}${input.id[1]}${groups[input.id[1]][rival].country}`).value != "") {
                if (key > keyRival) {
                    groups[parseInt(input.id[1])][us].pg += 1;
                    document.getElementById(`pg${groups[input.id[1]][us].country}`).innerHTML = groups[parseInt(input.id[1])][us].pg;
                    groups[parseInt(input.id[1])][rival].pp += 1;
                    document.getElementById(`pp${groups[input.id[1]][rival].country}`).innerHTML = groups[parseInt(input.id[1])][rival].pp;
                } else if (key == keyRival) {
                    groups[parseInt(input.id[1])][us].pe += 1;
                    document.getElementById(`pe${groups[input.id[1]][us].country}`).innerHTML = groups[parseInt(input.id[1])][us].pe;
                    groups[parseInt(input.id[1])][rival].pe += 1;
                    document.getElementById(`pe${groups[input.id[1]][rival].country}`).innerHTML = groups[parseInt(input.id[1])][rival].pe;
                } else {
                    groups[parseInt(input.id[1])][us].pp += 1;
                    document.getElementById(`pp${groups[input.id[1]][us].country}`).innerHTML = groups[parseInt(input.id[1])][us].pp;
                    groups[parseInt(input.id[1])][rival].pg += 1;
                    document.getElementById(`pg${groups[input.id[1]][rival].country}`).innerHTML = groups[parseInt(input.id[1])][rival].pg;
                }
            }
            groups[parseInt(input.id[1])][us].gfSecond += key;
            document.getElementById(`gf${groups[input.id[1]][us].country}`).innerHTML = groups[parseInt(input.id[1])][us].gfFirst + groups[parseInt(input.id[1])][us].gfSecond + groups[parseInt(input.id[1])][us].gfThird;
            groups[parseInt(input.id[1])][rival].gcSecond += key;
            document.getElementById(`gc${groups[input.id[1]][rival].country}`).innerHTML = groups[parseInt(input.id[1])][rival].gcFirst + groups[parseInt(input.id[1])][rival].gcSecond + groups[parseInt(input.id[1])][rival].gcThird;

            groups[parseInt(input.id[1])][us].dif = groups[parseInt(input.id[1])][us].gfFirst + groups[parseInt(input.id[1])][us].gfSecond + groups[parseInt(input.id[1])][us].gfThird - groups[parseInt(input.id[1])][us].gcFirst - groups[parseInt(input.id[1])][us].gcSecond - groups[parseInt(input.id[1])][us].gcThird;
            document.getElementById(`dif${groups[input.id[1]][us].country}`).innerHTML = groups[parseInt(input.id[1])][us].dif;
            groups[parseInt(input.id[1])][rival].dif = groups[parseInt(input.id[1])][rival].gfFirst + groups[parseInt(input.id[1])][rival].gfSecond + groups[parseInt(input.id[1])][rival].gfThird - groups[parseInt(input.id[1])][rival].gcFirst - groups[parseInt(input.id[1])][rival].gcSecond - groups[parseInt(input.id[1])][rival].gcThird;
            document.getElementById(`dif${groups[input.id[1]][rival].country}`).innerHTML = groups[parseInt(input.id[1])][rival].dif;

            groups[parseInt(input.id[1])][us].points = groups[parseInt(input.id[1])][us].pg * 3 + groups[parseInt(input.id[1])][us].pe;
            document.getElementById(`points${groups[input.id[1]][us].country}`).innerHTML = groups[parseInt(input.id[1])][us].points;
            groups[parseInt(input.id[1])][rival].points = groups[parseInt(input.id[1])][rival].pg * 3 + groups[parseInt(input.id[1])][rival].pe;
            document.getElementById(`points${groups[input.id[1]][rival].country}`).innerHTML = groups[parseInt(input.id[1])][rival].points;
        }
    }

    return keySpecial;

}

function groupOutcomeThree(rival, us, keySpecial, event, input) {

    var found = false;

    for (var i = 0; i < characters.length; i++) {
        if (event.key == characters[i]) {
            found = true;
        }
    }

    if (found) {
        var key = parseInt(event.key)
        var keyRival = parseInt(document.getElementById(`${input.id[0]}${input.id[1]}${groups[input.id[1]][rival].country}`).value)
        if (event.key == "Backspace") {
            groups[parseInt(input.id[1])][us].dif -= groups[parseInt(input.id[1])][us].gfThird;
            document.getElementById(`dif${groups[input.id[1]][us].country}`).innerHTML = groups[parseInt(input.id[1])][us].dif;
            groups[parseInt(input.id[1])][rival].dif += groups[parseInt(input.id[1])][us].gfThird;
            document.getElementById(`dif${groups[input.id[1]][rival].country}`).innerHTML = groups[parseInt(input.id[1])][rival].dif;
            groups[parseInt(input.id[1])][us].gfThird = 0;
            document.getElementById(`gf${groups[input.id[1]][us].country}`).innerHTML = groups[parseInt(input.id[1])][us].gfFirst + groups[parseInt(input.id[1])][us].gfSecond + groups[parseInt(input.id[1])][us].gfThird;
            groups[parseInt(input.id[1])][rival].gcThird = 0;
            document.getElementById(`gc${groups[input.id[1]][rival].country}`).innerHTML = groups[parseInt(input.id[1])][rival].gcFirst + groups[parseInt(input.id[1])][rival].gcSecond + groups[parseInt(input.id[1])][rival].gcThird;
            if (document.getElementById(`${input.id[0]}${input.id[1]}${groups[input.id[1]][rival].country}`).value != "") {
                if (keySpecial > keyRival) {
                    groups[parseInt(input.id[1])][us].pg -= 1;
                    document.getElementById(`pg${groups[input.id[1]][us].country}`).innerHTML = groups[parseInt(input.id[1])][us].pg;
                    groups[parseInt(input.id[1])][rival].pp -= 1;
                    document.getElementById(`pp${groups[input.id[1]][rival].country}`).innerHTML = groups[parseInt(input.id[1])][rival].pp;
                } else if (keySpecial == keyRival) {
                    groups[parseInt(input.id[1])][us].pe -= 1;
                    document.getElementById(`pe${groups[input.id[1]][us].country}`).innerHTML = groups[parseInt(input.id[1])][us].pe;
                    groups[parseInt(input.id[1])][rival].pe -= 1;
                    document.getElementById(`pe${groups[input.id[1]][rival].country}`).innerHTML = groups[parseInt(input.id[1])][rival].pe;
                } else {
                    groups[parseInt(input.id[1])][us].pp -= 1;
                    document.getElementById(`pp${groups[input.id[1]][us].country}`).innerHTML = groups[parseInt(input.id[1])][us].pp;
                    groups[parseInt(input.id[1])][rival].pg -= 1;
                    document.getElementById(`pg${groups[input.id[1]][rival].country}`).innerHTML = groups[parseInt(input.id[1])][rival].pg;
                }
            }
            groups[parseInt(input.id[1])][us].points = groups[parseInt(input.id[1])][us].pg * 3 + groups[parseInt(input.id[1])][us].pe;
            document.getElementById(`points${groups[input.id[1]][us].country}`).innerHTML = groups[parseInt(input.id[1])][us].points;
        } else {
            keySpecial = parseInt(document.getElementById(`${input.id[0]}${input.id[1]}${groups[input.id[1]][us].country}`).value)
            if (document.getElementById(`${input.id[0]}${input.id[1]}${groups[input.id[1]][rival].country}`).value != "") {
                if (key > keyRival) {
                    groups[parseInt(input.id[1])][us].pg += 1;
                    document.getElementById(`pg${groups[input.id[1]][us].country}`).innerHTML = groups[parseInt(input.id[1])][us].pg;
                    groups[parseInt(input.id[1])][rival].pp += 1;
                    document.getElementById(`pp${groups[input.id[1]][rival].country}`).innerHTML = groups[parseInt(input.id[1])][rival].pp;
                } else if (key == keyRival) {
                    groups[parseInt(input.id[1])][us].pe += 1;
                    document.getElementById(`pe${groups[input.id[1]][us].country}`).innerHTML = groups[parseInt(input.id[1])][us].pe;
                    groups[parseInt(input.id[1])][rival].pe += 1;
                    document.getElementById(`pe${groups[input.id[1]][rival].country}`).innerHTML = groups[parseInt(input.id[1])][rival].pe;
                } else {
                    groups[parseInt(input.id[1])][us].pp += 1;
                    document.getElementById(`pp${groups[input.id[1]][us].country}`).innerHTML = groups[parseInt(input.id[1])][us].pp;
                    groups[parseInt(input.id[1])][rival].pg += 1;
                    document.getElementById(`pg${groups[input.id[1]][rival].country}`).innerHTML = groups[parseInt(input.id[1])][rival].pg;
                }
            }
            groups[parseInt(input.id[1])][us].gfThird += key;
            document.getElementById(`gf${groups[input.id[1]][us].country}`).innerHTML = groups[parseInt(input.id[1])][us].gfFirst + groups[parseInt(input.id[1])][us].gfSecond + groups[parseInt(input.id[1])][us].gfThird;
            groups[parseInt(input.id[1])][rival].gcThird += key;
            document.getElementById(`gc${groups[input.id[1]][rival].country}`).innerHTML = groups[parseInt(input.id[1])][rival].gcFirst + groups[parseInt(input.id[1])][rival].gcSecond + groups[parseInt(input.id[1])][rival].gcThird;

            groups[parseInt(input.id[1])][us].dif = groups[parseInt(input.id[1])][us].gfFirst + groups[parseInt(input.id[1])][us].gfSecond + groups[parseInt(input.id[1])][us].gfThird - groups[parseInt(input.id[1])][us].gcFirst - groups[parseInt(input.id[1])][us].gcSecond - groups[parseInt(input.id[1])][us].gcThird;
            document.getElementById(`dif${groups[input.id[1]][us].country}`).innerHTML = groups[parseInt(input.id[1])][us].dif;
            groups[parseInt(input.id[1])][rival].dif = groups[parseInt(input.id[1])][rival].gfFirst + groups[parseInt(input.id[1])][rival].gfSecond + groups[parseInt(input.id[1])][rival].gfThird - groups[parseInt(input.id[1])][rival].gcFirst - groups[parseInt(input.id[1])][rival].gcSecond - groups[parseInt(input.id[1])][rival].gcThird;
            document.getElementById(`dif${groups[input.id[1]][rival].country}`).innerHTML = groups[parseInt(input.id[1])][rival].dif;

            groups[parseInt(input.id[1])][us].points = groups[parseInt(input.id[1])][us].pg * 3 + groups[parseInt(input.id[1])][us].pe;
            document.getElementById(`points${groups[input.id[1]][us].country}`).innerHTML = groups[parseInt(input.id[1])][us].points;
            groups[parseInt(input.id[1])][rival].points = groups[parseInt(input.id[1])][rival].pg * 3 + groups[parseInt(input.id[1])][rival].pe;
            document.getElementById(`points${groups[input.id[1]][rival].country}`).innerHTML = groups[parseInt(input.id[1])][rival].points;
        }
    }

    return keySpecial;

}

function roundOfSixteen() {
    document.querySelectorAll("img").forEach((participant) => {
        if (participant.className == "image-group round") {
            participant.addEventListener("click", () => {
                if (participant.id[1] == "0" || participant.id[1] == "1") {
                    if (participant.id[0] == "0") {
                        firstRound8.innerHTML = `
                            <img src="${participant.src}" alt="${participant.alt}" id="1${participant.id}" class="image-group round sr" >
                        `;
                    } else {
                        fivethRound8.innerHTML = `
                            <img src="${participant.src}" alt="${participant.alt}" id="2${participant.id}" class="image-group round sr" >
                        `;
                    }
                } else if (participant.id[1] == "2" || participant.id[1] == "3") {
                    if (participant.id[0] == "0") {
                        secondRound8.innerHTML = `
                            <img src="${participant.src}" alt="${participant.alt}" id="3${participant.id}" class="image-group round sr" >
                        `;
                    } else {
                        sixthRound8.innerHTML = `
                            <img src="${participant.src}" alt="${participant.alt}" id="4${participant.id}" class="image-group round sr" >
                        `;
                    }
                } else if (participant.id[1] == "4" || participant.id[1] == "5") {
                    if (participant.id[0] == "0") {
                        thirdRound8.innerHTML = `
                            <img src="${participant.src}" alt="${participant.alt}" id=5${participant.id}" class="image-group round sr" >
                        `;
                    } else {
                        seventhRound8.innerHTML = `
                            <img src="${participant.src}" alt="${participant.alt}" id="6${participant.id}" class="image-group round sr" >
                        `;
                    }
                } else if (participant.id[1] == "6" || participant.id[1] == "7") {
                    if (participant.id[0] == "0") {
                        fourthRound8.innerHTML = `
                            <img src="${participant.src}" alt="${participant.alt}" id="7${participant.id}" class="image-group round sr">
                        `;
                    } else {
                        eigthRound8.innerHTML = `
                            <img src="${participant.src}" alt="${participant.alt}" id="8${participant.id}" class="image-group round sr" >
                        `;
                    }
                }
                roundOfEigth()
            })
        };
    })
}

roundOfSixteen()

function roundOfEigth() {
    document.querySelectorAll("img").forEach((participant) => {
        if (participant.className == "image-group round sr") {
            participant.addEventListener("click", () => {
                if (participant.id[0] == "1" || participant.id[0] == "3") {
                    firstRound4.innerHTML = `
                        <img src="${participant.src}" alt="${participant.alt}" id="${participant.id}1" class="image-group round sm">
                    `;
                } else if (participant.id[0] == "5" || participant.id[0] == "7") {
                    secondRound4.innerHTML = `
                        <img src="${participant.src}" alt="${participant.alt}" id="${participant.id}2" class="image-group round sm">
                    `;
                } else if (participant.id[0] == "2" || participant.id[0] == "4") {
                    thirdRound4.innerHTML = `
                        <img src="${participant.src}" alt="${participant.alt}" id="${participant.id}3" class="image-group round sm">
                    `;
                } else {
                    fourthRound4.innerHTML = `
                        <img src="${participant.src}" alt="${participant.alt}" id="${participant.id}4" class="image-group round sm">
                    `;
                }
                semiFinal()
            })
        }
    })
}

function semiFinal() {
    document.querySelectorAll("img").forEach((participant) => {
        if (participant.className == "image-group round sm") {
            participant.addEventListener("click", () => {
                if (participant.id[6] == "1" || participant.id[6] == "2") {
                    firstRound2.innerHTML = `
                        <img src="${participant.src}" alt="${participant.alt}" class="image-group round fi">
                    `;
                } else {
                    secondRound2.innerHTML = `
                        <img src="${participant.src}" alt="${participant.alt}" class="image-group round fi">
                    `;
                }
                final()
            })
        }
    })
}

function final() {
    document.querySelectorAll("img").forEach((participant) => {
        if (participant.className == "image-group round fi") {
            participant.addEventListener("click", () => {
                finalRound.innerHTML = `
                    <img src="${participant.src}" alt="${participant.alt}" class="image-group">
                `;
            })
        }
    })
}














