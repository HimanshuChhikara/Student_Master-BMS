
function Bindadtype(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if ((event.shiftKey && key == 9) || (key == 16)) {
    }
    else if (key == 113 && document.activeElement.id == "txtadmode") {


        document.getElementById("divadtype").style.display = "block";
        aTag = eval(document.getElementById("txtadmode"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divadtype').scrollLeft;
        var scrolltop = document.getElementById('divadtype').scrollTop;
        document.getElementById('divadtype').style.left = document.getElementById("txtadmode").offsetLeft + leftpos - tot + "px";
        document.getElementById('divadtype').style.top = document.getElementById("txtadmode").offsetTop + toppos - scrolltop + "px"; //"510px";
        var PGSEARCH = "G";
        var PDESC = document.getElementById('txtadmode').value.toUpperCase()
        var PEXTRA = "";
        var PEXTRA1 = "";
        ChannelMaster.Bindadtype(PDESC, PGSEARCH, PEXTRA, PEXTRA1, bindadtype_callback);

    }

    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtadmode") {
            document.getElementById('hiddenadtype').value = "";
        }
    }
    else if (key == 27) {
        document.getElementById("divadtype").style.display = "none";
        document.getElementById('txtadmode').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "istadtype") {
            fillladtypemast();
            return false;
        }
    }
    else if (key == 9 && event.shiftKey == true) {
        document.getElementById("divadtype").style.display = "none";
        document.getElementById('txtchennalname').focus();
        return false;
    }
    else if (key == 9) {
        document.getElementById("divadtype").style.display = "none";
        document.getElementById('drplanguage').focus();
        return false;
    }
    
    
    else if (key == 38) {
        if (document.getElementById("divadtype").style.display == "block") {
            if (document.getElementById('istadtype').value == '0') {
                document.getElementById('txtadmode').focus();
            }
        }
    }

    else if (key == 40) {
        if (document.getElementById("divadtype").style.display == "block") {
            document.getElementById("istadtype").focus();
        }
    }

    else {
        document.getElementById("divadtype").style.display = "block";
        aTag = eval(document.getElementById("txtadmode"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divadtype').scrollLeft;
        var scrolltop = document.getElementById('divadtype').scrollTop;
        document.getElementById('divadtype').style.left = document.getElementById("txtadmode").offsetLeft + leftpos - tot + "px";
        document.getElementById('divadtype').style.top = document.getElementById("txtadmode").offsetTop + toppos - scrolltop + "px"; //"510px";
        var PGSEARCH = "G";
        var PDESC = document.getElementById('txtadmode').value.toUpperCase()
        var PEXTRA = "";
        var PEXTRA1 = "";
        ChannelMaster.Bindadtype(PDESC, PGSEARCH, PEXTRA, PEXTRA1, bindadtype_callback);

    }


}

function bindadtype_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("istadtype");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select Ad Mode---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].AD_MODE_DESC,ds.Tables[0].Rows[i].AD_MODE_CODE);
        }


    }

    document.getElementById('hiddenadtype').value = "";
    document.getElementById("istadtype").selectedIndex = 1;
    return false;
}

function fillladtypemast(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtadmode" || document.activeElement.id == "istadtype") {
            document.getElementById("divadtype").style.display = "none";
            document.getElementById('txtadmode').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {

        if (document.getElementById("istadtype").value == "0") {
            // alert("Please Select Ad Mode");
            return false;
        }
        else {
            document.getElementById("divadtype").style.display = "none";
            var lstvalue = document.getElementById('istadtype').value;
            for (var k = 0; k < document.getElementById("istadtype").length; k++) {
                if (document.getElementById('istadtype').options[k].value == lstvalue) {
                    document.getElementById('hiddenadtype').value = document.getElementById('istadtype').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtadmode').value = document.getElementById('istadtype').options[k].textContent;
                    else
                        document.getElementById('txtadmode').value = document.getElementById('istadtype').options[k].innerText;

                    break;
                }
            }
        }
        document.getElementById('txtadmode').focus();
        return false;
    }

}

