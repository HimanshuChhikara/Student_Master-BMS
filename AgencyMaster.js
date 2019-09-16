function Bindcity(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtcity") {


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
        AgencyMaster.Bindcityname(country, cityname, extra, bindcity_callback);
    }
    //else if (event.shiftKey && event.keyCode == 9) {
    //    document.getElementById('drpcountry').focus();
    //    return false;
    //}
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtcity") {
            document.getElementById('hdnCity').value = "";
        }
    }
    else if (key == 27 || (key == 16) || (key == 17)) {
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

    //else if (key == 9 && (event.shiftKey && event.keyCode != 9)) {
    //    document.getElementById("divcity").style.display = "none";
    //    document.getElementById('drpcountry').focus();
    //    return false;
    //}

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
        var toppos = 20;
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
        AgencyMaster.Bindcityname(country, cityname, extra, bindcity_callback);

    }
}
function bindcity_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("lstcity");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("      ----- Select City-----", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].CITY_NAME, ds.Tables[0].Rows[i].CITY_CODE + "~" + ds.Tables[0].Rows[i].DIST_CODE + "~" + ds.Tables[0].Rows[i].DIST_NAME + "~" + ds.Tables[0].Rows[i].STATE_CODE + "~" + ds.Tables[0].Rows[i].STATE_NAME + "~" + ds.Tables[0].Rows[i].ZONE_CODE + "~" + ds.Tables[0].Rows[i].ZONE_NAME + "~" + ds.Tables[0].Rows[i].REGION_CODE + "~" + ds.Tables[0].Rows[i].REGION_NAME);
        }


    }

    document.getElementById('hdnCity').value = "";
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
            alert("Please Select City Name");
            return false;
        }
        else {
            document.getElementById("divcity").style.display = "none";
            var lstvalue = document.getElementById('lstcity').value;
            for (var k = 0; k < document.getElementById("lstcity").length; k++) {
                if (document.getElementById('lstcity').options[k].value == lstvalue) {
                    var citycodename = document.getElementById('lstcity').options[k].value;
                    citycodename = citycodename.split("~");
                    document.getElementById('hdnCity').value = fndnull1(citycodename[0]);
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

function Focuscity() {
    if (document.getElementById('txtcity').value == "      ----- Select City-----") {
        document.getElementById('txtcity').value = "";
    }
    document.getElementById('txtcity').style.textAlign = "left";
    document.getElementById('txtcity').style.color = "black";
    document.getElementById('txtcity').style.backgroundColor = "#99FFFF";
}
function Blurcity() {
    if (document.getElementById('txtcity').value == "") {
        document.getElementById('txtcity').value = "";
        document.getElementById('txtcity').value = "      ----- Select City-----";
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


function Bindmainagenct(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtpagency") {


        document.getElementById("divagency").style.display = "block";
        aTag = eval(document.getElementById("txtpagency"))
        var btag;
        var leftpos = 0;
        var toppos = 25;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divagency').scrollLeft;
        var scrolltop = document.getElementById('divagency').scrollTop;
        document.getElementById('divagency').style.left = document.getElementById("txtpagency").offsetLeft + leftpos - tot + "px";
        document.getElementById('divagency').style.top = document.getElementById("txtpagency").offsetTop + toppos - scrolltop + "px"; //"510px";
        var PEXTRA = "P";
        var PDESC = document.getElementById('txtpagency').value.toUpperCase()
        var PCOMP_CODE = document.getElementById('hiddencompcode').value;
        var PCENT_CODE = document.getElementById('hiddencenter').value;
        var PSEACH = "";
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        AgencyMaster.Bindmainagency(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindmainagency_callback);

    }

    else if ((key == 8) || (key == 46 )) {
        if (document.activeElement.id == "txtpagency") {
            document.getElementById('txtagencycode').value = "";
        }
    }
    else if (key == 27 || key == 16 || key == 17) {
        document.getElementById("divagency").style.display = "none";
        document.getElementById('txtpagency').focus();
        return false;
    }
    else if (key ==9) {
        document.getElementById("divagency").style.display = "none";
        document.getElementById('txtagencyname').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "lstagency") {
            filllmainagencyname(event);
            document.getElementById('txtpagency').focus();
            return false;
        }
        
    }
    else if (key == 38) {
        if (document.getElementById("divagency").style.display == "block") {
            if (document.getElementById('lstagency').value == '0') {
                document.getElementById('txtpagency').focus();
            }
        }
    }

    else if (key == 40) {
        if (document.getElementById("divagency").style.display == "block") {
            document.getElementById("lstagency").focus();
        }
    }

    else {
        document.getElementById("divagency").style.display = "block";
        aTag = eval(document.getElementById("txtpagency"))
        var btag;
        var leftpos = 0;
        var toppos = 25;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divagency').scrollLeft;
        var scrolltop = document.getElementById('divagency').scrollTop;
        document.getElementById('divagency').style.left = document.getElementById("txtpagency").offsetLeft + leftpos - tot + "px";
        document.getElementById('divagency').style.top = document.getElementById("txtpagency").offsetTop + toppos - scrolltop + "px"; //"510px";
        var PEXTRA = "P";
        var PDESC = document.getElementById('txtpagency').value.toUpperCase()
        var PCOMP_CODE = document.getElementById('hiddencompcode').value;
        var PCENT_CODE = document.getElementById('hiddencenter').value;
        var PSEACH = "G";
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        AgencyMaster.Bindmainagency(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindmainagency_callback);

    }
    //return false;
}
function bindmainagency_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("lstagency");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select Main  Agency---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].AGENCY_NAME, ds.Tables[0].Rows[i].AGENCY_CODE);
        }


    }

    document.getElementById('txtagencycode').value = "";
    document.getElementById("lstagency").selectedIndex = 1;
     //document.getElementById("lstagency").focus();
    return false;
}

