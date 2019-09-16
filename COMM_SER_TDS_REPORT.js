function Entertabfun(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 13) {

        if (document.activeElement.id == "txtCompany") {
            if (document.getElementById('ddlcenter').disabled == false)
                document.getElementById('ddlcenter').focus();
            return false;
        }

        if (document.activeElement.id == "ddlcenter") {
            if (document.getElementById('txtAgencyName').disabled == false)
                document.getElementById('txtAgencyName').focus();
            return false;
        }

        if (document.activeElement.id == "txtAgencyName") {

            document.getElementById('divagename').style.display != "none"; {
                filllagency(event)
        }
            if (document.getElementById('txtCilentName').disabled == false)
                document.getElementById('txtCilentName').focus();
            return false;
        }
        if (document.activeElement.id == "txtCilentName") {

            document.getElementById('divclient').style.display != "none"; {
                filllclient(event)
            }

            if (document.getElementById('txtBillfrDate').disabled == false)
                document.getElementById('txtBillfrDate').focus();
            return false;
        }
        if (document.activeElement.id == "txtBillfrDate") {
            if (document.getElementById('txtBilltodate').disabled == false)
                document.getElementById('txtBilltodate').focus();
            return false;
        }

        if (document.activeElement.id == "txtBilltodate") {
            if (document.getElementById('txtbillfrno').disabled == false)
                document.getElementById('txtbillfrno').focus();
            return false;
        }
        if (document.activeElement.id == "txtbillfrno") {

            document.getElementById('divbillno').style.display != "none"; {
                fillbillno(event)
            }
            
            if (document.getElementById('txtbilltono').disabled == false)
                document.getElementById('txtbilltono').focus();
            return false;
        }
        if (document.activeElement.id == "txtbilltono") {

            document.getElementById('divrono').style.display != "none"; {
                fillbillnoto(event)
            }

            if (document.getElementById('txtRONumber').disabled == false)
                document.getElementById('txtRONumber').focus();
            return false;
        }

        if (document.activeElement.id == "txtRONumber") {
            document.getElementById('divbillnoto').style.display != "none"; {
                fillrono(event)
            }

            
            if (document.getElementById('txtExecutive').disabled == false)
                document.getElementById('txtExecutive').focus();
            return false;
        }

        if (document.activeElement.id == "txtExecutive") {

            document.getElementById('divexcutive').style.display != "none"; {
                filllexcutive(event)
            }

            if (document.getElementById('txtAdType').disabled == false)
                document.getElementById('txtAdType').focus();
            return false;
        }

        if (document.activeElement.id == "txtAdType") {
            if (document.getElementById('drpChannel').disabled == false)
                document.getElementById('drpChannel').focus();
            return false;
        }
        if (document.activeElement.id == "drpChannel") {
            if (document.getElementById('drpreptype').disabled == false)
                document.getElementById('drpreptype').focus();
            return false;
        }
        if (document.activeElement.id == "drpreptype") {
            if (document.getElementById('drpbreakon').disabled == false)
                document.getElementById('drpbreakon').focus();
            return false;
        }
        if (document.activeElement.id == "drpbreakon") {
            if (document.getElementById('drpRepDes').disabled == false)
                document.getElementById('drpRepDes').focus();
            return false;
        }
        if (document.activeElement.id == "drpRepDes") {
            if (document.getElementById('btnrunrept').disabled == false)
                document.getElementById('btnrunrept').focus();
            return false;
        }
    }
    else if (document.activeElement.type == "button" || document.activeElement.type == "submit" || document.activeElement.type == "image") {
        return key;
    }
}



