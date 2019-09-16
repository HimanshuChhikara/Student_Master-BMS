
//*****************************Function For Industry select F2***********************
function Bindindustryname(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if ((event.shiftKey && key == 9) || (key == 16)) { }
    else if (key == 113 && document.activeElement.id == "txtindustry") {


        document.getElementById("divindu").style.display = "block";
        aTag = eval(document.getElementById("txtindustry"))
        var btag;
        var leftpos = 0;
        var toppos = 25;
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
        var extra = "";
        var pindustry = document.getElementById('txtindustry').value.toUpperCase()
        var pcompcode = document.getElementById('hiddencompcode').value;
        var psecrchtype = "";
        clientschememast.Bindindustr(pcompcode, pindustry, psecrchtype, extra, bindindustry_callback);

    }

    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtindustry") {
            document.getElementById('hiddenindustry').value = "";
        }
    }
    else if (key == 27) {
        document.getElementById("divindu").style.display = "none";
        document.getElementById('txtindustry').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "istindustry") {

            return false; 
        }
    }
    else if (key == 9) {
        document.getElementById("divindu").style.display = "none";
        document.getElementById('drpwelwiscd').focus();
        return false;
    }
    else if (key == 9 && event.shiftKey == true)
    {
        document.getElementById("divindu").style.display = "none";
        document.getElementById('txtstatusdate').focus();
        return true;
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
        var toppos = 25;
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
        var extra = "";
        var pindustry = document.getElementById('txtindustry').value.toUpperCase()
        var pcompcode = document.getElementById('hiddencompcode').value;
        var psecrchtype = "G";
        clientschememast.Bindindustr(pcompcode, pindustry, psecrchtype, extra, bindindustry_callback);

    }
    //return false;
}
function bindindustry_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("istindustry");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("----Select Industry----", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].INDUSTRY_NAME, ds.Tables[0].Rows[i].INDUSTRY_CODE);
        }


    }
    document.getElementById('hiddenindustry').value = "";
    //document.getElementById("lstcity").value = "0";
    document.getElementById("istindustry").selectedIndex = 1;
    //document.getElementById('hiddenindustry').value = "";
    //document.getElementById("istindustry").SelectedIndex = 1;
    // document.getElementById("istindustry").focus();
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

        if (document.getElementById("istindustry").value == "") {
            // alert("Please Select Master Name");
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

function focusindustry() {
    if (document.getElementById('txtindustry').value == "----Select Industry----") {
        document.getElementById('txtindustry').value = "";
    }
    document.getElementById('txtindustry').style.textAlign = "left";
    document.getElementById('txtindustry').style.color = "black";
    document.getElementById('txtindustry').style.backgroundColor = "#99FFFF";
}
function blurindustry1() {
    document.getElementById('txtindustry').style.backgroundColor = "white";
    if (document.getElementById('txtindustry').value == "") {
        document.getElementById('txtindustry').value = "";
        document.getElementById('txtindustry').value = "----Select Industry----";
        document.getElementById('txtindustry').style.textAlign = "center";
        document.getElementById('txtindustry').style.color = "gray";
    }

    else {
        document.getElementById('txtindustry').style.textAlign = "left";
        document.getElementById('txtindustry').style.color = "black";
    }
    //if (document.getElementById('hiddenindustry').value == "") {
    //    document.getElementById('txtindustry').value = "";
    //    document.getElementById('txtindustry').value = "-----Select Industry-----";
    //    document.getElementById('txtindustry').style.textAlign = "center";
    //    document.getElementById('txtindustry').style.color = "gray";
    //}

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
        var country = document.getElementById('drpcountry').value;
        clientschememast.Bindcityname(country, cityname, extra, bindcity_callback);
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
        if (document.activeElement.id == "lstcity") {

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
    //else if (key == 9) {
    //    document.getElementById("divcity").style.display = "none";
    //    document.getElementById('txtdes').focus();

    //}
    else if (key == 9 ) {
        document.getElementById("divcity").style.display = "none";
        document.getElementById('drptaluka').focus();
        return false;
    }
    else if (key == 9 && event.shiftKey == true)
    {
        document.getElementById("divcity").style.display = "none";
        document.getElementById('drpcountry').focus();
        
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
        var country = document.getElementById('drpcountry').value;
        clientschememast.Bindcityname(country, cityname, extra, bindcity_callback);

    }
}
function bindcity_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("lstcity");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("---Select City---", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].CITY_NAME, ds.Tables[0].Rows[i].CITY_CODE + "~" + ds.Tables[0].Rows[i].DIST_CODE + "~" + ds.Tables[0].Rows[i].DIST_NAME + "~" + ds.Tables[0].Rows[i].STATE_CODE + "~" + ds.Tables[0].Rows[i].STATE_NAME + "~" + ds.Tables[0].Rows[i].ZONE_CODE + "~" + ds.Tables[0].Rows[i].ZONE_NAME + "~" + ds.Tables[0].Rows[i].REGION_CODE + "~" + ds.Tables[0].Rows[i].REGION_NAME);
        }


    }

    document.getElementById('hdncity').value = "";
    //document.getElementById("lstcity").value = "0";
    document.getElementById("lstcity").selectedIndex = 1;
    document.getElementById('hdnDistrict').value = "";
    document.getElementById('txtDistrict').value = "";
    document.getElementById('hdnState').value = "";
    document.getElementById('txtState').value = "";

    document.getElementById('hdnZone').value = "";
    document.getElementById('txtZone').value = "";
    document.getElementById('hdnRegion').value = "";
    document.getElementById('txtRegion').value = "";


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
                    var citycodename = document.getElementById('lstcity').options[k].value;
                    citycodename = citycodename.split("~");
                    document.getElementById('hdncity').value = fndnull1(citycodename[0]);
                    document.getElementById('hdnDistrict').value = fndnull1(citycodename[1]);
                    document.getElementById('txtDistrict').value = fndnull1(citycodename[2]);
                    document.getElementById('hdnState').value = fndnull1(citycodename[3]);
                    document.getElementById('txtState').value = fndnull1(citycodename[4]);
                    document.getElementById('hdnZone').value = fndnull1(citycodename[5]);
                    document.getElementById('txtZone').value = fndnull1(citycodename[6]);
                    document.getElementById('hdnRegion').value = fndnull1(citycodename[7]);
                    document.getElementById('txtRegion').value = fndnull1(citycodename[8]);

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
function fndnull1(myval) {
    if (myval == "undefined") {
        myval = "";
    }
    else if (myval == "null") {
        myval = "";
    }
    else if (myval == "") {
        myval = "";
    }

    return myval
}



