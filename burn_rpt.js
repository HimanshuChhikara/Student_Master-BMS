//*****************************Function For Client name select F2***********************
function Bindclient(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtCilentName") {


        document.getElementById("divclient").style.display = "block";
        aTag = eval(document.getElementById("txtCilentName"))
        var btag;
        var leftpos = 0;
        var toppos = 25;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divclient').scrollLeft;
        var scrolltop = document.getElementById('divclient').scrollTop;
        document.getElementById('divclient').style.left = document.getElementById("txtCilentName").offsetLeft + leftpos - tot + "px";
        document.getElementById('divclient').style.top = document.getElementById("txtCilentName").offsetTop + toppos - scrolltop + "px"; //"510px";

        var PCOMP_CODE = document.getElementById('hiddencompcode').value;
        var PCENT_CODE = document.getElementById('hiddencenter').value;
        var PDESC = document.getElementById('txtCilentName').value;
        var PSEACH = "";
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        burn_report.Bindclientname(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindclient_callback);

    }

    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtCilentName") {
            document.getElementById('hdnclient').value = "";
        }
    }
    else if (key == 27) {
        document.getElementById("divclient").style.display = "none";
        document.getElementById('txtCilentName').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "istclient") {

            return false;
        }
    }
    else if (key == 9 && event.shiftKey == true) {
        document.getElementById("divclient").style.display = "none";
        document.getElementById('txtAgencyName').focus();
        return false;
    }
    else if (key == 9) {
        document.getElementById("divclient").style.display = "none";
        document.getElementById('txtFromDate').focus();
        return false;
    }

        //else if (key == 9) {
        //    document.getElementById("divclient").style.display = "none";
        //    //document.getElementById('txtdes').focus();

        //}
    else if (key == 38) {
        if (document.getElementById("divclient").style.display == "block") {
            if (document.getElementById('istclient').value == '0') {
                document.getElementById('txtCilentName').focus();
            }
        }
    }

    else if (key == 40) {
        if (document.getElementById("divclient").style.display == "block") {
            document.getElementById("istclient").focus();
        }
    }

    else {
        document.getElementById("divclient").style.display = "block";
        aTag = eval(document.getElementById("txtCilentName"))
        var btag;
        var leftpos = 0;
        var toppos = 25;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divclient').scrollLeft;
        var scrolltop = document.getElementById('divclient').scrollTop;
        document.getElementById('divclient').style.left = document.getElementById("txtCilentName").offsetLeft + leftpos - tot + "px";
        document.getElementById('divclient').style.top = document.getElementById("txtCilentName").offsetTop + toppos - scrolltop + "px"; //"510px";

        var PCOMP_CODE = document.getElementById('hiddencompcode').value;
        var PCENT_CODE = document.getElementById('hiddencenter').value;
        var PDESC = document.getElementById('txtCilentName').value;
        var PSEACH = "G";
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        burn_report.Bindclientname(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindclient_callback);

    }
    //return false;
}
function bindclient_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("istclient");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select Client ---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].CLIENT_NAME, ds.Tables[0].Rows[i].CLIENT_CODE);
        }


    }

    document.getElementById('hdnclient').value = "";
    document.getElementById("istclient").selectedIndex = 1;
    // document.getElementById("istclient").focus();
    return false;
}

function filllclient(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtCilentName" || document.activeElement.id == "istclient") {
            document.getElementById("divclient").style.display = "none";
            document.getElementById('txtCilentName').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {

        if (document.getElementById("istclient").value == "0") {
            alert("Please Select Master Name");
            return false;
        }
        else {
            document.getElementById("divclient").style.display = "none";
            var lstvalue = document.getElementById('istclient').value;
            for (var k = 0; k < document.getElementById("istclient").length; k++) {
                if (document.getElementById('istclient').options[k].value == lstvalue) {
                    document.getElementById('hdnclient').value = document.getElementById('istclient').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtCilentName').value = document.getElementById('istclient').options[k].textContent;
                    else
                        document.getElementById('txtCilentName').value = document.getElementById('istclient').options[k].innerText;

                    break;
                }
            }
        }
        document.getElementById('txtCilentName').focus();

        return false;
    }

}
function FocusClient() {
    if (document.getElementById('txtCilentName').value == "-------- Select Client ---------") {
        document.getElementById('txtCilentName').value = "";
    }
    document.getElementById('txtCilentName').style.textAlign = "left";
    document.getElementById('txtCilentName').style.color = "black";
    document.getElementById('txtCilentName').style.backgroundColor = "#99FFFF";
}
function BlurClient() {
    document.getElementById('txtCilentName').style.backgroundColor = "white";
    if (document.getElementById('txtCilentName').value == "") {
        document.getElementById('txtCilentName').value = "";
        document.getElementById('txtCilentName').value = "-------- Select Client ---------";
        document.getElementById('txtCilentName').style.textAlign = "center";
        document.getElementById('txtCilentName').style.color = "gray";
    }

    else {
        document.getElementById('txtCilentName').style.textAlign = "left";
        document.getElementById('txtCilentName').style.color = "black";
    }
    //if (document.getElementById('hdnclient').value == "") {
    //    document.getElementById('txtCilentName').value = "";
    //    document.getElementById('txtCilentName').value = "-------- Select Client Name---------";
    //    document.getElementById('txtCilentName').style.textAlign = "center";
    //    document.getElementById('txtCilentName').style.color = "gray";
    //}

    return false;
}

