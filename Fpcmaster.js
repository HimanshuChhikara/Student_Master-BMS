
function Ronload() {
    //getPermission('Fpcmaster');
    //open_fpc();
    //document.getElementById('btncrt').focus();

    ////fillgrid('F');
    //Sundaygrid('F');
    BINDTOPENDTIME();
    return false;
}

function onfocuscol11(resid) {
    document.getElementById(resid).style.color = "#99FFFF";
}


function onblorcol(resid) {
    document.getElementById(resid).style.color = "#000000";
}
function up_tcrin() {
    if (document.getElementById('txtStartTime').value == "xx:xx:xx") {
        document.getElementById('txtStartTime').value = "";

    }
    document.getElementById('txtStartTime').style.textAlign = "left";
    document.getElementById('txtStartTime').style.color = "black";
    // document.getElementById('txtTCRIN').style.backgroundColor = "#99FFFF";

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
                if (document.getElementById('btncrt').disabled == false) {

                    document.getElementById('btncrt').click();
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
                if (document.getElementById('btnview').disabled == false) {
                
                    document.getElementById('btnview').click();
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

        if (document.activeElement.id == "txtChannelName") {
            if (document.getElementById('drpDay').disabled == false)
                document.getElementById('drpDay').focus();
            return false;
        }

        if (document.activeElement.id == "drpDay") {
                if (document.getElementById('txtProgramType').disabled == false)
                    document.getElementById('txtProgramType').focus();
                return false;
            }

            if (document.activeElement.id == "txtProgramType") {
                document.getElementById('divprogtype').style.display = "none"; {
                    fillprogtype(event)
                }

            if (document.getElementById('txtProgramName').disabled == false)
                document.getElementById('txtProgramName').focus();
            return false;
        }
        if (document.activeElement.id == "txtProgramName") {
            document.getElementById('divprogram').style.display = "none"; {
                fillprogram(event)
            }
            if (document.getElementById('drpOrg_Rep').disabled == false)
                document.getElementById('drpOrg_Rep').focus();
            return false;
        }
        if (document.activeElement.id == "drpOrg_Rep") {
            if (document.getElementById('txtStartTime').disabled == false)
                document.getElementById('txtStartTime').focus();
            return false;
        }
        if (document.activeElement.id == "txtStartTime") {
            if (document.getElementById('txtDuration').disabled == false)
                document.getElementById('txtDuration').focus();
            return false;
        }
        if (document.activeElement.id == "txtDuration") {
            if (document.getElementById('btnsubmit').disabled == false)
                document.getElementById('btnsubmit').focus();
            return false;
        }

        if (document.activeElement.id == "timestrt") {
            if (document.getElementById('txttimeend').disabled == false)
                document.getElementById('txttimeend').focus();
        }
        if (document.activeElement.id == "txttimeend") {
            if (document.getElementById('txtprogename').disabled == false)
                document.getElementById('txtprogename').focus();
            return false;
        }
        if (document.activeElement.id == "txtprogename") {
            if (document.getElementById('txtreporg').disabled == false)
                document.getElementById('txtreporg').focus();
            return false;
        }
        if (document.activeElement.id == "txtreporg") {
            if (document.getElementById('txttdur').disabled == false)
                document.getElementById('txttdur').focus();
            return false;
        }
        if (document.activeElement.id == "txttdur") {
            if (document.getElementById('timestrt').disabled == false)
                document.getElementById('timestrt').focus();
            return false;
        }

        if (document.activeElement.id == "txtcurrpage") {
            CngPageNo();
            return false;
        }
        else if (document.activeElement.type == "button" || document.activeElement.type == "submit" || document.activeElement.type == "image") {
            return key;
        }
    }
    if (event.shiftKey && event.keyCode == 9) {
        if (document.activeElement.id == "drpDay") {

            document.getElementById('txtChannelName').focus();
            return false;

        }
        else if (document.activeElement.id == "txtProgramType") {
            document.getElementById('drpDay').focus();
            return false;
        }
        else if (document.activeElement.id == "txtProgramName") {
            document.getElementById('txtProgramType').focus();
            return false;
        }
        else if (document.activeElement.id == "drpOrg_Rep") {

            document.getElementById('txtProgramName').focus();

            return false;
        }

        else if (document.activeElement.id == "txtStartTime") {
            document.getElementById('drpOrg_Rep').focus();
            return false;
        }
        else if (document.activeElement.id == "txtDuration") {
            document.getElementById('txtStartTime').focus();
            return false;
        }
    }

}


//*****************************Function For Program type select F2***********************
function Bindprogtype(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtProgramType") {


        document.getElementById("divprogtype").style.display = "block";
        aTag = eval(document.getElementById("txtProgramType"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divprogtype').scrollLeft;
        var scrolltop = document.getElementById('divprogtype').scrollTop;
        document.getElementById('divprogtype').style.left = document.getElementById("txtProgramType").offsetLeft + leftpos - tot + "px";
        document.getElementById('divprogtype').style.top = document.getElementById("txtProgramType").offsetTop + toppos - scrolltop + "px"; //"510px";
        var PCOMP_CODE = document.getElementById('hiddencompcode').value;
        var PCENT_CODE = document.getElementById('hiddencenter').value;
        var PSEACH = "";
        var PDESC = document.getElementById('txtProgramType').value.toUpperCase();
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PMIS_TYPE = "PRM";
        Fpcmaster.Bindprogtype(PCOMP_CODE, PCENT_CODE, PMIS_TYPE, PDESC, PSEACH, PEXTRA, PEXTRA1, bindprogtype_callback);

    }

    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtProgramType") {
            document.getElementById('hiddenprogtype').value = "";
        }
    }
    else if (key == 27) {
        document.getElementById("divprogtype").style.display = "none";
        document.getElementById('txtProgramType').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "istprogtype") {
            //  fillladtypemast();
            return false;
        }
    }
    else if (key == 38) {
        if (document.getElementById("divprogtype").style.display == "block") {
            if (document.getElementById('istprogtype').value == '0') {
                document.getElementById('txtProgramType').focus();
            }
        }
    }

    else if (key == 9 && event.shiftKey == false) {
        document.getElementById("divprogtype").style.display = "none";
        document.getElementById('txtProgramName').focus();
        return false;
    }
    else if (key == 9 && event.shiftKey == true) {
        return true;
    }

    else if (key == 40) {
        if (document.getElementById("divprogtype").style.display == "block") {
            document.getElementById("istprogtype").focus();
        }
    }

    else {
        document.getElementById("divprogtype").style.display = "block";
        aTag = eval(document.getElementById("txtProgramType"))
        var btag;
        var leftpos = 0;
        var toppos = 10;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divprogtype').scrollLeft;
        var scrolltop = document.getElementById('divprogtype').scrollTop;
        document.getElementById('divprogtype').style.left = document.getElementById("txtProgramType").offsetLeft + leftpos - tot + "px";
        document.getElementById('divprogtype').style.top = document.getElementById("txtProgramType").offsetTop + toppos - scrolltop + "px"; //"510px";
        var PCOMP_CODE = document.getElementById('hiddencompcode').value;
        var PCENT_CODE = document.getElementById('hiddencenter').value;
        var PSEACH = "G";
        var PDESC = document.getElementById('txtProgramType').value.toUpperCase();
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PMIS_TYPE = "PRM";
        Fpcmaster.Bindprogtype(PCOMP_CODE, PCENT_CODE, PMIS_TYPE, PDESC, PSEACH, PEXTRA, PEXTRA1, bindprogtype_callback);

    }


}