function focusCITY() {
    if (document.getElementById('txtcity').value == "---Select City---") {
        document.getElementById('txtcity').value = "";
    }
    document.getElementById('txtcity').style.textAlign = "left";
    document.getElementById('txtcity').style.color = "black";
    document.getElementById('txtcity').style.backgroundColor = "#99FFFF";
}
function blurCITY() {
    document.getElementById('txtcity').style.backgroundColor = "white";
    if (document.getElementById('txtcity').value == "") {
        document.getElementById('txtcity').value = "";
        document.getElementById('txtcity').value = "---Select City---";
        document.getElementById('txtcity').style.textAlign = "center";
        document.getElementById('txtcity').style.color = "gray";
    }

    else {
        document.getElementById('txtcity').style.textAlign = "left";
        document.getElementById('txtcity').style.color = "black";
    }
    //if (document.getElementById('hdncity').value == "") {
    //    document.getElementById('txtcity').value = "";
    //    document.getElementById('txtcity').value = "-----Select City-----";
    //    document.getElementById('txtcity').style.textAlign = "center";
    //    document.getElementById('txtcity').style.color = "gray";
    //}

    return false;
}

//================================***** For Contact Detail Popup *****=====================================================//
function OpenContactDetails() {
    if (document.getElementById('btnContactDetails').disabled != true) {
        if (document.getElementById('drpclischname').value == "0") {
            alert("Please Select Client Category");
            if (document.getElementById('drpclischname').disabled == false)
                document.getElementById('drpclischname').focus();
            return false;
        }

        if (document.getElementById('txtclientname').value == "") {
            alert("Please Enter Client Name");
            document.getElementById('txtclientname').focus();
            return false;
        }

        if (document.getElementById('txtclientnick').value == "") {
            alert("Please Enter Client Nick");
            document.getElementById('txtclientnick').focus();
            return false;
        }

        if (hiddentext.value == "") {
            return false;
        }

        var schemecode = document.getElementById('drpclischname').value;
        var ClientCode = "";
        if (hiddentext.value == "new")
            ClientCode = document.getElementById('tmpclientcode').value;
        else
            ClientCode = document.getElementById('txtclientcode').value;

        var win = window.open("ClientContDetsch.aspx?ClientCode=" + ClientCode + "&schemecode=" + schemecode + "&ShowMode=" + hiddentext.value, 'ClientContact', 'width=' + screen.availWidth + ',height=' + screen.availHeight + ' ,status=0,toolbar=0,resizable=1,top=244,left=210,scrollbars=yes');
        // win.focus();
    }
    return false
}

