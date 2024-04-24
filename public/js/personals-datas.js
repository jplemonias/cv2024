const INFOS = {
    pp: "pp.png",
    fullName: {
        name: "LEMONIAS",
        firstName: "Jean-Paul",
    },
    contact: {
        address: {
            number: "00",
            streetName: "Nom de Rue",
            zipCode: "38 100",
            city: "Grenoble",
        },
        phon: "+334 10 02 30 04",
        mail: "email@email.com",
    },
    aboutMe: [
        [
            "Mon parcours m'a d'abord conduit à une carrière d'électricien, qui m'a permis d'acquérir de solides compétences techniques et une rigueur professionnelle.",
            "Cherchant une reconversion, après deux années enrichissantes en tant que technicien en fibre optique."
        ],
        [
            "J'ai décidé de suivre ma passion pour les technologies, me découvrant un intérêt certain pour la programmation.",
            "Déterminé et curieux, j'ai commencé par un parcours d'autodidacte, explorant quelques langages et frameworks.",
            "L'intérêt confirmé et afin d'étayer solidement mon avenir professionnel dans ce domaine.",
        ],
        [
            "Je me suis alors orienté vers deux formations RNCP 5 une full stack Javascript et une portant sur plus amples languages.",
            "Cette dernière en alternance pour une mise en pratique de l'investissement d'apprentissage."
        ]
    ],
    formations: [
        {
            institution: "Le Campus Numérique In The Alps",
            city: "Grenoble (38)",
            learning: [
                {
                    dates: "Xxxx 0000 - Yyyy 0000",
                    degree: "RNCP Nv5 technicien développeur.",
                    Languages: [
                        '<i class="fa-brands fa-java"></i>',
                        '<i class="fa-brands fa-js"></i>',
                        '<i class="fa-brands fa-php"></i>',
                        '<i class="fa-solid fa-database"></i>',
                        '<i class="fa-brands fa-wordpress"></i>'
                    ],
                    optention: false
                }
            ]
        },
        {
            institution: "3Wacademy",
            city: "Paris (75)",
            learning: [
                {
                    dates: "Juin - Octobre 2o21",
                    degree: "RNCP Nv5 développeur Web et web mobile CCP2 full stack js.",
                    optention: true
                }
            ]
        },
        {
            institution: "autodidacte",
            city: "",
            learning: [
                {
                    dates: "fin 2o19 - Juin 2021",
                    degree: "acquérir de nouvelles connaissances en vue de devenir WebDev.",
                    optention: [
                        "Utilisation de:",
                        '<i class="fa fa-code text-darkGreenPerso p-pr5px" aria-hidden="true"></i>VisualStudioCode',
                        '<i class="fa-brands fa-github text-darkGreenPerso p-pr5px"></i> GitHub',
                        '<i class="fa fa-clipboard text-darkGreenPerso p-pr5px" aria-hidden="true"></i> WAMP / LAMP',
                        '<i class="fa fa-server text-darkGreenPerso p-pr5px" aria-hidden="true"></i> MySQL',
                        '<i class="fa fa-language text-darkGreenPerso p-pr5px" aria-hidden="true"></i><i class="fa-brands fa-html5" title="HTML-5"></i> <i class="fa-brands fa-css3-alt" title="CSS-3"></i> <i class="fa-brands fa-js" title="JavaScript"> <i class="fa-brands fa-php" title="PHP"></i></i>'
                    ]
                }
            ]
        },
        {
            institution: "GRETA nord Isère",
            city: "Grenoble (38)",
            learning: [
                {
                    dates: "2007 - 2009",
                    degree: "CAP préparation et realisation d'ouvrages électriques",
                    optention: true
                }
            ]
        },
        {
            institution: "Lycée Professionnel Privé Marc Seguin",
            city: "Annonay (o7)",
            learning: [
                {
                    dates: "2004 - 2006",
                    degree: "BEP électrotechnique",
                    optention: false
                },
                {
                    dates: "2004",
                    degree: "Diplôme National Du Brevet",
                    optention: true
                }
            ]
        }
    ],
    skills: [
        {
            titled: 'Permis de conduire',
            lvl: ['B']
        },
        {
            titled: 'JavaScript',
            lvl: 4
        },
        {
            titled: 'HTML / CSS',
            lvl: 3
        },
        {
            titled: 'PHP',
            lvl: 2.5
        },
        {
            titled: 'Java',
            lvl: 2
        },
        {
            titled: 'test',
            lvl: 0
        },
        {
            titled: 'obtention d\'un CONSUEL',
            lvl: ['Maison personnel']
        },
    ]
};

const GET_E_ID_ME = document.getElementById("me");
const GET_ME_IMG = GET_E_ID_ME.getElementsByTagName("img");

const GET_E_ID_FULLNAME = document.getElementById("fullName");
const GET_E_ID_ADDRESS = document.getElementById("address");
const GET_E_ID_CORRESPONDANCE = document.getElementById("correspondence");

const GET_E_ID_ABOUT_ME = document.getElementById("about_me");
const GET_ABOUT_ME_DIV = GET_E_ID_ABOUT_ME.getElementsByTagName("div");

const GET_E_ID_SKILLS = document.getElementById("skills");
const GET_SKILLS_DIV = GET_E_ID_SKILLS.getElementsByTagName("div");


function returnSrcImgStr() {
    return `./public/img/${INFOS.pp}`
};

function returnFullNameStr() {
    return `${INFOS.fullName.name} ${INFOS.fullName.firstName}`;
};

