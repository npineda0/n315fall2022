//'./' goes to the root folder
//import all(*) as the word MODEL
import * as MODEL from "./model.js"

function initListeners() {}
    //'=>' is the same as the anonymous function
    $("nav a").click((e) => {
        e.preventDefault();
        let btnID = e.currentTarget.id;
        console.log(btnID);

        MODEL.setCurrentPageContent(btnID);
    });

$(document).ready(function () {
    MODEL.setCurrentPageContent("home");
    initListeners();
});