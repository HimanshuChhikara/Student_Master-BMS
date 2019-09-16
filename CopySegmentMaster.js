function Bindprogtype(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtPragramType") {


        document.getElementById("divprogtype").style.display = "block";
        aTag = eval(document.getElementById("txtPragramType"))
        var btag;
        var leftpos = 0;
        var toppos = 25;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divprogtype').scrollLeft;
        var scrolltop = document.getElementById('divprogtype').scrollTop;
        document.getElementById('divprogtype').style.left = document.getElementById("txtPragramType").offsetLeft + leftpos - tot + "px";
        document.getElementById('divprogtype').style.top = document.getElementById("txtPragramType").offsetTop + toppos - scrolltop + "px"; //"510px";
        var PCOMP_CODE = document.getElementById('hiddencompcode').value;
        var PCENT_CODE = "";
        var PSEACH = "";
        var PDESC = document.getElementById('txtPragramType').value.toUpperCase();
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PMIS_TYPE = "PRM";
        CopySegmentMaster.Bindprogtype(PCOMP_CODE, PCENT_CODE, PMIS_TYPE, PDESC, PSEACH, PEXTRA, PEXTRA1, bindprogtype_callback);

    }

    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtPragramType") {
            document.getElementById('hiddenprogtype').value = "";
        }
    }
    else if (key == 27) {
        document.getElementById("divprogtype").style.display = "none";
        document.getElementById('txtPragramType').focus();
        return false;
    }
    else if (key == 9 && event.shiftKey == true) {
        document.getElementById("divprogtype").style.display = "none";
        document.getElementById('txtnChName').focus();

        return false;
    }
    else if (key == 9) {
        document.getElementById("divprogtype").style.display = "none";
        document.getElementById('txtPragramName').focus();
        return false;
    }
    

    //else if (key == 9) {
    //    document.getElementById("divprogtype").style.display = "none";
    //    document.getElementById('txtnChName').focus();
    //    return false;
    //}
    else if (key == 13) {
        if (document.getElementById("divprogtype").style.display == "block") {
            fillprogtype(event);
        }
        if (document.activeElement.id == "istprogtype") {
            fillprogtype(event);
            return false;
        }
    }
    else if (key == 38) {
        if (document.getElementById("divprogtype").style.display == "block") {
            if (document.getElementById('istprogtype').value == '0') {
                document.getElementById('txtPragramType').focus();
            }
        }
    }

    else if (key == 40) {
        if (document.getElementById("divprogtype").style.display == "block") {
            document.getElementById("istprogtype").focus();
        }
    }

    else {
        document.getElementById("divprogtype").style.display = "block";
        aTag = eval(document.getElementById("txtPragramType"))
        btag;
        leftpos = 0;
        toppos = 25;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        tot = document.getElementById('divprogtype').scrollLeft;
        scrolltop = document.getElementById('divprogtype').scrollTop;
        document.getElementById('divprogtype').style.left = document.getElementById("txtPragramType").offsetLeft + leftpos - tot + "px";
        document.getElementById('divprogtype').style.top = document.getElementById("txtPragramType").offsetTop + toppos - scrolltop + "px"; //"510px";
        var PCOMP_CODE = document.getElementById('hiddencompcode').value;
        PCENT_CODE = "";
        PSEACH = "G";
        PDESC = document.getElementById('txtPragramType').value.toUpperCase();
        PEXTRA = "";
        PEXTRA1 = "";
        PMIS_TYPE = "PRM";
        CopySegmentMaster.Bindprogtype(PCOMP_CODE, PCENT_CODE, PMIS_TYPE, PDESC, PSEACH, PEXTRA, PEXTRA1, bindprogtype_callback);

    }


}

function bindprogtype_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("istprogtype");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("---Select Program Type---", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].MISC_MAST_NAME, ds.Tables[0].Rows[i].MISC_MAST_CODE);
        }


    }

    document.getElementById('hiddenprogtype').value = "";
    document.getElementById("istprogtype").selectedIndex = 1;
    return false;
}