//*****************************Function For Agency name select F2***********************
function Bindagencyname(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtAgencyName") {


        document.getElementById("divagename").style.display = "block";
        aTag = eval(document.getElementById("txtAgencyName"))
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
        document.getElementById('divagename').style.left = document.getElementById("txtAgencyName").offsetLeft + leftpos - tot + "px";
        document.getElementById('divagename').style.top = document.getElementById("txtAgencyName").offsetTop + toppos - scrolltop + "px"; //"510px";

        var PCOMP_CODE = document.getElementById('hiddencompcode').value;
        var PCENT_CODE = document.getElementById('hiddencenter').value;
        var PDESC = document.getElementById('txtAgencyName').value;
        var PSEACH = "";
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        COMM_SER_TDS_REPORT.Bindagenyname(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindagency_callback);

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

    else if (key == 9) {
        document.getElementById("divagename").style.display = "none";
        document.getElementById('ddlcenter').focus();
        return false;
    }
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
        var toppos = 20;
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
        COMM_SER_TDS_REPORT.Bindagenyname(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindagency_callback);

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
    if (document.getElementById('txtAgencyName').value == "-------- Select Agency Name---------") {
        document.getElementById('txtAgencyName').value = "";
    }
    document.getElementById('txtAgencyName').style.textAlign = "left";
    document.getElementById('txtAgencyName').style.color = "black";
    document.getElementById('txtAgencyName').style.backgroundColor = "#99FFFF";
}
function BlurAgency() {
    if (document.getElementById('txtAgencyName').value == "") {
        document.getElementById('txtAgencyName').value = "";
        document.getElementById('txtAgencyName').value = "-------- Select Agency Name---------";
        document.getElementById('txtAgencyName').style.textAlign = "center";
        document.getElementById('txtAgencyName').style.color = "gray";
    }

    else {
        document.getElementById('txtAgencyName').style.textAlign = "left";
        document.getElementById('txtAgencyName').style.color = "black";
    }
    if (document.getElementById('hdngencode').value == "") {
        document.getElementById('txtAgencyName').value = "";
        document.getElementById('txtAgencyName').value = "-------- Select Agency Name---------";
        document.getElementById('txtAgencyName').style.textAlign = "center";
        document.getElementById('txtAgencyName').style.color = "gray";
    }
    document.getElementById('txtAgencyName').style.backgroundColor = "white";
    return false;
}





//*****************************Function For Client name select F2***********************
function Bindclient(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtCilentName") {


        document.getElementById("divclient").style.display = "block";
        aTag = eval(document.getElementById("txtCilentName"))
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
        document.getElementById('divclient').style.left = document.getElementById("txtCilentName").offsetLeft + leftpos - tot + "px";
        document.getElementById('divclient').style.top = document.getElementById("txtCilentName").offsetTop + toppos - scrolltop + "px"; //"510px";

        var PCOMP_CODE = document.getElementById('hiddencompcode').value;
        var PCENT_CODE = document.getElementById('hiddencenter').value;
        var PDESC = document.getElementById('txtCilentName').value;
        var PSEACH = "";
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        COMM_SER_TDS_REPORT.Bindclientname(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindclient_callback);

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

    else if (key == 9) {
        document.getElementById("divclient").style.display = "none";
        document.getElementById('txtAgencyName').focus();
        return false;
    }
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
        var toppos = 20;
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
        COMM_SER_TDS_REPORT.Bindclientname(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindclient_callback);

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

    //document.getElementById('hdnclient').value = "";
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
    if (document.getElementById('txtCilentName').value == "-------- Select Client Name---------") {
        document.getElementById('txtCilentName').value = "";
    }
    document.getElementById('txtCilentName').style.textAlign = "left";
    document.getElementById('txtCilentName').style.color = "black";
    document.getElementById('txtCilentName').style.backgroundColor = "#99FFFF";
}
function BlurClient() {
    if (document.getElementById('txtCilentName').value == "") {
        document.getElementById('txtCilentName').value = "";
        document.getElementById('txtCilentName').value = "-------- Select Client Name---------";
        document.getElementById('txtCilentName').style.textAlign = "center";
        document.getElementById('txtCilentName').style.color = "gray";
    }

    else {
        document.getElementById('txtCilentName').style.textAlign = "left";
        document.getElementById('txtCilentName').style.color = "black";
    }
    if (document.getElementById('hdnclient').value == "") {
        document.getElementById('txtCilentName').value = "";
        document.getElementById('txtCilentName').value = "-------- Select Client Name---------";
        document.getElementById('txtCilentName').style.textAlign = "center";
        document.getElementById('txtCilentName').style.color = "gray";
    }
    document.getElementById('txtCilentName').style.backgroundColor = "white";
    return false;
}




