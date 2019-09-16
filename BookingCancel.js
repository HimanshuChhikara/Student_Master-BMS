//*****************************Function For Agency name select F2***********************
function load() {
    ClearClick();
    return false;
}
function Bindagencyname(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtagncy") {


        document.getElementById("divagename").style.display = "block";
        aTag = eval(document.getElementById("txtagncy"))
        var btag;
        var leftpos = 0;
        var toppos = 0;
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
        BookingCancel.Bindagenyname(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindagency_callback);

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
        BookingCancel.Bindagenyname(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindagency_callback);

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
                        document.getElementById('txtagncy').value = document.getElementById('istagencyname').options[k].textContent;
                    else
                        document.getElementById('txtagncy').value = document.getElementById('istagencyname').options[k].innerText;

                    break;
                }
            }
        }
        document.getElementById('txtagncy').focus();
        //fillpaymode();
        return false;
    }

}
function fillpaymode() {
    var pbookdate = document.getElementById('txtbokngdate').value;
    var padtype = "DS";
    var agencode = document.getElementById('hdngencode').value;
    var pcompcode = document.getElementById('hdncompcode').value;
    var dateformat = document.getElementById('hiddendateformat').value;
    //
    var CENT_CODE = document.getElementById('hdncenter').value;
    var BRANCH_CODE = document.getElementById('hiddenbranch').value;
    var EXTRA = "";
    var EXTRA1 = "";

    document.getElementById("drppaaymode").options.length = 1;

    if (pbookdate != "") {
        if (dateformat == "dd/mm/yyyy") {
            pbookdate = pbookdate.split('/');
            pbookdate = pbookdate[1] + "/" + pbookdate[0] + "/" + pbookdate[2];
        }
        else if (dateformat == "mm/dd/yyyy") {

        }
        else if (dateformat == "yyyy/mm/dd") {
            pbookdate = pbookdate.split('/');
            pbookdate = pbookdate[1] + "/" + pbookdate[2] + "/" + pbookdate[0];
        }
        else {
            alert("Dateformat is either null or blank");
            return false;
        }
    }
    if (agencode != "") {
        var res1 = BookingCancel.Bindagpaymode(agencode, pcompcode, pbookdate, padtype);
        callbindagpaymode(res1);
    }



}


function callbindagpaymode(res) {

    var ds = res.value;
    var pkgitem = document.getElementById("drppaaymode");

    if (ds != null && typeof (ds) == "object" && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            pkgitem.options[pkgitem.options.length] = new Option(ds.Tables[0].Rows[i].PAYMODE_DESC, ds.Tables[0].Rows[i].PAYMODE_CODE);
        }
        document.getElementById("drppaaymode").value = ds.Tables[0].Rows[0].DEFAULT_PAYMODE;
    }

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
        var toppos = 0;
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
        BookingCancel.Bindclientname(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindclient_callback);

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
        BookingCancel.Bindclientname(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindclient_callback);

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

function Bindexcutive(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtexcutive") {


        document.getElementById("divexcutive").style.display = "block";
        aTag = eval(document.getElementById("txtexcutive"))
        var btag;
        var leftpos = 0;
        var toppos = 0;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divexcutive').scrollLeft;
        var scrolltop = document.getElementById('divexcutive').scrollTop;
        document.getElementById('divexcutive').style.left = document.getElementById("txtexcutive").offsetLeft + leftpos - tot + "px";
        document.getElementById('divexcutive').style.top = document.getElementById("txtexcutive").offsetTop + toppos - scrolltop + "px"; //"510px";
        var PCOMP_CODE = document.getElementById('hdncompcode').value;
        var PDESC = document.getElementById('txtexcutive').value.toUpperCase()
        var PSEACH = "";
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        BookingCancel.excutive(PCOMP_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindexcutive_callback);


    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtexcutive") {
            document.getElementById('hdnexcutive').value = "";
        }
    }
    else if (key == 27) {
        document.getElementById("divexcutive").style.display = "none";
        document.getElementById('txtexcutive').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "istexcutive") {
            //   fillcity();
            return false;
        }
        document.getElementById("divexcutive").style.display = "none";
    }
        //    else if (key == 9) {
        //    document.getElementById("divexcutive").style.display = "none";
        //    document.getElementById('txtkeyno').focus();
        //        return false;
        //    }
    else if (key == 9) {

        document.getElementById("divexcutive").style.display = "none";

    }
    else if (key == 38) {
        if (document.getElementById("divexcutive").style.display == "block") {
            if (document.getElementById('istexcutive').value == '0') {
                document.getElementById('txtexcutive').focus();
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
        aTag = eval(document.getElementById("txtexcutive"))
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
        document.getElementById('divexcutive').style.left = document.getElementById("txtexcutive").offsetLeft + leftpos - tot + "px";
        document.getElementById('divexcutive').style.top = document.getElementById("txtexcutive").offsetTop + toppos - scrolltop + "px"; //"510px";

        var PCOMP_CODE = document.getElementById('hdncompcode').value;
        var PDESC = document.getElementById('txtexcutive').value.toUpperCase()
        var PSEACH = "G";
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        BookingCancel.excutive(PCOMP_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindexcutive_callback);


    }
}
function bindexcutive_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("istexcutive");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select Excutive Name ---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].EXEC_NAME, ds.Tables[0].Rows[i].EXEC_CODE);
        }


    }

    document.getElementById('hdnexcutive').value = "";
    document.getElementById("istexcutive").value = "0";
    document.getElementById("txtexcutive").focus();
    return false;
}