function fillprogtype(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtPragramType" || document.activeElement.id == "istprogtype") {
            document.getElementById("divprogtype").style.display = "none";
            document.getElementById('txtPragramType').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {

        if (document.getElementById("istprogtype").value == "0") {
            // alert("Please Select Program Type");
            return false;
        }
        else {
            document.getElementById("divprogtype").style.display = "none";
            var lstvalue = document.getElementById('istprogtype').value;
            for (var k = 0; k < document.getElementById("istprogtype").length; k++) {
                if (document.getElementById('istprogtype').options[k].value == lstvalue) {
                    document.getElementById('hiddenprogtype').value = document.getElementById('istprogtype').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtPragramType').value = document.getElementById('istprogtype').options[k].textContent;
                    else
                        document.getElementById('txtPragramType').value = document.getElementById('istprogtype').options[k].innerText;

                    break;
                }
            }
        }
        document.getElementById('txtPragramType').focus();
        return false;
    }

}
function FocusProgramtype() {
    if (document.getElementById('txtPragramType').value == "---Select Program Type---") {
        document.getElementById('txtPragramType').value = "";
    }
    document.getElementById('txtPragramType').style.textAlign = "left";
    document.getElementById('txtPragramType').style.color = "black";
  
    document.getElementById('txtPragramType').style.backgroundColor = "#99FFFF";
}
function BlurProgramtype() {
    document.getElementById('txtPragramType').style.backgroundColor = "white";
    if (document.getElementById('txtPragramType').value == "") {
        document.getElementById('txtPragramType').value = "";
        document.getElementById('txtPragramType').value = "---Select Program Type---";
        document.getElementById('txtPragramType').style.textAlign = "center";
        document.getElementById('txtPragramType').style.color = "gray";
    }

    else {
        document.getElementById('txtPragramType').style.textAlign = "left";
        document.getElementById('txtPragramType').style.color = "black";
    }
    
   
    return false;
}

///////////////////////////program ///////////////////////////////////////////////////
function Bindprogram(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtPragramName") {


        document.getElementById("divprogram").style.display = "block";
        aTag = eval(document.getElementById("txtPragramName"));
        var btag;
        var leftpos = 0;
        var toppos = 25;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divprogram').scrollLeft;
        var scrolltop = document.getElementById('divprogram').scrollTop;
        document.getElementById('divprogram').style.left = document.getElementById("txtPragramName").offsetLeft + leftpos - tot + "px";
        document.getElementById('divprogram').style.top = document.getElementById("txtPragramName").offsetTop + toppos - scrolltop + "px"; //"510px";
        var PCOMP_CODE = document.getElementById('hiddencompcode').value;
        var PCENT_CODE = document.getElementById('hiddencenter').value;
        var PSEACH = "";
        var PDESC = document.getElementById('txtPragramName').value.toUpperCase();
        var PEXTRA = "";
        var PEXTRA1 = "";

        var PROG_TYPE = document.getElementById('hiddenprogtype').value.toUpperCase();


        CopySegmentMaster.Bindprogram(PCOMP_CODE, PCENT_CODE, PROG_TYPE, PDESC, PSEACH, PEXTRA, PEXTRA1, bindprogram_callback);

    }

    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtPragramName") {
            document.getElementById('hiddenprogram').value = "";
        }
    }
    else if (key == 27) {
        document.getElementById("divprogram").style.display = "none";
        document.getElementById('txtPragramName').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "isttprogram") {
            //  fillladtypemast();
            return false;
        }
    }
    else if (key == 9 && event.shiftKey == true) {
        document.getElementById("divprogram").style.display = "none";
        document.getElementById('txtPragramType').focus();

        return false;
    }
    else if (key == 9) {
        document.getElementById("divprogram").style.display = "none";
        document.getElementById('drpOrg_Rep').focus();
        return false;
    }
   

    //else if (key == 9) {
    //    document.getElementById("divprogram").style.display = "none";
    //    document.getElementById('txtPragramType').focus();
    //    return false;
    //}
    else if (key == 38) {
        if (document.getElementById("divprogram").style.display == "block") {
            if (document.getElementById('isttprogram').value == '0') {
                document.getElementById('txtPragramName').focus();
            }
        }
    }

    else if (key == 40) {
        if (document.getElementById("divprogram").style.display == "block") {
            document.getElementById("isttprogram").focus();
        }
    }

    else {
        document.getElementById("divprogram").style.display = "block";
        aTag = eval(document.getElementById("txtPragramName"))
        btag;
        leftpos = 0;
        toppos = 25;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        tot = document.getElementById('divprogram').scrollLeft;
        scrolltop = document.getElementById('divprogram').scrollTop;
        document.getElementById('divprogram').style.left = document.getElementById("txtPragramName").offsetLeft + leftpos - tot + "px";
        document.getElementById('divprogram').style.top = document.getElementById("txtPragramName").offsetTop + toppos - scrolltop + "px"; //"510px";
        PCOMP_CODE = document.getElementById('hiddencompcode').value;
        PCENT_CODE = document.getElementById('hiddencenter').value;
        PSEACH = "G";
        PDESC = document.getElementById('txtPragramName').value.toUpperCase();
        PEXTRA = "";
        PEXTRA1 = "";

        var PROG_TYPE = document.getElementById('hiddenprogtype').value.toUpperCase();

        CopySegmentMaster.Bindprogram(PCOMP_CODE, PCENT_CODE, PROG_TYPE, PDESC, PSEACH, PEXTRA, PEXTRA1, bindprogram_callback);

    }


}

