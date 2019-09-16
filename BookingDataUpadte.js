var browser = navigator.appName;
var dsgexec;
var currpage = 0;
var flag = "";
//var editflag;
var maxreconpage;
if (browser == "Microsoft Internet Explorer") {
    maxreconpage = 20;
}
else {
    maxreconpage = 17;
}

function onloadfun() {

    focus_company();
    blur_company();
    focus_agencyname();
    blur_agencyname();
    focus_state();
    blur_state();
    focus_client();
    blur_client();
    focus_district();
    blur_district();
    focus_zone();
    blur_zone();
    focus_region();
    blur_region();
    focus_taluka();
    blur_taluka();
    focus_industry();
    blur_industry();
    focus_product();
    blur_product();
    focus_brand();
    blur_brand();
    focus_exce();
    blur_exce();
    focus_ret();
    blur_ret();
    focus_mainevent();
    blur_mainevent();
    return false;

}
function Bindcompname(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtcompany") {


        document.getElementById("divcompname").style.display = "block";
        aTag = eval(document.getElementById("txtcompany"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divcompname').scrollLeft;
        var scrolltop = document.getElementById('divcompname').scrollTop;
        document.getElementById('divcompname').style.left = document.getElementById("txtcompany").offsetLeft + leftpos - tot + "px";
        document.getElementById('divcompname').style.top = document.getElementById("txtcompany").offsetTop + toppos - scrolltop + "px"; //"510px";
        var extra1 = "";
        var compname = document.getElementById('txtcompany').value.toUpperCase()
        BookingDataUpdate.Bindcomname(compname, extra1, bindcompname_callback);

    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtcompany") {
            document.getElementById('hiddeompcodename').value = "";
        }
    }
    else if (key == 27 || key == 17 || key == 18 || key == 16) {
        document.getElementById("divcompname").style.display = "none";
        document.getElementById('txtcompany').focus();
        return false;
    }
    else if (key == 13) {
        // if (document.activeElement.id == "lstcompname") {
        filllcompanyname(event);
        //  return false;
        // }
    }
        //    else if (key == 9) {
        //        document.getElementById('divcompname').style.display = "none";
        //        document.getElementById('dradtype').focus();
        //        return false;
        //    }
    else if (key == 38) {
        if (document.getElementById("divcompname").style.display == "block") {
            if (document.getElementById('lstcompname').value == '0') {
                document.getElementById('txtcompany').focus();
            }
        }
    }

    else if (key == 40) {
        if (document.getElementById("divcompname").style.display == "block") {
            document.getElementById("lstcompname").focus();
        }
    }

    //    else {

    //        document.getElementById("divcompname").style.display = "block";
    //        aTag = eval(document.getElementById("txtcompany"))
    //        var btag;
    //        var leftpos = 0;
    //        var toppos = 20;
    //        do {
    //            aTag = eval(aTag.offsetParent);
    //            leftpos += aTag.offsetLeft;
    //            toppos += aTag.offsetTop;
    //            btag = eval(aTag)
    //        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
    //        var tot = document.getElementById('divcompname').scrollLeft;
    //        var scrolltop = document.getElementById('divcompname').scrollTop;
    //        document.getElementById('divcompname').style.left = document.getElementById("txtcompany").offsetLeft + leftpos - tot + "px";
    //        document.getElementById('divcompname').style.top = document.getElementById("txtcompany").offsetTop + toppos - scrolltop + "px"; //"510px";
    //        var extra1 = "";
    //        var compname = document.getElementById('txtcompany').value.toUpperCase()
    //        Booking_Data_Update.Bindcomname(compname, extra1, bindcompname_callback);

    //    }
}
function bindcompname_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("lstcompname");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select Company Name ---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].COMP_NAME, ds.Tables[0].Rows[i].COMP_CODE + "~" + ds.Tables[0].Rows[i].RES);
        }


    }

    document.getElementById('hiddeompcodename').value;

    document.getElementById("lstcompname").selectedIndex = 1;
    //document.getElementById("lstcompname").focus();
    return false;
}

function filllcompanyname(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtcompany" || document.activeElement.id == "lstcompname") {
            document.getElementById("divcompname").style.display = "none";
            document.getElementById('txtcompany').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {

        if (document.getElementById("lstcompname").value == "0") {
            alert("Please Select Company Name");
            return false;
        }
        else {
            document.getElementById("divcompname").style.display = "none";
            var lstvalue = document.getElementById('lstcompname').value;
            for (var k = 0; k < document.getElementById("lstcompname").length; k++) {
                if (document.getElementById('lstcompname').options[k].value == lstvalue) {
                    var compcode = document.getElementById('lstcompname').options[k].value;
                    compcode = compcode.split("~");
                    document.getElementById('hiddeompcodename').value = compcode[0];
                    document.getElementById('hiddencompanytype').value = compcode[1];

                    // document.getElementById('hiddeompcodename').value = document.getElementById('lstcompname').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtcompany').value = document.getElementById('lstcompname').options[k].textContent;
                    else
                        document.getElementById('txtcompany').value = document.getElementById('lstcompname').options[k].innerText;

                    break;
                }
            }
        }
        document.getElementById('txtcompany').focus();
        return false;
    }

}

function focus_company() {
    if (document.getElementById('txtcompany').value == "--Select Company Name--") {
        document.getElementById('txtcompany').value = "";
    }
    document.getElementById('txtcompany').style.textAlign = "left";
    document.getElementById('txtcompany').style.color = "black";
    document.getElementById('txtcompany').style.backgroundColor = "#99FFFF";
}
function blur_company() {
    if (document.getElementById('txtcompany').value == "") {
        document.getElementById('txtcompany').value = "";
        document.getElementById('txtcompany').value = "--Select Company Name--";
        document.getElementById('txtcompany').style.textAlign = "center";
        document.getElementById('txtcompany').style.color = "gray";
    }

    else {
        document.getElementById('txtcompany').style.textAlign = "left";
        document.getElementById('txtcompany').style.color = "black";
    }
    if (document.getElementById('hiddeompcodename').Value == "") {
        document.getElementById('txtcompany').value = "";
        document.getElementById('txtcompany').value = "--Select Company Name--";
        document.getElementById('txtcompany').style.textAlign = "left";
        document.getElementById('txtcompany').style.color = "gray";
    }
    document.getElementById('txtcompany').style.backgroundColor = "white";
    return false;
}
//=====================================================================agency f2=================
function bindagncyname(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113) {
        if (document.activeElement.id == "txtagencyname") {

            document.getElementById("divagency").style.display = "block";
            aTag = eval(document.getElementById("txtagencyname"))
            var btag;
            var leftpos = 0;
            var toppos = 0;
            do {
                aTag = eval(aTag.offsetParent);
                leftpos += aTag.offsetLeft;
                toppos += aTag.offsetTop;
                btag = eval(aTag)
            }
            while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
            var tot = document.getElementById('divagency').scrollLeft;
            var scrolltop = document.getElementById('divagency').scrollTop;
            document.getElementById('divagency').style.left = document.getElementById("txtagencyname").offsetLeft + leftpos - tot + "px";
            document.getElementById('divagency').style.top = document.getElementById("txtagencyname").offsetTop + toppos - scrolltop + 18 + "px"; //"510px";
            //            if (document.getElementById('hdsepartad').value == "N") {
            //                adsepart = "N"
            //            }
            //            else {
            adsepart = "Y"
            // }
            var resa = BookingDataUpdate.Bindagency(document.getElementById('txtagencyname').value.toUpperCase(), document.getElementById('hiddencompcode').value, document.getElementById('hdncent').value, adsepart);
            bindag_callback(resa);
        }
    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtagencyname") {
            document.getElementById('hiddeenagencycode').value = "";
        }
    }
    else if (key == 27 || key == 17 || key == 18 || key == 16) {
        if (document.activeElement.id == "txtagencyname" || document.activeElement.id == "lstagency") {
            document.getElementById("divagency").style.display = "none";
            document.getElementById('txtagencyname').focus();
            return false;
        }
    }
    else if (key == 13) {
        //if (document.activeElement.id == "lstagency") {
        fillagency(event);
        //  return false;
        // }
        document.getElementById("divagency").style.display = "none";
    }
        //    else if (key == 9) {
        //        document.getElementById("divagency").style.display = "none";
        //        document.getElementById('txtdistrict').focus();
        //        return false;
        //    }
    else if (key == 38) {
        if (document.getElementById("divagency").style.display == "block") {
            if (document.getElementById("lstagency").value == '0') {
                document.getElementById("txtagencyname").focus();

            }
        }
    }
    else if (key == 40) {
        if (document.getElementById("divagency").style.display == "block") {
            document.getElementById("lstagency").focus();
        }
    }
    //    else {
    //        document.getElementById("divagency").style.display = "block";
    //        aTag = eval(document.getElementById("txtagencyname"))
    //        var btag;
    //        var leftpos = 0;
    //        var toppos = 0;
    //        do {
    //            aTag = eval(aTag.offsetParent);
    //            leftpos += aTag.offsetLeft;
    //            toppos += aTag.offsetTop;
    //            btag = eval(aTag)
    //        }
    //        while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
    //        var tot = document.getElementById('divagency').scrollLeft;
    //        var scrolltop = document.getElementById('divagency').scrollTop;
    //        document.getElementById('divagency').style.left = document.getElementById("txtagencyname").offsetLeft + leftpos - tot + "px";
    //        document.getElementById('divagency').style.top = document.getElementById("txtagencyname").offsetTop + toppos - scrolltop + 18 + "px"; //"510px";
    //        //        if (document.getElementById('hdsepartad').value == "N") {
    //        //            adsepart = "N"
    //        //        }
    //        //        else {
    //        adsepart = "Y"
    //        //}
    //        var resa = Booking_Data_Update.Bindagency(document.getElementById('txtagencyname').value.toUpperCase(), document.getElementById('hiddencompcode').value, document.getElementById('hdncent').value, adsepart);
    //        bindag_callback(resa);
    //    }
}
function bindag_callback(response) {
    ds = response.value;
    var lstitem = document.getElementById("lstagency");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("---Agency Name---", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].AGENCY_NAME, ds.Tables[0].Rows[i].AGENCY_CODE_SUBCODE);
        }
    }
    document.getElementById('hiddeenagencycode').value = "";
    //document.getElementById("lstagency").value = "0";
    document.getElementById("lstagency").selectedIndex = 1;
    //document.getElementById("lstagency").focus();
    return false;
}
function fillagency(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtagencyname" || document.activeElement.id == "lstagency") {
            document.getElementById("divagency").style.display = "none";
            document.getElementById('txtagencyname').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {
        if (document.getElementById("lstagency").value == "0") {
            //  alert("Please Select Agency");
            // fillagency(event);
            return false;
        }
        else {
            document.getElementById("divagency").style.display = "none";
            var lstvalue = document.getElementById('lstagency').value;
            for (var k = 0; k < document.getElementById("lstagency").length; k++) {
                if (document.getElementById('lstagency').options[k].value == lstvalue) {
                    document.getElementById('hiddeenagencycode').value = document.getElementById('lstagency').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtagencyname').value = document.getElementById('lstagency').options[k].textContent;
                    else
                        document.getElementById('txtagencyname').value = document.getElementById('lstagency').options[k].innerText;
                    break;
                }
            }
        }
        document.getElementById('txtagencyname').focus();
        return false;
    }
}

function focus_agencyname() {
    if (document.getElementById('txtagencyname').value == "---------------Select Agency Name---------------") {
        document.getElementById('txtagencyname').value = "";
    }
    document.getElementById('txtagencyname').style.textAlign = "left";
    document.getElementById('txtagencyname').style.color = "black";
    document.getElementById('txtagencyname').style.backgroundColor = "#99FFFF";
}
function blur_agencyname() {
    if (document.getElementById('txtagencyname').value == "") {
        document.getElementById('txtagencyname').value = "";
        document.getElementById('txtagencyname').value = "---------------Select Agency Name---------------";
        document.getElementById('txtagencyname').style.textAlign = "center";
        document.getElementById('txtagencyname').style.color = "gray";
    }

    else {
        document.getElementById('txtagencyname').style.textAlign = "left";
        document.getElementById('txtagencyname').style.color = "black";
    }
    if (document.getElementById('hiddeenagencycode').value == "") {
        document.getElementById('txtagencyname').value = "";
        document.getElementById('txtagencyname').value = "---------------Select Agency Name---------------";
        document.getElementById('txtagencyname').style.textAlign = "center";
        document.getElementById('txtagencyname').style.color = "gray";
    }
    document.getElementById('txtagencyname').style.backgroundColor = "white";
    return false;
}



//***************************************************************STATE F2**************************************
function Bindstatename(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtstate") {


        document.getElementById("divstate").style.display = "block";
        aTag = eval(document.getElementById("txtstate"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divstate').scrollLeft;
        var scrolltop = document.getElementById('divstate').scrollTop;
        document.getElementById('divstate').style.left = document.getElementById("txtstate").offsetLeft + leftpos - tot + "px";
        document.getElementById('divstate').style.top = document.getElementById("txtstate").offsetTop + toppos - scrolltop + "px"; //"510px";
        var extra1 = "D";
        var statename = document.getElementById('txtstate').value.toUpperCase()
        var centcode = document.getElementById('hdncent').value;
        BookingDataUpdate.Bindtargenamef2(statename, extra1, centcode, bindstatename_callback);

    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtstate") {
            document.getElementById('hiddenstate').value = "";
        }
    }
    else if (key == 27 || key == 17 || key == 18 || key == 16) {
        document.getElementById("divstate").style.display = "none";
        document.getElementById('txtstate').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "iststate") {
            filllstatename(event);
            return false;
        }
    }
        //    else if (key == 9) {
        //        document.getElementById("divstate").style.display = "none";
        //        document.getElementById('txtagencyname').focus();
        //        return false;
        //    }
    else if (key == 38) {
        if (document.getElementById("divstate").style.display == "block") {
            if (document.getElementById('iststate').value == '0') {
                document.getElementById('txtstate').focus();
            }
        }
    }
    else if (key == 40) {
        if (document.getElementById("divstate").style.display == "block") {
            document.getElementById("iststate").focus();
        }
    }
    //    else {
    //        document.getElementById("divstate").style.display = "block";
    //        aTag = eval(document.getElementById("txtstate"))
    //        var btag;
    //        var leftpos = 0;
    //        var toppos = 20;
    //        do {
    //            aTag = eval(aTag.offsetParent);
    //            leftpos += aTag.offsetLeft;
    //            toppos += aTag.offsetTop;
    //            btag = eval(aTag)
    //        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
    //        var tot = document.getElementById('divstate').scrollLeft;
    //        var scrolltop = document.getElementById('divstate').scrollTop;
    //        document.getElementById('divstate').style.left = document.getElementById("txtstate").offsetLeft + leftpos - tot + "px";
    //        document.getElementById('divstate').style.top = document.getElementById("txtstate").offsetTop + toppos - scrolltop + "px"; //"510px";
    //        var extra1 = "D";
    //        var statename = document.getElementById('txtstate').value.toUpperCase()
    //        var centcode = document.getElementById('hdncent').value;
    //        Booking_Data_Update.Bindtargenamef2(statename, extra1, centcode, bindstatename_callback);

    //    }

}
function bindstatename_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("iststate");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select state Name ---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].NAME, ds.Tables[0].Rows[i].CODE);
        }


    }

    document.getElementById('hiddenstate').value = "";
    document.getElementById("iststate").value = "0";
    document.getElementById("iststate").selectedIndex = 1;
    //document.getElementById("iststate").focus();
    return false;
}

function filllstatename(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtstate" || document.activeElement.id == "iststate") {
            document.getElementById("divstate").style.display = "none";
            document.getElementById('txtstate').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {

        if (document.getElementById("iststate").value == "0") {
            // alert("Please Select state Name");
            return false;
        }
        else {
            document.getElementById("divstate").style.display = "none";
            var lstvalue = document.getElementById('iststate').value;
            for (var k = 0; k < document.getElementById("iststate").length; k++) {
                if (document.getElementById('iststate').options[k].value == lstvalue) {
                    document.getElementById('hiddenstate').value = document.getElementById('iststate').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtstate').value = document.getElementById('iststate').options[k].textContent;
                    else
                        document.getElementById('txtstate').value = document.getElementById('iststate').options[k].innerText;

                    break;
                }
            }
        }
        document.getElementById('txtstate').focus();
        return false;
    }

}

function focus_state() {
    if (document.getElementById('txtstate').value == "--Select State Name--") {
        document.getElementById('txtstate').value = "";
    }
    document.getElementById('txtstate').style.textAlign = "left";
    document.getElementById('txtstate').style.color = "black";
    document.getElementById('txtstate').style.backgroundColor = "#99FFFF";
}
function blur_state() {
    if (document.getElementById('txtstate').value == "") {
        document.getElementById('txtstate').value = "";
        document.getElementById('txtstate').value = "--Select State Name--";
        document.getElementById('txtstate').style.textAlign = "center";
        document.getElementById('txtstate').style.color = "gray";
    }

    else {
        document.getElementById('txtstate').style.textAlign = "left";
        document.getElementById('txtstate').style.color = "black";
    }
    if (document.getElementById('hiddenstate').value == "") {
        document.getElementById('txtstate').value = "";
        document.getElementById('txtstate').value = "--Select State Name--";
        document.getElementById('txtstate').style.textAlign = "center";
        document.getElementById('txtstate').style.color = "gray";
    }
    document.getElementById('txtstate').style.backgroundColor = "white";
    return false;
}



///=================================================================================client name f2===============================================================


function bindclientname(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 113) {
        if (document.activeElement.id == "txtclient") {
            document.getElementById("divclient").style.display = "block";
            aTag = eval(document.getElementById("txtclient"))
            var btag;
            var leftpos = -21;
            var toppos = 0;
            do {
                aTag = eval(aTag.offsetParent);
                leftpos += aTag.offsetLeft;
                toppos += aTag.offsetTop;
                btag = eval(aTag)
            } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
            var tot = document.getElementById('divclient').scrollLeft;
            var scrolltop = document.getElementById('divclient').scrollTop;
            document.getElementById('divclient').style.left = document.getElementById("txtclient").offsetLeft + leftpos - tot + "px";
            document.getElementById('divclient').style.top = document.getElementById("txtclient").offsetTop + toppos - scrolltop + 18 + "px"; //"510px";
            var pcentcode = document.getElementById('hdncent').value;
            //            if (document.getElementById('hdsepartad').value == "N") {
            //                adsepart = "N"
            //            }
            //            else {
            adsepart = "Y"
            //}
            var resc = BookingDataUpdate.Bindclient(document.getElementById('txtclient').value.toUpperCase(), document.getElementById('hiddencompcode').value, adsepart, pcentcode);
            bindcl_callback(resc);
        }
    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtclient") {
            document.getElementById('hideenclintcode').value = "";
        }
    }
    else if (key == 27 || key == 17 || key == 18 || key == 16) {
        if (document.activeElement.id == "txtclient" || document.activeElement.id == "lstclient") {
            document.getElementById("divclient").style.display = "none";
            document.getElementById('txtclient').focus();
            return false;
        }
    }
    else if (key == 13) {
        // if (document.activeElement.id == "lstclient") {
        fillclient(event);
        //  return false;
        //   }
        document.getElementById("divclient").style.display = "none";
    }
        //    else if (key == 9) {
        //        document.getElementById("divclient").style.display = "none";
        //        document.getElementById('txttaluka').focus();
        //        return false;
        //    }
    else if (key == 38) {
        if (document.getElementById("divclient").style.display == "block") {
            if (document.getElementById("lstclient").value == '0') {
                document.getElementById("txtclient").focus();

            }
        }
    }
    else if (key == 40) {
        if (document.getElementById("divclient").style.display == "block") {
            document.getElementById("lstclient").focus();
        }
    }
    //    else {
    //        document.getElementById("divclient").style.display = "block";
    //        aTag = eval(document.getElementById("txtclient"))
    //        var btag;
    //        var leftpos = 0;
    //        var toppos = 0;
    //        do {
    //            aTag = eval(aTag.offsetParent);
    //            leftpos += aTag.offsetLeft;
    //            toppos += aTag.offsetTop;
    //            btag = eval(aTag)
    //        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
    //        var tot = document.getElementById('divclient').scrollLeft;
    //        var scrolltop = document.getElementById('divclient').scrollTop;
    //        document.getElementById('divclient').style.left = document.getElementById("txtclient").offsetLeft + leftpos - tot + "px";
    //        document.getElementById('divclient').style.top = document.getElementById("txtclient").offsetTop + toppos - scrolltop + 18 + "px"; //"510px";
    //        var pcentcode = document.getElementById('hdncent').value;
    //        //        if (document.getElementById('hdsepartad').value == "N") {
    //        //            adsepart = "N"
    //        //        }
    //        //        else {
    //        adsepart = "Y"
    //        //}
    //        var resc = Booking_Data_Update.Bindclient(document.getElementById('txtclient').value.toUpperCase(), document.getElementById('hiddencompcode').value, adsepart, pcentcode);
    //        bindcl_callback(resc);
    //    }
}
function bindcl_callback(response) {
    ds = response.value;
    var lstitem = document.getElementById("lstclient");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("------------------------------------- Select Client -------------------------------------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].CLIENT_NAME, ds.Tables[0].Rows[i].CLIENT_CODE);
        }
    }
    document.getElementById('hideenclintcode').value = "";
    document.getElementById("lstclient").value = "0";
    document.getElementById("lstclient").selectedIndex = 1;
    //document.getElementById("lstclient").focus();
    return false;
}
function fillclient(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtclient" || document.activeElement.id == "lstclient") {
            document.getElementById("divclient").style.display = "none";
            document.getElementById('txtclient').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {
        if (document.getElementById("lstclient").value == "0") {
            alert("Please Select Client");
            return false;
        }
        else {
            document.getElementById("divclient").style.display = "none";
            var lstvalue = document.getElementById('lstclient').value;
            for (var k = 0; k < document.getElementById("lstclient").length; k++) {
                if (document.getElementById('lstclient').options[k].value == lstvalue) {
                    document.getElementById('hideenclintcode').value = document.getElementById('lstclient').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtclient').value = document.getElementById('lstclient').options[k].textContent;
                    else
                        document.getElementById('txtclient').value = document.getElementById('lstclient').options[k].innerText;
                    break;
                }
            }
        }
        document.getElementById('txtclient').focus();
        return false;
    }
}

