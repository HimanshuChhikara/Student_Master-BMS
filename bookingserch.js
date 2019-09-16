//*****************************Function For Agency name select F2***********************
function load() {
    SubmitClick1();
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
        bookingserch.Bindagenyname(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindagency_callback);

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
        bookingserch.Bindagenyname(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindagency_callback);

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
        fillpaymode();
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
        var res1 = bookingserch.Bindagpaymode(agencode, pcompcode, pbookdate, padtype);
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
        bookingserch.Bindclientname(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindclient_callback);

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
        bookingserch.Bindclientname(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindclient_callback);

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
//*****************************Function For Industry select F2***********************
function Bindindustryname(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtindustry") {


        document.getElementById("divindu").style.display = "block";
        aTag = eval(document.getElementById("txtindustry"))
        var btag;
        var leftpos = 0;
        var toppos = 0;
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
        var pcompcode = document.getElementById('hdncompcode').value.toUpperCase()
        var pindustry = document.getElementById('txtindustry').value.toUpperCase()
        var psecrchtype = "";
        var pextra = "";


        bookingserch.Bindindustr(pcompcode, pindustry, psecrchtype, pextra, bindindustry_callback);


    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtindustry") {
            document.getElementById('hiddenindustry').value = "";
        }
    }
    else if (key == 27 || key == 17 || key == 16 || key == 18) {
        document.getElementById("divindu").style.display = "none";
        document.getElementById('txtindustry').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "istindustry") {
            //  fillcity();
            return false;
        }
        document.getElementById("divindu").style.display = "none";
    }
    //    else if (key == 9) {
    //    document.getElementById("divindu").style.display = "none";
    //    document.getElementById('txtproduct').focus();
    //        return false;
    //    }
    else if (key == 9) {

        document.getElementById("divindu").style.display = "none";

    }
    else if (key == 38) {
        if (document.getElementById("divindu").style.display == "block") {
            if (document.getElementById('istindustry').value == '0') {
                document.getElementById('txtindustry').focus();
            }
        }
    }

    else if (key == 40) {
        if (document.getElementById("divindu").style.display == "block") {
            document.getElementById("istindustry").focus();
        }
    }
    else {
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
        var pcompcode = document.getElementById('hdncompcode').value.toUpperCase()
        var pindustry = document.getElementById('txtindustry').value.toUpperCase()
        var psecrchtype = "";
        var pextra = "";


        bookingserch.Bindindustr(pcompcode, pindustry, psecrchtype, pextra, bindindustry_callback);

    }
}
function bindindustry_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("istindustry");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select Industry Name ---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].INDUSTRY_NAME, ds.Tables[0].Rows[i].INDUSTRY_CODE);
        }


    }

    document.getElementById('hiddenindustry').value = "";
    document.getElementById("istindustry").value = "0";
    document.getElementById("txtindustry").focus();
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



//*****************************Function For Product select F2***********************
function Bindproductname(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtproduct") {


        document.getElementById("divproduct").style.display = "block";
        aTag = eval(document.getElementById("txtproduct"))
        var btag;
        var leftpos = 0;
        var toppos = 0;
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

        var pcompcode = document.getElementById('hdncompcode').value;
        var pproduct = document.getElementById('txtproduct').value.toUpperCase()
        var psecrchtype = "";
        var pextra = "";
        bookingserch.Bindproductf2(pcompcode, pproduct, psecrchtype, pextra, bindproduct_callback);


    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtproduct") {
            document.getElementById('hiddenproduct').value = "";
        }
    }
    else if (key == 27 || key == 17 || key == 16 || key == 18) {
        document.getElementById("divproduct").style.display = "none";
        document.getElementById('txtproduct').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "istprodouct") {
            //   fillcity();
            return false;
        }
        document.getElementById("divproduct").style.display = "none";
    }
    //    else if (key == 9) {
    //    document.getElementById("divproduct").style.display = "none";
    //    document.getElementById('txtbrand').focus();
    //        return false;
    //    }
    else if (key == 9) {

        document.getElementById("divproduct").style.display = "none";

    }
    else if (key == 38) {
        if (document.getElementById("divproduct").style.display == "block") {
            if (document.getElementById('istprodouct').value == '0') {
                document.getElementById('txtproduct').focus();
            }
        }
    }

    else if (key == 40) {
        if (document.getElementById("divproduct").style.display == "block") {
            document.getElementById("istprodouct").focus();
        }
    }
    else {
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
        var pcompcode = document.getElementById('hdncompcode').value;
        var pproduct = document.getElementById('txtproduct').value.toUpperCase()
        var psecrchtype = "G";
        var pextra = "";
        bookingserch.Bindproductf2(pcompcode, pproduct, psecrchtype, pextra, bindproduct_callback);

    }
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
    document.getElementById("istprodouct").value = "0";
    document.getElementById("txtproduct").focus();
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

