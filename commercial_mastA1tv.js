function Bindagencyname(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtagncy") {


        document.getElementById("divagename").style.display = "block";
        aTag = eval(document.getElementById("txtagncy"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
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

        var PCOMP_CODE = document.getElementById('hdncompcode').value;
        var PCENT_CODE = document.getElementById('hdncenter').value;
        var PDESC = document.getElementById('txtagncy').value;
        var PSEACH = "";
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        commercial_mastA1tv.Bindagenyname(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindagency_callback);

    }

    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtagncy") {
            document.getElementById('hdngencode').value = "";
        }
    }
    else if (key == 27 || key == 17) {
        document.getElementById("divagename").style.display = "none";
        document.getElementById('txtagncy').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "istagencyname") {

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
        var toppos = 20;
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

        var PCOMP_CODE = document.getElementById('hdncompcode').value;
        var PCENT_CODE = document.getElementById('hdncenter').value;
        var PDESC = document.getElementById('txtagncy').value;
        var PSEACH = "G";
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        commercial_mastA1tv.Bindagenyname(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindagency_callback);

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
            //alert("Please Select Master Name");
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



function focusagency() {
    if (document.getElementById('txtagncy').value == "--------------------------Select Agency Name -----------------------------") {
        document.getElementById('txtagncy').value = "";
    }
    document.getElementById('txtagncy').style.textAlign = "left";
    document.getElementById('txtagncy').style.color = "black";
    document.getElementById('txtagncy').style.backgroundColor = "#99FFFF";
}
function bluragency() {
    if (document.getElementById('txtagncy').value == "") {
        document.getElementById('txtagncy').value = "";
        document.getElementById('txtagncy').value = "--------------------------Select Agency Name -----------------------------";
        document.getElementById('txtagncy').style.textAlign = "center";
        document.getElementById('txtagncy').style.color = "gray";
    }

    else {
        document.getElementById('txtagncy').style.textAlign = "left";
        document.getElementById('txtagncy').style.color = "black";
    }
    if (document.getElementById('hdngencode').value == "") {
        document.getElementById('txtagncy').value = "";
        document.getElementById('txtagncy').value = "--------------------------Select Agency Name -----------------------------";
        document.getElementById('txtagncy').style.textAlign = "center";
        document.getElementById('txtagncy').style.color = "gray";
    }
    document.getElementById('txtagncy').style.backgroundColor = "white";
    return false;
}
//*****************************Function For Client name select F2***********************
function Bindclient(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtclint") {


        document.getElementById("divclient").style.display = "block";
        aTag = eval(document.getElementById("txtclint"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
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

        var PCOMP_CODE = document.getElementById('hdncompcode').value;
        var PCENT_CODE = document.getElementById('hdncenter').value;
        var PDESC = document.getElementById('txtclint').value;
        var PSEACH = "";
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        commercial_mastA1tv.Bindclientname(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindclient_callback);

    }

    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtclint") {
            document.getElementById('hdnclient').value = "";
        }
    }
    else if (key == 27 || key == 17) {
        document.getElementById("divclient").style.display = "none";
        document.getElementById('txtclint').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "istclient") {

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
        var toppos = 20;
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

        var PCOMP_CODE = document.getElementById('hdncompcode').value;
        var PCENT_CODE = document.getElementById('hdncenter').value;
        var PDESC = document.getElementById('txtclint').value;
        var PSEACH = "G";
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        commercial_mastA1tv.Bindclientname(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindclient_callback);

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
            //alert("Please Select Master Name");
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



function focusclient() {
    if (document.getElementById('txtclint').value == "--------------------------Select Client Name -----------------------------") {
        document.getElementById('txtclint').value = "";
    }
    document.getElementById('txtclint').style.textAlign = "left";
    document.getElementById('txtclint').style.color = "black";
    document.getElementById('txtclint').style.backgroundColor = "#99FFFF";
}
function blurclient() {
    if (document.getElementById('txtclint').value == "") {
        document.getElementById('txtclint').value = "";
        document.getElementById('txtclint').value = "--------------------------Select Client Name -----------------------------";
        document.getElementById('txtclint').style.textAlign = "center";
        document.getElementById('txtclint').style.color = "gray";
    }

    else {
        document.getElementById('txtclint').style.textAlign = "left";
        document.getElementById('txtclint').style.color = "black";
    }
    if (document.getElementById('hdnclient').value == "") {
        document.getElementById('txtclint').value = "";
        document.getElementById('txtclint').value = "--------------------------Select Client Name -----------------------------";
        document.getElementById('txtclint').style.textAlign = "center";
        document.getElementById('txtclint').style.color = "gray";
    }
    document.getElementById('txtclint').style.backgroundColor = "white";
    return false;
}




function up_tcrin() {
    if (document.getElementById('txtTCRIN').value == "HH:MM:SS:FF") {
        document.getElementById('txtTCRIN').value = "";

    }
    document.getElementById('txtTCRIN').style.textAlign = "left";
    document.getElementById('txtTCRIN').style.color = "black";
    document.getElementById('txtTCRIN').style.backgroundColor = "#99FFFF";

}
function up_trout() {
    if (document.getElementById('txtTCROUT').value == "HH:MM:SS:FF") {
        document.getElementById('txtTCROUT').value = "";

    }
    document.getElementById('txtTCROUT').style.textAlign = "left";
    document.getElementById('txtTCROUT').style.color = "black";
    document.getElementById('txtTCROUT').style.backgroundColor = "#99FFFF";

}




function seccovtrcin() {
    document.getElementById('txtTCRIN').style.backgroundColor = "white";
    var tcr = document.getElementById('txtTCRIN').value;
    if (tcr == "") {
        return false;
    }
    var extra = "";
    var extra1 = "";
    var res = commercial_mast.gettcr(tcr, extra, extra1);
    var ds = res.value;
    if (ds.Tables[0].Rows.length > 0) {
        var secondcov = ds.Tables[0].Rows[0].sec;
        document.getElementById('hiddentcrin').value = ds.Tables[0].Rows[0].sec;
    }
    document.getElementById('txtTCRIN').style.backgroundColor = "white";
}

function seccovtrcout() {
    document.getElementById('txtTCROUT').style.backgroundColor = "white";
    var tcr = document.getElementById('txtTCROUT').value;
    if (tcr == "") {
        return false;
    }
    var extra = "";
    var extra1 = "";
    var res = commercial_mast.gettcr(tcr, extra, extra1);
    var ds = res.value;
    if (ds.Tables[0].Rows.length > 0) {
        var secondcov = ds.Tables[0].Rows[0].sec;
        document.getElementById('hiddentcrout').value = ds.Tables[0].Rows[0].sec;
        document.getElementById('txtnRDuration').value = ds.Tables[0].Rows[0].sec;
    }
    document.getElementById('txtTCROUT').style.backgroundColor = "white";

    timedur();
}

function timedur() {
    if (document.getElementById('txtTCRIN').value != "" && document.getElementById('txtTCROUT').value != "" && document.getElementById('txtTCRIN').value != "HH:MM:SS:FF" && document.getElementById('txtTCROUT').value != "HH:MM:SS:FF") {

        var PTCR_IN = document.getElementById('txtTCRIN').value;



        var PTCR_OUT = document.getElementById('txtTCROUT').value;

        var res = commercial_mast.Fetchsecond(PTCR_IN, PTCR_OUT);
        var ds = res.value;
        if (ds.Tables[0].Rows.length > 0) {
            document.getElementById('txtnDuartion').value = ds.Tables[0].Rows[0].Column1;

        }

        durtime();
    }
    return false;
}

function durtime() {
    var a, b, c, d, f, g, h, i, j, k, l, err = "";
    var hh, mm, ss, ff, temp = "";
    a = document.getElementById('txtTCRIN').value;
    temp = document.getElementById('txtTCROUT').value;

    b = a.substring(0, 2);
    c = a.substring(3, 5);
    d = a.substring(6, 8);
    f = a.substring(9, 11);
    err = hh + ":" + mm;


    j = temp.substring(0, 2);
    i = temp.substring(3, 5);
    g = temp.substring(6, 8);
    h = temp.substring(9, 11);


    hh = j - b;
    mm = i - c;
    ss = g - d;
    ff = h - f;

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
    ff = (ff < 10) ? "0" + ff : ff;

    err = hh + ":" + mm + ":" + ss + ":" + ff;
    document.getElementById('txtnDuartion').value = err;
}