function filllexcutive(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtexcutive" || document.activeElement.id == "istexcutive") {
            document.getElementById("divexcutive").style.display = "none";
            document.getElementById('txtexcutive').focus();
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
                        document.getElementById('txtexcutive').value = document.getElementById('istexcutive').options[k].textContent;
                    else
                        document.getElementById('txtexcutive').value = document.getElementById('istexcutive').options[k].innerText;

                    break;
                }
            }
        }

        document.getElementById('txtexcutive').focus();
        return false;
    }
}
//=========================================Retianer f2
function Bindret(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtret") {


        document.getElementById("divret").style.display = "block";
        aTag = eval(document.getElementById("txtret"))
        var btag;
        var leftpos = 0;
        var toppos = 0;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divret').scrollLeft;
        var scrolltop = document.getElementById('divret').scrollTop;
        document.getElementById('divret').style.left = document.getElementById("txtret").offsetLeft + leftpos - tot + "px";
        document.getElementById('divret').style.top = document.getElementById("txtret").offsetTop + toppos - scrolltop + "px"; //"510px";
        var PCOMP_CODE = document.getElementById('hdncompcode').value;
        var PDESC = document.getElementById('txtret').value.toUpperCase()
        var PSEACH = "";
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PCENT_CODE = document.getElementById('hdncenter').value;
        BookingCancel.retiner(PCOMP_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PCENT_CODE, bindretiner_callback);


    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtret") {
            document.getElementById('hdnret').value = "";
        }
    }
    else if (key == 27) {
        document.getElementById("divret").style.display = "none";
        document.getElementById('txtret').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "istret") {
            //   fillcity();
            return false;
        }
        document.getElementById("divret").style.display = "none";
    }
        //    else if (key == 9) {
        //    document.getElementById("divret").style.display = "none";
        //    document.getElementById('txtkeyno').focus();
        //        return false;
        //    }
    else if (key == 9) {

        document.getElementById("divret").style.display = "none";

    }
    else if (key == 38) {
        if (document.getElementById("divret").style.display == "block") {
            if (document.getElementById('istret').value == '0') {
                document.getElementById('txtret').focus();
            }
        }
    }

    else if (key == 40) {
        if (document.getElementById("divret").style.display == "block") {
            document.getElementById("istret").focus();
        }
    }
    else {
        document.getElementById("divret").style.display = "block";
        aTag = eval(document.getElementById("txtret"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divret').scrollLeft;
        var scrolltop = document.getElementById('divret').scrollTop;
        document.getElementById('divret').style.left = document.getElementById("txtret").offsetLeft + leftpos - tot + "px";
        document.getElementById('divret').style.top = document.getElementById("txtret").offsetTop + toppos - scrolltop + "px"; //"510px";

        var PCOMP_CODE = document.getElementById('hdncompcode').value;
        var PDESC = document.getElementById('txtret').value.toUpperCase()
        var PSEACH = "G";
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PCENT_CODE = document.getElementById('hdncenter').value;
        BookingCancel.retiner(PCOMP_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PCENT_CODE, bindretiner_callback);


    }
}
function bindretiner_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("istret");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select Retainer  Name ---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].RET_NAME, ds.Tables[0].Rows[i].RET_CODE);
        }


    }

    document.getElementById('hdnret').value = "";
    document.getElementById("istret").value = "0";
    document.getElementById("txtret").focus();
    return false;
}

function filllretiner(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtret" || document.activeElement.id == "istret") {
            document.getElementById("divret").style.display = "none";
            document.getElementById('txtret').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {
        if (document.getElementById("istret").value == "0") {
            alert("Please Select Retainer   Name");
            return false;
        }
        else {
            document.getElementById("divret").style.display = "none";
            var lstvalue = document.getElementById('istret').value;
            for (var k = 0; k < document.getElementById("istret").length; k++) {
                if (document.getElementById('istret').options[k].value == lstvalue) {
                    document.getElementById('hdnret').value = document.getElementById('istret').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtret').value = document.getElementById('istret').options[k].textContent;
                    else
                        document.getElementById('txtret').value = document.getElementById('istret').options[k].innerText;

                    break;
                }
            }
        }

        document.getElementById('txtret').focus();
        return false;
    }
}


function focus_excutive() {
    document.getElementById('txtexcutive').style.backgroundColor = "#99FFFF";
    if (document.getElementById('txtexcutive').value == "----- Select Executive -----") {
        document.getElementById('txtexcutive').value = "";
    }
    document.getElementById('txtexcutive').style.textAlign = "left";
    document.getElementById('txtexcutive').style.textTransform = "uppercase";

    document.getElementById('txtexcutive').style.color = "black";
    return false;
}
function blur_excutive() {
    document.getElementById('txtexcutive').style.backgroundColor = "white";
    if (document.getElementById('txtexcutive').value == "") {
        document.getElementById('txtexcutive').value = "";
        document.getElementById('txtexcutive').value = "----- Select Executive -----";
        document.getElementById('txtexcutive').style.textAlign = "left";
        document.getElementById('txtexcutive').style.textTransform = "capitalize";

        document.getElementById('txtexcutive').style.color = "gray";
    }
    else {
        document.getElementById('txtexcutive').style.textAlign = "left";
        document.getElementById('txtexcutive').style.color = "black";
    }

    return false;
}