function focus_client() {
    if (document.getElementById('txtclient').value == "---------------Select Client Name---------------") {
        document.getElementById('txtclient').value = "";
    }
    document.getElementById('txtclient').style.textAlign = "left";
    document.getElementById('txtclient').style.color = "black";
    document.getElementById('txtclient').style.backgroundColor = "#99FFFF";
}
function blur_client() {
    if (document.getElementById('txtclient').value == "") {
        document.getElementById('txtclient').value = "";
        document.getElementById('txtclient').value = "---------------Select Client Name---------------";
        document.getElementById('txtclient').style.textAlign = "center";
        document.getElementById('txtclient').style.color = "gray";
    }

    else {
        document.getElementById('txtclient').style.textAlign = "left";
        document.getElementById('txtclient').style.color = "black";
    }
    if (document.getElementById('hideenclintcode').value == "") {
        document.getElementById('txtclient').value = "";
        document.getElementById('txtclient').value = "---------------Select Client Name---------------";
        document.getElementById('txtclient').style.textAlign = "center";
        document.getElementById('txtclient').style.color = "gray";
    }
    document.getElementById('txtclient').style.backgroundColor = "white";
    return false;
}



//***************************************************************District F2**************************************
function Binddistrictname(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtdistrict") {


        document.getElementById("divdistrict").style.display = "block";
        aTag = eval(document.getElementById("txtdistrict"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divdistrict').scrollLeft;
        var scrolltop = document.getElementById('divdistrict').scrollTop;
        document.getElementById('divdistrict').style.left = document.getElementById("txtdistrict").offsetLeft + leftpos - tot + "px";
        document.getElementById('divdistrict').style.top = document.getElementById("txtdistrict").offsetTop + toppos - scrolltop + "px"; //"510px";
        var extra1 = document.getElementById('hiddenstate').value
        var districtname = document.getElementById('txtdistrict').value.toUpperCase()
        BookingDataUpdate.Binddistrictnamef2(districtname, extra1, binddistrict_callback);

    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtdistrict") {
            document.getElementById('hiddendistrict').value = "";
        }
    }
    else if (key == 27 || key == 17 || key == 18 || key == 16) {
        document.getElementById("divdistrict").style.display = "none";
        document.getElementById('txtdistrict').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "istdistrict") {
            fillldistrictname(event);
            return false;
        }
    }
        //    else if (key == 9) {
        //        document.getElementById("divdistrict").style.display = "none";
        //        document.getElementById('txtclient').focus();
        //        return false;
        //    }
    else if (key == 38) {
        if (document.getElementById("divdistrict").style.display == "block") {
            if (document.getElementById("istdistrict").value == '0') {
                document.getElementById("txtdistrict").focus();

            }
        }
    }
    else if (key == 40) {
        if (document.getElementById("divdistrict").style.display == "block") {
            document.getElementById("istdistrict").focus();
        }
    }


    //    else {
    //        document.getElementById("divdistrict").style.display = "block";
    //        aTag = eval(document.getElementById("txtdistrict"))
    //        var btag;
    //        var leftpos = 0;
    //        var toppos = 20;
    //        do {
    //            aTag = eval(aTag.offsetParent);
    //            leftpos += aTag.offsetLeft;
    //            toppos += aTag.offsetTop;
    //            btag = eval(aTag)
    //        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
    //        var tot = document.getElementById('divdistrict').scrollLeft;
    //        var scrolltop = document.getElementById('divdistrict').scrollTop;
    //        document.getElementById('divdistrict').style.left = document.getElementById("txtdistrict").offsetLeft + leftpos - tot + "px";
    //        document.getElementById('divdistrict').style.top = document.getElementById("txtdistrict").offsetTop + toppos - scrolltop + "px"; //"510px";
    //        var extra1 = document.getElementById('hiddenstate').value
    //        var districtname = document.getElementById('txtdistrict').value.toUpperCase()
    //        Booking_Data_Update.Binddistrictnamef2(districtname, extra1, binddistrict_callback);

    //    }
}
function binddistrict_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("istdistrict");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select District Name ---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].DIST_NAME, ds.Tables[0].Rows[i].DIST_CODE);
        }


    }

    document.getElementById('hiddendistrict').value = "";
    document.getElementById("istdistrict").value = "0";
    document.getElementById("istdistrict").selectedIndex = 1;
    return false;
}

function fillldistrictname(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtdistrict" || document.activeElement.id == "istdistrict") {
            document.getElementById("divdistrict").style.display = "none";
            document.getElementById('txtdistrict').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {

        if (document.getElementById("istdistrict").value == "0") {
            alert("Please Select District Name");
            return false;
        }
        else {
            document.getElementById("divdistrict").style.display = "none";
            var lstvalue = document.getElementById('istdistrict').value;
            for (var k = 0; k < document.getElementById("istdistrict").length; k++) {
                if (document.getElementById('istdistrict').options[k].value == lstvalue) {
                    document.getElementById('hiddendistrict').value = document.getElementById('istdistrict').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtdistrict').value = document.getElementById('istdistrict').options[k].textContent;
                    else
                        document.getElementById('txtdistrict').value = document.getElementById('istdistrict').options[k].innerText;

                    break;
                }
            }
        }
        document.getElementById('txtdistrict').focus();
        return false;
    }

}

function focus_district() {
    if (document.getElementById('txtdistrict').value == "--Select District Name--") {
        document.getElementById('txtdistrict').value = "";
    }
    document.getElementById('txtdistrict').style.textAlign = "left";
    document.getElementById('txtdistrict').style.color = "black";
    document.getElementById('txtdistrict').style.backgroundColor = "#99FFFF";
}
function blur_district() {
    if (document.getElementById('txtdistrict').value == "") {
        document.getElementById('txtdistrict').value = "";
        document.getElementById('txtdistrict').value = "--Select District Name--";
        document.getElementById('txtdistrict').style.textAlign = "center";
        document.getElementById('txtdistrict').style.color = "gray";
    }

    else {
        document.getElementById('txtdistrict').style.textAlign = "left";
        document.getElementById('txtdistrict').style.color = "black";
    }
    if (document.getElementById('hiddendistrict').value == "") {
        document.getElementById('txtdistrict').value = "";
        document.getElementById('txtdistrict').value = "--Select District Name--";
        document.getElementById('txtdistrict').style.textAlign = "center";
        document.getElementById('txtdistrict').style.color = "gray";
    }
    document.getElementById('txtdistrict').style.backgroundColor = "white";
    return false;
}









//***************************************************************Zone F2**************************************
function Bindzonename(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtzone") {


        document.getElementById("divzone").style.display = "block";
        aTag = eval(document.getElementById("txtzone"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divzone').scrollLeft;
        var scrolltop = document.getElementById('divzone').scrollTop;
        document.getElementById('divzone').style.left = document.getElementById("txtzone").offsetLeft + leftpos - tot + "px";
        document.getElementById('divzone').style.top = document.getElementById("txtzone").offsetTop + toppos - scrolltop + "px"; //"510px";
        var extra1 = "Z";
        var statename = document.getElementById('txtzone').value.toUpperCase();
        var centcode = document.getElementById('hdncent').value;
        BookingDataUpdate.Bindtargenamef2(statename, extra1, centcode, bindzone_callback);

    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtzone") {
            document.getElementById('hiddenzone').value = "";
        }
    }
    else if (key == 27 || key == 17 || key == 18 || key == 16) {
        document.getElementById("divzone").style.display = "none";
        document.getElementById('txtzone').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "istzone") {
            filllzonename();
            return false;
        }
    }
        //    else if (key == 9) {
        //        document.getElementById("divzone").style.display = "none";
        //        document.getElementById('txtregion').focus();
        //        return false;
        //    }
    else if (key == 38) {
        if (document.getElementById("divzone").style.display == "block") {
            if (document.getElementById("istzone").value == '0') {
                document.getElementById("txtzone").focus();
            }
        }
    }
    else if (key == 40) {
        if (document.getElementById("divzone").style.display == "block") {
            document.getElementById("istzone").focus();
        }
    }
    //    else {
    //        document.getElementById("divzone").style.display = "block";
    //        aTag = eval(document.getElementById("txtzone"))
    //        var btag;
    //        var leftpos = 0;
    //        var toppos = 20;
    //        do {
    //            aTag = eval(aTag.offsetParent);
    //            leftpos += aTag.offsetLeft;
    //            toppos += aTag.offsetTop;
    //            btag = eval(aTag)
    //        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
    //        var tot = document.getElementById('divzone').scrollLeft;
    //        var scrolltop = document.getElementById('divzone').scrollTop;
    //        document.getElementById('divzone').style.left = document.getElementById("txtzone").offsetLeft + leftpos - tot + "px";
    //        document.getElementById('divzone').style.top = document.getElementById("txtzone").offsetTop + toppos - scrolltop + "px"; //"510px";
    //        var extra1 = "Z";
    //        var statename = document.getElementById('txtzone').value.toUpperCase();
    //        var centcode = document.getElementById('hdncent').value;
    //        Booking_Data_Update.Bindtargenamef2(statename, extra1, centcode, bindzone_callback);
    //    }
}
function bindzone_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("istzone");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select Zone Name ---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].NAME, ds.Tables[0].Rows[i].CODE);
        }


    }

    document.getElementById('hiddenzone').value = "";
    document.getElementById("istzone").value = "0";
    document.getElementById("istzone").selectedIndex = 1;
    //document.getElementById("istzone").focus();
    return false;
}

function filllzonename(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtzone" || document.activeElement.id == "istzone") {
            document.getElementById("divzone").style.display = "none";
            document.getElementById('txtzone').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {

        if (document.getElementById("istzone").value == "0") {
            alert("Please Select Zone Name");
            return false;
        }
        else {
            document.getElementById("divzone").style.display = "none";
            var lstvalue = document.getElementById('istzone').value;
            for (var k = 0; k < document.getElementById("istzone").length; k++) {
                if (document.getElementById('istzone').options[k].value == lstvalue) {
                    document.getElementById('hiddenzone').value = document.getElementById('istzone').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtzone').value = document.getElementById('istzone').options[k].textContent;
                    else
                        document.getElementById('txtzone').value = document.getElementById('istzone').options[k].innerText;

                    break;
                }
            }
        }
        document.getElementById('txtzone').focus();
        return false;
    }

}

function focus_zone() {
    if (document.getElementById('txtzone').value == "--Select Zone Name--") {
        document.getElementById('txtzone').value = "";
    }
    document.getElementById('txtzone').style.textAlign = "left";
    document.getElementById('txtzone').style.color = "black";
    document.getElementById('txtzone').style.backgroundColor = "#99FFFF";
}
function blur_zone() {
    if (document.getElementById('txtzone').value == "") {
        document.getElementById('txtzone').value = "";
        document.getElementById('txtzone').value = "--Select Zone Name--";
        document.getElementById('txtzone').style.textAlign = "center";
        document.getElementById('txtzone').style.color = "gray";
    }

    else {
        document.getElementById('txtzone').style.textAlign = "left";
        document.getElementById('txtzone').style.color = "black";
    }
    if (document.getElementById('hiddenzone').value == "") {
        document.getElementById('txtzone').value = "";
        document.getElementById('txtzone').value = "--Select Zone Name--";
        document.getElementById('txtzone').style.textAlign = "center";
        document.getElementById('txtzone').style.color = "gray";
    }
    document.getElementById('txtzone').style.backgroundColor = "white";
    return false;
}


////******************************************************************************region f2****************************************************************************
function Bindregionname(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtregion") {


        document.getElementById("divregion").style.display = "block";
        aTag = eval(document.getElementById("txtregion"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divregion').scrollLeft;
        var scrolltop = document.getElementById('divregion').scrollTop;
        document.getElementById('divregion').style.left = document.getElementById("txtregion").offsetLeft + leftpos - tot + "px";
        document.getElementById('divregion').style.top = document.getElementById("txtregion").offsetTop + toppos - scrolltop + "px"; //"510px";
        var zone = document.getElementById('hiddenzone').value;
        var comcode = document.getElementById('hiddencompcode').value;
        var regionname = document.getElementById('txtregion').value.toUpperCase()
        BookingDataUpdate.BindRegion(zone, regionname, comcode, region_callback);

    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtregion") {
            document.getElementById('hiddenregion').value = "";
        }
    }
    else if (key == 27 || key == 17 || key == 18 || key == 16) {
        document.getElementById("divregion").style.display = "none";
        document.getElementById('txtregion').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "istregion") {
            filllregionname();
            return false;
        }
    }
        //    else if (key == 9) {
        //        document.getElementById("divregion").style.display = "none";
        //        document.getElementById('txtpageno').focus();
        //        return false;
        //    }
    else if (key == 38) {
        if (document.getElementById("divregion").style.display == "block") {
            if (document.getElementById("istregion").value == '0') {
                document.getElementById("txtregion").focus();

            }
        }
    }
    else if (key == 40) {
        if (document.getElementById("divregion").style.display == "block") {
            document.getElementById("istregion").focus();
        }
    }

    //    else {
    //        document.getElementById("divregion").style.display = "block";
    //        aTag = eval(document.getElementById("txtregion"))
    //        var btag;
    //        var leftpos = 0;
    //        var toppos = 20;
    //        do {
    //            aTag = eval(aTag.offsetParent);
    //            leftpos += aTag.offsetLeft;
    //            toppos += aTag.offsetTop;
    //            btag = eval(aTag)
    //        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
    //        var tot = document.getElementById('divregion').scrollLeft;
    //        var scrolltop = document.getElementById('divregion').scrollTop;
    //        document.getElementById('divregion').style.left = document.getElementById("txtregion").offsetLeft + leftpos - tot + "px";
    //        document.getElementById('divregion').style.top = document.getElementById("txtregion").offsetTop + toppos - scrolltop + "px"; //"510px";
    //        var zone = document.getElementById('hiddenzone').value;
    //        var comcode = document.getElementById('hiddencompcode').value;
    //        var regionname = document.getElementById('txtregion').value.toUpperCase()
    //        Booking_Data_Update.BindRegion(zone, regionname, comcode, region_callback);
    //    }
}
function region_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("istregion");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select Region Name ---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].REGION_NAME, ds.Tables[0].Rows[i].REGION_CODE);
        }


    }

    document.getElementById('hiddenregion').value = "";
    document.getElementById("istregion").value = "0";
    document.getElementById("istregion").selectedIndex = 1;
    //document.getElementById("istregion").focus();
    return false;
}

function filllregionname(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtregion" || document.activeElement.id == "istregion") {
            document.getElementById("divregion").style.display = "none";
            document.getElementById('txtregion').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {

        if (document.getElementById("istregion").value == "0") {
            alert("Please Select Region Name");
            return false;
        }
        else {
            document.getElementById("divregion").style.display = "none";
            var lstvalue = document.getElementById('istregion').value;
            for (var k = 0; k < document.getElementById("istregion").length; k++) {
                if (document.getElementById('istregion').options[k].value == lstvalue) {
                    document.getElementById('hiddenregion').value = document.getElementById('istregion').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtregion').value = document.getElementById('istregion').options[k].textContent;
                    else
                        document.getElementById('txtregion').value = document.getElementById('istregion').options[k].innerText;

                    break;
                }
            }
        }
        document.getElementById('txtregion').focus();
        return false;
    }

}

function focus_region() {
    if (document.getElementById('txtregion').value == "--Select Region Name--") {
        document.getElementById('txtregion').value = "";
    }
    document.getElementById('txtregion').style.textAlign = "left";
    document.getElementById('txtregion').style.color = "black";
    document.getElementById('txtregion').style.backgroundColor = "#99FFFF";
}
function blur_region() {
    if (document.getElementById('txtregion').value == "") {
        document.getElementById('txtregion').value = "";
        document.getElementById('txtregion').value = "--Select Region Name--";
        document.getElementById('txtregion').style.textAlign = "center";
        document.getElementById('txtregion').style.color = "gray";
    }

    else {
        document.getElementById('txtregion').style.textAlign = "left";
        document.getElementById('txtregion').style.color = "black";
    }
    if (document.getElementById('hiddenregion').value == "") {
        document.getElementById('txtregion').value = "";
        document.getElementById('txtregion').value = "--Select Region Name--";
        document.getElementById('txtregion').style.textAlign = "center";
        document.getElementById('txtregion').style.color = "gray";
    }
    document.getElementById('txtregion').style.backgroundColor = "white";
    return false;
}


//***************************************************************taluka F2**************************************
function Bindtalukaname(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txttaluka") {


        document.getElementById("divtaluka").style.display = "block";
        aTag = eval(document.getElementById("txttaluka"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divtaluka').scrollLeft;
        var scrolltop = document.getElementById('divtaluka').scrollTop;
        document.getElementById('divtaluka').style.left = document.getElementById("txttaluka").offsetLeft + leftpos - tot + "px";
        document.getElementById('divtaluka').style.top = document.getElementById("txttaluka").offsetTop + toppos - scrolltop + "px"; //"510px";
        var districtcode = document.getElementById('hiddendistrict').value
        if (districtcode == "") {
            alert("Please Select District Name");
            document.getElementById('txtdistrict').focus();
            document.getElementById("divtaluka").style.display = "none";
            return false;

        }
        var talukaname = document.getElementById('txttaluka').value.toUpperCase()
        BookingDataUpdate.Bindtalukanamef2(talukaname, districtcode, bindtaluka_callback);

    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txttaluka") {
            document.getElementById('hiddentaluka').value = "";
        }
    }
    else if (key == 27 || key == 17 || key == 18 || key == 16) {
        document.getElementById("divtaluka").style.display = "none";
        document.getElementById('txttaluka').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "isttaluka") {
            fillltalukaname(event);
            return false;
        }
    }
        //    else if (key == 9) {
        //        document.getElementById("divtaluka").style.display = "none";
        //        document.getElementById('txtzone').focus();
        //        return false;
        //    }
    else if (key == 38) {
        if (document.getElementById("divtaluka").style.display == "block") {
            if (document.getElementById("isttaluka").value == '0') {
                document.getElementById("txttaluka").focus();
            }
        }
    }
    else if (key == 40) {
        if (document.getElementById("divtaluka").style.display == "block") {
            document.getElementById("isttaluka").focus();
        }
    }
    //    else {
    //        document.getElementById("divtaluka").style.display = "block";
    //        aTag = eval(document.getElementById("txttaluka"))
    //        var btag;
    //        var leftpos = 0;
    //        var toppos = 20;
    //        do {
    //            aTag = eval(aTag.offsetParent);
    //            leftpos += aTag.offsetLeft;
    //            toppos += aTag.offsetTop;
    //            btag = eval(aTag)
    //        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
    //        var tot = document.getElementById('divtaluka').scrollLeft;
    //        var scrolltop = document.getElementById('divtaluka').scrollTop;
    //        document.getElementById('divtaluka').style.left = document.getElementById("txttaluka").offsetLeft + leftpos - tot + "px";
    //        document.getElementById('divtaluka').style.top = document.getElementById("txttaluka").offsetTop + toppos - scrolltop + "px"; //"510px";
    //        var districtcode = document.getElementById('hiddendistrict').value
    //        //        if (districtcode == "") {
    //        //            alert("Please Select District Name");
    //        //            document.getElementById('txtdistrict').focus();
    //        //            document.getElementById("divtaluka").style.display = "none";
    //        //            return false;

    //        //        }
    //        var talukaname = document.getElementById('txttaluka').value.toUpperCase()
    //        Booking_Data_Update.Bindtalukanamef2(talukaname, districtcode, bindtaluka_callback);
    //    }
}
function bindtaluka_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("isttaluka");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select Taluka Name ---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].TALUKA_NAME, ds.Tables[0].Rows[i].TALUKA_CODE);
        }


    }

    document.getElementById('hiddentaluka').value = "";
    document.getElementById("isttaluka").selectedIndex = 1;
    //document.getElementById("isttaluka").focus();
    return false;
}

function fillltalukaname(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txttaluka" || document.activeElement.id == "isttaluka") {
            document.getElementById("divtaluka").style.display = "none";
            document.getElementById('txttaluka').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {

        if (document.getElementById("isttaluka").value == "0") {
            alert("Please Select District Name");
            return false;
        }
        else {
            document.getElementById("divtaluka").style.display = "none";
            var lstvalue = document.getElementById('isttaluka').value;
            for (var k = 0; k < document.getElementById("isttaluka").length; k++) {
                if (document.getElementById('isttaluka').options[k].value == lstvalue) {
                    document.getElementById('hiddentaluka').value = document.getElementById('isttaluka').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txttaluka').value = document.getElementById('isttaluka').options[k].textContent;
                    else
                        document.getElementById('txttaluka').value = document.getElementById('isttaluka').options[k].innerText;

                    break;
                }
            }
        }
        document.getElementById('txttaluka').focus();
        return false;
    }

}

