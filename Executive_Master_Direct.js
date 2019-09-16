
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
                if (document.getElementById('btnCreate').disabled == false) {

                    document.getElementById('btnCreate').click();
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


        }

    };
    if (key == 13) {

        if (document.activeElement.id == "drpexteam") {
            if (document.getElementById('txtexecname').disabled == false)
                document.getElementById('txtexecname').focus();
            return false;
        }

        if (document.activeElement.id == "txtexecname") {
            if (document.getElementById('drpdesig').disabled == false)
                document.getElementById('drpdesig').focus();
            return false;
        }
        if (document.activeElement.id == "drpdesig") {
            if (document.getElementById('drpadtype').disabled == false)
                document.getElementById('drpadtype').focus();
            return false;
        }
        if (document.activeElement.id == "drpadtype") {
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
            if (document.getElementById('txtpostcode').disabled == false)
                document.getElementById('txtpostcode').focus();
            return false;
        }
        if (document.activeElement.id == "txtpostcode") {
            if (document.getElementById('drptaluka').disabled == false)
                document.getElementById('drptaluka').focus();
            return false;
        }
        if (document.activeElement.id == "drptaluka") {
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
            if (document.getElementById('txtemailid1').disabled == false)
                document.getElementById('txtemailid1').focus();
            return false;
        }
        if (document.activeElement.id == "txtemailid1") {
            if (document.getElementById('txtemailid2').disabled == false)
                document.getElementById('txtemailid2').focus();
            return false;
        }
        if (document.activeElement.id == "txtemailid2") {
            if (document.getElementById('drpstatus').disabled == false)
                document.getElementById('drpstatus').focus();
            return false;
        }

        if (document.activeElement.id == "drpstatus") {
            if (document.getElementById('btnsave').disabled == false)
                document.getElementById('btnsave').focus();
            return false;
        }
        if (document.activeElement.id == "txtexnamegrid") {
            if (document.getElementById('txtexcitygrid').disabled == false)
                document.getElementById('txtexcitygrid').focus();
            return false;
        }

        if (document.activeElement.id == "txtcurrpage") {
            CngPageNo();
            return false;
        }
    }
    else if (document.activeElement.type == "button" || document.activeElement.type == "submit" || document.activeElement.type == "image") {
        return key;
    }
}

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
        Executive_Master_Direct.Bindcityname(country, cityname, extra, bindcity_callback);
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
        document.getElementById('txtpostcode').focus();
        return false;
    }
    else if (key == 9 && event.shiftKey == true) {
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
        Executive_Master_Direct.Bindcityname(country, cityname, extra, bindcity_callback);

    }
}
function bindcity_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("lstcity");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select City Name---------", "0");
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
function Focuscity() {
    if (document.getElementById('txtcity').value == "-------Select City-------") {
        document.getElementById('txtcity').value = "";
    }
    document.getElementById('txtcity').style.textAlign = "left";
    document.getElementById('txtcity').style.color = "black";
    document.getElementById('txtcity').style.backgroundColor = "#99FFFF";
}
function Blurcity() {
    document.getElementById('txtcity').style.backgroundColor = "white";
    if (document.getElementById('txtcity').value == "") {
        document.getElementById('txtcity').value = "";
        document.getElementById('txtcity').value = "-------Select City-------";
        document.getElementById('txtcity').style.textAlign = "center";
        document.getElementById('txtcity').style.color = "gray";
    }

    else {
        document.getElementById('txtcity').style.textAlign = "left";
        document.getElementById('txtcity').style.color = "black";
    }

   
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