//*****************************Function For Bill Number select F2***********************
function Bindbillnofr(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtbillfrno") {


        document.getElementById("divbillno").style.display = "block";
        aTag = eval(document.getElementById("txtbillfrno"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divbillno').scrollLeft;
        var scrolltop = document.getElementById('divbillno').scrollTop;
        document.getElementById('divbillno').style.left = document.getElementById("txtbillfrno").offsetLeft + leftpos - tot + "px";
        document.getElementById('divbillno').style.top = document.getElementById("txtbillfrno").offsetTop + toppos - scrolltop + "px"; //"510px";
        var PCOMP_CODE = document.getElementById('hiddencompcode').value;
        var PCENT_CODE = document.getElementById('hiddencenter').value;
        var pBILL_NO = document.getElementById('txtbillfrno').value;
        var pextra = "";
        var pextra1 = "";


        COMM_SER_TDS_REPORT.Bindbillno(PCOMP_CODE, PCENT_CODE, pBILL_NO, pextra, pextra1, bindbillno_callback);

    }

    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtbillfrno") {
            document.getElementById('hdnbillno').value = "";
        }
    }
    else if (key == 27) {
        document.getElementById("divbillno").style.display = "none";
        document.getElementById('txtbillfrno').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "istbillno") {

            return false;
        }
    }
    else if (key == 38) {
        if (document.getElementById("divbillno").style.display == "block") {
            if (document.getElementById('istbillno').value == '0') {
                document.getElementById('txtbillfrno').focus();
            }
        }
    }


    else if (key == 9) {
        document.getElementById("divbillno").style.display = "none";
        document.getElementById('txtBilltodate').focus();
        return false;
    }


    else if (key == 40) {
        if (document.getElementById("divbillno").style.display == "block") {
            document.getElementById("istbillno").focus();
        }
    }

    else {
        document.getElementById("divbillno").style.display = "block";
        aTag = eval(document.getElementById("txtbillfrno"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divbillno').scrollLeft;
        var scrolltop = document.getElementById('divbillno').scrollTop;
        document.getElementById('divbillno').style.left = document.getElementById("txtbillfrno").offsetLeft + leftpos - tot + "px";
        document.getElementById('divbillno').style.top = document.getElementById("txtbillfrno").offsetTop + toppos - scrolltop + "px"; //"510px";
        var PCOMP_CODE = document.getElementById('hiddencompcode').value;
        var PCENT_CODE = document.getElementById('hiddencenter').value;
        var pBILL_NO = document.getElementById('txtbillfrno').value;
        var pextra = "";
        var pextra1 = "";


        COMM_SER_TDS_REPORT.Bindbillno(PCOMP_CODE, PCENT_CODE, pBILL_NO, pextra, pextra1, bindbillno_callback);

    }


}

function bindbillno_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("istbillno");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-- Select Bill Number --", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].BILL_NO, ds.Tables[0].Rows[i].BILL_DATE);
        }


    }

    //document.getElementById('hdnbillno').value = "";
    document.getElementById("istbillno").selectedIndex = 2;
    return false;
}

function fillbillno(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtbillfrno" || document.activeElement.id == "istbillno") {
            document.getElementById("divbillno").style.display = "none";
            document.getElementById('txtbillfrno').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {

        if (document.getElementById("istbillno").value == "0") {
            alert("Please Select Program Name");
            return false;
        }
        else {
            document.getElementById("divbillno").style.display = "none";
            var lstvalue = document.getElementById('istbillno').value;
            for (var k = 0; k < document.getElementById("istbillno").length; k++) {
                if (document.getElementById('istbillno').options[k].value == lstvalue) {
                    document.getElementById('hdnbillno').value = document.getElementById('istbillno').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtbillfrno').value = document.getElementById('istbillno').options[k].textContent;
                    else
                        document.getElementById('txtbillfrno').value = document.getElementById('istbillno').options[k].innerText;

                    break;
                }
            }
        }
        document.getElementById('txtbillfrno').focus();
        return false;
    }

}