function focus_ret() {
    document.getElementById('txtret').style.backgroundColor = "#99FFFF";
    if (document.getElementById('txtret').value == "----- Select Retianer -----") {
        document.getElementById('txtret').value = "";
    }
    document.getElementById('txtret').style.textAlign = "left";
    document.getElementById('txtret').style.textTransform = "uppercase";

    document.getElementById('txtret').style.color = "black";
    return false;
}
function blur_ret() {
    document.getElementById('txtret').style.backgroundColor = "white";
    if (document.getElementById('txtret').value == "") {
        document.getElementById('txtret').value = "";
        document.getElementById('txtret').value = "----- Select Retianer -----";
        document.getElementById('txtret').style.textAlign = "left";
        document.getElementById('txtret').style.textTransform = "capitalize";

        document.getElementById('txtret').style.color = "gray";
    }
    else {
        document.getElementById('txtret').style.textAlign = "left";
        document.getElementById('txtret').style.color = "black";
    }

    return false;
}
function ExitClick() {
    if (confirm("Do You Want To Skip This Page")) {
        window.close();
    }
    return false;
}
function SubmitClick1() {
    if (document.getElementById('txtbokng').value == "" && document.getElementById('hdngencode').value == "" && document.getElementById('hdnclient').value == "" && (document.getElementById('txtfromtime').value == "" || document.getElementById('txttotime').value == "")) {
        alert("Please Select At Least One Search Criteria Booking No or Agency Or Client");
        return false;
    }
    if (document.getElementById('txtstartdate').value == "") {
        alert("Please Select From Date");
        document.getElementById('txtstartdate').focus();
        return false;
    }
    if (document.getElementById('txtenddate').value == "") {
        alert("Please Select End Date");
        document.getElementById('txtenddate').focus();
        return false;
    }
    var PCOMP_CODE = document.getElementById('hdncompcode').value;
    var PCENT_CODE = document.getElementById('hdncenter').value;
    var PBRANCH_CODE = document.getElementById('hiddenbranch').value;
    var PAD_TYPE_CODE = document.getElementById('drpadtype').value;
    var PBOOKING_TYPE = "";
    var PBOOKING_NO = document.getElementById('txtbokng').value;
    var PFROM_TIME = document.getElementById('txtfromtime').value;
    var PRO_NO = document.getElementById('txtrno').value;
    var PTO_TIME = document.getElementById('txttotime').value;
    var PBOOKING_STATUS = "";
    var PRO_STATUS = "";
    var PAGENCY_CODE_SUBCODE = document.getElementById('hdngencode').value;
    var PCLIENT_CODE = document.getElementById('hdnclient').value;
    var PCLIENT_NAME = document.getElementById('txtclint').value;
    var PEXEC_CODE = document.getElementById('hdnexcutive').value;
    var PRET_CODE = document.getElementById('hdnret').value;
    var PSPOTTYPE = document.getElementById('drpspottype').value;
    var PINSERTION_NO = "";
    var PCOMMID = "";
    var PINS_STATUS = document.getElementById('drpstatus').value;
    var PNOOFSPOT = "";
    var PINS_ID = document.getElementById('txtinsno').value;
    var dateformat = document.getElementById('hiddendateformat').value;
    var PBOOKING_DATE = document.getElementById('txtbokngdate').value;
    var PRO_DATE = document.getElementById('txtrdate').value;
    var PPUBLISH_START_FROM = document.getElementById('txtstartdate').value;
    var PPUBLISH_START_TO = document.getElementById('txtenddate').value;
    var PEXTRA = "";
    var PVIDEOID = document.getElementById('txtVedioidsec').value;
    var BOOKING_FROM_TIME = "";
    var PBOOKING_TO_TIME = "";
    var PTYPE = "E";
    var PEXTRA1 = "";
    var PEXTRA2 = "";
    var PEXTRA3 = "";
    var PEXTRA4 = "";
    var PEXTRA5 = "";
    if (dateformat == "dd/mm/yyyy") {
        if (PBOOKING_DATE != "") {
            PBOOKING_DATE = PBOOKING_DATE.split('/');
            PBOOKING_DATE = PBOOKING_DATE[1] + "/" + PBOOKING_DATE[0] + "/" + PBOOKING_DATE[2];
        }
        if (PRO_DATE != "") {
            PRO_DATE = PRO_DATE.split('/');
            PRO_DATE = PRO_DATE[1] + "/" + PRO_DATE[0] + "/" + PRO_DATE[2];
        }
        if (PPUBLISH_START_FROM != "") {
            PPUBLISH_START_FROM = PPUBLISH_START_FROM.split('/');
            PPUBLISH_START_FROM = PPUBLISH_START_FROM[1] + "/" + PPUBLISH_START_FROM[0] + "/" + PPUBLISH_START_FROM[2];
        }
        if (PPUBLISH_START_TO != "") {
            PPUBLISH_START_TO = PPUBLISH_START_TO.split('/');
            PPUBLISH_START_TO = PPUBLISH_START_TO[1] + "/" + PPUBLISH_START_TO[0] + "/" + PPUBLISH_START_TO[2];
        }

    }
    else if (dateformat == "mm/dd/yyyy") {

    }
    else if (dateformat == "yyyy/mm/dd") {
        if (PBOOKING_DATE != "") {
            PBOOKING_DATE = PBOOKING_DATE.split('/');
            PBOOKING_DATE = PBOOKING_DATE[1] + "/" + PBOOKING_DATE[2] + "/" + PBOOKING_DATE[0];
        }
        if (PRO_DATE != "") {
            PRO_DATE = PRO_DATE.split('/');
            PRO_DATE = PRO_DATE[1] + "/" + PRO_DATE[2] + "/" + PRO_DATE[0];
        }
        if (PPUBLISH_START_FROM != "") {
            PPUBLISH_START_FROM = PPUBLISH_START_FROM.split('/');
            PPUBLISH_START_FROM = PPUBLISH_START_FROM[1] + "/" + PPUBLISH_START_FROM[2] + "/" + PPUBLISH_START_FROM[0];
        }
        if (PPUBLISH_START_TO != "") {
            PPUBLISH_START_TO = PPUBLISH_START_TO.split('/');
            PPUBLISH_START_TO = PPUBLISH_START_TO[1] + "/" + PPUBLISH_START_TO[2] + "/" + PPUBLISH_START_TO[0];
        }

    }
    else {
        alert("Dateformat is either null or blank");
        return false;
    }

    var res = BookingCancel.FetchData(PCOMP_CODE, PCENT_CODE, PBRANCH_CODE, PAD_TYPE_CODE, PBOOKING_TYPE, PBOOKING_NO, PBOOKING_DATE, BOOKING_FROM_TIME, PBOOKING_TO_TIME, PFROM_TIME, PRO_NO, PRO_DATE, PTO_TIME, PBOOKING_STATUS, PRO_STATUS, PAGENCY_CODE_SUBCODE, PCLIENT_CODE, PCLIENT_NAME, PEXEC_CODE, PRET_CODE, PSPOTTYPE, PINSERTION_NO, PCOMMID, PVIDEOID, PINS_STATUS, PNOOFSPOT, PINS_ID, PPUBLISH_START_FROM, PPUBLISH_START_TO, dateformat, PTYPE, PEXTRA, PEXTRA1, PEXTRA2, PEXTRA3, PEXTRA4, PEXTRA5);
    if (res.value == null) {
        alert(res.error.description);
        return false;
    }
    var ds = res.value;
    if (ds.Tables[0].Rows.length) {
        var srno;
        var gadtypecode = "";
        var slno = "";
        var growid = "";
        var booking = "";
        var gvideoid = "";
        var agename = "";
        var ginsid = "";
        var clintname = "";
        var bookindate = "";
        var startdate = "";
        var enddate = "";
        var adtpe = "";
        var bokingtype = "";
        var snonum = "";
        var chkboxid = "";
        var gfromtime = "";
        var gtotime = "";
        var gstatus = "";
        var gsegmrnt = "";
        var gposit = "";
        var gsptotypecode = "";
        var gspottype = "";
        var gBOOKINGFROMTIME = "";
        var gBOOKINGTOTIME = "";
        var gCOMMID = "";
        str = "<div id=\"griddiv\" runat=\"server\" style=\"OVERFLOW: auto; width:100%;\">";
        str += "<table cellpadding=\"0\" cellspacing=\"0\" id=\"tblGrid\" border=1 style=\"border-collapse:collapse; width:99%;\">";
        str += "<td align=\"right\" valign=\"top\" class=\"Gridtimming\">Sl No</td>";
        str += "<td align=\"right\" valign=\"top\" class=\"Gridtimming\">Booking No</td>";
        str += "<td align=\"right\" valign=\"top\" class=\"Gridtimming\">Booking Date</td>";
        str += "<td align=\"left\" valign=\"top\"  class=\"Gridtimming\">Agency Name</td>";
        str += "<td align=\"left\" valign=\"top\"  class=\"Gridtimming\">Client Name</td>";
        str += "<td align=\"right\" valign=\"top\" class=\"Gridtimming\">Ad Type</td>";
        str += "<td align=\"right\" valign=\"top\" class=\"Gridtimming\">Spot Type</td>";
        str += "<td align=\"right\" valign=\"top\"  class=\"Gridtimming\">Video Id</td>";
        str += "<td align=\"right\" valign=\"top\"  class=\"Gridtimming\">Sch Date</td>";
        //str += "<td align=\"right\" valign=\"top\" class=\"Gridtimming\">End Date</td>";
        str += "<td align=\"right\" valign=\"top\" class=\"Gridtimming\">From Date</td>";
        str += "<td align=\"right\" valign=\"top\" class=\"Gridtimming\">To Date</td>";
        str += "<td align=\"right\" valign=\"top\" class=\"Gridtimming\">Ins No</td>";
        str += "<td align=\"right\" valign=\"top\" class=\"Gridtimming\">Seg</td>";
        str += "<td align=\"right\" valign=\"top\" class=\"Gridtimming\">Pos</td>";
        str += "<td align=\"right\" valign=\"top\" class=\"Gridtimming\">Status</td>";
        str += "<td align=\"right\" valign=\"top\" class=\"Gridtimming\">Sel <input  type='CheckBox' onclick=\"return ChkAll();\" value='" + "" + "' id='chkappall_" + 0 + "' ></td>";
        str += "</tr></table></div>";
        document.getElementById('result').innerHTML = str;
        for (var k = 0; k < ds.Tables[0].Rows.length; k++) {
            var gridtab_vari = document.getElementById('tblGrid');
            snonum++;
            Make_Row = document.createElement("tr");

            Make_Row.id = "sstr_" + k;

            slno = "slno_" + k;
            booking = "booking_" + k;
            agename = "agename_" + k;
            clintname = "clintname_" + k;
            bookindate = "bookindate_" + k;
            gadtypecode = "gadtypecode_" + k;
            gvideoid = "gvideoid_" + k;
            gfromtime = "gfromtime_" + k;
            startdate = "startdate_" + k;
            enddate = "enddate_" + k;
            growid = "growid_" + k;
            adtpe = "adtpe_" + k;
            gtotime = "gtotime_" + k;
            chkboxid = "chkboxid_" + k;
            gstatus = "gstatus_" + k;
            gBOOKINGFROMTIME = "gBOOKINGFROMTIME_" + k;
            gBOOKINGTOTIME = "gBOOKINGTOTIME_" + k;
            gCOMMID = "gCOMMID_" + k;
            gsegmrnt = "gsegmrnt_" + k;
            gposit = "gposit_" + k;
            ginsid = "ginsid_" + k;
            gsptotypecode = "gsptotypecode_" + k;
            gspottype = "gspottype_" + k;


            make_td = document.createElement("td");
            make_td.className = "GridHdtd3";
            make_td.align = "center";
            make_td.width = "8%";
            make_td.style.display = "none";
            str = "<input class=\"newgridtext\" style='width:100%;' readonly = true; type=\"text\"  id=" + gadtypecode + "   value='" + ds.Tables[0].Rows[k].AD_TYPE + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtd3";
            make_td.align = "center";
            make_td.width = "4%";
            make_td.style.display = "none";
            str = "<input class=\"newgridtext\" style='width:98%' disabled = true; type=\"text\" id=" + gBOOKINGFROMTIME + " value='" + ds.Tables[0].Rows[k].BOOKING_FROM_TIME + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtd3";
            make_td.align = "center";
            make_td.width = "4%";
            make_td.style.display = "none";
            str = "<input class=\"newgridtext\" style='width:98%' disabled = true; type=\"text\" id=" + gBOOKINGTOTIME + " value='" + ds.Tables[0].Rows[k].BOOKING_TO_TIME + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtd3";
            make_td.align = "center";
            make_td.width = "4%";
            make_td.style.display = "none";
            str = "<input class=\"newgridtext\" style='width:98%' disabled = true; type=\"text\" id=" + gCOMMID + " value='" + ds.Tables[0].Rows[k].COMM_ID + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtd3";
            make_td.align = "center";
            make_td.width = "4%";
            make_td.style.display = "none";
            str = "<input class=\"newgridtext\" style='width:98%' disabled = true; type=\"text\" id=" + gsptotypecode + " value='" + ds.Tables[0].Rows[k].SPOT_TYPE + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);


            make_td = document.createElement("td");
            make_td.className = "GridHdtd3";
            make_td.align = "center";
            make_td.width = "3%";
            str = "<input class=\"newgridtext\" style='width:98%' readonly = true;  type=\"text\" id=" + slno + "  value='" + snonum + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);



            make_td = document.createElement("td");
            make_td.className = "GridHdtd3";
            make_td.align = "center";
            make_td.width = "8%";
            str = "<input class=\"newgridtext\" style='width:100%;' readonly = true; type=\"text\"  id=" + booking + "   value='" + ds.Tables[0].Rows[k].BOOKING_NO + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtd3";
            make_td.align = "center";
            make_td.width = "7%";
            str = "<input class=\"newgridtext\" style='width:100%' readonly = true; type=\"text\" id=" + bookindate + " value='" + ds.Tables[0].Rows[k].BOOKING_DATE + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtd3";
            make_td.align = "center";
            make_td.width = "15%";
            str = "<input class=\"newgridtext\" style='width:100%' readonly = true; type=\"text\" id=" + agename + "   value='" + ds.Tables[0].Rows[k].AGENCY_NAME + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtd3";
            make_td.align = "center";
            make_td.width = "15%";
            str = "<input class=\"newgridtext\" style='width:100%' readonly = true; type=\"text\" id=" + clintname + "   value='" + ds.Tables[0].Rows[k].CLIENT_NAME + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);



            make_td = document.createElement("td");
            make_td.className = "GridHdtd3";
            make_td.align = "center";
            make_td.width = "7%";
            str = "<input class=\"newgridtext\" style='width:100%' readonly = true; type=\"text\" id=" + adtpe + " value='" + ds.Tables[0].Rows[k].AD_TYPE_DESC + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);


            make_td = document.createElement("td");
            make_td.className = "GridHdtd3";
            make_td.align = "center";
            make_td.width = "5%";
            str = "<input class=\"newgridtext\" style='width:100%' readonly = true; type=\"text\" id=" + gspottype + " value='" + ds.Tables[0].Rows[k].SPOT_TYPE_NAME + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtd3";
            make_td.align = "center";
            make_td.width = "6%";
            str = "<input class=\"newgridtext\" style='width:100%'  type=\"text\" id=" + gvideoid + " value='" + ds.Tables[0].Rows[k].VIDEO_ID + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);


        

            make_td = document.createElement("td");
            make_td.className = "GridHdtd3";
            make_td.align = "center";
            make_td.width = "5%";
            str = "<input class=\"newgridtext\" style='width:98%' readonly = true; type=\"text\" id=" + startdate + " value='" + ds.Tables[0].Rows[k].SCH_DATE + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtd3";
            make_td.align = "center";
            make_td.width = "6%";
            str = "<input class=\"newgridtext\" style='width:100%' disabled = true; type=\"text\" id=" + gfromtime + " value='" + ds.Tables[0].Rows[k].FROM_TIME + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            //------------------------------------------------------------new colunm
            make_td = document.createElement("td");
            make_td.className = "GridHdtd3";
            make_td.align = "center";
            make_td.width = "5%";
            str = "<input class=\"newgridtext\" style='width:100%' disabled = true; type=\"text\" id=" + gtotime + " value='" + ds.Tables[0].Rows[k].TO_TIME + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtd3";
            make_td.align = "center";
            make_td.width = "3%";
            str = "<input class=\"newgridtext\" style='width:100%' disabled = true; type=\"text\" id=" + ginsid + " value='" + ds.Tables[0].Rows[k].ID + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtd3";
            make_td.align = "center";
            make_td.width = "3%";
            str = "<input class=\"newgridtext\" style='width:100%' disabled = true; type=\"text\" id=" + gsegmrnt + " value='" + ds.Tables[0].Rows[k].SEG_CODE + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtd3";
            make_td.align = "center";
            make_td.width = "3%";
            str = "<input class=\"newgridtext\" style='width:100%' disabled = true; type=\"text\" id=" + gposit + " value='" + ds.Tables[0].Rows[k].POSTION + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtd3";
            make_td.align = "center";
            make_td.width = "4%";
            make_td.style.display = "none";
            str = "<input class=\"newgridtext\" style='width:100%' disabled = true; type=\"text\" id=" + growid + " value='" + ds.Tables[0].Rows[k].INSERTION_ID + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

          
            make_td = document.createElement("td");
            make_td.align = "center";
            make_td.width = "6%";
            str = "<select class=\"griddrop\" style='width:100%'  id=" + gstatus + " value=''  >";
            str = str + "<option value=\"B\">BOOKED</option>";
            str = str + "<option value=\"P\">ON AIR</option>";
            str = str + "<option value=\"C\">CANCELLED</option>";
            str = str + "<option value=\"H\">HOLD</option>";
            str = str + "<option value=\"I\">INVOICED</option>";
            str = str + "</select>";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtd3";
            make_td.align = "center";
            make_td.width = "2%";
            str = "<input class=\"newgridtext\" style='width:100%; text-align:center'  type=\"checkbox\" id=" + chkboxid + " value='' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            document.getElementById('griddiv').getElementsByTagName('tbody')[0].appendChild(Make_Row);
            document.getElementById('gstatus_' + k).value = ds.Tables[0].Rows[k].INS_STATUS;

            if (ds.Tables[0].Rows[k].INS_STATUS == "I" || ds.Tables[0].Rows[k].INS_STATUS == "P") {
                document.getElementById('chkboxid_' + k).disabled = true;
                document.getElementById('gstatus_' + k).disabled = true;
            }

        }
        return false;
    }
    else {
        document.getElementById('result').innerHTML = "";

        alert("There is No Data");
        return false;
    }



}