function bindprogtype_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("istprogtype");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("  ------Select Prog Type------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].MISC_MAST_NAME, ds.Tables[0].Rows[i].MISC_MAST_CODE);
        }


    }

    //document.getElementById('hiddenprogtype').value = "";
    document.getElementById("istprogtype").selectedIndex = 1;
    return false;
}

function fillprogtype(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtProgramType" || document.activeElement.id == "istprogtype") {
            document.getElementById("divprogtype").style.display = "none";
            document.getElementById('txtProgramType').focus();
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
                        document.getElementById('txtProgramType').value = document.getElementById('istprogtype').options[k].textContent;
                    else
                        document.getElementById('txtProgramType').value = document.getElementById('istprogtype').options[k].innerText;

                    break;
                }
            }
        }
        document.getElementById('txtProgramType').focus();
        document.getElementById("istprogtype").selectedIndex = 1;

        return false;
    }

}
function Focusptype() {
    if (document.getElementById('txtProgramType').value == "  ------Select Prog Type------") {
        document.getElementById('txtProgramType').value = "";
    }
    document.getElementById('txtProgramType').style.textAlign = "left";
    document.getElementById('txtProgramType').style.color = "black";
    document.getElementById('txtProgramType').style.backgroundColor = "#99FFFF";
}
function Blurptype() {
    if (document.getElementById('txtProgramType').value == "") {
        document.getElementById('txtProgramType').value = "";
        document.getElementById('txtProgramType').value = "  ------Select Prog Type------";
        document.getElementById('txtProgramType').style.textAlign = "center";
        document.getElementById('txtProgramType').style.color = "gray";
    }

    else {
        document.getElementById('txtProgramType').style.textAlign = "left";
        document.getElementById('txtProgramType').style.color = "black";
    }

    document.getElementById('txtProgramType').style.backgroundColor = "white";
    return false;
}