function Focubillno() {
    if (document.getElementById('txtbillfrno').value == "-- Select Bill Number --") {
        document.getElementById('txtbillfrno').value = "";
    }
    document.getElementById('txtbillfrno').style.textAlign = "left";
    document.getElementById('txtbillfrno').style.color = "black";
    document.getElementById('txtbillfrno').style.backgroundColor = "#99FFFF";
}
function Blurbillno() {
    if (document.getElementById('txtbillfrno').value == "") {
        document.getElementById('txtbillfrno').value = "";
        document.getElementById('txtbillfrno').value = "-- Select Bill Number --";
        document.getElementById('txtbillfrno').style.textAlign = "center";
        document.getElementById('txtbillfrno').style.color = "gray";
    }

    else {
        document.getElementById('txtbillfrno').style.textAlign = "left";
        document.getElementById('txtbillfrno').style.color = "black";
    }
    if (document.getElementById('hdnbillno').value == "") {
        document.getElementById('txtbillfrno').value = "";
        document.getElementById('txtbillfrno').value = "-- Select Bill Number --";
        document.getElementById('txtbillfrno').style.textAlign = "center";
        document.getElementById('txtbillfrno').style.color = "gray";
    }
    document.getElementById('txtbillfrno').style.backgroundColor = "white";
    return false;
}



//*****************************Function For Bill Number select F2***********************

function Bindbillnoto(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtbilltono") {


        document.getElementById("divbillnoto").style.display = "block";
        aTag = eval(document.getElementById("txtbilltono"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divbillnoto').scrollLeft;
        var scrolltop = document.getElementById('divbillnoto').scrollTop;
        document.getElementById('divbillnoto').style.left = document.getElementById("txtbilltono").offsetLeft + leftpos - tot + "px";
        document.getElementById('divbillnoto').style.top = document.getElementById("txtbilltono").offsetTop + toppos - scrolltop + "px"; //"510px";
        var PCOMP_CODE = document.getElementById('hiddencompcode').value;
        var PCENT_CODE = document.getElementById('hiddencenter').value;
        var pBILL_NO = document.getElementById('txtbilltono').value;
        var pextra = "";
        var pextra1 = "";


        COMM_SER_TDS_REPORT.Bindbillnoto(PCOMP_CODE, PCENT_CODE, pBILL_NO, pextra, pextra1, bindbillnoto_callback);

    }

    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtbilltono") {
            document.getElementById('hdnbillnoto').value = "";
        }
    }
    else if (key == 27) {
        document.getElementById("divbillnoto").style.display = "none";
        document.getElementById('txtbilltono').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "istbillnoto") {

            return false;
        }
    }
    else if (key == 38) {
        if (document.getElementById("divbillnoto").style.display == "block") {
            if (document.getElementById('istbillnoto').value == '0') {
                document.getElementById('txtbilltono').focus();
            }
        }
    }


    else if (key == 9) {
        document.getElementById("divbillnoto").style.display = "none";
        document.getElementById('txtbillfrno').focus();
        return false;
    }


    else if (key == 40) {
        if (document.getElementById("divbillnoto").style.display == "block") {
            document.getElementById("istbillnoto").focus();
        }
    }

    else {
        document.getElementById("divbillnoto").style.display = "block";
        aTag = eval(document.getElementById("txtbilltono"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divbillnoto').scrollLeft;
        var scrolltop = document.getElementById('divbillnoto').scrollTop;
        document.getElementById('divbillnoto').style.left = document.getElementById("txtbilltono").offsetLeft + leftpos - tot + "px";
        document.getElementById('divbillnoto').style.top = document.getElementById("txtbilltono").offsetTop + toppos - scrolltop + "px"; //"510px";
        var PCOMP_CODE = document.getElementById('hiddencompcode').value;
        var PCENT_CODE = document.getElementById('hiddencenter').value;
        var pBILL_NO = document.getElementById('txtbilltono').value;
        var pextra = "";
        var pextra1 = "";


        COMM_SER_TDS_REPORT.Bindbillnoto(PCOMP_CODE, PCENT_CODE, pBILL_NO, pextra, pextra1, bindbillnoto_callback);

    }


}

function bindbillnoto_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("istbillnoto");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-- Select Bill Number --", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].BILL_NO, ds.Tables[0].Rows[i].BILL_DATE);
        }


    }

    document.getElementById('hdnbillnoto').value = "";
    document.getElementById("istbillnoto").selectedIndex = 2;
    return false;
}