function focus_taluka() {
    if (document.getElementById('txttaluka').value == "--Select Taluka Name--") {
        document.getElementById('txttaluka').value = "";
    }
    document.getElementById('txttaluka').style.textAlign = "left";
    document.getElementById('txttaluka').style.color = "black";
    document.getElementById('txttaluka').style.backgroundColor = "#99FFFF";
}
function blur_taluka() {
    if (document.getElementById('txttaluka').value == "") {
        document.getElementById('txttaluka').value = "";
        document.getElementById('txttaluka').value = "--Select Taluka Name--";
        document.getElementById('txttaluka').style.textAlign = "center";
        document.getElementById('txttaluka').style.color = "gray";
    }

    else {
        document.getElementById('txttaluka').style.textAlign = "left";
        document.getElementById('txttaluka').style.color = "black";
    }
    if (document.getElementById('hiddentaluka').value == "") {
        document.getElementById('txttaluka').value = "";
        document.getElementById('txttaluka').value = "--Select Taluka Name--";
        document.getElementById('txttaluka').style.textAlign = "center";
        document.getElementById('txttaluka').style.color = "gray";
    }
    document.getElementById('txttaluka').style.backgroundColor = "white";
    return false;
}


//*****************************Function For Industry select F2***********************
function Bindindustryname(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtindustry") {


        document.getElementById("divindu").style.display = "block";
        aTag = eval(document.getElementById("txtindustry"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divindu').scrollLeft;
        var scrolltop = document.getElementById('divindu').scrollTop;
        document.getElementById('divindu').style.left = document.getElementById("txtindustry").offsetLeft + leftpos - tot + "px";
        document.getElementById('divindu').style.top = document.getElementById("txtindustry").offsetTop + toppos - scrolltop + "px"; //"510px";
        var extra1 = document.getElementById('hiddencompcode').value;
        var industry = document.getElementById('txtindustry').value.toUpperCase()
        //        if (document.getElementById('hdsepartad').value == "N") {
        //            adsepart = "N"
        //        }
        //        else {
        adsepart = "Y"
        //        }
        BookingDataUpdate.Bindindustr(industry, extra1, adsepart, bindindustry_callback);

    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtindustry") {
            document.getElementById('hiddenindustry').value = "";
        }
    }
    else if (key == 27 || key == 17 || key == 18 || key == 16) {
        document.getElementById("divindu").style.display = "none";
        document.getElementById('txtindustry').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "istindustry") {
            filllindustryname();
            return false;
        }
    }
        //    else if (key == 9) {
        //        document.getElementById("divindu").style.display = "none";
        //        document.getElementById("txtproduct").focus();
        //        return false;
        //    }
    else if (key == 38) {
        if (document.getElementById("divindu").style.display == "block") {
            if (document.getElementById("istindustry").value == '0') {
                document.getElementById("txtindustry").focus();

            }
        }
    }
    else if (key == 40) {
        if (document.getElementById("divindu").style.display == "block") {
            document.getElementById("istindustry").focus();
        }
    }
    //    else {
    //        document.getElementById("divindu").style.display = "block";
    //        aTag = eval(document.getElementById("txtindustry"))
    //        var btag;
    //        var leftpos = 0;
    //        var toppos = 20;
    //        do {
    //            aTag = eval(aTag.offsetParent);
    //            leftpos += aTag.offsetLeft;
    //            toppos += aTag.offsetTop;
    //            btag = eval(aTag)
    //        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
    //        var tot = document.getElementById('divindu').scrollLeft;
    //        var scrolltop = document.getElementById('divindu').scrollTop;
    //        document.getElementById('divindu').style.left = document.getElementById("txtindustry").offsetLeft + leftpos - tot + "px";
    //        document.getElementById('divindu').style.top = document.getElementById("txtindustry").offsetTop + toppos - scrolltop + "px"; //"510px";
    //        var extra1 = document.getElementById('hiddencompcode').value;
    //        var industry = document.getElementById('txtindustry').value.toUpperCase()
    //        //        if (document.getElementById('hdsepartad').value == "N") {
    //        //            adsepart = "N"
    //        //        }
    //        //        else {
    //        adsepart = "Y"
    //        // }
    //        Booking_Data_Update.Bindindustr(industry, extra1, adsepart, bindindustry_callback);
    //    }
}
function bindindustry_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("istindustry");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("--Select Industry Name--", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].INDUSTRY_NAME, ds.Tables[0].Rows[i].INDUSTRY_CODE);
        }


    }

    document.getElementById('hiddenindustry').value = "";
    document.getElementById("istindustry").value = "0";
    document.getElementById("istindustry").selectedIndex = 1;
    //document.getElementById("istindustry").focus();
    return false;
}

function filllindustryname(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtindustry" || document.activeElement.id == "istindustry") {
            document.getElementById("divindu").style.display = "none";
            document.getElementById('txtindustry').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {
        if (document.getElementById("istindustry").value == "0") {
            alert("Please Select Industry  Name");
            return false;
        }
        else {
            document.getElementById("divindu").style.display = "none";
            var lstvalue = document.getElementById('istindustry').value;
            for (var k = 0; k < document.getElementById("istindustry").length; k++) {
                if (document.getElementById('istindustry').options[k].value == lstvalue) {
                    document.getElementById('hiddenindustry').value = document.getElementById('istindustry').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtindustry').value = document.getElementById('istindustry').options[k].textContent;
                    else
                        document.getElementById('txtindustry').value = document.getElementById('istindustry').options[k].innerText;

                    break;
                }
            }
        }

        document.getElementById('txtindustry').focus();
        return false;
    }
}

function focus_industry() {
    if (document.getElementById('txtindustry').value == "--Select Industry Name--") {
        document.getElementById('txtindustry').value = "";
    }
    document.getElementById('txtindustry').style.textAlign = "left";
    document.getElementById('txtindustry').style.color = "black";
    document.getElementById('txtindustry').style.backgroundColor = "#99FFFF";
}
function blur_industry() {
    if (document.getElementById('txtindustry').value == "") {
        document.getElementById('txtindustry').value = "";
        document.getElementById('txtindustry').value = "--Select Industry Name--";
        document.getElementById('txtindustry').style.textAlign = "center";
        document.getElementById('txtindustry').style.color = "gray";
    }

    else {
        document.getElementById('txtindustry').style.textAlign = "left";
        document.getElementById('txtindustry').style.color = "black";
    }
    if (document.getElementById('hiddenindustry').value == "") {
        document.getElementById('txtindustry').value = "";
        document.getElementById('txtindustry').value = "--Select Industry Name--";
        document.getElementById('txtindustry').style.textAlign = "center";
        document.getElementById('txtindustry').style.color = "gray";
    }
    document.getElementById('txtindustry').style.backgroundColor = "white";
    return false;
}


//*****************************Function For Product select F2***********************
function Bindproductname(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtproduct") {


        document.getElementById("divproduct").style.display = "block";
        aTag = eval(document.getElementById("txtproduct"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divproduct').scrollLeft;
        var scrolltop = document.getElementById('divproduct').scrollTop;
        document.getElementById('divproduct').style.left = document.getElementById("txtproduct").offsetLeft + leftpos - tot + "px";
        document.getElementById('divproduct').style.top = document.getElementById("txtproduct").offsetTop + toppos - scrolltop + "px"; //"510px";
        var extra1 = document.getElementById('hiddencompcode').value;
        var industry = document.getElementById('hiddenindustry').value.toUpperCase()
        var productname = document.getElementById('txtproduct').value.toUpperCase()
        //        if (document.getElementById('hdsepartad').value == "N") {
        //            adsepart = "N"
        //        }
        //        else {
        adsepart = "Y"
        //        }
        BookingDataUpdate.Bindproduct(productname, industry, extra1, adsepart, bindproduct_callback);

    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtproduct") {
            document.getElementById('hiddenproduct').value = "";
        }
    }
    else if (key == 27 || key == 17 || key == 18 || key == 16) {
        document.getElementById("divproduct").style.display = "none";
        document.getElementById('txtproduct').focus();
        return false;
    }
    else if (key == 13) {
        //  if (document.activeElement.id == "istprodouct") {
        filllproductname();
        //   return false;
        //  }
        document.getElementById("divproduct").style.display = "none";
    }
        //    else if (key == 9) {
        //        document.getElementById("divproduct").style.display = "none";
        //        document.getElementById("txtbrand").focus();
        //        return false;
        //    }
    else if (key == 38) {
        if (document.getElementById("divproduct").style.display == "block") {
            if (document.getElementById("istprodouct").value == '0') {
                document.getElementById("txtproduct").focus();

            }
        }
    }
    else if (key == 40) {
        if (document.getElementById("divproduct").style.display == "block") {
            document.getElementById("istprodouct").focus();
        }
    }
    //    else {
    //        document.getElementById("divproduct").style.display = "block";
    //        aTag = eval(document.getElementById("txtproduct"))
    //        var btag;
    //        var leftpos = 0;
    //        var toppos = 20;
    //        do {
    //            aTag = eval(aTag.offsetParent);
    //            leftpos += aTag.offsetLeft;
    //            toppos += aTag.offsetTop;
    //            btag = eval(aTag)
    //        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
    //        var tot = document.getElementById('divproduct').scrollLeft;
    //        var scrolltop = document.getElementById('divproduct').scrollTop;
    //        document.getElementById('divproduct').style.left = document.getElementById("txtproduct").offsetLeft + leftpos - tot + "px";
    //        document.getElementById('divproduct').style.top = document.getElementById("txtproduct").offsetTop + toppos - scrolltop + "px"; //"510px";
    //        var extra1 = document.getElementById('hiddencompcode').value;
    //        var industry = document.getElementById('hiddenindustry').value.toUpperCase()
    //        var productname = document.getElementById('txtproduct').value.toUpperCase()
    //        //        if (document.getElementById('hdsepartad').value == "N") {
    //        //            adsepart = "N"
    //        //        }
    //        //        else {
    //        adsepart = "Y"
    //        //}
    //        Booking_Data_Update.Bindproduct(productname, industry, extra1, adsepart, bindproduct_callback);
    //    }
}
function bindproduct_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("istprodouct");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select Product Name ---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].PRODUCT_NAME, ds.Tables[0].Rows[i].PRODUCT_CODE);
        }


    }

    document.getElementById('hiddenproduct').value = "";
    document.getElementById("istprodouct").selectedIndex = 1;
    //sdocument.getElementById("istprodouct").focus();
    return false;
}

function filllproductname(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtproduct" || document.activeElement.id == "istprodouct") {
            document.getElementById("divproduct").style.display = "none";
            document.getElementById('txtproduct').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {
        if (document.getElementById("istprodouct").value == "0") {
            alert("Please Select Product  Name");
            return false;
        }
        else {
            document.getElementById("divproduct").style.display = "none";
            var lstvalue = document.getElementById('istprodouct').value;
            for (var k = 0; k < document.getElementById("istprodouct").length; k++) {
                if (document.getElementById('istprodouct').options[k].value == lstvalue) {
                    document.getElementById('hiddenproduct').value = document.getElementById('istprodouct').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtproduct').value = document.getElementById('istprodouct').options[k].textContent;
                    else
                        document.getElementById('txtproduct').value = document.getElementById('istprodouct').options[k].innerText;

                    break;
                }
            }
        }

        document.getElementById('txtproduct').focus();
        return false;
    }
}

function focus_product() {
    if (document.getElementById('txtproduct').value == "--Select Product Name--") {
        document.getElementById('txtproduct').value = "";
    }
    document.getElementById('txtproduct').style.textAlign = "left";
    document.getElementById('txtproduct').style.color = "black";
    document.getElementById('txtproduct').style.backgroundColor = "#99FFFF";
}
function blur_product() {
    if (document.getElementById('txtproduct').value == "") {
        document.getElementById('txtproduct').value = "";
        document.getElementById('txtproduct').value = "--Select Product Name--";
        document.getElementById('txtproduct').style.textAlign = "center";
        document.getElementById('txtproduct').style.color = "gray";
    }

    else {
        document.getElementById('txtproduct').style.textAlign = "left";
        document.getElementById('txtproduct').style.color = "black";
    }
    if (document.getElementById('hiddenproduct').value == "") {
        document.getElementById('txtproduct').value = "";
        document.getElementById('txtproduct').value = "--Select Product Name--";
        document.getElementById('txtproduct').style.textAlign = "center";
        document.getElementById('txtproduct').style.color = "gray";
    }
    document.getElementById('txtproduct').style.backgroundColor = "white";
    return false;
}


//*****************************Function For Brand select F2***********************
function Bindbrandname(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtbrand") {


        document.getElementById("divbrand").style.display = "block";
        aTag = eval(document.getElementById("txtbrand"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divbrand').scrollLeft;
        var scrolltop = document.getElementById('divbrand').scrollTop;
        document.getElementById('divbrand').style.left = document.getElementById("txtbrand").offsetLeft + leftpos - tot + "px";
        document.getElementById('divbrand').style.top = document.getElementById("txtbrand").offsetTop + toppos - scrolltop + "px"; //"510px";
        var extra1 = document.getElementById('hiddencompcode').value;
        var product = document.getElementById('hiddenproduct').value.toUpperCase()
        var brand = document.getElementById('txtbrand').value.toUpperCase()
        //        if (document.getElementById('hdsepartad').value == "N") {
        //            adsepart = "N"
        //        }
        //        else {
        adsepart = "Y"
        //}
        BookingDataUpdate.Bindbrand(brand, product, extra1, adsepart, bindbrand_callback);

    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtbrand") {
            document.getElementById('hiddenbrand').value = "";
        }
    }
    else if (key == 27 || key == 17 || key == 18 || key == 16) {
        document.getElementById("divbrand").style.display = "none";
        document.getElementById('txtbrand').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "istbrand") {
            filllbrandname();
            return false;
        }
        document.getElementById("divbrand").style.display = "none";
    }
        //    else if (key == 9) {
        //        document.getElementById("divbrand").style.display = "none";
        //        document.getElementById('txtfromdate').focus();
        //        return false;
        //    }
    else if (key == 38) {
        if (document.getElementById("divbrand").style.display == "block") {
            if (document.getElementById("istbrand").value == '0') {
                document.getElementById("txtbrand").focus();

            }
        }
    }
    else if (key == 40) {
        if (document.getElementById("divbrand").style.display == "block") {
            document.getElementById("istbrand").focus();
        }
    }
    //    else {
    //        document.getElementById("divbrand").style.display = "block";
    //        aTag = eval(document.getElementById("txtbrand"))
    //        var btag;
    //        var leftpos = 0;
    //        var toppos = 20;
    //        do {
    //            aTag = eval(aTag.offsetParent);
    //            leftpos += aTag.offsetLeft;
    //            toppos += aTag.offsetTop;
    //            btag = eval(aTag)
    //        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
    //        var tot = document.getElementById('divbrand').scrollLeft;
    //        var scrolltop = document.getElementById('divbrand').scrollTop;
    //        document.getElementById('divbrand').style.left = document.getElementById("txtbrand").offsetLeft + leftpos - tot + "px";
    //        document.getElementById('divbrand').style.top = document.getElementById("txtbrand").offsetTop + toppos - scrolltop + "px"; //"510px";
    //        var extra1 = document.getElementById('hiddencompcode').value;
    //        var product = document.getElementById('hiddenproduct').value.toUpperCase()
    //        var brand = document.getElementById('txtbrand').value.toUpperCase()
    //        //        if (document.getElementById('hdsepartad').value == "N") {
    //        //            adsepart = "N"
    //        //        }
    //        //        else {
    //        adsepart = "Y"
    //        //}
    //        Booking_Data_Update.Bindbrand(brand, product, extra1, adsepart, bindbrand_callback);
    //    }
}
function bindbrand_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("istbrand");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select Brand Name ---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].BRAND_NAME, ds.Tables[0].Rows[i].BRAND_CODE);
        }


    }

    document.getElementById('hiddenbrand').value = "";
    document.getElementById("istbrand").value = "0";
    document.getElementById("istbrand").selectedIndex = 1;
    //document.getElementById("istbrand").focus();
    return false;
}

function filllbrandname(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtbrand" || document.activeElement.id == "istbrand") {
            document.getElementById("divbrand").style.display = "none";
            document.getElementById('txtbrand').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {
        if (document.getElementById("istbrand").value == "0") {
            alert("Please Select Brand  Name");
            return false;
        }
        else {
            document.getElementById("divbrand").style.display = "none";
            var lstvalue = document.getElementById('istbrand').value;
            for (var k = 0; k < document.getElementById("istbrand").length; k++) {
                if (document.getElementById('istbrand').options[k].value == lstvalue) {
                    document.getElementById('hiddenbrand').value = document.getElementById('istbrand').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtbrand').value = document.getElementById('istbrand').options[k].textContent;
                    else
                        document.getElementById('txtbrand').value = document.getElementById('istbrand').options[k].innerText;

                    break;
                }
            }
        }

        document.getElementById('txtbrand').focus();
        return false;
    }
}

function focus_brand() {
    if (document.getElementById('txtbrand').value == "--Select Brand Name--") {
        document.getElementById('txtbrand').value = "";
    }
    document.getElementById('txtbrand').style.textAlign = "left";
    document.getElementById('txtbrand').style.color = "black";
    document.getElementById('txtbrand').style.backgroundColor = "#99FFFF";
}
function blur_brand() {
    if (document.getElementById('txtbrand').value == "") {
        document.getElementById('txtbrand').value = "";
        document.getElementById('txtbrand').value = "--Select Brand Name--";
        document.getElementById('txtbrand').style.textAlign = "center";
        document.getElementById('txtbrand').style.color = "gray";
    }

    else {
        document.getElementById('txtbrand').style.textAlign = "left";
        document.getElementById('txtbrand').style.color = "black";
    }
    if (document.getElementById('hiddenbrand').value == "") {
        document.getElementById('txtbrand').value = "";
        document.getElementById('txtbrand').value = "--Select Brand Name--";
        document.getElementById('txtbrand').style.textAlign = "center";
        document.getElementById('txtbrand').style.color = "gray";
    }
    document.getElementById('txtbrand').style.backgroundColor = "white";
    return false;
}



//*************************************************************Exec F2*********************************************************

function getexce(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtexce") {

        document.getElementById("divexce").style.display = "block";
        document.getElementById("divexce").style.display = "block";
        aTag = eval(document.getElementById("txtexce"))
        var btag;
        var leftpos = 0;
        var toppos = 0;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divexce').scrollLeft;
        var scrolltop = document.getElementById('divexce').scrollTop;
        document.getElementById('divexce').style.left = document.getElementById("txtexce").offsetLeft + leftpos - tot + "px";
        document.getElementById('divexce').style.top = document.getElementById("txtexce").offsetTop + toppos - scrolltop + 18 + "px"; //"510px";

        var PCOMP_CODE = document.getElementById('hiddencompcode').value;
        var PDESC = document.getElementById('txtexce').value.toUpperCase()
        var PSEACH = "G";
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        BookingDataUpdate.Bindexec(PCOMP_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindexce_callback);

        //        Booking_Data_Update.Bindexec(document.getElementById('txtexce').value.toUpperCase(), document.getElementById('hiddencompcode').value, document.getElementById('hdncent').value, bindexce_callback);

    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtexce") {
            document.getElementById('hdnexce').value = "";
        }
    }
    else if (key == 27) {
        document.getElementById("divexce").style.display = "none";

        return false;
    }
    else if (key == 13) {

        // if (document.activeElement.id == "lstexce") {
        fillexce();
        // return false;
        // }
        document.getElementById("divexce").style.display = "none";
    }
        //    else if (key == 9) {
        //        document.getElementById("divexce").style.display = "none";
        //        document.getElementById('txtindus').focus();
        //        return false;
        //    }
    else if (key == 38) {
        if (document.getElementById("divexce").style.display == "block") {
            if (document.getElementById('lstexce').value == '0') {
                document.getElementById('txtexce').focus();
            }
        }
    }

    else if (key == 40) {
        if (document.getElementById("divexce").style.display == "block") {
            document.getElementById("lstexce").focus();
        }
    }
    //    else {
    //        document.getElementById("divexce").style.display = "block";
    //        document.getElementById("divexce").style.display = "block";
    //        aTag = eval(document.getElementById("txtexce"))
    //        var btag;
    //        var leftpos = 0;
    //        var toppos = 4;
    //        do {
    //            aTag = eval(aTag.offsetParent);
    //            leftpos += aTag.offsetLeft;
    //            toppos += aTag.offsetTop;
    //            btag = eval(aTag)
    //        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
    //        var tot = document.getElementById('divexce').scrollLeft;
    //        var scrolltop = document.getElementById('divexce').scrollTop;
    //        document.getElementById('divexce').style.left = document.getElementById("txtexce").offsetLeft + leftpos - tot + "px";
    //        document.getElementById('divexce').style.top = document.getElementById("txtexce").offsetTop + toppos - scrolltop + 18 + "px"; //"510px";

    //        Booking_Data_Update.Bindexec(document.getElementById('txtexce').value.toUpperCase(), document.getElementById('hiddencompcode').value, document.getElementById('hdncent').value, bindexce_callback);

    //    }
}

function bindexce_callback(response) {
    ds = response.value;
    var lstitem = document.getElementById("lstexce");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("--Select Exceutive Name--", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].EXEC_NAME, ds.Tables[0].Rows[i].EXEC_CODE);

        }
    }
    document.getElementById('hdnexce').value = "";
    document.getElementById("lstexce").value = "0";
    document.getElementById("lstexce").selectedIndex = 1;
    document.getElementById("txtexce").focus();
    return false;
}