//*****************************Function For Agency name select F2***********************
function Bindagencyname(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtAgencyName") {


        document.getElementById("divagename").style.display = "block";
        aTag = eval(document.getElementById("txtAgencyName"))
        var btag;
        var leftpos = 0;
        var toppos = 25;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divagename').scrollLeft;
        var scrolltop = document.getElementById('divagename').scrollTop;
        document.getElementById('divagename').style.left = document.getElementById("txtAgencyName").offsetLeft + leftpos - tot + "px";
        document.getElementById('divagename').style.top = document.getElementById("txtAgencyName").offsetTop + toppos - scrolltop + "px"; //"510px";

        var PCOMP_CODE = document.getElementById('hiddencompcode').value;
        var PCENT_CODE = document.getElementById('hiddencenter').value;
        var PDESC = document.getElementById('txtAgencyName').value;
        var PSEACH = "";
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        burn_report.Bindagenyname(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindagency_callback);

    }

    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtAgencyName") {
            document.getElementById('hdngencode').value = "";
        }
    }
    else if (key == 27) {
        document.getElementById("divagename").style.display = "none";
        document.getElementById('txtAgencyName').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "istagencyname") {

            return false;
        }
    }
    else if (key == 9 && event.shiftKey == true) {
        document.getElementById("divagename").style.display = "none";
        document.getElementById('ddlcenter').focus();
        return false;
    }
    else if (key == 9) {
        document.getElementById("divagename").style.display = "none";
        document.getElementById('txtCilentName').focus();
        return false;
    }

        //else if (key == 9) {
        //    document.getElementById("divagename").style.display = "none";
        //    // document.getElementById('txtdes').focus();
        //    // return false;
        //}
    else if (key == 38) {
        if (document.getElementById("divagename").style.display == "block") {
            if (document.getElementById('istagencyname').value == '0') {
                document.getElementById('txtAgencyName').focus();
            }
        }
    }

    else if (key == 40) {
        if (document.getElementById("divagename").style.display == "block") {
            document.getElementById("istagencyname").focus();
        }
    }

    else {
        document.getElementById("divagename").style.display = "block";
        aTag = eval(document.getElementById("txtAgencyName"))
        var btag;
        var leftpos = 0;
        var toppos = 25;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divagename').scrollLeft;
        var scrolltop = document.getElementById('divagename').scrollTop;
        document.getElementById('divagename').style.left = document.getElementById("txtAgencyName").offsetLeft + leftpos - tot + "px";
        document.getElementById('divagename').style.top = document.getElementById("txtAgencyName").offsetTop + toppos - scrolltop + "px"; //"510px";

        var PCOMP_CODE = document.getElementById('hiddencompcode').value;
        var PCENT_CODE = document.getElementById('hiddencenter').value;
        var PDESC = document.getElementById('txtAgencyName').value;
        var PSEACH = "G";
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        burn_report.Bindagenyname(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindagency_callback);

    }
    //return false;
}
function bindagency_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("istagencyname");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select Agency ---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].AGENCY_NAME, ds.Tables[0].Rows[i].AGENCY_CODE_SUBCODE);
        }


    }

    document.getElementById('hdngencode').value = "";
    document.getElementById("istagencyname").selectedIndex = 1;
    // document.getElementById("istagencyname").focus();
    return false;
}

