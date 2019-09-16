function Bindagencyname(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtagncy") {


        document.getElementById("divagename").style.display = "block";
        aTag = eval(document.getElementById("txtagncy"))
        var btag;
        var leftpos = 0;
        var toppos = 24;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divagename').scrollLeft;
        var scrolltop = document.getElementById('divagename').scrollTop;
        document.getElementById('divagename').style.left = document.getElementById("txtagncy").offsetLeft + leftpos - tot + "px";
        document.getElementById('divagename').style.top = document.getElementById("txtagncy").offsetTop + toppos - scrolltop + "px"; //"510px";

        var PCOMP_CODE = document.getElementById('hiddencompcode').value;
        var PCENT_CODE = document.getElementById('hiddencenter').value;
        var PDESC = document.getElementById('txtagncy').value;
        var PSEACH = "";
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        Cancelbills.Bindagenyname(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindagency_callback);

    }

    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtagncy") {
            document.getElementById('hdngencode').value = "";
        }
    }
    else if (key == 27) {
        document.getElementById("divagename").style.display = "none";
        document.getElementById('txtagncy').focus();
        return false;
    }
    else if (key == 13) {
        if (document.getElementById("divagename").style.display == "block") {
            filllagency(event);
        }
        if (document.activeElement.id == "istagencyname") {
            filllagency(event);
            return false;
        }
    }

    else if (key == 9) {
        document.getElementById("divagename").style.display = "none";
        // document.getElementById('txtdes').focus();
        // return false;
    }
    else if (key == 38) {
        if (document.getElementById("divagename").style.display == "block") {
            if (document.getElementById('istagencyname').value == '0') {
                document.getElementById('txtagncy').focus();
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
        aTag = eval(document.getElementById("txtagncy"))
        var btag;
        var leftpos = 0;
        var toppos = 24;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divagename').scrollLeft;
        var scrolltop = document.getElementById('divagename').scrollTop;
        document.getElementById('divagename').style.left = document.getElementById("txtagncy").offsetLeft + leftpos - tot + "px";
        document.getElementById('divagename').style.top = document.getElementById("txtagncy").offsetTop + toppos - scrolltop + "px"; //"510px";

        var PCOMP_CODE = document.getElementById('hiddencompcode').value;
        var PCENT_CODE = document.getElementById('hiddencenter').value;
        var PDESC = document.getElementById('txtagncy').value;
        var PSEACH = "G";
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        Cancelbills.Bindagenyname(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindagency_callback);

    }
    //return false;
}
function bindagency_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("istagencyname");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select Agency Name---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].AGENCY_NAME, ds.Tables[0].Rows[i].AGENCY_CODE_SUBCODE);
        }


    }

    document.getElementById('hdngencode').value = "";
    document.getElementById("istagencyname").value = "0";
    document.getElementById("istagencyname").selectedIndex = 1;
    // document.getElementById("istagencyname").focus();
    return false;
}

