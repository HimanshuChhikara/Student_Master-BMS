//====================================================================


function getbankname(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtbank") {

        document.getElementById("divbank").style.display = "block";
        aTag = eval(document.getElementById("txtbank"))
        var btag;
        var leftpos = 0;
        var toppos = 7;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divbank').scrollLeft;
        var scrolltop = document.getElementById('divbank').scrollTop;
        document.getElementById('divbank').style.left = document.getElementById("txtbank").offsetLeft + leftpos - tot + "px";
        document.getElementById('divbank').style.top = document.getElementById("txtbank").offsetTop + toppos - scrolltop + 18 + "px"; //"510px";

        BMS_SCHEME_CLIENT_REPORT.Bindbank(document.getElementById('txtbank').value.toUpperCase(), bindbank_callback);


    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtbank") {
            document.getElementById('hdnbankcode').value = "";
        }
    }
    else if (key == 27) {
        document.getElementById("divbank").style.display = "none";
        document.getElementById('txtbank').focus();
        return false;
    }
    else if (key == 13) {
        if (document.getElementById("divbank").style.display == "block") {
            fillbank(Event);
        }
        if (document.activeElement.id == "lstbank") {
            fillbank(Event);
           return false;
        }
        document.getElementById("divbank").style.display = "none";
    }
    else if (key == 9 && event.shiftkey == false) {
        document.getElementById("divbank").style.display = "none";
        document.getElementById('drppaymode').focus();
        return false;

    }
    else if (key == 9) {
        document.getElementById("divbank").style.display = "none";
        document.getElementById('txtbank').focus();
        return true;

    }
   
    else if (key == 38) {
        if (document.getElementById("divbank").style.display == "block") {
            if (document.getElementById('lstbank').value == '0') {
                document.getElementById('txtbank').focus();
            }
        }
    }

    else if (key == 40) {
        if (document.getElementById("divbank").style.display == "block") {
            document.getElementById("lstbank").focus();
        }
    }
    else {
        document.getElementById("divbank").style.display = "block";
        document.getElementById("divbank").style.display = "block";
        aTag = eval(document.getElementById("txtbank"))
        var btag;
        var leftpos = 0;
        var toppos = 7;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divbank').scrollLeft;
        var scrolltop = document.getElementById('divbank').scrollTop;
        document.getElementById('divbank').style.left = document.getElementById("txtbank").offsetLeft + leftpos - tot + "px";
        document.getElementById('divbank').style.top = document.getElementById("txtbank").offsetTop + toppos - scrolltop + 18 + "px"; //"510px";

        BMS_SCHEME_CLIENT_REPORT.Bindbank(document.getElementById('txtbank').value.toUpperCase(), bindbank_callback);

    }
}


function bindbank_callback(response) {
    ds = response.value;
    var lstitem = document.getElementById("lstbank");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("------------------------- Select Bank -------------------------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].BANK_NAME, ds.Tables[0].Rows[i].BANK_CODE);
        }
    }
    document.getElementById('hdnbankcode').value = "";
    document.getElementById("lstbank").selectedIndex = 1;;
    // document.getElementById("lstbank").focus();
    return false;
}
function fillbank() {

    if (document.getElementById("lstbank").value == "0") {
        alert("Please Select Bank");
        return false;
    }
    else {
        document.getElementById("divbank").style.display = "none";
        var lstvalue = document.getElementById('lstbank').value;
        for (var k = 0; k < document.getElementById("lstbank").length; k++) {
            if (document.getElementById('lstbank').options[k].value == lstvalue) {


                document.getElementById('hdnbankcode').value = document.getElementById('lstbank').options[k].value;
                if (browser != "Microsoft Internet Explorer")
                    document.getElementById('txtbank').value = document.getElementById('lstbank').options[k].textContent;
                else
                    document.getElementById('txtbank').value = document.getElementById('lstbank').options[k].innerText;
                break;
            }
        }
    }

    document.getElementById('txtbank').focus();
    return false;
}