function filllagency(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtAgencyName" || document.activeElement.id == "istagencyname") {
            document.getElementById("divagename").style.display = "none";
            document.getElementById('txtAgencyName').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {

        if (document.getElementById("istagencyname").value == "0") {
            alert("Please Select Master Name");
            return false;
        }
        else {
            document.getElementById("divagename").style.display = "none";
            var lstvalue = document.getElementById('istagencyname').value;
            for (var k = 0; k < document.getElementById("istagencyname").length; k++) {
                if (document.getElementById('istagencyname').options[k].value == lstvalue) {
                    document.getElementById('hdngencode').value = document.getElementById('istagencyname').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtAgencyName').value = document.getElementById('istagencyname').options[k].textContent;
                    else
                        document.getElementById('txtAgencyName').value = document.getElementById('istagencyname').options[k].innerText;

                    break;
                }
            }
        }
        document.getElementById('txtAgencyName').focus();

        return false;
    }

}
function FocusAgency() {
    if (document.getElementById('txtAgencyName').value == "-------- Select Agency ---------") {
        document.getElementById('txtAgencyName').value = "";
    }
    document.getElementById('txtAgencyName').style.textAlign = "left";
    document.getElementById('txtAgencyName').style.color = "black";
    document.getElementById('txtAgencyName').style.backgroundColor = "#99FFFF";
}
function BlurAgency() {
    document.getElementById('txtAgencyName').style.backgroundColor = "white";
    if (document.getElementById('txtAgencyName').value == "") {
        document.getElementById('txtAgencyName').value = "";
        document.getElementById('txtAgencyName').value = "-------- Select Agency ---------";
        document.getElementById('txtAgencyName').style.textAlign = "center";
        document.getElementById('txtAgencyName').style.color = "gray";
    }

    else {
        document.getElementById('txtAgencyName').style.textAlign = "left";
        document.getElementById('txtAgencyName').style.color = "black";
    }
    //if (document.getElementById('hdngencode').value == "") {
    //    document.getElementById('txtAgencyName').value = "";
    //    document.getElementById('txtAgencyName').value = "-------- Select Agency Name---------";
    //    document.getElementById('txtAgencyName').style.textAlign = "center";
    //    document.getElementById('txtAgencyName').style.color = "gray";
    //}

    return false;
}



//********************************************************executive(f2)*****************************************//
//========================================= bind excutive f2 =====================================
function Bindexcutive(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtExecutive") {


        document.getElementById("divexcutive").style.display = "block";
        aTag = eval(document.getElementById("txtExecutive"))
        var btag;
        var leftpos = 0;
        var toppos = 22;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divexcutive').scrollLeft;
        var scrolltop = document.getElementById('divexcutive').scrollTop;
        document.getElementById('divexcutive').style.left = document.getElementById("txtExecutive").offsetLeft + leftpos - tot + "px";
        document.getElementById('divexcutive').style.top = document.getElementById("txtExecutive").offsetTop + toppos - scrolltop + "px"; //"510px";
        var PCOMP_CODE = document.getElementById('hiddencompcode').value;
        var PDESC = document.getElementById('txtExecutive').value.toUpperCase()
        var PSEACH = "";
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        burn_report.excutive(PCOMP_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindexcutive_callback);


    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtExecutive") {
            document.getElementById('hdnexcutive').value = "";
        }
    }
    else if (key == 27) {
        document.getElementById("divexcutive").style.display = "none";
        document.getElementById('txtExecutive').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "istexcutive") {
            return false;
        }
        //document.getElementById("divexcutive").style.display = "none";
    }

    else if (key == 9 && event.shiftKey == false) {
        document.getElementById("divexcutive").style.display = "none";
        document.getElementById('txtCaption').focus();
        return false;
    }
    else if (key == 9 && event.shiftKey == true) {
        return true;
    }
    else if (key == 38) {
        if (document.getElementById("divexcutive").style.display == "block") {
            if (document.getElementById('istexcutive').value == '0') {
                document.getElementById('txtExecutive').focus();
            }
        }
    }

    else if (key == 40) {
        if (document.getElementById("divexcutive").style.display == "block") {
            document.getElementById("istexcutive").focus();
        }
    }
    else {
        document.getElementById("divexcutive").style.display = "block";
        aTag = eval(document.getElementById("txtExecutive"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divexcutive').scrollLeft;
        var scrolltop = document.getElementById('divexcutive').scrollTop;
        document.getElementById('divexcutive').style.left = document.getElementById("txtExecutive").offsetLeft + leftpos - tot + "px";
        document.getElementById('divexcutive').style.top = document.getElementById("txtExecutive").offsetTop + toppos - scrolltop + "px"; //"510px";

        var PCOMP_CODE = document.getElementById('hiddencompcode').value;
        var PDESC = document.getElementById('txtExecutive').value.toUpperCase()
        var PSEACH = "G";
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        burn_report.excutive(PCOMP_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindexcutive_callback);


    }
}
function bindexcutive_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("istexcutive");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("----- Select Executive -----", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].EXEC_NAME, ds.Tables[0].Rows[i].EXEC_CODE);
        }


    }

    document.getElementById('hdnexcutive').value = "";
    document.getElementById("istexcutive").selectedIndex = 1;
    //document.getElementById("txtExecutive").focus();
    return false;
}