function focus_channeltype() {
    document.getElementById('txtadmode').style.backgroundColor = "#99FFFF";
    if (document.getElementById('txtadmode').value == "--Select Channel Type--") {
        document.getElementById('txtadmode').value = "";
    }
    document.getElementById('txtadmode').style.textAlign = "left";
    document.getElementById('txtadmode').style.textTransform = "uppercase";

    document.getElementById('txtadmode').style.color = "black";
    return false;
}
function blur_channeltype() {

    // document.getElementById('divagency').style.display = "none";
    document.getElementById('txtadmode').style.backgroundColor = "white";
    if (document.getElementById('txtadmode').value == "") {
        document.getElementById('txtadmode').value = "";
        document.getElementById('txtadmode').value = "--Select Channel Type--";
        document.getElementById('txtadmode').style.textAlign = "center";
        document.getElementById('txtadmode').style.textTransform = "capitalize";

        document.getElementById('txtadmode').style.color = "gray";
    }
    else {
        document.getElementById('txtadmode').style.textAlign = "left";
        document.getElementById('txtadmode').style.color = "black";
    }

    return false;
}


function Entertabfun(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    document.onkeydown = function (e) {
        if (e != undefined) {
            if (e.ctrlKey && e.keyCode === 83) {
                e.preventDefault();
              //  if (document.getElementById('Buttonsav').style.display == "block") {
                    document.getElementById('Buttonsav').click();
                    //SaveClick();
                    return false;
              //  }
            }
            else if (e.ctrlKey && e.keyCode === 13) {
                e.preventDefault();
                if (document.getElementById('btncrt').disabled== false) {
                    document.getElementById('btncrt').click();
                    //NewClick();
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
                if (document.getElementById('btnclear').style.display == "block") {
                    document.getElementById('btnclear').click();
                    // CancelClick();
                    return false;
                }
            }

            else if (e.ctrlKey && e.keyCode === 77) {
                e.preventDefault();
                if (document.getElementById('btnedit').style.display == "block") {
                    document.getElementById('btnedit').click();
                    ModifyClick();
                    return false;
                }
            }

            else if (e.ctrlKey && e.keyCode === 46) {
                e.preventDefault();
                if (document.getElementById('Btndelete').style.display == "block") {
                    document.getElementById('Btndelete').click();
                    //DeleteClick();
                    return false;
                }
            }

            else if (e.ctrlKey && e.keyCode === 69) {
                e.preventDefault();
                if (document.getElementById('btnlistview').disabled == false) {
                    document.getElementById('btnlistview').click();
                    //DeleteClick();
                    return false;
                }
            }

            else if (e.ctrlKey && e.keyCode === 70) {
                e.preventDefault();
                if (document.getElementById('btnform').disabled == false) {
                    document.getElementById('btnform').click();
                    //DeleteClick();
                    return false;
                }
            }

            else if (e.ctrlKey && e.keyCode === 37) {
                e.preventDefault();
                if (document.getElementById('btnprevious').style.display == "block") {
                    document.getElementById('btnprevious').click();
                    //DeleteClick();
                    return false;
                }
            }

            else if (e.ctrlKey && e.keyCode === 39) {
                e.preventDefault();
                if (document.getElementById('btnnext').style.display == "block") {
                    document.getElementById('btnnext').click();
                    //DeleteClick();
                    return false;
                }
            }

            else if (e.ctrlKey && e.keyCode === 36) {
                e.preventDefault();
                if (document.getElementById('btnfirst').style.display == "block") {
                    document.getElementById('btnfirst').click();
                    //DeleteClick();
                    return false;
                }
            }

            else if (e.ctrlKey && e.keyCode === 35) {
                e.preventDefault();
                if (document.getElementById('btnlast').style.display == "block") {
                    document.getElementById('btnlast').click();
                    //DeleteClick();
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

        if (document.activeElement.id == "txtchennalname") {
            if (document.getElementById('txtadmode').disabled == false)
                document.getElementById('txtadmode').focus();
            return false;
        }
        else if (document.activeElement.id == "txtadmode") {
            if (document.getElementById("divadtype").style.display != "none") {
                fillladtypemast(event);
            }

            if (document.getElementById('drplanguage').disabled == false) {
                document.getElementById('drplanguage').focus();
                return false;
            }

        }
        else if (document.activeElement.id == "drplanguage") {
            if (document.getElementById('drpstatus').disabled == false) {
                document.getElementById('drpstatus').focus();
                return false;
            }
        }
        if (document.activeElement.id == "drpstatus") {
            if (document.getElementById('Buttonsav').disabled == false)
                document.getElementById('Buttonsav').focus();
            return false;
        }
        else if (document.activeElement.type == "button" || document.activeElement.type == "submit" || document.activeElement.type == "image") {
            return key;
        }
    }
}