function filllagency(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtagncy" || document.activeElement.id == "istagencyname") {
            document.getElementById("divagename").style.display = "none";
            document.getElementById('txtagncy').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {

        if (document.getElementById("istagencyname").value == "0") {
            // alert("Please Select Master Name");
            return false;
        }
        else {
            document.getElementById("divagename").style.display = "none";
            var lstvalue = document.getElementById('istagencyname').value;
            for (var k = 0; k < document.getElementById("istagencyname").length; k++) {
                if (document.getElementById('istagencyname').options[k].value == lstvalue) {
                    document.getElementById('hdngencode').value = document.getElementById('istagencyname').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtagncy').value = document.getElementById('istagencyname').options[k].textContent;
                    else
                        document.getElementById('txtagncy').value = document.getElementById('istagencyname').options[k].innerText;

                    break;
                }
            }
        }
        document.getElementById('txtagncy').focus();

        return false;
    }

}
//*****************************Function For Client name select F2***********************
function Bindclient(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtclint") {


        document.getElementById("divclient").style.display = "block";
        aTag = eval(document.getElementById("txtclint"))
        var btag;
        var leftpos = 0;
        var toppos = 24;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divclient').scrollLeft;
        var scrolltop = document.getElementById('divclient').scrollTop;
        document.getElementById('divclient').style.left = document.getElementById("txtclint").offsetLeft + leftpos - tot + "px";
        document.getElementById('divclient').style.top = document.getElementById("txtclint").offsetTop + toppos - scrolltop + "px"; //"510px";

        var PCOMP_CODE = document.getElementById('hiddencompcode').value;
        var PCENT_CODE = document.getElementById('hiddencenter').value;
        var PDESC = document.getElementById('txtclint').value;
        var PSEACH = "";
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        Cancelbills.Bindclientname(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindclient_callback);

    }

    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtclint") {
            document.getElementById('hdnclient').value = "";
        }
    }
    else if (key == 27) {
        document.getElementById("divclient").style.display = "none";
        document.getElementById('txtclint').focus();
        return false;
    }
    else if (key == 13) {
        if (document.getElementById("divclient").style.display == "block") {
            filllclient(event);
        }
        if (document.activeElement.id == "istclient") {
            filllclient(event);
            return false;
        }
    }

    else if (key == 9) {
        document.getElementById("divclient").style.display = "none";
        //document.getElementById('txtdes').focus();

    }
    else if (key == 38) {
        if (document.getElementById("divclient").style.display == "block") {
            if (document.getElementById('istclient').value == '0') {
                document.getElementById('txtclint').focus();
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
        aTag = eval(document.getElementById("txtclint"))
        var btag;
        var leftpos = 0;
        var toppos = 24;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divclient').scrollLeft;
        var scrolltop = document.getElementById('divclient').scrollTop;
        document.getElementById('divclient').style.left = document.getElementById("txtclint").offsetLeft + leftpos - tot + "px";
        document.getElementById('divclient').style.top = document.getElementById("txtclint").offsetTop + toppos - scrolltop + "px"; //"510px";

        var PCOMP_CODE = document.getElementById('hiddencompcode').value;
        var PCENT_CODE = document.getElementById('hiddencenter').value;
        var PDESC = document.getElementById('txtclint').value;
        var PSEACH = "G";
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        Cancelbills.Bindclientname(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindclient_callback);

    }
    //return false;
}
function bindclient_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("istclient");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select Client Name---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].CLIENT_NAME, ds.Tables[0].Rows[i].CLIENT_CODE);
        }


    }

    document.getElementById('hdnclient').value = "";
    document.getElementById("istclient").value = "0";
    document.getElementById("istclient").selectedIndex = 1;
    // document.getElementById("istclient").focus();
    return false;
}

function filllclient(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtclint" || document.activeElement.id == "istclient") {
            document.getElementById("divclient").style.display = "none";
            document.getElementById('txtclint').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {

        if (document.getElementById("istclient").value == "0") {
            // alert("Please Select Master Name");
            return false;
        }
        else {
            document.getElementById("divclient").style.display = "none";
            var lstvalue = document.getElementById('istclient').value;
            for (var k = 0; k < document.getElementById("istclient").length; k++) {
                if (document.getElementById('istclient').options[k].value == lstvalue) {
                    document.getElementById('hdnclient').value = document.getElementById('istclient').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtclint').value = document.getElementById('istclient').options[k].textContent;
                    else
                        document.getElementById('txtclint').value = document.getElementById('istclient').options[k].innerText;

                    break;
                }
            }
        }
        document.getElementById('txtclint').focus();

        return false;
    }

}
function Entertabfun() {
    var key = event.keyCode ? event.keyCode : event.which;
    document.onkeydown = function (e) {
        if (e != undefined) {
            if (e.ctrlKey && e.keyCode === 83) {
                e.preventDefault();
                if (document.getElementById('btnSave').disabled == false) {
                    // SaveClick();
                    document.getElementById('btnSave').click();
                    return false;
                }
            }
          

            else if (e.ctrlKey && e.keyCode === 82) {
                e.preventDefault();
                if (document.getElementById('btnCancel').disabled == false) {
                    document.getElementById('btnCancel').click();
                    return false;
                }
            }
            
            else if (e.altKey && e.keyCode === 83) {
                e.preventDefault();
                if (document.getElementById('btnSubmit').disabled == false) {
                    document.getElementById('btnSubmit').click();
                    return false;
                }
            }


           
            
            else if (e.ctrlKey && e.keyCode === 88) {
                e.preventDefault();
                if (document.getElementById('btnexit').disabled == false) {
                    document.getElementById('btnexit').click();
                    return false;
                }
            }
           
        }



    };
    if (key == 13) {

        if (document.activeElement.id == "txtagncy") {
            if (document.getElementById("divagename").style.display != "none")
            {
                filllagency(event);

            }
            if (document.getElementById('drpadtype').disabled == false)
                document.getElementById('drpadtype').focus();
            return false;

        }
        if (document.activeElement.id == "drpadtype") {
            if (document.getElementById('txtclint').disabled == false)
                document.getElementById('txtclint').focus();
            return false;
        }
        if (document.activeElement.id == "txtclint") {
            if (document.getElementById("divclient").style.display != "none") {
                filllclient(event);

            }
            if (document.getElementById('drpchannel').disabled == false)
                document.getElementById('drpchannel').focus();
            return false;

        }
        if (document.activeElement.id == "drpchannel") {
            if (document.getElementById('txtbillfdate').disabled == false)
                document.getElementById('txtbillfdate').focus();
            return false;

        }


        if (document.activeElement.id == "txtbillfdate") {
            if (document.getElementById('txtbilltdate').disabled == false)
                document.getElementById('txtbilltdate').focus();
            return false;

        }
        if (document.activeElement.id == "txtbilltdate") {
            if (document.getElementById('txtremark').disabled == false)
                document.getElementById('txtremark').focus();
            return false;

        }

        if (document.activeElement.id == "txtremark") {
            if (document.getElementById('txtbillno').disabled == false)
                document.getElementById('txtbillno').focus();
            return false;

        }
        if (document.activeElement.id == "txtbillno") {
            if (document.getElementById('btnSubmit').disabled == false)
                document.getElementById('btnSubmit').focus();
            return false;

        }

    }
    else if (document.activeElement.type == "button" || document.activeElement.type == "submit" || document.activeElement.type == "image") {
        return key;
    }
    else {
        return true;
    }
}