function filllexcutive(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtExecutive" || document.activeElement.id == "istexcutive") {
            document.getElementById("divexcutive").style.display = "none";
            document.getElementById('txtExecutive').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {
        if (document.getElementById("istexcutive").value == "0") {
            alert("Please Select Excutive  Name");
            return false;
        }
        else {
            document.getElementById("divexcutive").style.display = "none";
            var lstvalue = document.getElementById('istexcutive').value;
            for (var k = 0; k < document.getElementById("istexcutive").length; k++) {
                if (document.getElementById('istexcutive').options[k].value == lstvalue) {
                    document.getElementById('hdnexcutive').value = document.getElementById('istexcutive').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtExecutive').value = document.getElementById('istexcutive').options[k].textContent;
                    else
                        document.getElementById('txtExecutive').value = document.getElementById('istexcutive').options[k].innerText;

                    break;
                }
            }
        }

        document.getElementById('txtExecutive').focus();
        return false;
    }
}
function focus_excutive() {
    document.getElementById('txtExecutive').style.backgroundColor = "#99FFFF";
    if (document.getElementById('txtExecutive').value == "----- Select Executive -----") {
        document.getElementById('txtExecutive').value = "";
    }
    document.getElementById('txtExecutive').style.textAlign = "left";
    document.getElementById('txtExecutive').style.textTransform = "uppercase";

    document.getElementById('txtExecutive').style.color = "black";
    return false;
}
function blur_excutive() {
    document.getElementById('txtExecutive').style.backgroundColor = "white";
    if (document.getElementById('txtExecutive').value == "") {
        document.getElementById('txtExecutive').value = "";
        document.getElementById('txtExecutive').value = "----- Select Executive -----";
        document.getElementById('txtExecutive').style.textAlign = "left";
        //  document.getElementById('txtExecutive').style.textTransform = "capitalize";

        document.getElementById('txtExecutive').style.color = "gray";
    }
    else {
        document.getElementById('txtExecutive').style.textAlign = "left";
        document.getElementById('txtExecutive').style.color = "black";
    }

    return false;
}