function fillexce(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 13 || event.type == "click") {
        if (document.getElementById("lstexce").value == "0") {
            alert("Please Select Executive");
            return false;
        }
        else {
            document.getElementById("divexce").style.display = "none";
            var lstvalue = document.getElementById('lstexce').value;
            for (var k = 0; k < document.getElementById("lstexce").length; k++) {
                if (document.getElementById('lstexce').options[k].value == lstvalue) {
                    document.getElementById('hdnexce').value = document.getElementById('lstexce').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtexce').value = document.getElementById('lstexce').options[k].textContent;
                    else
                        document.getElementById('txtexce').value = document.getElementById('lstexce').options[k].innerText;
                    break;
                }
            }
        }
        document.getElementById('txtexce').focus();
        return false;
    }
}


function focus_exce() {
    if (document.getElementById('txtexce').value == "--Select Executive Name--") {
        document.getElementById('txtexce').value = "";
    }
    document.getElementById('txtexce').style.textAlign = "left";
    document.getElementById('txtexce').style.color = "black";
    document.getElementById('txtexce').style.backgroundColor = "#99FFFF";
}
function blur_exce() {
    if (document.getElementById('txtexce').value == "") {
        document.getElementById('txtexce').value = "";
        document.getElementById('txtexce').value = "--Select Executive Name--";
        document.getElementById('txtexce').style.textAlign = "center";
        document.getElementById('txtexce').style.color = "gray";
        document.getElementById('txtexce').style.backgroundColor = "white";
    }

    else {
        document.getElementById('txtexce').style.textAlign = "left";
        document.getElementById('txtexce').style.color = "black";
    }
    if (document.getElementById('hdnexce').value == "") {
        document.getElementById('txtexce').value = "";
        document.getElementById('txtexce').value = "--Select Executive Name--";
        document.getElementById('txtexce').style.textAlign = "center";
        document.getElementById('txtexce').style.color = "gray";
    }
    document.getElementById('txtexce').style.backgroundColor = "white";
    return false;
}


//******************************************************************************Retainer F2****************************************************************

function getret(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if ((event.shiftKey && key == 9) || (key == 16)) {
    }
    else if (key == 113 && document.activeElement.id == "txtret") {
        document.getElementById("divret").style.display = "block";
        document.getElementById("divret").style.display = "block";
        aTag = eval(document.getElementById("txtret"))
        var btag;
        var leftpos = 400;
        var toppos = 400;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divret').scrollLeft;
        var scrolltop = document.getElementById('divret').scrollTop;
        document.getElementById('divret').style.left = document.getElementById("txtret").offsetLeft + leftpos - tot + "px";
        document.getElementById('divret').style.top = document.getElementById("txtret").offsetTop + toppos - scrolltop + 18 + "px"; //"510px";

        BookingDataUpdate.Bindretainer(document.getElementById('txtret').value.toUpperCase(), document.getElementById('hiddencompcode').value, bindret_callback);

    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtret") {
            document.getElementById('hiddenret').value = "";
        }
    }
    else if (key == 27) {
        document.getElementById("divret").style.display = "none";

        return false;
    }
    else if (key == 13) {

        // if (document.activeElement.id == "lstret") {
        fillret();
        // return false;
        // }
        document.getElementById("divret").style.display = "none";
    }
        //    else if (key == 9) {
        //        document.getElementById("divexce").style.display = "none";
        //        document.getElementById('txtindus').focus();
        //        return false;
        //    }
    else if (key == 38) {
        if (document.getElementById("divret").style.display == "block") {
            if (document.getElementById('lstret').value == '0') {
                document.getElementById('txtret').focus();
            }
        }
    }

    else if (key == 40) {
        if (document.getElementById("divret").style.display == "block") {
            document.getElementById("lstret").focus();
        }
    }
    //    else {
    //        document.getElementById("divexce").style.display = "block";
    //        document.getElementById("divexce").style.display = "block";
    //        aTag = eval(document.getElementById("txtexce"))
    //        var btag;
    //        var leftpos = 0;
    //        var toppos = 4;
    //        do {
    //            aTag = eval(aTag.offsetParent);
    //            leftpos += aTag.offsetLeft;
    //            toppos += aTag.offsetTop;
    //            btag = eval(aTag)
    //        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
    //        var tot = document.getElementById('divexce').scrollLeft;
    //        var scrolltop = document.getElementById('divexce').scrollTop;
    //        document.getElementById('divexce').style.left = document.getElementById("txtexce").offsetLeft + leftpos - tot + "px";
    //        document.getElementById('divexce').style.top = document.getElementById("txtexce").offsetTop + toppos - scrolltop + 18 + "px"; //"510px";

    //        Booking_Data_Update.Bindexec(document.getElementById('txtexce').value.toUpperCase(), document.getElementById('hiddencompcode').value, document.getElementById('hdncent').value, bindexce_callback);

    //    }
}

function bindret_callback(response) {
    ds = response.value;
    var lstitem = document.getElementById("lstret");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("--Select Retainer Name--", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].RET_NAME, ds.Tables[0].Rows[i].RET_CODE);

        }
    }
    document.getElementById('hiddenret').value = "";
    document.getElementById("lstret").value = "0";
    document.getElementById("lstret").selectedIndex = 1;
    document.getElementById("txtret").focus();
    return false;
}

function fillret(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 13 || event.type == "click") {
        if (document.getElementById("lstret").value == "0") {
            alert("Please Select Retainer");
            return false;
        }
        else {
            document.getElementById("divret").style.display = "none";
            var lstvalue = document.getElementById('lstret').value;
            for (var k = 0; k < document.getElementById("lstret").length; k++) {
                if (document.getElementById('lstret').options[k].value == lstvalue) {
                    document.getElementById('hiddenret').value = document.getElementById('lstret').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtret').value = document.getElementById('lstret').options[k].textContent;
                    else
                        document.getElementById('txtret').value = document.getElementById('lstret').options[k].innerText;
                    break;
                }
            }
        }
        document.getElementById('txtret').focus();
        return false;
    }
}

function focus_ret() {
    if (document.getElementById('txtret').value == "--Select Retainer Name--") {
        document.getElementById('txtret').value = "";
    }
    document.getElementById('txtret').style.textAlign = "left";
    document.getElementById('txtret').style.color = "black";
    document.getElementById('txtret').style.backgroundColor = "#99FFFF";
}
function blur_ret() {
    if (document.getElementById('txtret').value == "") {
        document.getElementById('txtret').value = "";
        document.getElementById('txtret').value = "--Select Retainer Name--";
        document.getElementById('txtret').style.textAlign = "center";
        document.getElementById('txtret').style.color = "gray";
        document.getElementById('txtret').style.backgroundColor = "white";

    }

    else {
        document.getElementById('txtret').style.textAlign = "left";
        document.getElementById('txtret').style.color = "black";
    }
    if (document.getElementById('hiddenret').value == "") {
        document.getElementById('txtret').value = "";
        document.getElementById('txtret').value = "--Select Retainer Name--";
        document.getElementById('txtret').style.textAlign = "center";
        document.getElementById('txtret').style.color = "gray";
    }
    document.getElementById('txtret').style.backgroundColor = "white";
    return false;
}


//***************************************************************main event F2**************************************
function Bindmaineventname(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtevent") {


        document.getElementById("diveventmain").style.display = "block";
        aTag = eval(document.getElementById("txtevent"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('diveventmain').scrollLeft;
        var scrolltop = document.getElementById('diveventmain').scrollTop;
        document.getElementById('diveventmain').style.left = document.getElementById("txtevent").offsetLeft + leftpos - tot + "px";
        document.getElementById('diveventmain').style.top = document.getElementById("txtevent").offsetTop + toppos - scrolltop + "px"; //"510px";
        var extra1 = document.getElementById('hiddencompcode').value;
        var eventname = document.getElementById('txtevent').value.toUpperCase()
        var adsepart = "Y";
        BookingDataUpdate.Bindmainevent(eventname, extra1, adsepart, bindmainevent_callback);


    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtevent") {
            document.getElementById('hdnevent').value = "";
        }
    }
    else if (key == 27 || key == 17 || key == 18 || key == 16) {
        document.getElementById("diveventmain").style.display = "none";
        document.getElementById('txtevent').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "lsteventmain") {
            filllmaineventname();
            return false;
        }
    }
        //    else if (key == 9) {
        //        document.getElementById("divdistrict").style.display = "none";
        //        document.getElementById('txtclient').focus();
        //        return false;
        //    }
    else if (key == 38) {
        if (document.getElementById("diveventmain").style.display == "block") {
            if (document.getElementById("lsteventmain").value == '0') {
                document.getElementById("txtevent").focus();

            }
        }
    }
    else if (key == 40) {
        if (document.getElementById("diveventmain").style.display == "block") {
            document.getElementById("lsteventmain").focus();
        }
    }


    //    else {
    //        document.getElementById("divdistrict").style.display = "block";
    //        aTag = eval(document.getElementById("txtdistrict"))
    //        var btag;
    //        var leftpos = 0;
    //        var toppos = 20;
    //        do {
    //            aTag = eval(aTag.offsetParent);
    //            leftpos += aTag.offsetLeft;
    //            toppos += aTag.offsetTop;
    //            btag = eval(aTag)
    //        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
    //        var tot = document.getElementById('divdistrict').scrollLeft;
    //        var scrolltop = document.getElementById('divdistrict').scrollTop;
    //        document.getElementById('divdistrict').style.left = document.getElementById("txtdistrict").offsetLeft + leftpos - tot + "px";
    //        document.getElementById('divdistrict').style.top = document.getElementById("txtdistrict").offsetTop + toppos - scrolltop + "px"; //"510px";
    //        var extra1 = document.getElementById('hiddenstate').value
    //        var districtname = document.getElementById('txtdistrict').value.toUpperCase()
    //        Booking_Data_Update.Binddistrictnamef2(districtname, extra1, binddistrict_callback);

    //    }
}
function bindmainevent_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("lsteventmain");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("--Select Event Name--", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].EVENT_NAME, ds.Tables[0].Rows[i].EVENT_CODE);
        }


    }

    document.getElementById('hdnevent').value = "";
    document.getElementById("lsteventmain").value = "0";
    document.getElementById("lsteventmain").selectedIndex = 1;
    //document.getElementById("istdistrict").focus();
    return false;
}

function filllmaineventname(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtevent" || document.activeElement.id == "lsteventmain") {
            document.getElementById("diveventmain").style.display = "none";
            document.getElementById('txtevent').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {

        if (document.getElementById("lsteventmain").value == "0") {
            alert("Please Select Event Name");
            return false;
        }
        else {
            document.getElementById("diveventmain").style.display = "none";
            var lstvalue = document.getElementById('lsteventmain').value;
            for (var k = 0; k < document.getElementById("lsteventmain").length; k++) {
                if (document.getElementById('lsteventmain').options[k].value == lstvalue) {
                    document.getElementById('hdnevent').value = document.getElementById('lsteventmain').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtevent').value = document.getElementById('lsteventmain').options[k].textContent;
                    else
                        document.getElementById('txtevent').value = document.getElementById('lsteventmain').options[k].innerText;

                    break;
                }
            }
        }
        document.getElementById('txtevent').focus();
        return false;
    }

}

function focus_mainevent() {
    if (document.getElementById('txtevent').value == "--Select Event Name--") {
        document.getElementById('txtevent').value = "";
    }
    document.getElementById('txtevent').style.textAlign = "left";
    document.getElementById('txtevent').style.color = "black";
    document.getElementById('txtevent').style.backgroundColor = "#99FFFF";
}
function blur_mainevent() {
    if (document.getElementById('txtevent').value == "") {
        document.getElementById('txtevent').value = "";
        document.getElementById('txtevent').value = "--Select Event Name--";
        document.getElementById('txtevent').style.textAlign = "center";
        document.getElementById('txtevent').style.color = "gray";
    }

    else {
        document.getElementById('txtevent').style.textAlign = "left";
        document.getElementById('txtevent').style.color = "black";
    }
    if (document.getElementById('hdnevent').value == "") {
        document.getElementById('txtevent').value = "";
        document.getElementById('txtevent').value = "--Select Event Name--";
        document.getElementById('txtevent').style.textAlign = "center";
        document.getElementById('txtevent').style.color = "gray";
    }
    document.getElementById('txtevent').style.backgroundColor = "white";
    return false;
}



///=================client name f2===========================


function bindclientname11(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 113) {
        if (document.activeElement.id == "txtclient11") {
            document.getElementById("divclient11").style.display = "block";
            aTag = eval(document.getElementById("txtclient11"))
            var btag;
            var leftpos = 0;
            var toppos = 0;
            do {
                aTag = eval(aTag.offsetParent);
                leftpos += aTag.offsetLeft;
                toppos += aTag.offsetTop;
                btag = eval(aTag)
            } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
            var tot = document.getElementById('divclient11').scrollLeft;
            var scrolltop = document.getElementById('divclient11').scrollTop;
            document.getElementById('divclient11').style.left = document.getElementById("txtclient11").offsetLeft + leftpos - tot + "px";
            document.getElementById('divclient11').style.top = document.getElementById("txtclient11").offsetTop + toppos - scrolltop + 18 + "px"; //"510px";
            var pcentcode = document.getElementById('hdncent').value;
            //            if (document.getElementById('hdsepartad').value == "N") {
            //                adsepart = "N"
            //            }
            //            else {
            adsepart = "Y"
            //}
            var resc = BookingDataUpdate.Bindclient(document.getElementById('txtclient11').value.toUpperCase(), document.getElementById('hiddencompcode').value, adsepart, pcentcode);
            bindcl_callback11(resc);
        }
    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtclient11") {
            document.getElementById('hideenclintcode11').value = "";
        }
    }
    else if (key == 27 || key == 17 || key == 18 || key == 16) {
        if (document.activeElement.id == "txtclient11" || document.activeElement.id == "lstclient11") {
            document.getElementById("divclient11").style.display = "none";
            document.getElementById('txtclient11').focus();
            return false;
        }
    }
    else if (key == 13) {
        if (document.activeElement.id == "lstclient11") {
            fillclient11();
            return false;
        }
        document.getElementById("divclient11").style.display = "none";
    }
        //    else if (key == 9) {
        //        document.getElementById("divclient11").style.display = "none";
        //        document.getElementById('txttaluka').focus();
        //        return false;
        //    }
    else if (key == 38) {
        if (document.getElementById("divclient11").style.display == "block") {
            if (document.getElementById("lstclient11").value == '0') {
                document.getElementById("txtclient11").focus();

            }
        }
    }
    else if (key == 40) {
        if (document.getElementById("divclient11").style.display == "block") {
            document.getElementById("lstclient11").focus();
        }
    }
    //    else {
    //        document.getElementById("divclient11").style.display = "block";
    //        aTag = eval(document.getElementById("txtclient11"))
    //        var btag;
    //        var leftpos = 0;
    //        var toppos = 0;
    //        do {
    //            aTag = eval(aTag.offsetParent);
    //            leftpos += aTag.offsetLeft;
    //            toppos += aTag.offsetTop;
    //            btag = eval(aTag)
    //        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
    //        var tot = document.getElementById('divclient11').scrollLeft;
    //        var scrolltop = document.getElementById('divclient11').scrollTop;
    //        document.getElementById('divclient11').style.left = document.getElementById("txtclient11").offsetLeft + leftpos - tot + "px";
    //        document.getElementById('divclient11').style.top = document.getElementById("txtclient11").offsetTop + toppos - scrolltop + 18 + "px"; //"510px";
    //        var pcentcode = document.getElementById('hdncent').value;
    //        //        if (document.getElementById('hdsepartad').value == "N") {
    //        //            adsepart = "N"
    //        //        }
    //        //        else {
    //        adsepart = "Y"
    //        //}
    //        var resc = Booking_Data_Update.Bindclient(document.getElementById('txtclient11').value.toUpperCase(), document.getElementById('hiddencompcode').value, adsepart, pcentcode);
    //        bindcl_callback11(resc);
    //    }
}
function bindcl_callback11(response) {
    ds = response.value;
    var lstitem = document.getElementById("lstclient11");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("------------------------------------- Select Client -------------------------------------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].CLIENT_NAME, ds.Tables[0].Rows[i].CLIENT_CODE);
        }
    }
    document.getElementById('hideenclintcode11').value = "";
    document.getElementById("lstclient11").value = "0";
    //document.getElementById("lstclient11").focus();
    return false;
}
function fillclient11(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtclient11" || document.activeElement.id == "lstclient11") {
            document.getElementById("divclient11").style.display = "none";
            document.getElementById('txtclient11').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {
        if (document.getElementById("lstclient11").value == "0") {
            alert("Please Select Client");
            return false;
        }
        else {
            document.getElementById("divclient11").style.display = "none";
            var lstvalue = document.getElementById('lstclient11').value;
            for (var k = 0; k < document.getElementById("lstclient11").length; k++) {
                if (document.getElementById('lstclient11').options[k].value == lstvalue) {
                    document.getElementById('hideenclintcode11').value = document.getElementById('lstclient11').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtclient11').value = document.getElementById('lstclient11').options[k].textContent;
                    else
                        document.getElementById('txtclient11').value = document.getElementById('lstclient11').options[k].innerText;
                    break;
                }
            }
        }
        document.getElementById('txtclient11').focus();
        return false;
    }
}


//=========================================================== Bulk Exec=================================================



function getexce11(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtexce11") {

        document.getElementById("divexce11").style.display = "block";
        document.getElementById("divexce11").style.display = "block";
        aTag = eval(document.getElementById("txtexce11"))
        var btag;
        var leftpos = 0;
        var toppos = 0;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divexce11').scrollLeft;
        var scrolltop = document.getElementById('divexce11').scrollTop;
        document.getElementById('divexce11').style.left = document.getElementById("txtexce11").offsetLeft + leftpos - tot + "px";
        document.getElementById('divexce11').style.top = document.getElementById("txtexce11").offsetTop + toppos - scrolltop + 18 + "px"; //"510px";

        var PCOMP_CODE = document.getElementById('hiddencompcode').value;
        var PDESC = document.getElementById('txtexce11').value.toUpperCase()
        var PSEACH = "G";
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        BookingDataUpdate.Bindexec(PCOMP_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindexce_callback11);

        //        Booking_Data_Update.Bindexec(document.getElementById('txtexce11').value.toUpperCase(), document.getElementById('hiddencompcode').value, document.getElementById('hdncent').value, bindexce_callback11);
    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtexce11") {
            document.getElementById('hdnexce11').value = "";
        }
    }
    else if (key == 27) {
        document.getElementById("divexce11").style.display = "none";

        return false;
    }
    else if (key == 13) {

        if (document.activeElement.id == "lstexce11") {
            //fillexce();
            return false;
        }
        document.getElementById("divexce11").style.display = "none";
    }
        //    else if (key == 9) {
        //        document.getElementById("divexce11").style.display = "none";
        //        document.getElementById('txtindus').focus();
        //        return false;
        //    }
    else if (key == 38) {
        if (document.getElementById("divexce11").style.display == "block") {
            if (document.getElementById('lstexce11').value == '0') {
                document.getElementById('txtexce11').focus();
            }
        }
    }

    else if (key == 40) {
        if (document.getElementById("divexce11").style.display == "block") {
            document.getElementById("lstexce11").focus();
        }
    }
    //    else {
    //        document.getElementById("divexce11").style.display = "block";
    //        document.getElementById("divexce11").style.display = "block";
    //        aTag = eval(document.getElementById("txtexce11"))
    //        var btag;
    //        var leftpos = 0;
    //        var toppos = 4;
    //        do {
    //            aTag = eval(aTag.offsetParent);
    //            leftpos += aTag.offsetLeft;
    //            toppos += aTag.offsetTop;
    //            btag = eval(aTag)
    //        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
    //        var tot = document.getElementById('divexce11').scrollLeft;
    //        var scrolltop = document.getElementById('divexce11').scrollTop;
    //        document.getElementById('divexce11').style.left = document.getElementById("txtexce11").offsetLeft + leftpos - tot + "px";
    //        document.getElementById('divexce11').style.top = document.getElementById("txtexce11").offsetTop + toppos - scrolltop + 18 + "px"; //"510px";

    //        Booking_Data_Update.Bindexec(document.getElementById('txtexce11').value.toUpperCase(), document.getElementById('hiddencompcode').value, document.getElementById('hdncent').value, bindexce_callback11);

    //    }
}

function bindexce_callback11(response) {
    ds = response.value;
    var lstitem = document.getElementById("lstexce11");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-- Select Executive --", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].EXEC_NAME, ds.Tables[0].Rows[i].EXEC_CODE);

        }
    }
    document.getElementById('hdnexce11').value = "";
    document.getElementById("lstexce11").value = "0";
    document.getElementById("txtexce11").focus();
    return false;
}

function fillexce11(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 13 || event.type == "click") {
        if (document.getElementById("lstexce11").value == "0") {
            alert("Please Select Executive");
            return false;
        }
        else {
            document.getElementById("divexce11").style.display = "none";
            var lstvalue = document.getElementById('lstexce11').value;
            for (var k = 0; k < document.getElementById("lstexce11").length; k++) {
                if (document.getElementById('lstexce11').options[k].value == lstvalue) {
                    document.getElementById('hdnexce11').value = document.getElementById('lstexce11').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtexce11').value = document.getElementById('lstexce11').options[k].textContent;
                    else
                        document.getElementById('txtexce11').value = document.getElementById('lstexce11').options[k].innerText;
                    break;
                }
            }
        }
        document.getElementById('txtexce11').focus();
        return false;
    }
}