function fostarttim() {
    if (document.getElementById('txtStartTime').value == "xx:xx:xx") {
        document.getElementById('txtStartTime').value = "";
    }
    document.getElementById('txtStartTime').style.textAlign = "left";
    document.getElementById('txtStartTime').style.color = "black";
    document.getElementById('txtStartTime').style.backgroundColor = "#99FFFF";
}
function Blurstarttime() {
    if (document.getElementById('txtStartTime').value == "") {
        document.getElementById('txtStartTime').value = "";
        document.getElementById('txtStartTime').value = "xx:xx:xx";
        document.getElementById('txtStartTime').style.textAlign = "center";
        document.getElementById('txtStartTime').style.color = "gray";
    }

    else {
        document.getElementById('txtStartTime').style.textAlign = "left";
        document.getElementById('txtStartTime').style.color = "black";
    }

    document.getElementById('txtStartTime').style.backgroundColor = "white";
    return false;
}


//*****************************Function For Program select F2***********************

function Bindprogram(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtProgramName") {


        document.getElementById("divprogram").style.display = "block";
        aTag = eval(document.getElementById("txtProgramName"))
        var btag;
        var leftpos = 0;
        var toppos = 0;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divprogram').scrollLeft;
        var scrolltop = document.getElementById('divprogram').scrollTop;
        document.getElementById('divprogram').style.left = document.getElementById("txtProgramName").offsetLeft + leftpos - tot + "px";
        document.getElementById('divprogram').style.top = document.getElementById("txtProgramName").offsetTop + toppos - scrolltop + "px"; //"510px";
        var PCOMP_CODE = document.getElementById('hiddencompcode').value;
        var PCENT_CODE = document.getElementById('hiddencenter').value;
        var PSEACH = "";
        var PDESC = document.getElementById('txtProgramName').value.toUpperCase();
        var PEXTRA = "";
        var PEXTRA1 = "";

        var PROG_TYPE = document.getElementById('hiddenprogtype').value.toUpperCase();

        Fpcmaster.Bindprogram(PCOMP_CODE, PCENT_CODE, PROG_TYPE, PDESC, PSEACH, PEXTRA, PEXTRA1, bindprogram_callback);

    }

    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtProgramName") {
            document.getElementById('hiddenprogram').value = "";
        }
    }
    else if (key == 27) {
        document.getElementById("divprogram").style.display = "none";
        document.getElementById('txtProgramName').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "istprogram") {
            //  fillladtypemast();
            return false;
        }
    }
    else if (key == 38) {
        if (document.getElementById("divprogram").style.display == "block") {
            if (document.getElementById('istprogram').value == '0') {
                document.getElementById('txtProgramName').focus();
            }
        }
    }

    else if (key == 9 && event.shiftKey == false) {
        document.getElementById("divprogram").style.display = "none";
        document.getElementById('drpOrg_Rep').focus();
        return false;
    }
    else if (key == 9 && event.shiftKey == true) {
        return true;
    }

    else if (key == 40) {
        if (document.getElementById("divprogram").style.display == "block") {
            document.getElementById("istprogram").focus();
        }
    }

    else {
        document.getElementById("divprogram").style.display = "block";
        aTag = eval(document.getElementById("txtProgramName"))
        var btag;
        var leftpos = 0;
        var toppos = 10;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divprogram').scrollLeft;
        var scrolltop = document.getElementById('divprogram').scrollTop;
        document.getElementById('divprogram').style.left = document.getElementById("txtProgramName").offsetLeft + leftpos - tot + "px";
        document.getElementById('divprogram').style.top = document.getElementById("txtProgramName").offsetTop + toppos - scrolltop + "px"; //"510px";
        var PCOMP_CODE = document.getElementById('hiddencompcode').value;
        var PCENT_CODE = document.getElementById('hiddencenter').value;
        var PSEACH = "G";
        var PDESC = document.getElementById('txtProgramName').value.toUpperCase();
        var PEXTRA = "";
        var PEXTRA1 = "";

        var PROG_TYPE = document.getElementById('hiddenprogtype').value.toUpperCase();

        Fpcmaster.Bindprogram(PCOMP_CODE, PCENT_CODE, PROG_TYPE, PDESC, PSEACH, PEXTRA, PEXTRA1, bindprogram_callback);

    }


}

