function Bindfromtime(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if ((event.shiftKey && key == 9) || ((event.ctrlKey))) { } else
    if (key == 113 && document.activeElement.id == "txtfromtime") {
        document.getElementById("divfromtime").style.display = "block";
        aTag = eval(document.getElementById("txtfromtime"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divfromtime').scrollLeft;
        var scrolltop = document.getElementById('divfromtime').scrollTop;
        document.getElementById('divfromtime').style.left = document.getElementById("txtfromtime").offsetLeft + leftpos - tot + "px";
        document.getElementById('divfromtime').style.top = document.getElementById("txtfromtime").offsetTop + toppos - scrolltop + "px"; //"510px";
        //        if (document.getElementById('hdnprime').value == "") {
        //            alert("Please Select Prime Time");
        //            document.getElementById('rodptype').focus();
        //            return false;
        //        }
        var pcomp_code = document.getElementById('hdncompcode').value;
        var pfrom = document.getElementById('txtfromtime').value.toUpperCase();
        var ptimecode = "";
        var pextra = "";
        bookingaudit.Bindfromprime(pcomp_code, pfrom, ptimecode, pextra, bindfromtime_callback);
    }

    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtfromtime") {
            document.getElementById('txttotime').value = "";
        }
    }
    else if (key == 27 || key == 17 || key == 16 || key == 18) {
        document.getElementById("divfromtime").style.display = "none";
        document.getElementById('txtfromtime').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "istfrome") {
            FillChannel(event);
            return false;
        }
    }
    else if (key == 38) {
        if (document.getElementById("divfromtime").style.display == "block") {
            if (document.getElementById('istfrome').value == '0') {
                document.getElementById('txtfromtime').focus();
            }
        }
    }



    else if (key == 9) {
        document.getElementById("divfromtime").style.display = "none";
        document.getElementById('txtfromtime').focus();
        return false;
    }
//    else if (key == 9 && event.shiftkey == true) {
//        document.getElementById("divfromtime").style.display = "none";
//        document.getElementById('txtclint').focus();
//        return true;
//    }

    
//    if (key == 9) {
//        document.getElementById("divfromtime").style.display = "none";
//    }

        //else if (key == 9) {
        //    document.getElementById("divfromtime").style.display = "none";
        //    document.getElementById('txtnProgType').focus();
        //    return false;
        //}

    else if (key == 40) {
        if (document.getElementById("divfromtime").style.display == "block") {
            document.getElementById("istfrome").focus();
        }
    }

    else {
        //document.getElementById("divfromtime").style.display = "block";
        aTag = eval(document.getElementById("txtfromtime"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divfromtime').scrollLeft;
        var scrolltop = document.getElementById('divfromtime').scrollTop;
        document.getElementById('divfromtime').style.left = document.getElementById("txtfromtime").offsetLeft + leftpos - tot + "px";
        document.getElementById('divfromtime').style.top = document.getElementById("txtfromtime").offsetTop + toppos - scrolltop + "px"; //"510px";
        //        if (document.getElementById('hdnprime').value == "") {
        //            alert("Please Select Prime Time");
        //            document.getElementById('rodptype').focus();
        //            return false;
        //        }
        var pcomp_code = document.getElementById('hdncompcode').value;
        var pfrom = document.getElementById('txtfromtime').value.toUpperCase();
        var ptimecode = "";
        var pextra = "";
        bookingaudit.Bindfromprime(pcomp_code, pfrom, ptimecode, pextra, bindfromtime_callback);

    }
}

function bindfromtime_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("istfrome");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select From Time---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].FROM_TIME, ds.Tables[0].Rows[i].TO_TIME);
        }
    }
    document.getElementById("istfrome").selectedIndex = 1;
    //document.getElementById('txttotime').value = "";
    //document.getElementById("istfrome").value = "0";
    return false;
}

function Fillfromtime(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtfromtime" || document.activeElement.id == "istfrome") {
            document.getElementById("divfromtime").style.display = "none";
            document.getElementById('txtfromtime').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {

        if (document.getElementById("istfrome").value == "0") {
            // alert("Please Select From Time");
            return false;
        }
        else {
            document.getElementById("divfromtime").style.display = "none";
            var lstvalue = document.getElementById('istfrome').value;
            for (var k = 0; k < document.getElementById("istfrome").length; k++) {
                if (document.getElementById('istfrome').options[k].value == lstvalue) {
                    // document.getElementById('txttotime').value = document.getElementById('istfrome').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtfromtime').value = document.getElementById('istfrome').options[k].textContent;
                    else
                        document.getElementById('txtfromtime').value = document.getElementById('istfrome').options[k].innerText;

                    break;
                }
            }
        }
        document.getElementById('txtfromtime').focus();
        return false;
    }
}