function focus_bank() {
    if (document.getElementById('txtbank').value == "-----Select Bank Name-----") {
        document.getElementById('txtbank').value = "";
    }
    document.getElementById('txtbank').style.textAlign = "left";
    document.getElementById('txtbank').style.color = "black";
    document.getElementById('txtbank').style.backgroundColor = "#99FFFF";
}
function blur_bank() {
    if (document.getElementById('txtbank').value == "") {
        document.getElementById('txtbank').value = "";
        document.getElementById('txtbank').value = "-----Select Bank Name-----";
        document.getElementById('txtbank').style.textAlign = "center";
        document.getElementById('txtbank').style.color = "gray";
    }

    else {
        document.getElementById('txtbank').style.textAlign = "left";
        document.getElementById('txtbank').style.color = "black";
    }
    if (document.getElementById('hdnbankcode').value == "") {
        document.getElementById('txtbank').value = "";
        document.getElementById('txtbank').value = "-----Select Bank Name-----";
        document.getElementById('txtbank').style.textAlign = "center";
        document.getElementById('txtbank').style.color = "gray";
    }
    document.getElementById('txtbank').style.backgroundColor = "white";
    return false;
}

//*****************************Function For City select F2***********************
function Bindcity(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if ((event.shiftKey && key == 9) || (key == 16)) {
    }
    else if (key == 113 && document.activeElement.id == "txtcity") {


        document.getElementById("divcity").style.display = "block";
        aTag = eval(document.getElementById("txtcity"))
        var btag;
        var leftpos = 0;
        var toppos = 25;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divcity').scrollLeft;
        var scrolltop = document.getElementById('divcity').scrollTop;
        document.getElementById('divcity').style.left = document.getElementById("txtcity").offsetLeft + leftpos - tot + "px";
        document.getElementById('divcity').style.top = document.getElementById("txtcity").offsetTop + toppos - scrolltop + "px"; //"510px";
        var extra = "";
        var cityname = document.getElementById('txtcity').value.toUpperCase()
        var country = "";
        BMS_SCHEME_CLIENT_REPORT.Bindcityname(country, cityname, extra, bindcity_callback);
    }

    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtcity") {
            document.getElementById('hdncity').value = "";
        }
    }
    else if (key == 27) {
        document.getElementById("divcity").style.display = "none";
        document.getElementById('txtcity').focus();
        return false;
    }
    else if (key == 13) {
        if (document.getElementById("divcity").style.display == "block")
        {
            filllcity(event);
            return false;

        }
        if (document.activeElement.id == "lstcity") {
            filllcity(event);
            return false;
        }
    }
    else if (key == 38) {
        if (document.getElementById("divcity").style.display == "block") {
            if (document.getElementById('lstcity').value == '0') {
                document.getElementById('txtcity').focus();
            }
        }
    }
    else if (key == 9 && event.shiftkey == false) {
        document.getElementById("divcity").style.display = "none";
        document.getElementById('txtclientname').focus();
        return false;

    }
    else if (key == 9) {
        document.getElementById("divcity").style.display = "none";
        document.getElementById('txtcity').focus();
        return true;

    }


   
    else if (key == 40) {
        if (document.getElementById("divcity").style.display == "block") {
            document.getElementById("lstcity").focus();
        }
    }
    else {
        document.getElementById("divcity").style.display = "block";
        aTag = eval(document.getElementById("txtcity"))
        var btag;
        var leftpos = 0;
        var toppos = 25;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divcity').scrollLeft;
        var scrolltop = document.getElementById('divcity').scrollTop;
        document.getElementById('divcity').style.left = document.getElementById("txtcity").offsetLeft + leftpos - tot + "px";
        document.getElementById('divcity').style.top = document.getElementById("txtcity").offsetTop + toppos - scrolltop + "px"; //"510px";
        var extra = "G";
        var cityname = document.getElementById('txtcity').value.toUpperCase()
        var country = "";
        BMS_SCHEME_CLIENT_REPORT.Bindcityname(country, cityname, extra, bindcity_callback);

    }
}
function bindcity_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("lstcity");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select City Name---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].CITY_NAME, ds.Tables[0].Rows[i].CITY_CODE);
        }
    }

    document.getElementById('hdncity').value = "";
    document.getElementById("lstcity").selectedIndex = 1;;

    return false;
}

