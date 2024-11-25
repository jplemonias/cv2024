const JOBS = {
    webDev: [
        {
            jobName: "Développeur Web"
        },
        {
            job: "Développeur Web",
            company: "CGI",
            companyLoc: "Grenoble (38)",
            dates: "2022 - 2023",
            tasks: [
                "En poste chez Schneider Electric (IntenCity).",
                "- En équipe <strong>Agile (Scrum)</strong> majoritairement basée en Inde.",
                "- Suivit du cycle de vie de développement logiciel: <strong>Jira</strong>.",
                "- Développement: <strong>StiboSystems</strong>.",
                "- Outils: <strong>Visual Studio Code</strong> / <strong>Github</strong>.",
                "- Languages: <strong>Java</strong>, <strong>JavaScript</strong>, <strong>XML</strong>, <strong>Bash</strong>.",
            ],
            loc: "Grenoble (38)"
        }
    ],
    extra: [
        {
            jobName: "Modérateur Discord"
        },
        {
            job: "Modérateur Discord",
            company: "TapTap",
            companyLoc: "Shanghai",
            dates: "mai 2o19 - juilet 2o19",
            tasks: [
                "- Modération de la partie EN.",
                "- Développement des premiers webhooks."
            ],
            loc: "Région chine"
        }
    ],
    fiberTech: [
        {
            jobName: "Technicien Fibre"
        },
        {
            job: "Technicien fibre",
            company: "Fibrolec",
            companyLoc: "Paris (75)",
            dates: "aout 2019 - juin 2o2o",
            tasks: [
                "Sous-traitance pour CIRCET",
                "FAI : Free",
                "",
                "D3",
                "- Mêmes tâches que chez ND telecom ci-dessous."
            ],
            loc: "Région Grenobloise, Isère (38)"
        },
        {
            job: "Technicien fibre",
            company: "ND telecom",
            companyLoc: "Panissage (38)",
            dates: "2o16 - 2o17",
            tasks: [
                " Sous-traitance pour Eiffage ENERGIE/CIRCET",
                "FAI : Orange et Free",
                " ",
                "D3",
                "- Pose, raccordement et mise en service de PTO.",
                "- Pose et mise en service de matériel FAI.",
                "D2",
                "- Lecture de plan, tirage de câble",
                "- Montage et pose PMZ.",
                "- Soudures aux points de raccordement et tiroir",
                "- Prises de mesures réflectométriques",
                "- Remise de chantier.",
                "Général: balisage et utilisation de PEMP en milieu urbain."
            ],
            loc: "Régions Savoie (73), Haute-Savoie (74), Rhône (69)"
        }
    ],
    elec: [
        {
            jobName: "Electricien"
        },
        {
            job: "Électricien",
            company: "EIFFAGE ENERGIE RHONE ALPES",
            companyLoc: "Les Abrets (38)",
            dates: "septembre 2015 - septembre 2016",
            tasks: [
                "Pose, raccordement et mise en service de compteur, disjoncteur, CIBE, RMBT et autre"
            ],
            loc: "Régions Savoie (73), Haute-Savoie (74)"
        },
        {
            job: "Électricien",
            company: "I.D.E.E.",
            companyLoc: "Eybens (38)",
            dates: "2007 - 2015 (8 ans)",
            tasks: [
                "Secteur principal: Soutraitance pour CHUBB sécurité / SICLI.",
                "- Installation pose et raccordement de matériel de prévention d’incendie.",
                "- Centrale incendie, détecteurs, système d'extinction autonome et autre",
                "- Lecture de plan, étude de cheminement, réalisation, mise en service.",
                "- Travaux en hauteur, utilisation régulière de PEMP.",
                "- Travaux dans locaux dits à risque.",
                "- Respect des consignes EHS.",
                "Secteur secondaire: Réalisation d'ouvrages électriques généraux, d'ordre domestique et tertiaire.",
                "- Remise en conformité d’hôtel de station, pour un promoteur de voyage touristique Anglais.",
                "- Vérification de points remise aux normes demandé par le bureau de contrôle."
            ],
            loc: "Régions Isère (38), Savoie (73), Haute-Savoie (74)"
        }
    ],
    other: [
        {
            jobName: "Emplois divers"
        },
        {
            job: "Emplois divers",
            company: "Intérim",
            companyLoc: "",
            dates: "2oo6 - 2oo7",
            tasks: [
                "- manutention,",
                "- surveillance de ligne en 3-8,",
                "- ménages d’entreprises d’immeubles,"
            ],
            loc: "France"
        }
    ]
};

const PREV = document.querySelector("#prev");
const NEXT = document.querySelector("#next");

creatElementWithContent("prev", "i", "");
creatElementWithContent("next", "i", "");

function tasksTxt(t) {
    let str = ``
    for (let i = 0; i < t.length; i++) {
        if (t[i].length === 0) {
            str += `<br>`
        } else {
            str += `<p>${t[i]}</p>`
        }
    };
    return str;
};

function creatExperienceFull() {
    for (const PROPERTY in JOBS) {
        creatExperience(PROPERTY)
    }
};