function PopCloseClick() {
    window.close();
}

//====================================================================


function getbankname(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtbank") {

        document.getElementById("divbank").style.display = "block";
        aTag = eval(document.getElementById("txtbank"))
        var btag;
        var leftpos = 0;
        var toppos = 10;
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

        clientschememast.Bindbank(document.getElementById('txtbank').value.toUpperCase(), bindbank_callback);


    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtbank") {
            document.getElementById('hdnbankcode').value = "";
        }
    }
    else if (key == 27 || key == 16 || key == 17) {
        document.getElementById("divbank").style.display = "none";
        document.getElementById('txtbank').focus();
        return false;
    }
    else if (key == 13) {

        if (document.activeElement.id == "lstbank") {
            //fillbank();
            return false;
        }
        
    }
    else if (key == 9 && event.shiftKey == true) {
        document.getElementById("divbank").style.display = "none";
        document.getElementById('txtconfirndate').focus();
        return false;
    }
    else if (key == 9) {
        document.getElementById("divbank").style.display = "none";
        document.getElementById('txtbookingalert').focus();
        return false;
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
        var toppos = 10;
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

        clientschememast.Bindbank(document.getElementById('txtbank').value.toUpperCase(), bindbank_callback);

    }
}


function bindbank_callback(response) {
    ds = response.value;
    var lstitem = document.getElementById("lstbank");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("---Bank Name---", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].BANK_NAME, ds.Tables[0].Rows[i].BANK_CODE);
        }
    }
    document.getElementById('hdnbankcode').value = "";
    document.getElementById("lstbank").selectedIndex = 1;
    // document.getElementById("lstbank").focus();
    return false;
}
function fillbank() {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 13 || event.type == "click") {
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
}