//********************************************************ENTER-TAB**********************************************//
function Entertabfun(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    document.onkeydown = function (e) {
        if (e != undefined) {
            if (e.ctrlKey && e.keyCode === 83) {
                e.preventDefault();
                if (document.getElementById('btnsave1').disabled == false) {
                    document.getElementById('btnsave1').click();
                    //SaveClick();
                    return false;
                }
            }
            else if (e.ctrlKey && e.keyCode === 13) {
                e.preventDefault();
                if (document.getElementById('btncreate').disabled == false) {

                    document.getElementById('btncreate').click();
                    return false;
                }
                if (document.getElementById('detail').style.display == "none") {

                    if (document.getElementById('btnnew').disabled == false) {
                        document.getElementById('btnnew').click();
                        return false;
                    }
                }


            }

            else if (e.ctrlKey && e.keyCode === 82) {
                e.preventDefault();
                if (document.getElementById('btnclear1').disabled == false) {
                    document.getElementById('btnclear1').click();

                    return false;
                }
            }

            else if (e.ctrlKey && e.keyCode === 77) {
                e.preventDefault();
                if (document.getElementById('btnedit').disabled == false) {
                    document.getElementById('btnedit').click();
                    // ModifyClick();
                    return false;
                }
            }

            else if (e.ctrlKey && e.keyCode === 46) {
                e.preventDefault();
                if (document.getElementById('btndelete').disabled == false) {
                    document.getElementById('btndelete').click();
                    //DeleteClick();
                    return false;
                }
            }

            else if (e.ctrlKey && e.keyCode === 69) {
                e.preventDefault();
                if (document.getElementById('btnview').disabled == false) {
                    document.getElementById('btnview').click();
                    //DeleteClick();
                    return false;
                }
            }

            else if (e.ctrlKey && e.keyCode === 70) {
                e.preventDefault();
                if (document.getElementById('btnForm').disabled == false) {
                    document.getElementById('btnForm').click();
                    //DeleteClick();
                    return false;
                }
            }

            else if (e.ctrlKey && e.keyCode === 37) {
                e.preventDefault();
                if (document.getElementById('btnPrev').disabled == false) {
                    document.getElementById('btnPrev').click();
                    //DeleteClick();
                    return false;
                }
            }

            else if (e.ctrlKey && e.keyCode === 39) {
                e.preventDefault();
                if (document.getElementById('btnNext').disabled == false) {
                    document.getElementById('btnNext').click();
                    //DeleteClick();
                    return false;
                }
            }

            else if (e.ctrlKey && e.keyCode === 36) {
                e.preventDefault();
                if (document.getElementById('btnFirst').disabled == false) {
                    document.getElementById('btnFirst').click();
                    //DeleteClick();
                    return false;
                }
            }

            else if (e.ctrlKey && e.keyCode === 35) {
                e.preventDefault();
                if (document.getElementById('btnLast').disabled == false) {
                    document.getElementById('btnLast').click();
                    //DeleteClick();
                    return false;
                }
            }
            else if (e.ctrlKey && e.keyCode === 88) {
                e.preventDefault();
                if (document.getElementById('btnback').disabled == false) {
                    document.getElementById('btnback').click();
                    //ExitClick();
                    return false;
                }
            }

        }
    };


    if (key == 13) {
        if (document.activeElement.id == "txtchannel") {
            if (document.getElementById('txtTeamName').disabled == false)
                document.getElementById('txtTeamName').focus();
            return false;
        }
        if (document.activeElement.id == "txtTeamName") {
            if (document.getElementById('txtExecutive').disabled == false)
                document.getElementById('txtExecutive').focus();
            return false;
        }
        if (document.activeElement.id == "txtExecutive") {
            if (document.getElementById('txtAgencyName').disabled == false)
                document.getElementById('txtAgencyName').focus();
            return false;
        }

        if (document.activeElement.id == "txtAgencyName") {
            if (document.getElementById("divagename").style.display != "none") {
                filllagency(event);
            }
            if (document.getElementById('txtCilentName').disabled == false)
                document.getElementById('txtCilentName').focus();
            return false;
        }
        if (document.activeElement.id == "txtCilentName") {
            if (document.getElementById("divclient").style.display != "none") {
                filllclient(event);
            }
            if (document.getElementById('txtbookingno').disabled == false)
                document.getElementById('txtbookingno').focus();
            return false;
        }

        if (document.activeElement.id == "txtbookingno") {
          
            if (document.getElementById('txtbillno').disabled == false)
                document.getElementById('txtbillno').focus();
            return false;
        }
        if (document.activeElement.id == "txtbillno") {

            if (document.getElementById('txtFromDate').disabled == false)
                document.getElementById('txtFromDate').focus();
            return false;
        }
        if (document.activeElement.id == "txtFromDate") {

            if (document.getElementById('txtToDate').disabled == false)
                document.getElementById('txtToDate').focus();
            return false;
        }
        if (document.activeElement.id == "txtToDate") {

            if (document.getElementById('drpRepDes').disabled == false)
                document.getElementById('drpRepDes').focus();
            return false;
        }
               if (document.activeElement.id == "drpRepDes") {
                   if (document.getElementById('btnrunrept').disabled == false)
                       document.getElementById('btnrunrept').focus();
            return false;
        }
        else if (document.activeElement.type == "button" || document.activeElement.type == "submit" || document.activeElement.type == "image") {
            return key;
        }
    }

}