//*****************************Function For Brand select F2***********************
function Bindbrandname(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtbrand") {


        document.getElementById("divbrand").style.display = "block";
        aTag = eval(document.getElementById("txtbrand"))
        var btag;
        var leftpos = 0;
        var toppos = 0;
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

        var PCOMP_CODE = document.getElementById('hdncompcode').value;
        var PDESC = document.getElementById('txtbrand').value.toUpperCase()
        var PSEACH = "";
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        bookingserch.Bindbrand(PCOMP_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindbrand_callback);


    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtbrand") {
            document.getElementById('hiddenbrand').value = "";
        }
    }
    else if (key == 27 || key == 17 || key == 16 || key == 18) {
        document.getElementById("divbrand").style.display = "none";
        document.getElementById('txtbrand').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "istbrand") {

            return false;
        }
    }

    else if (key == 9) {

        document.getElementById("divbrand").style.display = "none";

    }
    else if (key == 38) {
        if (document.getElementById("divbrand").style.display == "block") {
            if (document.getElementById('istbrand').value == '0') {
                document.getElementById('txtbrand').focus();
            }
        }
    }

    else if (key == 40) {
        if (document.getElementById("divbrand").style.display == "block") {
            document.getElementById("istbrand").focus();
        }
    }
    else {

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
        var PCOMP_CODE = document.getElementById('hdncompcode').value;
        var PDESC = document.getElementById('txtbrand').value.toUpperCase()
        var PSEACH = "G";
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        bookingserch.Bindbrand(PCOMP_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindbrand_callback);


    }
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
    document.getElementById("txtbrand").focus();
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


function Bindeventname(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtevent") {


        document.getElementById("divevent").style.display = "block";
        aTag = eval(document.getElementById("txtevent"))
        var btag;
        var leftpos = 0;
        var toppos = 0;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divevent').scrollLeft;
        var scrolltop = document.getElementById('divevent').scrollTop;
        document.getElementById('divevent').style.left = document.getElementById("txtevent").offsetLeft + leftpos - tot + "px";
        document.getElementById('divevent').style.top = document.getElementById("txtevent").offsetTop + toppos - scrolltop + "px"; //"510px";
        var PCOMP_CODE = document.getElementById('hdncompcode').value;
        var PDESC = document.getElementById('txtevent').value.toUpperCase()
        var PSEACH = "G";
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        bookingserch.Bindevent(PCOMP_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindevent_callback);


    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtevent") {
            document.getElementById('hideenevent').value = "";
        }
    }
    else if (key == 27) {
        document.getElementById("divevent").style.display = "none";
        document.getElementById('txtevent').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "istevent") {
            //   fillcity();
            return false;
        }
        document.getElementById("divevent").style.display = "none";
    }
    //    else if (key == 9) {
    //    document.getElementById("divevent").style.display = "none";
    //    document.getElementById('txtkeyno').focus();
    //        return false;
    //    }
    else if (key == 9) {

        document.getElementById("divevent").style.display = "none";

    }
    else if (key == 38) {
        if (document.getElementById("divevent").style.display == "block") {
            if (document.getElementById('istevent').value == '0') {
                document.getElementById('txtevent').focus();
            }
        }
    }

    else if (key == 40) {
        if (document.getElementById("divevent").style.display == "block") {
            document.getElementById("istevent").focus();
        }
    }
    else {
        document.getElementById("divevent").style.display = "block";
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
        var tot = document.getElementById('divevent').scrollLeft;
        var scrolltop = document.getElementById('divevent').scrollTop;
        document.getElementById('divevent').style.left = document.getElementById("txtevent").offsetLeft + leftpos - tot + "px";
        document.getElementById('divevent').style.top = document.getElementById("txtevent").offsetTop + toppos - scrolltop + "px"; //"510px";

        var PCOMP_CODE = document.getElementById('hdncompcode').value;
        var PDESC = document.getElementById('txtevent').value.toUpperCase()
        var PSEACH = "G";
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        bookingserch.Bindevent(PCOMP_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindevent_callback);


    }
}
function bindevent_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("istevent");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select Event Name ---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].EVENT_NAME, ds.Tables[0].Rows[i].EVENT_CODE);
        }


    }

    document.getElementById('hideenevent').value = "";
    document.getElementById("istevent").value = "0";
    document.getElementById("txtevent").focus();
    return false;
}