function focus_exce11() {
    document.getElementById('txtexce11').style.backgroundColor = "#99FFFF";
    if (document.getElementById('txtexce11').value == "-- Select Executive --") {
        document.getElementById('txtexce11').value = "";
    }
    document.getElementById('txtexce11').style.textAlign = "left";
    document.getElementById('txtexce11').style.textTransform = "uppercase";

    document.getElementById('txtexce11').style.color = "black";
    return false;
}
function blur_exce11() {
    document.getElementById('txtexce11').style.backgroundColor = "white";
    if (document.getElementById('txtexce11').value == "") {
        document.getElementById('txtexce11').value = "";
        document.getElementById('txtexce11').value = "-- Select Executive --";
        document.getElementById('txtexce11').style.textAlign = "center";
        document.getElementById('txtexce11').style.textTransform = "capitalize";

        document.getElementById('txtexce11').style.color = "gray";
    }
    else {
        document.getElementById('txtexce11').style.textAlign = "left";
        document.getElementById('txtexce11').style.color = "black";
    }

    return false;
}


//*****************************Function For Industry select F2***********************



function Bindindustryname11(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 113) {
        if (document.activeElement.id == "txtindustry11") {
            document.getElementById("divindu11").style.display = "block";
            aTag = eval(document.getElementById("txtindustry11"))
            var btag;
            var leftpos = 0;
            var toppos = 0;
            do {
                aTag = eval(aTag.offsetParent);
                leftpos += aTag.offsetLeft;
                toppos += aTag.offsetTop;
                btag = eval(aTag)
            } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
            var tot = document.getElementById('divindu11').scrollLeft;
            var scrolltop = document.getElementById('divindu11').scrollTop;
            document.getElementById('divindu11').style.left = document.getElementById("txtindustry11").offsetLeft + leftpos - tot + "px";
            document.getElementById('divindu11').style.top = document.getElementById("txtindustry11").offsetTop + toppos - scrolltop + 18 + "px"; //"510px";
            var extra1 = document.getElementById('hiddencompcode').value;
            var industry = document.getElementById('txtindustry11').value.toUpperCase()

            adsepart = "Y"
            BookingDataUpdate.Bindindustr(industry, extra1, adsepart, bindindustry_callback11);
        }
    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtindustry11") {
            document.getElementById('hiddenindustry11').value = "";
        }
    }
    else if (key == 27 || key == 17 || key == 18 || key == 16) {
        if (document.activeElement.id == "txtindustry11" || document.activeElement.id == "istindustry11") {
            document.getElementById("divindu11").style.display = "none";
            document.getElementById('txtindustry11').focus();
            return false;
        }
    }
    else if (key == 13) {
        if (document.activeElement.id == "istindustry11") {
            filllindustryname11();
            return false;
        }
        document.getElementById("divindu11").style.display = "none";
    }
        //    else if (key == 9) {
        //        document.getElementById("divindu11").style.display = "none";
        //        document.getElementById('txttaluka').focus();
        //        return false;
        //    }
    else if (key == 38) {
        if (document.getElementById("divindu11").style.display == "block") {
            if (document.getElementById("istindustry11").value == '0') {
                document.getElementById("txtindustry11").focus();

            }
        }
    }
    else if (key == 40) {
        if (document.getElementById("divindu11").style.display == "block") {
            document.getElementById("istindustry11").focus();
        }
    }
}
function bindindustry_callback11(response) {
    ds = response.value;
    var lstitem = document.getElementById("istindustry11");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select Industry Name ---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].INDUSTRY_NAME, ds.Tables[0].Rows[i].INDUSTRY_CODE);
        }
    }
    document.getElementById('hiddenindustry11').value = "";
    document.getElementById("istindustry11").value = "0";
    //document.getElementById("istindustry11").focus();
    return false;
}
function filllindustryname11(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtindustry11" || document.activeElement.id == "istindustry11") {
            document.getElementById("divindu11").style.display = "none";
            document.getElementById('txtindustry11').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {
        if (document.getElementById("istindustry11").value == "0") {
            alert("Please Select Client");
            return false;
        }
        else {
            document.getElementById("divindu11").style.display = "none";
            var lstvalue = document.getElementById('istindustry11').value;
            for (var k = 0; k < document.getElementById("istindustry11").length; k++) {
                if (document.getElementById('istindustry11').options[k].value == lstvalue) {
                    document.getElementById('hiddenindustry11').value = document.getElementById('istindustry11').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtindustry11').value = document.getElementById('istindustry11').options[k].textContent;
                    else
                        document.getElementById('txtindustry11').value = document.getElementById('istindustry11').options[k].innerText;
                    break;
                }
            }
        }
        document.getElementById('txtindustry11').focus();
        return false;
    }
}



//*****************************Function For Product select F2***********************
function BindProductYash(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtproduct11") {
            document.getElementById('hiddenproduct11').value = "";
        }
    }
    else if (key == 27 || key == 17 || key == 18 || key == 16) {
        document.getElementById("divproduct11").style.display = "none";
        document.getElementById('txtproduct11').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "istprodouct11") {
            FillProductYash();
            return false;
        }
        document.getElementById("divproduct11").style.display = "none";
    }
        //    else if (key == 9) {
        //        document.getElementById("divproduct11").style.display = "none";
        //        document.getElementById("txtbrand11").focus();
        //        return false;
        //    }
    else if (key == 38) {
        if (document.getElementById("divproduct11").style.display == "block") {
            if (document.getElementById("istprodouct11").value == '0') {
                document.getElementById("txtproduct11").focus();

            }
        }
    }
    else if (key == 40) {
        if (document.getElementById("divproduct11").style.display == "block") {
            document.getElementById("istprodouct11").focus();
        }
    }
    else if (document.activeElement.id == "txtproduct11") {
        document.getElementById("divproduct11").style.display = "block";
        aTag = eval(document.getElementById("txtproduct11"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divproduct11').scrollLeft;
        var scrolltop = document.getElementById('divproduct11').scrollTop;
        document.getElementById('divproduct11').style.left = document.getElementById("txtproduct11").offsetLeft + leftpos - tot + "px";
        document.getElementById('divproduct11').style.top = document.getElementById("txtproduct11").offsetTop + toppos - scrolltop + "px"; //"510px";
        var extra1 = document.getElementById('hiddencompcode').value;
        var industry = document.getElementById('hiddenindustry11').value.toUpperCase()
        var productname = document.getElementById('txtproduct11').value.toUpperCase()
        //        if (document.getElementById('hdsepartad').value == "N") {
        //            adsepart = "N"
        //        }
        //        else {
        adsepart = "Y"
        //        }
        BookingDataUpdate.Bindproduct(productname, industry, extra1, adsepart, BindProductYash_callback);

    }
}
function BindProductYash_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("istprodouct11");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select Product Name ---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].PRODUCT_NAME, ds.Tables[0].Rows[i].PRODUCT_CODE);
        }


    }

    document.getElementById('hiddenproduct11').value = "";
    document.getElementById("istprodouct11").value = "0";
    //sdocument.getElementById("istprodouct11").focus();
    return false;
}

function FillProductYash() {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtproduct11" || document.activeElement.id == "istprodouct11") {
            document.getElementById("divproduct11").style.display = "none";
            document.getElementById('txtproduct11').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {
        if (document.getElementById("istprodouct11").value == "0") {
            alert("Please Select Product  Name");
            return false;
        }
        else {
            document.getElementById("divproduct11").style.display = "none";
            var lstvalue = document.getElementById('istprodouct11').value;
            for (var k = 0; k < document.getElementById("istprodouct11").length; k++) {
                if (document.getElementById('istprodouct11').options[k].value == lstvalue) {
                    document.getElementById('hiddenproduct11').value = document.getElementById('istprodouct11').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtproduct11').value = document.getElementById('istprodouct11').options[k].textContent;
                    else
                        document.getElementById('txtproduct11').value = document.getElementById('istprodouct11').options[k].innerText;

                    break;
                }
            }
        }

        // document.getElementById('txtproduct11').focus();
        return false;
    }
}


//*****************************Function For Brand select F2***********************
function Bindbrandname11(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtbrand11") {


        document.getElementById("divbrand11").style.display = "block";
        aTag = eval(document.getElementById("txtbrand11"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divbrand11').scrollLeft;
        var scrolltop = document.getElementById('divbrand11').scrollTop;
        document.getElementById('divbrand11').style.left = document.getElementById("txtbrand11").offsetLeft + leftpos - tot + "px";
        document.getElementById('divbrand11').style.top = document.getElementById("txtbrand11").offsetTop + toppos - scrolltop + "px"; //"510px";
        var extra1 = document.getElementById('hiddencompcode').value;
        var product = document.getElementById('hiddenproduct11').value.toUpperCase()
        var brand = document.getElementById('txtbrand11').value.toUpperCase()
        //        if (document.getElementById('hdsepartad').value == "N") {
        //            adsepart = "N"
        //        }
        //        else {
        adsepart = "Y"
        //}
        BookingDataUpdate.Bindbrand(brand, product, extra1, adsepart, bindbrand_callback11);

    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtbrand11") {
            document.getElementById('hiddenbrand11').value = "";
        }
    }
    else if (key == 27 || key == 17 || key == 18 || key == 16) {
        document.getElementById("divbrand11").style.display = "none";
        document.getElementById('txtbrand11').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "istbrand11") {
            filllbrandname11();
            return false;
        }
        document.getElementById("divbrand11").style.display = "none";
    }
        //    else if (key == 9) {
        //        document.getElementById("divbrand11").style.display = "none";
        //        document.getElementById('txtfromdate').focus();
        //        return false;
        //    }
    else if (key == 38) {
        if (document.getElementById("divbrand11").style.display == "block") {
            if (document.getElementById("istbrand11").value == '0') {
                document.getElementById("txtbrand11").focus();

            }
        }
    }
    else if (key == 40) {
        if (document.getElementById("divbrand11").style.display == "block") {
            document.getElementById("istbrand11").focus();
        }
    }
    //    else {
    //        document.getElementById("divbrand11").style.display = "block";
    //        aTag = eval(document.getElementById("txtbrand11"))
    //        var btag;
    //        var leftpos = 0;
    //        var toppos = 20;
    //        do {
    //            aTag = eval(aTag.offsetParent);
    //            leftpos += aTag.offsetLeft;
    //            toppos += aTag.offsetTop;
    //            btag = eval(aTag)
    //        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
    //        var tot = document.getElementById('divbrand11').scrollLeft;
    //        var scrolltop = document.getElementById('divbrand11').scrollTop;
    //        document.getElementById('divbrand11').style.left = document.getElementById("txtbrand11").offsetLeft + leftpos - tot + "px";
    //        document.getElementById('divbrand11').style.top = document.getElementById("txtbrand11").offsetTop + toppos - scrolltop + "px"; //"510px";
    //        var extra1 = document.getElementById('hiddencompcode').value;
    //        var product = document.getElementById('hiddenproduct11').value.toUpperCase()
    //        var brand = document.getElementById('txtbrand11').value.toUpperCase()
    //        //        if (document.getElementById('hdsepartad').value == "N") {
    //        //            adsepart = "N"
    //        //        }
    //        //        else {
    //        adsepart = "Y"
    //        //}
    //        Booking_Data_Update.Bindbrand(brand, product, extra1, adsepart, bindbrand_callback11);
    //    }
}
function bindbrand_callback11(response) {
    var ds = response.value;
    var lstitem = document.getElementById("istbrand11");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select Brand Name ---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].BRAND_NAME, ds.Tables[0].Rows[i].BRAND_CODE);
        }


    }

    document.getElementById('hiddenbrand11').value = "";
    document.getElementById("istbrand11").value = "0";
    //document.getElementById("istbrand11").focus();
    return false;
}

function filllbrandname11(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtbrand11" || document.activeElement.id == "istbrand11") {
            document.getElementById("divbrand11").style.display = "none";
            document.getElementById('txtbrand11').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {
        if (document.getElementById("istbrand11").value == "0") {
            alert("Please Select Brand  Name");
            return false;
        }
        else {
            document.getElementById("divbrand11").style.display = "none";
            var lstvalue = document.getElementById('istbrand11').value;
            for (var k = 0; k < document.getElementById("istbrand11").length; k++) {
                if (document.getElementById('istbrand11').options[k].value == lstvalue) {
                    document.getElementById('hiddenbrand11').value = document.getElementById('istbrand11').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtbrand11').value = document.getElementById('istbrand11').options[k].textContent;
                    else
                        document.getElementById('txtbrand11').value = document.getElementById('istbrand11').options[k].innerText;

                    break;
                }
            }
        }

        document.getElementById('txtbrand11').focus();
        return false;
    }
}


//*****************************Function For EVENT select F2***********************
function Bindeventname11(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtevent11") {


        document.getElementById("divevent11").style.display = "block";
        aTag = eval(document.getElementById("txtevent11"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divevent11').scrollLeft;
        var scrolltop = document.getElementById('divevent11').scrollTop;
        document.getElementById('divevent11').style.left = document.getElementById("txtevent11").offsetLeft + leftpos - tot + "px";
        document.getElementById('divevent11').style.top = document.getElementById("txtevent11").offsetTop + toppos - scrolltop + "px"; //"510px";
        var eventname = document.getElementById('txtevent11').value.toUpperCase()

        adsepart = "Y"
        var extra1 = document.getElementById('hiddencompcode').value;
        BookingDataUpdate.Bindevent(eventname, extra1, adsepart, bindevent_callback111);

    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtevent11") {
            document.getElementById('hiddenevent11').value = "";
        }
    }
    else if (key == 27 || key == 17 || key == 18 || key == 16) {
        document.getElementById("divevent11").style.display = "none";
        document.getElementById('txtevent11').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "istevent11") {
            filllevent11();
            return false;
        }
        document.getElementById("divevent11").style.display = "none";
    }
        //    else if (key == 9) {
        //        document.getElementById("divevent11").style.display = "none";
        //        document.getElementById('txtfromdate').focus();
        //        return false;
        //    }
    else if (key == 38) {
        if (document.getElementById("divevent11").style.display == "block") {
            if (document.getElementById("istevent11").value == '0') {
                document.getElementById("txtevent11").focus();

            }
        }
    }
    else if (key == 40) {
        if (document.getElementById("divevent11").style.display == "block") {
            document.getElementById("istevent11").focus();
        }
    }

}
function bindevent_callback111(response) {
    var ds = response.value;
    var lstitem = document.getElementById("istevent11");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-- Select Event --", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].EVENT_NAME, ds.Tables[0].Rows[i].EVENT_CODE);
        }


    }

    document.getElementById('hiddenevent11').value = "";
    document.getElementById("istevent11").value = "0";
    //document.getElementById("istevent11").focus();
    return false;
}

function filllevent11(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtevent11" || document.activeElement.id == "istevent11") {
            document.getElementById("divevent11").style.display = "none";
            document.getElementById('txtevent11').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {
        if (document.getElementById("istevent11").value == "0") {
            alert("Please Select Brand  Name");
            return false;
        }
        else {
            document.getElementById("divevent11").style.display = "none";
            var lstvalue = document.getElementById('istevent11').value;
            for (var k = 0; k < document.getElementById("istevent11").length; k++) {
                if (document.getElementById('istevent11').options[k].value == lstvalue) {
                    document.getElementById('hiddenevent11').value = document.getElementById('istevent11').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtevent11').value = document.getElementById('istevent11').options[k].textContent;
                    else
                        document.getElementById('txtevent11').value = document.getElementById('istevent11').options[k].innerText;

                    break;
                }
            }
        }

        document.getElementById('txtevent11').focus();
        return false;
    }
}

function focus_event11() {
    document.getElementById('txtevent11').style.backgroundColor = "#99FFFF";
    if (document.getElementById('txtevent11').value == "-- Select Event --") {
        document.getElementById('txtevent11').value = "";
    }
    document.getElementById('txtevent11').style.textAlign = "left";
    document.getElementById('txtevent11').style.textTransform = "uppercase";

    document.getElementById('txtevent11').style.color = "black";
    return false;
}
function blur_event11() {
    document.getElementById('txtevent11').style.backgroundColor = "white";
    if (document.getElementById('txtevent11').value == "") {
        document.getElementById('txtevent11').value = "";
        document.getElementById('txtevent11').value = "-- Select Event --";
        document.getElementById('txtevent11').style.textAlign = "center";
        document.getElementById('txtevent11').style.textTransform = "capitalize";

        document.getElementById('txtevent11').style.color = "gray";
    }
    else {
        document.getElementById('txtevent11').style.textAlign = "left";
        document.getElementById('txtevent11').style.color = "black";
    }

    return false;
}



//========================================retainer=========================================================


function getret11(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtret11") {

        document.getElementById("divret11").style.display = "block";
        document.getElementById("divret11").style.display = "block";
        aTag = eval(document.getElementById("txtret11"))
        var btag;
        var leftpos = 0;
        var toppos = 0;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divret11').scrollLeft;
        var scrolltop = document.getElementById('divret11').scrollTop;
        document.getElementById('divret11').style.left = document.getElementById("txtret11").offsetLeft + leftpos - tot + "px";
        document.getElementById('divret11').style.top = document.getElementById("txtret11").offsetTop + toppos - scrolltop + 18 + "px"; //"510px";

        BookingDataUpdate.Bindret(document.getElementById('txtret11').value.toUpperCase(), document.getElementById('hiddencompcode').value, bindret11_callback11);

    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtret11") {
            document.getElementById('hdnret11').value = "";
        }
    }
    else if (key == 27) {
        document.getElementById("divret11").style.display = "none";

        return false;
    }
    else if (key == 13) {

        if (document.activeElement.id == "lstret11") {
            //fillexce();
            return false;
        }
        document.getElementById("divret11").style.display = "none";
    }
        //    else if (key == 9) {
        //        document.getElementById("divexce11").style.display = "none";
        //        document.getElementById('txtindus').focus();
        //        return false;
        //    }
    else if (key == 38) {
        if (document.getElementById("divret11").style.display == "block") {
            if (document.getElementById('lstret11').value == '0') {
                document.getElementById('txtret11').focus();
            }
        }
    }

    else if (key == 40) {
        if (document.getElementById("divret11").style.display == "block") {
            document.getElementById("lstret11").focus();
        }
    }
    //    else {
    //        document.getElementById("divexce11").style.display = "block";
    //        document.getElementById("divexce11").style.display = "block";
    //        aTag = eval(document.getElementById("txtexce11"))
    //        var btag;
    //        var leftpos = 0;
    //        var toppos = 4;
    //        do {
    //            aTag = eval(aTag.offsetParent);
    //            leftpos += aTag.offsetLeft;
    //            toppos += aTag.offsetTop;
    //            btag = eval(aTag)
    //        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
    //        var tot = document.getElementById('divexce11').scrollLeft;
    //        var scrolltop = document.getElementById('divexce11').scrollTop;
    //        document.getElementById('divexce11').style.left = document.getElementById("txtexce11").offsetLeft + leftpos - tot + "px";
    //        document.getElementById('divexce11').style.top = document.getElementById("txtexce11").offsetTop + toppos - scrolltop + 18 + "px"; //"510px";

    //        Booking_Data_Update.Bindexec(document.getElementById('txtexce11').value.toUpperCase(), document.getElementById('hiddencompcode').value, document.getElementById('hdncent').value, bindexce_callback11);

    //    }
}

function bindret11_callback11(response) {
    ds = response.value;
    var lstitem = document.getElementById("lstret11");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-- Select Retainer --", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].RET_NAME, ds.Tables[0].Rows[i].RET_CODE);

        }
    }
    document.getElementById('hdnret11').value = "";
    document.getElementById("lstret11").value = "0";
    document.getElementById("txtret11").focus();
    return false;
}

function fillret11(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 13 || event.type == "click") {
        if (document.getElementById("lstret11").value == "0") {
            alert("Please Select Retainer");
            return false;
        }
        else {
            document.getElementById("divret11").style.display = "none";
            var lstvalue = document.getElementById('lstret11').value;
            for (var k = 0; k < document.getElementById("lstret11").length; k++) {
                if (document.getElementById('lstret11').options[k].value == lstvalue) {
                    document.getElementById('hdnret11').value = document.getElementById('lstret11').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtret11').value = document.getElementById('lstret11').options[k].textContent;
                    else
                        document.getElementById('txtret11').value = document.getElementById('lstret11').options[k].innerText;
                    break;
                }
            }
        }
        document.getElementById('txtret11').focus();
        return false;
    }
}

function focus_ret11() {
    document.getElementById('txtret11').style.backgroundColor = "#99FFFF";
    if (document.getElementById('txtret11').value == "-- Select Retainer --") {
        document.getElementById('txtret11').value = "";
    }
    document.getElementById('txtret11').style.textAlign = "left";
    document.getElementById('txtret11').style.textTransform = "uppercase";

    document.getElementById('txtret11').style.color = "black";
    return false;
}
function blur_ret11() {
    document.getElementById('txtret11').style.backgroundColor = "white";
    if (document.getElementById('txtret11').value == "") {
        document.getElementById('txtret11').value = "";
        document.getElementById('txtret11').value = "-- Select Retainer --";
        document.getElementById('txtret11').style.textAlign = "center";
        document.getElementById('txtret11').style.textTransform = "capitalize";

        document.getElementById('txtret11').style.color = "gray";
    }
    else {
        document.getElementById('txtret11').style.textAlign = "left";
        document.getElementById('txtret11').style.color = "black";
    }

    return false;
}


///////////*************************************************************************Enter Tab Main form ************************************************************************

//function onloadedisabel() {
//    document.getElementById('txtcompany').focus();
//}
//function Entertabfun(event) {
//    var key = event.keyCode ? event.keyCode : event.which;