function filllmainagencyname(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 27) {
        if (document.activeElement.id == "txtpagency" || document.activeElement.id == "lstagency") {
            document.getElementById("divagency").style.display = "none";
            document.getElementById('txtpagency').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {

        if (document.getElementById("lstagency").value == "0") {
            // alert("Please Select Agency Name");
            return false;
        }
        else {
            document.getElementById("divagency").style.display = "none";
            var lstvalue = document.getElementById('lstagency').value;
            for (var k = 0; k < document.getElementById("lstagency").length; k++) {
                if (document.getElementById('lstagency').options[k].value == lstvalue) {
                    document.getElementById('txtagencycode').value = document.getElementById('lstagency').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtpagency').value = document.getElementById('lstagency').options[k].textContent;
                    else
                        document.getElementById('txtpagency').value = document.getElementById('lstagency').options[k].innerText;

                    break;
                }
            }
        }
        document.getElementById('txtpagency').focus();
        document.getElementById('btnb').click();
       
        return false;
    }

}

//////////////////comm detail//////////////////
function OpenCommDetails() {
    if (document.getElementById('btnCommDet').disabled != true) {
        if (document.getElementById('drpbranch').value == "0") {
            alert("Please Select Branch");
            if (document.getElementById('drpbranch').disabled == false)
                document.getElementById('drpbranch').focus();
            return false;
        }

        if (document.getElementById('txtagencyname').value == "") {
            alert("Please Enter Agency Name");
            document.getElementById('txtagencyname').focus();
            return false;
        }

        if (document.getElementById('txtagencynick').value == "") {
            alert("Please Enter Agency Nick");
            document.getElementById('txtagencynick').focus();
            return false;
        }

        if (document.getElementById('drpagencytype').value == "0") {
            alert("Please Select Agency Type");
            if (document.getElementById('drpagencytype').disabled == false)
                document.getElementById('drpagencytype').focus();
            return false;
        }

        if (hiddentext.value == "") {
            return false;
        }
        var AgCode = "";
        var SubAgcode = "";
        var commrate = document.getElementById('hdncomrate').value;
        if (hiddentext.value == "new") {
            AgCode = document.getElementById('tmpagencycode').value;
            SubAgcode = document.getElementById('tmpagencycode').value;
        }
        else {
            AgCode = document.getElementById('txtagencycode').value;
            SubAgcode = document.getElementById('txtsubagencycode').value;
        }

        var win = window.open("Ag_Comm_Det.aspx?AgCode=" + AgCode + "&SubAgcode=" + SubAgcode + "&commrate=" + commrate + "&ShowMode=" + hiddentext.value, 'AgencyMaster', 'width=' + screen.availWidth + ',height=' + screen.availHeight + ' ,status=0,toolbar=0,resizable=1,left=0,top=0,scrollbars=yes');
        // win.focus();
    }
    return false
}
function PopCloseClick() {
    window.close();

}
////////////////////////payment details popup////////////////
function OpenPayDetails() {
    if (document.getElementById('btnPayMode').disabled != true) {
        if (document.getElementById('drpbranch').value == "0") {
            alert("Please Select Branch");
            if (document.getElementById('drpbranch').disabled == false)
                document.getElementById('drpbranch').focus();
            return false;
        }

        if (document.getElementById('txtagencyname').value == "") {
            alert("Please Enter Agency Name");
            document.getElementById('txtagencyname').focus();
            return false;
        }

        if (document.getElementById('txtagencynick').value == "") {
            alert("Please Enter Agency Nick");
            document.getElementById('txtagencynick').focus();
            return false;
        }

        if (hiddentext.value == "") {
            return false;
        }
        var AgCode = "";
        var SubAgcode = "";
        if (hiddentext.value == "new") {
            AgCode = document.getElementById('tmpagencycode').value;
            SubAgcode = document.getElementById('tmpagencycode').value;
        }
        else {
            AgCode = document.getElementById('txtagencycode').value;
            SubAgcode = document.getElementById('txtsubagencycode').value;
        }

        var win = window.open("Ag_pay_det.aspx?AgCode=" + AgCode + "&SubAgcode=" + SubAgcode + "&ShowMode=" + hiddentext.value, 'AgencyMaster', 'width=420px,height=350px ,status=0,toolbar=0,resizable=1,top=244,left=210,scrollbars=yes');
        // win.focus();
    }
    return false
}
//////////////////////////contact detail pop up//////////////////////
function OpenContactDetails() {
    if (document.getElementById('btnContactDetails').disabled != true) {
        if (document.getElementById('drpbranch').value == "0") {
            alert("Please Select Branch");
            if (document.getElementById('drpbranch').disabled == false)
                document.getElementById('drpbranch').focus();
            return false;
        }

        if (document.getElementById('txtagencyname').value == "") {
            alert("Please Enter Agency Name");
            document.getElementById('txtagencyname').focus();
            return false;
        }

        if (document.getElementById('txtagencynick').value == "") {
            alert("Please Enter Agency Nick");
            document.getElementById('txtagencynick').focus();
            return false;
        }

        if (hiddentext.value == "") {
            return false;
        }
        var AgCode = "";
        var SubAgcode = "";
        if (hiddentext.value == "new") {
            AgCode = document.getElementById('tmpagencycode').value;
            SubAgcode = document.getElementById('tmpagencycode').value;
        }
        else {
            AgCode = document.getElementById('txtagencycode').value;
            SubAgcode = document.getElementById('txtsubagencycode').value;
        }

        var win = window.open("Ag_Cont_Det.aspx?AgCode=" + AgCode + "&SubAgcode=" + SubAgcode + "&ShowMode=" + hiddentext.value, 'AgencyMaster', 'width=' + screen.availWidth + ',height=' + screen.availHeight + ' ,status=0,toolbar=0,resizable=1,left=0,top=0,scrollbars=yes');
        // win.focus();
    }
    return false
}
function Entertabagcont(event) {
    var browser = navigator.appName;
    var key = event.keyCode ? event.keyCode : event.which;
    if ((key == 13)) {
        if (document.activeElement.id == "txtContpersion") {
            if (document.getElementById('drpdesig').disabled == false)
                document.getElementById('drpdesig').focus();
            return false;
        }

        else if (document.activeElement.id == "drpdesig") {
            if (document.getElementById('txtPhone1').disabled == false)
                document.getElementById('txtPhone1').focus();
            return false;
        }
        else if (document.activeElement.id == "txtPhone1") {
            if (document.getElementById('txtPhone2').disabled == false)
                document.getElementById('txtPhone2').focus();
            return false;
        }
        else if (document.activeElement.id == "txtPhone2") {
            if (document.getElementById('txtfax1').disabled == false)
                document.getElementById('txtfax1').focus();
            return false;
        }
        else if (document.activeElement.id == "txtfax1") {
            if (document.getElementById('txtfax2').disabled == false)
                document.getElementById('txtfax2').focus();
            return false;
        }
        else if (document.activeElement.id == "txtfax2") {
            if (document.getElementById('txtemail1').disabled == false)
                document.getElementById('txtemail1').focus();
            return false;
        }
        else if (document.activeElement.id == "txtemail1") {
            if (document.getElementById('txtemail2').disabled == false)
                document.getElementById('txtemail2').focus();
            return false;
        }
        else if (document.activeElement.id == "txtemail2") {
            if (document.getElementById('txtdateofbirth').disabled == false)
                document.getElementById('txtdateofbirth').focus();
            return false;
        }
        else if (document.activeElement.id == "txtdateofbirth") {
            if (document.getElementById('txtremark').disabled == false)
                document.getElementById('txtremark').focus();
            return false;
        }
        else if (document.activeElement.id == "txtremark") {
            if (document.getElementById('btnSubmit').disabled == false)
                document.getElementById('btnSubmit').focus();
            return false;
        }
    }
    
}


function Entertabfun(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    document.onkeydown = function (e) {
        if (e != undefined) {

            if (e.ctrlKey && e.keyCode === 83) {

                e.preventDefault();
                if (document.getElementById('btnsave').disabled == false) {

                    document.getElementById('btnsave').click();
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
                if (document.getElementById('btnclear').disabled == false) {

                    document.getElementById('btnclear').click();
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
                if (document.getElementById('btnlistview').disabled == false) {

                    document.getElementById('btnlistview').click();
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
            else if (e.ctrlKey && e.keyCode === 39) {
                e.preventDefault();
                if (document.getElementById('btnnext').disabled == false) {
                    document.getElementById('btnnext').click();
                    //NextClick();
                    return false;
                }
            }
            else if (e.ctrlKey && e.keyCode === 35) {
                e.preventDefault();
                if (document.getElementById('btnlast').disabled == false) {
                    document.getElementById('btnlast').click();
                    //LastClick();
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
            else {
                return true;
            }


        }

    };
    if ((key == 13)) {
        if (document.activeElement.id == "drptype") {
            if (document.getElementById('drpbranch').disabled == false)
                document.getElementById('drpbranch').focus();
            return false;
        }
        else if (document.activeElement.id == "drpbranch") {
            if (document.getElementById('txtoldagency').disabled == false)
                document.getElementById('txtoldagency').focus();
            else
                document.getElementById('txtagencyname').focus();
            return false;

        }
        else if (document.activeElement.id == "txtoldagency") {
            if (document.getElementById('drptype').value == 'C')
                document.getElementById('txtpagency').focus();
            else
                document.getElementById('txtagencyname').focus();
            return false;
        }
        else if (document.activeElement.id == "txtpagency") {
            if (document.getElementById("divagency").style.display != "none") {
                filllmainagencyname(event);
                document.getElementById('txtpagency').focus();
            }
            else if (document.getElementById('txtagencyname').disabled == false) {
                document.getElementById('txtagencyname').focus();
            }
            return false;
        }
            //else if (document.activeElement.id == "btnb") {
            //    if (document.getElementById('txtagencyname').disabled == false)
            //        document.getElementById('txtagencyname').focus();
            //    return false;
            //}
        else if (document.activeElement.id == "txtagencyname") {
            if (document.getElementById('txtagencynick').disabled == false)
                document.getElementById('txtagencynick').focus();
            return false;
        }

        else if (document.activeElement.id == "txtagencynick") {
            if (document.getElementById('drpagcat').disabled == false)
                document.getElementById('drpagcat').focus();
            return false;
        }
        else if (document.activeElement.id == "drpagcat") {
            if (document.getElementById('drpagencytype').disabled == false)
                document.getElementById('drpagencytype').focus();
            return false;
        }

        else if (document.activeElement.id == "drpagencytype") {
            if (document.getElementById('txtadd1').disabled == false)
                document.getElementById('txtadd1').focus();
            return false;
        }
        else if (document.activeElement.id == "txtadd1") {
            if (document.getElementById('txtcreditday').disabled == false)
                document.getElementById('txtcreditday').focus();
            return false;
        }
        else if (document.activeElement.id == "txtcreditday") {
            if (document.getElementById('txtcreditlimit').disabled == false)
                document.getElementById('txtcreditlimit').focus();
            return false;
        }
        else if (document.activeElement.id == "txtcreditlimit") {
            if (document.getElementById('txtadd2').disabled == false)
                document.getElementById('txtadd2').focus();
            return false;
        }
        else if (document.activeElement.id == "txtadd2") {
            if (document.getElementById('txtpan').disabled == false)
                document.getElementById('txtpan').focus();
            return false;
        }
        else if (document.activeElement.id == "txtpan") {
            if (document.getElementById('txttanno').disabled == false)
                document.getElementById('txttanno').focus();
            return false;
        }
        else if (document.activeElement.id == "txttanno") {
            if (document.getElementById('drpcountry').disabled == false)
                document.getElementById('drpcountry').focus();
            return false;
        }
        else if (document.activeElement.id == "drpcountry") {
            if (document.getElementById('txtcity').disabled == false)
                document.getElementById('txtcity').focus();
            return false;
        }
        else if (document.activeElement.id == "txtcity") {
            if (document.getElementById("divcity").style.display != "none") {
                filllcity(event);
            }
            if (document.getElementById('drptaluka').disabled == false)
                document.getElementById('drptaluka').focus();
            return false;
        }
        else if (document.activeElement.id == "drptaluka") {
            if (document.getElementById('txtservtxno').disabled == false)
                document.getElementById('txtservtxno').focus();
            return false;
        }
        else if (document.activeElement.id == "txtservtxno") {
            if (document.getElementById('txtpostcode').disabled == false)
                document.getElementById('txtpostcode').focus();
            return false;
        }
        else if (document.activeElement.id == "txtpostcode") {
            if (document.getElementById('drprepresentative').disabled == false)
                document.getElementById('drprepresentative').focus();
            return false;
        }
        else if (document.activeElement.id == "drprepresentative") {
            if (document.getElementById('txtphone1').disabled == false)
                document.getElementById('txtphone1').focus();
            return false;
        }
        else if (document.activeElement.id == "txtphone1") {
            if (document.getElementById('txtphone2').disabled == false)
                document.getElementById('txtphone2').focus();
            return false;
        }
        else if (document.activeElement.id == "txtphone2") {
            if (document.getElementById('txtdesigbillon').disabled == false)
                document.getElementById('txtdesigbillon').focus();
            return false;

        }
        else if (document.activeElement.id == "txtdesigbillon") {
            if (document.getElementById('txtfax1').disabled == false)
                document.getElementById('txtfax1').focus();
            return false;
        }
        else if (document.activeElement.id == "txtfax1") {
            if (document.getElementById('txtfax2').disabled == false)
                document.getElementById('txtfax2').focus();
            return false;
        }
        else if (document.activeElement.id == "txtfax2") {
            if (document.getElementById('drpbillingtype').disabled == false)
                document.getElementById('drpbillingtype').focus();
            return false;
        }



            //else if (document.activeElement.id == "txtoldagency") {
            //    if (document.getElementById('drpagencytype').disabled == false)
            //        document.getElementById('drpagencytype').focus();
            //    return false;
            //}
        else if (document.activeElement.id == "drpbillingtype") {
            if (document.getElementById('txtemailid').disabled == false)
                document.getElementById('txtemailid').focus();
            return false;
        }
        else if (document.activeElement.id == "txtemailid") {
            if (document.getElementById('txtwebsite').disabled == false)
                document.getElementById('txtwebsite').focus();
            return false;
        }
        else if (document.activeElement.id == "txtwebsite") {
            if (document.getElementById('drpbillingto').disabled == false)
                document.getElementById('drpbillingto').focus();
            return false;
        }
        else if (document.activeElement.id == "drpbillingto") {
            if (document.getElementById('drpbillto').disabled == false)
                document.getElementById('drpbillto').focus();
            return false;
        }
        else if (document.activeElement.id == "drpbillto") {
            if (document.getElementById('drpstatus').disabled == false)
                document.getElementById('drpstatus').focus();
            return false;
        }
        else if (document.activeElement.id == "drpstatus") {
            if (document.getElementById('txtstatusdate').disabled == false)
                document.getElementById('txtstatusdate').focus();
            return false;
        }
        else if (document.activeElement.id == "txtstatusdate") {
            if (document.getElementById('txtstatuscause').disabled == false)
                document.getElementById('txtstatuscause').focus();
            return false;
        }
        else if (document.activeElement.id == "txtstatuscause") {
            if (document.getElementById('txtbookingalert').disabled == false)
                document.getElementById('txtbookingalert').focus();
            return false;
        }
        else if (document.activeElement.id == "txtbookingalert") {
            if (document.getElementById('txtremark').disabled == false)
                document.getElementById('txtremark').focus();
            return false;
        }

        else if (document.activeElement.id == "txtremark") {
            if (document.getElementById('btnsave').disabled == false)
                document.getElementById('btnsave').focus();
            return false;
        }



        else if (document.activeElement.type == "button" || document.activeElement.type == "submit" || document.activeElement.type == "image") {
            //event.keyCode = 13;
            return key;
            //            return event.keyCode;

        }


    }
    if (event.shiftKey && event.keyCode == 9) {
        if (document.activeElement.id == "drpbranch") {

            document.getElementById('drptype').focus();
            return false;

        }
        else if (document.activeElement.id == "txtoldagency") {
            document.getElementById('drpbranch').focus();
            return false;
        }
        else if (document.activeElement.id == "txtagencyname") {

            document.getElementById('txtoldagency').focus();

            return false;
        }

        else if (document.activeElement.id == "txtagencynick") {
            document.getElementById('txtagencyname').focus();
            return false;
        }
        else if (document.activeElement.id == "drpagcat") {
            document.getElementById('txtagencynick').focus();
            return false;
        }
        else if (document.activeElement.id == "drpagencytype") {
            document.getElementById('drpagcat').focus();
            return false;
        }
        else if (document.activeElement.id == "txtadd1") {
            document.getElementById('drpagencytype').focus();
            return false;
        }
        else if (document.activeElement.id == "txtcreditday") {
            document.getElementById('txtadd1').focus();
            return false;
        }
        else if (document.activeElement.id == "txtcreditlimit") {
            document.getElementById('txtcreditday').focus();
            return false;
        }
        else if (document.activeElement.id == "txtadd2") {
            document.getElementById('txtcreditlimit').focus();
            return false;
        }
        else if (document.activeElement.id == "txtpan") {
            document.getElementById('txtadd2').focus();
            return false;
        }
        else if (document.activeElement.id == "txttanno") {
            document.getElementById('txtpan').focus();
            return false;
        }
        else if (document.activeElement.id == "drpcountry") {
            document.getElementById('txttanno').focus();
            return false;
        }
        else if (document.activeElement.id == "txtcity") {

            document.getElementById("divcity").style.display = "none";
            document.getElementById('drpcountry').focus();
            return false;
        }
        else if (document.activeElement.id == "drptaluka") {
            document.getElementById('txtcity').focus();
            return false;
        }
        else if (document.activeElement.id == "txtservtxno") {
            document.getElementById('drptaluka').focus();
            return false;
        }
        else if (document.activeElement.id == "txtpostcode") {
            document.getElementById('txtservtxno').focus();
            return false;
        }
        else if (document.activeElement.id == "drprepresentative") {
            document.getElementById('txtpostcode').focus();
            return false;
        }
        else if (document.activeElement.id == "txtphone1") {
            document.getElementById('drprepresentative').focus();
            return false;
        } else if (document.activeElement.id == "txtphone2") {
            document.getElementById('txtphone1').focus();
            return false;
        }
        else if (document.activeElement.id == "txtdesigbillon") {
            document.getElementById('txtphone2').focus();
            return false;
        }
        else if (document.activeElement.id == "txtfax1") {
            document.getElementById('txtdesigbillon').focus();
            return false;
        }
        else if (document.activeElement.id == "txtfax2") {
            document.getElementById('txtfax1').focus();
            return false;
        }
        else if (document.activeElement.id == "drpbillingtype") {
            document.getElementById('txtfax2').focus();
            return false;
        }
        else if (document.activeElement.id == "txtemailid") {
            document.getElementById('drpbillingtype').focus();
            return false;
        }
        else if (document.activeElement.id == "txtwebsite") {
            document.getElementById('txtemailid').focus();
            return false;
        }
        else if (document.activeElement.id == "drpbillingto") {
            document.getElementById('txtwebsite').focus();
            return false;
        }
        else if (document.activeElement.id == "drpbillto") {
            document.getElementById('drpbillingto').focus();
            return false;
        }
        else if (document.activeElement.id == "drpstatus") {
            document.getElementById('drpbillto').focus();
            return false;
        }
        else if (document.activeElement.id == "txtstatusdate") {
            document.getElementById('drpstatus').focus();
            return false;
        }
        else if (document.activeElement.id == "txtstatuscause") {
            document.getElementById('txtstatusdate').focus();
            return false;
        }
        else if (document.activeElement.id == "txtbookingalert") {
            document.getElementById('txtstatuscause').focus();
            return false;
        }
        else if (document.activeElement.id == "txtremark") {
            document.getElementById('txtbookingalert').focus();
            return false;
        }


    }
    //if (document.activeElement.id == "txtpagency" && key == 9) {
    //    if (document.getElementById("divagency").style.display != "none") {
    //        document.getElementById("divagency").style.display = "none";
    //        document.getElementById('txtoldagency').focus();
    //        return false;
    //    }

    //}


    if (document.activeElement.id == "txtcity" && key == 9) {
        if (document.getElementById("divcity").style.display != "none") {
            document.getElementById("divcity").style.display = "none";
            document.getElementById('drptaluka').focus();
            return false;
        }

    }
    if ((key == 9)) {
        if (document.activeElement.id == "drptype") {
            if (document.getElementById('drpbranch').disabled == false)
                document.getElementById('drpbranch').focus();
            return false;
        }
        else if (document.activeElement.id == "drpbranch") {
            if (document.getElementById('txtoldagency').disabled == false)
                document.getElementById('txtoldagency').focus();
            else
                document.getElementById('txtagencyname').focus();
            return false;

        }
        else if (document.activeElement.id == "txtoldagency") {
            if (document.getElementById('drptype').value == 'C')
                document.getElementById('txtpagency').focus();
            else
                document.getElementById('txtagencyname').focus();
            return false;
        }
        else if (document.activeElement.id == "txtpagency") {
            if (document.getElementById("divagency").style.display != "none") {
                filllmainagencyname(event);
                document.getElementById('txtpagency').focus();
            }
            else if (document.getElementById('txtagencyname').disabled == false) {
                document.getElementById('txtagencyname').focus();
            }
            return false;
        }
            //else if (document.activeElement.id == "btnb") {
            //    if (document.getElementById('txtagencyname').disabled == false)
            //        document.getElementById('txtagencyname').focus();
            //    return false;
            //}
        else if (document.activeElement.id == "txtagencyname") {
            if (document.getElementById('txtagencynick').disabled == false)
                document.getElementById('txtagencynick').focus();
            return false;
        }

        else if (document.activeElement.id == "txtagencynick") {
            if (document.getElementById('drpagcat').disabled == false)
                document.getElementById('drpagcat').focus();
            return false;
        }
        else if (document.activeElement.id == "drpagcat") {
            if (document.getElementById('drpagencytype').disabled == false)
                document.getElementById('drpagencytype').focus();
            return false;
        }

        else if (document.activeElement.id == "drpagencytype") {
            if (document.getElementById('txtadd1').disabled == false)
                document.getElementById('txtadd1').focus();
            return false;
        }
        else if (document.activeElement.id == "txtadd1") {
            if (document.getElementById('txtcreditday').disabled == false)
                document.getElementById('txtcreditday').focus();
            return false;
        }
        else if (document.activeElement.id == "txtcreditday") {
            if (document.getElementById('txtcreditlimit').disabled == false)
                document.getElementById('txtcreditlimit').focus();
            return false;
        }
        else if (document.activeElement.id == "txtcreditlimit") {
            if (document.getElementById('txtadd2').disabled == false)
                document.getElementById('txtadd2').focus();
            return false;
        }
        else if (document.activeElement.id == "txtadd2") {
            if (document.getElementById('txtpan').disabled == false)
                document.getElementById('txtpan').focus();
            return false;
        }
        else if (document.activeElement.id == "txtpan") {
            if (document.getElementById('txttanno').disabled == false)
                document.getElementById('txttanno').focus();
            return false;
        }
        else if (document.activeElement.id == "txttanno") {
            if (document.getElementById('drpcountry').disabled == false)
                document.getElementById('drpcountry').focus();
            return false;
        }
        else if (document.activeElement.id == "drpcountry") {
            if (document.getElementById('txtcity').disabled == false)
                document.getElementById('txtcity').focus();
            return false;
        }
        else if (document.activeElement.id == "txtcity") {
            if (document.getElementById("divcity").style.display != "none") {
                filllcity(event);
            }
            if (document.getElementById('drptaluka').disabled == false)
                document.getElementById('drptaluka').focus();
            return false;
        }
        else if (document.activeElement.id == "drptaluka") {
            if (document.getElementById('txtservtxno').disabled == false)
                document.getElementById('txtservtxno').focus();
            return false;
        }
        else if (document.activeElement.id == "txtservtxno") {
            if (document.getElementById('txtpostcode').disabled == false)
                document.getElementById('txtpostcode').focus();
            return false;
        }
        else if (document.activeElement.id == "txtpostcode") {
            if (document.getElementById('drprepresentative').disabled == false)
                document.getElementById('drprepresentative').focus();
            return false;
        }
        else if (document.activeElement.id == "drprepresentative") {
            if (document.getElementById('txtphone1').disabled == false)
                document.getElementById('txtphone1').focus();
            return false;
        }
        else if (document.activeElement.id == "txtphone1") {
            if (document.getElementById('txtphone2').disabled == false)
                document.getElementById('txtphone2').focus();
            return false;
        }
        else if (document.activeElement.id == "txtphone2") {
            if (document.getElementById('txtdesigbillon').disabled == false)
                document.getElementById('txtdesigbillon').focus();
            return false;

        }
        else if (document.activeElement.id == "txtdesigbillon") {
            if (document.getElementById('txtfax1').disabled == false)
                document.getElementById('txtfax1').focus();
            return false;
        }
        else if (document.activeElement.id == "txtfax1") {
            if (document.getElementById('txtfax2').disabled == false)
                document.getElementById('txtfax2').focus();
            return false;
        }
        else if (document.activeElement.id == "txtfax2") {
            if (document.getElementById('drpbillingtype').disabled == false)
                document.getElementById('drpbillingtype').focus();
            return false;
        }



            //else if (document.activeElement.id == "txtoldagency") {
            //    if (document.getElementById('drpagencytype').disabled == false)
            //        document.getElementById('drpagencytype').focus();
            //    return false;
            //}
        else if (document.activeElement.id == "drpbillingtype") {
            if (document.getElementById('txtemailid').disabled == false)
                document.getElementById('txtemailid').focus();
            return false;
        }
        else if (document.activeElement.id == "txtemailid") {
            if (document.getElementById('txtwebsite').disabled == false)
                document.getElementById('txtwebsite').focus();
            return false;
        }
        else if (document.activeElement.id == "txtwebsite") {
            if (document.getElementById('drpbillingto').disabled == false)
                document.getElementById('drpbillingto').focus();
            return false;
        }
        else if (document.activeElement.id == "drpbillingto") {
            if (document.getElementById('drpbillto').disabled == false)
                document.getElementById('drpbillto').focus();
            return false;
        }
        else if (document.activeElement.id == "drpbillto") {
            if (document.getElementById('drpstatus').disabled == false)
                document.getElementById('drpstatus').focus();
            return false;
        }
        else if (document.activeElement.id == "drpstatus") {
            if (document.getElementById('txtstatusdate').disabled == false)
                document.getElementById('txtstatusdate').focus();
            return false;
        }
        else if (document.activeElement.id == "txtstatusdate") {
            if (document.getElementById('txtstatuscause').disabled == false)
                document.getElementById('txtstatuscause').focus();
            return false;
        }
        else if (document.activeElement.id == "txtstatuscause") {
            if (document.getElementById('txtbookingalert').disabled == false)
                document.getElementById('txtbookingalert').focus();
            return false;
        }
        else if (document.activeElement.id == "txtbookingalert") {
            if (document.getElementById('txtremark').disabled == false)
                document.getElementById('txtremark').focus();
            return false;
        }

        else if (document.activeElement.id == "txtremark") {
            if (document.getElementById('btnsave').disabled == false)
                document.getElementById('btnsave').focus();
            return false;
        }



        else if (document.activeElement.type == "button" || document.activeElement.type == "submit" || document.activeElement.type == "image") {
            //event.keyCode = 13;
            return key;
            //            return event.keyCode;

        }


    }

}
function textreason(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key != 13 && key != 9 && key != 8) {
        var agname = document.getElementById('txtstatuscause').value.length;
        if (document.getElementById('txtstatuscause').value.length > 50) {
            alert('Status Reason should not greater than 50');
            return false;

        }
    }
    return true;

}



function Hidelable(res) {
    document.getElementById('hdnLabelclick').value = res;
    document.getElementById('hide').click();
    return true;
}
function textln(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key != 13 && key != 9 && key != 8) {
        var agname = document.getElementById('txtagencyname').value.length;
        if (document.getElementById('txtagencyname').value.length > 50) {
            alert('Agency Name Length should not greater than 100 characters');
            return false;

        }
    }
    return true;

}

function textnick(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key != 13 && key != 9 && key != 8) {
        var agname = document.getElementById('txtagencynick').value.length;
        if (document.getElementById('txtagencynick').value.length > 50) {
            alert('Agency Nick Length should not greater than 50 characters');
            return false;

        }
    }
    return true;

}

function textadd1(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key != 13 && key != 9 && key != 8) {
        var agname = document.getElementById('txtadd1').value.length;
        if (document.getElementById('txtadd1').value.length > 100) {
            alert('Address1 Length should not greater than 100 characters');
            return false;

        }
    }
    return true;

}
function textadd2(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key != 13 && key != 9 && key != 8) {
        var agname = document.getElementById('txtadd2').value.length;
        if (document.getElementById('txtadd2').value.length > 100) {
            alert('Address2 Length should not greater than 100 characters');
            return false;

        }
    }
    return true;

}

function textalert(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key != 13 && key != 9 && key != 8) {
        var agname = document.getElementById('txtbookingalert').value.length;
        if (document.getElementById('txtbookingalert').value.length > 100) {
            alert('Alert should not greater than 100 characters');
            return false;

        }
    }
    return true;

}
function textremark(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key != 13 && key != 9 && key != 8) {
        var agname = document.getElementById('txtremark').value.length;
        if (document.getElementById('txtremark').value.length > 100) {
            alert('Remark should not greater than 100 characters');
            return false;

        }
    }
    return true;

}
function textdesignation(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key != 13 && key != 9 && key != 8) {
        var agname = document.getElementById('txtdesigbillon').value.length;
        if (document.getElementById('txtdesigbillon').value.length > 50) {
            alert('Designation on Bill should not greater than 50 characters');
            return false;

        }
    }
    return true;

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
function ValidatePAN() {
    var Obj = document.getElementById("txtpan");
    if (Obj.value != "") {
        ObjVal = Obj.value;
        var panPat = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;
        if (ObjVal.search(panPat) == -1) {
            alert("Invalid PAN No");
            Obj.focus();
            return false;
        }
        //else {
        //    alert("Correct PAN No");
        //}
    }
}