function bindprogram_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("istprogram");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("  ------Select Prog Name------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; i++) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].PROG_NAME, ds.Tables[0].Rows[i].PROG_ID + "-" + ds.Tables[0].Rows[i].PROGRAM_TYPE_NAME + "-" + ds.Tables[0].Rows[i].PROG_TYPE_CODE);
        }


    }

    document.getElementById('hiddenprogram').value = "";
    document.getElementById("istprogram").value = "0";
    document.getElementById("istprogram").selectedIndex = 1;
    return false;
}

function fillprogram(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtProgramName" || document.activeElement.id == "istprogram") {
            document.getElementById("divprogram").style.display = "none";
            document.getElementById('txtProgramName').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {

        if (document.getElementById("istprogram").value == "0") {
            //alert("Please Select Program Name");
            return false;
        }
        else {
            document.getElementById("divprogram").style.display = "none";
            var lstvalue = document.getElementById('istprogram').value;
            for (var k = 0; k < document.getElementById("istprogram").length; k++) {
                if (document.getElementById('istprogram').options[k].value == lstvalue) {
                    var dp_name = document.getElementById('istprogram').options[k].value;
                    dp_name = dp_name.split("-");
                    document.getElementById('hiddenprogram').value = dp_name[0];
                    if (document.getElementById('hiddenprogtype').value == "") {
                        document.getElementById('txtProgramType').value = dp_name[1];
                        document.getElementById('hiddenprogtype').value = dp_name[2];

                    }

                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtProgramName').value = document.getElementById('istprogram').options[k].textContent;
                    else
                        document.getElementById('txtProgramName').value = document.getElementById('istprogram').options[k].innerText;

                    break;
                }
            }
        }
        document.getElementById('txtProgramName').focus();
        return false;
    }

}

function Focuspname() {
    if (document.getElementById('txtProgramName').value == "  ------Select Prog Name------") {
        document.getElementById('txtProgramName').value = "";
    }
    document.getElementById('txtProgramName').style.textAlign = "left";
    document.getElementById('txtProgramName').style.color = "black";
    document.getElementById('txtProgramName').style.backgroundColor = "#99FFFF";
}
function Blurpname() {
    if (document.getElementById('txtProgramName').value == "") {
        document.getElementById('txtProgramName').value = "";
        document.getElementById('txtProgramName').value = "  ------Select Prog Name------";
        document.getElementById('txtProgramName').style.textAlign = "center";
        document.getElementById('txtProgramName').style.color = "gray";
    }

    else {
        document.getElementById('txtProgramName').style.textAlign = "left";
        document.getElementById('txtProgramName').style.color = "black";
    }

    document.getElementById('txtProgramName').style.backgroundColor = "white";
    return false;
}



function BINDTOPENDTIME() {

    var COMPCODE = document.getElementById('hiddencompcode').value;
    var CENTCODE = document.getElementById('hiddencenter').value;
    var CHANNELCODE = document.getElementById('txtChannelName').value;

    var res = Fpcmaster.BindTOPENDTIME(COMPCODE, CENTCODE, CHANNELCODE);
    var ds = res.value;
    if (ds.Tables[0].Rows.length > 0) {
        document.getElementById('txtStartTime').value = ds.Tables[0].Rows[0].END_TIME;

    }

}