//    if (key == 13) {
//        if (document.activeElement.id == "txtcompany") {

//            if (document.getElementById("divcompname").style.display != "none") {
//                filllcompanyname(event);
//            }

//            if (document.getElementById('drpcenter').disabled == false) {
//                document.getElementById('drpcenter').focus();
//                return false;
//            }

//        }
//        else if (document.activeElement.id == "drpcenter") {
//            if (document.getElementById('drpbranch').disabled == false) {
//                document.getElementById('drpbranch').focus();
//                return false;
//            }
//        }
//        else if (document.activeElement.id == "drpbranch") {
//            if (document.getElementById('dradtype').disabled == false) {
//                document.getElementById('dradtype').focus();
//                return false;
//            }
//        }
//        else if (document.activeElement.id == "dradtype") {
//            if (document.getElementById('drpchannel').disabled == false) {
//                document.getElementById('drpchannel').focus();
//                return false;
//            }
//        }
//        else if (document.activeElement.id == "drpchannel") {
//            if (document.getElementById('txtbookingno').disabled == false) {
//                document.getElementById('txtbookingno').focus();
//                return false;
//            }
//        }
//        else if (document.activeElement.id == "txtbookingno") {
//            if (document.getElementById('txtagencyname').disabled == false) {
//                document.getElementById('txtagencyname').focus();
//                return false;
//            }
//        }
//        else if (document.activeElement.id == "txtagencyname") {
//            if (document.getElementById("divagency").style.display != "none") {
//                fillpub(event);
//            }

//            if (document.getElementById('txtstate').disabled == false) {
//                document.getElementById('txtstate').focus();
//                return false;
//            }
//        }

//        else if (document.activeElement.id == "txtstate") {
//            if (document.getElementById("divstate").style.display != "none") {
//                fillpub(event);
//            }

//            if (document.getElementById('txtclient').disabled == false) {
//                document.getElementById('txtclient').focus();
//                return false;
//            }
//        }

//        else if (document.activeElement.id == "txtclient") {
//            if (document.getElementById("divclient").style.display != "none") {
//                fillpub(event);
//            }


//            if (document.getElementById('txtdistrict').disabled == false) {
//                document.getElementById('txtdistrict').focus();
//                return false;
//            }
//        }

//        else if (document.activeElement.id == "txtdistrict") {
//            if (document.getElementById("divdistrict").style.display != "none") {
//                fillpub(event);
//            }

//            if (document.getElementById('txtzone').disabled == false) {
//                document.getElementById('txtzone').focus();
//                return false;
//            }
//        }

//        else if (document.activeElement.id == "txtzone") {
//            if (document.getElementById("divzone").style.display != "none") {
//                fillpub(event);
//            }



//            if (document.getElementById('txtregion').disabled == false) {
//                document.getElementById('txtregion').focus();
//                return false;
//            }
//        }

//        else if (document.activeElement.id == "txtregion") {
//            if (document.getElementById("divregion").style.display != "none") {
//                fillpub(event);
//            }



//            if (document.getElementById('txttaluka').disabled == false) {
//                document.getElementById('txttaluka').focus();
//                return false;
//            }
//        }

//        else if (document.activeElement.id == "txttaluka") {
//            if (document.getElementById("divtaluka").style.display != "none") {
//                fillpub(event);
//            }


//            if (document.getElementById('txtindustry').disabled == false) {
//                document.getElementById('txtindustry').focus();
//                return false;
//            }
//        }

//        else if (document.activeElement.id == "txtindustry") {
//            if (document.getElementById("divindu").style.display != "none") {
//                fillpub(event);
//            }


//            if (document.getElementById('txtproduct').disabled == false) {
//                document.getElementById('txtproduct').focus();
//                return false;
//            }
//        }

//        else if (document.activeElement.id == "txtproduct") {
//            if (document.getElementById("divproduct").style.display != "none") {
//                fillpub(event);
//            }
//            if (document.getElementById('txtpageno').disabled == false) {
//                document.getElementById('txtpageno').focus();
//                return false;
//            }

//        }
//        else if (document.activeElement.id == "txtpageno") {
//            if (document.getElementById('txtpubpage').disabled == false) {
//                document.getElementById('txtpubpage').focus();
//                return false;
//            }
//        }
//        else if (document.activeElement.id == "txtpubpage") {
//            if (document.getElementById('dradatechange').disabled == false) {
//                document.getElementById('dradatechange').focus();
//                return false;
//            }
//        }

//        else if (document.activeElement.id == "dradatechange") {
//            if (document.getElementById('txtfromdate').disabled == false) {
//                document.getElementById('txtfromdate').focus();
//                return false;
//            }
//        }
//        else if (document.activeElement.id == "txtfromdate") {
//            if (document.getElementById('txttodate').disabled == false) {
//                document.getElementById('txttodate').focus();
//                return false;
//            }
//        }
//        else if (document.activeElement.id == "txttodate") {
//            if (document.getElementById('txtbrand').disabled == false) {
//                document.getElementById('txtbrand').focus();
//                return false;
//            }
//        }
//        else if (document.activeElement.id == "txtbrand") {
//            if (document.getElementById("divbrand").style.display != "none") {
//                fillpub(event);
//            }

//            if (document.getElementById('txtexce').disabled == false) {
//                document.getElementById('txtexce').focus();
//                return false;
//            }
//        }

//        else if (document.activeElement.id == "txtexce") {
//            if (document.getElementById("divexce").style.display != "none") {
//                fillpub(event);
//            }


//            if (document.getElementById('txtret').disabled == false) {
//                document.getElementById('txtret').focus();
//                return false;
//            }
//        }

//        else if (document.activeElement.id == "txtret") {
//            if (document.getElementById("divret").style.display != "none") {
//                fillpub(event);
//            }

//            if (document.getElementById('drpratetype').disabled == false) {
//                document.getElementById('drpratetype').focus();
//                return false;
//            }

//        }
//        else if (document.activeElement.id == "drpratetype") {
//            if (document.getElementById('drpbasedon').disabled == false) {
//                document.getElementById('drpbasedon').focus();
//                return false;
//            }
//        }

//        else if (document.activeElement.id == "drpbasedon") {
//            if (document.getElementById('txtevent').disabled == false) {
//                document.getElementById('txtevent').focus();
//                return false;
//            }
//        }
//        else if (document.activeElement.id == "txtevent") {
//            if (document.getElementById("diveventmain").style.display != "none") {
//                fillpub(event);

//            }

//            if (document.getElementById('drpupdatein').disabled == false) {
//                document.getElementById('drpupdatein').focus();
//                return false;
//            }

//        }
//        else if (document.activeElement.id == "drpupdatein") {
//            if (document.getElementById('btnsave').disabled == false) {
//                document.getElementById('btnsave').focus();
//                return false;
//            }
//        }
//        else if (document.activeElement.type == "button" || document.activeElement.type == "submit" || document.activeElement.type == "image") {
//            return key;
//        }
//        }
//    }

/////////*****************************************************bulk update************************************************//

//function onloadedisabel() {
//    document.getElementById('bulkupdate').focus();
//}
//function Entertabfun(event) {
//    var key = event.keyCode ? event.keyCode : event.which;

//    if (key == 13) {
//        if (document.activeElement.id == "txtclient11") {
//            if (document.getElementById('txtexce11').disabled == false) {
//                document.getElementById('txtexce11').focus();
//                return false;
//            }
//        }

//        else if (document.activeElement.id == "txtexce11") {
//            if (document.getElementById("divexce11").style.display != "none") {
//                fillpub(event);
//            }


//            if (document.getElementById('txtindustry11').disabled == false) {
//                document.getElementById('txtindustry11').focus();
//                return false;
//            }
//        }
//        else if (document.activeElement.id == "txtindustry11") {
//            if (document.getElementById("divindu11").style.display != "none") {
//                fillpub(event);
//            }

//            if (document.getElementById('txtproduct11').disabled == false) {
//                document.getElementById('txtproduct11').focus();
//                return false;
//            }
//        }

//        else if (document.activeElement.id == "txtproduct11") {
//            if (document.getElementById("divproduct11").style.display != "none") {
//                fillpub(event);
//            }


//            if (document.getElementById('txtbrand11').disabled == false) {
//                document.getElementById('txtbrand11').focus();
//                return false;
//            }

//        }
//        else if (document.activeElement.id == "txtbrand11") {
//            if (document.getElementById("divbrand11").style.display != "none") {
//                fillpub(event);
//            }


//            if (document.getElementById('txtevent11').disabled == false) {
//                document.getElementById('txtevent11').focus();
//                return false;
//            }
//        }

//        else if (document.activeElement.id == "txtevent11") {
//            if (document.getElementById("divevent11").style.display != "none") {
//                fillpub(event);
//            }

//            if (document.getElementById('txtret11').disabled == false) {
//                document.getElementById('txtret11').focus();
//                return false;
//            }
//        }


//        else if (document.activeElement.id == "txtret11") {
//            if (document.getElementById('btnup').disabled == false) {
//                document.getElementById('btnup').focus();
//                return false;
//            }
//        }
//        else if (document.activeElement.type == "button" || document.activeElement.type == "submit" || document.activeElement.type == "image") {
//            return key;
//        }
//        }
//    }


//*************************************************F2 For Gridview Gridview  ************************************************************
//var tid = "";
//function getclie(event, res) {
//    var key = event.keyCode ? event.keyCode : event.which;
//    var id = res.split("_")[1];

//    if (key == 113 && document.activeElement.id == (res)) {
//        tid = res;


//        document.getElementById("divcl").style.display = "block";
//        aTag = eval(document.getElementById(res))
//        var btag;
//        var leftpos = -270;
//        var toppos = 0;
//        do {
//            aTag = eval(aTag.offsetParent);
//            leftpos += aTag.offsetLeft;
//            toppos += aTag.offsetTop;
//            if (toppos > 600) {
//                toppos = 400;
//            }

//            btag = eval(aTag)
//        }
//        while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
//        var tot = document.getElementById('divcl').scrollLeft;
//        var scrolltop = document.getElementById('divcl').scrollTop;
//        document.getElementById('divcl').style.left = document.getElementById(res).offsetLeft + leftpos - tot + "px";
//        document.getElementById('divcl').style.top = document.getElementById(res).offsetTop + toppos - scrolltop + "px"; //"510px";
//        //  document.getElementById('divcl').style.left = "150px";
//        //   document.getElementById('divcl').style.top = "500px";
//        //var extra1 = document.getElementById('hiddencompcode').value;
//        //document.getElementById('change_' + id[1]).value = "Y";
//        var pagname = document.getElementById(res).value.toUpperCase()

//        var pcenter = document.getElementById('hdncent').value;
//        var pcompcode = document.getElementById('hiddencompcode').value;
//        BookingDataUpdate.Bindadclient(pagname, pcompcode, pcenter, bindelie_callback);

//    }
//    else if ((key == 8) || (key == 46)) {
//        if (document.activeElement.id == (res)) {
//            document.getElementById(res.split("_")[0] + "_" + res.split("_")[1] + "_txtclientcode").value = "";

//        }
//    }
//    else if (key == 36 || key == 37 || key == 39) {
//        document.getElementById("divcl").style.display = "none";
//    }
//    else if (key == 27) {
//        document.getElementById("divcl").style.display = "none";
//        document.getElementById(res).focus();
//        return false;
//    }
//    else if (key == 13) {
//        if (document.activeElement.id == "lstcl") {
//            filllclie();
//            return false;
//        }
//    }

//        //    else if (key == 9) {
//        //        document.getElementById("divcl").style.display = "none";
//        //        document.getElementById("execname_" + id[1]).focus();
//        //        return false;
//        //    }
//    else if (key == 38) {
//        if (document.getElementById("divcl").style.display == "block") {
//            if (document.getElementById("lstcl").value == '0') {
//                document.getElementById(res).focus();

//            }
//        }
//    }
//    else if (key == 40) {
//        if (document.getElementById("divcl").style.display == "block") {
//            document.getElementById("lstcl").focus();
//        }
//    }
//    else {
//        document.getElementById("divcl").style.display = "block";
//        aTag = eval(document.getElementById(res))
//        var btag;
//        var leftpos = -270;
//        var toppos = 0;
//        do {
//            aTag = eval(aTag.offsetParent);
//            leftpos += aTag.offsetLeft;
//            toppos += aTag.offsetTop;
//            if (toppos > 600) {
//                toppos = 400;
//            }

//            btag = eval(aTag)
//        }
//        while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
//        var tot = document.getElementById('divcl').scrollLeft;
//        var scrolltop = document.getElementById('divcl').scrollTop;
//        document.getElementById('divcl').style.left = document.getElementById(res).offsetLeft + leftpos - tot + "px";
//        document.getElementById('divcl').style.top = document.getElementById(res).offsetTop + toppos - scrolltop + "px"; //"510px";
//        // var extra1 = document.getElementById('hiddencompcode').value;
//        //document.getElementById('change_' + id[1]).value = "Y";
//        var pagname = document.getElementById(res).value.toUpperCase()
//        //        if (document.getElementById('hdsepartad').value == "N") {
//        //            adsepart = "N"
//        //        }
//        //        else {
//        //adsepart = "Y"
//        // }
//        var pcenter = document.getElementById('hdncent').value;
//        var pcompcode = document.getElementById('hiddencompcode').value;
//        BookingDataUpdate.Bindadclient(pagname, pcompcode, pcenter, bindelie_callback);
//    }
//    //nubberwithupdandown(event);
//}
//function bindelie_callback(response) {
//    var ds = response.value;
//    // var id = activeidgp.split("_");
//    var lstitem = document.getElementById("lstcl");
//    lstitem.options.length = 0;
//    lstitem.options[0] = new Option("-------- Select Client Name ---------", "0");
//    if (ds != null && ds.Tables[0].Rows.length > 0) {

//        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
//            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].CLIENT_NAME, ds.Tables[0].Rows[i].CLIENT_CODE);
//        }


//    }

//    // document.getElementById("_txtclientcode" + id[1]).value = "";
//    document.getElementById("lstcl").value = "0";
//    //document.getElementById("istevent").focus();
//    return false;
//}


//function filllclie(event) {
//    var key = event.keyCode ? event.keyCode : event.which;
//    var id = tid.split("_")[0] + "_" + tid.split("_")[1] + "_txtclientcode";

//    if (key == 27) {
//        if (document.activeElement.id == "lstcl") {
//            document.getElementById("divcl").style.display = "none";
//            document.getElementById(tid).focus();
//            return false;
//        }
//    }
//    if (key == 13 || event.type == "click") {
//        if (document.getElementById("lstcl").value == "0") {
//            alert("Please Select Client  Name");
//            return false;
//        }
//        else {
//            document.getElementById("divcl").style.display = "none";
//            var lstvalue = document.getElementById('lstcl').value;
//            for (var k = 0; k < document.getElementById("lstcl").length; k++) {
//                if (document.getElementById('lstcl').options[k].value == lstvalue) {
//                    document.getElementById("hdnclientgrid").value = document.getElementById('lstcl').options[k].value;
//                    if (browser != "Microsoft Internet Explorer")
//                        document.getElementById(tid).value = document.getElementById('lstcl').options[k].textContent;
//                    else
//                        document.getElementById(tid).value = document.getElementById('lstcl').options[k].innerText;

//                    break;
//                }
//            }
//        }

//        document.getElementById(tid).focus();
//        return false;
//    }
//}

/////************************* bind Agency grid
var tid = "";
function getagency(event, res) {

    var key = event.keyCode ? event.keyCode : event.which;
    var id = res.split("_")[1];

    if (key == 113 && document.activeElement.id == (res)) {
        tid = res;

        document.getElementById("divagencygrid").style.display = "block";
        aTag = eval(document.getElementById(res))
        var btag;
        var leftpos = -270;
        var toppos = 0;
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
        document.getElementById('divagencygrid').style.left = document.getElementById(res).offsetLeft + leftpos - tot + "px";
        document.getElementById('divagencygrid').style.top = document.getElementById(res).offsetTop + toppos - scrolltop + "px"; //"510px";
        // document.getElementById('divcl').style.left = "200px";
        // document.getElementById('divcl').style.top = "440px";
        //var extra1 = document.getElementById('hiddencompcode').value;
        // document.getElementById('change_' + id[1]).value = "Y";
        var pagname = document.getElementById(res).value.toUpperCase()
        //        if (document.getElementById('hdsepartad').value == "N") {
        //            adsepart = "N"
        //        }
        //        else {
        //adsepart = "Y"
        // }
        var pcenter = document.getElementById('hdncent').value;
        var pcompcode = document.getElementById('hiddencompcode').value;
        BookingDataUpdate.Bindagency(pagname, pcompcode, pcenter, "Y", bindagg_callback);

    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == (res)) {
            document.getElementById(res.split("_")[0] + "_" + res.split("_")[1] + "_txtagencycode").value = "";

        }
    }
    else if (key == 36 || key == 37 || key == 39) {
        document.getElementById("divagencygrid").style.display = "none";
    }
    else if (key == 27) {
        document.getElementById("divagencygrid").style.display = "none";
        document.getElementById(res).focus();
        return false;
    }
    else if (key == 13) {
        if (document.getElementById("divagencygrid").style.display == "block") {
            filllagency(event);
            document.getElementById("divagencygrid").style.display == "none";
            return false;
        }
        if (document.activeElement.id == "lstagencygrid") {
            filllagency(event);
            return false;
        }

        if (document.activeElement.id == res) {
            document.getElementById(res.split("_")[0] + "_" + res.split("_")[1] + "_txtclientname").focus();
            return false;
        }
    }


    else if (key == 9) {
        document.getElementById("divagencygrid").style.display = "none";
        document.getElementById(res).focus();
        return false;
    }
    else if (key == 38) {
        if (document.getElementById("divagencygrid").style.display == "block") {
            if (document.getElementById("lstagencygrid").value == '0') {
                document.getElementById(res).focus();

            }
        }
    }
    else if (key == 40) {
        if (document.getElementById("divagencygrid").style.display == "block") {
            document.getElementById("lstagencygrid").focus();
        }
    }
    else {
        document.getElementById("divagencygrid").style.display = "block";
        aTag = eval(document.getElementById(res))
        var btag;
        var leftpos = -270;
        var toppos = 0;
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
        var tot = document.getElementById('divagencygrid').scrollLeft;
        var scrolltop = document.getElementById('divagencygrid').scrollTop;
        document.getElementById('divagencygrid').style.left = document.getElementById(res).offsetLeft + leftpos - tot + "px";
        document.getElementById('divagencygrid').style.top = document.getElementById(res).offsetTop + toppos - scrolltop + "px"; //"510px";
        // var extra1 = document.getElementById('hiddencompcode').value;
        // document.getElementById('change_' + id[1]).value = "Y";
        var pagname = document.getElementById(res).value.toUpperCase()
        //        if (document.getElementById('hdsepartad').value == "N") {
        //            adsepart = "N"
        //        }
        //        else {
        //adsepart = "Y"
        // }
        var pcenter = document.getElementById('hdncent').value;
        var pcompcode = document.getElementById('hiddencompcode').value;
        BookingDataUpdate.Bindagency(pagname, pcompcode, pcenter, "Y", bindagg_callback);
        //var resa = Booking_Data_Update.Bindagency(document.getElementById("agencyname_" + id[1]).value.toUpperCase(), document.getElementById('hiddencompcode').value, document.getElementById('hdncent').value, adsepart);

    }
    //nubberwithupdandown(event);
}
function bindagg_callback(response) {
    var ds = response.value;
    //var id = activeidgp.split("_");
    var lstitem = document.getElementById("lstagencygrid");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select Agency Name ---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].AGENCY_NAME, ds.Tables[0].Rows[i].AGENCY_CODE_SUBCODE);
        }


    }

    //document.getElementById("txtclientcode_" + id[1]).value = "";
    document.getElementById("lstagencygrid").selectedIndex = 1;
    //document.getElementById("istevent").focus();
    return false;
}