function returnFullAddressStr() {
    const STREET = `${INFOS.contact.address.number} ${INFOS.contact.address.streetName}`;
    const ZIPCITY = `${INFOS.contact.address.zipCode} ${INFOS.contact.address.city}`;
    return `<i class="fa fa-home" aria-hidden="true"></i><p>${STREET}</p><p>${ZIPCITY}</p>`;
};

function returnFullCorrespondenceStr() {
    const pPhon = `<p><i class="fa fa-phone" aria-hidden="true"></i> : ${INFOS.contact.phon}</p>`;
    const pMail = `<p><i class="fa fa-envelope" aria-hidden="true"></i> : ${INFOS.contact.mail}</p>`;

    return `${pPhon}${pMail}`;
};

function returnPForAboutMeStr(e) {
    let str = `<p>`;
    for (let i = 0; i < e.length; i++) {
        if (i === e.length - 1) {
            str += `${e[i]}</p>`;
        } else {
            str += `${e[i]} `;
        }
    }
    return str
};

function returnAboutMeStr() {
    let str = ``;
    for (let i = 0; i < INFOS.aboutMe.length; i++) {
        str += returnPForAboutMeStr(INFOS.aboutMe[i]);
    }
    return str
};

function returnSkillsStr() {
    let str = `<div class="margin-5t">`;
    for (let i = 0; i < INFOS.skills.length; i++) {
        str += returnOneSkillStr(INFOS.skills[i]);
    }
    str += `</div>`;
    return str
};

function returnOneSkillStr(e) {
    let str = ``;
    for (let i = 0; i < Object.keys(e).length; i++) {
        if (Object.keys(e)[i] === "titled") {
            str += `<p class="flex flex-row justify-between">${e.titled}`
        }
        if (Object.keys(e)[i] === "lvl") {
            if (typeof e.lvl === "number") {
                str += ` <span>${creatStars(e.lvl)}</span></p>`;
            } else {
                str += `</p>`;
                str += `${creatSkills(e.lvl)}`;
            }
        }
    }
    return str
};

function creatStars(e) {
    let str = ``;
    const IS_INT = e === parseInt(e, 10);

    for (let i = 0; i < 5; i++) {
        if (i < e && i + 1 < e || i < e && IS_INT) {
            str += `<i class="fa fa-star text-darkGreenPerso" aria-hidden="true"></i>`;
        } else if (i < e && i + 1 > e && !IS_INT) {
            str += `<i class="fa fa-star-half-alt text-darkGreenPerso" aria-hidden="true"></i>`;
        } else {
            str += `<i class="fa fa-star-o text-greyPerso" aria-hidden="true"></i>`;
        }
    }
    return str
};

function creatSkills(e) {
    let str = `<p>`;
    for (let i = 0; i < e.length; i++) {
        if (i < e.length - 1) {
            str += `${e[i]}, `;
        } else {
            str += `${e[i]}.`;
        }
    }
    str += `</p>`;
    return str;
};

GET_E_ID_FULLNAME.innerHTML = returnFullNameStr();
GET_E_ID_ADDRESS.innerHTML = returnFullAddressStr();
GET_E_ID_CORRESPONDANCE.innerHTML = returnFullCorrespondenceStr();
GET_ABOUT_ME_DIV[0].innerHTML = returnAboutMeStr();
GET_SKILLS_DIV[0].innerHTML = returnSkillsStr();
GET_ME_IMG[0].src = returnSrcImgStr();

function creatLearn(id, INFOlearning) {
    for (let i = 0; i < INFOlearning.length; i++) {
        creatElementWithContent(id, "p", INFOlearning[i].dates, i, "dates");
        creatElementWithContent(id, "p", INFOlearning[i].degree);
        if (INFOlearning[i].Languages) {
            creatElementWithContent(id, "p", creatLanguages(INFOlearning[i].Languages));
        }
        optentionCheckingType(id, INFOlearning[i], i)
    }
};

function optentionCheckingType(id, INFOlearning, i) {
    if (typeof INFOlearning.optention === "object") {
        return creatLearningArray(id, INFOlearning.optention)
    } else {
        creatElementWithContent(id, "p", INFOlearning.optention, i);
        if (!INFOlearning.optention) {
            creatElementWithContent(`${id}_${i}`, "del", "obtention", i);
        }
    }
    return creatElementWithContent(`${id}_${i}`, "span", INFOlearning.optention, i);
};

function creatLearningArray(id, INFOlearning) {
    for (let i = 0; i < INFOlearning.length; i++) {
        creatElementWithContent(id, "p", INFOlearning[i]);
    }
};

function creatLanguages(e) {
    let str = ``;
    for (let i = 0; i < e.length; i++) {
        str += `${e[i]} `;
    }
    return str;
};

function creatLearning() {
    for (let i = 0; i < INFOS.formations.length; i++) {
        const INFO = INFOS.formations[i];
        const TITLE = INFO.institution;
        const LEARN = TITLE.split(" ")[0];
        const ID = `learn_${LEARN}_${i}`;
        const ID_SPAN = `span_${LEARN}_${i}`;
        creatElementWithContent("editLearn", "div", "", i, LEARN);

        if (INFO.city.length > 0) {
            creatElementWithContent(ID, "h4", `${TITLE} `, i, LEARN);
            creatElementWithContent(ID_SPAN, "span", INFO.city);
        } else {
            creatElementWithContent(ID, "h4", TITLE);
        }

        creatLearn(ID, INFO.learning);
    }
};

function ready() {
    creatLearning();
}

document.addEventListener("DOMContentLoaded", ready);