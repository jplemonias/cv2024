function ready() {

    let msg = `Bonjour vous souhaitez imprimer mon CV\n`
    msg += `Afin de profiter d'un meilleur confort de lecture en A4\n\n`
    msg += `Dans les options d'impression, supprimez les marges.\n\n`
    msg += `Merci pour l'intérêt porté.`

    const links = document.getElementById("job").querySelectorAll("a");

    window.onbeforeprint = function () {
        alert(msg);
        // if (count === 5) {
        //     addBreakPrintXP();
        // }
        for (let i = 0; i < links.length; i++) {
            links[i].classList.add("invisible");
        };
    };

    window.onafterprint = function () {
        // if (count === 5) {
        //     removeBreakPrintXP();
        // }
        for (let i = 0; i < links.length; i++) {
            links[i].classList.remove("invisible");
        };
    };

}

document.addEventListener("DOMContentLoaded", ready);

// function addBreakPrintXP() {
//     const SEPARATOR1 = creatElementWithContent("job_fiberTech_2", "p", "");
//     const SEPARATOR2 = creatElementWithContent("job_fiberTech_2", "p", "");
//     SEPARATOR1.classList.add("pageBreakAfter");
//     SEPARATOR2.classList.add("pageBreakBefor");
//     const GET_BY_ID_job_fiberTech_2 = document.getElementById("job_fiberTech_2");
//     const PARENT_DIV = GET_BY_ID_job_fiberTech_2.parentNode;
//     PARENT_DIV.insertBefore(SEPARATOR1, GET_BY_ID_job_fiberTech_2);
//     PARENT_DIV.insertBefore(SEPARATOR2, GET_BY_ID_job_fiberTech_2);
// }

// function removeBreakPrintXP() {
//     document.querySelector(".pageBreakAfter").remove();
//     document.querySelector(".pageBreakBefor").remove();
// }