function filllcity(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtcity" || document.activeElement.id == "lstcity") {
            document.getElementById("divcity").style.display = "none";
            document.getElementById('txtcity').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {

        if (document.getElementById("lstcity").value == "0") {
            // alert("Please Select City Name");
            return false;
        }
        else {
            document.getElementById("divcity").style.display = "none";
            var lstvalue = document.getElementById('lstcity').value;
            for (var k = 0; k < document.getElementById("lstcity").length; k++) {
                if (document.getElementById('lstcity').options[k].value == lstvalue) {

                    document.getElementById('hdncity').value = document.getElementById('lstcity').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtcity').value = document.getElementById('lstcity').options[k].textContent;
                    else
                        document.getElementById('txtcity').value = document.getElementById('lstcity').options[k].innerText;

                    break;
                }
            }
        }
        document.getElementById('txtcity').focus();

        return false;
    }

}

function focus_city() {
    if (document.getElementById('txtcity').value == "-----Select City Name-----") {
        document.getElementById('txtcity').value = "";
    }
    document.getElementById('txtcity').style.textAlign = "left";
    document.getElementById('txtcity').style.color = "black";
    document.getElementById('txtcity').style.backgroundColor = "#99FFFF";
}
function blur_city() {
    if (document.getElementById('txtcity').value == "") {
        document.getElementById('txtcity').value = "";
        document.getElementById('txtcity').value = "-----Select City Name-----";
        document.getElementById('txtcity').style.textAlign = "center";
        document.getElementById('txtcity').style.color = "gray";
    }

    else {
        document.getElementById('txtcity').style.textAlign = "left";
        document.getElementById('txtcity').style.color = "black";
    }
    if (document.getElementById('hdncity').value == "") {
        document.getElementById('txtcity').value = "";
        document.getElementById('txtcity').value = "-----Select City Name-----";
        document.getElementById('txtcity').style.textAlign = "center";
        document.getElementById('txtcity').style.color = "gray";
    }
    document.getElementById('txtcity').style.backgroundColor = "white";
    return false;
}

//====================================================================