function focusbank() {
    if (document.getElementById('txtbank').value == "---Bank Name---") {
        document.getElementById('txtbank').value = "";
    }
    document.getElementById('txtbank').style.textAlign = "left";
    document.getElementById('txtbank').style.color = "black";
    document.getElementById('txtbank').style.backgroundColor = "#99FFFF";
}
function blurbank() {
    document.getElementById('txtbank').style.backgroundColor = "white";
    if (document.getElementById('txtbank').value == "") {
        document.getElementById('txtbank').value = "";
        document.getElementById('txtbank').value = "---Bank Name---";
        document.getElementById('txtbank').style.textAlign = "center";
        document.getElementById('txtbank').style.color = "gray";
    }

    else {
        document.getElementById('txtbank').style.textAlign = "left";
        document.getElementById('txtbank').style.color = "black";
    }
    //if (document.getElementById('hdncity').value == "") {
    //    document.getElementById('txtbank').value = "";
    //    document.getElementById('txtbank').value = "-----Select City-----";
    //    document.getElementById('txtbank').style.textAlign = "center";
    //    document.getElementById('txtbank').style.color = "gray";
    //}
  
    return false;
}
/////////////////////////////////////Entertab/////////////////////////////////////////////////////
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
                    // CancelClick();
                    return false;
                }
            }

            else if (e.ctrlKey && e.keyCode === 77) {
                e.preventDefault();
                if (document.getElementById('btnedit').disabled == false) {
                    document.getElementById('btnedit').click();
                    //ModifyClick();
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

        }
    };

    if (key == 13) {
        if (document.activeElement.id == "drpcenter") {
            if (document.getElementById('txtentrydate').disabled == false)
                document.getElementById('txtentrydate').focus();
            return false;
        }
        if (document.activeElement.id == "txtentrydate") {
            if (document.getElementById('drpclischname').disabled == false)
                document.getElementById('drpclischname').focus();
            return false;
        }
        if (document.activeElement.id == "drpclischname") {
            if (document.getElementById('drpgiftglag').disabled == false)
                document.getElementById('drpgiftglag').focus();
            return false;
        }
        if (document.activeElement.id == "drpgiftglag") {
            if (document.getElementById('txtclientname').disabled == false)
                document.getElementById('txtclientname').focus();
            return false;
        }
        if (document.activeElement.id == "txtclientname") {
            if (document.getElementById('txtbirthday').disabled == false)
                document.getElementById('txtbirthday').focus();
            return false;
        }
        if (document.activeElement.id == "txtbirthday") {
            if (document.getElementById('txtclientnick').disabled == false)
                document.getElementById('txtclientnick').focus();
            return false;
        }
        if (document.activeElement.id == "txtclientnick") {
            if (document.getElementById('txtaniver').disabled == false)
                document.getElementById('txtaniver').focus();
            return false;
        }
        if (document.activeElement.id == "txtaniver") {
            if (document.getElementById('txtadd1').disabled == false)
                document.getElementById('txtadd1').focus();
            return false;
        }
        if (document.activeElement.id == "txtadd1") {
            if (document.getElementById('txtenrollno').disabled == false)
                document.getElementById('txtenrollno').focus();
            return false;
        }
        if (document.activeElement.id == "txtenrollno") {
            if (document.getElementById('drpcountry').disabled == false)
                document.getElementById('drpcountry').focus();
            return false;
        }
        if (document.activeElement.id == "drpcountry") {
            if (document.getElementById('txtcity').disabled == false)
                document.getElementById('txtcity').focus();
            return false;
        }
        if (document.activeElement.id == "txtcity") {
            if (document.getElementById("divcity").style.display != "none") {
                filllcity(event);
            }
            if (document.getElementById('drptaluka').disabled == false)
                document.getElementById('drptaluka').focus();
            return false;
        }
        if (document.activeElement.id == "drptaluka") {
            if (document.getElementById('txtpostcode').disabled == false)
                document.getElementById('txtpostcode').focus();
            return false;
        }
        if (document.activeElement.id == "txtpostcode") {
            if (document.getElementById('txtphone1').disabled == false)
                document.getElementById('txtphone1').focus();
            return false;
        }
        if (document.activeElement.id == "txtphone1") {
            if (document.getElementById('txtphone2').disabled == false)
                document.getElementById('txtphone2').focus();
            return false;
        }
        if (document.activeElement.id == "txtphone2") {
            if (document.getElementById('txtfax1').disabled == false)
                document.getElementById('txtfax1').focus();
            return false;
        }
        if (document.activeElement.id == "txtfax1") {
            if (document.getElementById('txtfax2').disabled == false)
                document.getElementById('txtfax2').focus();
            return false;
        }
        if (document.activeElement.id == "txtfax2") {
            if (document.getElementById('txtemailid').disabled == false)
                document.getElementById('txtemailid').focus();
            return false;
        }
        if (document.activeElement.id == "txtemailid") {
            if (document.getElementById('txtwebsite').disabled == false)
                document.getElementById('txtwebsite').focus();
            return false;
        }
        if (document.activeElement.id == "txtwebsite") {
            if (document.getElementById('txtservtxno').disabled == false)
                document.getElementById('txtservtxno').focus();
            return false;
        }
        if (document.activeElement.id == "txtservtxno") {
            if (document.getElementById('txtpan').disabled == false)
                document.getElementById('txtpan').focus();
            return false;
        }
        if (document.activeElement.id == "txtpan") {
            if (document.getElementById('drpstatus').disabled == false)
                document.getElementById('drpstatus').focus();
            return false;
        }
        if (document.activeElement.id == "drpstatus") {
            if (document.getElementById('txtstatusdate').disabled == false)
                document.getElementById('txtstatusdate').focus();
            return false;
        }
        if (document.activeElement.id == "txtstatusdate") {
            if (document.getElementById('txtindustry').disabled == false)
                document.getElementById('txtindustry').focus();
            return false;
        }
        if (document.activeElement.id == "txtindustry") {
            if (document.getElementById("divindu").style.display != "none") {
                filllindustryname(event);
            }

            if (document.getElementById('drpwelwiscd').disabled == false)
                document.getElementById('drpwelwiscd').focus();
            return false;
        }
        if (document.activeElement.id == "drpwelwiscd") {
            if (document.getElementById('drppaymode').disabled == false)
                document.getElementById('drppaymode').focus();
            return false;
        }
        if (document.activeElement.id == "drppaymode") {
            if (document.getElementById('txtstatuscause').disabled == false)
                document.getElementById('txtstatuscause').focus();
            return false;
        }
        if (document.activeElement.id == "txtstatuscause") {
            if (document.getElementById('txtconfirndate').disabled == false)
                document.getElementById('txtconfirndate').focus();
            return false;
        }
        if (document.activeElement.id == "txtconfirndate") {
            if (document.getElementById('txtbank').disabled == false)
                document.getElementById('txtbank').focus();
            return false;
        }
        if (document.activeElement.id == "txtbank") {
            if (document.getElementById("divbank").style.display != "none") {
                fillbank(event);
            }

            if (document.getElementById('txtbookingalert').disabled == false)
                document.getElementById('txtbookingalert').focus();
            return false;
        }
        if (document.activeElement.id == "txtbookingalert") {
            if (document.getElementById('txchkno').disabled == false)
                document.getElementById('txchkno').focus();
            return false;
        }
        if (document.activeElement.id == "txchkno") {
            if (document.getElementById('txtremark').disabled == false)
                document.getElementById('txtremark').focus();
            return false;
        }
        if (document.activeElement.id == "txtremark") {
            if (document.getElementById('txtchkdate').disabled == false)
                document.getElementById('txtchkdate').focus();
            return false;

        }

        if (document.activeElement.id == "txtchkdate") {
            if (document.getElementById('btnsave1').disabled == false)
                document.getElementById('btnsave1').focus();
            return false;
        }

        else if (document.activeElement.type == "button" || document.activeElement.type == "submit" || document.activeElement.type == "image") {
            return key;
        }
    }
}