function ChkAll() {
    var gridlength = (document.getElementById('tblGrid').rows.length - 1);
    if (document.getElementById("chkappall_" + 0).checked == true) {
        for (var i = 0; i < gridlength; i++) {
            if (document.getElementById("sstr_" + i).style.display != "none") {

                if (document.getElementById('chkboxid_' + i).checked == false && document.getElementById('chkboxid_' + i).disabled == false) {
                    document.getElementById("chkboxid_" + i).checked = true;
                }
            }
        }
    }
    else {
        for (var i = 0; i < gridlength; i++) {
            if (document.getElementById("sstr_" + i).style.display != "none") {

                if (document.getElementById('chkboxid_' + i).checked == true) {
                    document.getElementById("chkboxid_" + i).checked = false;
                }
            }
        }
    }
}
function delbook() {
    document.getElementById("divauth").style.display = "block";
    return false;
}

function Delbooking() {

    activeidgp = document.activeElement.id;
    var id = activeidgp.split("_");

    var PCOMP_CODE = document.getElementById('hdncompcode').value;
    var PCENT_CODE = document.getElementById('hdncenter').value;
    var PBRANCH_CODE = document.getElementById('hiddenbranch').value;
    var gridlength = document.getElementById('tblGrid').rows.length;
    for (var k = 0; k < (gridlength - 1) ; k++) {

        var PBOOKING_NO = document.getElementById("booking_" + k).value;
        var PBOOKING_DATE = document.getElementById("bookindate_" + k).value;
        var PCHANNEL = "";
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        var PEXTRA3 = "";
        var PEXTRA4 = "";
        var dateformat = document.getElementById('hiddendateformat').value;
        if (dateformat == "dd/mm/yyyy") {
            if (PBOOKING_DATE != "") {
                PBOOKING_DATE = PBOOKING_DATE.split('/');
                PBOOKING_DATE = PBOOKING_DATE[1] + "/" + PBOOKING_DATE[0] + "/" + PBOOKING_DATE[2];
            }


        }
        else if (dateformat == "mm/dd/yyyy") {

        }
        else if (dateformat == "yyyy/mm/dd") {
            if (PBOOKING_DATE != "") {
                PBOOKING_DATE = PBOOKING_DATE.split('/');
                PBOOKING_DATE = PBOOKING_DATE[1] + "/" + PBOOKING_DATE[2] + "/" + PBOOKING_DATE[0];
            }


        }
        else {
            alert("Dateformat is either null or blank");
            return false;
        }
        if (document.getElementById("chkboxid_" + k).checked == true) {
            var res = BookingCancel.deletebook(PCOMP_CODE, PCENT_CODE, PBRANCH_CODE, PBOOKING_NO, PBOOKING_DATE, PCHANNEL, PEXTRA, PEXTRA1, PEXTRA2, PEXTRA3, PEXTRA4);
            var ds = res.value;
            if (ds == null) {
                alert(res.error.description);
                return false;
            }
            var BOOK = ds.Tables[0].Rows[0].RES;
            alert(BOOK);
        }
    }
    return false;
}

