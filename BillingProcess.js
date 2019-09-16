
//*****************************Function For Agency name select F2***********************
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
        BillingProcess.Bindagenyname(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindagency_callback);

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
        BillingProcess.Bindagenyname(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindagency_callback);

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
    document.getElementById("istagencyname").selectedIndex = 1 ;
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
        BillingProcess.Bindclientname(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindclient_callback);

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
        BillingProcess.Bindclientname(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindclient_callback);

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
    document.getElementById("istclient").selectedIndex = 1 ;
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



var tid = "";
function getBILLNO(event, res) {

    var key = event.keyCode ? event.keyCode : event.which;
    var id = res.split("_")[1];

    if (key == 113 && document.activeElement.id == (res)) {
        tid = res;

        document.getElementById("divbillno").style.display = "block";
        aTag = eval(document.getElementById(res))
        var btag;
        var leftpos = 5;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            if (toppos > 580) {
                toppos = 420;
            }

            btag = eval(aTag)
        }
        while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divgridview').scrollLeft;
        var scrolltop = document.getElementById('divgridview').scrollTop;
        document.getElementById('divbillno').style.left = document.getElementById(res).offsetLeft + leftpos - tot + "px";
        document.getElementById('divbillno').style.top = document.getElementById(res).offsetTop + toppos - scrolltop + "px"; //"510px";
        adsepart = "Y"
        BillingProcess.BindBillNoF2(document.getElementById('hdncompcode').value, document.getElementById('hdncenter').value, "", "", "", "", "", "", "", bindbank_callback);

    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == (res)) {
            document.getElementById(res.split("_")[0] + "_" + res.split("_")[1] + "_txtbillno").value = "";

        }
    }
    else if (key == 36 || key == 37 || key == 39) {
        document.getElementById("divbillno").style.display = "none";
    }
    else if (key == 27) {
        document.getElementById("divbillno").style.display = "none";
        document.getElementById(res).focus();
        return false;
    }
    else if (key == 13) {
        if (document.getElementById("divbillno").style.display == "block") {
            fillbillno(event);
            document.getElementById("divbillno").style.display == "none";
            return false;
        }
        if (document.activeElement.id == "lstbillno") {
            fillbillno(event);
            return false;
        }

       
    }


    else if (key == 9) {
        document.getElementById("divbillno").style.display = "none";
        document.getElementById(res).focus();
        return false;
    }
    else if (key == 38) {
        if (document.getElementById("divbillno").style.display == "block") {
            if (document.getElementById("lstbillno").value == '0') {
                document.getElementById(res).focus();

            }
        }
    }
    else if (key == 40) {
        if (document.getElementById("divbillno").style.display == "block") {
            document.getElementById("lstbillno").focus();
        }
    }
    else {
        document.getElementById("divbillno").style.display = "block";
        aTag = eval(document.getElementById(res))
        var btag;
        var leftpos = 5;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            if (toppos > 600) {
                toppos = 400;
            }

            btag = eval(aTag)
        }
        while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divbillno').scrollLeft;
        var scrolltop = document.getElementById('divbillno').scrollTop;
        document.getElementById('divbillno').style.left = document.getElementById(res).offsetLeft + leftpos - tot + "px";
        document.getElementById('divbillno').style.top = document.getElementById(res).offsetTop + toppos - scrolltop + "px"; //"510px";
        // var extra1 = document.getElementById('hiddencompcode').value;
        BillingProcess.BindBillNoF2(document.getElementById('hdncompcode').value, document.getElementById('hdncenter').value, "", "", "", "", "", "", "", bindbank_callback);
        //var resa = Booking_Data_Update.Bindagency(document.getElementById("agencyname_" + id[1]).value.toUpperCase(), document.getElementById('hiddencompcode').value, document.getElementById('hdncent').value, adsepart);

    }
    //nubberwithupdandown(event);
}
function bindbank_callback(response) {
    var ds = response.value;
    //var id = activeidgp.split("_");
  
    var lstitem = document.getElementById("lstbillno");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("----- Select Bill No ----", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].BILL_NO, ds.Tables[0].Rows[i].BILL_NO);
        }
    }
    //    document.getElementById('hdncatcode').value = "";
   

    //document.getElementById("txtclientcode_" + id[1]).value = "";
    document.getElementById("lstbillno").selectedIndex = 1;
    //document.getElementById("istevent").focus();
    return false;
}

function fillbillno(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    var id = "UserAllocationGrid_" + tid.split("_")[1] + "_txtbillno";

    if (key == 27) {
        if (document.activeElement.id == "lstbillno") {
            document.getElementById("divbillno").style.display = "none";
            document.getElementById(tid).focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {
        if (document.getElementById("lstbillno").value == "0") {
            alert("Please Select Bill Number");
            return false;
        }
        else {
            document.getElementById("divbillno").style.display = "none";
            var lstvalue = document.getElementById('lstbillno').value;
            for (var k = 0; k < document.getElementById("lstbillno").length; k++) {
                if (document.getElementById('lstbillno').options[k].value == lstvalue) {
                    document.getElementById(id).value = document.getElementById('lstbillno').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById(tid).value = document.getElementById('lstbillno').options[k].textContent;
                    else
                        document.getElementById(tid).value = document.getElementById('lstbillno').options[k].innerText;

                    break;
                }
            }
        }

        document.getElementById(tid).focus();
        return false;
    }
}