//    if (event.shiftKey && event.keyCode == 9) {
//        if (document.activeElement.id == "drpcenter") {

//            document.getElementById('txtentrydate').focus();
//            return false;

//        }
//        else if (document.activeElement.id == "txtentrydate") {
//            document.getElementById('drpclischname').focus();
//            return false;
//        }
//        else if (document.activeElement.id == "drpclischname") {

//            document.getElementById('drpgiftglag').focus();

//            return false;
//        }

//        else if (document.activeElement.id == "drpgiftglag") {
//            document.getElementById('txtclientname').focus();
//            return false;
//        }
//        else if (document.activeElement.id == "txtclientname") {
//            document.getElementById('txtbirthday').focus();
//            return false;
//        }
//        else if (document.activeElement.id == "txtbirthday") {
//            document.getElementById('txtclientnick').focus();
//            return false;
//        }
//        else if (document.activeElement.id == "txtclientnick") {
//            document.getElementById('txtaniver').focus();
//            return false;
//        }
//        else if (document.activeElement.id == "txtaniver") {
//            document.getElementById('txtadd1').focus();
//            return false;
//        }
//        else if (document.activeElement.id == "txtadd1") {
//            document.getElementById('txtenrollno').focus();
//            return false;
//        }
//        else if (document.activeElement.id == "txtenrollno") {
//            document.getElementById('drpcountry').focus();
//            return false;
//        }
//        else if (document.activeElement.id == "drpcountry") {
//            document.getElementById('txtcity').focus();
//            return false;
//        }
//        else if (document.activeElement.id == "txtcity") {
//            document.getElementById('drptaluka').focus();
//            return false;
//        }
//        else if (document.activeElement.id == "drptaluka") {
//            document.getElementById('txtpostcode').focus();
//            return false;
//        }

