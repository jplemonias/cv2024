function createNewElement(e) {
    return document.createElement(e);
};

function addContentNewElement(e, content) {
    return e.innerHTML = content;
};

function addPaddingJob(e) {
    e.style.padding = "10px 0"
};
function addPaddingLearn(e) {
    e.style.padding = "5px 0"
};

function creatContentOneLearning(e, new_id) {
    e.id = `learn_${new_id}`;
    e.classList.add("margin-3pxt-3pxb");
    e.classList.add("breakForPrint");
    addPaddingLearn(e);
}

function creatContentOneJob(e, new_id) {
    e.id = `job_${new_id}`;
    e.classList.add("breakForPrint");
    addPaddingJob(e);
}

function creatTitleH4(e, new_id, prefix) {
    e.id = `${prefix}_${new_id}`;
    e.classList.add("font-bold");
}

function txtDecorationH4(e) {
    e.classList.add("underline");
    e.classList.add("decoration-greyPerso");
}

function creatElementWithContent(parentId, typeNewElement, content, idLoop, objectkey) {
    const ELEMENT = createNewElement(typeNewElement)

    const IN_DIV = typeNewElement === "div";
    const IN_I = typeNewElement === "i";
    const IN_H4 = typeNewElement === "h4";
    const IN_SPAN = typeNewElement === "span";
    const IN_P = typeNewElement === "p";

    const IN_DIV_editLearn = IN_DIV && parentId === "editLearn";
    const IN_DIV_editXp = IN_DIV && parentId === "editXp";

    const IN_I_PREV = IN_I && parentId === "prev";
    const IN_I_EXT = IN_I && parentId === "next";

    const IN_H4_IN_JOB = IN_H4 && parentId.split("_")[0] === "job";
    const IN_H4_IN_LEARN = IN_H4 && parentId.split("_")[0] === "learn";
    const IN_P_IN_LEARN = IN_P && parentId.split("_")[0] === "learn";

    const IN_OBTENTION_TRUE = IN_P_IN_LEARN && content === true;
    const IN_OBTENTION_FALSE = IN_P_IN_LEARN && content === false;

    const IN_SPAN_IN_LEARN = IN_SPAN && parentId.split("_")[0] === "learn";

    const IN_LOC = objectkey === "loc";
    const IN_DATE = objectkey === "dates";
    const IN_DATE_JOB = IN_DATE && parentId.split("_")[0] === "job";

    const NEW_ID = `${objectkey}_${idLoop}`;

    if (IN_DIV_editLearn) {
        creatContentOneLearning(ELEMENT, NEW_ID);
    }

    if (IN_DIV_editXp) {
        creatContentOneJob(ELEMENT, NEW_ID);
    }

    if (IN_H4) {
        creatTitleH4(ELEMENT, NEW_ID, 'h4');
        if (IN_H4_IN_JOB) {
            txtDecorationH4(ELEMENT);
        }
    }

    if (IN_SPAN || IN_LOC) {
        ELEMENT.classList.add("text-greyPerso");
    }

    if (IN_DATE) {
        ELEMENT.classList.add("calandar");
        ELEMENT.classList.add("text-darkGreenPerso");
    }

    if (IN_DATE_JOB) {
        ELEMENT.classList.add("paddingDatesJob");
    }

    if (IN_I_PREV || IN_I_EXT) {
        ELEMENT.classList.add("fa-solid");
        if (IN_I_PREV) {
            ELEMENT.classList.add("fa-angle-left");
        }
        if (IN_I_EXT) {
            ELEMENT.classList.add("fa-angles-right");
        }
    }

    // if (IN_OBTENTION_TRUE) {
    //     ELEMENT.id = `${parentId}_${idLoop}`;
    //     ELEMENT.classList.add("obtention");
    //     addContentNewElement(ELEMENT, "obtention");
    //     return document.getElementById(parentId).appendChild(ELEMENT);
    // }

    // if (IN_OBTENTION_FALSE) {
    //     ELEMENT.id = `${parentId}_${idLoop}`;
    //     ELEMENT.classList.add("obtention");
    //     return document.getElementById(parentId).appendChild(ELEMENT);
    // }

    if (IN_SPAN_IN_LEARN) {
        if (content) {
            ELEMENT.classList.remove("text-greyPerso");
            ELEMENT.classList.add("text-darkGreenPerso");
        }
        ELEMENT.classList.add("fa-solid");
        ELEMENT.classList.add("fa-trophy");
        ELEMENT.classList.add("p-pr5px");
        addContentNewElement(ELEMENT, "");
        return document.getElementById(parentId).appendChild(ELEMENT);
    }

    addContentNewElement(ELEMENT, content);
    return document.getElementById(parentId).appendChild(ELEMENT);
};

function removeVisibilityMain(e) {
    return e[0].classList.remove("visibilityHidden");
};

function ready() {
    removeVisibilityMain(document.getElementsByClassName("visibilityHidden"));
}

document.addEventListener("DOMContentLoaded", ready);