function SaveClick() {
    var PCOMP_CODE = document.getElementById('hdncompcode').value;
    var PCENT_CODE = document.getElementById('hdncenter').value;
    var PBRANCH_CODE = document.getElementById('hiddenbranch').value;
    var gridlength = (document.getElementById('tblGrid').rows.length - 1);
    var saveflag = "N";
    for (var i = 0; i < gridlength; i++) {
        if (document.getElementById('chkboxid_' + i).checked == true) {

            var PAD_TYPE_CODE = document.getElementById('gadtypecode_' + i).value;
            var PBOOKING_TYPE = "";
            var PBOOKING_NO = document.getElementById('booking_' + i).value;
            var PFROM_TIME = document.getElementById('gfromtime_' + i).value;
            var PRO_NO = "";
            var PTO_TIME = document.getElementById('gtotime_' + i).value;
            var PBOOKING_STATUS = "";
            var PRO_STATUS = "";
            var PAGENCY_CODE_SUBCODE = "";
            var PCLIENT_CODE = "";
            var PCLIENT_NAME = "";
            var PEXEC_CODE = "";
            var PRET_CODE = "";
            var PSPOTTYPE = document.getElementById('gsptotypecode_' + i).value;
            var PINSERTION_NO = document.getElementById('growid_' + i).value;
            var PCOMMID = document.getElementById('gCOMMID_' + i).value;
            var PINS_STATUS = document.getElementById('gstatus_' + i).value;
            var PNOOFSPOT = "";
            var PINS_ID = document.getElementById('ginsid_' + i).value;
            var dateformat = document.getElementById('hiddendateformat').value;
            var PBOOKING_DATE = document.getElementById('bookindate_' + i).value;
            var PRO_DATE = "";
            var PVIDEOID = document.getElementById('gvideoid_' + i).value;
            var PPUBLISH_START_FROM = document.getElementById('startdate_' + i).value;
            var PPUBLISH_START_TO = "";
            var PEXTRA = "";
            var BOOKING_FROM_TIME = document.getElementById('gBOOKINGFROMTIME_' + i).value;
            var PBOOKING_TO_TIME = document.getElementById('gBOOKINGTOTIME_' + i).value;
            var PTYPE = "S";
            var PEXTRA1 = "";
            var PEXTRA2 = "";
            var PEXTRA3 = "";
            var PEXTRA4 = "";
            var PEXTRA5 = "";
            if (dateformat == "dd/mm/yyyy") {
                if (PBOOKING_DATE != "") {
                    PBOOKING_DATE = PBOOKING_DATE.split('/');
                    PBOOKING_DATE = PBOOKING_DATE[1] + "/" + PBOOKING_DATE[0] + "/" + PBOOKING_DATE[2];
                }
                if (PRO_DATE != "") {
                    PRO_DATE = PRO_DATE.split('/');
                    PRO_DATE = PRO_DATE[1] + "/" + PRO_DATE[0] + "/" + PRO_DATE[2];
                }
                if (PPUBLISH_START_FROM != "") {
                    PPUBLISH_START_FROM = PPUBLISH_START_FROM.split('/');
                    PPUBLISH_START_FROM = PPUBLISH_START_FROM[1] + "/" + PPUBLISH_START_FROM[0] + "/" + PPUBLISH_START_FROM[2];
                }
                if (PPUBLISH_START_TO != "") {
                    PPUBLISH_START_TO = PPUBLISH_START_TO.split('/');
                    PPUBLISH_START_TO = PPUBLISH_START_TO[1] + "/" + PPUBLISH_START_TO[0] + "/" + PPUBLISH_START_TO[2];
                }

            }
            else if (dateformat == "mm/dd/yyyy") {

            }
            else if (dateformat == "yyyy/mm/dd") {
                if (PBOOKING_DATE != "") {
                    PBOOKING_DATE = PBOOKING_DATE.split('/');
                    PBOOKING_DATE = PBOOKING_DATE[1] + "/" + PBOOKING_DATE[2] + "/" + PBOOKING_DATE[0];
                }

                if (PPUBLISH_START_FROM != "") {
                    PPUBLISH_START_FROM = PPUBLISH_START_FROM.split('/');
                    PPUBLISH_START_FROM = PPUBLISH_START_FROM[1] + "/" + PPUBLISH_START_FROM[2] + "/" + PPUBLISH_START_FROM[0];
                }


            }
            else {
                alert("Dateformat is either null or blank");
                return false;
            }
            saveflag = "Y";
            var res = BookingCancel.FetchData(PCOMP_CODE, PCENT_CODE, PBRANCH_CODE, PAD_TYPE_CODE, PBOOKING_TYPE, PBOOKING_NO, PBOOKING_DATE, BOOKING_FROM_TIME, PBOOKING_TO_TIME, PFROM_TIME, PRO_NO, PRO_DATE, PTO_TIME, PBOOKING_STATUS, PRO_STATUS, PAGENCY_CODE_SUBCODE, PCLIENT_CODE, PCLIENT_NAME, PEXEC_CODE, PRET_CODE, PSPOTTYPE, PINSERTION_NO, PCOMMID, PVIDEOID, PINS_STATUS, PNOOFSPOT, PINS_ID, PPUBLISH_START_FROM, PPUBLISH_START_TO, dateformat, PTYPE, PEXTRA, PEXTRA1, PEXTRA2, PEXTRA3, PEXTRA4, PEXTRA5);
            if (res.value == null) {
                alert(res.error.description);

                return false;
            }
        }
    }

    if (saveflag == "Y") {
        alert("Data Update Successfully");
    }

    return false;
}