//************************************************************************Prime TO  Time to time  bind************************************************************************
function Bindtotime(event) {
    var key = event.keyCode ? event.keyCode : event.which;
     if ((event.shiftKey && key == 9) || ((event.ctrlKey))) { } else
    if (key == 113 && document.activeElement.id == "txttotime") {
        document.getElementById("divtotime").style.display = "block";
        aTag = eval(document.getElementById("txttotime"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divtotime').scrollLeft;
        var scrolltop = document.getElementById('divtotime').scrollTop;
        document.getElementById('divtotime').style.left = document.getElementById("txttotime").offsetLeft + leftpos - tot + "px";
        document.getElementById('divtotime').style.top = document.getElementById("txttotime").offsetTop + toppos - scrolltop + "px"; //"510px";
        //        if (document.getElementById('hdnprime').value == "") {
        //            alert("Please Select Prime Time");
        //            document.getElementById('rodptype').focus();
        //            return false;
        //        }
        var pcomp_code = document.getElementById('hdncompcode').value;
        var pfrom = document.getElementById('txttotime').value.toUpperCase();
        var ptimecode = "";
        var pextra = "";
        bookingaudit.Bindfromprime(pcomp_code, pfrom, ptimecode, pextra, bindtotime_callback);
    }

    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txttotime") {
            document.getElementById('txttotime').value = "";
        }
    }
    else if (key == 27 || key == 17 || key == 16 || key == 18) {
        document.getElementById("divtotime").style.display = "none";
        document.getElementById('txttotime').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "isttotime") {
            FillChannel(event);
            return false;
        }
    }
    else if (key == 38) {
        if (document.getElementById("divtotime").style.display == "block") {
            if (document.getElementById('isttotime').value == '0') {
                document.getElementById('txttotime').focus();
            }
        }
    }


    else if (key == 9) {
        document.getElementById("divtotime").style.display = "none";
        document.getElementById('txttotime').focus();
        return false;
    }
//    else if (key == 9 && event.shiftkey == true) {
//        document.getElementById("divtotime").style.display = "none";
//        document.getElementById('txttotime').focus();
//        return true;
//    }
   
//     if (key == 9) {
//        document.getElementById("divtotime").style.display = "none";
//    }


        //else if (key == 9) {
        //    document.getElementById("divtotime").style.display = "none";
        //    document.getElementById('txtnProgType').focus();
        //    return false;
        //}

    else if (key == 40) {
        if (document.getElementById("divtotime").style.display == "block") {
            document.getElementById("isttotime").focus();
        }
    }

    else {
        document.getElementById("divtotime").style.display = "block";
        aTag = eval(document.getElementById("txttotime"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divtotime').scrollLeft;
        var scrolltop = document.getElementById('divtotime').scrollTop;
        document.getElementById('divtotime').style.left = document.getElementById("txttotime").offsetLeft + leftpos - tot + "px";
        document.getElementById('divtotime').style.top = document.getElementById("txttotime").offsetTop + toppos - scrolltop + "px"; //"510px";
        //        if (document.getElementById('hdnprime').value == "") {
        //            alert("Please Select Prime Time");
        //            document.getElementById('rodptype').focus();
        //            return false;
        //        }
        var pcomp_code = document.getElementById('hdncompcode').value;
        var pfrom = document.getElementById('txttotime').value.toUpperCase();
        var ptimecode = "";
        var pextra = "";
        bookingaudit.Bindfromprime(pcomp_code, pfrom, ptimecode, pextra, bindtotime_callback);

    }
}

function bindtotime_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("isttotime");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select TO Time.---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].TO_TIME, ds.Tables[0].Rows[i].TO_TIME);
        }
    }
    document.getElementById("isttotime").selectedIndex = 1;

    //document.getElementById('txttotime').value = "";
    //document.getElementById("isttotime").value = "0";
    return false;
}

function Filltotime(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txttotime" || document.activeElement.id == "isttotime") {
            document.getElementById("divtotime").style.display = "none";
            document.getElementById('txttotime').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {

        if (document.getElementById("isttotime").value == "0") {
            //alert("Please Select TO Time");
            return false;
        }
        else {
            document.getElementById("divtotime").style.display = "none";
            var lstvalue = document.getElementById('isttotime').value;
            for (var k = 0; k < document.getElementById("isttotime").length; k++) {
                if (document.getElementById('isttotime').options[k].value == lstvalue) {
                    // document.getElementById('txttotime').value = document.getElementById('isttotime').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txttotime').value = document.getElementById('isttotime').options[k].textContent;
                    else
                        document.getElementById('txttotime').value = document.getElementById('isttotime').options[k].innerText;

                    break;
                }
            }
        }
        document.getElementById('txttotime').focus();
        return false;
    }
}
//*****************************Function For Agency name select F2***********************
function Bindagencyname(event) {
    var key = event.keyCode ? event.keyCode : event.which;
     if ((event.shiftKey && key == 9) || ((event.ctrlKey))) { } else
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
        bookingaudit.Bindagenyname(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindagency_callback);

    }

    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtagncy") {
            document.getElementById('hdngencode').value = "";
        }
    }
    else if (key == 27 || key == 17 || key == 16 || key == 18) {
        document.getElementById("divagename").style.display = "none";
        document.getElementById('txtagncy').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "istagencyname") {
            filllagency();
            return false;
        }
    }

    else if (key == 9) {
        document.getElementById("divagename").style.display = "none";
        document.getElementById('txtagncy').focus();
        return false;
    }