function bindprogram_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("isttprogram");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("--- Select Program Name---", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].PROG_NAME, ds.Tables[0].Rows[i].PROG_ID);
        }


    }

    document.getElementById('hiddenprogram').value = "";
    document.getElementById("isttprogram").selectedIndex = 1;
    return false;
}

function fillprogram(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtPragramName" || document.activeElement.id == "isttprogram") {
            document.getElementById("divprogram").style.display = "none";
            document.getElementById('txtPragramName').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {

        if (document.getElementById("isttprogram").value == "0") {
            //  alert("Please Select Program Name");
            return false;
        }
        else {
            document.getElementById("divprogram").style.display = "none";
            var lstvalue = document.getElementById('isttprogram').value;
            for (var k = 0; k < document.getElementById("isttprogram").length; k++) {
                if (document.getElementById('isttprogram').options[k].value == lstvalue) {
                    document.getElementById('hiddenprogram').value = document.getElementById('isttprogram').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtPragramName').value = document.getElementById('isttprogram').options[k].textContent;
                    else
                        document.getElementById('txtPragramName').value = document.getElementById('isttprogram').options[k].innerText;

                    break;
                }
            }
        }
        document.getElementById('txtPragramName').focus();
        return false;
    }

}
function FocusProgram() {
    if (document.getElementById('txtPragramName').value == "--- Select Program Name---") {
        document.getElementById('txtPragramName').value = "";
    }
    document.getElementById('txtPragramName').style.textAlign = "left";
    document.getElementById('txtPragramName').style.color = "black";
    document.getElementById('txtPragramName').style.backgroundColor = "#99FFFF";
}
function BlurProgram() {
    if (document.getElementById('txtPragramName').value == "") {
        document.getElementById('txtPragramName').value = "";
        document.getElementById('txtPragramName').value = "--- Select Program Name---";
        document.getElementById('txtPragramName').style.textAlign = "center";
        document.getElementById('txtPragramName').style.color = "gray";
    }

    else {
        document.getElementById('txtPragramName').style.textAlign = "left";
        document.getElementById('txtPragramName').style.color = "black";
    }
    
    document.getElementById('txtPragramName').style.backgroundColor = "white";
    return false;
}