function fillleventname(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtevent" || document.activeElement.id == "istevent") {
            document.getElementById("divevent").style.display = "none";
            document.getElementById('txtevent').focus();
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
                    document.getElementById('hideenevent').value = document.getElementById('istevent').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtevent').value = document.getElementById('istevent').options[k].textContent;
                    else
                        document.getElementById('txtevent').value = document.getElementById('istevent').options[k].innerText;

                    break;
                }
            }
        }

        document.getElementById('txtevent').focus();
        return false;
    }
}

//=========================================excutive f2
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
        bookingserch.excutive(PCOMP_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindexcutive_callback);


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
        bookingserch.excutive(PCOMP_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindexcutive_callback);


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
        bookingserch.retiner(PCOMP_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PCENT_CODE, bindretiner_callback);


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
        bookingserch.retiner(PCOMP_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PCENT_CODE, bindretiner_callback);


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

function focus_industry() {
    document.getElementById('txtindustry').style.backgroundColor = "#99FFFF";
    if (document.getElementById('txtindustry').value == "----- Select Industry -----") {
        document.getElementById('txtindustry').value = "";
    }
    document.getElementById('txtindustry').style.textAlign = "left";
    document.getElementById('txtindustry').style.textTransform = "uppercase";

    document.getElementById('txtindustry').style.color = "black";
    return false;
}
function blur_industry() {
    document.getElementById('txtindustry').style.backgroundColor = "white";
    if (document.getElementById('txtindustry').value == "") {
        document.getElementById('txtindustry').value = "";
        document.getElementById('txtindustry').value = "----- Select Industry -----";
        document.getElementById('txtindustry').style.textAlign = "left";
        document.getElementById('txtindustry').style.textTransform = "capitalize";

        document.getElementById('txtindustry').style.color = "gray";
    }
    else {
        document.getElementById('txtindustry').style.textAlign = "left";
        document.getElementById('txtindustry').style.color = "black";
    }

    return false;
}
function focus_product() {
    document.getElementById('txtproduct').style.backgroundColor = "#99FFFF";
    if (document.getElementById('txtproduct').value == "----- Select Product -----") {
        document.getElementById('txtproduct').value = "";
    }
    document.getElementById('txtproduct').style.textAlign = "left";
    document.getElementById('txtproduct').style.textTransform = "uppercase";

    document.getElementById('txtproduct').style.color = "black";
    return false;
}
function blur_product() {
    document.getElementById('txtproduct').style.backgroundColor = "white";
    if (document.getElementById('txtproduct').value == "") {
        document.getElementById('txtproduct').value = "";
        document.getElementById('txtproduct').value = "----- Select Product -----";
        document.getElementById('txtproduct').style.textAlign = "left";
        document.getElementById('txtproduct').style.textTransform = "capitalize";

        document.getElementById('txtproduct').style.color = "gray";
    }
    else {
        document.getElementById('txtproduct').style.textAlign = "left";
        document.getElementById('txtproduct').style.color = "black";
    }

    return false;
}
function focus_brand() {
    document.getElementById('txtbrand').style.backgroundColor = "#99FFFF";
    if (document.getElementById('txtbrand').value == "----- Select Brand -----") {
        document.getElementById('txtbrand').value = "";
    }
    document.getElementById('txtbrand').style.textAlign = "left";
    document.getElementById('txtbrand').style.textTransform = "uppercase";

    document.getElementById('txtbrand').style.color = "black";
    return false;
}
function blur_brand() {
    document.getElementById('txtbrand').style.backgroundColor = "white";
    if (document.getElementById('txtbrand').value == "") {
        document.getElementById('txtbrand').value = "";
        document.getElementById('txtbrand').value = "----- Select Brand -----";
        document.getElementById('txtbrand').style.textAlign = "left";
        document.getElementById('txtbrand').style.textTransform = "capitalize";

        document.getElementById('txtbrand').style.color = "gray";
    }
    else {
        document.getElementById('txtbrand').style.textAlign = "left";
        document.getElementById('txtbrand').style.color = "black";
    }

    return false;
}
function focus_event() {
    document.getElementById('txtevent').style.backgroundColor = "#99FFFF";
    if (document.getElementById('txtevent').value == "----- Select Event -----") {
        document.getElementById('txtevent').value = "";
    }
    document.getElementById('txtevent').style.textAlign = "left";
    document.getElementById('txtevent').style.textTransform = "uppercase";

    document.getElementById('txtevent').style.color = "black";
    return false;
}
function blur_event() {
    document.getElementById('txtevent').style.backgroundColor = "white";
    if (document.getElementById('txtevent').value == "") {
        document.getElementById('txtevent').value = "";
        document.getElementById('txtevent').value = "----- Select Event -----";
        document.getElementById('txtevent').style.textAlign = "left";
        document.getElementById('txtevent').style.textTransform = "capitalize";

        document.getElementById('txtevent').style.color = "gray";
    }
    else {
        document.getElementById('txtevent').style.textAlign = "left";
        document.getElementById('txtevent').style.color = "black";
    }

    return false;
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
    if (document.getElementById('txtbokng').value == "" && document.getElementById('txtbokngdate').value == "" && document.getElementById('txtrno').value == "" && document.getElementById('txtrdate').value == "" && document.getElementById('txtagncy').value == "" && document.getElementById('txtclint').value == "" && document.getElementById('txtdokitno').value == "" && document.getElementById('txtexcutive').value == "") {
        alert("Please Select At Least One Search Criteria");
         return false;

    }
 var PCOMP_CODE = document.getElementById('hdncompcode').value;
	var PCENT_CODE = document.getElementById('hdncenter').value;
	var PBRANCH_CODE = document.getElementById('hiddenbranch').value;
	var PAD_TYPE_CODE = document.getElementById('drpadtype').value;
	var PBOOKING_TYPE = document.getElementById('drpbookingtype').value;
	var PBOOKING_NO = document.getElementById('txtbokng').value;	
	var PDEAL_NO = document.getElementById('txtdeal').value;
	var PRO_NO = document.getElementById('txtrno').value;
	var PDOKIT_NO = document.getElementById('txtdokitno').value;
	var PBOOKING_STATUS = "";
	var PRO_STATUS = "";
	var PAGENCY_CODE_SUBCODE = document.getElementById('hdngencode').value;
	var PCLIENT_CODE = document.getElementById('hdnclient').value;
	var PCLIENT_NAME = document.getElementById('txtclint').value;
	var PEXEC_CODE = document.getElementById('hdnexcutive').value;
	var PRET_CODE = document.getElementById('hdnret').value;
	var PPAYMODE_CODE = document.getElementById('drppaaymode').value;
	var PINDUSTRY_CODE = document.getElementById('hiddenindustry').value;
	var PPRODUCT_CODE = document.getElementById('hiddenproduct').value;
	var PBRAND_CODE = document.getElementById('hiddenbrand').value;
	var PEVENT_CODE = document.getElementById('hideenevent').value;
	var PCAPTION = document.getElementById('txtcpton').value;
	var PKEY_NO = document.getElementById('txtkeyn').value;
	var PRATE_TYPE_CODE = "";
    var dateformat = document.getElementById('hiddendateformat').value;
	var PBOOKING_DATE = document.getElementById('txtbokngdate').value;
	var PRO_DATE = document.getElementById('txtrdate').value;
	var PPUBLISH_START_FROM = document.getElementById('txtstartdate').value;
	var PPUBLISH_START_TO = document.getElementById('txtenddate').value;
	var PEXTRA = "";
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

	var res = bookingserch.FetchData(PCOMP_CODE, PCENT_CODE, PBRANCH_CODE, PAD_TYPE_CODE, PBOOKING_TYPE, PBOOKING_NO, PBOOKING_DATE, PDEAL_NO, PRO_NO, PRO_DATE, PDOKIT_NO, PBOOKING_STATUS, PRO_STATUS, PAGENCY_CODE_SUBCODE, PCLIENT_CODE, PCLIENT_NAME, PEXEC_CODE, PRET_CODE, PPAYMODE_CODE, PINDUSTRY_CODE, PPRODUCT_CODE, PBRAND_CODE, PEVENT_CODE, PCAPTION, PKEY_NO, PRATE_TYPE_CODE, PPUBLISH_START_FROM, PPUBLISH_START_TO,dateformat, PEXTRA, PEXTRA1, PEXTRA2, PEXTRA3, PEXTRA4, PEXTRA5);
	if (res.value == null) {
	    alert(res.error.description);
	
	    return false;
	}
	 var ds = res.value;
	 if (ds.Tables[0].Rows.length) {
	     var srno;

	     var slno = "";
	     var booking = "";
	     var agename = "";
	     var clintname = "";
	     var bookindate = "";
	     var rono = "";
	     var rodate = "";
	     var startdate = "";
	     var enddate = "";
	     var adtpe = "";
	     var bokingtype = "";
	     var snonum = "";
	     var chkboxid = "";
	     var gcreatedby = "";
	     var gcreateddatee = "";
	     var gupdateby = "";
	     var gupdatedate = "";
	     str = "<div id=\"griddiv\" runat=\"server\" style=\"OVERFLOW: auto; width:98%;\">";
	     str += "<table cellpadding=\"0\" cellspacing=\"0\" id=\"tblGrid\" border=1 style=\"border-collapse:collapse; width:99%;\">";
	     str += "<td align=\"right\" valign=\"top\" class=\"Gridtimming\">Sl No</td>";
	     str += "<td align=\"right\" valign=\"top\" class=\"Gridtimming\">Booking No</td>";
	     str += "<td align=\"right\" valign=\"top\" class=\"Gridtimming\">Booking Date</td>";
	     str += "<td align=\"left\" valign=\"top\"  class=\"Gridtimming\">Agency Name</td>";
	     str += "<td align=\"left\" valign=\"top\"  class=\"Gridtimming\">Client Name</td>";
	     str += "<td align=\"right\" valign=\"top\" class=\"Gridtimming\">Ro No</td>";
	     str += "<td align=\"right\" valign=\"top\" class=\"Gridtimming\">Ro Date</td>";
	     str += "<td align=\"right\" valign=\"top\" class=\"Gridtimming\">Ad Type</td>";
	     str += "<td align=\"right\" valign=\"top\" style='display:none' class=\"Gridtimming\">Booking Type</td>";	
	     str += "<td align=\"right\" valign=\"top\" class=\"Gridtimming\">Start Date</td>";
	     str += "<td align=\"right\" valign=\"top\" class=\"Gridtimming\">End Date</td>";
	     str += "<td align=\"right\" valign=\"top\" class=\"Gridtimming\">Created By</td>";
	     str += "<td align=\"right\" valign=\"top\" class=\"Gridtimming\">Created Date</td>";
	     str += "<td align=\"right\" valign=\"top\" class=\"Gridtimming\">Updated By</td>";
	     str += "<td align=\"right\" valign=\"top\" class=\"Gridtimming\">Updated Date</td>";
	     str += "<td align=\"right\" valign=\"top\" class=\"Gridtimming\">Del</td>";
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
	         rono = "rono_" + k;
	         rodate = "rodate_" + k;
	         startdate = "startdate_" + k;
	         enddate = "enddate_" + k;
	         adtpe = "adtpe_" + k;
	         bokingtype = "bokingtype_" + k;
	         chkboxid = "chkboxid_" + k;
	         gcreatedby = "gcreatedby_" + k;
	         gcreateddatee = "gcreateddatee_" + k;
	         gupdateby = "gupdateby_" + k;
	         gupdatedate = "gupdatedate_" + k;

	         make_td = document.createElement("td");
	         make_td.className = "GridHdtd3";
	         make_td.align = "center";
	         make_td.width = "2%";
	         str = "<input class=\"newgridtext\" style='width:98%' readonly = true;  type=\"text\" id=" + slno + "  value='" + snonum + "' />";
	         make_td.innerHTML = str;
	         Make_Row.appendChild(make_td);

	         make_td = document.createElement("td");
	         make_td.className = "GridHdtd3";
	         make_td.align = "center";
	         make_td.width = "8%";
	         str = "<input class=\"newgridtext\" style='width:100%; background-color:#FFFFCC; cursor:pointer; color:blue;' readonly = true; type=\"text\" onclick=\"return gotovch(this.id);\" id=" + booking + "   value='" + ds.Tables[0].Rows[k].BOOKING_NO + "' />";
	         make_td.innerHTML = str;
	         Make_Row.appendChild(make_td);

	         make_td = document.createElement("td");
	         make_td.className = "GridHdtd3";
	         make_td.align = "center";
	         make_td.width = "5%";
	         str = "<input class=\"newgridtext\" style='width:98%' readonly = true; type=\"text\" id=" + bookindate + " value='" + ds.Tables[0].Rows[k].BOOKING_DATE + "' />";
	         make_td.innerHTML = str;
	         Make_Row.appendChild(make_td);

	         make_td = document.createElement("td");
	         make_td.className = "GridHdtd3";
	         make_td.align = "center";
	         make_td.width = "15%";
	         str = "<input class=\"newgridtext\" style='width:98%' readonly = true; type=\"text\" id=" + agename + "   value='" + ds.Tables[0].Rows[k].AGENCY_NAME + "' />";
	         make_td.innerHTML = str;
	         Make_Row.appendChild(make_td);

	         make_td = document.createElement("td");
	         make_td.className = "GridHdtd3";
	         make_td.align = "center";
	         make_td.width = "12%";
	         str = "<input class=\"newgridtext\" style='width:98%' readonly = true; type=\"text\" id=" + clintname + "   value='" + ds.Tables[0].Rows[k].CLIENT_NAME + "' />";
	         make_td.innerHTML = str;
	         Make_Row.appendChild(make_td);

	         make_td = document.createElement("td");
	         make_td.className = "GridHdtd3";
	         make_td.align = "center";
	         make_td.width = "8%";
	         str = "<input class=\"newgridtext\" style='width:98%' readonly = true; type=\"text\" id=" + rono + " value='" + ds.Tables[0].Rows[k].RO_NO + "' />";
	         make_td.innerHTML = str;
	         Make_Row.appendChild(make_td);

	         make_td = document.createElement("td");
	         make_td.className = "GridHdtd3";
	         make_td.align = "center";
	         make_td.width = "5%";
	         str = "<input class=\"newgridtext\" style='width:98%' readonly = true; type=\"text\" id=" + rodate + " value='" + ds.Tables[0].Rows[k].RO_DATE + "' />";
	         make_td.innerHTML = str;
	         Make_Row.appendChild(make_td);

	         make_td = document.createElement("td");
	         make_td.className = "GridHdtd3";
	         make_td.align = "center";
	         make_td.width = "6%";
	         str = "<input class=\"newgridtext\" style='width:98%' readonly = true; type=\"text\" id=" + adtpe + " value='" + ds.Tables[0].Rows[k].AD_TYPE_DESC + "' />";
	         
	         make_td.innerHTML = str;
	         Make_Row.appendChild(make_td);

	         make_td = document.createElement("td");
	         make_td.className = "GridHdtd3";
	         make_td.align = "center";
	         make_td.width = "6%";
	         make_td.style.display = "none";
	         str = "<input class=\"newgridtext\" style='width:98%' readonly = true; type=\"text\" id=" + bokingtype + " value='" + ds.Tables[0].Rows[k].BOOKING_TYPE + "' />";
	         make_td.innerHTML = str;
	         Make_Row.appendChild(make_td);

	

	         make_td = document.createElement("td");
	         make_td.className = "GridHdtd3";
	         make_td.align = "center";
	         make_td.width = "5%";	    
	             str = "<input class=\"newgridtext\" style='width:98%' readonly = true; type=\"text\" id=" + startdate + " value='" + ds.Tables[0].Rows[k].PUBLISH_START_FROM + "' />";
	         
	         make_td.innerHTML = str;
	         Make_Row.appendChild(make_td);

	         make_td = document.createElement("td");
	         make_td.className = "GridHdtd3";
	         make_td.align = "center";
	         make_td.width = "5%";	     
	         str = "<input class=\"newgridtext\" style='width:98%' disabled = true; type=\"text\" id=" + enddate + " value='" + ds.Tables[0].Rows[k].PUBLISH_START_TO + "' />";
	         make_td.innerHTML = str;
	         Make_Row.appendChild(make_td);

             //------------------------------------------------------------new colunm
	         make_td = document.createElement("td");
	         make_td.className = "GridHdtd3";
	         make_td.align = "center";
	         make_td.width = "6%";
	         str = "<input class=\"newgridtext\" style='width:98%' disabled = true; type=\"text\" id=" + gcreatedby + " value='" + ds.Tables[0].Rows[k].CREATED_NAME + "' />";

	         make_td.innerHTML = str;
	         Make_Row.appendChild(make_td);

	         make_td = document.createElement("td");
	         make_td.className = "GridHdtd3";
	         make_td.align = "center";
	         make_td.width = "5%";
	         str = "<input class=\"newgridtext\" style='width:98%' disabled = true; type=\"text\" id=" + gcreateddatee + " value='" + ds.Tables[0].Rows[k].CREATION_DATE + "' />";
	         make_td.innerHTML = str;
	         Make_Row.appendChild(make_td);

	         make_td = document.createElement("td");
	         make_td.className = "GridHdtd3";
	         make_td.align = "center";
	         make_td.width = "6%";
	         str = "<input class=\"newgridtext\" style='width:98%' disabled = true; type=\"text\" id=" + gupdateby + " value='" + ds.Tables[0].Rows[k].UPDATED_NAME + "' />";
	         make_td.innerHTML = str;
	         Make_Row.appendChild(make_td);

	         make_td = document.createElement("td");
	         make_td.className = "GridHdtd3";
	         make_td.align = "center";
	         make_td.width = "5%";
	         str = "<input class=\"newgridtext\" style='width:98%' disabled = true; type=\"text\" id=" + gupdatedate + " value='" + ds.Tables[0].Rows[k].UPDATE_DATE + "' />";
	         make_td.innerHTML = str;
	         Make_Row.appendChild(make_td);


	         make_td = document.createElement("td");
	         make_td.className = "GridHdtd3";
	         make_td.align = "center";
	         make_td.width = "2%";
	         str = "<input class=\"newgridtext\" style='width:98%'  type=\"checkbox\" id=" + chkboxid + " value='' />";
	         make_td.innerHTML = str;
	         Make_Row.appendChild(make_td);

	         document.getElementById('griddiv').getElementsByTagName('tbody')[0].appendChild(Make_Row);
	     }
	     return false;
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
	  for (var k = 0; k < (gridlength - 1); k++) {
	      
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
	          var res = bookingserch.deletebook(PCOMP_CODE, PCENT_CODE, PBRANCH_CODE, PBOOKING_NO, PBOOKING_DATE, PCHANNEL, PEXTRA, PEXTRA1, PEXTRA2, PEXTRA3, PEXTRA4);
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
function athenticate() {
    var password = document.getElementById("txtpasword").value;

    var res = bookingserch.chkpassword(password);
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
    document.getElementById('drppaaymode').value = "";

    document.getElementById('txtclint').value = "";
    document.getElementById('txtdeal').value = "";
    document.getElementById('drpbookingtype').value = "";
    document.getElementById('txtrno').value = "";
    document.getElementById('txtrdate').value = "";
    document.getElementById('txtdokitno').value = "";
  
    document.getElementById('txtindustry').value = "----- Select Industry -----";
    document.getElementById('txtproduct').value = "----- Select Product -----";
    document.getElementById('txtbrand').value = "----- Select Brand -----";
    document.getElementById('txtevent').value = "----- Select Event -----";
    document.getElementById('txtexcutive').value = "----- Select Executive -----";
    document.getElementById('txtret').value = "----- Select Retianer -----";
    document.getElementById('hiddenindustry').value = "";
    document.getElementById('hiddenproduct').value = "";
    document.getElementById('hiddenbrand').value = "";
    document.getElementById('hideenevent').value = "";
    document.getElementById('hdnret').value = "";
    document.getElementById('hdnexcutive').value = "";
    document.getElementById('hdngencode').value = "";
    document.getElementById('hdnclient').value = "";

    document.getElementById('txtcpton').value = "";
    document.getElementById('txtkeyn').value = "";
   
  

    document.getElementById('drpadtype').value = "0";
    return false;
}