//========================================= bind teamname f2 =====================================
function Bindteam(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtTeamName") {


        document.getElementById("divteam").style.display = "block";
        aTag = eval(document.getElementById("txtTeamName"))
        var btag;
        var leftpos = 0;
        var toppos = 22;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divteam').scrollLeft;
        var scrolltop = document.getElementById('divteam').scrollTop;
        document.getElementById('divteam').style.left = document.getElementById("txtTeamName").offsetLeft + leftpos - tot + "px";
        document.getElementById('divteam').style.top = document.getElementById("txtTeamName").offsetTop + toppos - scrolltop + "px"; //"510px";
        var pcompcode = document.getElementById('hiddencompcode').value;
        var pexeteam = document.getElementById('txtTeamName').value;
  
        burn_report.teamname(pcompcode, pexeteam, bindteamname_callback);


    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtTeamName") {
            document.getElementById('hdnexcutive').value = "";
        }
    }
    else if (key == 27) {
        document.getElementById("divteam").style.display = "none";
        document.getElementById('txtTeamName').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "lstteam") {
            return false;
        }
        //document.getElementById("divteam").style.display = "none";
    }

    else if (key == 9 && event.shiftKey == false) {
        document.getElementById("divteam").style.display = "none";
        document.getElementById('txtCaption').focus();
        return false;
    }
    else if (key == 9 && event.shiftKey == true) {
        return true;
    }
    else if (key == 38) {
        if (document.getElementById("divteam").style.display == "block") {
            if (document.getElementById('lstteam').value == '0') {
                document.getElementById('txtTeamName').focus();
            }
        }
    }

    else if (key == 40) {
        if (document.getElementById("divteam").style.display == "block") {
            document.getElementById("lstteam").focus();
        }
    }
    else {
        document.getElementById("divteam").style.display = "block";
        aTag = eval(document.getElementById("txtTeamName"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divteam').scrollLeft;
        var scrolltop = document.getElementById('divteam').scrollTop;
        document.getElementById('divteam').style.left = document.getElementById("txtTeamName").offsetLeft + leftpos - tot + "px";
        document.getElementById('divteam').style.top = document.getElementById("txtTeamName").offsetTop + toppos - scrolltop + "px"; //"510px";

        var pcompcode = document.getElementById('hiddencompcode').value;
        var pexeteam = document.getElementById('txtTeamName').value;

        burn_report.teamname(pcompcode, pexeteam, bindteamname_callback);



    }
}
function bindteamname_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("lstteam");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("----- Select Team -----", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].EXEC_TEAM_NAME, ds.Tables[0].Rows[i].EXEC_TEAM_CODE);
        }


    }

    document.getElementById('hdnexcutive').value = "";
    document.getElementById("lstteam").selectedIndex = 1;
    document.getElementById("txtTeamName").focus();
    return false;
}

function filllteam(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtTeamName" || document.activeElement.id == "lstteam") {
            document.getElementById("divteam").style.display = "none";
            document.getElementById('txtTeamName').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {
        if (document.getElementById("lstteam").value == "0") {
            alert("Please Select Excutive  Name");
            return false;
        }
        else {
            document.getElementById("divteam").style.display = "none";
            var lstvalue = document.getElementById('lstteam').value;
            for (var k = 0; k < document.getElementById("lstteam").length; k++) {
                if (document.getElementById('lstteam').options[k].value == lstvalue) {
                    document.getElementById('hdnexcutive').value = document.getElementById('lstteam').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtTeamName').value = document.getElementById('lstteam').options[k].textContent;
                    else
                        document.getElementById('txtTeamName').value = document.getElementById('lstteam').options[k].innerText;

                    break;
                }
            }
        }

        document.getElementById('txtTeamName').focus();
        return false;
    }
}
function focusteam() {
    document.getElementById('txtTeamName').style.backgroundColor = "#99FFFF";
    if (document.getElementById('txtTeamName').value == "----- Select Team -----") {
        document.getElementById('txtTeamName').value = "";
    }
    document.getElementById('txtTeamName').style.textAlign = "left";
    document.getElementById('txtTeamName').style.textTransform = "capitalize";

    document.getElementById('txtTeamName').style.color = "black";
    return false;
}
function blurteam() {
    document.getElementById('txtTeamName').style.backgroundColor = "white";
    if (document.getElementById('txtTeamName').value == "") {
        document.getElementById('txtTeamName').value = "";
        document.getElementById('txtTeamName').value = "----- Select Team -----";
        document.getElementById('txtTeamName').style.textAlign = "center";
        //  document.getElementById('txtTeamName').style.textTransform = "capitalize";

        document.getElementById('txtTeamName').style.color = "gray";
    }
    else {
        document.getElementById('txtTeamName').style.textAlign = "left";
        document.getElementById('txtTeamName').style.color = "black";
    }

    return false;

}