function filllagency(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    var id = "UserAllocationGrid_" + tid.split("_")[1] + "_txtagencycode";

    if (key == 27) {
        if (document.activeElement.id == "lstagencygrid") {
            document.getElementById("divagencygrid").style.display = "none";
            document.getElementById(tid).focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {
        if (document.getElementById("lstagencygrid").value == "0") {
            alert("Please Select Agency  Name");
            return false;
        }
        else {
            document.getElementById("divagencygrid").style.display = "none";
            var lstvalue = document.getElementById('lstagencygrid').value;
            for (var k = 0; k < document.getElementById("lstagencygrid").length; k++) {
                if (document.getElementById('lstagencygrid').options[k].value == lstvalue) {
                    document.getElementById(id).value = document.getElementById('lstagencygrid').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById(tid).value = document.getElementById('lstagencygrid').options[k].textContent;
                    else
                        document.getElementById(tid).value = document.getElementById('lstagencygrid').options[k].innerText;

                    break;
                }
            }
        }

        document.getElementById(tid).focus();
        return false;
    }
}



/////************************* bind Client grid
var tid = "";
function getclie(event, res) {

    var key = event.keyCode ? event.keyCode : event.which;
    var id = res.split("_")[1];

    if (key == 113 && document.activeElement.id == (res)) {
        tid = res;

        document.getElementById("divcl").style.display = "block";
        aTag = eval(document.getElementById(res))
        var btag;
        var leftpos = -270;
        var toppos = 0;
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
        document.getElementById('divcl').style.left = document.getElementById(res).offsetLeft + leftpos - tot + "px";
        document.getElementById('divcl').style.top = document.getElementById(res).offsetTop + toppos - scrolltop + "px"; //"510px";
        // document.getElementById('divcl').style.left = "200px";
        // document.getElementById('divcl').style.top = "440px";
        //var extra1 = document.getElementById('hiddencompcode').value;
        // document.getElementById('change_' + id[1]).value = "Y";
        var pagname = document.getElementById(res).value.toUpperCase()
        //        if (document.getElementById('hdsepartad').value == "N") {
        //            adsepart = "N"
        //        }
        //        else {
        //adsepart = "Y"
        // }
        var pcenter = document.getElementById('hdncent').value;
        var pcompcode = document.getElementById('hiddencompcode').value;
        BookingDataUpdate.Bindadclient(pagname, pcompcode, pcenter, bindelie_callback);

    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == (res)) {
            document.getElementById(res.split("_")[0] + "_" + res.split("_")[1] + "_txtclientcode").value = "";

        }
    }
    else if (key == 36 || key == 37 || key == 39) {
        document.getElementById("divcl").style.display = "none";
    }
    else if (key == 27) {
        document.getElementById("divcl").style.display = "none";
        document.getElementById(res).focus();
        return false;
    }
    else if (key == 13) {
        if (document.getElementById("divcl").style.display == "block") {
            filllclie(event);
            document.getElementById("divcl").style.display == "none";
            return false;
        }
        if (document.activeElement.id == "lstcl") {
            filllclie(event);
            return false;
        }

        if (document.activeElement.id == res) {
            document.getElementById(res.split("_")[0] + "_" + res.split("_")[1] + "_txtexce").focus();
            return false;
        }
    }


    else if (key == 9) {
        document.getElementById("divcl").style.display = "none";
        document.getElementById(res).focus();
        return false;
    }
    else if (key == 38) {
        if (document.getElementById("divcl").style.display == "block") {
            if (document.getElementById("lstcl").value == '0') {
                document.getElementById(res).focus();

            }
        }
    }
    else if (key == 40) {
        if (document.getElementById("divcl").style.display == "block") {
            document.getElementById("lstcl").focus();
        }
    }
    else {
        document.getElementById("divcl").style.display = "block";
        aTag = eval(document.getElementById(res))
        var btag;
        var leftpos = -270;
        var toppos = 0;
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
        var tot = document.getElementById('divcl').scrollLeft;
        var scrolltop = document.getElementById('divcl').scrollTop;
        document.getElementById('divcl').style.left = document.getElementById(res).offsetLeft + leftpos - tot + "px";
        document.getElementById('divcl').style.top = document.getElementById(res).offsetTop + toppos - scrolltop + "px"; //"510px";
        // var extra1 = document.getElementById('hiddencompcode').value;
        // document.getElementById('change_' + id[1]).value = "Y";
        var pagname = document.getElementById(res).value.toUpperCase()
        //        if (document.getElementById('hdsepartad').value == "N") {
        //            adsepart = "N"
        //        }
        //        else {
        //adsepart = "Y"
        // }
        var pcenter = document.getElementById('hdncent').value;
        var pcompcode = document.getElementById('hiddencompcode').value;
        BookingDataUpdate.Bindadclient(pagname, pcompcode, pcenter, bindelie_callback);
    }
    //nubberwithupdandown(event);
}
function bindelie_callback(response) {
    var ds = response.value;
    //var id = activeidgp.split("_");
    var lstitem = document.getElementById("lstcl");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select Client Name ---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].CLIENT_NAME, ds.Tables[0].Rows[i].CLIENT_CODE);
        }


    }

    //document.getElementById("txtclientcode_" + id[1]).value = "";
    document.getElementById("lstcl").selectedIndex = 1;
    //document.getElementById("istevent").focus();
    return false;
}

function filllclie(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    var id = "UserAllocationGrid_" + tid.split("_")[1] + "_txtclientcode";

    if (key == 27) {
        if (document.activeElement.id == "lstcl") {
            document.getElementById("divcl").style.display = "none";
            document.getElementById(tid).focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {
        if (document.getElementById("lstcl").value == "0") {
            alert("Please Select Client  Name");
            return false;
        }
        else {
            document.getElementById("divcl").style.display = "none";
            var lstvalue = document.getElementById('lstcl').value;
            for (var k = 0; k < document.getElementById("lstcl").length; k++) {
                if (document.getElementById('lstcl').options[k].value == lstvalue) {
                    document.getElementById(id).value = document.getElementById('lstcl').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById(tid).value = document.getElementById('lstcl').options[k].textContent;
                    else
                        document.getElementById(tid).value = document.getElementById('lstcl').options[k].innerText;

                    break;
                }
            }
        }

        document.getElementById(tid).focus();
        return false;
    }
}




/////************************* bind exec grid*************************************************************

var tid = "";
function getexec(event, res) {

    var key = event.keyCode ? event.keyCode : event.which;
    var id = res.split("_")[1];

    if (key == 113 && document.activeElement.id == (res)) {
        tid = res;


        document.getElementById("divexec").style.display = "block";
        aTag = eval(document.getElementById(res))
        var btag;
        var leftpos = -250;
        var toppos = 0;
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
        var tot = document.getElementById('divgridview').scrollLeft;
        var scrolltop = document.getElementById('divgridview').scrollTop;
        document.getElementById('divexec').style.left = document.getElementById(res).offsetLeft + leftpos - tot + "px";
        document.getElementById('divexec').style.top = document.getElementById(res).offsetTop + toppos - scrolltop + 18 + "px"; //"510px";

        var PCOMP_CODE = document.getElementById('hiddencompcode').value;
        //var extra1 = document.getElementById('hiddencompcode').value;
        //document.getElementById('change_' + id[1]).value = "Y";
        // var pececname = document.getElementById(res).value.toUpperCase() // 'txtexcecode' + id[1]
        //var PCOMP_CODE = document.getElementById('hiddencompcode').value;
        var PDESC = document.getElementById(res).value.toUpperCase();
        var PSEACH = "G";
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        BookingDataUpdate.Bindexec(PCOMP_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindexec_callback);


    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == (res)) {
            document.getElementById(res.split("_")[0] + "_" + res.split("_")[1] + "_txtexcecode").value = "";

        }
    }
    else if (key == 27) {
        document.getElementById("divexec").style.display = "none";
        document.getElementById(tid).focus();
        return false;
    }
    else if (key == 13) {
        if (document.getElementById("divexec").style.display == "block") {
            filllexecname(event);
            document.getElementById("divexec").style.display == "none";
            return false;
        }
        if (document.activeElement.id == "lstexe") {
            filllexecname(event);
            return false;
        }

        if (document.activeElement.id == res) {
            document.getElementById(res.split("_")[0] + "_" + res.split("_")[1] + "_txtretname").focus();
            return false;
        }
    }

    else if (key == 36 || key == 37 || key == 39) {
        document.getElementById("divexec").style.display = "none";
    }
        //    else if (key == 9) {
        //        document.getElementById("divexec").style.display = "none";
        //        document.getElementById("industryname_" + id[1]).focus();
        //        return false;
        //    }
    else if (key == 38) {
        if (document.getElementById("divexec").style.display == "block") {
            if (document.getElementById("lstexe").value == '0') {
                document.getElementById(res).focus();

            }
        }
    }
    else if (key == 40) {
        if (document.getElementById("divexec").style.display == "block") {
            document.getElementById("lstexe").focus();
        }
    }
    else {
        document.getElementById("divexec").style.display = "block";
        aTag = eval(document.getElementById(res))
        var btag;
        var leftpos = -270;
        var toppos = 0;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            if (toppos > 0) {
                toppos = 0;
            }

            btag = eval(aTag)
        }
        while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divexec').scrollLeft;
        var scrolltop = document.getElementById('divexec').scrollTop;
        document.getElementById('divexec').style.left = document.getElementById(res).offsetLeft + leftpos - tot + "px";
        document.getElementById('divexec').style.top = document.getElementById(res).offsetTop + toppos - scrolltop + "px"; //"510px";
        // var extra1 = document.getElementById('hiddencompcode').value;
        //    document.getElementById('change_' + id[1]).value = "Y";
        //var pececname = document.getElementById(res).value.toUpperCase();
        var PCOMP_CODE = document.getElementById('hiddencompcode').value;
        var PDESC = document.getElementById(res).value;
        var PSEACH = "G";
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        BookingDataUpdate.Bindexec(PCOMP_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindexec_callback);
    }
    // nubberwithupdandown(event);
}



//var tot = document.getElementById('divexce').scrollLeft;
//var scrolltop = document.getElementById('divexce').scrollTop;
//document.getElementById('divexce').style.left = document.getElementById("txtexce").offsetLeft + leftpos - tot + "px";
//document.getElementById('divexce').style.top = document.getElementById("txtexce").offsetTop + toppos - scrolltop + 18 + "px"; //"510px";

//var PCOMP_CODE = document.getElementById('hiddencompcode').value;
//var PDESC = document.getElementById('txtexce').value.toUpperCase()
//var PSEACH = "G";
//var PEXTRA = "";
//var PEXTRA1 = "";
//var PEXTRA2 = "";
//BookingDataUpdate.Bindexec(PCOMP_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindexce_callback);

////        Booking_Data_Update.Bindexec(document.getElementById('txtexce').value.toUpperCase(), document.getElementById('hiddencompcode').value, document.getElementById('hdncent').value, bindexce_callback);

//}
//else if ((key == 8) || (key == 46)) {
//    if (document.activeElement.id == "txtexce") {
//        document.getElementById('hdnexce').value = "";
//    }
//}
//else if (key == 27) {
//    document.getElementById("divexce").style.display = "none";

//    return false;
//}
//else if (key == 13) {


//    fillexce();

//    document.getElementById("divexce").style.display = "none";
//}

//else if (key == 38) {
//    if (document.getElementById("divexce").style.display == "block") {
//        if (document.getElementById('lstexce').value == '0') {
//            document.getElementById('txtexce').focus();
//        }
//    }
//}

//else if (key == 40) {
//    if (document.getElementById("divexce").style.display == "block") {
//        document.getElementById("lstexce").focus();
//    }
//}

//}


function bindexec_callback(response) {
    var ds = response.value;
    //  var id = activeidgp.split("_");
    var lstitem = document.getElementById("lstexe");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select Exec Name ---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].EXEC_NAME, ds.Tables[0].Rows[i].EXEC_CODE);
        }


    }

    //document.getElementById("execcode_" + id[1]).value = "";
    document.getElementById("lstexe").selectedIndex = 1;
    //document.getElementById("istevent").focus();
    return false;
}

function filllexecname(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    var id = tid.split("_")[0] + "_" + tid.split("_")[1] + "_txtexcecode";
    //var id = "UserAllocationGrid_" + tid.split("_")[1] + "_txtexcecode";

    if (key == 27) {
        if (document.activeElement.id == "lstexe") {
            document.getElementById("divexec").style.display = "none";
            document.getElementById(tid).focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {
        if (document.getElementById("lstexe").value == "0") {
            alert("Please Select Event  Name");
            return false;
        }
        else {
            document.getElementById("divexec").style.display = "none";
            var lstvalue = document.getElementById('lstexe').value;
            for (var k = 0; k < document.getElementById("lstexe").length; k++) {
                if (document.getElementById('lstexe').options[k].value == lstvalue) {
                    document.getElementById(id).value = document.getElementById('lstexe').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById(tid).value = document.getElementById('lstexe').options[k].textContent;
                    else
                        document.getElementById(tid).value = document.getElementById('lstexe').options[k].innerText;

                    break;
                }
            }
        }


        document.getElementById(tid).focus();
        return false;
    }
}

/////************************* bind RET grid********************************************************
var tid = "";
function getreta(event, res) {

    var key = event.keyCode ? event.keyCode : event.which;
    var id = res.split("_")[1];

    if (key == 113 && document.activeElement.id == (res)) {
        tid = res;


        document.getElementById("divreta").style.display = "block";
        aTag = eval(document.getElementById(res))
        var btag;
        var leftpos = -250;
        var toppos = 0;
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
        var tot = document.getElementById('divgridview').scrollLeft;
        var scrolltop = document.getElementById('divgridview').scrollTop;
        document.getElementById('divreta').style.left = document.getElementById(res).offsetLeft + leftpos - tot + "px";
        document.getElementById('divreta').style.top = document.getElementById(res).offsetTop + toppos - scrolltop + 18 + "px"; //"510px";
        //document.getElementById('divreta').style.left = "580px";
        //document.getElementById('divreta').style.top = "440px";
        //var extra1 = document.getElementById('hiddencompcode').value;
        // document.getElementById('change_' + id[1]).value = "Y";
        var pececname = document.getElementById(res).value.toUpperCase()
        //        if (document.getElementById('hdsepartad').value == "N") {
        //            adsepart = "N"
        //        }
        //        else {
        //adsepart = "Y"
        // }
        //  var PCENTER = document.getElementById('hdncent').value;
        var pcompcode = document.getElementById('hiddencompcode').value;
        // BookingDataUpdate.Bindretainer(document.getElementById('txtretname').value.toUpperCase(), document.getElementById('hiddencompcode').value, bindreta_callback);

        BookingDataUpdate.Bindretainer(pececname, pcompcode, bindreta_callback);

    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == (res)) {
            document.getElementById(res.split("_")[0] + "_" + res.split("_")[1] + "_txtretcode").value = "";

        }
    }
    else if (key == 27) {
        document.getElementById("divreta").style.display = "none";
        document.getElementById(res).focus();
        return false;
    }
    else if (key == 9) {
        document.getElementById("divreta").style.display = "none";
        document.getElementById(res).focus();
        return false;
    }
    else if (key == 13) {
        if (document.getElementById("divreta").style.display == "block") {
            filllretaname(event);
            document.getElementById("divreta").style.display == "none";
            return false;
        }
        if (document.activeElement.id == "lstreta") {
            filllretaname(event);
            return false;
        }

        if (document.activeElement.id == res) {
            document.getElementById(res.split("_")[0] + "_" + res.split("_")[1] + "_txtinduteryname").focus();
            return false;
        }
    }
        //    else if (key == 9) {
        //    document.getElementById("divexec").style.display = "none";
        //    document.getElementById("industryname_" + id[1]).focus();
        //        return false;
        //    }
    else if (key == 38) {
        if (document.getElementById("divreta").style.display == "block") {
            if (document.getElementById("lstreta").value == '0') {
                document.getElementById(res).focus();

            }
        }
    }
    else if (key == 40) {
        if (document.getElementById("divreta").style.display == "block") {
            document.getElementById("lstreta").focus();
        }
    }
    else {
        document.getElementById("divexec").style.display = "block";
        aTag = eval(document.getElementById(res))
        var btag;
        var leftpos = -270;
        var toppos = 0;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            if (toppos > 0) {
                toppos = 0;
            }

            btag = eval(aTag)
        }
        while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divreta').scrollLeft;
        var scrolltop = document.getElementById('divreta').scrollTop;
        document.getElementById('divreta').style.left = document.getElementById(res).offsetLeft + leftpos - tot + "px";
        document.getElementById('divreta').style.top = document.getElementById(res).offsetTop + toppos - scrolltop + "px"; //"510px";
        // var extra1 = document.getElementById('hiddencompcode').value;
        //   document.getElementById('change_' + id[1]).value = "Y";
        var pececname = document.getElementById(res).value.toUpperCase()
        //        if (document.getElementById('hdsepartad').value == "N") {
        //            adsepart = "N"
        //        }
        //        else {
        //adsepart = "Y"
        // }
        // var PCENTER = document.getElementById('hdncent').value;
        var pcompcode = document.getElementById('hiddencompcode').value;
        BookingDataUpdate.Bindretainer(pececname, pcompcode, bindreta_callback);
    }
    //nubberwithupdandown(event);
}
function bindreta_callback(response) {
    var ds = response.value;
    //var id = activeidgp.split("_");
    var lstitem = document.getElementById("lstreta");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select Retainer Name ---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].RET_NAME, ds.Tables[0].Rows[i].RET_CODE);
        }


    }

    //document.getElementById("retcode_" + id[1]).value = "";
    document.getElementById("lstreta").selectedIndex = 1;
    //document.getElementById("istevent").focus();
    return false;
}

function filllretaname(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    var id = tid.split("_")[0] + "_" + tid.split("_")[1] + "_txtretcode";
    if (key == 27) {
        if (document.activeElement.id == "lstreta") {
            document.getElementById("divreta").style.display = "none";
            document.getElementById(tid).focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {
        if (document.getElementById("lstreta").value == "0") {
            alert("Please Select Retainer  Name");
            return false;
        }
        else {
            document.getElementById("divreta").style.display = "none";
            var lstvalue = document.getElementById('lstreta').value;
            for (var k = 0; k < document.getElementById("lstreta").length; k++) {
                if (document.getElementById('lstreta').options[k].value == lstvalue) {
                    document.getElementById(id).value = document.getElementById('lstreta').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById(tid).value = document.getElementById('lstreta').options[k].textContent;
                    else
                        document.getElementById(tid).value = document.getElementById('lstreta').options[k].innerText;

                    break;
                }
            }
        }

        document.getElementById(tid).focus();
        return false;
    }
}

/////************************************************************************* bind industry grid*********************************************************
var tid = "";
function getindustry(event, res) {

    var key = event.keyCode ? event.keyCode : event.which;
    var id = res.split("_")[1];

    if (key == 113 && document.activeElement.id == (res)) {
        tid = res;


        document.getElementById("divindustry2").style.display = "block";
        aTag = eval(document.getElementById(res))
        var btag;
        var leftpos = -250;
        var toppos = 0;
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
        var tot = document.getElementById('divgridview').scrollLeft;
        var scrolltop = document.getElementById('divgridview').scrollTop;
        document.getElementById('divindustry2').style.left = document.getElementById(res).offsetLeft + leftpos - tot + "px";
        document.getElementById('divindustry2').style.top = document.getElementById(res).offsetTop + toppos - scrolltop + "px"; //"510px";

        var industry = document.getElementById(res).value.toUpperCase()
        var extra1 = document.getElementById('hiddencompcode').value;
        var adsepart = document.getElementById('hiddencompcode').value;
        var pcompcode = document.getElementById('hiddencompcode').value;

        BookingDataUpdate.Bindindustr(industry, extra1, adsepart, bindgridindustry_callback);

    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == (res)) {
            document.getElementById(res.split("_")[0] + "_" + res.split("_")[1] + "_txtinduterycode").value = "";

        }
    }
    else if (key == 36 || key == 37 || key == 39) {
        document.getElementById("divindustry2").style.display = "none";
    }
    else if (key == 27) {
        document.getElementById("divindustry2").style.display = "none";
        document.getElementById(res).focus();
        return false;
    }
    else if (key == 13) {
        if (document.getElementById("divindustry2").style.display == "block") {
            filllgridindustryname(event);
            document.getElementById("divindustry2").style.display == "none";
            return false;
        }
        if (document.activeElement.id == "istindustry2") {
            filllgridindustryname(event);
            return false;
        }

        if (document.activeElement.id == res) {
            document.getElementById(res.split("_")[0] + "_" + res.split("_")[1] + "_txtproductname").focus();
            return false;
        }
    }
        //    else if (key == 9) {
        //        document.getElementById("divindustry2").style.display = "none";
        //        document.getElementById("prductname_" + id[1]).focus();
        //        return false;
        //    }
    else if (key == 38) {
        if (document.getElementById("divindustry2").style.display == "block") {
            if (document.getElementById("istindustry2").value == '0') {
                document.getElementById(res).focus();

            }
        }
    }
    else if (key == 40) {
        if (document.getElementById("divindustry2").style.display == "block") {
            document.getElementById("istindustry2").focus();
        }
    }
    //    else {
    //        document.getElementById("divindustry2").style.display = "block";
    //        aTag = eval(document.getElementById("industryname_" + id[1]))
    //        var btag;
    //        var leftpos = -170;
    //        var toppos = 0;
    //        do {
    //            aTag = eval(aTag.offsetParent);
    //            leftpos += aTag.offsetLeft;
    //            toppos += aTag.offsetTop;
    //            if (toppos > 600) {
    //                toppos = 400;
    //            }
    //            btag = eval(aTag)
    //        }
    //        while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
    //        var tot = document.getElementById('divindustry2').scrollLeft;
    //        var scrolltop = document.getElementById('divindustry2').scrollTop;
    //        document.getElementById('divindustry2').style.left = document.getElementById("industryname_" + id[1]).offsetLeft + leftpos - tot + "px";
    //        document.getElementById('divindustry2').style.top = document.getElementById("industryname_" + id[1]).offsetTop + toppos - scrolltop + "px"; //"510px";
    //        var extra1 = document.getElementById('hiddencompcode').value;
    //        var industry = document.getElementById('industryname_' + id[1]).value.toUpperCase()
    //        document.getElementById('change_' + id[1]).value = "Y";
    //        //        if (document.getElementById('hdsepartad').value == "N") {
    //        //            adsepart = "N"
    //        //        }
    //        //        else {
    //        adsepart = "Y"
    //        //}
    //        Booking_Data_Update.Bindindustr(industry, extra1, adsepart, bindgridindustry_callback);
    //    }
    //    nubberwithupdandown(event);
}
function bindgridindustry_callback(response) {
    var ds = response.value;
    //var id = activeidgp.split("_");
    var lstitem = document.getElementById("istindustry2");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select Industry Name ---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].INDUSTRY_NAME, ds.Tables[0].Rows[i].INDUSTRY_CODE);
        }


    }

    // document.getElementById("industrycode_" + id[1]).value = "";
    document.getElementById("istindustry2").selectedIndex = 1;
    // document.getElementById("istindustry2").focus();
    return false;
}