function DelemisClick() {
    var PCOMP_CODE = document.getElementById('hdncompcode').value;
    var PCENT_CODE = document.getElementById('hdncenter').value;
    var PBRANCH_CODE = document.getElementById('hiddenbranch').value;
    var gridlength = (document.getElementById('tblGrid').rows.length - 1);
    var saveflag = "N";
    for (var i = 0; i < gridlength; i++) {
        if (document.getElementById('chkboxid_' + i).checked == true) {

            var PAD_TYPE_CODE = document.getElementById('gadtypecode_' + i).value;
            var PBOOKING_TYPE = "";
            var PBOOKING_NO = document.getElementById('booking_' + i).value;
            var PFROM_TIME = document.getElementById('gfromtime_' + i).value;
            var PRO_NO = "";
            var PTO_TIME = document.getElementById('gtotime_' + i).value;
            var PBOOKING_STATUS = "";
            var PRO_STATUS = "";
            var PAGENCY_CODE_SUBCODE = "";
            var PCLIENT_CODE = "";
            var PCLIENT_NAME = "";
            var PEXEC_CODE = "";
            var PRET_CODE = "";
            var PSPOTTYPE = document.getElementById('gsptotypecode_' + i).value;
            var PINSERTION_NO = document.getElementById('growid_' + i).value;
            var PCOMMID = document.getElementById('gCOMMID_' + i).value;
            var PINS_STATUS = document.getElementById('gstatus_' + i).value;
            var PNOOFSPOT = "";
            var PINS_ID = document.getElementById('ginsid_' + i).value;
            var dateformat = document.getElementById('hiddendateformat').value;
            var PBOOKING_DATE = document.getElementById('bookindate_' + i).value;
            var PRO_DATE = "";
            var PVIDEOID = document.getElementById('gvideoid_' + i).value;
            var PPUBLISH_START_FROM = document.getElementById('startdate_' + i).value;
            var PPUBLISH_START_TO = "";
            var PEXTRA = "";
            var BOOKING_FROM_TIME = document.getElementById('gBOOKINGFROMTIME_' + i).value;
            var PBOOKING_TO_TIME = document.getElementById('gBOOKINGTOTIME_' + i).value;
            var PTYPE = "D";
            var PEXTRA1 = "";
            var PEXTRA2 = "";
            var PEXTRA3 = "";
            var PEXTRA4 = "";
            var PEXTRA5 = "";
            if (dateformat == "dd/mm/yyyy") {
                if (PBOOKING_DATE != "") {
                    PBOOKING_DATE = PBOOKING_DATE.split('/');
                    PBOOKING_DATE = PBOOKING_DATE[1] + "/" + PBOOKING_DATE[0] + "/" + PBOOKING_DATE[2];
                }
                if (PRO_DATE != "") {
                    PRO_DATE = PRO_DATE.split('/');
                    PRO_DATE = PRO_DATE[1] + "/" + PRO_DATE[0] + "/" + PRO_DATE[2];
                }
                if (PPUBLISH_START_FROM != "") {
                    PPUBLISH_START_FROM = PPUBLISH_START_FROM.split('/');
                    PPUBLISH_START_FROM = PPUBLISH_START_FROM[1] + "/" + PPUBLISH_START_FROM[0] + "/" + PPUBLISH_START_FROM[2];
                }
                if (PPUBLISH_START_TO != "") {
                    PPUBLISH_START_TO = PPUBLISH_START_TO.split('/');
                    PPUBLISH_START_TO = PPUBLISH_START_TO[1] + "/" + PPUBLISH_START_TO[0] + "/" + PPUBLISH_START_TO[2];
                }

            }
            else if (dateformat == "mm/dd/yyyy") {

            }
            else if (dateformat == "yyyy/mm/dd") {
                if (PBOOKING_DATE != "") {
                    PBOOKING_DATE = PBOOKING_DATE.split('/');
                    PBOOKING_DATE = PBOOKING_DATE[1] + "/" + PBOOKING_DATE[2] + "/" + PBOOKING_DATE[0];
                }

                if (PPUBLISH_START_FROM != "") {
                    PPUBLISH_START_FROM = PPUBLISH_START_FROM.split('/');
                    PPUBLISH_START_FROM = PPUBLISH_START_FROM[1] + "/" + PPUBLISH_START_FROM[2] + "/" + PPUBLISH_START_FROM[0];
                }


            }
            else {
                alert("Dateformat is either null or blank");
                return false;
            }
            saveflag = "Y";
            var res = BookingCancel.FetchData(PCOMP_CODE, PCENT_CODE, PBRANCH_CODE, PAD_TYPE_CODE, PBOOKING_TYPE, PBOOKING_NO, PBOOKING_DATE, BOOKING_FROM_TIME, PBOOKING_TO_TIME, PFROM_TIME, PRO_NO, PRO_DATE, PTO_TIME, PBOOKING_STATUS, PRO_STATUS, PAGENCY_CODE_SUBCODE, PCLIENT_CODE, PCLIENT_NAME, PEXEC_CODE, PRET_CODE, PSPOTTYPE, PINSERTION_NO, PCOMMID, PVIDEOID, PINS_STATUS, PNOOFSPOT, PINS_ID, PPUBLISH_START_FROM, PPUBLISH_START_TO, dateformat, PTYPE, PEXTRA, PEXTRA1, PEXTRA2, PEXTRA3, PEXTRA4, PEXTRA5);
            if (res.value == null) {
                alert(res.error.description);

                return false;
            }
        }
    }

    if (saveflag == "Y") {
        alert("Data Delete Successfully");
    }

    return false;
}
function athenticate() {
    var password = document.getElementById("txtpasword").value;

    var res = BookingCancel.chkpassword(password);
    var ds = res.value;
    if (ds == null) {
        alert(res.error.description);
        return false
    }
    if (ds.Tables[0].Rows.length > 0) {
        document.getElementById("divauth").style.display = "none";
        Delbooking();
        return false;
    }
    else {
        alert("Wrong Password");
        document.getElementById("txtpasword").focus();
        return false;
    }
}
function gotovch(i) {
    var id = i.split("_")[1];
    var bookingno = document.getElementById('booking_' + id).value;
    var bookingdate = document.getElementById('bookindate_' + id).value;
    if (document.getElementById('hdnformname').value == "BOK") {
        window.opener.document.getElementById("txtrdate").value = "";
        window.opener.document.getElementById("txtstartdate").value = "";
        window.opener.document.getElementById("txtenddate").value = "";
        window.opener.document.getElementById("txtbokng").value = bookingno;
        window.opener.document.getElementById("txtbokngdate").value = bookingdate;
        window.opener.Execute();
    }
    window.close();
    return false;
}
function ClearClick() {

    document.getElementById('txtbokng').value = "";
    document.getElementById('txtbokngdate').value = "";
    document.getElementById('txtstartdate').value = "";
    document.getElementById('txtenddate').value = "";
    document.getElementById('txtagncy').value = "";
    
    document.getElementById('txtclint').value = "";
    document.getElementById('drpstatus').value = "0";
    document.getElementById('txtrno').value = "";
    document.getElementById('txtrdate').value = "";
    document.getElementById('txtrno').value = "";
    document.getElementById('txtrdate').value = "";
    document.getElementById('drpstatus').value = "0";
    document.getElementById('txtinsno').value = "";
    document.getElementById('drpspottype').value = "0";
    document.getElementById('txtexcutive').value = "----- Select Executive -----";
    document.getElementById('txtfromtime').value = "";
    document.getElementById('txttotime').value = "";
    document.getElementById('txtinsno').value = "";
    document.getElementById('hdnret').value = "";
    document.getElementById('hdnexcutive').value = "";
    document.getElementById('hdngencode').value = "";
    document.getElementById('hdnclient').value = "";
    document.getElementById('drpadtype').value = "0";
    document.getElementById('drpadtype').focus();

    topChengestatus();
    return false;
}



