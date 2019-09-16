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
        ClientMaster.Bindindustr(hiddencompcode.value, pindustry, psecrchtype, extra, bindindustry_callback);

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
        document.getElementById('txtoldclient').focus();
        return false;
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
        ClientMaster.Bindindustr(hiddencompcode.value, pindustry, "G", "", bindindustry_callback);

    }
    //return false;
}
function bindindustry_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("istindustry");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("  ------Select Industry------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].INDUSTRY_NAME, ds.Tables[0].Rows[i].INDUSTRY_CODE);
        }


    }

    document.getElementById('hiddenindustry').value = "";
    document.getElementById("istindustry").value = "0";
    document.getElementById('istindustry').selectedIndex = 1;

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

function Focusindus() {
    if (document.getElementById('txtindustry').value == "  ------Select Industry------") {
        document.getElementById('txtindustry').value = "";
    }
    document.getElementById('txtindustry').style.textAlign = "left";
    document.getElementById('txtindustry').style.color = "black";
    document.getElementById('txtindustry').style.backgroundColor = "#99FFFF";
}
function Blurindus() {
    if (document.getElementById('txtindustry').value == "") {
        document.getElementById('txtindustry').value = "";
        document.getElementById('txtindustry').value = "  ------Select Industry------";
        document.getElementById('txtindustry').style.textAlign = "center";
        document.getElementById('txtindustry').style.color = "gray";
    }

    else {
        document.getElementById('txtindustry').style.textAlign = "left";
        document.getElementById('txtindustry').style.color = "black";
    }

    document.getElementById('txtindustry').style.backgroundColor = "white";
    return false;
}

/*******************************************city F2*********************************************/
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
        ClientMaster.Bindcityname(country, cityname, extra, bindcity_callback);
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
    else if (key == 9) {
        document.getElementById("divcity").style.display = "none";
        document.getElementById('drptaluka').focus();
        return false;
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
        ClientMaster.Bindcityname(country, cityname, extra, bindcity_callback);

    }
}
function bindcity_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("lstcity");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("    -------Select City-------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].CITY_NAME, ds.Tables[0].Rows[i].CITY_CODE + "~" + ds.Tables[0].Rows[i].DIST_CODE + "~" + ds.Tables[0].Rows[i].DIST_NAME + "~" + ds.Tables[0].Rows[i].STATE_CODE + "~" + ds.Tables[0].Rows[i].STATE_NAME + "~" + ds.Tables[0].Rows[i].ZONE_CODE + "~" + ds.Tables[0].Rows[i].ZONE_NAME + "~" + ds.Tables[0].Rows[i].REGION_CODE + "~" + ds.Tables[0].Rows[i].REGION_NAME);
        }


    }

    document.getElementById('hdncity').value = "";
    document.getElementById("lstcity").value = "0";
    document.getElementById('hdnDistrict').value = "";
    document.getElementById('txtDistrict').value = "";
    document.getElementById('hdnState').value = "";
    document.getElementById('txtState').value = "";

    document.getElementById('hdnZone').value = "";
    document.getElementById('txtZone').value = "";
    document.getElementById('hdnRegion').value = "";
    document.getElementById('txtRegion').value = "";
    document.getElementById('lstcity').selectedIndex = 1;


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