//    else if (key == 9 && event.shiftkey == true) {
//        document.getElementById("divagename").style.display = "none";
//        document.getElementById('txtagncy').focus();
//        return true;
//    }
   
//        if (key == 9) {
//            document.getElementById("divagename").style.display = "none";
//        }

        //else if (key == 9) {
        //    document.getElementById("divagename").style.display = "none";
        //    // document.getElementById('txtdes').focus();
        //    // return false;
        //}
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
        //document.getElementById("divagename").style.display = "block";
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
        bookingaudit.Bindagenyname(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindagency_callback);

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
    document.getElementById("istagencyname").selectedIndex = 1;

    //document.getElementById('hdngencode').value = "";
    //document.getElementById("istagencyname").value = "0";
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
    if ((event.shiftKey && key == 9) || ((event.ctrlKey))) { } else
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
        bookingaudit.Bindclientname(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindclient_callback);

    }

    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtclint") {
            document.getElementById('hdnclient').value = "";
        }
    }
    else if (key == 27 || key == 17 || key == 16 || key == 18) {
        document.getElementById("divclient").style.display = "none";
        document.getElementById('txtclint').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "istclient") {
            Bindclient(event);
            return false;
        }
    }


    else if (key == 9) {
        document.getElementById("divclient").style.display = "none";
        document.getElementById('txtclint').focus();
        return false;
    }
//    else if (key == 9 && event.shiftkey == true) {
//        document.getElementById("divclient").style.display = "none";
//        document.getElementById('txttodate').focus();
//        return true;
//    }
    
//        if (key == 9) {
//            document.getElementById("divclient").style.display = "none";
//        }


        //else if (key == 9) {
        //    document.getElementById("divclient").style.display = "none";
        //    //document.getElementById('txtdes').focus();

        //}
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
        //document.getElementById("divclient").style.display = "block";
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
        bookingaudit.Bindclientname(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindclient_callback);

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
    document.getElementById("istclient").selectedIndex = 1;

    //document.getElementById('hdnclient').value = "";
    //document.getElementById("istclient").value = "0";
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




function Focusfrmtime() {
    if (document.getElementById('txtfromtime').value == "-------- Select From Time---------") {
        document.getElementById('txtfromtime').value = "";
    }
    document.getElementById('txtfromtime').style.textAlign = "left";
    document.getElementById('txtfromtime').style.color = "black";
    document.getElementById('txtfromtime').style.backgroundColor = "#99FFFF";
}
function Blurfrmtime() {
    if (document.getElementById('txtfromtime').value == "") {
        document.getElementById('txtfromtime').value = "";
        document.getElementById('txtfromtime').value = "-------- Select From Time---------";
        document.getElementById('txtfromtime').style.textAlign = "center";
        document.getElementById('txtfromtime').style.color = "gray";
    }

    else {
        document.getElementById('txtfromtime').style.textAlign = "left";
        document.getElementById('txtfromtime').style.color = "black";
    }
    //if (document.getElementById('txtfromtime').value == "") {
    //    document.getElementById('txtfromtime').value = "";
    //    document.getElementById('txtfromtime').value = "-------- Select From Time---------";
    //    document.getElementById('txtfromtime').style.textAlign = "center";
    //    document.getElementById('txtfromtime').style.color = "gray";
    //}
    document.getElementById('txtfromtime').style.backgroundColor = "white";
    return false;
}
function Focustotime() {
    if (document.getElementById('txttotime').value == "-------- Select To Time---------") {
        document.getElementById('txttotime').value = "";
    }
    document.getElementById('txttotime').style.textAlign = "left";
    document.getElementById('txttotime').style.color = "black";
    document.getElementById('txttotime').style.backgroundColor = "#99FFFF";
}
function Blurtotime() {
    if (document.getElementById('txttotime').value == "") {
        document.getElementById('txttotime').value = "";
        document.getElementById('txttotime').value = "-------- Select To Time---------";
        document.getElementById('txttotime').style.textAlign = "center";
        document.getElementById('txttotime').style.color = "gray";
    }

    else {
        document.getElementById('txttotime').style.textAlign = "left";
        document.getElementById('txttotime').style.color = "black";
    }
    if (document.getElementById('txttotime').value == "") {
        document.getElementById('txttotime').value = "";
        document.getElementById('txttotime').value = "-------- Select To Time---------";
        document.getElementById('txttotime').style.textAlign = "center";
        document.getElementById('txttotime').style.color = "gray";
    }
    document.getElementById('txttotime').style.backgroundColor = "white";
    return false;
}