function Entertabfun(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 13) {
        if (document.activeElement.id == "drpadtype") {
            if (document.getElementById('txtbokng').disabled == false)
                document.getElementById('txtbokng').focus();
            return false;
        }
        if (document.activeElement.id == "txtbokng") {
            if (document.getElementById('txtbokngdate').disabled == false)
                document.getElementById('txtbokngdate').focus();
            return false;
        }
        if (document.activeElement.id == "txtbokngdate") {
            if (document.getElementById('txtagncy').disabled == false)
                document.getElementById('txtagncy').focus();
            return false;
        }

        if (document.activeElement.id == "txtagncy") {
            if (document.getElementById('txtclint').disabled == false)
                document.getElementById('txtclint').focus();
            return false;
        }
        if (document.activeElement.id == "txtclint") {
            if (document.getElementById('txtexcutive').disabled == false)
                document.getElementById('txtexcutive').focus();
            return false;
        }

        if (document.activeElement.id == "txtexcutive") {
            if (document.getElementById('txtrno').disabled == false)
                document.getElementById('txtrno').focus();
            return false;
        }

        if (document.activeElement.id == "txtrno") {
            if (document.getElementById('txtrdate').disabled == false)
                document.getElementById('txtrdate').focus();
            return false;
        }

        if (document.activeElement.id == "txtrdate") {
            if (document.getElementById('txtinsno').disabled == false)
                document.getElementById('txtinsno').focus();
            return false;
        }

        if (document.activeElement.id == "txtinsno") {
            if (document.getElementById('drpspottype').disabled == false)
                document.getElementById('drpspottype').focus();
            return false;
        }

        if (document.activeElement.id == "drpspottype") {
            if (document.getElementById('txtfromtime').disabled == false)
                document.getElementById('txtfromtime').focus();
            return false;
        }
        if (document.activeElement.id == "txtfromtime") {
            if (document.getElementById('txttotime').disabled == false)
                document.getElementById('txttotime').focus();
            return false;
        }
        if (document.activeElement.id == "txttotime") {
            if (document.getElementById('txtstartdate').disabled == false)
                document.getElementById('txtstartdate').focus();
            return false;
        }
        if (document.activeElement.id == "txtstartdate") {
            if (document.getElementById('txtenddate').disabled == false)
                document.getElementById('txtenddate').focus();
            return false;
        }

        if (document.activeElement.id == "txtenddate") {
            if (document.getElementById('drpstatus').disabled == false)
                document.getElementById('drpstatus').focus();
            return false;
        }

        if (document.activeElement.id == "drpstatus") {
            if (document.getElementById('btnSubmit1').disabled == false)
                document.getElementById('btnSubmit1').focus();
            return false;
        }
    }
    else if (document.activeElement.type == "button" || document.activeElement.type == "submit" || document.activeElement.type == "image") {
        return key;
    }
}


function Chengestatus() {
    var gridlength = (document.getElementById('tblGrid').rows.length - 1);
  
        for (var i = 0; i < gridlength; i++) {
            if (document.getElementById("sstr_" + i).style.display != "none") {

                if (document.getElementById('chkboxid_' + i).checked == true && document.getElementById('chkboxid_' + i).disabled == false) {
                    document.getElementById("gstatus_" + i).value = document.getElementById("drproestat").value;
                }
            }
        }
   
}

function Chengevideoid() {
    var gridlength = (document.getElementById('tblGrid').rows.length - 1);

    for (var i = 0; i < gridlength; i++) {
        if (document.getElementById("sstr_" + i).style.display != "none") {
            if (document.getElementById('chkboxid_' + i).checked == true && document.getElementById('chkboxid_' + i).disabled == false) {
                document.getElementById("gvideoid_" + i).value = document.getElementById("txtvideoid").value;
            }
        }
    }

}


function topChengestatus() {
    document.getElementById('result').innerHTML = "";
    //document.getElementById('tblGrid').rows.length = 0;

    if (document.getElementById("drpstatus").value == "M") {
        document.getElementById("btndelete").disabled = false;
    }
    else {
        document.getElementById("btndelete").disabled = true;
    }

}