function Focuscity() {
    if (document.getElementById('txtcity').value == "    -------Select City-------") {
        document.getElementById('txtcity').value = "";
    }
    document.getElementById('txtcity').style.textAlign = "left";
    document.getElementById('txtcity').style.color = "black";
    document.getElementById('txtcity').style.backgroundColor = "#99FFFF";
}
function Blurcity() {
    if (document.getElementById('txtcity').value == "") {
        document.getElementById('txtcity').value = "";
        document.getElementById('txtcity').value = "    -------Select City-------";
        document.getElementById('txtcity').style.textAlign = "center";
        document.getElementById('txtcity').style.color = "gray";
    }

    else {
        document.getElementById('txtcity').style.textAlign = "left";
        document.getElementById('txtcity').style.color = "black";
    }

    document.getElementById('txtcity').style.backgroundColor = "white";
    return false;
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

//function popcloseclick() {
//    window.close();
//}

function OpenContactDetails() {
    if (document.getElementById('btnContactDetails').disabled != true) {
        if (document.getElementById('drpclientcat').value == "0") {
            alert("Please Select Client Category");
            if (document.getElementById('drpclientcat').disabled == false)
                document.getElementById('drpclientcat').focus();
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

        if (document.getElementById('hiddentext').value == "") {
            return false;
        }
        var ClientCode = "";
        if (document.getElementById('hiddentext').value == "new")
            ClientCode = document.getElementById('tmpclientcode').value;
        else
            ClientCode = document.getElementById('txtclientcode').value;

        var win = window.open("ClientContDet.aspx?ClientCode=" + ClientCode + "&ShowMode=" + hiddentext.value, 'ClientContact', 'width=' + screen.availWidth + ',height=' + screen.availHeight + ' ,status=0,toolbar=0,resizable=1,width=1000px,height=600px,top=50,left=210,scrollbars=yes');
        // win.focus();
    }
    return false
}

function Hidelable(res) {
    document.getElementById('hdnLabelclick').value = res;
    document.getElementById('Button1').click();
    return true;
}

function Entertabfun(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    document.onkeydown = function (e) {
        if (e != undefined) {

            if (e.ctrlKey && e.keyCode === 83) {

                e.preventDefault();
                if (document.getElementById('btnSave').disabled == false) {

                    document.getElementById('btnSave').click();
                    return false;

                }

            }
            else if (e.ctrlKey && e.keyCode === 13) {
                e.preventDefault();
                if (document.getElementById('btnCreate').disabled == false) {

                    document.getElementById('btnCreate').click();
                    return false;
                }
                if (document.getElementById('detail').style.display == "none") {

                    if (document.getElementById('btnNew').disabled == false) {
                        document.getElementById('btnNew').click();
                        return false;
                    }
                }


            }
            else if (e.ctrlKey && e.keyCode === 82) {
                e.preventDefault();
                if (document.getElementById('btnClear').disabled == false) {

                    document.getElementById('btnClear').click();
                    return false;

                }

            }
            else if (e.ctrlKey && e.keyCode === 77) {
                e.preventDefault();
                if (document.getElementById('btnedit').disabled == false) {

                    document.getElementById('btnedit').click();
                    return false;

                }

            }
            else if (e.ctrlKey && e.keyCode === 69) {
                e.preventDefault();
                if (document.getElementById('btnlist').disabled == false) {

                    document.getElementById('btnlist').click();
                    return false;

                }

            }
            else if (e.ctrlKey && e.keyCode === 70) {
                e.preventDefault();
                if (document.getElementById('btnform').disabled == false) {

                    document.getElementById('btnform').click();
                    return false;

                }
            }
            else if (e.ctrlKey && e.keyCode === 39) {
                e.preventDefault();
                if (document.getElementById('btnnext').disabled == false) {

                    document.getElementById('btnnext').click();
                    return false;

                }
            }
            else if (e.ctrlKey && e.keyCode === 35) {
                e.preventDefault();
                if (document.getElementById('btnlast').disabled == false) {

                    document.getElementById('btnlast').click();
                    return false;

                }
            }
            else if (e.ctrlKey && e.keyCode === 46) {
                e.preventDefault();
                if (document.getElementById('btndelete').disabled == false) {

                    document.getElementById('btndelete').click();
                    return false;

                }

            }
            else if (e.ctrlKey && e.keyCode === 36) {
                e.preventDefault();
                if (document.getElementById('btnfirst').disabled == false) {
                    document.getElementById('btnfirst').click();
                    //FirstClick();
                    return false;
                }
            }
            else if (e.ctrlKey && e.keyCode === 37) {
                e.preventDefault();
                if (document.getElementById('btnprevious').disabled == false) {
                    document.getElementById('btnprevious').click();
                    //PreviousClick();
                    return false;
                }
            }
            else if (e.ctrlKey && e.keyCode === 88) {
                e.preventDefault();
                if (document.getElementById('btnexit').disabled == false) {
                    document.getElementById('btnexit').click();
                    //ExitClick();
                    return false;
                }
            }
        }
    };



    if (key == 13) {
        if (document.activeElement.id == "drpcenter") {
            if (document.getElementById('drpclientcat').disabled == false)
                document.getElementById('drpclientcat').focus();
            return false;
        }
        if (document.activeElement.id == "drpclientcat") {
            if (document.getElementById('txtclientname').disabled == false)
                document.getElementById('txtclientname').focus();
            return false;
        }
        if (document.activeElement.id == "txtclientname") {
            if (document.getElementById('txtclientnick').disabled == false)
                document.getElementById('txtclientnick').focus();
            return false;
        }
        if (document.activeElement.id == "txtclientnick") {
            if (document.getElementById('txtadd1').disabled == false)
                document.getElementById('txtadd1').focus();
            return false;

        }
        if (document.activeElement.id == "txtadd1") {
            if (document.getElementById('txtadd2').disabled == false)
                document.getElementById('txtadd2').focus();
            return false;
        }
        if (document.activeElement.id == "txtadd2") {
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
            if (document.getElementById('txtoldclient').disabled == false)
                document.getElementById('txtoldclient').focus();
            return false;
        }
        if (document.activeElement.id == "txtoldclient") {
            if (document.getElementById('drpratetype').disabled == false)
                document.getElementById('drpratetype').focus();
            return false;
        }
        if (document.activeElement.id == "drpratetype") {
            if (document.getElementById('txtstatuscause').disabled == false)
                document.getElementById('txtstatuscause').focus();
            return false;
        }
        if (document.activeElement.id == "txtstatuscause") {
            if (document.getElementById('txtbookingalert').disabled == false)
                document.getElementById('txtbookingalert').focus();
            return false;
        }
        if (document.activeElement.id == "txtbookingalert") {
            if (document.getElementById('txtremark').disabled == false)
                document.getElementById('txtremark').focus();
            return false;
        }

        if (document.activeElement.id == "txtremark") {
            if (document.getElementById('btnSave').disabled == false)
                document.getElementById('btnSave').focus();
            return false;
        }

        else if (document.activeElement.type == "button" || document.activeElement.type == "submit" || document.activeElement.type == "image") {
            return key;
        }
    }
}



function EnterFloat(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (event.shiftKey == true)
        return false;
    if ((key >= 48 && key <= 57) || (key == 9) || (key == 11) || (key == 13) || (key == 46) || (key == 37) || (key == 39) || (key == 8)) {

        return true;
    }
    else {
        alert('only numeric value!!');
        return false;
    }
}