function FocusAgency() {
    if (document.getElementById('txtagncy').value == "-------- Select Agency Name---------") {
        document.getElementById('txtagncy').value = "";
    }
    document.getElementById('txtagncy').style.textAlign = "left";
    document.getElementById('txtagncy').style.color = "black";
    document.getElementById('txtagncy').style.backgroundColor = "#99FFFF";
}
function BlurAgency() {
    if (document.getElementById('txtagncy').value == "") {
        document.getElementById('txtagncy').value = "";
        document.getElementById('txtagncy').value = "-------- Select Agency Name---------";
        document.getElementById('txtagncy').style.textAlign = "center";
        document.getElementById('txtagncy').style.color = "gray";
    }

    else {
        document.getElementById('txtagncy').style.textAlign = "left";
        document.getElementById('txtagncy').style.color = "black";
    }
    if (document.getElementById('hdngencode').value == "") {
        document.getElementById('txtagncy').value = "";
        document.getElementById('txtagncy').value = "-------- Select Agency Name---------";
        document.getElementById('txtagncy').style.textAlign = "center";
        document.getElementById('txtagncy').style.color = "gray";
    }
    document.getElementById('txtagncy').style.backgroundColor = "white";
    return false;
}
function FocusClient() {
    if (document.getElementById('txtclint').value == "-------- Select Client Name---------") {
        document.getElementById('txtclint').value = "";
    }
    document.getElementById('txtclint').style.textAlign = "left";
    document.getElementById('txtclint').style.color = "black";
    document.getElementById('txtclint').style.backgroundColor = "#99FFFF";
}
function BlurClient() {
    if (document.getElementById('txtclint').value == "") {
        document.getElementById('txtclint').value = "";
        document.getElementById('txtclint').value = "-------- Select Client Name---------";
        document.getElementById('txtclint').style.textAlign = "center";
        document.getElementById('txtclint').style.color = "gray";
    }

    else {
        document.getElementById('txtclint').style.textAlign = "left";
        document.getElementById('txtclint').style.color = "black";
    }
    if (document.getElementById('hdnclient').value == "") {
        document.getElementById('txtclint').value = "";
        document.getElementById('txtclint').value = "-------- Select Client Name---------";
        document.getElementById('txtclint').style.textAlign = "center";
        document.getElementById('txtclint').style.color = "gray";
    }
    document.getElementById('txtclint').style.backgroundColor = "white";
    return false;
}