//        else if (document.activeElement.id == "txtpostcode") {
//            document.getElementById('txtphone1').focus();
//            return false;
//        }
//        else if (document.activeElement.id == "txtphone1") {
//            document.getElementById('txtphone2').focus();
//            return false;
//        }
//        else if (document.activeElement.id == "txtphone2") {
//            document.getElementById('txtfax1').focus();
//            return false;
//        }
//        else if (document.activeElement.id == "txtfax1") {
//            document.getElementById('txtfax2').focus();
//            return false;
//        }
//        else if (document.activeElement.id == "txtfax2") {
//            document.getElementById('txtemailid').focus();
//            return false;
//        }
//        else if (document.activeElement.id == "txtemailid") {
//            document.getElementById('txtwebsite').focus();
//            return false;
//        }
//        else if (document.activeElement.id == "txtwebsite") {
//            document.getElementById('txtservtxno').focus();
//            return false;
//        }
//        else if (document.activeElement.id == "txtservtxno") {
//            document.getElementById('txtpan').focus();
//            return false;
//        }
//        else if (document.activeElement.id == "txtpan") {
//            document.getElementById('drpstatus').focus();
//            return false;
//        }
//        else if (document.activeElement.id == "drpstatus") {
//            document.getElementById('txtstatusdate').focus();
//            return false;
//        }
//        else if (document.activeElement.id == "txtstatusdate") {
//            document.getElementById('txtindustry').focus();
//            return false;
//        }
//        else if (document.activeElement.id == "txtindustry") {
//            document.getElementById('drpwelwiscd').focus();
//            return false;
//        }
//        else if (document.activeElement.id == "drpwelwiscd") {
//            document.getElementById('drppaymode').focus();
//            return false;
//        }
//        else if (document.activeElement.id == "drppaymode") {
//            document.getElementById('txtstatuscause').focus();
//            return false;
//        }
//        else if (document.activeElement.id == "txtstatuscause") {
//            document.getElementById('txtconfirndate').focus();
//            return false;
//        }
//        else if (document.activeElement.id == "txtconfirndate") {
//            document.getElementById('txtbank').focus();
//            return false;
//        }
//        else if (document.activeElement.id == "txtbank") {
//            document.getElementById('txtbookingalert').focus();
//            return false;
//        }
//        else if (document.activeElement.id == "txtbookingalert") {
//            document.getElementById('txchkno').focus();
//            return false;
//        }
//        else if (document.activeElement.id == "txchkno") {
//            document.getElementById('txtremark').focus();
//            return false;
//        }
//        else if (document.activeElement.id == "txtremark") {
//            document.getElementById('txtchkdate').focus();
//            return false;
//        }


//    }
//}


//    //if (document.activeElement.id == "txtcity" && key == 9) {
//    //    if (document.getElementById("divcity").style.display != "none") {
//    //        document.getElementById("divcity").style.display = "none";
//    //        document.getElementById('drptaluka').focus();
//    //        return false;
//    //    }

//    //}

//}