function getclientname(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtclientname") {

        document.getElementById("divclients").style.display = "block";
        aTag = eval(document.getElementById("txtclientname"))
        var btag;
        var leftpos = 0;
        var toppos = 7;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divclients').scrollLeft;
        var scrolltop = document.getElementById('divclients').scrollTop;
        document.getElementById('divclients').style.left = document.getElementById("txtclientname").offsetLeft + leftpos - tot + "px";
        document.getElementById('divclients').style.top = document.getElementById("txtclientname").offsetTop + toppos - scrolltop + 18 + "px"; //"510px";

        BMS_SCHEME_CLIENT_REPORT.BindSCHCH(document.getElementById('hiddencompcode').value.toUpperCase(), document.getElementById('txtclientname').value.toUpperCase(), bindclie_callback);


    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtclientname") {
            document.getElementById('hdnclient').value = "";
        }
    }
    else if (key == 27) {
        document.getElementById("divclients").style.display = "none";
        document.getElementById('txtclientname').focus();
        return false;
    }
    else if (key == 13) {
        if (document.getElementById("divclients").style.display == "block") {
            fillclient(event);
        }
        if (document.activeElement.id == "lstclients") {
            fillclient(event);
            return false;
        }
        
    }
    else if (key == 9 && event.shiftkey == false) {
        document.getElementById("divclients").style.display = "none";
        document.getElementById('drpclischname').focus();
        return false;

    }
    else if (key == 9) {
        document.getElementById("divclients").style.display = "none";
        document.getElementById('txtclientname').focus();
        return true;

    }

  
    else if (key == 38) {
        if (document.getElementById("divclients").style.display == "block") {
            if (document.getElementById('lstclients').value == '0') {
                document.getElementById('txtclientname').focus();
            }
        }
    }

    else if (key == 40) {
        if (document.getElementById("divclients").style.display == "block") {
            document.getElementById("lstclients").focus();
        }
    }
    else {
        document.getElementById("divclients").style.display = "block";
        document.getElementById("divclients").style.display = "block";
        aTag = eval(document.getElementById("txtclientname"))
        var btag;
        var leftpos = 0;
        var toppos = 7;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divclients').scrollLeft;
        var scrolltop = document.getElementById('divclients').scrollTop;
        document.getElementById('divclients').style.left = document.getElementById("txtclientname").offsetLeft + leftpos - tot + "px";
        document.getElementById('divclients').style.top = document.getElementById("txtclientname").offsetTop + toppos - scrolltop + 18 + "px"; //"510px";

        BMS_SCHEME_CLIENT_REPORT.BindSCHCH(document.getElementById('hiddencompcode').value.toUpperCase(), document.getElementById('txtclientname').value.toUpperCase(), bindclie_callback);

    }
}


function bindclie_callback(response) {
    ds = response.value;
    var lstitem = document.getElementById("lstclients");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("------------------------- Select Client -------------------------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].CLIENT_NAME, ds.Tables[0].Rows[i].CLIENT_CODE);
        }
    }
    document.getElementById('hdnclient').value = "";
    document.getElementById("lstclients").selectedIndex = 1;
    // document.getElementById("lstclients").focus();
    return false;
}

function fillclient() {

    if (document.getElementById("lstclients").value == "0") {
        alert("Please Select Client");
        return false;
    }
    else {
        document.getElementById("divclients").style.display = "none";
        var lstvalue = document.getElementById('lstclients').value;
        for (var k = 0; k < document.getElementById("lstclients").length; k++) {
            if (document.getElementById('lstclients').options[k].value == lstvalue) {


                document.getElementById('hdnclient').value = document.getElementById('lstclients').options[k].value;
                if (browser != "Microsoft Internet Explorer")
                    document.getElementById('txtclientname').value = document.getElementById('lstclients').options[k].textContent;
                else
                    document.getElementById('txtclientname').value = document.getElementById('lstclients').options[k].innerText;
                break;
            }
        }
    }

    document.getElementById('txtclientname').focus();
    return false;
}
function focus_client() {
    if (document.getElementById('txtclientname').value == "-----Select Client Name-----") {
        document.getElementById('txtclientname').value = "";
    }
    document.getElementById('txtclientname').style.textAlign = "left";
    document.getElementById('txtclientname').style.color = "black";
    document.getElementById('txtclientname').style.backgroundColor = "#99FFFF";
}
function blur_client() {
    if (document.getElementById('txtclientname').value == "") {
        document.getElementById('txtclientname').value = "";
        document.getElementById('txtclientname').value = "-----Select Client Name-----";
        document.getElementById('txtclientname').style.textAlign = "center";
        document.getElementById('txtclientname').style.color = "gray";
    }

    else {
        document.getElementById('txtclientname').style.textAlign = "left";
        document.getElementById('txtclientname').style.color = "black";
    }
    if (document.getElementById('hdnclient').value == "") {
        document.getElementById('txtclientname').value = "";
        document.getElementById('txtclientname').value = "-----Select Client Name-----";
        document.getElementById('txtclientname').style.textAlign = "center";
        document.getElementById('txtclientname').style.color = "gray";
    }
    document.getElementById('txtclientname').style.backgroundColor = "white";
    return false;
}