function filllgridindustryname(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    var id = tid.split("_")[0] + "_" + tid.split("_")[1] + "_txtinduterycode";

    if (key == 27) {
        if (document.activeElement.id == "istindustry2") {
            document.getElementById("divindustry2").style.display = "none";
            document.getElementById(tid).focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {
        if (document.getElementById("istindustry2").value == "0") {
            alert("Please Select Industry  Name");
            return false;
        }
        else {
            document.getElementById("divindustry2").style.display = "none";
            var lstvalue = document.getElementById('istindustry2').value;
            for (var k = 0; k < document.getElementById("istindustry2").length; k++) {
                if (document.getElementById('istindustry2').options[k].value == lstvalue) {
                    document.getElementById(id).value = document.getElementById('istindustry2').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById(tid).value = document.getElementById('istindustry2').options[k].textContent;
                    else
                        document.getElementById(tid).value = document.getElementById('istindustry2').options[k].innerText;

                    break;
                }
            }
        }

        document.getElementById(tid).focus();
        return false;
    }
}



/////**************************************************** bind product grid***************************************************************************************

var tid = "";
function getproduct(event, res) {

    var key = event.keyCode ? event.keyCode : event.which;
    var id = res.split("_")[1];
    var id2 = res.split("_")[0] + "_" + res.split("_")[1] + "_txtinduterycode";
    if (key == 113 && document.activeElement.id == (res)) {
        tid = res;


        document.getElementById("divproduct2").style.display = "block";
        aTag = eval(document.getElementById(res))
        var btag;
        var leftpos = -270;
        var toppos = 0;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            if (toppos > 500) {
                toppos = 400;
            }

            btag = eval(aTag)
        }
        while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divgridview').scrollLeft;
        var scrolltop = document.getElementById('divgridview').scrollTop;
        document.getElementById('divproduct2').style.left = document.getElementById(res).offsetLeft + leftpos - tot + "px";
        document.getElementById('divproduct2').style.top = document.getElementById(res).offsetTop + toppos - scrolltop + "px"; //"510px";


        var extra1 = document.getElementById('hiddencompcode').value;
        var productname = document.getElementById(res).value.toUpperCase()
        var industry = document.getElementById(id2).value;
        var adsepart = document.getElementById('hiddencompcode').value;
        if (industry == "") {
            alert("Please Select Industry  Name");
            document.getElementById(res).focus();
            return false;

        }
        //document.getElementById('change_' + id[1]).value = "Y";
        ////        if (document.getElementById('hdsepartad').value == "N") {
        ////            adsepart = "N"
        ////        }
        ////        else {
        //adsepart = "Y"
        // }
        BookingDataUpdate.Bindproduct(productname, industry, extra1, adsepart, bindgridproduct_callback);


    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == (res)) {
            document.getElementById("txtproductcode_" + id[1]).value = "";
            document.getElementById("txtbrandname_" + id[1]).value = "";
            document.getElementById("txtbrandcode_" + id[1]).value = "";

        }
    }
    else if (key == 36 || key == 37 || key == 39) {
        document.getElementById("divproduct2").style.display = "none";
    }
    else if (key == 27) {
        document.getElementById("divproduct2").style.display = "none";
        document.getElementById((res)).focus();
        return false;
    }
    else if (key == 13) {
        if (document.getElementById("divproduct2").style.display == "block") {
            filllgridproductname(event);
            document.getElementById("divproduct2").style.display == "none";
            return false;
        }
        if (document.activeElement.id == "istproduct2") {
            filllgridproductname(event);
            return false;
        }

        if (document.activeElement.id == res) {
            document.getElementById(res.split("_")[0] + "_" + res.split("_")[1] + "_txtbrandname").focus();
            return false;
        }
    }
        //    else if (key == 9) {
        //        document.getElementById("divproduct2").style.display = "none";
        //        document.getElementById("barndname_" + id[1]).focus();
        //        return false;
        //    }
    else if (key == 38) {
        if (document.getElementById("divproduct2").style.display == "block") {
            if (document.getElementById("istproduct2").value == '0') {
                document.getElementById(res).focus();

            }
        }
    }
    else if (key == 40) {
        if (document.getElementById("divproduct2").style.display == "block") {
            document.getElementById("istproduct2").focus();
        }
    }
    //    else {
    //        document.getElementById("divproduct2").style.display = "block";
    //        aTag = eval(document.getElementById("prductname_" + id[1]))
    //        var btag;
    //        var leftpos = -170;
    //        var toppos = 0;
    //        do {
    //            aTag = eval(aTag.offsetParent);
    //            leftpos += aTag.offsetLeft;
    //            toppos += aTag.offsetTop;
    //            if (toppos > 600) {
    //                toppos = 400;
    //            }
    //            btag = eval(aTag)
    //        }
    //        while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
    //        var tot = document.getElementById('divproduct2').scrollLeft;
    //        var scrolltop = document.getElementById('divproduct2').scrollTop;
    //        document.getElementById('divproduct2').style.left = document.getElementById("prductname_" + id[1]).offsetLeft + leftpos - tot + "px";
    //        document.getElementById('divproduct2').style.top = document.getElementById("prductname_" + id[1]).offsetTop + toppos - scrolltop + "px"; //"510px";
    //        var extra1 = document.getElementById('hiddencompcode').value;
    //        var productname = document.getElementById('prductname_' + id[1]).value.toUpperCase()
    //        var industry = document.getElementById('industrycode_' + id[1]).value.toUpperCase()
    //        if (industry == "") {
    //            alert("Please Select Industry  Name");
    //            document.getElementById("industryname_" + id[1]).focus();
    //            return false;

    //        }
    //        document.getElementById('change_' + id[1]).value = "Y";
    //        //        if (document.getElementById('hdsepartad').value == "N") {
    //        //            adsepart = "N"
    //        //        }
    //        //        else {
    //        adsepart = "Y"
    //        //}
    //        Booking_Data_Update.Bindproduct(productname, industry, extra1, adsepart, bindgridproduct_callback);
    //    }
    //    nubberwithupdandown(event);
}
function bindgridproduct_callback(response) {
    var ds = response.value;
    //var id = activeidgp.split("_");
    var lstitem = document.getElementById("istproduct2");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select Product Name ---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].PRODUCT_NAME, ds.Tables[0].Rows[i].PRODUCT_CODE);
        }


    }

    // document.getElementById("txtproductcode_" + id[1]).value = "";
    document.getElementById("istproduct2").selectedIndex = 1;
    //document.getElementById("istproduct2").focus();
    return false;
}

function filllgridproductname(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    // var id = activeidgp.split("_");
    var id = tid.split("_")[0] + "_" + tid.split("_")[1] + "_txtproductcode";
    if (key == 27) {
        if (document.activeElement.id == "istproduct2") {
            document.getElementById("divproduct2").style.display = "none";
            document.getElementById(tid).focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {
        if (document.getElementById("istproduct2").value == "0") {
            alert("Please Select Product  Name");
            return false;
        }
        else {
            document.getElementById("divproduct2").style.display = "none";
            var lstvalue = document.getElementById('istproduct2').value;
            for (var k = 0; k < document.getElementById("istproduct2").length; k++) {
                if (document.getElementById('istproduct2').options[k].value == lstvalue) {
                    document.getElementById(id).value = document.getElementById('istproduct2').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById(tid).value = document.getElementById('istproduct2').options[k].textContent;
                    else
                        document.getElementById(tid).value = document.getElementById('istproduct2').options[k].innerText;

                    break;
                }
            }
        }

        document.getElementById(tid).focus();
        return false;
    }
}

/////********************************************************************** bind brand grid***********************************************************************
var tid = "";
function getbrand(event, res) {

    var key = event.keyCode ? event.keyCode : event.which;
    var id = res.split("_")[1];

    if (key == 113 && document.activeElement.id == (res)) {
        tid = res;


        document.getElementById("divbrand2").style.display = "block";
        aTag = eval(document.getElementById(res))
        var btag;
        var leftpos = -650;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            if (toppos > 500) {
                toppos = 400;
            }

            btag = eval(aTag)
        }
        while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divgridview').scrollLeft;
        var scrolltop = document.getElementById('divgridview').scrollTop;
        document.getElementById('divbrand2').style.left = document.getElementById(res).offsetLeft + leftpos - tot + "px";
        document.getElementById('divbrand2').style.top = document.getElementById(res).offsetTop + toppos - scrolltop + "px"; //"510px";

        var extra1 = document.getElementById('hiddencompcode').value;
        var brand = document.getElementById(res).value.toUpperCase()
        var product = document.getElementById('Hiddenproductgrid').value;
        var adsepart = document.getElementById('hdsepartad').value;
        // var product = document.getElementById('txtproductcode_' + id[1]).value.toUpperCase()
        //if (product == "") {
        //    alert("Please Select Product  Name");
        //    document.getElementById("txtproductname_" + id[1]).focus();
        //    return false;

        //}

        //document.getElementById('change_' + id[1]).value = "Y";
        ////        if (document.getElementById('hdsepartad').value == "N") {
        ////            adsepart = "N"
        ////        }
        ////        else {
        //adsepart = "Y"
        ////}
        BookingDataUpdate.Bindbrand(brand, product, extra1, adsepart, bindgridbrand_callback);



    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == (res)) {

            document.getElementById(res.split("_")[0] + "_" + res.split("_")[1] + "_txtbrandcode").value = "";

        }
    }
    else if (key == 36 || key == 37 || key == 39) {
        document.getElementById("divbrand2").style.display = "none";
    }
    else if (key == 27) {
        document.getElementById("divbrand2").style.display = "none";
        document.getElementById(res).focus();
        return false;
    }

        //////////////////////////////////////////////////////////////////////////////////////For F2 Gridview Entrtab///////////////////////////////////////
    else if (key == 13) {
        if (document.getElementById("divbrand2").style.display == "block") {
            filllgridbrandname(event);
            document.getElementById("divbrand2").style.display == "none";
            return false;
        }
        if (document.activeElement.id == "istbrand2") {
            filllgridbrandname(event);
            return false;
        }

        if (document.activeElement.id == res) {
            document.getElementById(res.split("_")[0] + "_" + res.split("_")[1] + "_txteventname").focus();
            return false;
        }
        //if (document.activeElement.id == res) {
        //    document.getElementById(res.split("_")[0] + "_" + res.split("_")[1] + "_txteventname").blur();
        //    return false;
        //}
    }
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //    else if (key == 9) {
        //        document.getElementById("divbrand2").style.display = "none";
        //        document.getElementById("eventname_" + id[1]).focus();
        //        return false;
        //    }
    else if (key == 38) {
        if (document.getElementById("divbrand2").style.display == "block") {
            if (document.getElementById("istbrand2").value == '0') {
                document.getElementById(res).focus();

            }
        }
    }
    else if (key == 40) {
        if (document.getElementById("divbrand2").style.display == "block") {
            document.getElementById("istbrand2").focus();
        }
    }
    //    else {
    //        document.getElementById("divbrand2").style.display = "block";
    //        aTag = eval(document.getElementById("barndname_" + id[1]))
    //        var btag;
    //        var leftpos = -170;
    //        var toppos = 0;
    //        do {
    //            aTag = eval(aTag.offsetParent);
    //            leftpos += aTag.offsetLeft;
    //            toppos += aTag.offsetTop;
    //            if (toppos > 600) {
    //                toppos = 400;
    //            }
    //            btag = eval(aTag)
    //        }
    //        while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
    //        var tot = document.getElementById('divbrand2').scrollLeft;
    //        var scrolltop = document.getElementById('divbrand2').scrollTop;
    //        document.getElementById('divbrand2').style.left = document.getElementById("barndname_" + id[1]).offsetLeft + leftpos - tot + "px";
    //        document.getElementById('divbrand2').style.top = document.getElementById("barndname_" + id[1]).offsetTop + toppos - scrolltop + "px"; //"510px";
    //        var extra1 = document.getElementById('hiddencompcode').value;
    //        var brand = document.getElementById('barndname_' + id[1]).value.toUpperCase()
    //        var product = document.getElementById('prdouctcode_' + id[1]).value.toUpperCase()
    //        if (product == "") {
    //            alert("Please Select Product  Name");
    //            document.getElementById("prductname_" + id[1]).focus();
    //            return false;

    //        }

    //        document.getElementById('change_' + id[1]).value = "Y";
    //        //        if (document.getElementById('hdsepartad').value == "N") {
    //        //            adsepart = "N"
    //        //        }
    //        //        else {
    //        adsepart = "Y"
    //        // }
    //        Booking_Data_Update.Bindbrand(brand, product, extra1, adsepart, bindgridbrand_callback);
    //    }
    //    nubberwithupdandown(event);
}
function bindgridbrand_callback(response) {
    var ds = response.value;
    // var id = activeidgp.split("_");
    var lstitem = document.getElementById("istbrand2");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select Brand Name ---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].BRAND_NAME, ds.Tables[0].Rows[i].BRAND_CODE);
        }


    }

    // document.getElementById("barndcode_" + id[1]).value = "";
    document.getElementById("istbrand2").selectedIndex = 1;
    // document.getElementById("istbrand2").focus();
    return false;
}

function filllgridbrandname(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    var id = tid.split("_")[0] + "_" + tid.split("_")[1] + "_txtbrandcode";

    if (key == 27) {
        if (document.activeElement.id == "istbrand2") {
            document.getElementById("divbrand2").style.display = "none";
            document.getElementById(tid).focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {
        if (document.getElementById("istbrand2").value == "0") {
            alert("Please Select Product  Name");
            return false;
        }
        else {
            document.getElementById("divbrand2").style.display = "none";
            var lstvalue = document.getElementById('istbrand2').value;
            for (var k = 0; k < document.getElementById("istbrand2").length; k++) {
                if (document.getElementById('istbrand2').options[k].value == lstvalue) {
                    document.getElementById(id).value = document.getElementById('istbrand2').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById(tid).value = document.getElementById('istbrand2').options[k].textContent;
                    else
                        document.getElementById(tid).value = document.getElementById('istbrand2').options[k].innerText;

                    break;
                }
            }
        }

        document.getElementById(tid).focus();
        return false;
    }
}


/////************************* bind event grid****************************////////////////////////////////////////////////////////////////////
var tid = "";
function getevent(event, res) {


    var key = event.keyCode ? event.keyCode : event.which;
    var id = res.split("_")[1];

    if (key == 113 && document.activeElement.id == (res)) {
        tid = res;


        document.getElementById("divevent").style.display = "block";
        aTag = eval(document.getElementById(res))
        var btag;
        var leftpos = -40;
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
        var tot = document.getElementById('divgridview').scrollLeft;
        var scrolltop = document.getElementById('divgridview').scrollTop;
        document.getElementById('divevent').style.left = document.getElementById(res).offsetLeft + leftpos - tot + "px";
        document.getElementById('divevent').style.top = document.getElementById(res).offsetTop + toppos - scrolltop + "px"; //"510px";
       
        var extra1 = document.getElementById('hiddencompcode').value;
        //document.getElementById('change_' + id[1]).value = "Y";
        var eventname = document.getElementById(res).value.toUpperCase()
        //        if (document.getElementById('hdsepartad').value == "N") {
        //            adsepart = "N"
        //        }
        //        else {
        adsepart = "Y"
        // }
        BookingDataUpdate.Bindevent(eventname, extra1, adsepart, bindevent_callback);

    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == (res)) {
            document.getElementById(res.split("_")[0] + "_" + res.split("_")[1] + "_txtbrandcode").value = "";

        }
    }
    else if (key == 36 || key == 37 || key == 39) {
        document.getElementById("divevent").style.display = "none";
    }
    else if (key == 27) {
        document.getElementById("divevent").style.display = "none";
        document.getElementById(res).focus();
        return false;
    }
    else if (key == 13) {
        if (document.getElementById("divevent").style.display == "block") {
            fillleventname(event);
            document.getElementById("divevent").style.display == "none";
            return false;
        }
        if (document.activeElement.id == "istevent") {
            fillleventname(event);
            return false;
        }

        if (document.activeElement.id == res) {
            document.getElementById(res.split("_")[0] + "_" + res.split("_")[1] + "_Txtagencyname").focus();
            return false;
        }
    }
    else if (key == 38) {
        if (document.getElementById("divevent").style.display == "block") {
            if (document.getElementById("istevent").value == '0') {
                document.getElementById(res).focus();

            }
        }
    }
    else if (key == 40) {
        if (document.getElementById("divevent").style.display == "block") {
            document.getElementById("istevent").focus();
        }
    }
    //    else {
    //        document.getElementById("divevent").style.display = "block";
    //        aTag = eval(document.getElementById("eventname_" + id[1]))
    //        var btag;
    //        var leftpos = -270;
    //        var toppos = 0;
    //        do {
    //            aTag = eval(aTag.offsetParent);
    //            leftpos += aTag.offsetLeft;
    //            toppos += aTag.offsetTop;
    //            if (toppos > 600) {
    //                toppos = 400;
    //            }

    //            btag = eval(aTag)
    //        }
    //        while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
    //        var tot = document.getElementById('divevent').scrollLeft;
    //        var scrolltop = document.getElementById('divevent').scrollTop;
    //        document.getElementById('divevent').style.left = document.getElementById("eventname_" + id[1]).offsetLeft + leftpos - tot + "px";
    //        document.getElementById('divevent').style.top = document.getElementById("eventname_" + id[1]).offsetTop + toppos - scrolltop + "px"; //"510px";
    //        var extra1 = document.getElementById('hiddencompcode').value;
    //        document.getElementById('change_' + id[1]).value = "Y";
    //        var eventname = document.getElementById('eventname_' + id[1]).value.toUpperCase()
    //        //        if (document.getElementById('hdsepartad').value == "N") {
    //        //            adsepart = "N"
    //        //        }
    //        //        else {
    //        adsepart = "Y"
    //        // }
    //        Booking_Data_Update.Bindevent(eventname, extra1, adsepart, bindevent_callback);
    //    }
    //    nubberwithupdandown(event);
    // return false;
}
function bindevent_callback(response) {
    var ds = response.value;
    //var id = activeidgp.split("_");
    var lstitem = document.getElementById("istevent");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select Event Name ---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].EVENT_NAME, ds.Tables[0].Rows[i].EVENT_CODE);
        }


    }

    //document.getElementById("eventcode_" + id[1]).value = "";
    document.getElementById("istevent").selectedIndex = 1;
    //document.getElementById("istevent").focus();
    return false;
}

function fillleventname(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    var id = tid.split("_")[0] + "_" + tid.split("_")[1] + "_txtbrandcode";

    if (key == 27) {
        if (document.activeElement.id == "istevent") {
            document.getElementById("divevent").style.display = "none";
            document.getElementById(tid).focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {
        if (document.getElementById("istevent").value == "0") {
            alert("Please Select Event  Name");
            return false;
        }
        else {
            document.getElementById("divevent").style.display = "none";
            var lstvalue = document.getElementById('istevent').value;
            for (var k = 0; k < document.getElementById("istevent").length; k++) {
                if (document.getElementById('istevent').options[k].value == lstvalue) {
                    document.getElementById(id).value = document.getElementById('istevent').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById(tid).value = document.getElementById('istevent').options[k].textContent;
                    else
                        document.getElementById(tid).value = document.getElementById('istevent').options[k].innerText;

                    break;
                }
            }
        }

        document.getElementById(tid).focus();
        return false;
    }
}


//function Grientrtab(event, res, cont) {
//    var tt = 0;
//    var key = event.keyCode ? event.keyCode : event.which;
//    tt = (res.split("_")[1]).split("l")[1];
//    tt = parseInt(tt) + 1;
//    tid = res;
//    if (tt.toString().length > 1) {
//        var id = "ctl" + tt;
//    }
//    else {
//        var id = "ctl0" + tt;
//    }

//    if (key == 13) {

//        if (document.activeElement.id == res.split("_")[0] + "_" + res.split("_")[1] + "_txtclientname") {

//            document.getElementById(res.split("_")[0] + "_" + res.split("_")[1] + "_txtexce").focus();
//            return false;
//        }
//        if (document.activeElement.id == res.split("_")[0] + "_" + res.split("_")[1] + "_txtexce") {
//            document.getElementById(res.split("_")[0] + "_" + res.split("_")[1] + "_txtretname").focus();
//            return false;
//        }
//        if (document.activeElement.id == res.split("_")[0] + "_" + res.split("_")[1] + "_txtretname") {

//            document.getElementById(res.split("_")[0] + "_" + res.split("_")[1] + "_txtinduteryname").focus();
//            return false;
//        }

//        if (document.activeElement.id == res.split("_")[0] + "_" + res.split("_")[1] + "_txtinduteryname") {

//            document.getElementById(res.split("_")[0] + "_" + res.split("_")[1] + "_txtproductname").focus();
//            return false;
//        }
//        if (document.activeElement.id == res.split("_")[0] + "_" + res.split("_")[1] + "_txtproductname") {
//            document.getElementById(res.split("_")[0] + "_" + res.split("_")[1] + "_txtbrandname").focus();
//            return false;
//        }

//        if (document.activeElement.id == res.split("_")[0] + "_" + res.split("_")[1] + "_txtbrandname") {
//            if ((parseInt(tt) - 2) != parseInt(cont)) {
//                document.getElementById(res.split("_")[0] + "_" + id + "_txteventname").focus();
//            }
//            else {
//                document.getElementById("btnsubmit").focus();
//            }
//            return false;
//        }


//    }
//    else if (document.activeElement.type == "button" || document.activeElement.type == "submit" || document.activeElement.type == "image") {
//        return key;
//    }
//}