function fillbillnoto(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtbilltono" || document.activeElement.id == "istbillnoto") {
            document.getElementById("divbillnoto").style.display = "none";
            document.getElementById('txtbilltono').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {

        if (document.getElementById("istbillnoto").value == "0") {
            alert("Please Select Program Name");
            return false;
        }
        else {
            document.getElementById("divbillnoto").style.display = "none";
            var lstvalue = document.getElementById('istbillnoto').value;
            for (var k = 0; k < document.getElementById("istbillnoto").length; k++) {
                if (document.getElementById('istbillnoto').options[k].value == lstvalue) {
                    document.getElementById('hdnbillnoto').value = document.getElementById('istbillnoto').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtbilltono').value = document.getElementById('istbillnoto').options[k].textContent;
                    else
                        document.getElementById('txtbilltono').value = document.getElementById('istbillnoto').options[k].innerText;

                    break;
                }
            }
        }
        document.getElementById('txtbilltono').focus();
        return false;
    }

}
function Focubillnoto() {
    if (document.getElementById('txtbilltono').value == "-- Select Bill Number --") {
        document.getElementById('txtbilltono').value = "";
    }
    document.getElementById('txtbilltono').style.textAlign = "left";
    document.getElementById('txtbilltono').style.color = "black";
    document.getElementById('txtbilltono').style.backgroundColor = "#99FFFF";
}
function Blurbillnoto() {
    if (document.getElementById('txtbilltono').value == "") {
        document.getElementById('txtbilltono').value = "";
        document.getElementById('txtbilltono').value = "-- Select Bill Number --";
        document.getElementById('txtbilltono').style.textAlign = "center";
        document.getElementById('txtbilltono').style.color = "gray";
    }

    else {
        document.getElementById('txtbilltono').style.textAlign = "left";
        document.getElementById('txtbilltono').style.color = "black";
    }
    if (document.getElementById('hdnbillnoto').value == "") {
        document.getElementById('txtbilltono').value = "";
        document.getElementById('txtbilltono').value = "-- Select Bill Number --";
        document.getElementById('txtbilltono').style.textAlign = "center";
        document.getElementById('txtbilltono').style.color = "gray";
    }
    document.getElementById('txtbilltono').style.backgroundColor = "white";
    return false;
}



//*****************************Function For RO Number select F2***********************
function Bindrono(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtRONumber") {


        document.getElementById("divrono").style.display = "block";
        aTag = eval(document.getElementById("txtRONumber"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divrono').scrollLeft;
        var scrolltop = document.getElementById('divrono').scrollTop;
        document.getElementById('divrono').style.left = document.getElementById("txtRONumber").offsetLeft + leftpos - tot + "px";
        document.getElementById('divrono').style.top = document.getElementById("txtRONumber").offsetTop + toppos - scrolltop + "px"; //"510px";
        var PCOMP_CODE = document.getElementById('hiddencompcode').value;
        var PCENT_CODE = document.getElementById('hiddencenter').value;
        var pRO_NO = document.getElementById('txtRONumber').value;
        var pextra = "";
        var pextra1 = "";


        COMM_SER_TDS_REPORT.Bindrono(PCOMP_CODE, PCENT_CODE, pRO_NO, pextra, pextra1, bindrono_callback);

    }

    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtRONumber") {
            document.getElementById('hdnrono').value = "";
        }
    }
    else if (key == 27) {
        document.getElementById("divrono").style.display = "none";
        document.getElementById('txtRONumber').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "istrono") {

            return false;
        }
    }
    else if (key == 38) {
        if (document.getElementById("divrono").style.display == "block") {
            if (document.getElementById('istrono').value == '0') {
                document.getElementById('txtRONumber').focus();
            }
        }
    }


    else if (key == 9) {
        document.getElementById("divrono").style.display = "none";
        document.getElementById('txtbilltono').focus();
        return false;
    }


    else if (key == 40) {
        if (document.getElementById("divrono").style.display == "block") {
            document.getElementById("istrono").focus();
        }
    }

    else {
        document.getElementById("divrono").style.display = "block";
        aTag = eval(document.getElementById("txtRONumber"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divrono').scrollLeft;
        var scrolltop = document.getElementById('divrono').scrollTop;
        document.getElementById('divrono').style.left = document.getElementById("txtRONumber").offsetLeft + leftpos - tot + "px";
        document.getElementById('divrono').style.top = document.getElementById("txtRONumber").offsetTop + toppos - scrolltop + "px"; //"510px";
        var PCOMP_CODE = document.getElementById('hiddencompcode').value;
        var PCENT_CODE = document.getElementById('hiddencenter').value;
        var pRO_NO = document.getElementById('txtRONumber').value;
        var pextra = "";
        var pextra1 = "";


        COMM_SER_TDS_REPORT.Bindrono(PCOMP_CODE, PCENT_CODE, pRO_NO, pextra, pextra1, bindrono_callback);

    }


}

function bindrono_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("istrono");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("----- Select RO Number -----", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].RO_NO, ds.Tables[0].Rows[i].RO_DATE);
        }


    }

   // document.getElementById('hdnrono').value = "";
    document.getElementById("istrono").selectedIndex = 1;
    return false;
}