function creatCompanySpan(e, i, content) {
    const ID_FOR_SPAN = `h4_${e}_${i}`;
    creatElementWithContent(ID_FOR_SPAN, "span", content);
};

function creatCompany(e, i, parentId) {
    creatElementWithContent(parentId, "h4", `${e.job} / `, i, e.company);
    const COMPANY_LOC = e.companyLoc;
    const HAVE_COMPANY_LOC = COMPANY_LOC.length > 0;
    if (HAVE_COMPANY_LOC) {
        const COMPANY_AND_LOC = `${e.company}, ${COMPANY_LOC}`;
        creatCompanySpan(e.company, i, COMPANY_AND_LOC);
    } else {
        creatCompanySpan(e.company, i, e.company);
    }
};

function creatExperience(job) {
    for (let i = 1; i < Object.keys(JOBS[job]).length; i++) {
        const JOB = JOBS[job][i];
        const ID = `job_${job}_${i}`;

        creatElementWithContent("editXp", "div", "", i, job);

        const COMPANY = JOBS[job][i].company;
        const HAVE_COMPANY = COMPANY.length > 0;
        if (HAVE_COMPANY) {
            creatCompany(JOB, i, ID);
        } else {
            creatElementWithContent(ID, "h4", JOB.job,);
        }

        creatElementWithContent(ID, "p", JOB.dates, i, "dates");
        creatElementWithContent(ID, "div", tasksTxt(JOB.tasks));
        creatElementWithContent(ID, "p", JOB.loc, i, "loc");
    }
};

let count = 0;
const KEYS_JOBS = Object.keys(JOBS);
const NUM_OF_JOBS = KEYS_JOBS.length;

function toogleClass(e, del, add) {
    e.classList.remove(del);
    e.classList.add(add);
}

PREV.addEventListener("click", (e) => {
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/
    //  	                                           /
    // specific this CV                                /
    //  	                                           /
    // dodge extra                                     /
    if (count === 2) {                                  //
        if (PREV.lastChild.classList[1] === "fa-angles-left") {
            toogleClass(PREV.lastChild, "fa-angles-left", "fa-angle-left");
        }
        count--;                                       //
    }                                                  //
    // creat extra/other xp                            /
    if (count === KEYS_JOBS.length) {                  // 
        if (NEXT.lastChild.classList[1] === "fa-angle-right") {
            toogleClass(NEXT.lastChild, "fa-angle-right", "fa-angles-right");
        }
        toogleClass(PREV.lastChild, "fa-angle-left", "fa-angles-left");
        count--;                                       //
        return counting();                             //
    }                                                  //
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/
    if (count === 0) {
        if (NEXT.lastChild.classList[1] === "fa-angles-right") {
            toogleClass(NEXT.lastChild, "fa-angles-right", "fa-angle-right");
        }
        toogleClass(PREV.lastChild, "fa-angle-left", "fa-angles-left");
        count = NUM_OF_JOBS;
        return counting();
    }
    count--;
    e.stopPropagation()
    return counting();
});

NEXT.addEventListener("click", (e) => {
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/
    //  	                                           /
    // specific this CV                                /
    //  	                                           /
    // dodge extra                                     /
    if (count === 0) {                                 //
        if (PREV.lastChild.classList[1] === "fa-angle-left") {
            toogleClass(PREV.lastChild, "fa-angle-left", "fa-angles-left");
        }
        count++;                                       //
    }                                                  //
    // creat extra/other xp                            /
    if (count === 4) {
        toogleClass(NEXT.lastChild, "fa-angles-right", "fa-angle-right");
        count++;                                       //
        return counting();                             //
    }                                                  //
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/
    if (count === NUM_OF_JOBS) {
        if (PREV.lastChild.classList[1] === "fa-angles-left") {
            toogleClass(PREV.lastChild, "fa-angles-left", "fa-angle-left");
        }
        toogleClass(NEXT.lastChild, "fa-angle-right", "fa-angles-right");
        count = 0;
        return counting();
    }
    count++;
    return counting();
});

function deleteExperience() {
    document.querySelector("#editXp").innerHTML = "";
}

function editWork(str) {
    document.querySelector("#job").querySelector("p").innerHTML = str;
    document.getElementsByTagName("title")[0].innerHTML = `C.V. ${str}`;
}

function counting() {
    switch (KEYS_JOBS[count]) {
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/
        //  	                                         /
        // specific case for this CV                     /
        case KEYS_JOBS[NUM_OF_JOBS - 1]:                 //
            editWork("Autres experiences")               //
            deleteExperience()                           //
            creatExperience(KEYS_JOBS[1]);               //
            creatExperience(KEYS_JOBS[count]);           //
            break;                                       //
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/
        case undefined:
            editWork("Toutes mes expériences")
            deleteExperience()
            creatExperienceFull();
            break;
        default:
            editWork(JOBS[KEYS_JOBS[count]][0].jobName)
            deleteExperience()
            creatExperience(KEYS_JOBS[count]);
    }
}

function ready() {
    editWork(JOBS[KEYS_JOBS[count]][0].jobName)
    creatExperience('webDev');
}

document.addEventListener("DOMContentLoaded", ready);
