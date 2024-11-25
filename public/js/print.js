function ready() {

    let msg = `Bonjour vous souhaitez imprimer mon CV\n`;
    msg += `Afin de profiter d'un meilleur confort de lecture en A4\n\n`;
    msg += `Dans les options d'impression, supprimez les marges.\n\n`;
    msg += `Merci pour l'intérêt porté.`;

    const links = document.getElementById("job").querySelectorAll("a");
    const cv_link = document.getElementById("cv_link");
    const mail = document.getElementById("correspondence").lastChild;
    const cv_link_ico = cv_link.querySelector("i");
    const re = /\s:\s/g;
    const cv_link_p = cv_link.getElementsByTagName("p");
    const cv_link_p_node = cv_link.querySelector("p");
    const cv_link_p_txt = cv_link_p[0].innerText;
    const cv_link_p_txt_print = cv_link_p_txt.replace(re, "");
    console.log(mail)
    window.onbeforeprint = function () {
        alert(msg);
        // if (count === 5) {
        //     addBreakPrintXP();
        // }
        for (let i = 0; i < links.length; i++) {
            links[i].classList.add("displayNone");
        };
        mail.classList.add("fontSizeForPrint");
        cv_link_p_node.classList.add("fontSizeForPrint");
        cv_link_p[0].innerHTML = cv_link_p_txt_print
    };

    window.onafterprint = function () {
        // if (count === 5) {
        //     removeBreakPrintXP();
        // }
        for (let i = 0; i < links.length; i++) {
            links[i].classList.remove("displayNone");
        };
        mail.classList.remove("fontSizeForPrint");
        cv_link_p_node.classList.remove("fontSizeForPrint");
        cv_link_p[0].innerHTML = cv_link_p_txt;
        cv_link_p_node.prepend(cv_link_ico);
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