function fillrono(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtRONumber" || document.activeElement.id == "istrono") {
            document.getElementById("divrono").style.display = "none";
            document.getElementById('txtRONumber').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {

        if (document.getElementById("istrono").value == "0") {
            alert("Please Select Program Name");
            return false;
        }
        else {
            document.getElementById("divrono").style.display = "none";
            var lstvalue = document.getElementById('istrono').value;
            for (var k = 0; k < document.getElementById("istrono").length; k++) {
                if (document.getElementById('istrono').options[k].value == lstvalue) {
                    document.getElementById('hdnrono').value = document.getElementById('istrono').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtRONumber').value = document.getElementById('istrono').options[k].textContent;
                    else
                        document.getElementById('txtRONumber').value = document.getElementById('istrono').options[k].innerText;

                    break;
                }
            }
        }
        document.getElementById('txtRONumber').focus();
        return false;
    }

}
function Focusrono() {
    if (document.getElementById('txtRONumber').value == "----- Select RO Number -----") {
        document.getElementById('txtRONumber').value = "";
    }
    document.getElementById('txtRONumber').style.textAlign = "left";
    document.getElementById('txtRONumber').style.color = "black";
    document.getElementById('txtRONumber').style.backgroundColor = "#99FFFF";
}
function Blurrono() {
    if (document.getElementById('txtRONumber').value == "") {
        document.getElementById('txtRONumber').value = "";
        document.getElementById('txtRONumber').value = "----- Select RO Number -----";
        document.getElementById('txtRONumber').style.textAlign = "center";
        document.getElementById('txtRONumber').style.color = "gray";
    }

    else {
        document.getElementById('txtRONumber').style.textAlign = "left";
        document.getElementById('txtRONumber').style.color = "black";
    }
    if (document.getElementById('hdnrono').value == "") {
        document.getElementById('txtRONumber').value = "";
        document.getElementById('txtRONumber').value = "----- Select RO Number -----";
        document.getElementById('txtRONumber').style.textAlign = "center";
        document.getElementById('txtRONumber').style.color = "gray";
    }
    document.getElementById('txtRONumber').style.backgroundColor = "white";
    return false;
}




//========================================= bind excutive f2 =====================================
function Bindexcutive(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtExecutive") {


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
        var PSEACH = "";
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        COMM_SER_TDS_REPORT.excutive(PCOMP_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindexcutive_callback);


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
        document.getElementById("divexcutive").style.display = "none";
    }

    else if (key == 9) {

        document.getElementById("divexcutive").style.display = "none";
        document.getElementById('txtRONumber').focus();
        return false;
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
        COMM_SER_TDS_REPORT.excutive(PCOMP_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindexcutive_callback);


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

  //  document.getElementById('hdnexcutive').value = "";
    document.getElementById("istexcutive").selectedIndex=1;
   // document.getElementById("txtExecutive").focus();
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
        document.getElementById('txtExecutive').style.textTransform = "capitalize";

        document.getElementById('txtExecutive').style.color = "gray";
    }
    else {
        document.getElementById('txtExecutive').style.textAlign = "left";
        document.getElementById('txtExecutive').style.color = "black";
    }

    return false;
}