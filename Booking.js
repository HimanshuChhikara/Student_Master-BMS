var hiddentext;
var snoinc, pSchueduledatemain, pChannel, noid, pChannelcode, pAdtype, pspotypecode, pAdtypecode, pTapeId, pptapidcode, primtimecode, pprogramcode, pSchueduledate, pRODPTYPE, pFromTime, pEndTime, pProgram, pSeg, pSegcode, pPostion, pSopttype, pDuration, pRate, agrateamt, pGross, ppremamt, pdisamt, pagcomamt, pnetamt, pStatus, pprpremamt, pservamtamt, ptotbillamt, tempdetil, flagdata;
var daypg1, daypg2, daypg3, daypg4, daypg5, daypg6, daypg7, daypg8, daypg9, daypg10, daypg11, daypg12, daypg13, daypg14, daypg15, daypg16, daypg17, daypg18, daypg19, daypg20, daypg21, daypg22, daypg23, daypg24, daypg25, daypg26, daypg27, daypg28, daypg29, daypg30, daypg31;
var pSpot = 0;
var pSpotsc = 0;
var totalspott = 0;
var totalspottt = 0;

//*********************************************Client Popup Details***********************
function ClientDetClick() {
//    if (document.getElementById('txtclint').value != "")
//        return false;

    document.getElementById("divclientdet").style.display = "block";
    aTag = eval(document.getElementById("btnclientdet"))
    var btag;
    var leftpos = 0;
    var toppos = 0;
    do {
        aTag = eval(aTag.offsetParent);
        leftpos += aTag.offsetLeft;
        toppos += aTag.offsetTop;
        btag = eval(aTag)
    } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
    var tot = document.getElementById('divclientdet').scrollLeft;
    var scrolltop = document.getElementById('divclientdet').scrollTop;
    document.getElementById('divclientdet').style.left = document.getElementById("btnclientdet").offsetLeft + leftpos - tot - 200 + "px";
    document.getElementById('divclientdet').style.top = document.getElementById("btnclientdet").offsetTop + toppos - scrolltop + 18 + "px"; //"510px";

    document.getElementById('txtpopclname').value = document.getElementById('txtclint').value;
    if (document.getElementById('txtpopclname').disabled == false) {
        document.getElementById('txtpopclname').focus();
    }
    document.getElementById('txtclint').style.backgroundColor = "white";
    return false;
}

function Closecclientdiv() {
    document.getElementById("divclientdet").style.display = "none";
    return false;
}

function ClSubmitClick() {
//    document.getElementById("divclientdet").style.display = "none";
    //    document.getElementById('txtclint').value = document.getElementById('txtpopclname').value;

    if (document.getElementById('txtpopclname').value == "") {
        alert("Please Enter Client Name");
        document.getElementById('txtpopclname').focus();
        return false;
    }
    if (document.getElementById('drpclientcat').value == "0") {
        alert("Please Select Client Category");
        if (document.getElementById('drpclientcat').disabled == false)
            document.getElementById('drpclientcat').focus();
        return false;
    }
    if (document.getElementById('drpcountry').value == "0") {
        alert("Please Select Country");
        if (document.getElementById('drpcountry').disabled == false)
            document.getElementById('drpcountry').focus();
        return false;
    }
    if (document.getElementById('hdncity').value == "") {
        alert("Please Select City");
        if (document.getElementById('txtcity').disabled == false)
            document.getElementById('txtcity').focus();
        return false;
    }
    
    
    GenerateCode();
    var CENT_CODE = document.getElementById('hdncenter').value;
    var ClientCode = document.getElementById('hdnclcode').value;
    var oldClientCode = "";
    var ClientName = document.getElementById('txtpopclname').value.toUpperCase();
    var ClientNick = document.getElementById('txtpopclname').value.toUpperCase();
    var ClientCat = document.getElementById('drpclientcat').value;
    var Industry = "";
    var ratetype = "";
    var padd1 = document.getElementById('txtpopcladd1').value.toUpperCase();
    var padd2 = "";
    var country = document.getElementById('drpcountry').value;
    var city = document.getElementById('hdncity').value;
    var state = document.getElementById('hdnState').value;
    var dist = document.getElementById('hdnDistrict').value;
    var zone = document.getElementById('hdnZone').value;
    var region = document.getElementById('hdnRegion').value;
    var taluka = "0";
    var postcode = document.getElementById('txtpostcode').value;
    var ph1 = document.getElementById('txtpopclphone').value;
    var ph2 = "";
    var pfax1 = "";
    var pfax2 = "";
    var mailid = "";
    var pwebsite = "";
    var psrvtxno = "";
    var ppan = "";
    var pstatus = "AC0";
    var statuscoz = "";
    var bkalert = "";
    var rmrk = "";
    var statusdate = "";
    var dateformat = document.getElementById('hiddendateformat').value;
    var TmpClientcode = "";
    var userid = document.getElementById('hiddenuserid').value;
    var pcompcode = document.getElementById('hdncompcode').value;

    var ressave = Booking.ChkClient(ClientCode, ClientName, pcompcode, CENT_CODE);
    var ds = ressave.value;
    if (ds == null) {
        alert(response.error.description);
        return false
    }
    if (ds.Tables[1].Rows.length > 0) {
        alert("This Client Name has been already assigned")
        document.getElementById('txtpopclname').value = "";
        document.getElementById('txtpopclname').focus();
        return false;
    }

    var res_error = Booking.InsUpdDelCL(ClientCode, oldClientCode, ClientName, ClientNick, ClientCat, Industry, ratetype, padd1, padd2, country, city, state, dist, zone, region, taluka, postcode, ph1, ph2, pfax1, pfax2, mailid, pwebsite, psrvtxno, ppan, pstatus, statuscoz, bkalert, rmrk, statusdate, TmpClientcode, userid, pcompcode, CENT_CODE, "I");
    if (res_error.value == null) {
        alert(res_error.error.description);
        return false
    }

    alert("Record Succesfully Saved...");
    document.getElementById('txtclint').value = document.getElementById('txtpopclname').value.toUpperCase();
    document.getElementById('hdnclient').value = document.getElementById('hdnclcode').value;
    ClCloseClear();
    document.getElementById("divclientdet").style.display = "none";
    document.getElementById('txtclint').style.backgroundColor = "white";
    document.getElementById('txtdeal').focus();
    return false;
}

function ClCloseClear() {
    document.getElementById('txtpopclname').value = "";
    document.getElementById('hdnclcode').value = "";
    document.getElementById('drpclientcat').value = "0";
    document.getElementById('txtpopcladd1').value = "";
    document.getElementById('drpcountry').value = "0";
    document.getElementById('txtcity').value = "";
    document.getElementById('txtpostcode').value = "";
    document.getElementById('txtpopclphone').value = "";
    document.getElementById('hdncity').value = "";
    document.getElementById('hdnDistrict').value = "";
    document.getElementById('hdnState').value = "";
    document.getElementById('hdnZone').value = "";
    document.getElementById('hdnRegion').value = "";
}

function GenerateCode() {

    var PCOMP_CODE = document.getElementById('hdncompcode').value;
    var PCENT_CODE = document.getElementById('hdncenter').value;
    var PTABLE = "AD_CLIENT_MAST";
    var PCOLUMN = "CLIENT_CODE";
    var PNAME = trim(document.getElementById('txtpopclname').value.toUpperCase());
    var PEXTRA = "";
    var PEXTRA1 = "";
    var PEXTRA2 = "";
    var PEXTRA3 = "";

    var res = Booking.GencodeCL(PCOMP_CODE, PCENT_CODE, PTABLE, PCOLUMN, PNAME, PEXTRA, PEXTRA1, PEXTRA2, PEXTRA3);
    var ds = res.value;
    if (ds == null) {
        alert(res.error.description);
        return false;
    }
    if (ds.Tables[0].Rows.length > 0) {
        document.getElementById('hdnclcode').value = ds.Tables[0].Rows[0].GENCODE;
    }
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
        var toppos = 0;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divcity').scrollLeft;
        var scrolltop = document.getElementById('divcity').scrollTop;
        document.getElementById('divcity').style.left = document.getElementById("txtcity").offsetLeft + leftpos - tot + "px";
        document.getElementById('divcity').style.top = document.getElementById("txtcity").offsetTop + toppos - scrolltop + 18 +  "px"; //"510px";
        var extra = "";
        var cityname = document.getElementById('txtcity').value.toUpperCase()
        var country = document.getElementById('drpcountry').value;
        Booking.Bindcityname(country, cityname, extra, bindcity_callback);
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
        Booking.Bindcityname(country, cityname, extra, bindcity_callback);

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
    document.getElementById("lstcity").value = "0";
    document.getElementById('hdnDistrict').value = "";
    document.getElementById('hdnState').value = "";
    document.getElementById('hdnZone').value = "";
    document.getElementById('hdnRegion').value = "";
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
                    document.getElementById('hdnState').value = fndnull1(citycodename[3]);
                    document.getElementById('hdnZone').value = fndnull1(citycodename[5]);
                    document.getElementById('hdnRegion').value = fndnull1(citycodename[7]);

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


function Entertabfun() {
    var key = event.keyCode ? event.keyCode : event.which;

    document.onkeydown = function (e) {
        if (e != undefined) {
            if (e.ctrlKey && e.keyCode === 83) {
                e.preventDefault();
                if (document.getElementById('btnsave').disabled == false) {
                    SaveClick();
                    return false;
                }
            }
          
        }
    };
    if (key == 13) {

        if (document.activeElement.id == "txtbokng") {
            if (document.getElementById('txtbokngdate').disabled == false)
                document.getElementById('txtbokngdate').focus();
            return false;
        }
        if (document.activeElement.id == "txtbokngdate") {
            if (document.getElementById('txtstartdate').disabled == false)
                document.getElementById('txtstartdate').focus();
            return false;
        }
        if (document.activeElement.id == "txtstartdate") {
            if (document.getElementById('txtenddate').disabled == false)
                document.getElementById('txtenddate').focus();
            return false;
        }
        if (document.activeElement.id == "txtenddate") {
            if (document.getElementById('txtagncy').disabled == false)
                document.getElementById('txtagncy').focus();
            return false;
        }
        if (document.activeElement.id == "txtagncy") {
            if (document.getElementById('drppaaymode').disabled == false)
                document.getElementById('drppaaymode').focus();
            return false;
        }
        if (document.activeElement.id == "drppaaymode") {
            if (document.getElementById('txtclint').disabled == false)
                document.getElementById('txtclint').focus();
            return false;
        }
        if (document.activeElement.id == "txtclint") {
            if (document.getElementById('txtdeal').disabled == false)
                document.getElementById('txtdeal').focus();
            return false;
        }
        if (document.activeElement.id == "txtdeal") {
            if (document.getElementById('drpbookingtype').disabled == false)
                document.getElementById('drpbookingtype').focus();
            return false;
        }
        if (document.activeElement.id == "drpbookingtype") {
            if (document.getElementById('txtrno').disabled == false)
                document.getElementById('txtrno').focus();
            return false;
        }
        if (document.activeElement.id == "txtrno") {

            if (document.getElementById('txtrdate').disabled == false) {
                document.getElementById('txtrdate').focus();
            }
            return false;
        }
        if (document.activeElement.id == "txtrdate") {
            if (document.getElementById('txtindustry').disabled == false)
                document.getElementById('txtindustry').focus();
            return false;
        }
        if (document.activeElement.id == "txtdokitno") {
            if (document.getElementById('drpbookstatus').disabled == false)
                document.getElementById('drpbookstatus').focus();
            return false;
        }
        if (document.activeElement.id == "drpbookstatus") {
            if (document.getElementById('txtindustry').disabled == false)
                document.getElementById('txtindustry').focus();
            return false;
        }
        if (document.activeElement.id == "txtindustry") {
            if (document.getElementById('txtproduct').disabled == false)
                document.getElementById('txtproduct').focus();
            return false;
        }
        if (document.activeElement.id == "txtproduct") {
            if (document.getElementById('txtbrand').disabled == false)
                document.getElementById('txtbrand').focus();
            return false;
        }
        if (document.activeElement.id == "txtbrand") {
            if (document.getElementById('txtevent').disabled == false)
                document.getElementById('txtevent').focus();
            return false;
        }
        if (document.activeElement.id == "txtevent") {
            if (document.getElementById('txtexcutive').disabled == false)
                document.getElementById('txtexcutive').focus();
            return false;
        }
        if (document.activeElement.id == "txtexcutive") {
            if (document.getElementById('txtret').disabled == false)
                document.getElementById('txtret').focus();
            return false;
        }
        if (document.activeElement.id == "txtret") {
            if (document.getElementById('txtcpton').disabled == false)
                document.getElementById('txtcpton').focus();
            return false;
        }
        if (document.activeElement.id == "txtcpton") {
            if (document.getElementById('txtkeyn').disabled == false)
                document.getElementById('txtkeyn').focus();
            return false;
        }
        if (document.activeElement.id == "txtkeyn") {
            if (document.getElementById('drpbillto').disabled == false)
                document.getElementById('drpbillto').focus();
            return false;
        }
        if (document.activeElement.id == "drpbillto") {
            if (document.getElementById('txtagcommper').disabled == false)
                document.getElementById('txtagcommper').focus();
            return false;
        }
        if (document.activeElement.id == "txtagcommper") {
            if (document.getElementById('txtagaddcommper').disabled == false)
                document.getElementById('txtagaddcommper').focus();
            return false;
        }
        if (document.activeElement.id == "txtagaddcommper") {
            if (document.getElementById('drpratetype').disabled == false)
                document.getElementById('drpratetype').focus();
            return false;
        }
        if (document.activeElement.id == "drpratetype") {
            if (document.getElementById('drpagrateamt').disabled == false)
                document.getElementById('drpagrateamt').focus();
            return false;
        }
        if (document.activeElement.id == "drpagrateamt") {
            if (document.getElementById('txtagrateamt').disabled == false)
                document.getElementById('txtagrateamt').focus();
            return false;
        }
        if (document.activeElement.id == "txtagrateamt") {
            if (document.getElementById('drpprem').disabled == false)
                document.getElementById('drpprem').focus();
            return false;
        }
        if (document.activeElement.id == "drpprem") {
            if (document.getElementById('drpprimprem').disabled == false)
                document.getElementById('drpprimprem').focus();
            return false;
        }
        if (document.activeElement.id == "drpprimprem") {
            if (document.getElementById('drpdiscount').disabled == false)
                document.getElementById('drpdiscount').focus();
            return false;
        }
        if (document.activeElement.id == "drpdiscount") {
            if (document.getElementById('txtdiscount').disabled == false)
                document.getElementById('txtdiscount').focus();
            return false;
        }
        if (document.activeElement.id == "txtdiscount") {
            if (document.getElementById('drpservictype').disabled == false)
                document.getElementById('drpservictype').focus();
            return false;
        }
        if (document.activeElement.id == "drpservictype") {
            if (document.getElementById('drpbilltype').disabled == false)
                document.getElementById('drpbilltype').focus();
            return false;
        }
        if (document.activeElement.id == "drpbilltype") {
            if (document.getElementById('drpmonth').disabled == false)
                document.getElementById('drpmonth').focus();
            return false;
        }
        if (document.activeElement.id == "drpmonth") {
            if (document.getElementById('drpsalegroup').disabled == false)
                document.getElementById('drpsalegroup').focus();
            return false;
        }
        if (document.activeElement.id == "drpsalegroup") {
            if (document.getElementById('drpsalestype').disabled == false)
                document.getElementById('drpsalestype').focus();
            return false;
        }
        if (document.activeElement.id == "drpsalestype") {
            if (document.getElementById('drpchannel').disabled == false)
                document.getElementById('drpchannel').focus();
            return false;
        }
        if (document.activeElement.id == "drpchannel") {
            if (document.getElementById('drpadtype').disabled == false)
                document.getElementById('drpadtype').focus();
            return false;
        }
        if (document.activeElement.id == "drpadtype") {
            if (document.getElementById('txttapid').disabled == false)
                document.getElementById('txttapid').focus();
            return false;
        }
        if (document.activeElement.id == "txttapid") {
            if (document.getElementById('rodptype').disabled == false)
                document.getElementById('rodptype').focus();
            return false;
        }
        if (document.activeElement.id == "rodptype") {
            if (document.getElementById('txtfromtime').disabled == false)
                document.getElementById('txtfromtime').focus();
            return false;
        }
        if (document.activeElement.id == "txtfromtime") {
            if (document.getElementById('txttotime').disabled == false)
                document.getElementById('txttotime').focus();
            return false;
        }
        if (document.activeElement.id == "txttotime") {
            if (document.getElementById('txtnProgName').disabled == false)
                document.getElementById('txtnProgName').focus();
            return false;
        }
        if (document.activeElement.id == "txtnProgName") {
            if (document.getElementById('drpspottype').disabled == false)
                document.getElementById('drpspottype').focus();
            return false;
        }
        //        if (document.activeElement.id == "drpspottype") {
        //            if (document.getElementById('txtsegment').disabled == false)
        //                document.getElementById('txtsegment').focus();
        //            return false;
        //        }
        //        if (document.activeElement.id == "txtsegment") {
        //            if (document.getElementById('txtpostion').disabled == false)
        //                document.getElementById('txtpostion').focus();
        //            return false;
        //        }
        if (document.activeElement.id == "drpspottype") {

            document.getElementById('days1').focus();
            return false;
        }
        if (document.activeElement.id == "days1") {


            document.getElementById('days2').focus();
            return false;
        }
        if (document.activeElement.id == "days2") {

            document.getElementById('days3').focus();
            return false;
        }

        if (document.activeElement.id == "days3") {

            document.getElementById('days4').focus();
            return false;
        }
        if (document.activeElement.id == "days4") {

            document.getElementById('days5').focus();
            return false;
        }
        if (document.activeElement.id == "days5") {

            document.getElementById('days6').focus();
            return false;
        }
        if (document.activeElement.id == "days6") {

            document.getElementById('days7').focus();
            return false;
        }
        if (document.activeElement.id == "days7") {

            document.getElementById('days8').focus();
            return false;
        }
        if (document.activeElement.id == "days8") {

            document.getElementById('days9').focus();
            return false;
        }
        if (document.activeElement.id == "days9") {

            document.getElementById('days10').focus();
            return false;
        }
        if (document.activeElement.id == "days10") {

            document.getElementById('days11').focus();
            return false;
        }
        if (document.activeElement.id == "days11") {

            document.getElementById('days12').focus();
            return false;
        }
        if (document.activeElement.id == "days12") {

            document.getElementById('days13').focus();
            return false;
        }
        if (document.activeElement.id == "days13") {

            document.getElementById('days14').focus();
            return false;
        }
        if (document.activeElement.id == "days14") {

            document.getElementById('days15').focus();
            return false;
        }
        if (document.activeElement.id == "days15") {

            document.getElementById('days16').focus();
            return false;
        }

        if (document.activeElement.id == "days16") {

            document.getElementById('days17').focus();
            return false;
        }

        if (document.activeElement.id == "days17") {

            document.getElementById('days18').focus();
            return false;
        }

        if (document.activeElement.id == "days18") {

            document.getElementById('days19').focus();
            return false;
        }

        if (document.activeElement.id == "days19") {

            document.getElementById('days20').focus();
            return false;
        }

        if (document.activeElement.id == "days20") {

            document.getElementById('days21').focus();
            return false;
        }
        if (document.activeElement.id == "days21") {

            document.getElementById('days22').focus();
            return false;
        }

        if (document.activeElement.id == "days22") {

            document.getElementById('days23').focus();
            return false;
        }
        if (document.activeElement.id == "days23") {

            document.getElementById('days24').focus();
            return false;
        }
        if (document.activeElement.id == "days24") {

            document.getElementById('days25').focus();
            return false;
        }

        if (document.activeElement.id == "days25") {

            document.getElementById('days26').focus();
            return false;
        }

        if (document.activeElement.id == "days26") {

            document.getElementById('days27').focus();
            return false;
        }

        if (document.activeElement.id == "days27") {

            document.getElementById('days28').focus();
            return false;
        }

        if (document.activeElement.id == "days28") {

            document.getElementById('days29').focus();
            return false;
        }
        if (document.activeElement.id == "days29") {

            document.getElementById('days30').focus();
            return false;
        }

        if (document.activeElement.id == "days30") {

            document.getElementById('days31').focus();
            return false;
        }

        if (document.activeElement.id == "days31") {

            document.getElementById('btnpost').focus();
            return false;
        }





    }
    else if (document.activeElement.type == "button" || document.activeElement.type == "submit" || document.activeElement.type == "image") {
        return key;
    }




}
function load() {
    // open_sch();
    if (document.getElementById('hdnbookid').value != "") {
        document.getElementById('txtbokng').value = document.getElementById('hdnbookid').value;
        document.getElementById('txtbokngdate').value = "";
        document.getElementById('txtstartdate').value = "";
        document.getElementById('txtrdate').value = "";
        Execute();
    }
    postcreatgrid();
    DsblFlds();
    document.getElementById('btncrt').focus();
    document.getElementById('drpbookingtype').value = "N";
    copytodate('N');
    monthbind();

    if (document.getElementById("hiddenbookno").value != "" && document.getElementById("hiddenbookdate").value != "") {

        document.getElementById("txtbokng").value = document.getElementById("hiddenbookno").value;
        document.getElementById("txtbokngdate").value = document.getElementById("hiddenbookdate").value;
        document.getElementById("txtrdate").value = "";
        document.getElementById("txtstartdate").value = "";
        document.getElementById("txtenddate").value = "";
        Execute();
    }

    if (document.getElementById('hdnformflag').value == "UpdDokitNo" || document.getElementById('hdnformflag').value == "BillingProcess" || document.getElementById('hdnformflag').value == "Cancelbills") {

        Execute();

                filgriddate();
                monthbind();

    }
    return false;
}

function DsblFlds() {
    document.getElementById('txtbokng').disabled = true;
    document.getElementById('txtbokngdate').disabled = true;
    document.getElementById('txtstartdate').disabled = true;
    document.getElementById('txtenddate').disabled = true;
    document.getElementById('txtagncy').disabled = true;
    document.getElementById('drppaaymode').disabled = true;
    document.getElementById('txtagoutstand').disabled = true;
    document.getElementById('txtclint').disabled = true;
    document.getElementById('txtdeal').disabled = true;
    document.getElementById('drpbookingtype').disabled = true;
    document.getElementById('txtrno').disabled = true;
    document.getElementById('txtrdate').disabled = true;
    document.getElementById('txtdokitno').disabled = true;
    document.getElementById('drpbookstatus').disabled = true;
    document.getElementById('txtindustry').disabled = true;
    document.getElementById('txtproduct').disabled = true;
    document.getElementById('txtbrand').disabled = true;
    document.getElementById('txtevent').disabled = true;
    document.getElementById('txtexcutive').disabled = true;
    document.getElementById('txtret').disabled = true;
    document.getElementById('txtcpton').disabled = true;
    document.getElementById('txtkeyn').disabled = true;
    document.getElementById('drpbillto').disabled = true;
    document.getElementById('txtagcommper').disabled = true;
    document.getElementById('drpratetype').disabled = true;
    document.getElementById('drpagrateamt').disabled = true;
    document.getElementById('txtagrateamt').disabled = true;
    document.getElementById('drpprem').disabled = true;
    document.getElementById('txtprem').disabled = true;
    document.getElementById('drpdiscount').disabled = true;
    document.getElementById('txtdiscount').disabled = true;
    document.getElementById('txtamt').disabled = true;

    document.getElementById('drpservictype').disabled = true;
    document.getElementById('drpbilltype').disabled = true;
    document.getElementById('drpmonth').disabled = true;
    document.getElementById('drpsalegroup').disabled = true;
    document.getElementById('drpsalestype').disabled = true; 
    document.getElementById('drpprimprem').disabled = true;

    document.getElementById('drpchannel').disabled = true;
    document.getElementById('drpadtype').disabled = true;
    document.getElementById('txttapid').disabled = true;
    document.getElementById('rodptype').disabled = true;
    document.getElementById('txtfromtime').disabled = true;
    document.getElementById('txttotime').disabled = true;
    document.getElementById('rodptype').disabled = true;
    document.getElementById('txtnProgName').disabled = true;
    document.getElementById('drpspottype').disabled = true;
    //document.getElementById('txtsegment').disabled = true;
    // document.getElementById('txtpostion').disabled = true;
    document.getElementById('btnpost').disabled = true;

    document.getElementById('days1').disabled = true;
    document.getElementById('days2').disabled = true;
    document.getElementById('days3').disabled = true;
    document.getElementById('days4').disabled = true;
    document.getElementById('days5').disabled = true;
    document.getElementById('days6').disabled = true;
    document.getElementById('days7').disabled = true;
    document.getElementById('days8').disabled = true;
    document.getElementById('days9').disabled = true;
    document.getElementById('days10').disabled = true;
    document.getElementById('days11').disabled = true;
    document.getElementById('days12').disabled = true;
    document.getElementById('days13').disabled = true;
    document.getElementById('days14').disabled = true;
    document.getElementById('days15').disabled = true;
    document.getElementById('days16').disabled = true;
    document.getElementById('days17').disabled = true;
    document.getElementById('days18').disabled = true;
    document.getElementById('days19').disabled = true;
    document.getElementById('days20').disabled = true;
    document.getElementById('days21').disabled = true;
    document.getElementById('days22').disabled = true;
    document.getElementById('days23').disabled = true;
    document.getElementById('days24').disabled = true;
    document.getElementById('days25').disabled = true;
    document.getElementById('days26').disabled = true;
    document.getElementById('days27').disabled = true;
    document.getElementById('days28').disabled = true;
    document.getElementById('days29').disabled = true;
    document.getElementById('days30').disabled = true;
    document.getElementById('days31').disabled = true;
}

function createdata() {
    document.getElementById('btnsave').disabled = false;
    document.getElementById('saveshow').style.display = "block";
    document.getElementById('showcreate').style.display = "none";
    document.getElementById('editshow').style.display = "none";

    document.getElementById('btnclientdet').disabled = false;
    
    document.getElementById('txtbokng').disabled = true;
    document.getElementById('txtbokngdate').disabled = false;
    document.getElementById('txtstartdate').disabled = false;
    document.getElementById('txtenddate').disabled = false;
    document.getElementById('txtagncy').disabled = false;
    document.getElementById('drppaaymode').disabled = false;
    document.getElementById('txtagoutstand').disabled = false;
    document.getElementById('txtclint').disabled = false;
    document.getElementById('txtdeal').disabled = false;
    document.getElementById('drpbookingtype').disabled = false;
    document.getElementById('txtrno').disabled = false;
    document.getElementById('txtrdate').disabled = false;
    document.getElementById('txtdokitno').disabled = true;
    document.getElementById('drpbookstatus').disabled = true;
    document.getElementById('txtindustry').disabled = false;
    document.getElementById('txtproduct').disabled = false;
    document.getElementById('txtbrand').disabled = false;
    document.getElementById('txtevent').disabled = false;
    document.getElementById('txtexcutive').disabled = false;
    document.getElementById('txtret').disabled = false;
    document.getElementById('txtcpton').disabled = false;
    document.getElementById('txtkeyn').disabled = false;
    document.getElementById('drpbillto').disabled = false;
    document.getElementById('txtagcommper').disabled = false;
    document.getElementById('drpratetype').disabled = false;
    document.getElementById('drpagrateamt').disabled = false;
    document.getElementById('txtagrateamt').disabled = false;
    document.getElementById('drpprem').disabled = false;
    document.getElementById('txtprem').disabled = true;
    document.getElementById('drpdiscount').disabled = false;
    document.getElementById('txtdiscount').disabled = false;
    document.getElementById('txtamt').disabled = false;

    document.getElementById('drpservictype').disabled = false;
    document.getElementById('drpbilltype').disabled = false;
    document.getElementById('drpmonth').disabled = false;
    document.getElementById('drpsalegroup').disabled = false;
    document.getElementById('drpsalestype').disabled = false;
    document.getElementById('drpprimprem').disabled = false;

    document.getElementById('drpchannel').disabled = false;
    document.getElementById('drpadtype').disabled = false;
    document.getElementById('txttapid').disabled = false;
    document.getElementById('rodptype').disabled = false;
    document.getElementById('txtfromtime').disabled = false;
    document.getElementById('txttotime').disabled = false;
    document.getElementById('rodptype').disabled = false;
    document.getElementById('txtnProgName').disabled = false;
    document.getElementById('drpspottype').disabled = false;
    // document.getElementById('txtsegment').disabled = false;
    // document.getElementById('txtpostion').disabled = false;
    document.getElementById('btnpost').disabled = false;


    document.getElementById('days1').disabled = false;
    document.getElementById('days2').disabled = false;
    document.getElementById('days3').disabled = false;
    document.getElementById('days4').disabled = false;
    document.getElementById('days5').disabled = false;
    document.getElementById('days6').disabled = false;
    document.getElementById('days7').disabled = false;
    document.getElementById('days8').disabled = false;
    document.getElementById('days9').disabled = false;
    document.getElementById('days10').disabled = false;
    document.getElementById('days11').disabled = false;
    document.getElementById('days12').disabled = false;
    document.getElementById('days13').disabled = false;
    document.getElementById('days14').disabled = false;
    document.getElementById('days15').disabled = false;
    document.getElementById('days16').disabled = false;
    document.getElementById('days17').disabled = false;
    document.getElementById('days18').disabled = false;
    document.getElementById('days19').disabled = false;
    document.getElementById('days20').disabled = false;
    document.getElementById('days21').disabled = false;
    document.getElementById('days22').disabled = false;
    document.getElementById('days23').disabled = false;
    document.getElementById('days24').disabled = false;
    document.getElementById('days25').disabled = false;
    document.getElementById('days26').disabled = false;
    document.getElementById('days27').disabled = false;
    document.getElementById('days28').disabled = false;
    document.getElementById('days29').disabled = false;
    document.getElementById('days30').disabled = false;
    document.getElementById('days31').disabled = false;
    blankcreat();
    document.getElementById('txtbokngdate').focus();
    hiddentext = "new";
    GenerateTempCode();
    return false;
}

function GenerateTempCode() {
    var Type = "BMS_BOOKING";

    var res = Booking.Gentempcode(Type);
    var ds = res.value;
    if (ds == null) {
        alert(res.error.description);
        return false;
    }
    document.getElementById('hdnbookno').value = ds.Tables[0].Rows[0].TEMP_CODE;
}
function SaveClick() {
    var msg = Booking.checkSession();
    if (msg.value == "false") {
        alert("Your session has been expired");
        window.location.href = "Login.aspx";
        return false;
    }

    document.getElementById('txtclint').value = trim(document.getElementById('txtclint').value.toUpperCase());
    document.getElementById('txtrno').value = trim(document.getElementById('txtrno').value.toUpperCase());
    document.getElementById('txtdokitno').value = trim(document.getElementById('txtdokitno').value.toUpperCase());
    document.getElementById('txtcpton').value = trim(document.getElementById('txtcpton').value.toUpperCase());
    document.getElementById('txtkeyn').value = trim(document.getElementById('txtkeyn').value.toUpperCase());
    if (document.getElementById('txtbokngdate').value == "") {
        alert("Please Enter Booking Date");
        document.getElementById('txtbokngdate').focus();
        return false;
    }
    if (document.getElementById('txtstartdate').value == "") {
        alert("Please Select Start Date");
        document.getElementById('txtstartdate').focus();
        return false;
    }
    if (document.getElementById('txtenddate').value == "") {
        alert("Please Select End Date");
        document.getElementById('txtenddate').focus();
        return false;
    }
    if (document.getElementById('hdngencode').value == "") {
        alert("Please Select Agency Name");
        document.getElementById('txtagncy').focus();
        return false;
    }
    if (document.getElementById('drppaaymode').value == "") {
        alert("Please Select Pay Mode");
        document.getElementById('drppaaymode').focus();
        return false;
    }
    if (document.getElementById('txtclint').value == "") {
        alert("Please Select Client Name");
        document.getElementById('txtclint').focus();
        return false;
    }


    if (browser != "Microsoft Internet Explorer")
        lblname = document.getElementById('lblrno').textContent;
    else
        lblname = document.getElementById('lblrno').innerText;

    if (lblname.indexOf('*') >= 0) {
        if (document.getElementById('txtrno').value == "") {
            alert("Please Enter " + (lblname.replace('*', "")));
            document.getElementById('txtrno').focus();
            return false;
        }
    }


    if (browser != "Microsoft Internet Explorer")
        lblname = document.getElementById('lblrdate').textContent;
    else
        lblname = document.getElementById('lblrdate').innerText;

    if (lblname.indexOf('*') >= 0) {
        if (document.getElementById('txtrdate').value == "") {
            alert("Please Enter " + (lblname.replace('*', "")));
            if (document.getElementById('txtrdate').disabled == false)
                document.getElementById('txtrdate').focus();
            return false;
        }
    }

    if (browser != "Microsoft Internet Explorer")
        lblname = document.getElementById('lblexclv').textContent;
    else
        lblname = document.getElementById('lblexclv').innerText;

    if (lblname.indexOf('*') >= 0) {
        if (document.getElementById('hdnexcutive').value == "") {
            alert("Please Select " + (lblname.replace('*', "")));
            if (document.getElementById('txtexcutive').disabled == false)
                document.getElementById('txtexcutive').focus();
            return false;
        }
    }

    if (document.getElementById('hdnexcutive').value == "" && document.getElementById('hdnret').value == "") {
        alert("Please Select Executive or Retainer by Pressing F2");
        if (document.getElementById('txtexcutive').disabled == false)
            document.getElementById('txtexcutive').focus();
        return false;
    }

    if (browser != "Microsoft Internet Explorer")
        lblname = document.getElementById('lblindstry').textContent;
    else
        lblname = document.getElementById('lblindstry').innerText;

    if (lblname.indexOf('*') >= 0) {
        if (document.getElementById('hiddenindustry').value == "") {
            alert("Please Select " + (lblname.replace('[F2]', "").replace('*', "")));
            if (document.getElementById('txtindustry').disabled == false)
                document.getElementById('txtindustry').focus();
            return false;
        }
    }

    if (browser != "Microsoft Internet Explorer")
        lblname = document.getElementById('lblprdct').textContent;
    else
        lblname = document.getElementById('lblprdct').innerText;

    if (lblname.indexOf('*') >= 0) {
        if (document.getElementById('hiddenproduct').value == "") {
            alert("Please Enter " + (lblname.replace('*', "").replace('[F2]', "")) + "  by Pressing F2");
            if (document.getElementById('txtproduct').disabled == false)
                document.getElementById('txtproduct').focus();
            return false;
        }
    }

    if (browser != "Microsoft Internet Explorer")
        lblname = document.getElementById('lblbrnd').textContent;
    else
        lblname = document.getElementById('lblbrnd').innerText;

    if (lblname.indexOf('*') >= 0) {
        if (document.getElementById('hiddenbrand').value == "") {
            alert("Please Enter " + (lblname.replace('*', "").replace('[F2]', "")) + "  by Pressing F2");
            if (document.getElementById('txtbrand').disabled == false)
                document.getElementById('txtbrand').focus();
            return false;
        }
    }

    if (browser != "Microsoft Internet Explorer")
        lblname = document.getElementById('lblevnt').textContent;
    else
        lblname = document.getElementById('lblevnt').innerText;

    if (lblname.indexOf('*') >= 0) {
        if (document.getElementById('hideenevent').value == "") {
            alert("Please Enter " + (lblname.replace('*', "").replace('[F2]', "")) + "  by Pressing F2");
            if (document.getElementById('txtevent').disabled == false)
                document.getElementById('txtevent').focus();
            return false;
        }
    }

    if (browser != "Microsoft Internet Explorer")
        lblname = document.getElementById('lblbokngtype').textContent;
    else
        lblname = document.getElementById('lblbokngtype').innerText;

    if (lblname.indexOf('*') >= 0) {
        if (document.getElementById('drpbookingtype').value == "0") {
            alert("Please Select " + (lblname.replace('*', "")));
            if (document.getElementById('drpbookingtype').disabled == false)
                document.getElementById('drpbookingtype').focus();
            return false;
        }
    }

    if (document.getElementById('drpsalegroup').value == "0") {
        alert("Please Select Sales Group");
        document.getElementById('drpsalegroup').focus();
        return false;
    }
    if (document.getElementById('drpsalegroup').value == "0") {
        alert("Please Select Sales Group");
        document.getElementById('drpsalegroup').focus();
        return false;
    }
   
    
    if (document.getElementById('txtdokitno').value == "" && document.getElementById('txtrno').value == "") {
        if (confirm("Do you want to generate Dokit Booking?")) {
            GenerateDokitNo();
            document.getElementById('txtrdate').focus();
            return false;
        }
        else {
            document.getElementById('txtrno').focus();
            return false;
        }
    }
    var PCOMP_CODE = document.getElementById('hdncompcode').value;
    var PCENT_CODE = document.getElementById('hdncenter').value;
    var PBRANCH_CODE = document.getElementById('hiddenbranch').value;
    var PBOOKINGNO = document.getElementById('txtbokng').value;
    var PAGENCY_CODE = document.getElementById('hdngencode').value;
    var PRONO = document.getElementById('txtrno').value;
    var PEXTRA1 = "";
    var PEXTRA2 = "";
    var PEXTRA3 = "";
    var dateformat = document.getElementById('hiddendateformat').value;
    var bookingdate = document.getElementById('txtbokngdate').value;
    if (dateformat == "dd/mm/yyyy") {
        bookingdate = bookingdate.split('/');
        bookingdate = bookingdate[1] + "/" + bookingdate[0] + "/" + bookingdate[2];
    }
    else if (dateformat == "mm/dd/yyyy") {

    }
    else if (dateformat == "yyyy/mm/dd") {
        bookingdate = bookingdate.split('/');
        bookingdate = bookingdate[1] + "/" + bookingdate[2] + "/" + bookingdate[0];
    }
    else {
        alert("Dateformat is either null or blank");
        return false;
    }
    var mainres = Booking.monthclose(PCOMP_CODE, bookingdate)
    var mainds = mainres.value;
    if (mainds.Tables[0].Rows.length > 0) {
        if (mainds.Tables[0].Rows[0].MONTH_CLOSE == "Y" || mainds.Tables[0].Rows[0].MONTH_CLOSE == "") {
            alert("Transaction not allowed for selected Period...Month/Financial Year already Locked. Contact Administrator")
            return false
        }
    }
    if (document.getElementById('drpagrateamt').value == "A") {
        if (flagdata == "2") {
            alert("Please click on Amount Charged");
            return false;
        }
    }
    if (trim(document.getElementById('txtbillamt').value) == "") {
        if (document.getElementById('drpbookingtype').value == "N") {
            alert("Total Amount Can't be Blank..Please click on Amount Charged");
        }
        return false;
    }
    if (hiddentext == "modify") // in case of modify mode
    {

        if (PRONO != "") {
            var res = Booking.ChkROno(PCOMP_CODE, PCENT_CODE, PBRANCH_CODE, PBOOKINGNO, PAGENCY_CODE, PRONO, PEXTRA1, PEXTRA2, PEXTRA3);
            var ds = res.value;
            if (ds == null) {
                alert(res.error.description);
                return false;
            }
            if (ds.Tables[0].Rows.length > 0) {
                alert("This Ro No has been already assigned")
                //                document.getElementById('txtrono').value = "";
                if (document.getElementById('txtrno').disabled == false)
                    document.getElementById('txtrno').focus();
                return false;
            }
        }
        Call_Modify("");

        return false;
    }
    else // in case of save mode
    {
        if (PRONO != "") {
            var res = Booking.ChkROno(PCOMP_CODE, PCENT_CODE, PBRANCH_CODE, "", PAGENCY_CODE, PRONO, PEXTRA1, PEXTRA2, PEXTRA3);
            var ds = res.value;
            if (ds == null) {
                alert(res.error.description);
                return false;
            }
            if (ds.Tables[0].Rows.length > 0) {
                alert("This Ro No has been already assigned")
                //                document.getElementById('txtrono').value = "";
                if (document.getElementById('txtrno').disabled == false)
                    document.getElementById('txtrno').focus();
                return false;
            }
        }
        document.getElementById('btnsave').disabled = true;
        call_save('');
        return false;
    }

}
function call_save(response) {
    var PCOMP_CODE = document.getElementById('hdncompcode').value;
    var PCENT_CODE = document.getElementById('hdncenter').value;
    var PBRANCH_CODE = document.getElementById('hiddenbranch').value;
    var PAD_TYPE_CODE = document.getElementById('drpadtype').value;
    var PBOOKING_TYPE = document.getElementById('drpbookingtype').value;
    var PBOOKING_NO = document.getElementById('hdnbookno').value;
    var PDEAL_NO = document.getElementById('txtdeal').value;
    var PRO_NO = document.getElementById('txtrno').value;
    var PDOKIT_NO = document.getElementById('txtdokitno').value;
    var PBOOKING_STATUS = document.getElementById('drpbookstatus').value;
    var PRO_STATUS = "";
    var PAGENCY_CODE_SUBCODE = document.getElementById('hdngencode').value;
    var PCLIENT_CODE = document.getElementById('hdnclient').value;
    var PCLIENT_NAME = document.getElementById('txtclint').value;
    var PCLIENT_ADD1 = "";
    var PCLIENT_ADD2 = "";
    var PCLIENT_POST_CODE = "";
    var PCLIENT_PHONE = "";
    var PCLIENT_EMAIL_ID = "";
    var PEXEC_CODE = document.getElementById('hdnexcutive').value;
    var PRET_CODE = document.getElementById('hdnret').value;
    var PCREDIT_DAYS = "";
    var PPAYMODE_CODE = document.getElementById('drppaaymode').value;
    var PCHEQUE_NO = "";
    var PCHEQUE_AMT = "";
    var PCHEQUE_DATE = "";
    var PBANK_CODE = "";
    var PCREDIT_CARD_TYPE = "";
    var PCREDIT_CARD_NO = "";
    var PCREDIT_CARD_AMT = "";
    var PCREDIT_CARD_EXP_DT = "";
    var PCREDIT_CARD_HODER = "";
    var PCASH_RECEIPT_NO = "";
    var PCASH_RECEIPT_DT = "";
    var PCASH_RECEIPT_AMT = "";
    var PINDUSTRY_CODE = document.getElementById('hiddenindustry').value;
    var PPRODUCT_CODE = document.getElementById('hiddenproduct').value;
    var PBRAND_CODE = document.getElementById('hiddenbrand').value;
    var PEVENT_CODE = document.getElementById('hideenevent').value;
    var PCAPTION = document.getElementById('txtcpton').value;
    var PKEY_NO = document.getElementById('txtkeyn').value;
    var PRATE_TYPE_CODE = document.getElementById('drpratetype').value;
    var PCURRENCY_CODE = "";
    var PEXEC_COMM_PER = "";
    var PEXEC_COMM_AMT = "";
    var PRET_COMM_PER = "";
    var PRET_COMM_AMT = "";

    var PCARD_RATE = "";
    var PAGREED_FLAG = document.getElementById('drpagrateamt').value;
    var PAGREED_AMT = document.getElementById('txtagrateamt').value;
    var PVAT_AMT = "";
    var PBOOKED_BY = document.getElementById('hiddenuserid').value;
    var PGROSS_AMT = document.getElementById('txtamt').value;
    var PCASH_DISCOUNT_TYPE = document.getElementById('drpdiscount').value;
    var PCASH_DISCOUNT = document.getElementById('txtdiscount').value;
    var PCASH_DISCOUNT_AMT = document.getElementById('txtdicgrd').value;
    var PAG_COMM_PER = document.getElementById('txtagcommper').value;
    var PAG_COMM_AMT = document.getElementById('txtagcommgrd').value;
    var PAG_ADDL_COMM_PER = document.getElementById('txtagaddcommper').value;
    var PAG_ADDL_COMM_AMT = document.getElementById('txtaddagcommgrd').value;
    var PNET_AMT = document.getElementById('txtamt').value;

    var PPREM_TYPE = document.getElementById('txtsptype').value;
    var PPREM = document.getElementById('txtprem').value;
    var PPREM_AMT = document.getElementById('txtpermgrd').value;

    var PPRIME_PREM_TYPE = document.getElementById('txtprimetype').value;
    var PPRIME_PREM_PER = document.getElementById('txtprimprem').value;
    var PPRIME_PREM_AMT = document.getElementById('txtprimpremg').value;
    var PSEVICE_TAX_AMT = document.getElementById('txtservictaxg').value;
    var PTOTAL_NET_AMT = document.getElementById('txtbillamt').value;
    var PPREM_CODE = document.getElementById('drpprem').value;
    var PPRIME_PREM_CODE = document.getElementById('drpprimprem').value;

    var PBARTER_CODE = "";
    var PPRINT_REMARKS = "";
    var PBILL_REMARKS = "";
    var PBOOKING_AUDIT_FLAG = "B";
    var PBOOKING_AUDIT_REMARKS = "";
    var PBOOKING_AUDIT_DATE = "";
    var PAUDIT_USER = "";
    var PATTATCH_DOCNAME = "";
    var PBILLING_TYPE = document.getElementById('drpbilltype').value;
    var PBILL_TO = document.getElementById('drpbillto').value;
    var PPANEL_AD_FLAG = "";
    var PMERGED_CLIENT_CODE = "";
    var PMERGED_AGENCY_CODE = "";
    var PCREATED_BY = document.getElementById('hiddenuserid').value;
    var PEXTRA = document.getElementById('drpsalegroup').value;
    var PEXTRA1 = document.getElementById('drpsalestype').value;
    var PEXTRA2 = "";
    var PEXTRA3 = "";
    var PEXTRA4 = "";
    var PEXTRA5 = "";
    var dateformat = document.getElementById('hiddendateformat').value;
    var PBOOKING_DATE = document.getElementById('txtbokngdate').value;
    var PRO_DATE = document.getElementById('txtrdate').value;
    var PPUBLISH_START_FROM = document.getElementById('txtstartdate').value;
    var PPUBLISH_START_TO = document.getElementById('txtenddate').value;
    var PCREATION_DATE = document.getElementById('hdndate').value;

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
        if (PCREATION_DATE != "") {
            PCREATION_DATE = PCREATION_DATE.split('/');
            PCREATION_DATE = PCREATION_DATE[1] + "/" + PCREATION_DATE[0] + "/" + PCREATION_DATE[2];
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
        if (PCREATION_DATE != "") {
            PCREATION_DATE = PCREATION_DATE.split('/');
            PCREATION_DATE = PCREATION_DATE[1] + "/" + PCREATION_DATE[2] + "/" + PCREATION_DATE[0];
        }
    }
    else {
        alert("Dateformat is either null or blank");
        return false;
    }


    var res_error = Booking.InsertintoMTemp(PCOMP_CODE, PCENT_CODE, PBRANCH_CODE, PAD_TYPE_CODE, PBOOKING_TYPE, PBOOKING_NO, PBOOKING_DATE, PDEAL_NO, PRO_NO, PRO_DATE, PDOKIT_NO, PBOOKING_STATUS, PRO_STATUS, PAGENCY_CODE_SUBCODE, PCLIENT_CODE, PCLIENT_NAME, PCLIENT_ADD1, PCLIENT_ADD2, PCLIENT_POST_CODE, PCLIENT_PHONE, PCLIENT_EMAIL_ID, PEXEC_CODE, PRET_CODE, PCREDIT_DAYS, PPAYMODE_CODE, PCHEQUE_NO, PCHEQUE_AMT, PCHEQUE_DATE, PBANK_CODE, PCREDIT_CARD_TYPE, PCREDIT_CARD_NO, PCREDIT_CARD_AMT, PCREDIT_CARD_EXP_DT, PCREDIT_CARD_HODER, PCASH_RECEIPT_NO, PCASH_RECEIPT_DT, PCASH_RECEIPT_AMT, PINDUSTRY_CODE, PPRODUCT_CODE, PBRAND_CODE, PEVENT_CODE, PCAPTION, PKEY_NO, PRATE_TYPE_CODE, PPUBLISH_START_FROM, PPUBLISH_START_TO, PCURRENCY_CODE, PEXEC_COMM_PER, PEXEC_COMM_AMT, PRET_COMM_PER, PRET_COMM_AMT, PCARD_RATE, PAGREED_FLAG, PAGREED_AMT, PVAT_AMT, PBOOKED_BY, PGROSS_AMT, PCASH_DISCOUNT_TYPE, PCASH_DISCOUNT, PCASH_DISCOUNT_AMT, PAG_COMM_PER, PAG_COMM_AMT, PAG_ADDL_COMM_PER, PAG_ADDL_COMM_AMT, PNET_AMT, PPREM_TYPE, PPREM, PPREM_AMT, PPRIME_PREM_TYPE, PPRIME_PREM_PER, PPRIME_PREM_AMT, PSEVICE_TAX_AMT, PTOTAL_NET_AMT, PPREM_CODE, PPRIME_PREM_CODE, PBARTER_CODE, PPRINT_REMARKS, PBILL_REMARKS, PBOOKING_AUDIT_FLAG, PBOOKING_AUDIT_REMARKS, PBOOKING_AUDIT_DATE, PAUDIT_USER, PATTATCH_DOCNAME, PBILLING_TYPE, PBILL_TO, PPANEL_AD_FLAG, PMERGED_CLIENT_CODE, PMERGED_AGENCY_CODE, PCREATED_BY, PEXTRA, PEXTRA1, PEXTRA2, PEXTRA3, PEXTRA4, PEXTRA5);
    if (res_error.value == null) {
        alert(res_error.error.description);
        return false
    }
    var gridlength = document.getElementById('drincrgfGrid').rows.length;
    for (var k = 0; k < (gridlength - 1); k++) {
        if (document.getElementById("sstr_" + k).style.display != "none") {

            var PCHANNEL = document.getElementById("Channelcode_" + k).value;
            var PTAPE_ID = document.getElementById("tapidcode_" + k).value;
            var chkdate = document.getElementById("Schueduledate_" + k).value;
            var datafill = chkdate.split("/")
            var monthg = datafill[0];
            var year = datafill[1];
            var PSCH_DATE = monthg + "/" + "01" + "/" + year;

            var PRODP = document.getElementById("primcode_" + k).value;
            var PFROM_TIME = document.getElementById("FromTime_" + k).value;
            var PTO_TIME = document.getElementById("EndTime_" + k).value;

            var PPROGRAMME_CODE = document.getElementById("programcode_" + k).value;
            var PSOPT_TYPE = document.getElementById("spotcode_" + k).value;
            var PSEG_CODE = "";
            var PPOSTION = "";
            var PNO_OF_SPOT = document.getElementById("Spot_" + k).value;
            var PDURATION = document.getElementById("Duration_" + k).value;
            var PRATE_AMT = document.getElementById("Rate_" + k).value;
            var PGROSS_AMT = document.getElementById("Gross_" + k).value;
            var PDIS_PER = "";
            var PDIS_AMT = document.getElementById("disc_" + k).value;
            var PPREM_PER = "";
            var PPREM_AMT = document.getElementById("prem_" + k).value;
            var PAGRED_AMT = document.getElementById("agrate_" + k).value;
            var PCOMM_AMT = document.getElementById("agcomm_" + k).value;
            var PADDL_COMM_AMT = document.getElementById("addAgComm_" + k).value;
            var PNET_AMT = document.getElementById("netamt_" + k).value;
            var PNO_DAYS = document.getElementById("nubervalue_" + k).value;
            var PINS_STATUS = document.getElementById("Status_" + k).value;
            PAD_TYPE_CODE = document.getElementById("Adtypecode_" + k).value;
            //var PINSERTION_ID = document.getElementById("rowid_" + k).value;
            var PPRIME_PREM_AMT = document.getElementById("primeamtgr_" + k).value;
            var PSEVICE_TAX_AMT = document.getElementById("servtaxamt_" + k).value;
            var PTOTAL_NET_AMT = document.getElementById("billamtgrid_" + k).value;
            var P_DAY_1 = document.getElementById("dayg1_" + k).value;
            var P_DAY_2 = document.getElementById("dayg2_" + k).value;
            var P_DAY_3 = document.getElementById("dayg3_" + k).value;
            var P_DAY_4 = document.getElementById("dayg4_" + k).value;
            var P_DAY_5 = document.getElementById("dayg5_" + k).value;
            var P_DAY_6 = document.getElementById("dayg6_" + k).value;
            var P_DAY_7 = document.getElementById("dayg7_" + k).value;
            var P_DAY_8 = document.getElementById("dayg8_" + k).value;
            var P_DAY_9 = document.getElementById("dayg9_" + k).value;
            var P_DAY_10 = document.getElementById("dayg10_" + k).value;
            var P_DAY_11 = document.getElementById("dayg11_" + k).value;
            var P_DAY_12 = document.getElementById("dayg12_" + k).value;
            var P_DAY_13 = document.getElementById("dayg13_" + k).value;
            var P_DAY_14 = document.getElementById("dayg14_" + k).value;
            var P_DAY_15 = document.getElementById("dayg15_" + k).value;
            var P_DAY_16 = document.getElementById("dayg16_" + k).value;
            var P_DAY_17 = document.getElementById("dayg17_" + k).value;
            var P_DAY_18 = document.getElementById("dayg18_" + k).value;
            var P_DAY_19 = document.getElementById("dayg19_" + k).value;
            var P_DAY_20 = document.getElementById("dayg20_" + k).value;
            var P_DAY_21 = document.getElementById("dayg21_" + k).value;
            var P_DAY_22 = document.getElementById("dayg22_" + k).value;
            var P_DAY_23 = document.getElementById("dayg23_" + k).value;
            var P_DAY_24 = document.getElementById("dayg24_" + k).value;
            var P_DAY_25 = document.getElementById("dayg25_" + k).value;
            var P_DAY_26 = document.getElementById("dayg26_" + k).value;
            var P_DAY_27 = document.getElementById("dayg27_" + k).value;
            var P_DAY_28 = document.getElementById("dayg28_" + k).value;
            var P_DAY_29 = document.getElementById("dayg29_" + k).value;
            var P_DAY_30 = document.getElementById("dayg30_" + k).value;
            var P_DAY_31 = document.getElementById("dayg31_" + k).value;

            var res_error = Booking.InsertintoCTemp(PCOMP_CODE, PCENT_CODE, PBRANCH_CODE, PAD_TYPE_CODE, PBOOKING_TYPE, PBOOKING_NO, PBOOKING_DATE, PCHANNEL, PTAPE_ID, PSCH_DATE, PRODP, PFROM_TIME, PTO_TIME, PPROGRAMME_CODE, PSOPT_TYPE, PSEG_CODE, PPOSTION, PNO_OF_SPOT, PDURATION, PRATE_AMT, PGROSS_AMT, PDIS_PER, PDIS_AMT, PPREM_PER, PPREM_AMT, PPRIME_PREM_AMT, PSEVICE_TAX_AMT, PTOTAL_NET_AMT, PAGRED_AMT, PCOMM_AMT, PADDL_COMM_AMT, PNET_AMT, PNO_DAYS, PINS_STATUS, PCREATED_BY, PCREATION_DATE, P_DAY_1, P_DAY_2, P_DAY_3, P_DAY_4, P_DAY_5, P_DAY_6, P_DAY_7, P_DAY_8, P_DAY_9, P_DAY_10, P_DAY_11, P_DAY_12, P_DAY_13, P_DAY_14, P_DAY_15, P_DAY_16, P_DAY_17, P_DAY_18, P_DAY_19, P_DAY_20, P_DAY_21, P_DAY_22, P_DAY_23, P_DAY_24, P_DAY_25, P_DAY_26, P_DAY_27, P_DAY_28, P_DAY_29, P_DAY_30, P_DAY_31);

            if (res_error.value == null) {
                alert(res_error.error.description);
                return false
            }

        }

    }
    var pextra1 = document.getElementById('txtdokitno').value;
    var pextra2 = "";
    var pextra3 = "";
    var res_error = Booking.CommitBooking(PBOOKING_NO, PBOOKING_DATE, PCENT_CODE, PCOMP_CODE, PCREATED_BY, pextra1, pextra2, pextra3);
    if (res_error.value == null) {
        alert(res_error.error.description);
        return false
    }
    alert("Data Saved Succesfully with Booking No: " + res_error.value);
    document.getElementById('txtbokng').value = res_error.value;

    //    Execute();
    ClearClick();
}

function Call_Modify(rascall) {
    var PCOMP_CODE = document.getElementById('hdncompcode').value;
    var PCENT_CODE = document.getElementById('hdncenter').value;
    var PBRANCH_CODE = document.getElementById('hiddenbranch').value;
    var PAD_TYPE_CODE = document.getElementById('drpadtype').value;
    var PBOOKING_TYPE = document.getElementById('drpbookingtype').value;
    var PBOOKING_NO = document.getElementById('txtbokng').value;
    var PDEAL_NO = document.getElementById('txtdeal').value;
    var PRO_NO = document.getElementById('txtrno').value;
    var PDOKIT_NO = document.getElementById('txtdokitno').value;
    var PBOOKING_STATUS = document.getElementById('drpbookstatus').value;
    var PRO_STATUS = "";
    var PAGENCY_CODE_SUBCODE = document.getElementById('hdngencode').value;
    var PCLIENT_CODE = document.getElementById('hdnclient').value;
    var PCLIENT_NAME = document.getElementById('txtclint').value;
    var PCLIENT_ADD1 = "";
    var PCLIENT_ADD2 = "";
    var PCLIENT_POST_CODE = "";
    var PCLIENT_PHONE = "";
    var PCLIENT_EMAIL_ID = "";
    var PEXEC_CODE = document.getElementById('hdnexcutive').value;
    var PRET_CODE = document.getElementById('hdnret').value;
    var PCREDIT_DAYS = "";
    var PPAYMODE_CODE = document.getElementById('drppaaymode').value;
    var PCHEQUE_NO = "";
    var PCHEQUE_AMT = "";
    var PCHEQUE_DATE = "";
    var PBANK_CODE = "";
    var PCREDIT_CARD_TYPE = "";
    var PCREDIT_CARD_NO = "";
    var PCREDIT_CARD_AMT = "";
    var PCREDIT_CARD_EXP_DT = "";
    var PCREDIT_CARD_HODER = "";
    var PCASH_RECEIPT_NO = "";
    var PCASH_RECEIPT_DT = "";
    var PCASH_RECEIPT_AMT = "";
    var PINDUSTRY_CODE = document.getElementById('hiddenindustry').value;
    var PPRODUCT_CODE = document.getElementById('hiddenproduct').value;
    var PBRAND_CODE = document.getElementById('hiddenbrand').value;
    var PEVENT_CODE = document.getElementById('hideenevent').value;
    var PCAPTION = document.getElementById('txtcpton').value;
    var PKEY_NO = document.getElementById('txtkeyn').value;
    var PRATE_TYPE_CODE = document.getElementById('drpratetype').value;
    var PCURRENCY_CODE = "";
    var PEXEC_COMM_PER = "";
    var PEXEC_COMM_AMT = "";
    var PRET_COMM_PER = "";
    var PRET_COMM_AMT = "";
    var PCARD_RATE = "";
    var PAGREED_FLAG = document.getElementById('drpagrateamt').value;
    var PAGREED_AMT = document.getElementById('txtagrateamt').value;
    var PVAT_AMT = "";
    var PBOOKED_BY = document.getElementById('hiddenuserid').value;
    var PGROSS_AMT = document.getElementById('txtamt').value;
    var PCASH_DISCOUNT_TYPE = document.getElementById('drpdiscount').value;
    var PCASH_DISCOUNT = document.getElementById('txtdiscount').value;
    var PCASH_DISCOUNT_AMT = document.getElementById('txtdiscount').value;
    var PAG_COMM_PER = document.getElementById('txtagcommper').value;
    var PAG_COMM_AMT = document.getElementById('txtagcommper').value;
    var PAG_ADDL_COMM_PER = document.getElementById('txtagaddcommper').value;
    var PAG_ADDL_COMM_AMT = document.getElementById('txtagaddcommper').value;
    var PNET_AMT = document.getElementById('txtamt').value;

    var PPREM_TYPE = document.getElementById('txtsptype').value;
    var PPREM = document.getElementById('txtprem').value;
    var PPREM_AMT = document.getElementById('txtpermgrd').value;

    var PPRIME_PREM_TYPE = document.getElementById('txtprimetype').value;
    var PPRIME_PREM_PER = document.getElementById('txtprimprem').value;
    var PPRIME_PREM_AMT = document.getElementById('txtprimpremg').value;
    var PSEVICE_TAX_AMT = document.getElementById('txtservictaxg').value;
    var PTOTAL_NET_AMT = document.getElementById('txtbillamt').value;
    var PPREM_CODE = document.getElementById('drpprem').value;
    var PPRIME_PREM_CODE = document.getElementById('drpprimprem').value;

    var PBARTER_CODE = "";
    var PPRINT_REMARKS = "";
    var PBILL_REMARKS = "";
    var PBOOKING_AUDIT_FLAG = "B";
    var PBOOKING_AUDIT_REMARKS = "";
    var PBOOKING_AUDIT_DATE = "";
    var PAUDIT_USER = "";
    var PATTATCH_DOCNAME = "";
    var PBILLING_TYPE = document.getElementById('drpbilltype').value;
    var PBILL_TO = document.getElementById('drpbillto').value;
    var PPANEL_AD_FLAG = "";
    var PMERGED_CLIENT_CODE = "";
    var PMERGED_AGENCY_CODE = "";
    var PCREATED_BY = document.getElementById('hiddenuserid').value;
    var PEXTRA = document.getElementById('drpsalegroup').value;
    var PEXTRA1 = document.getElementById('drpsalestype').value;
    var PEXTRA2 = "";
    var PEXTRA3 = "";
    var PEXTRA4 = "";
    var PEXTRA5 = "";
    var dateformat = document.getElementById('hiddendateformat').value;
    var PBOOKING_DATE = document.getElementById('txtbokngdate').value;
    var PRO_DATE = document.getElementById('txtrdate').value;
    var PPUBLISH_START_FROM = document.getElementById('txtstartdate').value;
    var PPUBLISH_START_TO = document.getElementById('txtenddate').value;
    var PCREATION_DATE = document.getElementById('hdndate').value;

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
        if (PCREATION_DATE != "") {
            PCREATION_DATE = PCREATION_DATE.split('/');
            PCREATION_DATE = PCREATION_DATE[1] + "/" + PCREATION_DATE[0] + "/" + PCREATION_DATE[2];
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
        if (PCREATION_DATE != "") {
            PCREATION_DATE = PCREATION_DATE.split('/');
            PCREATION_DATE = PCREATION_DATE[1] + "/" + PCREATION_DATE[2] + "/" + PCREATION_DATE[0];
        }
    }
    else {
        alert("Dateformat is either null or blank");
        return false;
    }


    var res_error = Booking.UpdateBookingM(PCOMP_CODE, PCENT_CODE, PBRANCH_CODE, PAD_TYPE_CODE, PBOOKING_TYPE, PBOOKING_NO, PBOOKING_DATE, PDEAL_NO, PRO_NO, PRO_DATE, PDOKIT_NO, PBOOKING_STATUS, PRO_STATUS, PAGENCY_CODE_SUBCODE, PCLIENT_CODE, PCLIENT_NAME, PCLIENT_ADD1, PCLIENT_ADD2, PCLIENT_POST_CODE, PCLIENT_PHONE, PCLIENT_EMAIL_ID, PEXEC_CODE, PRET_CODE, PCREDIT_DAYS, PPAYMODE_CODE, PCHEQUE_NO, PCHEQUE_AMT, PCHEQUE_DATE, PBANK_CODE, PCREDIT_CARD_TYPE, PCREDIT_CARD_NO, PCREDIT_CARD_AMT, PCREDIT_CARD_EXP_DT, PCREDIT_CARD_HODER, PCASH_RECEIPT_NO, PCASH_RECEIPT_DT, PCASH_RECEIPT_AMT, PINDUSTRY_CODE, PPRODUCT_CODE, PBRAND_CODE, PEVENT_CODE, PCAPTION, PKEY_NO, PRATE_TYPE_CODE, PPUBLISH_START_FROM, PPUBLISH_START_TO, PCURRENCY_CODE, PEXEC_COMM_PER, PEXEC_COMM_AMT, PRET_COMM_PER, PRET_COMM_AMT, PCARD_RATE, PAGREED_FLAG, PAGREED_AMT, PVAT_AMT, PBOOKED_BY, PGROSS_AMT, PCASH_DISCOUNT_TYPE, PCASH_DISCOUNT, PCASH_DISCOUNT_AMT, PAG_COMM_PER, PAG_COMM_AMT, PAG_ADDL_COMM_PER, PAG_ADDL_COMM_AMT, PNET_AMT, PPREM_TYPE, PPREM, PPREM_AMT, PPRIME_PREM_TYPE, PPRIME_PREM_PER, PPRIME_PREM_AMT, PSEVICE_TAX_AMT, PTOTAL_NET_AMT, PPREM_CODE, PPRIME_PREM_CODE, PBARTER_CODE, PPRINT_REMARKS, PBILL_REMARKS, PBOOKING_AUDIT_FLAG, PBOOKING_AUDIT_REMARKS, PBOOKING_AUDIT_DATE, PAUDIT_USER, PATTATCH_DOCNAME, PBILLING_TYPE, PBILL_TO, PPANEL_AD_FLAG, PMERGED_CLIENT_CODE, PMERGED_AGENCY_CODE, PCREATED_BY, PEXTRA, PEXTRA1, PEXTRA2, PEXTRA3, PEXTRA4, PEXTRA5);
    if (res_error.value == null) {
        alert(res_error.error.description);
        return false
    }
    var gridlength = document.getElementById('drincrgfGrid').rows.length;
    for (var k = 0; k < (gridlength - 1); k++) {

        var PCHANNEL = document.getElementById("Channelcode_" + k).value;
        var PTAPE_ID = document.getElementById("tapidcode_" + k).value;
        var chkdate = document.getElementById("Schueduledate_" + k).value;
        var datafill = chkdate.split("/")
        var monthg = datafill[0];
        var year = datafill[1];
        var PSCH_DATE = monthg + "/" + "01" + "/" + year;
        var PRODP = document.getElementById("primcode_" + k).value;
        var PFROM_TIME = document.getElementById("FromTime_" + k).value;
        var PTO_TIME = document.getElementById("EndTime_" + k).value;

        var PPROGRAMME_CODE = document.getElementById("programcode_" + k).value;
        var PSOPT_TYPE = document.getElementById("spotcode_" + k).value;
        var PSEG_CODE = "";
        var PPOSTION = "";
        var PNO_OF_SPOT = document.getElementById("Spot_" + k).value;
        var PDURATION = document.getElementById("Duration_" + k).value;
        var PRATE_AMT = document.getElementById("Rate_" + k).value;
        var PGROSS_AMT = document.getElementById("Gross_" + k).value;
        var PDIS_PER = "";
        var PDIS_AMT = document.getElementById("disc_" + k).value;
        var PPREM_PER = "";
        var PPREM_AMT = document.getElementById("prem_" + k).value;
        var PAGRED_AMT = document.getElementById("agrate_" + k).value;
        var PCOMM_AMT = document.getElementById("agcomm_" + k).value;
        var PADDL_COMM_AMT = "";
        var PNET_AMT = document.getElementById("netamt_" + k).value;
        var PNO_DAYS = document.getElementById("nubervalue_" + k).value;
        PAD_TYPE_CODE = document.getElementById("Adtypecode_" + k).value;
        var PINSERTION_ID = document.getElementById("rowid_" + k).value;
        var PPRIME_PREM_AMT = document.getElementById("primeamtgr_" + k).value;
        var PSEVICE_TAX_AMT = document.getElementById("servtaxamt_" + k).value;
        var PTOTAL_NET_AMT = document.getElementById("billamtgrid_" + k).value;

        var PTOTAL_NET_AMT = document.getElementById("billamtgrid_" + k).value;
        var P_DAY_1 = document.getElementById("dayg1_" + k).value;
        var P_DAY_2 = document.getElementById("dayg2_" + k).value;
        var P_DAY_3 = document.getElementById("dayg3_" + k).value;
        var P_DAY_4 = document.getElementById("dayg4_" + k).value;
        var P_DAY_5 = document.getElementById("dayg5_" + k).value;
        var P_DAY_6 = document.getElementById("dayg6_" + k).value;
        var P_DAY_7 = document.getElementById("dayg7_" + k).value;
        var P_DAY_8 = document.getElementById("dayg8_" + k).value;
        var P_DAY_9 = document.getElementById("dayg9_" + k).value;
        var P_DAY_10 = document.getElementById("dayg10_" + k).value;
        var P_DAY_11 = document.getElementById("dayg11_" + k).value;
        var P_DAY_12 = document.getElementById("dayg12_" + k).value;
        var P_DAY_13 = document.getElementById("dayg13_" + k).value;
        var P_DAY_14 = document.getElementById("dayg14_" + k).value;
        var P_DAY_15 = document.getElementById("dayg15_" + k).value;
        var P_DAY_16 = document.getElementById("dayg16_" + k).value;
        var P_DAY_17 = document.getElementById("dayg17_" + k).value;
        var P_DAY_18 = document.getElementById("dayg18_" + k).value;
        var P_DAY_19 = document.getElementById("dayg19_" + k).value;
        var P_DAY_20 = document.getElementById("dayg20_" + k).value;
        var P_DAY_21 = document.getElementById("dayg21_" + k).value;
        var P_DAY_22 = document.getElementById("dayg22_" + k).value;
        var P_DAY_23 = document.getElementById("dayg23_" + k).value;
        var P_DAY_24 = document.getElementById("dayg24_" + k).value;
        var P_DAY_25 = document.getElementById("dayg25_" + k).value;
        var P_DAY_26 = document.getElementById("dayg26_" + k).value;
        var P_DAY_27 = document.getElementById("dayg27_" + k).value;
        var P_DAY_28 = document.getElementById("dayg28_" + k).value;
        var P_DAY_29 = document.getElementById("dayg29_" + k).value;
        var P_DAY_30 = document.getElementById("dayg30_" + k).value;
        var P_DAY_31 = document.getElementById("dayg31_" + k).value;


        if (PINSERTION_ID == "") {
            var res_error = Booking.UpdateBookingC(PCOMP_CODE, PCENT_CODE, PBRANCH_CODE, PAD_TYPE_CODE, PBOOKING_TYPE, PBOOKING_NO, PBOOKING_DATE, PCHANNEL, PTAPE_ID, PSCH_DATE, PRODP, PFROM_TIME, PTO_TIME, PPROGRAMME_CODE, PSOPT_TYPE, PSEG_CODE, PPOSTION, PNO_OF_SPOT, PDURATION, PRATE_AMT, PGROSS_AMT, PDIS_PER, PDIS_AMT, PPREM_PER, PPREM_AMT, PPRIME_PREM_AMT, PSEVICE_TAX_AMT, PTOTAL_NET_AMT, PAGRED_AMT, PCOMM_AMT, PADDL_COMM_AMT, PNET_AMT, PINSERTION_ID, PCREATED_BY, PCREATION_DATE, P_DAY_1, P_DAY_2, P_DAY_3, P_DAY_4, P_DAY_5, P_DAY_6, P_DAY_7, P_DAY_8, P_DAY_9, P_DAY_10, P_DAY_11, P_DAY_12, P_DAY_13, P_DAY_14, P_DAY_15, P_DAY_16, P_DAY_17, P_DAY_18, P_DAY_19, P_DAY_20, P_DAY_21, P_DAY_22, P_DAY_23, P_DAY_24, P_DAY_25, P_DAY_26, P_DAY_27, P_DAY_28, P_DAY_29, P_DAY_30, P_DAY_31, "I");
        }
        else {
            var res_error = Booking.UpdateBookingC(PCOMP_CODE, PCENT_CODE, PBRANCH_CODE, PAD_TYPE_CODE, PBOOKING_TYPE, PBOOKING_NO, PBOOKING_DATE, PCHANNEL, PTAPE_ID, PSCH_DATE, PRODP, PFROM_TIME, PTO_TIME, PPROGRAMME_CODE, PSOPT_TYPE, PSEG_CODE, PPOSTION, PNO_OF_SPOT, PDURATION, PRATE_AMT, PGROSS_AMT, PDIS_PER, PDIS_AMT, PPREM_PER, PPREM_AMT, PPRIME_PREM_AMT, PSEVICE_TAX_AMT, PTOTAL_NET_AMT, PAGRED_AMT, PCOMM_AMT, PADDL_COMM_AMT, PNET_AMT, PINSERTION_ID, PCREATED_BY, PCREATION_DATE, P_DAY_1, P_DAY_2, P_DAY_3, P_DAY_4, P_DAY_5, P_DAY_6, P_DAY_7, P_DAY_8, P_DAY_9, P_DAY_10, P_DAY_11, P_DAY_12, P_DAY_13, P_DAY_14, P_DAY_15, P_DAY_16, P_DAY_17, P_DAY_18, P_DAY_19, P_DAY_20, P_DAY_21, P_DAY_22, P_DAY_23, P_DAY_24, P_DAY_25, P_DAY_26, P_DAY_27, P_DAY_28, P_DAY_29, P_DAY_30, P_DAY_31, "U");
        }
        if (res_error.value == null) {
            alert(res_error.error.description);
            return false
        }

    }
    alert("Record Updated Succesfully");
    hiddentext = "query";
    ClearClick();
    return false;
}
function edata() {
    hiddentext = "modify";
    document.getElementById('saveshow').style.display = "block";
    document.getElementById('showcreate').style.display = "none";
    document.getElementById('editshow').style.display = "none";

    var bill_flag = "";
    var gridlength = document.getElementById('drincrgfGrid').rows.length;
    for (var i = 0; i < (gridlength - 1); i++) {
        if (document.getElementById("Status_" + i).value == "I") {
            bill_flag = "I";
        }
        else {
            document.getElementById("chekid_" + i).disabled = false;
            document.getElementById("Status_" + i).disabled = false;
        }
    }
    if (bill_flag == "I") {
        document.getElementById('txtbokng').disabled = true;
        document.getElementById('txtbokngdate').disabled = true;
        document.getElementById('txtstartdate').disabled = true;
        document.getElementById('txtenddate').disabled = true;
        document.getElementById('txtagncy').disabled = true;
        document.getElementById('drppaaymode').disabled = true;
        document.getElementById('txtagoutstand').disabled = true;
        document.getElementById('txtclint').disabled = true;
        document.getElementById('txtdeal').disabled = true;
        document.getElementById('drpbookingtype').disabled = true;
        document.getElementById('txtrno').disabled = true;
        document.getElementById('txtrdate').disabled = true;
        document.getElementById('txtdokitno').disabled = true;
        document.getElementById('drpbookstatus').disabled = true;
        document.getElementById('txtindustry').disabled = true;
        document.getElementById('txtproduct').disabled = true;
        document.getElementById('txtbrand').disabled = true;
        document.getElementById('txtevent').disabled = true;
        document.getElementById('txtexcutive').disabled = true;
        document.getElementById('txtret').disabled = true;
        document.getElementById('txtcpton').disabled = true;
        document.getElementById('txtkeyn').disabled = true;
        document.getElementById('drpbillto').disabled = true;
        document.getElementById('txtagcommper').disabled = true;
        document.getElementById('drpratetype').disabled = true;
        document.getElementById('drpagrateamt').disabled = true;
        document.getElementById('txtagrateamt').disabled = true;
        document.getElementById('drpprem').disabled = true;
        document.getElementById('txtprem').disabled = true;
        document.getElementById('drpdiscount').disabled = true;
        document.getElementById('txtdiscount').disabled = true;
        document.getElementById('txtamt').disabled = true;

        document.getElementById('drpservictype').disabled = true;
        document.getElementById('drpbilltype').disabled = true;

        document.getElementById('txtenddate').disabled = true;

        document.getElementById('drpchannel').disabled = false;
        document.getElementById('drpadtype').disabled = false;
        document.getElementById('txttapid').disabled = false;
        document.getElementById('rodptype').disabled = false;
        document.getElementById('txtfromtime').disabled = false;
        document.getElementById('txttotime').disabled = false;
        document.getElementById('rodptype').disabled = false;
        document.getElementById('txtnProgName').disabled = false;
        document.getElementById('drpspottype').disabled = false;
        //  document.getElementById('txtsegment').disabled = false;
        //  document.getElementById('txtpostion').disabled = false;
        document.getElementById('btnpost').disabled = false;
        document.getElementById('drpprimprem').disabled = true;
        document.getElementById('drpmonth').disabled = true;
        document.getElementById('drpsalegroup').disabled = true;
        document.getElementById('drpsalestype').disabled = true;

        //        document.getElementById('txtagncy').focus();
    }
    else {
        document.getElementById('txtbokng').disabled = true;
        document.getElementById('txtbokngdate').disabled = true;
        document.getElementById('txtstartdate').disabled = true;
        document.getElementById('txtenddate').disabled = false;
        document.getElementById('txtagncy').disabled = false;
        document.getElementById('drppaaymode').disabled = false;
        document.getElementById('txtagoutstand').disabled = true;
        document.getElementById('txtclint').disabled = false;
        document.getElementById('txtdeal').disabled = false;
        document.getElementById('drpbookingtype').disabled = false;
        document.getElementById('txtrno').disabled = false;
        document.getElementById('txtrdate').disabled = false;
        document.getElementById('txtdokitno').disabled = true;
        document.getElementById('drpbookstatus').disabled = true;
        document.getElementById('txtindustry').disabled = false;
        document.getElementById('txtproduct').disabled = false;
        document.getElementById('txtbrand').disabled = false;
        document.getElementById('txtevent').disabled = false;
        document.getElementById('txtexcutive').disabled = false;
        document.getElementById('txtret').disabled = false;
        document.getElementById('txtcpton').disabled = false;
        document.getElementById('txtkeyn').disabled = false;
        document.getElementById('drpbillto').disabled = false;
        document.getElementById('txtagcommper').disabled = false;
        document.getElementById('drpratetype').disabled = false;
        document.getElementById('drpagrateamt').disabled = false;
        document.getElementById('txtagrateamt').disabled = false;
        document.getElementById('drpprem').disabled = false;
        document.getElementById('txtprem').disabled = false;
        document.getElementById('drpdiscount').disabled = false;
        document.getElementById('txtdiscount').disabled = false;
        document.getElementById('txtamt').disabled = false;

        document.getElementById('drpservictype').disabled = false;
        document.getElementById('drpbilltype').disabled = false;

        document.getElementById('txtenddate').disabled = true;

        document.getElementById('drpchannel').disabled = false;
        document.getElementById('drpadtype').disabled = false;
        document.getElementById('txttapid').disabled = false;
        document.getElementById('rodptype').disabled = false;
        document.getElementById('txtfromtime').disabled = false;
        document.getElementById('txttotime').disabled = false;
        document.getElementById('rodptype').disabled = false;
        document.getElementById('txtnProgName').disabled = false;
        document.getElementById('drpspottype').disabled = false;
        //  document.getElementById('txtsegment').disabled = false;
        //  document.getElementById('txtpostion').disabled = false;
        document.getElementById('btnpost').disabled = false;
        document.getElementById('drpprimprem').disabled = false;
        document.getElementById('drpmonth').disabled = false;
        document.getElementById('drpsalegroup').disabled = false;
        document.getElementById('drpsalestype').disabled = false;

        document.getElementById('txtagncy').focus();
    }
    return false;
}

function SrchClick() {
    var fromname = "BOK";
    var w = 1400;
    var h = 600;
    var left = (window.screen.width / 2) - ((w / 2) + 10);
    var top = (window.screen.height / 2) - ((h / 2) + 50);
    var win = window.open("bookingserch.aspx?fromname=" + fromname, 'Search_booking', 'width=1000px,height=600px ,status=0,toolbar=0,resizable=0,left=' + left + ',top=' + top + ',screenX=' + left + ',screenY=' + top + ',scrollbars=yes');
    return false;
}
function GenerateDokitNo() {
    var res = Booking.Gendkitcode();
    var ds = res.value;
    if (ds == null) {
        alert(res.error.description);
        return false;
    }
    document.getElementById('txtdokitno').value = "DK" + ds.Tables[0].Rows[0].DOKIT_NO;
    return false;
}
function postcreatgrid() {
    var Sno, Channel, tapidcode, primcode, spotcode, rowid, nubervalue, agrate, programcode, prem, disc, agcomm, netamt, Channelcode, chekid, Adtype, Adtypecode, TapeId, Schueduledate, RODPTYPE, FromTime, EndTime, Program, Sopttype, Seg, Segcode, Postion, Spot, Duration, Rate, Gross, Status;
    var dayg1, dayg2, dayg3, dayg4, dayg5, dayg6, dayg7, dayg8, dayg9, dayg10, dayg11, dayg12, dayg13, dayg14, dayg15, dayg16, dayg17, dayg18, dayg19, dayg20, dayg21, dayg22, dayg23, dayg24, dayg25, dayg26, dayg27, dayg28, dayg29, dayg30, dayg31;



    str = "<div id=\"drincrgfdiv\" runat=\"server\" style=\"OVERFLOW: auto; max-height: 200px; width:1300px;\">";
    str += "<table cellpadding=\"0\" cellspacing=\"1px\" id=\"drincrgfGrid\"  width=\1300px\"    border=1><tr>";
    str += "<td align=\"left\" valign=\"top\" style='width:20px' class=\"GridHdtdr\">Del</td>";
    str += "<td align=\"left\" valign=\"top\" style='width:20px' class=\"GridHdtdr\">Edit</td>";
    str += "<td align=\"left\" valign=\"top\" style='width:50px' class=\"GridHdtdr\">Sno</td>";
    str += "<td align=\"left\" valign=\"top\" style='width:50px' class=\"GridHdtdr\">Channel</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:30px' class=\"GridHdtdr\">Ad Type</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:30px' class=\"GridHdtdr\">Comm Id </td>";
    str += "<td align=\"center\" valign=\"top\" style='width:30px' class=\"GridHdtdr\">Sch Date</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:30px' class=\"GridHdtdr\">Prime Time</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:30px' class=\"GridHdtdr\">From Time</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:30px' class=\"GridHdtdr\">End Time</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:30px' class=\"GridHdtdr\">Program</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:30px' class=\"GridHdtdr\">Spot Type</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:30px;display:none;' class=\"GridHdtdr\">Seg</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:30px;display:none;' class=\"GridHdtdr\">Pos</td>";

    str += "<td align=\"center\" valign=\"top\" style='width:30px' class=\"GridHdtdr\">Dur</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:30px' class=\"GridHdtdr\">Spot</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">1</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">2</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">3</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">4</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">5</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">6</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">7</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">8</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">9</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">10</td>";

    str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">11</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">12</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">13</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">14</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">15</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">16</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">17</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">18</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">19</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">20</td>";


    str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">21</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">22</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">23</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">24</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">25</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">26</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">27</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">28</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">29</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">30</td>";
    str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">31</td>";

    str += "<td align=\"right\" valign=\"top\" style='width:30px' class=\"GridHdtdr\">Rate</td>";
    str += "<td align=\"right\" valign=\"top\" style='width:30px' class=\"GridHdtdr\">Ag Rate/Amt</td>";
    str += "<td align=\"right\" valign=\"top\" style='width:30px' class=\"GridHdtdr\">Gross</td>";
    str += "<td align=\"right\" valign=\"top\" style='width:30px' class=\"GridHdtdr\">Pos Prem</td>";
    str += "<td align=\"right\" valign=\"top\" style='width:30px' class=\"GridHdtdr\">Prime Prem</td>";
    str += "<td align=\"right\" valign=\"top\" style='width:30px' class=\"GridHdtdr\">Disc</td>";
    str += "<td align=\"right\" valign=\"top\" style='width:30px' class=\"GridHdtdr\">Ag Comm</td>";
    str += "<td align=\"right\" valign=\"top\" style='width:30px' class=\"GridHdtdr\">Add Ag Comm</td>";
    str += "<td align=\"right\" valign=\"top\" style='width:30px' class=\"GridHdtdr\">Taxable Amt</td>";
    str += "<td align=\"right\" valign=\"top\" style='width:30px' class=\"GridHdtdr\">GST Amt</td>";
    str += "<td align=\"right\" valign=\"top\" style='width:30px' class=\"GridHdtdr\">Bill Amt</td>";
    str += "<td align=\"right\" valign=\"top\" style='width:30px' class=\"GridHdtdr\">Status</td>";

    str += "</tr></table></div>";
    document.getElementById('tdbokkinggrid').innerHTML = str;

    for (var i = 0; i < 0; i++) {

        Make_Row = document.createElement("tr");
        Make_Row.id = "sstr_" + i;

        Sno = "Sno_" + i;
        Channel = "Channel_" + i;
        Channelcode = "Channelcode_" + i;
        Adtype = "Adtype_" + i;
        Adtypecode = "Adtypecode_" + i;
        TapeId = "TapeId_" + i;
        Schueduledate = "Schueduledate_" + i;
        RODPTYPE = "RODPTYPE_" + i;
        FromTime = "FromTime_" + i;
        EndTime = "EndTime_" + i;
        Program = "Program_" + i;
        Sopttype = "Sopttype_" + i;
        Seg = "Seg_" + i;
        Segcode = "Segcode_" + i;
        Postion = "Postion_" + i;
        Spot = "Spot_" + i;
        Duration = "Duration_" + i;
        Rate = "Rate_" + i;
        Gross = "Gross_" + i;
        Status = "Status_" + i;
        chekid = "chekid_" + i;
        agrate = "agrate_" + i;
        prem = "prem_" + i;
        disc = " disc_" + i;
        agcomm = "agcomm_" + i;
        addAgComm = "addAgComm_" + i;
        netamt = "netamt_" + i;

        tapidcode = "tapidcode_" + i;
        primcode = "primcode_" + i;
        programcode = "programcode_" + i;
        nubervalue = "nubervalue_" + i;

        spotcode = "spotcode_" + i;
        rowid = "rowid_" + i;
        servtaxamt = "servtaxamt_" + i;
        billamtgrid = "billamtgrid_" + i;
        primeamtgr = "primeamtgr_" + i;
        dayg1 = "dayg1_" + i;
        dayg2 = "dayg2_" + i;
        dayg3 = "dayg3_" + i;
        dayg4 = "dayg4_" + i;
        dayg5 = "dayg5_" + i;
        dayg6 = "dayg6_" + i;
        dayg7 = "dayg7_" + i;
        dayg8 = "dayg8_" + i;
        dayg9 = "dayg9_" + i;
        dayg10 = "dayg10_" + i;
        dayg11 = "dayg11_" + i;
        dayg12 = "dayg12_" + i;
        dayg13 = "dayg13_" + i;
        dayg14 = "dayg14_" + i;
        dayg15 = "dayg15_" + i;
        dayg16 = "dayg16_" + i;
        dayg17 = "dayg17_" + i;
        dayg18 = "dayg18_" + i;
        dayg19 = "dayg19_" + i;
        dayg20 = "dayg20_" + i;
        dayg21 = "dayg21_" + i;
        dayg22 = "dayg22_" + i;
        dayg23 = "dayg23_" + i;
        dayg24 = "dayg24_" + i;
        dayg25 = "dayg25_" + i;
        dayg26 = "dayg26_" + i;
        dayg27 = "dayg27_" + i;
        dayg28 = "dayg28_" + i;
        dayg29 = "dayg29_" + i;
        dayg30 = "dayg30_" + i;
        dayg31 = "dayg31_" + i;

        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.style.display = "none";
        str = "<input class=\"gridtextr\" style='width:80px' readonly type=\"text\" id=" + rowid + " value='' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);

        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.style.display = "none";
        str = "<input class=\"gridtextr\" style='width:80px' readonly type=\"text\" id=" + spotcode + " value='" + pspotypecode + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);

        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.style.display = "none";
        str = "<input class=\"gridtextr\" style='width:80px' readonly type=\"text\" id=" + nubervalue + " value='" + noid + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);

        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.style.display = "none";
        str = "<input class=\"gridtextr\" style='width:80px' readonly type=\"text\" id=" + tapidcode + " value='" + pptapidcode + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);

        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.style.display = "none";
        str = "<input class=\"gridtextr\" style='width:80px' readonly type=\"text\" id=" + primcode + " value='" + primtimecode + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);


        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.style.display = "none";
        str = "<input class=\"gridtextr\" style='width:80px' readonly type=\"text\" id=" + programcode + " value='" + pprogramcode + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);


        make_td = document.createElement("td");
        make_td.className = "GridHdtd";
        make_td.align = "center";
        str = "<input class=\"gridtext\"  style='width:20px' " + " type=\"radio\"  NAME=rpt  onclick='return editgriddata(event)'   id=" + chekid + " value='' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);

        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "30px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:100px' readonly type=\"text\" id=" + Sno + "  value='" + parseInt(i + 1) + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);

        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.style.display = "none";
        str = "<input class=\"gridtextr\" style='width:100px' readonly type=\"text\" id=" + Channelcode + "  value='" + pChannelcode + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);

        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "100px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:50px' readonly type=\"text\" id=" + Channel + "  value='" + pChannel + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);

        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.style.display = "none";
        str = "<input class=\"gridtextr\" style='width:250px' readonly type=\"text\" id=" + Adtypecode + " value='" + pAdtype + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);

        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "100px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:50px' readonly type=\"text\" id=" + Adtype + " value='" + pAdtypecode + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);


        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "100px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:100px' readonly type=\"text\" id=" + TapeId + " value='" + pTapeId + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);

        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "100px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:50px' readonly type=\"text\" id=" + Schueduledate + " value='" + pSchueduledate + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);


        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "100px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:100px' readonly type=\"text\" id=" + RODPTYPE + " value='" + pRODPTYPE + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);

        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "100px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:100px' readonly type=\"text\" id=" + FromTime + " value='" + pFromTime + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);


        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "100px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:100px' readonly type=\"text\" id=" + EndTime + " value='" + pEndTime + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);




        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "100px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:100px' readonly type=\"text\" id=" + Program + " value='" + pProgram + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);


        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "100px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:100px' readonly type=\"text\" id=" + Sopttype + "  value='" + pSopttype + "' />";
        make_td.innerHTML = str;

        Make_Row.appendChild(make_td);


        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "100px");
        make_td.align = "center";
        make_td.style.display = "none";
        str = "<input class=\"gridtextr\" style='width:100px' readonly type=\"text\" id=" + Seg + " value='" + pSeg + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);



        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.style.display = "none";
        str = "<input class=\"gridtextr\" style='width:100px' readonly type=\"text\" id=" + Segcode + " value='" + pSegcode + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);




        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "100px");
        make_td.align = "center";
        make_td.style.display = "none";
        str = "<input class=\"gridtextr\" style='width:100px' readonly type=\"text\" id=" + Postion + " value='" + pPostion + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);








        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "100px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:100px' readonly type=\"text\" id=" + Duration + " value='" + pDuration + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);


        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "100px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:100px' readonly type=\"text\" id=" + Spot + " value='" + pSpot + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);



        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "10px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:10px' readonly type=\"text\" id=" + dayg1 + " value='" + daypg1 + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);


        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "10px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:10px' readonly type=\"text\" id=" + dayg2 + " value='" + daypg2 + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);




        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "10px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:10px' readonly type=\"text\" id=" + dayg3 + " value='" + daypg3 + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);




        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "10px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:10px' readonly type=\"text\" id=" + dayg4 + " value='" + daypg4 + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);




        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "10px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:10px' readonly type=\"text\" id=" + dayg5 + " value='" + daypg5 + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);




        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "10px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:10px' readonly type=\"text\" id=" + dayg6 + " value='" + daypg6 + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);




        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "10px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:10px' readonly type=\"text\" id=" + dayg7 + " value='" + daypg7 + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);




        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "10px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:10px' readonly type=\"text\" id=" + dayg8 + " value='" + daypg8 + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);




        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "10px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:10px' readonly type=\"text\" id=" + dayg9 + " value='" + daypg9 + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);



        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "10px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:10px' readonly type=\"text\" id=" + dayg10 + " value='" + daypg10 + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);




        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "10px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:10px' readonly type=\"text\" id=" + dayg11 + " value='" + daypg11 + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);




        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "10px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:10px' readonly type=\"text\" id=" + dayg12 + " value='" + daypg12 + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);




        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "10px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:10px' readonly type=\"text\" id=" + dayg13 + " value='" + daypg13 + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);




        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "10px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:10px' readonly type=\"text\" id=" + dayg14 + " value='" + daypg14 + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);




        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "10px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:10px' readonly type=\"text\" id=" + dayg15 + " value='" + daypg15 + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);




        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "10px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:10px' readonly type=\"text\" id=" + dayg16 + " value='" + daypg16 + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);




        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "10px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:10px' readonly type=\"text\" id=" + dayg17 + " value='" + daypg17 + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);




        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "10px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:10px' readonly type=\"text\" id=" + dayg18 + " value='" + daypg18 + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);




        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "10px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:10px' readonly type=\"text\" id=" + dayg19 + " value='" + daypg19 + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);



        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "10px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:10px' readonly type=\"text\" id=" + dayg20 + " value='" + daypg20 + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);




        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "10px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:10px' readonly type=\"text\" id=" + dayg21 + " value='" + daypg21 + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);


        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "10px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:10px' readonly type=\"text\" id=" + dayg22 + " value='" + daypg22 + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);




        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "10px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:10px' readonly type=\"text\" id=" + dayg23 + " value='" + daypg23 + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);




        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "10px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:10px' readonly type=\"text\" id=" + dayg24 + " value='" + daypg24 + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);




        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "10px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:10px' readonly type=\"text\" id=" + dayg25 + " value='" + daypg25 + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);




        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "10px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:10px' readonly type=\"text\" id=" + dayg26 + " value='" + daypg26 + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);




        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "10px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:10px' readonly type=\"text\" id=" + dayg27 + " value='" + daypg27 + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);




        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "10px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:10px' readonly type=\"text\" id=" + dayg28 + " value='" + daypg28 + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);




        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "10px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:10px' readonly type=\"text\" id=" + dayg29 + " value='" + daypg29 + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);



        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "10px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:10px' readonly type=\"text\" id=" + dayg30 + " value='" + daypg30 + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);



        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "10px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:10px' readonly type=\"text\" id=" + dayg31 + " value='" + daypg31 + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);





        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "100px");
        make_td.align = "right";
        str = "<input class=\"gridtextr\" style='width:100px' readonly type=\"text\" id=" + Rate + " value='" + pRate + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);




        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "100px");
        make_td.align = "right";
        str = "<input class=\"gridtextr\" style='width:100px' readonly type=\"text\" id=" + Gross + " value='" + pGross + "' />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);






        make_td = document.createElement("td");
        make_td.align = "center";
        str = "<select class=\"griddrop\" style='width:45px' disabled id=" + Status + " value='' onchange=\"return Blankgross();\" >";
        str = str + "<option value=\"B\">BOOKED</option>";
        str = str + "<option value=\"P\">ON AIR</option>";
        str = str + "<option value=\"C\">CANCELLED</option>";
        str = str + "<option value=\"H\">HOLD</option>";
        str = str + "<option value=\"I\">INVOICED</option>";
        str = str + "</select>";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);
        document.getElementById('drincrgfdiv').getElementsByTagName('tbody')[0].appendChild(Make_Row);
    }
}
function Blankgross() {
    //  document.getElementById('txttnetamt').value = "";
}
function Delbooking() {
    activeidgp = document.activeElement.id;
    var id = activeidgp.split("_");
    var PCOMP_CODE = document.getElementById('hdncompcode').value;
    var PCENT_CODE = document.getElementById('hdncenter').value;
    if (document.getElementById("sstr_" + id[1]).style.display != "none") {
        document.getElementById("sstr_" + id[1]).style.display = "none";

        document.getElementById('Rate_' + id[1]).value = "0";
        document.getElementById('Gross_' + id[1]).value = "0";
        document.getElementById('prem_' + id[1]).value = "0";
        document.getElementById('primeamtgr_' + id[1]).value = "0";
        document.getElementById('disc_' + id[1]).value = "0";
        document.getElementById('agcomm_' + id[1]).value = "0";
        document.getElementById('addAgComm_' + id[1]).value = "0";
        document.getElementById('netamt_' + id[1]).value = "0";
        document.getElementById('servtaxamt_' + id[1]).value = "0";
        document.getElementById('billamtgrid_' + id[1]).value = "0";
        document.getElementById('agrate_' + id[1]).value = "0";
        var PTEMP_NO = document.getElementById('tempid_' + id[1]).value;
        //var res = Booking.deletebook(PCOMP_CODE, PCENT_CODE, PTEMP_NO);
        //var ds = res.value;
        //if (ds == null) {
        //    alert(res.error.description);
        //    return false;
        //}
    }
    gridcalction();
    return false;
}
function addgrid() {
    var i = document.getElementById('drincrgfGrid').rows.length - 1;
    snoinc++;
    var Sno, Channel, delbook, nubervalue, tapidcode, primcode, rowid, spotcode, agrate, programcode, prem, disc, agcomm, netamt, Channelcode, chekid, Adtype, Adtypecode, TapeId, Schueduledate, RODPTYPE, FromTime, EndTime, Program, Sopttype, Seg, Segcode, Postion, Spot, Duration, Rate, Gross, Status, servtaxamt, billamtgrid, primeamtgr, tempid;
    var dayg1, dayg2, dayg3, dayg4, dayg5, dayg6, dayg7, dayg8, dayg9, dayg10, dayg11, dayg12, dayg13, dayg14, dayg15, dayg16, dayg17, dayg18, dayg19, dayg20, dayg21, dayg22, dayg23, dayg24, dayg25, dayg26, dayg27, dayg28, dayg29, dayg30, dayg31;

    Make_Row = document.createElement("tr");
    Make_Row.id = "sstr_" + i;
    Sno = "Sno_" + i;
    Channel = "Channel_" + i;
    Channelcode = "Channelcode_" + i;
    Adtype = "Adtype_" + i;
    Adtypecode = "Adtypecode_" + i;
    TapeId = "TapeId_" + i;
    Schueduledate = "Schueduledate_" + i;
    RODPTYPE = "RODPTYPE_" + i;
    FromTime = "FromTime_" + i;
    EndTime = "EndTime_" + i;
    Program = "Program_" + i;
    Sopttype = "Sopttype_" + i;
    Seg = "Seg_" + i;
    Segcode = "Segcode_" + i;
    Postion = "Postion_" + i;
    Spot = "Spot_" + i;
    Duration = "Duration_" + i;
    Rate = "Rate_" + i;
    Gross = "Gross_" + i;
    Status = "Status_" + i;

    chekid = "chekid_" + i;
    // chekid = "chekid_" + i;
    agrate = "agrate_" + i;
    prem = "prem_" + i;
    disc = "disc_" + i;
    agcomm = "agcomm_" + i;
    addAgComm = "addAgComm_" + i;
    netamt = "netamt_" + i;
    dayg1 = "dayg1_" + i;
    dayg2 = "dayg2_" + i;
    dayg3 = "dayg3_" + i;
    dayg4 = "dayg4_" + i;
    dayg5 = "dayg5_" + i;
    dayg6 = "dayg6_" + i;
    dayg7 = "dayg7_" + i;
    dayg8 = "dayg8_" + i;
    dayg9 = "dayg9_" + i;
    dayg10 = "dayg10_" + i;
    dayg11 = "dayg11_" + i;
    dayg12 = "dayg12_" + i;
    dayg13 = "dayg13_" + i;
    dayg14 = "dayg14_" + i;
    dayg15 = "dayg15_" + i;
    dayg16 = "dayg16_" + i;
    dayg17 = "dayg17_" + i;
    dayg18 = "dayg18_" + i;
    dayg19 = "dayg19_" + i;
    dayg20 = "dayg20_" + i;
    dayg21 = "dayg21_" + i;
    dayg22 = "dayg22_" + i;
    dayg23 = "dayg23_" + i;
    dayg24 = "dayg24_" + i;
    dayg25 = "dayg25_" + i;
    dayg26 = "dayg26_" + i;
    dayg27 = "dayg27_" + i;
    dayg28 = "dayg28_" + i;
    dayg29 = "dayg29_" + i;
    dayg30 = "dayg30_" + i;
    dayg31 = "dayg31_" + i;

    tapidcode = "tapidcode_" + i;
    primcode = "primcode_" + i;
    programcode = "programcode_" + i;
    nubervalue = "nubervalue_" + i;
    spotcode = "spotcode_" + i;
    rowid = "rowid_" + i;

    servtaxamt = "servtaxamt_" + i;
    billamtgrid = "billamtgrid_" + i;
    primeamtgr = "primeamtgr_" + i;
    delbook = "delbook_" + i;
    tempid = "tempid_" + i;

    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.style.display = "none";
    str = "<input class=\"gridtextr\" style='width:80px' readonly type=\"text\" id=" + tempid + " value='" + tempdetil + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);
    if (hiddentext == "new") {
        make_td = document.createElement("td");
        make_td.className = "GridHdtd";
        make_td.align = "center";
        str = "<p style=\"width:100%; padding:0px; margin:0px;\"><input type=\"image\" img src=\"images/gtk-cancel.png\" id=" + delbook + "  onclick='return Delbooking(event)'/></p>";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);
    }


    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.style.display = "none";
    str = "<input class=\"gridtextr\" style='width:80px' readonly type=\"text\" id=" + rowid + " value='' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);

    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.style.display = "none";
    str = "<input class=\"gridtextr\" style='width:80px' readonly type=\"text\" id=" + spotcode + " value='" + pspotypecode + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);

    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.style.display = "none";
    str = "<input class=\"gridtextr\" style='width:80px' readonly type=\"text\" id=" + nubervalue + " value='" + noid + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);

    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.style.display = "none";
    str = "<input class=\"gridtextr\" style='width:80px' readonly type=\"text\" id=" + tapidcode + " value='" + pptapidcode + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);

    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.style.display = "none";
    str = "<input class=\"gridtextr\" style='width:80px' readonly type=\"text\" id=" + primcode + " value='" + primtimecode + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);


    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.style.display = "none";
    str = "<input class=\"gridtextr\" style='width:80px' readonly type=\"text\" id=" + programcode + " value='" + pprogramcode + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);

    make_td = document.createElement("td");
    make_td.className = "GridHdtd";
    make_td.align = "center";
    str = "<input class=\"gridtext\"  style='width:20px' " + " type=\"radio\"  NAME=rpt  onclick='return editgriddata(event)'   id=" + chekid + " value='' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);

    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "20px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style='width:20px' readonly type=\"text\" id=" + Sno + "  value='" + parseInt(i + 1) + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);

    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.style.display = "none";
    str = "<input class=\"gridtextr\" style='width:80px' readonly type=\"text\" id=" + Channelcode + "  value='" + pChannelcode + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);

    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "100px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style='width:50px' readonly type=\"text\" id=" + Channel + "  value='" + pChannel + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);

    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.style.display = "none";
    str = "<input class=\"gridtextr\" style='width:50px' readonly type=\"text\" id=" + Adtypecode + " value='" + pAdtypecode + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);

    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "100px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style='width:50px' readonly type=\"text\" id=" + Adtype + " value='" + pAdtype + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);


    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "100px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style='width:60px' readonly type=\"text\" id=" + TapeId + " value='" + pTapeId + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);

    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "100px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style=\"width:50px;  readonly type=\"text\" id=" + Schueduledate + " value='" + pSchueduledatemain + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);


    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "50px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style='width:80px' readonly type=\"text\" id=" + RODPTYPE + " value='" + pRODPTYPE + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);

    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "50px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style='width:50px' readonly type=\"text\" id=" + FromTime + " value='" + pFromTime + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);


    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "100px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style='width:50px' readonly type=\"text\" id=" + EndTime + " value='" + pEndTime + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);




    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "100px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style='width:80px' readonly type=\"text\" id=" + Program + " value='" + pProgram + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);


    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "50px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style='width:50px' readonly type=\"text\" id=" + Sopttype + "  value='" + pSopttype + "' />";
    make_td.innerHTML = str;

    Make_Row.appendChild(make_td);


    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "50px");
    make_td.align = "center";
    make_td.style.display = "none";
    str = "<input class=\"gridtextr\" style='width:50px' readonly type=\"text\" id=" + Seg + " value='" + pSeg + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);



    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.style.display = "none";
    str = "<input class=\"gridtextr\" style='width:80px' readonly type=\"text\" id=" + Segcode + " value='" + pSegcode + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);




    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "50px");
    make_td.align = "center";
    make_td.style.display = "none";
    str = "<input class=\"gridtextr\" style='width:50px' readonly type=\"text\" id=" + Postion + " value='" + pPostion + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);



    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "50px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style='width:50px' readonly type=\"text\" id=" + Duration + " value='" + pDuration + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);

    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "50px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style='width:50px' readonly type=\"text\" id=" + Spot + " value='" + pSpot + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);


    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "15px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg1 + " value='" + daypg1 + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);


    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "15px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg2 + " value='" + daypg2 + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);




    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "15px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg3 + " value='" + daypg3 + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);




    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "15px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\"  style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg4 + " value='" + daypg4 + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);




    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "15px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg5 + " value='" + daypg5 + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);




    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "15px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg6 + " value='" + daypg6 + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);




    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "15px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg7 + " value='" + daypg7 + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);




    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "15px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg8 + " value='" + daypg8 + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);




    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "15px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg9 + " value='" + daypg9 + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);



    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "15px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg10 + " value='" + daypg10 + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);




    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "15px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg11 + " value='" + daypg11 + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);




    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "15px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'   readonly type=\"text\" id=" + dayg12 + " value='" + daypg12 + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);




    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "15px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'   cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg13 + " value='" + daypg13 + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);




    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "15px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style='width:15px' readonly type=\"text\" id=" + dayg14 + " value='" + daypg14 + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);




    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "15px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'   readonly type=\"text\" id=" + dayg15 + " value='" + daypg15 + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);




    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "15px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\"  style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'   readonly type=\"text\" id=" + dayg16 + " value='" + daypg16 + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);




    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "15px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'   readonly type=\"text\" id=" + dayg17 + " value='" + daypg17 + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);




    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "15px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style='width:15px' readonly type=\"text\" id=" + dayg18 + " value='" + daypg18 + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);




    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "15px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg19 + " value='" + daypg19 + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);



    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "15px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg20 + " value='" + daypg20 + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);




    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "15px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg21 + " value='" + daypg21 + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);


    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "15px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'   readonly type=\"text\" id=" + dayg22 + " value='" + daypg22 + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);




    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "15px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style='width:15px' readonly type=\"text\" id=" + dayg23 + " value='" + daypg23 + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);




    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "15px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'   readonly type=\"text\" id=" + dayg24 + " value='" + daypg24 + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);




    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "15px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg25 + " value='" + daypg25 + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);




    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "15px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'   readonly type=\"text\" id=" + dayg26 + " value='" + daypg26 + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);




    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "15px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg27 + " value='" + daypg27 + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);




    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "15px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg28 + " value='" + daypg28 + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);




    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "15px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'   readonly type=\"text\" id=" + dayg29 + " value='" + daypg29 + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);



    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "15px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg30 + " value='" + daypg30 + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);



    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "15px");
    make_td.align = "center";
    str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg31 + " value='" + daypg31 + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);



    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "100px");
    make_td.align = "right";
    str = "<input class=\"gridtextr\" style='width:70px' readonly type=\"text\" id=" + Rate + " value='" + pRate + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);


    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "100px");
    make_td.align = "right";
    str = "<input class=\"gridtextr\" style='width:70px' readonly type=\"text\" id=" + agrate + " value='" + agrateamt + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);




    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "100px");
    make_td.align = "right";
    str = "<input class=\"gridtextr\" style='width:50px' readonly type=\"text\" id=" + Gross + " value='" + pGross + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);



    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "50px");
    make_td.align = "right";
    str = "<input class=\"gridtextr\" style='width:50px' readonly type=\"text\" id=" + prem + " value='" + ppremamt + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);

    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "50px");
    make_td.align = "right";
    str = "<input class=\"gridtextr\" style='width:50px' readonly type=\"text\" id=" + primeamtgr + " value='" + pprpremamt + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);







    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "100px");
    make_td.align = "right";
    str = "<input class=\"gridtextr\" style='width:50px' readonly type=\"text\" id=" + disc + " value='" + pdisamt + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);


    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "100px");
    make_td.align = "right";
    str = "<input class=\"gridtextr\" style='width:50px' readonly type=\"text\" id=" + agcomm + " value='" + pagcomamt + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);

    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "100px");
    make_td.align = "right";
    str = "<input class=\"gridtextr\" style='width:50px' readonly type=\"text\" id=" + addAgComm + " value='" + paddagcomamt + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);

    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "100px");
    make_td.align = "right";
    str = "<input class=\"gridtextr\" style='width:50px' readonly type=\"text\" id=" + netamt + " value='" + pnetamt + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);


    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "50px");
    make_td.align = "right";
    str = "<input class=\"gridtextr\" style='width:50px' readonly type=\"text\" id=" + servtaxamt + " value='" + pservamtamt + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);


    make_td = document.createElement("td");
    make_td.className = "GridHdtdr";
    make_td.setAttribute("width", "50px");
    make_td.align = "right";
    str = "<input class=\"gridtextr\" style='width:50px' readonly type=\"text\" id=" + billamtgrid + " value='" + ptotbillamt + "' />";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);



    make_td = document.createElement("td");
    make_td.align = "center";
    str = "<select class=\"griddrop\" style='width:70px' disabled id=" + Status + " value='' onchange=\"return Blankgross();\" >";
    str = str + "<option value=\"B\">BOOKED</option>";
    str = str + "<option value=\"P\">ON AIR</option>";
    str = str + "<option value=\"C\">CANCELLED</option>";
    str = str + "<option value=\"H\">HOLD</option>";
    str = str + "<option value=\"I\">INVOICED</option>";
    str = str + "</select>";
    make_td.innerHTML = str;
    Make_Row.appendChild(make_td);

    document.getElementById('drincrgfdiv').getElementsByTagName('tbody')[0].appendChild(Make_Row);
    gridcalction();

    document.getElementById('drpmonth').focus();
    return false;
}
function scdate() {
    var Type = "BMS_BOOKING_DET";

    var res = Booking.Gentempcode(Type);
    var ds = res.value;
    if (ds == null) {
        alert(res.error.description);
        return false;
    }
    tempdetil = ds.Tables[0].Rows[0].TEMP_CODE;

    var chkdate = document.getElementById('drpmonth').value;
    var datafill = chkdate.split("/")
    var monthg = datafill[0];
    var year = datafill[1];
    if (document.getElementById('days1').value != "") {
        pSpotsc = document.getElementById('days1').value;
        pSchueduledate = "01" + "/" + monthg + "/" + year;
        showsctempdet();
    }
    if (document.getElementById('days2').value != "") {
        pSpotsc = document.getElementById('days2').value;
        pSchueduledate = "02" + "/" + monthg + "/" + year;
        showsctempdet();
    }

    if (document.getElementById('days3').value != "") {
        pSpotsc = document.getElementById('days3').value;
        pSchueduledate = "03" + "/" + monthg + "/" + year;
        showsctempdet();
    }

    if (document.getElementById('days4').value != "") {
        pSpotsc = document.getElementById('days4').value;
        pSchueduledate = "04" + "/" + monthg + "/" + year;
        showsctempdet();
    }

    if (document.getElementById('days5').value != "") {
        pSpotsc = document.getElementById('days5').value;
        pSchueduledate = "05" + "/" + monthg + "/" + year;
        showsctempdet();
    }


    if (document.getElementById('days6').value != "") {
        pSpotsc = document.getElementById('days6').value;
        pSchueduledate = "06" + "/" + monthg + "/" + year;
        showsctempdet();
    }


    if (document.getElementById('days7').value != "") {
        pSpotsc = document.getElementById('days7').value;
        pSchueduledate = "07" + "/" + monthg + "/" + year;
        showsctempdet();

    }
    if (document.getElementById('days8').value != "") {
        pSpotsc = document.getElementById('days8').value;
        pSchueduledate = "08" + "/" + monthg + "/" + year;
        showsctempdet();
    }
    if (document.getElementById('days9').value != "") {
        pSpotsc = document.getElementById('days9').value;
        pSchueduledate = "09" + "/" + monthg + "/" + year;
        showsctempdet();
    }
    if (document.getElementById('days10').value != "") {
        pSpotsc = document.getElementById('days10').value;
        pSchueduledate = "10" + "/" + monthg + "/" + year;
        showsctempdet();
    }
    if (document.getElementById('days11').value != "") {
        pSpotsc = document.getElementById('days11').value;
        pSchueduledate = "11" + "/" + monthg + "/" + year;
        showsctempdet();
    }
    if (document.getElementById('days12').value != "") {
        pSpotsc = document.getElementById('days12').value;
        pSchueduledate = "12" + "/" + monthg + "/" + year;
        showsctempdet();
    }
    if (document.getElementById('days13').value != "") {
        pSpotsc = document.getElementById('days13').value;
        pSchueduledate = "13" + "/" + monthg + "/" + year;
        showsctempdet();
    }
    if (document.getElementById('days14').value != "") {
        pSpotsc = document.getElementById('days14').value;
        pSchueduledate = "14" + "/" + monthg + "/" + year;
        showsctempdet();
    }
    if (document.getElementById('days15').value != "") {
        pSpotsc = document.getElementById('days15').value;
        pSchueduledate = "15" + "/" + monthg + "/" + year;
        showsctempdet();
    }
    if (document.getElementById('days16').value != "") {
        pSpotsc = document.getElementById('days16').value;
        pSchueduledate = "16" + "/" + monthg + "/" + year;
        showsctempdet();
    }
    if (document.getElementById('days17').value != "") {
        pSpotsc = document.getElementById('days17').value;
        pSchueduledate = "17" + "/" + monthg + "/" + year;
        showsctempdet();
    }
    if (document.getElementById('days18').value != "") {
        pSpotsc = document.getElementById('days18').value;
        pSchueduledate = "18" + "/" + monthg + "/" + year;
        showsctempdet();
    }
    if (document.getElementById('days19').value != "") {
        pSpotsc = document.getElementById('days19').value;
        pSchueduledate = "19" + "/" + monthg + "/" + year;
        showsctempdet();
    }
    if (document.getElementById('days20').value != "") {
        pSpotsc = document.getElementById('days20').value;
        pSchueduledate = "20" + "/" + monthg + "/" + year;
        showsctempdet();
    }
    if (document.getElementById('days21').value != "") {
        pSpotsc = document.getElementById('days21').value;
        pSchueduledate = "21" + "/" + monthg + "/" + year;
        showsctempdet();
    }

    if (document.getElementById('days22').value != "") {
        pSpotsc = document.getElementById('days22').value;
        pSchueduledate = "22" + "/" + monthg + "/" + year;
        showsctempdet();
    }

    if (document.getElementById('days23').value != "") {
        pSpotsc = document.getElementById('days23').value;
        pSchueduledate = "23" + "/" + monthg + "/" + year;
        showsctempdet();
    }



    if (document.getElementById('days24').value != "") {
        pSpotsc = document.getElementById('days24').value;
        pSchueduledate = "24" + "/" + monthg + "/" + year;
        showsctempdet();
    }
    if (document.getElementById('days25').value != "") {
        pSpotsc = document.getElementById('days25').value;
        pSchueduledate = "25" + "/" + monthg + "/" + year;
        showsctempdet();
    }

    if (document.getElementById('days26').value != "") {
        pSpotsc = document.getElementById('days26').value;
        pSchueduledate = "26" + "/" + monthg + "/" + year;
        showsctempdet();
    }
    if (document.getElementById('days27').value != "") {
        pSpotsc = document.getElementById('days27').value;
        pSchueduledate = "27" + "/" + monthg + "/" + year;
        showsctempdet();
    }
    if (document.getElementById('days28').value != "") {
        pSpotsc = document.getElementById('days28').value;
        pSchueduledate = "28" + "/" + monthg + "/" + year;
        showsctempdet();
    }
    if (document.getElementById('days29').value != "") {
        pSpotsc = document.getElementById('days29').value;
        pSchueduledate = "29" + "/" + monthg + "/" + year;
        showsctempdet();
    }
    if (document.getElementById('days30').value != "") {
        pSpotsc = document.getElementById('days30').value;
        pSchueduledate = "30" + "/" + monthg + "/" + year;
        showsctempdet();
    }
    if (document.getElementById('days31').value != "") {
        pSpotsc = document.getElementById('days31').value;
        pSchueduledate = "31" + "/" + monthg + "/" + year;
        showsctempdet();
    }
    return false;
}
function showsctempdet() {
    var PCOMP_CODE = document.getElementById('hdncompcode').value;
    var PCENT_CODE = document.getElementById('hdncenter').value;
    if (hiddentext == "new") {
        PTEMP_NO = document.getElementById('hdnbookno').value
    }
    else {
        var PTEMP_NO = document.getElementById('txtbokng').value;
    }
    var PCHANNEL_CODE = pChannelcode;
    var PAD_TYPE = pAdtypecode;
    var PCOMM_ID = pptapidcode;
    var PSCH_DATE = pSchueduledate;
    var PPRIME_TIME = primtimecode;
    var PFROM_TIME = pFromTime;
    var PTO_TIME = pEndTime;
    var PNO_SPOT = pSpotsc;
    var PDATE_FORMAT = document.getElementById('hiddendateformat').value;
    var pprogramme = pprogramcode;
    var pspot_type = pspotypecode;
    var pseg = pSeg;
    var ppostion = pPostion;
    var PEXTRA = tempdetil;
    var PEXTRA1 = "";
    var PEXTRA2 = "";
    var PEXTRA3 = "";
    var PEXTRA4 = "";
    if (PSCH_DATE != "") {
        if (PDATE_FORMAT == "dd/mm/yyyy") {
            PSCH_DATE = PSCH_DATE.split('/');
            PSCH_DATE = PSCH_DATE[1] + "/" + PSCH_DATE[0] + "/" + PSCH_DATE[2];
        }
        else if (PDATE_FORMAT == "mm/dd/yyyy") {

        }
        else if (dateformat == "yyyy/mm/dd") {
            PSCH_DATE = PSCH_DATE.split('/');
            PSCH_DATE = PSCH_DATE[1] + "/" + PSCH_DATE[2] + "/" + PSCH_DATE[0];
        }
        else {
            alert("Dateformat is either null or blank");
            return false;
        }
    }
    var res = Booking.tempdetail(PCOMP_CODE, PCENT_CODE, PTEMP_NO, PCHANNEL_CODE, PAD_TYPE, PCOMM_ID, PSCH_DATE, PPRIME_TIME, PFROM_TIME, PTO_TIME, PNO_SPOT, PDATE_FORMAT, pprogramme, pspot_type, pseg, ppostion, PEXTRA, PEXTRA1, PEXTRA2, PEXTRA3, PEXTRA4);
    return false;
}
//****************************************************************************POP UP sc date ***********************************************************
function getopen(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    activeidgp = document.activeElement.id;
    var id = activeidgp.split("_");
    var PCOMP_CODE = document.getElementById('hdncompcode').value;
    var PCENT_CODE = document.getElementById('hdncenter').value;
    if (hiddentext == "new") {
        PTEMP_NO = document.getElementById('hdnbookno').value
    }
    else {
        var PTEMP_NO = document.getElementById('txtbokng').value;
    }
    var PCHANNEL_CODE = document.getElementById('Channelcode_' + id[1]).value.toUpperCase();
    var PAD_TYPE = document.getElementById('Adtypecode_' + id[1]).value.toUpperCase();
    var PCOMM_ID = document.getElementById('tapidcode_' + id[1]).value.toUpperCase();

    var PPRIME_TIME = document.getElementById('primcode_' + id[1]).value.toUpperCase();
    var PFROM_TIME = document.getElementById('FromTime_' + id[1]).value.toUpperCase();
    var PTO_TIME = document.getElementById('EndTime_' + id[1]).value.toUpperCase();



    var PDATE_FORMAT = document.getElementById('hiddendateformat').value;

    var pprogramme = document.getElementById('programcode_' + id[1]).value.toUpperCase();
    var pspot_type = document.getElementById('spotcode_' + id[1]).value.toUpperCase();
    var pseg = "";
    var ppostion = "";

    var PEXTRA = "";
    var PEXTRA1 = "";
    var PEXTRA2 = "";
    var PEXTRA3 = "";
    var PEXTRA4 = "";
    var chkdate = document.getElementById('Schueduledate_' + id[1]).value.toUpperCase();
    var datafill = chkdate.split("/")
    var monthg = datafill[0];
    var year = datafill[1];
    if (id[0] == "dayg1") {
        var PNO_SPOT = document.getElementById('dayg1_' + id[1]).value.toUpperCase();
        var PSCH_DATE = monthg + "/" + "01" + "/" + year;

    }
    if (id[0] == "dayg2") {
        var PNO_SPOT = document.getElementById('dayg2_' + id[1]).value.toUpperCase();
        var PSCH_DATE = monthg + "/" + "02" + "/" + year;

    }

    if (id[0] == "dayg3") {
        var PNO_SPOT = document.getElementById('dayg3_' + id[1]).value.toUpperCase();
        var PSCH_DATE = monthg + "/" + "03" + "/" + year;

    }

    if (id[0] == "dayg4") {
        var PNO_SPOT = document.getElementById('dayg4_' + id[1]).value.toUpperCase();
        var PSCH_DATE = monthg + "/" + "04" + "/" + year;

    }

    if (id[0] == "dayg5") {
        var PNO_SPOT = document.getElementById('dayg5_' + id[1]).value.toUpperCase();
        var PSCH_DATE = monthg + "/" + "05" + "/" + year;

    }
    if (id[0] == "dayg6") {
        var PNO_SPOT = document.getElementById('dayg6_' + id[1]).value.toUpperCase();
        var PSCH_DATE = monthg + "/" + "06" + "/" + year;

    }

    if (id[0] == "dayg5") {
        var PNO_SPOT = document.getElementById('dayg5_' + id[1]).value.toUpperCase();
        var PSCH_DATE = monthg + "/" + "05" + "/" + year;

    }

    if (id[0] == "dayg7") {
        var PNO_SPOT = document.getElementById('dayg7_' + id[1]).value.toUpperCase();
        var PSCH_DATE = monthg + "/" + "07" + "/" + year;

    }

    if (id[0] == "dayg8") {
        var PNO_SPOT = document.getElementById('dayg8_' + id[1]).value.toUpperCase();
        var PSCH_DATE = monthg + "/" + "08" + "/" + year;

    }


    if (id[0] == "dayg9") {
        var PNO_SPOT = document.getElementById('dayg9_' + id[1]).value.toUpperCase();
        var PSCH_DATE = monthg + "/" + "09" + "/" + year;

    }


    if (id[0] == "dayg10") {
        var PNO_SPOT = document.getElementById('dayg10_' + id[1]).value.toUpperCase();
        var PSCH_DATE = monthg + "/" + "10" + "/" + year;

    }
    if (id[0] == "dayg11") {
        var PNO_SPOT = document.getElementById('dayg11_' + id[1]).value.toUpperCase();
        var PSCH_DATE = monthg + "/" + "11" + "/" + year;

    }
    if (id[0] == "dayg12") {
        var PNO_SPOT = document.getElementById('dayg12_' + id[1]).value.toUpperCase();
        var PSCH_DATE = monthg + "/" + "12" + "/" + year;

    }

    if (id[0] == "dayg13") {
        var PNO_SPOT = document.getElementById('dayg13_' + id[1]).value.toUpperCase();
        var PSCH_DATE = monthg + "/" + "13" + "/" + year;

    }

    if (id[0] == "dayg14") {
        var PNO_SPOT = document.getElementById('dayg14_' + id[1]).value.toUpperCase();
        var PSCH_DATE = monthg + "/" + "14" + "/" + year;

    }

    if (id[0] == "dayg15") {
        var PNO_SPOT = document.getElementById('dayg15_' + id[1]).value.toUpperCase();
        var PSCH_DATE = monthg + "/" + "15" + "/" + year;

    }
    if (id[0] == "dayg16") {
        var PNO_SPOT = document.getElementById('dayg16_' + id[1]).value.toUpperCase();
        var PSCH_DATE = monthg + "/" + "16" + "/" + year;

    }



    if (id[0] == "dayg17") {
        var PNO_SPOT = document.getElementById('dayg17_' + id[1]).value.toUpperCase();
        var PSCH_DATE = monthg + "/" + "17" + "/" + year;

    }

    if (id[0] == "dayg18") {
        var PNO_SPOT = document.getElementById('dayg18_' + id[1]).value.toUpperCase();
        var PSCH_DATE = monthg + "/" + "18" + "/" + year;

    }


    if (id[0] == "dayg19") {
        var PNO_SPOT = document.getElementById('dayg19_' + id[1]).value.toUpperCase();
        var PSCH_DATE = monthg + "/" + "19" + "/" + year;

    }


    if (id[0] == "dayg20") {
        var PNO_SPOT = document.getElementById('dayg20_' + id[1]).value.toUpperCase();
        var PSCH_DATE = monthg + "/" + "20" + "/" + year;

    }
    if (id[0] == "dayg21") {
        var PNO_SPOT = document.getElementById('dayg21_' + id[1]).value.toUpperCase();
        var PSCH_DATE = monthg + "/" + "21" + "/" + year;

    }
    if (id[0] == "dayg22") {
        var PNO_SPOT = document.getElementById('dayg22_' + id[1]).value.toUpperCase();
        var PSCH_DATE = monthg + "/" + "22" + "/" + year;

    }

    if (id[0] == "dayg23") {
        var PNO_SPOT = document.getElementById('dayg23_' + id[1]).value.toUpperCase();
        var PSCH_DATE = monthg + "/" + "23" + "/" + year;

    }

    if (id[0] == "dayg24") {
        var PNO_SPOT = document.getElementById('dayg24_' + id[1]).value.toUpperCase();
        var PSCH_DATE = monthg + "/" + "24" + "/" + year;

    }

    if (id[0] == "dayg25") {
        var PNO_SPOT = document.getElementById('dayg25_' + id[1]).value.toUpperCase();
        var PSCH_DATE = monthg + "/" + "25" + "/" + year;

    }
    if (id[0] == "dayg26") {
        var PNO_SPOT = document.getElementById('dayg26_' + id[1]).value.toUpperCase();
        var PSCH_DATE = monthg + "/" + "26" + "/" + year;

    }



    if (id[0] == "dayg27") {
        var PNO_SPOT = document.getElementById('dayg27_' + id[1]).value.toUpperCase();
        var PSCH_DATE = monthg + "/" + "27" + "/" + year;

    }

    if (id[0] == "dayg28") {
        var PNO_SPOT = document.getElementById('dayg28_' + id[1]).value.toUpperCase();
        var PSCH_DATE = monthg + "/" + "28" + "/" + year;

    }


    if (id[0] == "dayg29") {
        var PNO_SPOT = document.getElementById('dayg29_' + id[1]).value.toUpperCase();
        var PSCH_DATE = monthg + "/" + "29" + "/" + year;

    }


    if (id[0] == "dayg30") {
        var PNO_SPOT = document.getElementById('dayg30_' + id[1]).value.toUpperCase();
        var PSCH_DATE = monthg + "/" + "30" + "/" + year;

    }
    if (id[0] == "dayg31") {
        var PNO_SPOT = document.getElementById('dayg31_' + id[1]).value.toUpperCase();
        var PSCH_DATE = monthg + "/" + "31" + "/" + year;

    }
    window.open("scdatefill.aspx?PCENT_CODE=" + PCENT_CODE + "&PCOMP_CODE=" + PCOMP_CODE + "&PTEMP_NO=" + PTEMP_NO + "&pprogramme=" + pprogramme + "&pspot_type=" + pspot_type + "&pseg=" + pseg + "&ppostion=" + ppostion + "&PCHANNEL_CODE=" + PCHANNEL_CODE + "&PAD_TYPE=" + PAD_TYPE + "&PCOMM_ID=" + PCOMM_ID + "&PSCH_DATE=" + PSCH_DATE + "&PPRIME_TIME=" + PPRIME_TIME + "&PFROM_TIME=" + PFROM_TIME + "&PTO_TIME=" + PTO_TIME + "&PNO_SPOT=" + PNO_SPOT + "&PDATE_FORMAT=" + PDATE_FORMAT + "&PEXTRA=" + PEXTRA + "&PEXTRA1=" + PEXTRA1 + "&PEXTRA2=" + PEXTRA2 + "&PEXTRA3=" + PEXTRA3 + "&PEXTRA4=" + PEXTRA4 + "&ShowMode=" + hiddentext, 'false', 'width=420px,height=350px ,status=0,toolbar=0,resizable=1,top=244,left=210,scrollbars=yes');
    return false
}
function datafillscdate() {
    var PCOMP_CODE = document.getElementById('hiddencompcode').value;
    var PCENT_CODE = document.getElementById('hdncenter').value;
    var PTEMP_NO = document.getElementById('tempno').value;
    var PCHANNEL_CODE = document.getElementById('chanelcode').value;
    var PAD_TYPE = document.getElementById('adtype').value;
    var PCOMM_ID = document.getElementById('pcommid').value;
    var PSCH_DATE = document.getElementById('pscdate').value;
    var PPRIME_TIME = document.getElementById('primetimes').value;
    var PFROM_TIME = document.getElementById('fromtimes').value;
    var PTO_TIME = document.getElementById('totimes').value;
    var PNO_SPOT = document.getElementById('noofspots').value;
    var PDATE_FORMAT = document.getElementById('hiddendateformat').value;
    var pprogramme = document.getElementById('hdnprogram').value;
    var pspot_type = document.getElementById('hdnspotype').value;
    var pseg = document.getElementById('hdnseg').value;
    var ppostion = document.getElementById('hdnpositon').value;
    var PEXTRA = "";
    var PEXTRA1 = "";
    var PEXTRA2 = "";
    var PEXTRA3 = "";
    var PEXTRA4 = "";

    var res = scdatefill.tempdetail(PCOMP_CODE, PCENT_CODE, PTEMP_NO, PCHANNEL_CODE, PAD_TYPE, PCOMM_ID, PSCH_DATE, PPRIME_TIME, PFROM_TIME, PTO_TIME, PNO_SPOT, PDATE_FORMAT, pprogramme, pspot_type, pseg, ppostion, PEXTRA, PEXTRA1, PEXTRA2, PEXTRA3, PEXTRA4);
    var ds_gl = res.value;

    if (ds_gl == null) {

        alert(res.error.description);
        return false;
    }
    if (ds_gl.Tables[0].Rows.length > 0) {
        var schdate;
        var fromtimesc;
        var totimesc;
        var nospotsc;
        var idno;
        str = "<div id=\"griddiv\" runat=\"server\" style=\"OVERFLOW: auto;WIDTH:300px; HEIGHT: 280px;\"><table cellpadding=\"0\" cellspacing=\"1px\" id=\"tblGrid\"  border=1><tr>";

        str += "<td align=\"center\" class=\"GridHdtdr\" valign=\"top\" >Sc Date</td>";
        str += "<td align=\"center\" class=\"GridHdtdr\" valign=\"top\">From Time</td>";
        str += "<td align=\"center\" class=\"GridHdtdr\" valign=\"top\" >To time</td>";
        str += "<td valign=\"top\" align=\"center\" class=\"GridHdtdr\">No of Spot</td>";
        str += "</tr></table></div>";
        document.getElementById('scdategrid').innerHTML = str;

        for (var i = 0; i < ds_gl.Tables[0].Rows.length; i++) {

            var gridtab_vari = document.getElementById('tblGrid');

            Make_Row = document.createElement("tr");
            Make_Row.id = "sstr_" + i;
            schdate = "schdate_" + i;
            fromtimesc = "fromtimesc_" + i;
            totimesc = "totimesc_" + i;
            nospotsc = "nospotsc_" + i;
            idno = "idno_" + i;
            make_td = document.createElement("td");
            make_td.style.display = "none";
            make_td.align = "center";
            str = "<input class=\"newgridtext\"  style='width:5px'  type=\"text\" id=" + idno + "  value='" + fndnull1(ds_gl.Tables[0].Rows[i].ID) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.align = "center";
            str = "<input class=\"gridtextnum\" style='width:80px' readonly type=\"text\" id=" + schdate + " value='" + fndnull1(ds_gl.Tables[0].Rows[i].SCH_DATE) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.align = "center";
            str = "<input class=\"gridtextnum\" style='width:60px' onkeydown=\"return Bindfromdatesc(event);\" type=\"text\" id=" + fromtimesc + " value='" + fndnull1(ds_gl.Tables[0].Rows[i].FROM_TIME) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);




            make_td = document.createElement("td");
            make_td.align = "center";
            str = "<input class=\"gridtext\" style='width:60px'  onkeydown=\"return Bindtodatesc(event);\"  type=\"text\" id=" + totimesc + " value='" + fndnull1(ds_gl.Tables[0].Rows[i].TO_TIME) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.align = "center";
            str = "<input class=\"gridtext\" style='width:60px'  onkeypress=\"return ClientisNumber(event);\" onchange=\"return gettotal(this);\"  type=\"text\" id=" + nospotsc + " value='" + fndnull1(ds_gl.Tables[0].Rows[i].NO_SPOT) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);




            document.getElementById('griddiv').getElementsByTagName('tbody')[0].appendChild(Make_Row);
            totspot();
            totalspott = totalspott + document.getElementById("nospotsc_" + i).value;

        }
        document.getElementById('txttot').value = totalspott;
        return false;


    }

}

function gettotal(e) {
    var activeid = e.id;
    var id = activeid.split("_");
    var gridlength = (document.getElementById('tblGrid').rows.length - 1);
    for (var i = 0; i < gridlength; i++) {
        if (document.getElementById("nospotsc_" + i).value == null || document.getElementById("nospotsc_" + i).value == "") {
            var pp = 0;
            totalspottt = totalspottt + pp;
        }
        else {
            totalspottt = totalspottt + parseInt(document.getElementById("nospotsc_" + i).value);
            document.getElementById('txttot').value = totalspottt;
        }
    }
    totalspottt = 0;
}

function savescdate() {
    totspot();
    var PCOMP_CODE = document.getElementById('hiddencompcode').value;
    var PCENT_CODE = document.getElementById('hdncenter').value;
    var PTEMP_NO = document.getElementById('tempno').value;
    var PCHANNEL_CODE = document.getElementById('chanelcode').value;
    var PAD_TYPE = document.getElementById('adtype').value;
    var PCOMM_ID = document.getElementById('pcommid').value;
    var PSCH_DATE = document.getElementById('pscdate').value;
    var PPRIME_TIME = document.getElementById('primetimes').value;
    var PDATE_FORMAT = document.getElementById('hiddendateformat').value;
    var PEXTRA = "";
    var PEXTRA1 = "";
    var PEXTRA2 = "";
    var PEXTRA3 = "";
    var PEXTRA4 = "";
    if (document.getElementById('hdnspot').value != document.getElementById('txtspot').value) {
        alert("Please Enter No of Spot Equal to Total no of Spot");
        return false;

    }
    var gridlength = (document.getElementById('tblGrid').rows.length - 1);
    for (var i = 0; i < gridlength; i++) {
        var PFROM_TIME = document.getElementById("fromtimesc_" + i).value;
        var PTO_TIME = document.getElementById("totimesc_" + i).value;
        var PNO_SPOT = document.getElementById("nospotsc_" + i).value;
        var PID = document.getElementById("idno_" + i).value;
        var res_error = scdatefill.datasavesc(PCOMP_CODE, PCENT_CODE, PTEMP_NO, PCHANNEL_CODE, PAD_TYPE, PCOMM_ID, PSCH_DATE, PPRIME_TIME, PFROM_TIME, PTO_TIME, PNO_SPOT, PDATE_FORMAT, PID, PEXTRA, PEXTRA1, PEXTRA2, PEXTRA3, PEXTRA4);

    }
    if (res_error.value == null) {
        alert(res_error.error.description);
        return false;
    }

    alert("Record Succesfully Saved...");

}
function PopCloseClick() {
    window.close();
}
function totspot() {
    var gridlength = document.getElementById('tblGrid').rows.length;
    var nospotsc = 0;
    for (var k = 0; k < (gridlength - 1); k++) {

        if (document.getElementById("sstr_" + k).style.display != "none") {
            if (document.getElementById("nospotsc_" + k).value != "") {
                nospotsc = nospotsc + parseFloat(document.getElementById("nospotsc_" + k).value);
            }
        }
    }
    document.getElementById("hdnspot").value = nospotsc;
}
//*****************************Function For  from time sc date   select F2***********************
function Bindfromdatesc(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    activeidgp = document.activeElement.id;
    var id = activeidgp.split("_");

    if (key == 113 && document.activeElement.id == ("fromtimesc_" + id[1])) {


        document.getElementById("divfromtime").style.display = "block";
        aTag = eval(document.getElementById("fromtimesc_" + id[1]))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            if (toppos > 800) {
                toppos = 600;
            }
            btag = eval(aTag)
        }
        while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divfromtime').scrollLeft;
        var scrolltop = document.getElementById('divfromtime').scrollTop;
        document.getElementById('divfromtime').style.left = document.getElementById("fromtimesc_" + id[1]).offsetLeft + leftpos - tot + "px";
        document.getElementById('divfromtime').style.top = document.getElementById("fromtimesc_" + id[1]).offsetTop + toppos - scrolltop + "px"; //"510px";

        var pcomp_code = document.getElementById('hiddencompcode').value;
        var pfrom = document.getElementById("fromtimesc_" + id[1]).value.toUpperCase()
        var ptimecode = document.getElementById('primetimes').value.toUpperCase();
        var pextra = "";
        scdatefill.Bindfromprime(pcomp_code, pfrom, ptimecode, pextra, bindfromsc_callback);



    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == ("fromtimesc_" + id[1])) {
            document.getElementById("visitecode_" + id[1]).value = "";

        }
    }
    else if (key == 27) {
        document.getElementById("divfromtime").style.display = "none";
        document.getElementById("fromtimesc_" + id[1]).focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "istfrome") {

            return false;
        }
    }
    else if (key == 9) {
        document.getElementById("divfromtime").style.display = "none";
        document.getElementById("fromtimesc_" + id[1]).focus();
        return false;
    }
    else if (key == 38) {
        if (document.getElementById("divfromtime").style.display == "block") {
            if (document.getElementById('istfrome').value == '0') {
                document.getElementById('istfrome').focus();
            }
        }
    }

    else if (key == 40) {
        if (document.getElementById("divfromtime").style.display == "block") {
            document.getElementById("istfrome").focus();
        }
    }
    else {
        document.getElementById("divfromtime").style.display = "block";
        aTag = eval(document.getElementById("fromtimesc_" + id[1]))
        var btag;
        var leftpos = 0;
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
        var tot = document.getElementById('divfromtime').scrollLeft;
        var scrolltop = document.getElementById('divfromtime').scrollTop;
        document.getElementById('divfromtime').style.left = document.getElementById("fromtimesc_" + id[1]).offsetLeft + leftpos - tot + "px";
        document.getElementById('divfromtime').style.top = document.getElementById("fromtimesc_" + id[1]).offsetTop + toppos - scrolltop + "px"; //"510px";

        var pcomp_code = document.getElementById('hiddencompcode').value;
        var pfrom = document.getElementById("fromtimesc_" + id[1]).value.toUpperCase()
        var ptimecode = document.getElementById('primetimes').value.toUpperCase();
        var pextra = "";
        scdatefill.Bindfromprime(pcomp_code, pfrom, ptimecode, pextra, bindfromsc_callback);

    }
}
function bindfromsc_callback(response) {
    var ds = response.value;
    var id = activeidgp.split("_");
    var lstitem = document.getElementById("istfrome");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-- Select From Time --", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].FROM_TIME, ds.Tables[0].Rows[i].FROM_TIME);
        }


    }

    // document.getElementById("visitecode_" + id[1]).value = "";
    document.getElementById("istfrome").value = "0";

    return false;
}

function filllfromtimescdate(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    var id = activeidgp.split("_");

    if (key == 27) {
        if (document.activeElement.id == "fromtimesc_" || document.activeElement.id == "istfrome") {
            document.getElementById("divfromtime").style.display = "none";
            document.getElementById("fromtimesc_" + id[1]).focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {
        if (document.getElementById("istfrome").value == "0") {
            //alert("Please Select From Time");
            return false;
        }
        else {
            document.getElementById("divfromtime").style.display = "none";
            var lstvalue = document.getElementById('istfrome').value;
            for (var k = 0; k < document.getElementById("istfrome").length; k++) {
                if (document.getElementById('istfrome').options[k].value == lstvalue) {
                    //  document.getElementById("visitecode_" + id[1]).value = document.getElementById('istfrome').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById("fromtimesc_" + id[1]).value = document.getElementById('istfrome').options[k].textContent;
                    else
                        document.getElementById("fromtimesc_" + id[1]).value = document.getElementById('istfrome').options[k].innerText;

                    break;
                }
            }
        }

        document.getElementById("fromtimesc_" + id[1]).focus();
        return false;
    }
}
//*****************************Function For  To time sc date   select F2***********************
function Bindtodatesc(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    activeidgp = document.activeElement.id;
    var id = activeidgp.split("_");

    if (key == 113 && document.activeElement.id == ("totimesc_" + id[1])) {


        document.getElementById("divtotime").style.display = "block";
        aTag = eval(document.getElementById("totimesc_" + id[1]))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            if (toppos > 800) {
                toppos = 600;
            }
            btag = eval(aTag)
        }
        while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divtotime').scrollLeft;
        var scrolltop = document.getElementById('divtotime').scrollTop;
        document.getElementById('divtotime').style.left = document.getElementById("totimesc_" + id[1]).offsetLeft + leftpos - tot + "px";
        document.getElementById('divtotime').style.top = document.getElementById("totimesc_" + id[1]).offsetTop + toppos - scrolltop + "px"; //"510px";

        var pcomp_code = document.getElementById('hiddencompcode').value;
        var pfrom = document.getElementById("totimesc_" + id[1]).value.toUpperCase()
        var ptimecode = document.getElementById('primetimes').value.toUpperCase();
        var pextra = "";
        scdatefill.Bindfromprime(pcomp_code, pfrom, ptimecode, pextra, bindtosc_callback);



    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == ("totimesc_" + id[1])) {
            document.getElementById("visitecode_" + id[1]).value = "";

        }
    }
    else if (key == 27) {
        document.getElementById("divtotime").style.display = "none";
        document.getElementById("totimesc_" + id[1]).focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "isttotime") {

            return false;
        }
    }
    else if (key == 9) {
        document.getElementById("divtotime").style.display = "none";
        document.getElementById("totimesc_" + id[1]).focus();
        return false;
    }
    else if (key == 38) {
        if (document.getElementById("divtotime").style.display == "block") {
            if (document.getElementById('isttotime').value == '0') {
                document.getElementById('isttotime').focus();
            }
        }
    }

    else if (key == 40) {
        if (document.getElementById("divtotime").style.display == "block") {
            document.getElementById("isttotime").focus();
        }
    }
    else {
        document.getElementById("divtotime").style.display = "block";
        aTag = eval(document.getElementById("totimesc_" + id[1]))
        var btag;
        var leftpos = 0;
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
        var tot = document.getElementById('divtotime').scrollLeft;
        var scrolltop = document.getElementById('divtotime').scrollTop;
        document.getElementById('divtotime').style.left = document.getElementById("totimesc_" + id[1]).offsetLeft + leftpos - tot + "px";
        document.getElementById('divtotime').style.top = document.getElementById("totimesc_" + id[1]).offsetTop + toppos - scrolltop + "px"; //"510px";

        var pcomp_code = document.getElementById('hiddencompcode').value;
        var pfrom = document.getElementById("totimesc_" + id[1]).value.toUpperCase()
        var ptimecode = document.getElementById('primetimes').value.toUpperCase();
        var pextra = "";
        scdatefill.Bindfromprime(pcomp_code, pfrom, ptimecode, pextra, bindtosc_callback);

    }
}
function bindtosc_callback(response) {
    var ds = response.value;
    var id = activeidgp.split("_");
    var lstitem = document.getElementById("isttotime");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-- Select To Time --", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].TO_TIME, ds.Tables[0].Rows[i].TO_TIME);
        }


    }

    // document.getElementById("visitecode_" + id[1]).value = "";
    document.getElementById("isttotime").value = "0";

    return false;
}

function fillltotimescdate(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    var id = activeidgp.split("_");

    if (key == 27) {
        if (document.activeElement.id == "totimesc_" || document.activeElement.id == "isttotime") {
            document.getElementById("divtotime").style.display = "none";
            document.getElementById("totimesc_" + id[1]).focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {
        if (document.getElementById("isttotime").value == "0") {
            //alert("Please Select To Time");
            return false;
        }
        else {
            document.getElementById("divtotime").style.display = "none";
            var lstvalue = document.getElementById('isttotime').value;
            for (var k = 0; k < document.getElementById("isttotime").length; k++) {
                if (document.getElementById('isttotime').options[k].value == lstvalue) {
                    //  document.getElementById("visitecode_" + id[1]).value = document.getElementById('isttotime').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById("totimesc_" + id[1]).value = document.getElementById('isttotime').options[k].textContent;
                    else
                        document.getElementById("totimesc_" + id[1]).value = document.getElementById('isttotime').options[k].innerText;

                    break;
                }
            }
        }

        document.getElementById("totimesc_" + id[1]).focus();
        return false;
    }
}



//*****************************************************END POP SC DATE *********************************************************
function disbalfield() {
    document.getElementById('days1').disabled = false;
    document.getElementById('days2').disabled = false;
    document.getElementById('days3').disabled = false;
    document.getElementById('days4').disabled = false;
    document.getElementById('days5').disabled = false;
    document.getElementById('days6').disabled = false;
    document.getElementById('days7').disabled = false;
    document.getElementById('days8').disabled = false;
    document.getElementById('days9').disabled = false;
    document.getElementById('days10').disabled = false;
    document.getElementById('days11').disabled = false;
    document.getElementById('days12').disabled = false;
    document.getElementById('days13').disabled = false;
    document.getElementById('days14').disabled = false;
    document.getElementById('days15').disabled = false;
    document.getElementById('days16').disabled = false;
    document.getElementById('days17').disabled = false;
    document.getElementById('days18').disabled = false;
    document.getElementById('days19').disabled = false;
    document.getElementById('days20').disabled = false;
    document.getElementById('days21').disabled = false;
    document.getElementById('days22').disabled = false;
    document.getElementById('days23').disabled = false;
    document.getElementById('days24').disabled = false;
    document.getElementById('days25').disabled = false;
    document.getElementById('days26').disabled = false;
    document.getElementById('days27').disabled = false;
    document.getElementById('days28').disabled = false;
    document.getElementById('days29').disabled = false;
    document.getElementById('days30').disabled = false;
    document.getElementById('days31').disabled = false;
    return false;
}
function disbalfielddate() {
    document.getElementById('days1').disabled = true;
    document.getElementById('days2').disabled = true;
    document.getElementById('days3').disabled = true;
    document.getElementById('days4').disabled = true;
    document.getElementById('days5').disabled = true;
    document.getElementById('days6').disabled = true;
    document.getElementById('days7').disabled = true;
    document.getElementById('days8').disabled = true;
    document.getElementById('days9').disabled = true;
    document.getElementById('days10').disabled = true;
    document.getElementById('days11').disabled = true;
    document.getElementById('days12').disabled = true;
    document.getElementById('days13').disabled = true;
    document.getElementById('days14').disabled = true;
    document.getElementById('days15').disabled = true;
    document.getElementById('days16').disabled = true;
    document.getElementById('days17').disabled = true;
    document.getElementById('days18').disabled = true;
    document.getElementById('days19').disabled = true;
    document.getElementById('days20').disabled = true;
    document.getElementById('days21').disabled = true;
    document.getElementById('days22').disabled = true;
    document.getElementById('days23').disabled = true;
    document.getElementById('days24').disabled = true;
    document.getElementById('days25').disabled = true;
    document.getElementById('days26').disabled = true;
    document.getElementById('days27').disabled = true;
    document.getElementById('days28').disabled = true;
    document.getElementById('days29').disabled = true;
    document.getElementById('days30').disabled = true;
    document.getElementById('days31').disabled = true;
    return false;
}
function editgriddata() {
    blankfild();
    disbalfield();
    var key = event.keyCode ? event.keyCode : event.which;
    activeidgp = document.activeElement.id;
    var id = activeidgp.split("_");
    document.getElementById('drpchannel').value = document.getElementById('Channelcode_' + id[1]).value.toUpperCase();
    document.getElementById('drpadtype').value = document.getElementById('Adtypecode_' + id[1]).value.toUpperCase();
    document.getElementById('txttapid').value = document.getElementById('TapeId_' + id[1]).value.toUpperCase();
    document.getElementById('rodptype').value = document.getElementById('RODPTYPE_' + id[1]).value.toUpperCase();
    document.getElementById('txtfromtime').value = document.getElementById('FromTime_' + id[1]).value.toUpperCase();
    document.getElementById('txttotime').value = document.getElementById('EndTime_' + id[1]).value.toUpperCase();
    document.getElementById('txtnProgName').value = document.getElementById('Program_' + id[1]).value.toUpperCase();
    document.getElementById('drpspottype').value = document.getElementById('spotcode_' + id[1]).value.toUpperCase();
    //document.getElementById('txtsegment').value = document.getElementById('Seg_' + id[1]).value.toUpperCase();
    // document.getElementById('txtpostion').value = document.getElementById('Postion_' + id[1]).value.toUpperCase();
    document.getElementById('hdntapid').value = document.getElementById('tapidcode_' + id[1]).value.toUpperCase();
    document.getElementById('hdnprime').value = document.getElementById('primcode_' + id[1]).value.toUpperCase();
    document.getElementById('hiddenprogram').value = document.getElementById('programcode_' + id[1]).value.toUpperCase();
    document.getElementById('drpmonth').value = document.getElementById('Schueduledate_' + id[1]).value.toUpperCase();
    document.getElementById('hdrowid').value = activeidgp;
    document.getElementById('days1').value = document.getElementById('dayg1_' + id[1]).value.toUpperCase();
    document.getElementById('days2').value = document.getElementById('dayg2_' + id[1]).value.toUpperCase();
    document.getElementById('days3').value = document.getElementById('dayg3_' + id[1]).value.toUpperCase();
    document.getElementById('days4').value = document.getElementById('dayg4_' + id[1]).value.toUpperCase();
    document.getElementById('days5').value = document.getElementById('dayg5_' + id[1]).value.toUpperCase();
    document.getElementById('days6').value = document.getElementById('dayg6_' + id[1]).value.toUpperCase();
    document.getElementById('days7').value = document.getElementById('dayg7_' + id[1]).value.toUpperCase();
    document.getElementById('days8').value = document.getElementById('dayg8_' + id[1]).value.toUpperCase();
    document.getElementById('days9').value = document.getElementById('dayg9_' + id[1]).value.toUpperCase();
    document.getElementById('days10').value = document.getElementById('dayg10_' + id[1]).value.toUpperCase();
    document.getElementById('days11').value = document.getElementById('dayg11_' + id[1]).value.toUpperCase();
    document.getElementById('days12').value = document.getElementById('dayg12_' + id[1]).value.toUpperCase();
    document.getElementById('days13').value = document.getElementById('dayg13_' + id[1]).value.toUpperCase();
    document.getElementById('days14').value = document.getElementById('dayg14_' + id[1]).value.toUpperCase();
    document.getElementById('days15').value = document.getElementById('dayg15_' + id[1]).value.toUpperCase();
    document.getElementById('days16').value = document.getElementById('dayg16_' + id[1]).value.toUpperCase();
    document.getElementById('days17').value = document.getElementById('dayg17_' + id[1]).value.toUpperCase();
    document.getElementById('days18').value = document.getElementById('dayg18_' + id[1]).value.toUpperCase();
    document.getElementById('days19').value = document.getElementById('dayg19_' + id[1]).value.toUpperCase();
    document.getElementById('days20').value = document.getElementById('dayg20_' + id[1]).value.toUpperCase();
    document.getElementById('days21').value = document.getElementById('dayg21_' + id[1]).value.toUpperCase();
    document.getElementById('days22').value = document.getElementById('dayg22_' + id[1]).value.toUpperCase();
    document.getElementById('days23').value = document.getElementById('dayg23_' + id[1]).value.toUpperCase();
    document.getElementById('days24').value = document.getElementById('dayg24_' + id[1]).value.toUpperCase();
    document.getElementById('days25').value = document.getElementById('dayg25_' + id[1]).value.toUpperCase();
    document.getElementById('days26').value = document.getElementById('dayg26_' + id[1]).value.toUpperCase();
    document.getElementById('days27').value = document.getElementById('dayg27_' + id[1]).value.toUpperCase();
    document.getElementById('days28').value = document.getElementById('dayg28_' + id[1]).value.toUpperCase();
    document.getElementById('days29').value = document.getElementById('dayg29_' + id[1]).value.toUpperCase();
    document.getElementById('days30').value = document.getElementById('dayg30_' + id[1]).value.toUpperCase();
    document.getElementById('days31').value = document.getElementById('dayg31_' + id[1]).value.toUpperCase();

    gridcalction();
}


function chkprimefromtimee() {
    var PCOMPCODE = document.getElementById("hdncompcode").value;
    var PCHANNELCODE = document.getElementById("drpchannel").value;
    var PFROMETIME = document.getElementById("txtfromtime").value;
    var pprime_time_code = document.getElementById("hdnprime").value;
    var res = Booking.chkprimetimeee(PCOMPCODE, PCHANNELCODE, PFROMETIME, pprime_time_code);
    var ds = res.value;
    if (ds.Tables[0].Rows[0].ERROR == "NO") {
        alert("Plz Select Correct From Time");

        document.getElementById('txtfromtime').focus();
        return false;
    }

}

function chkprimetotimee() {
    var PCOMPCODE = document.getElementById("hdncompcode").value;
    var PCHANNELCODE = document.getElementById("drpchannel").value;
    var PFROMETIME = document.getElementById("txttotime").value;
    var pprime_time_code = document.getElementById("hdnprime").value;
    var res = Booking.chkprimetimeee(PCOMPCODE, PCHANNELCODE, PFROMETIME, pprime_time_code);
    var ds = res.value;
    if (ds.Tables[0].Rows[0].ERROR == "NO") {
        alert("Plz Select Correct To Time");
        document.getElementById('txttotime').focus();
        return false;
    }
}
function postdata() {
    // chkprimetimee();


    flagdata = "2";
    disbalfield();
    if (document.getElementById('hdrowid').value != "") {
        gridfilldate();
        return false;
    }



    pChannel = document.getElementById('drpchannel').options[document.getElementById('drpchannel').selectedIndex].text;
    pChannelcode = document.getElementById('drpchannel').value;
    if (pChannelcode == "" || pChannelcode == "0") {
        alert("Please Select Channel  Name");
        document.getElementById('drpchannel').focus();
        return false;

    }
    pAdtype = document.getElementById('drpadtype').options[document.getElementById('drpadtype').selectedIndex].text;
    pAdtypecode = document.getElementById('drpadtype').value;
    if (pAdtypecode == "" || pAdtypecode == "0") {
        alert("Please Select Ad Type  Name");
        document.getElementById('drpchannel').focus();
        return false;

    }
    pTapeId = document.getElementById('txttapid').value;
    pptapidcode = document.getElementById('hdntapid').value;
    if (pptapidcode == "" || pptapidcode == "0") {
        alert("Please Select Comm Id  ");
        document.getElementById('txttapid').focus();
        return false;

    }
    pSchueduledate = "";
    pRODPTYPE = document.getElementById('rodptype').value;
    primtimecode = document.getElementById('hdnprime').value;
    if (primtimecode == "" || primtimecode == "0") {
        alert("Please Select Prime Time");
        document.getElementById('rodptype').focus();
        return false;

    }


    pFromTime = document.getElementById('txtfromtime').value;
    if (pFromTime == "" || pFromTime == "0") {
        alert("Please Select From Time");
        document.getElementById('txtfromtime').focus();
        return false;

    }
    pEndTime = document.getElementById('txttotime').value;
    if (pFromTime == "" || pFromTime == "0") {
        alert("Please Select End Time");
        document.getElementById('txttotime').focus();
        return false;

    }

    pProgram = document.getElementById('txtnProgName').value;
    if (pProgram == "--Select Program Name--") {
        pProgram = "";
    }

    var paytype = document.getElementById('drpspottype').value;
    if (paytype == "" || paytype == "0") {
        alert("Please Select Spot Type");
        document.getElementById('drpspottype').focus();
        return false;

    }
    pprogramcode = document.getElementById('hiddenprogram').value;

    pSopttype = document.getElementById('drpspottype').options[document.getElementById('drpspottype').selectedIndex].text;
    pspotypecode = document.getElementById('drpspottype').value;
    pSpot = ""

    pSeg = "";
    pSegcode = "";
    pPostion = "";
    pDuration = document.getElementById('hdndurtion').value;
    pRate = "";
    pGross = "";
    pStatus = "";
    var date = document.getElementById('txtstartdate').value;
    var enddate = document.getElementById('txtenddate').value;
    var PRATE_TYPE = document.getElementById('drpratetype').value;
    if (PRATE_TYPE == "" || PRATE_TYPE == "0") {
        alert("Enter Rate Type");
        document.getElementById('drpratetype').focus();
        return false;
    }

    if (date == "") {
        alert("Please Select Start Date ");
        document.getElementById('txtstartdate').focus();
        return false;

    }
    if (enddate == "") {
        alert("Please Select End Date ");
        document.getElementById('txtenddate').focus();
        return false;

    }

    var dateformat = document.getElementById('hiddendateformat').value;
    var bookindate = document.getElementById('txtbokngdate').value;
    var staratdate = document.getElementById('txtstartdate').value;
    if (bookindate != "" && staratdate != "") {
        if (dateformat == "dd/mm/yyyy") {
            bookindate = bookindate.split('/');
            bookindate = bookindate[1] + "/" + bookindate[0] + "/" + bookindate[2];
            staratdate = staratdate.split('/');
            staratdate = staratdate[1] + "/" + staratdate[0] + "/" + staratdate[2];
        }
        else if (dateformat == "mm/dd/yyyy") {

        }
        else if (dateformat == "yyyy/mm/dd") {
            bookindate = bookindate.split('/');
            bookindate = bookindate[1] + "/" + bookindate[2] + "/" + bookindate[0];
            staratdate = staratdate.split('/');
            staratdate = staratdate[1] + "/" + staratdate[2] + "/" + staratdate[0];
        }
        else {
            alert("Dateformat is either null or blank");
            return false;
        }
    }

    var toodate = new Date(staratdate);
    var fromdate = new Date(bookindate);
    //if (toodate < fromdate) {
      //  alert("Start Date To must be greater than  Booking Date");
      //  document.getElementById('txtstartdate').focus();
       // return false;
    //}
    var chkdate = document.getElementById('drpmonth').value;
    var datafill = chkdate.split("/")
    var monthg = datafill[0];
    var year = datafill[1];


    pSchueduledatemain = monthg + "/" + year;

    daypg1 = document.getElementById('days1').value;
    daypg2 = document.getElementById('days2').value;
    daypg3 = document.getElementById('days3').value;
    daypg4 = document.getElementById('days4').value;
    daypg5 = document.getElementById('days5').value;
    daypg6 = document.getElementById('days6').value;
    daypg7 = document.getElementById('days7').value;
    daypg8 = document.getElementById('days8').value;
    daypg9 = document.getElementById('days9').value;
    daypg10 = document.getElementById('days10').value;
    daypg11 = document.getElementById('days11').value;
    daypg12 = document.getElementById('days12').value;
    daypg13 = document.getElementById('days13').value;
    daypg14 = document.getElementById('days14').value;
    daypg15 = document.getElementById('days15').value;
    daypg16 = document.getElementById('days16').value;
    daypg17 = document.getElementById('days17').value;
    daypg18 = document.getElementById('days18').value;
    daypg19 = document.getElementById('days19').value;
    daypg20 = document.getElementById('days20').value;
    daypg21 = document.getElementById('days21').value;
    daypg22 = document.getElementById('days22').value;
    daypg23 = document.getElementById('days23').value;
    daypg24 = document.getElementById('days24').value;
    daypg25 = document.getElementById('days25').value;
    daypg26 = document.getElementById('days26').value;
    daypg27 = document.getElementById('days27').value;
    daypg28 = document.getElementById('days28').value;
    daypg29 = document.getElementById('days29').value;
    daypg30 = document.getElementById('days30').value;
    daypg31 = document.getElementById('days31').value;
    calspot();
    if (pSpot == 0) {
        alert("Please Enter Spot");
        return false;
    }
    ratecalcultion();
    scdate();
    addgrid();
    daysbalnk();
    return false;
}
function gridfilldate() {



    var id = document.getElementById('hdrowid').value.split("_");

    calspot();
    ratecalcultion();
    document.getElementById('chekid_' + id[1]).checked = false;
    document.getElementById('Channelcode_' + id[1]).value = document.getElementById('drpchannel').value;
    document.getElementById('Adtypecode_' + id[1]).value = document.getElementById('drpadtype').value;
    document.getElementById("Adtype_" + id[1]).value = document.getElementById('drpadtype').options[document.getElementById('drpadtype').selectedIndex].text;
    document.getElementById('TapeId_' + id[1]).value = document.getElementById('txttapid').value;
    document.getElementById('RODPTYPE_' + id[1]).value = document.getElementById('rodptype').value;
    document.getElementById('FromTime_' + id[1]).value = document.getElementById('txtfromtime').value;
    document.getElementById('EndTime_' + id[1]).value = document.getElementById('txttotime').value;
    document.getElementById('Program_' + id[1]).value = document.getElementById('txtnProgName').value;
    document.getElementById('spotcode_' + id[1]).value = document.getElementById('drpspottype').value;
    // document.getElementById('Seg_' + id[1]).value = document.getElementById('txtsegment').value;
    // document.getElementById('Postion_' + id[1]).value = document.getElementById('txtpostion').value;
    document.getElementById('tapidcode_' + id[1]).value = document.getElementById('hdntapid').value;
    document.getElementById('primcode_' + id[1]).value = document.getElementById('hdnprime').value;
    document.getElementById('programcode_' + id[1]).value = document.getElementById('hiddenprogram').value;
    document.getElementById('Spot_' + id[1]).value = pSpot;
    document.getElementById('Rate_' + id[1]).value = pRate;
    document.getElementById('Gross_' + id[1]).value = pGross;
    document.getElementById('prem_' + id[1]).value = ppremamt;
    document.getElementById('primeamtgr_' + id[1]).value = pprpremamt;
    document.getElementById('disc_' + id[1]).value = pdisamt;
    document.getElementById('agcomm_' + id[1]).value = pagcomamt;
    document.getElementById('addAgComm_' + id[1]).value = paddagcomamt;
    document.getElementById('netamt_' + id[1]).value = pnetamt;
    document.getElementById('servtaxamt_' + id[1]).value = pservamtamt;
    document.getElementById('billamtgrid_' + id[1]).value = ptotbillamt;
    document.getElementById('agrate_' + id[1]).value = agrateamt;





    document.getElementById('dayg1_' + id[1]).value = document.getElementById('days1').value;
    document.getElementById('dayg2_' + id[1]).value = document.getElementById('days2').value;
    document.getElementById('dayg3_' + id[1]).value = document.getElementById('days3').value;
    document.getElementById('dayg4_' + id[1]).value = document.getElementById('days4').value;
    document.getElementById('dayg5_' + id[1]).value = document.getElementById('days5').value;
    document.getElementById('dayg6_' + id[1]).value = document.getElementById('days6').value;
    document.getElementById('dayg7_' + id[1]).value = document.getElementById('days7').value;
    document.getElementById('dayg8_' + id[1]).value = document.getElementById('days8').value;
    document.getElementById('dayg9_' + id[1]).value = document.getElementById('days9').value;
    document.getElementById('dayg10_' + id[1]).value = document.getElementById('days10').value;
    document.getElementById('dayg11_' + id[1]).value = document.getElementById('days11').value;
    document.getElementById('dayg12_' + id[1]).value = document.getElementById('days12').value;
    document.getElementById('dayg13_' + id[1]).value = document.getElementById('days13').value;
    document.getElementById('dayg14_' + id[1]).value = document.getElementById('days14').value;
    document.getElementById('dayg15_' + id[1]).value = document.getElementById('days15').value;
    document.getElementById('dayg16_' + id[1]).value = document.getElementById('days16').value;
    document.getElementById('dayg17_' + id[1]).value = document.getElementById('days17').value;
    document.getElementById('dayg18_' + id[1]).value = document.getElementById('days18').value;
    document.getElementById('dayg19_' + id[1]).value = document.getElementById('days19').value;
    document.getElementById('dayg20_' + id[1]).value = document.getElementById('days20').value;
    document.getElementById('dayg21_' + id[1]).value = document.getElementById('days21').value;
    document.getElementById('dayg22_' + id[1]).value = document.getElementById('days22').value;
    document.getElementById('dayg23_' + id[1]).value = document.getElementById('days23').value;
    document.getElementById('dayg24_' + id[1]).value = document.getElementById('days24').value;
    document.getElementById('dayg25_' + id[1]).value = document.getElementById('days25').value;
    document.getElementById('dayg26_' + id[1]).value = document.getElementById('days26').value;
    document.getElementById('dayg27_' + id[1]).value = document.getElementById('days27').value;
    document.getElementById('dayg28_' + id[1]).value = document.getElementById('days28').value;
    document.getElementById('dayg29_' + id[1]).value = document.getElementById('days29').value;
    document.getElementById('dayg30_' + id[1]).value = document.getElementById('days30').value;
    document.getElementById('dayg31_' + id[1]).value = document.getElementById('days31').value;
    calspot();
    gridcalction();
    blankfild();
    return false;
}
function blankfild() {
    document.getElementById('drpchannel').selectedIndex = 0;
    document.getElementById('drpadtype').selectedIndex = 0;
    document.getElementById('txttapid').value = "-- Select Tap No --";
    document.getElementById('rodptype').value = "-- Select Prime Time --";
    document.getElementById('txtfromtime').value = "";
    document.getElementById('txttotime').value = "";

    document.getElementById('txtnProgName').value = "--Select Program Name--";
    document.getElementById('drpspottype').value = "";
    //document.getElementById('txtsegment').value = "";
    //  document.getElementById('txtpostion').value = "";
    document.getElementById('hiddenprogram').value = "";
    document.getElementById('hdnprime').value = "";
    document.getElementById('hdntapid').value = "";

    document.getElementById('hdrowid').value = "";
    document.getElementById('days1').value = "";
    document.getElementById('days2').value = "";
    document.getElementById('days3').value = "";
    document.getElementById('days4').value = "";
    document.getElementById('days5').value = "";
    document.getElementById('days6').value = "";
    document.getElementById('days7').value = "";
    document.getElementById('days8').value = "";
    document.getElementById('days9').value = "";
    document.getElementById('days10').value = "";
    document.getElementById('days11').value = "";
    document.getElementById('days12').value = "";
    document.getElementById('days13').value = "";
    document.getElementById('days14').value = "";
    document.getElementById('days15').value = "";
    document.getElementById('days16').value = "";
    document.getElementById('days17').value = "";
    document.getElementById('days18').value = "";
    document.getElementById('days19').value = "";
    document.getElementById('days20').value = "";
    document.getElementById('days21').value = "";
    document.getElementById('days22').value = "";
    document.getElementById('days23').value = "";
    document.getElementById('days24').value = "";
    document.getElementById('days25').value = "";
    document.getElementById('days26').value = "";
    document.getElementById('days27').value = "";
    document.getElementById('days28').value = "";
    document.getElementById('days29').value = "";
    document.getElementById('days30').value = "";
    document.getElementById('days31').value = "";

    return false;

}
//*****************************Function For Agency name select F2***********************
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
        Booking.Bindagenyname(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindagency_callback);

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
        if (document.getElementById("divagename").style.display == "block") {
            filllagency(event);
            return false;
        }
        if (document.activeElement.id == "istagencyname") {
            filllagency(event);
            return false;
        }
        document.getElementById("divagename").style.display = "none";
        return false;
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
        Booking.Bindagenyname(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindagency_callback);

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
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].AGENCY_NAME, ds.Tables[0].Rows[i].AGENCY_CODE_SUBCODE + "-" + ds.Tables[0].Rows[i].BILL_TO);
        }


    }

    document.getElementById('hdngencode').value = "";
    document.getElementById("istagencyname").selectedIndex = 1;
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
            // alert("Please Select Master Name");

            return false;
        }
        else {
            document.getElementById("divagename").style.display = "none";
            var lstvalue = document.getElementById('istagencyname').value;
            for (var k = 0; k < document.getElementById("istagencyname").length; k++) {
                if (document.getElementById('istagencyname').options[k].value == lstvalue) {

                    var AG_name = document.getElementById('istagencyname').options[k].value;
                    AG_name = AG_name.split("-");
                    document.getElementById('hdngencode').value = AG_name[0];
                    document.getElementById('drpbillto').value = AG_name[1];


                    if (browser != "Microsoft Internet Explorer") {
                        document.getElementById('txtagncy').value = document.getElementById('istagencyname').options[k].textContent;
                    }
                    else {
                        document.getElementById('txtagncy').value = document.getElementById('istagencyname').options[k].innerText;
                    }
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
    document.getElementById("txtagncy").style.backgroundColor = "white";
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
        var res1 = Booking.Bindagpaymode(agencode, pcompcode, pbookdate, padtype);
        callbindagpaymode(res1);
        var resos = Booking.GetOSBalance(pcompcode, CENT_CODE, BRANCH_CODE, agencode, pbookdate, EXTRA, EXTRA1);
        if (resos == null) {
            alert(resos.error.description);
        }
        var ds = resos.value;
        if (ds.Tables[0].Rows.length > 0) {
            document.getElementById('txtagoutstand').value = ds.Tables[0].Rows[0].OSAMOUNT;
        }
        chkagcrlimit();
    }
}
function chkagcrlimit() {
    if (document.getElementById('txtagoutstand').value != "" && document.getElementById("hdncreditlimit").value != "") {
        if (parseFloat(document.getElementById('txtagoutstand').value) > parseFloat(document.getElementById("hdncreditlimit").value)) {
            if (!confirm("Credit Limit exceeding....Credit Limit amount is: " + document.getElementById("hdncreditlimit").value)) {
                return false;
            }
        }
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
    if (hiddentext == "new") {
        if (ds.Tables[1].Rows.length > 0) {
            if (ds.Tables[1].Rows[0].BOOKING_ALERT != "" && ds.Tables[1].Rows[0].BOOKING_ALERT != null) {
                alert(ds.Tables[1].Rows[0].BOOKING_ALERT);
            }
            if (ds.Tables[1].Rows[0].BILLING_TYPE != "" && ds.Tables[1].Rows[0].BILLING_TYPE != "0" && ds.Tables[1].Rows[0].BILLING_TYPE != null) {
                // document.getElementById("drpbilltype").value = ds.Tables[1].Rows[0].BILLING_TYPE;
            }
            if (ds.Tables[1].Rows[0].AGENCY_REMARS_FLAG == "Y" && (ds.Tables[1].Rows[0].REMARKS != "" && ds.Tables[1].Rows[0].REMARKS != null)) {
                //document.getElementById("txtbillremark").value = ds.Tables[1].Rows[0].REMARKS;
            }
            document.getElementById("hdncreditday").value = ds.Tables[1].Rows[0].CREDIT_DAYS;
            document.getElementById("hdncreditlimit").value = ds.Tables[1].Rows[0].CREDIT_LIMIT;
        }
        if (ds.Tables[2].Rows.length > 0) {
            if (ds.Tables[2].Rows[0].COMM_PER == null) {
                document.getElementById("txtagcommper").value = "";
            }
            else {
                document.getElementById("txtagcommper").value = ds.Tables[2].Rows[0].COMM_PER;
            }
            if (ds.Tables[2].Rows[0].ADDL_COMM_PER == null) {
                document.getElementById("txtagaddcommper").value = "";
            }
            else {
                document.getElementById("txtagaddcommper").value = ds.Tables[2].Rows[0].ADDL_COMM_PER;
            }
        }
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
        var PEXTRA = document.getElementById('hdngencode').value;
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        Booking.Bindclientname(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindclient_callback);

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
        if (document.getElementById("divclient").style.display == "block") {
            filllclient(event);
            return false;
        }
        if (document.activeElement.id == "istclient") {
            filllclient(event);
            return false;
        }
        document.getElementById("divclient").style.display = "none";
        return false;
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
        var PEXTRA = document.getElementById('hdngencode').value;
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        Booking.Bindclientname(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindclient_callback);

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
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].CLIENT_NAME, ds.Tables[0].Rows[i].CLIENT_CODE + "$~" + ds.Tables[0].Rows[i].INDUSTRY_CODE + "$~" + ds.Tables[0].Rows[i].INDUSTRY_NAME + "$~" + ds.Tables[0].Rows[i].RATE_TYPE_CODE);
        }


    }

    document.getElementById('hdnclient').value = "";
    document.getElementById("istclient").selectedIndex = 1;
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
            // alert("Please Select Master Name");
            return false;
        }
        else {
            document.getElementById("divclient").style.display = "none";
            var lstvalue = document.getElementById('istclient').value;
            for (var k = 0; k < document.getElementById("istclient").length; k++) {
                if (document.getElementById('istclient').options[k].value == lstvalue) {
                    var dp_name = document.getElementById('istclient').options[k].value;
                    dp_name = dp_name.split("$~");
                    document.getElementById('hdnclient').value = dp_name[0];
                    document.getElementById('hiddenindustry').value = dp_name[1];

                    if (dp_name[2] != "null") {
                        document.getElementById('txtindustry').value = dp_name[2];
                    }
                    if (dp_name[3] != "null") {
                        document.getElementById('drpratetype').value = dp_name[3];
                    }



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


        Booking.Bindindustr(pcompcode, pindustry, psecrchtype, pextra, bindindustry_callback);


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
        if (document.getElementById("divindu").style.display == "block") {
            filllindustryname(event);
            return false;
        }
        if (document.activeElement.id == "istindustry") {
            filllindustryname(event);
            return false;
        }
        document.getElementById("divindu").style.display = "none";
        return false;
    }
    
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


        Booking.Bindindustr(pcompcode, pindustry, psecrchtype, pextra, bindindustry_callback);

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
    if (ds.Tables[0].Rows.length == 0) {
        document.getElementById("divindu").style.display = "none";
    }

    document.getElementById('hiddenindustry').value = "";
    document.getElementById("istindustry").selectedIndex = 1;
    //document.getElementById("txtindustry").focus();
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
            //alert("Please Select Industry  Name");
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
        var pextra = document.getElementById('hiddenindustry').value.toUpperCase()
        Booking.Bindproductf2(pcompcode, pproduct, psecrchtype, pextra, bindproduct_callback);


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
        if (document.getElementById("divproduct").style.display == "block") {
            filllproductname(event);
            return false;
        }
        if (document.activeElement.id == "istprodouct") {
            filllproductname(event);
            return false;
        }
        document.getElementById("divproduct").style.display = "none";
        return false;
    }
    
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
        var pextra = document.getElementById('hiddenindustry').value.toUpperCase()

        Booking.Bindproductf2(pcompcode, pproduct, psecrchtype, pextra, bindproduct_callback);

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
    if (ds.Tables[0].Rows.length == 0) {
        document.getElementById("divproduct").style.display = "none";
    }

    document.getElementById('hiddenproduct').value = "";
    document.getElementById("istprodouct").selectedIndex = 1;
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
            //alert("Please Select Product  Name");
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
        var PEXTRA = document.getElementById('hiddenproduct').value.toUpperCase();
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        Booking.Bindbrand(PCOMP_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindbrand_callback);


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
        if (document.getElementById("divbrand").style.display == "block") {
            filllbrandname(event);
            return false;
        }
        if (document.activeElement.id == "istbrand") {
            filllbrandname(event);
            return false;
        }
        document.getElementById("divbrand").style.display = "none";
        return false;
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
        var PEXTRA = document.getElementById('hiddenproduct').value.toUpperCase();
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        Booking.Bindbrand(PCOMP_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindbrand_callback);


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
    if (ds.Tables[0].Rows.length == 0) {
        document.getElementById("divbrand").style.display = "none";
    }
    document.getElementById('hiddenbrand').value = "";
    document.getElementById("istbrand").selectedIndex = 1;
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
            // alert("Please Select Brand  Name");
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
        Booking.Bindevent(PCOMP_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindevent_callback);


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
        if (document.getElementById("divevent").style.display == "block") {
            fillleventname(event);
            return false;
        }
        if (document.activeElement.id == "istevent") {
            fillleventname(event);
            return false;
        }
        document.getElementById("divevent").style.display = "none";
        return false;
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
        Booking.Bindevent(PCOMP_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindevent_callback);


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
    if (ds.Tables[0].Rows.length == 0) {
        document.getElementById("divevent").style.display = "none";
    }
    document.getElementById('hideenevent').value = "";
    document.getElementById("istevent").selectedIndex = 1;
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
            //alert("Please Select Event  Name");
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
        var PEXTRA = document.getElementById('hiddenbranch').value;
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        Booking.excutive(PCOMP_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindexcutive_callback);


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
        if (document.getElementById("divexcutive").style.display == "block") {
            filllexcutive(event);
            return false;
        }
        if (document.activeElement.id == "istexcutive") {
            filllexcutive(event);
            return false;
        }
        document.getElementById("divexcutive").style.display = "none";
        return false;
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
        var PEXTRA = document.getElementById('hiddenbranch').value;
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        Booking.excutive(PCOMP_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2, bindexcutive_callback);


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
    document.getElementById("istexcutive").selectedIndex = 1;
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
            // alert("Please Select Excutive  Name");
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
        Booking.retiner(PCOMP_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PCENT_CODE, bindretiner_callback);


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
        if (document.getElementById("divret").style.display == "block") {
            filllretiner(event);
            return false;
        }
        if (document.activeElement.id == "istret") {
            filllretiner(event);
            return false;
        }
        document.getElementById("divret").style.display = "none";
        return false;
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
        Booking.retiner(PCOMP_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PCENT_CODE, bindretiner_callback);


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
    document.getElementById("istret").selectedIndex = 1;
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
            // alert("Please Select Retainer   Name");
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
    if (document.getElementById('txtret').value == "----- Select Retainer -----") {
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
        document.getElementById('txtret').value = "----- Select Retainer -----";
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
//************************************************************************Tap id bind************************************************************************
function Bindtaipid(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txttapid") {
        document.getElementById("divtapid").style.display = "block";
        aTag = eval(document.getElementById("txttapid"))
        var btag;
        var leftpos = 0;
        var toppos = 0;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divtapid').scrollLeft;
        var scrolltop = document.getElementById('divtapid').scrollTop;
        document.getElementById('divtapid').style.left = document.getElementById("txttapid").offsetLeft + leftpos - tot + "px";
        document.getElementById('divtapid').style.top = document.getElementById("txttapid").offsetTop + toppos - scrolltop + "px"; //"510px";
        var pcomp_code = document.getElementById('hdncompcode').value;
        var pcent_code = document.getElementById('hdncenter').value;
        var tapno = document.getElementById('txttapid').value.toUpperCase();
        var psecrchtype = "";
        var pagencycode = document.getElementById('hdngencode').value.toUpperCase();
        var pclientcode = document.getElementById('hdnclient').value.toUpperCase();
        var pextra = document.getElementById('drpchannel').value.toUpperCase();
        Booking.Bindtapno(pcomp_code, tapno, pagencycode, pclientcode, psecrchtype, pextra, bindtapno_callback);
    }

    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txttapid") {
            document.getElementById('hdntapid').value = "";
        }
    }
    else if (key == 27) {
        document.getElementById("divtapid").style.display = "none";
        document.getElementById('txttapid').focus();
        return false;
    }
    else if (key == 13) {
        if (document.getElementById("divtapid").style.display == "block") {
            Filltabno(event);
            return false;
        }
        if (document.activeElement.id == "lsttapid") {
            Filltabno(event);
            return false;
        }
        document.getElementById("divtapid").style.display = "none";
        return false;
    }
    else if (key == 38) {
        if (document.getElementById("divtapid").style.display == "block") {
            if (document.getElementById('lsttapid').value == '0') {
                document.getElementById('txttapid').focus();
            }
        }
    }

    else if (key == 9) {
        document.getElementById("divtapid").style.display = "none";
        // document.getElementById('txtnProgType').focus();
        //return false;
    }

    else if (key == 40) {
        if (document.getElementById("divtapid").style.display == "block") {
            document.getElementById("lsttapid").focus();
        }
    }
    else if (key == 117) {
        commopen();
        return false;
    }
    else {
        document.getElementById("divtapid").style.display = "block";
        aTag = eval(document.getElementById("txttapid"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divtapid').scrollLeft;
        var scrolltop = document.getElementById('divtapid').scrollTop;
        document.getElementById('divtapid').style.left = document.getElementById("txttapid").offsetLeft + leftpos - tot + "px";
        document.getElementById('divtapid').style.top = document.getElementById("txttapid").offsetTop + toppos - scrolltop + "px"; //"510px";
        var pcomp_code = document.getElementById('hdncompcode').value;
        var pcent_code = document.getElementById('hdncenter').value;
        var tapno = document.getElementById('txttapid').value.toUpperCase();
        var psecrchtype = "G";
        var pagencycode = document.getElementById('hdngencode').value.toUpperCase();
        var pclientcode = document.getElementById('hdnclient').value.toUpperCase();
        var pextra = document.getElementById('drpchannel').value.toUpperCase();
        Booking.Bindtapno(pcomp_code, tapno, pagencycode, pclientcode, psecrchtype, pextra, bindtapno_callback);
    }
}

function bindtapno_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("lsttapid");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select Tap No.---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].TAPE_NO, ds.Tables[0].Rows[i].COMM_CODE + "-" + ds.Tables[0].Rows[i].DURATION + "-" + ds.Tables[0].Rows[i].DUR_IN_SEC);
        }
    }
    if (ds.Tables[0].Rows.length == 0) {
        document.getElementById("divtapid").style.display = "none";
    }
    document.getElementById('hdndurtion').value = "";
    document.getElementById('hdntapid').value = "";
    document.getElementById("lsttapid").selectedIndex = 1;
    return false;
}

function Filltabno(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txttapid" || document.activeElement.id == "lsttapid") {
            document.getElementById("divtapid").style.display = "none";
            document.getElementById('txttapid').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {

        if (document.getElementById("lsttapid").value == "0") {
            //alert("Please Select TAP No");
            return false;
        }
        else {
            document.getElementById("divtapid").style.display = "none";
            var lstvalue = document.getElementById('lsttapid').value;
            for (var k = 0; k < document.getElementById("lsttapid").length; k++) {
                if (document.getElementById('lsttapid').options[k].value == lstvalue) {
                    //document.getElementById('hdntapid').value = document.getElementById('lsttapid').options[k].value;
                    var from_to = document.getElementById('lsttapid').options[k].value;
                    from_to = from_to.split("-");
                    document.getElementById('hdntapid').value = from_to[0];
                    document.getElementById('hdndurtion').value = from_to[1];
                    document.getElementById('txtdur').value = from_to[2];
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txttapid').value = document.getElementById('lsttapid').options[k].textContent;
                    else
                        document.getElementById('txttapid').value = document.getElementById('lsttapid').options[k].innerText;

                    break;
                }
            }
        }
        document.getElementById('txttapid').focus();
        return false;
    }
}
function FocusChannel() {
    if (document.getElementById('txttapid').value == "-- Select Tap No --") {
        document.getElementById('txttapid').value = "";
    }
    document.getElementById('txttapid').style.textAlign = "left";
    document.getElementById('txttapid').style.color = "black";
    document.getElementById('txttapid').style.backgroundColor = "#99FFFF";
}
function Blurtabno() {
    if (document.getElementById('txttapid').value == "") {
        document.getElementById('txttapid').value = "";
        document.getElementById('txttapid').value = "-- Select Tap No --";
        document.getElementById('txttapid').style.textAlign = "center";
        document.getElementById('txttapid').style.color = "gray";
    }

    else {
        document.getElementById('txttapid').style.textAlign = "left";
        document.getElementById('txttapid').style.color = "black";
    }
    //    if (document.getElementById('hdntapid').value == "") {
    //        document.getElementById('txttapid').value = "";
    //        document.getElementById('txttapid').value = "-- Select Tap No --";
    //        document.getElementById('txttapid').style.textAlign = "center";
    //        document.getElementById('txttapid').style.color = "gray";
    //    }
    document.getElementById('txttapid').style.backgroundColor = "white";
    return false;
}
//************************************************************************Prime Time id bind************************************************************************
function Bindprime(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "rodptype") {
        document.getElementById("divprime").style.display = "block";
        aTag = eval(document.getElementById("rodptype"))
        var btag;
        var leftpos = 0;
        var toppos = 0;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divprime').scrollLeft;
        var scrolltop = document.getElementById('divprime').scrollTop;
        document.getElementById('divprime').style.left = document.getElementById("rodptype").offsetLeft + leftpos - tot + "px";
        document.getElementById('divprime').style.top = document.getElementById("rodptype").offsetTop + toppos - scrolltop + "px"; //"510px";
        var pcomp_code = document.getElementById('hdncompcode').value;

        var pdesc = document.getElementById('rodptype').value.toUpperCase();
        var pchanelcode = document.getElementById('drpchannel').value.toUpperCase();
        var pextra = "";
        Booking.Bindprime(pcomp_code, pdesc, pchanelcode, pextra, bindprime_callback);
    }

    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "rodptype") {
            document.getElementById('hdnprime').value = "";
        }
    }
    else if (key == 27) {
        document.getElementById("divprime").style.display = "none";
        document.getElementById('rodptype').focus();
        return false;
    }
    else if (key == 13) {
        if (document.getElementById("divprime").style.display == "block") {
            Fillprimetime(event);
            return false;
        }
        if (document.activeElement.id == "istprime") {
            Fillprimetime(event);
            return false;
        }
        document.getElementById("divprime").style.display = "none";
        return false;
    }
    else if (key == 38) {
        if (document.getElementById("divprime").style.display == "block") {
            if (document.getElementById('istprime').value == '0') {
                document.getElementById('rodptype').focus();
            }
        }
    }

    else if (key == 9) {
        document.getElementById("divprime").style.display = "none";
        //        document.getElementById('txtnProgType').focus();
        //        return false;
    }

    else if (key == 40) {
        if (document.getElementById("divprime").style.display == "block") {
            document.getElementById("istprime").focus();
        }
    }

    else {
        document.getElementById("divprime").style.display = "block";
        aTag = eval(document.getElementById("rodptype"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divprime').scrollLeft;
        var scrolltop = document.getElementById('divprime').scrollTop;
        document.getElementById('divprime').style.left = document.getElementById("rodptype").offsetLeft + leftpos - tot + "px";
        document.getElementById('divprime').style.top = document.getElementById("rodptype").offsetTop + toppos - scrolltop + "px"; //"510px";
        var pcomp_code = document.getElementById('hdncompcode').value;

        var pdesc = document.getElementById('rodptype').value.toUpperCase();
        var pchanelcode = document.getElementById('drpchannel').value.toUpperCase();
        var pextra = "";
        Booking.Bindprime(pcomp_code, pdesc, pchanelcode, pextra, bindprime_callback);
    }
}

function bindprime_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("istprime");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select Prime Time.---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].DESCRIPTION, ds.Tables[0].Rows[i].TIME_CODE + "-" + ds.Tables[0].Rows[i].MAIN_FROM_TIME + "-" + ds.Tables[0].Rows[i].MAIN_TO_TIME);
        }
    }

    document.getElementById('hdnprime').value = "";
    document.getElementById("istprime").selectedIndex = 1;
    return false;
}

function Fillprimetime(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "rodptype" || document.activeElement.id == "istprime") {
            document.getElementById("divprime").style.display = "none";
            document.getElementById('rodptype').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {

        if (document.getElementById("istprime").value == "0") {
            //alert("Please Select Prime Time");
            return false;
        }
        else {
            document.getElementById("divprime").style.display = "none";
            var lstvalue = document.getElementById('istprime').value;
            for (var k = 0; k < document.getElementById("istprime").length; k++) {
                if (document.getElementById('istprime').options[k].value == lstvalue) {
                    var prime_name = document.getElementById('istprime').options[k].value;
                    prime_name = prime_name.split("-");
                    document.getElementById('hdnprime').value = prime_name[0];
                    document.getElementById('txtfromtime').value = prime_name[1];
                    document.getElementById('txttotime').value = prime_name[2];

                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('rodptype').value = document.getElementById('istprime').options[k].textContent;
                    else
                        document.getElementById('rodptype').value = document.getElementById('istprime').options[k].innerText;

                    break;
                }
            }
        }
        document.getElementById('rodptype').focus();
        return false;
    }
}
function Focusprime() {
    if (document.getElementById('rodptype').value == "-- Select Prime Time --") {
        document.getElementById('rodptype').value = "";
    }
    document.getElementById('rodptype').style.textAlign = "left";
    document.getElementById('rodptype').style.color = "black";
    document.getElementById('rodptype').style.backgroundColor = "#99FFFF";
}
function Blurprime() {
    if (document.getElementById('rodptype').value == "") {
        document.getElementById('rodptype').value = "";
        document.getElementById('rodptype').value = "-- Select Prime Time --";
        document.getElementById('rodptype').style.textAlign = "center";
        document.getElementById('rodptype').style.color = "gray";
    }

    else {
        document.getElementById('rodptype').style.textAlign = "left";
        document.getElementById('rodptype').style.color = "black";
    }
    if (document.getElementById('hdnprime').value == "") {
        document.getElementById('rodptype').value = "";
        document.getElementById('rodptype').value = "-- Select Prime Time --";
        document.getElementById('rodptype').style.textAlign = "center";
        document.getElementById('rodptype').style.color = "gray";
    }
    document.getElementById('rodptype').style.backgroundColor = "white";
    return false;
}
//************************************************************************Prime from  Time to time  bind************************************************************************
function Bindfromtime(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtfromtime") {
        document.getElementById("divfromtime").style.display = "block";
        aTag = eval(document.getElementById("txtfromtime"))
        var btag;
        var leftpos = 0;
        var toppos = 0;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divfromtime').scrollLeft;
        var scrolltop = document.getElementById('divfromtime').scrollTop;
        document.getElementById('divfromtime').style.left = document.getElementById("txtfromtime").offsetLeft + leftpos - tot + "px";
        document.getElementById('divfromtime').style.top = document.getElementById("txtfromtime").offsetTop + toppos - scrolltop + "px"; //"510px";
        if (document.getElementById('hdnprime').value == "") {
            alert("Please Select Prime Time");
            document.getElementById('rodptype').focus();
            return false;
        }
        var pcomp_code = document.getElementById('hdncompcode').value;
        var pfrom = document.getElementById('txtfromtime').value.toUpperCase();
        var ptimecode = document.getElementById('hdnprime').value.toUpperCase();
        var pextra = "";
        Booking.Bindfromprime(pcomp_code, pfrom, ptimecode, pextra, bindfromtime_callback);
    }

    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtfromtime") {
            document.getElementById('txttotime').value = "";
        }
    }
    else if (key == 27) {
        document.getElementById("divfromtime").style.display = "none";
        document.getElementById('txtfromtime').focus();
        return false;
    }
    else if (key == 13) {
        if (document.getElementById("divfromtime").style.display == "block") {
            Fillfromtime(event);
            return false;
        }
        if (document.activeElement.id == "istfrome") {
            Fillfromtime(event);
            return false;
        }
        document.getElementById("divfromtime").style.display = "none";
        return false;
    }
    else if (key == 38) {
        if (document.getElementById("divfromtime").style.display == "block") {
            if (document.getElementById('istfrome').value == '0') {
                document.getElementById('txtfromtime').focus();
            }
        }
    }

    else if (key == 9) {
        document.getElementById("divfromtime").style.display = "none";
        //        document.getElementById('txtnProgType').focus();
        //        return false;
    }

    else if (key == 40) {
        if (document.getElementById("divfromtime").style.display == "block") {
            document.getElementById("istfrome").focus();
        }
    }

    else {
        document.getElementById("divfromtime").style.display = "block";
        aTag = eval(document.getElementById("txtfromtime"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divfromtime').scrollLeft;
        var scrolltop = document.getElementById('divfromtime').scrollTop;
        document.getElementById('divfromtime').style.left = document.getElementById("txtfromtime").offsetLeft + leftpos - tot + "px";
        document.getElementById('divfromtime').style.top = document.getElementById("txtfromtime").offsetTop + toppos - scrolltop + "px"; //"510px";
        if (document.getElementById('hdnprime').value == "") {
            alert("Please Select Prime Time");
            document.getElementById('rodptype').focus();
            return false;
        }
        var pcomp_code = document.getElementById('hdncompcode').value;
        var pfrom = document.getElementById('txtfromtime').value.toUpperCase();
        var ptimecode = document.getElementById('hdnprime').value.toUpperCase();
        var pextra = "";
        Booking.Bindfromprime(pcomp_code, pfrom, ptimecode, pextra, bindfromtime_callback);

    }
}

function bindfromtime_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("istfrome");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select From Time.---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].FROM_TIME, ds.Tables[0].Rows[i].TO_TIME);
        }
    }

    document.getElementById('txttotime').value = "";
    document.getElementById("istfrome").selectedIndex = 1;
    return false;
}

function Fillfromtime(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtfromtime" || document.activeElement.id == "istfrome") {
            document.getElementById("divfromtime").style.display = "none";
            document.getElementById('txtfromtime').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {

        if (document.getElementById("istfrome").value == "0") {
            // alert("Please Select From Time");
            return false;
        }
        else {
            document.getElementById("divfromtime").style.display = "none";
            var lstvalue = document.getElementById('istfrome').value;
            for (var k = 0; k < document.getElementById("istfrome").length; k++) {
                if (document.getElementById('istfrome').options[k].value == lstvalue) {
                    // document.getElementById('txttotime').value = document.getElementById('istfrome').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtfromtime').value = document.getElementById('istfrome').options[k].textContent;
                    else
                        document.getElementById('txtfromtime').value = document.getElementById('istfrome').options[k].innerText;

                    break;
                }
            }
        }
        document.getElementById('txtfromtime').focus();
        return false;
    }
}

//************************************************************************Prime TO  Time to time  bind************************************************************************
function Bindtotime(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txttotime") {
        document.getElementById("divtotime").style.display = "block";
        aTag = eval(document.getElementById("txttotime"))
        var btag;
        var leftpos = 0;
        var toppos = 0;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divtotime').scrollLeft;
        var scrolltop = document.getElementById('divtotime').scrollTop;
        document.getElementById('divtotime').style.left = document.getElementById("txttotime").offsetLeft + leftpos - tot + "px";
        document.getElementById('divtotime').style.top = document.getElementById("txttotime").offsetTop + toppos - scrolltop + "px"; //"510px";
        if (document.getElementById('hdnprime').value == "") {
            alert("Please Select Prime Time");
            document.getElementById('rodptype').focus();
            return false;
        }
        var pcomp_code = document.getElementById('hdncompcode').value;
        var pfrom = document.getElementById('txttotime').value.toUpperCase();
        var ptimecode = document.getElementById('hdnprime').value.toUpperCase();
        var pextra = "";
        Booking.Bindfromprime(pcomp_code, pfrom, ptimecode, pextra, bindtotime_callback);
    }

    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txttotime") {
            document.getElementById('txttotime').value = "";
        }
    }
    else if (key == 27) {
        document.getElementById("divtotime").style.display = "none";
        document.getElementById('txttotime').focus();
        return false;
    }
    else if (key == 13) {
        if (document.getElementById("divtotime").style.display == "block") {
            Filltotime(event);
        }
        if (document.activeElement.id == "isttotime") {
            Filltotime(event);
            return false;
        }
        document.getElementById("divtotime").style.display = "none";
        return false;
    }
    else if (key == 38) {
        if (document.getElementById("divtotime").style.display == "block") {
            if (document.getElementById('isttotime').value == '0') {
                document.getElementById('txttotime').focus();
            }
        }
    }

    else if (key == 9) {
        document.getElementById("divtotime").style.display = "none";
        //        document.getElementById('txtnProgType').focus();
        //        return false;
    }

    else if (key == 40) {
        if (document.getElementById("divtotime").style.display == "block") {
            document.getElementById("isttotime").focus();
        }
    }

    else {
        document.getElementById("divtotime").style.display = "block";
        aTag = eval(document.getElementById("txttotime"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divtotime').scrollLeft;
        var scrolltop = document.getElementById('divtotime').scrollTop;
        document.getElementById('divtotime').style.left = document.getElementById("txttotime").offsetLeft + leftpos - tot + "px";
        document.getElementById('divtotime').style.top = document.getElementById("txttotime").offsetTop + toppos - scrolltop + "px"; //"510px";
        if (document.getElementById('hdnprime').value == "") {
            alert("Please Select Prime Time");
            document.getElementById('rodptype').focus();
            return false;
        }
        var pcomp_code = document.getElementById('hdncompcode').value;
        var pfrom = document.getElementById('txttotime').value.toUpperCase();
        var ptimecode = document.getElementById('hdnprime').value.toUpperCase();
        var pextra = "";
        Booking.Bindfromprime(pcomp_code, pfrom, ptimecode, pextra, bindtotime_callback);

    }
}

function bindtotime_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("isttotime");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select TO Time.---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].TO_TIME, ds.Tables[0].Rows[i].TO_TIME);
        }
    }

    //document.getElementById('txttotime').value = "";
    document.getElementById("isttotime").selectedIndex = 1;
    return false;
}

function Filltotime(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txttotime" || document.activeElement.id == "isttotime") {
            document.getElementById("divtotime").style.display = "none";
            document.getElementById('txttotime').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {

        if (document.getElementById("isttotime").value == "0") {
            // alert("Please Select TO Time");
            return false;
        }
        else {
            document.getElementById("divtotime").style.display = "none";
            var lstvalue = document.getElementById('isttotime').value;
            for (var k = 0; k < document.getElementById("isttotime").length; k++) {
                if (document.getElementById('isttotime').options[k].value == lstvalue) {
                    // document.getElementById('txttotime').value = document.getElementById('isttotime').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txttotime').value = document.getElementById('isttotime').options[k].textContent;
                    else
                        document.getElementById('txttotime').value = document.getElementById('isttotime').options[k].innerText;

                    break;
                }
            }
        }
        document.getElementById('txttotime').focus();
        return false;
    }
}

//*****************************Function For Program select F2***********************
function Bindprogram(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtnProgName") {


        document.getElementById("divprogram").style.display = "block";
        aTag = eval(document.getElementById("txtnProgName"))
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
        document.getElementById('divprogram').style.left = document.getElementById("txtnProgName").offsetLeft + leftpos - tot + "px";
        document.getElementById('divprogram').style.top = document.getElementById("txtnProgName").offsetTop + toppos - scrolltop + "px"; //"510px";
        var PCOMP_CODE = document.getElementById('hdncompcode').value;
        var PCENT_CODE = document.getElementById('hdncenter').value;
        var PSEACH = "";
        var PDESC = document.getElementById('txtnProgName').value.toUpperCase();
        var PEXTRA = "";
        var PEXTRA1 = "";

        var PROG_TYPE = "";

        Booking.Bindprogram(PCOMP_CODE, PCENT_CODE, PROG_TYPE, PDESC, PSEACH, PEXTRA, PEXTRA1, bindprogram_callback);

    }

    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtnProgName") {
            document.getElementById('hiddenprogram').value = "";
        }
    }
    else if (key == 27) {
        document.getElementById("divprogram").style.display = "none";
        document.getElementById('txtnProgName').focus();
        return false;
    }
    else if (key == 13) {
        if (document.getElementById("divprogram").style.display == "block") {
            fillprogram(event);
            return false;
        }
        if (document.activeElement.id == "istprogram") {
            fillprogram(event);
            return false;
        }
        document.getElementById("divprogram").style.display = "none";
        return false;
    }
    else if (key == 38) {

        if (document.getElementById("divprogram").style.display == "block") {
            if (document.getElementById('istprogram').value == '0') {
                document.getElementById('txtnProgName').focus();
            }
        }
    }


    else if (key == 9) {
        document.getElementById("divprogram").style.display = "none";
        //document.getElementById('txtorg_rep').focus();
        // return false;
    }


    else if (key == 40) {
        if (document.getElementById("divprogram").style.display == "block") {
            document.getElementById("istprogram").focus();
        }
    }

    else {
        document.getElementById("divprogram").style.display = "block";
        aTag = eval(document.getElementById("txtnProgName"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divprogram').scrollLeft;
        var scrolltop = document.getElementById('divprogram').scrollTop;
        document.getElementById('divprogram').style.left = document.getElementById("txtnProgName").offsetLeft + leftpos - tot + "px";
        document.getElementById('divprogram').style.top = document.getElementById("txtnProgName").offsetTop + toppos - scrolltop + "px"; //"510px";
        var PCOMP_CODE = document.getElementById('hdncompcode').value;
        var PCENT_CODE = document.getElementById('hdncenter').value;
        var PSEACH = "G";
        var PDESC = document.getElementById('txtnProgName').value.toUpperCase();
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PROG_TYPE = "";

        Booking.Bindprogram(PCOMP_CODE, PCENT_CODE, PROG_TYPE, PDESC, PSEACH, PEXTRA, PEXTRA1, bindprogram_callback);

    }


}

function bindprogram_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("istprogram");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select  Program Name---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].PROG_NAME, ds.Tables[0].Rows[i].PROG_ID);
        }


    }

    document.getElementById('hiddenprogram').value = "";
    document.getElementById("istprogram").selectedIndex = 1;
    return false;
}

function fillprogram(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtnProgName" || document.activeElement.id == "istprogram") {
            document.getElementById("divprogram").style.display = "none";
            document.getElementById('txtnProgName').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {

        if (document.getElementById("istprogram").value == "0") {
            // alert("Please Select Program Name");
            return false;
        }
        else {
            document.getElementById("divprogram").style.display = "none";
            var lstvalue = document.getElementById('istprogram').value;
            for (var k = 0; k < document.getElementById("istprogram").length; k++) {
                if (document.getElementById('istprogram').options[k].value == lstvalue) {
                    document.getElementById('hiddenprogram').value = document.getElementById('istprogram').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtnProgName').value = document.getElementById('istprogram').options[k].textContent;
                    else
                        document.getElementById('txtnProgName').value = document.getElementById('istprogram').options[k].innerText;

                    break;
                }
            }
        }
        document.getElementById('txtnProgName').focus();
        return false;
    }

}

function up_Program() {
    if (document.getElementById('txtnProgName').value == "--Select Program Name--") {
        document.getElementById('txtnProgName').value = "";

    }
    document.getElementById('txtnProgName').style.textAlign = "left";
    document.getElementById('txtnProgName').style.color = "black";
    document.getElementById('txtnProgName').style.backgroundColor = "#99FFFF";
}
function up_Programcode() {
    if (document.getElementById('txtnProgName').value == "") {
        document.getElementById('txtnProgName').value = "--Select Program Name--";
        document.getElementById('txtnProgName').style.color = "gray";
        document.getElementById('txtnProgName').style.textAlign = "left";

    }
    document.getElementById('txtnProgName').style.backgroundColor = "white";
}



function Execute() {
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

    var resv = Booking.FetchData(PCOMP_CODE, PCENT_CODE, PBRANCH_CODE, PAD_TYPE_CODE, PBOOKING_TYPE, PBOOKING_NO, PBOOKING_DATE, PDEAL_NO, PRO_NO, PRO_DATE, PDOKIT_NO, PBOOKING_STATUS, PRO_STATUS, PAGENCY_CODE_SUBCODE, PCLIENT_CODE, PCLIENT_NAME, PEXEC_CODE, PRET_CODE, PPAYMODE_CODE, PINDUSTRY_CODE, PPRODUCT_CODE, PBRAND_CODE, PEVENT_CODE, PCAPTION, PKEY_NO, PRATE_TYPE_CODE, PPUBLISH_START_FROM, PPUBLISH_START_TO, dateformat, PEXTRA, PEXTRA1, PEXTRA2, PEXTRA3, PEXTRA4, PEXTRA5);
    var ds = resv.value;
    if (ds == null) {
        alert(resv.error.description);
        return false;
    }
    if (ds.Tables[0].Rows.length > 0) {
        document.getElementById('showcreate').style.display = "none";
        document.getElementById('saveshow').style.display = "none";
        document.getElementById('editshow').style.display = "block";

        document.getElementById('txtbokngdate').value = fndnull1(ds.Tables[0].Rows[0].BOOKING_DATE);
        document.getElementById('txtstartdate').value = fndnull1(ds.Tables[0].Rows[0].PUBLISH_START_FROM);
        document.getElementById('txtenddate').value = fndnull1(ds.Tables[0].Rows[0].PUBLISH_START_TO);
        document.getElementById('txtagncy').value = fndnull1(ds.Tables[0].Rows[0].AGENCY_NAME);
        document.getElementById('hdngencode').value = fndnull1(ds.Tables[0].Rows[0].AGENCY_CODE_SUBCODE);
        fillpaymode();
        document.getElementById('drppaaymode').value = fndnull1(ds.Tables[0].Rows[0].PAYMODE_CODE);
        document.getElementById('txtclint').value = fndnull1(ds.Tables[0].Rows[0].CLIENT_NAME);
        document.getElementById('hdnclient').value = fndnull1(ds.Tables[0].Rows[0].CLIENT_CODE);
        document.getElementById('txtdeal').value = fndnull1(ds.Tables[0].Rows[0].DEAL_NO);
        document.getElementById('drpbookingtype').value = fndnull1(ds.Tables[0].Rows[0].BOOKING_TYPE);
        document.getElementById('txtrno').value = fndnull1(ds.Tables[0].Rows[0].RO_NO);
        document.getElementById('txtrdate').value = fndnull1(ds.Tables[0].Rows[0].RO_DATE);
        document.getElementById('txtdokitno').value = fndnull1(ds.Tables[0].Rows[0].DOKIT_NO);
        document.getElementById('drpbookstatus').value = fndnull1(ds.Tables[0].Rows[0].BOOKING_STATUS);

        document.getElementById('txtindustry').value = fndnull1(ds.Tables[0].Rows[0].INDUSTRY_NAME);
        document.getElementById('hiddenindustry').value = fndnull1(ds.Tables[0].Rows[0].INDUSTRY_CODE);
        document.getElementById('txtproduct').value = fndnull1(ds.Tables[0].Rows[0].PRODUCT_NAME);
        document.getElementById('hiddenproduct').value = fndnull1(ds.Tables[0].Rows[0].PRODUCT_CODE);
        document.getElementById('txtbrand').value = fndnull1(ds.Tables[0].Rows[0].BRAND_NICK);
        document.getElementById('hiddenbrand').value = fndnull1(ds.Tables[0].Rows[0].BRAND_CODE);
        document.getElementById('txtevent').value = fndnull1(ds.Tables[0].Rows[0].EVENT_NICK);
        document.getElementById('hideenevent').value = fndnull1(ds.Tables[0].Rows[0].EVENT_CODE);
        document.getElementById('txtexcutive').value = fndnull1(ds.Tables[0].Rows[0].EXEC_NAME);
        document.getElementById('hdnexcutive').value = fndnull1(ds.Tables[0].Rows[0].EXEC_CODE);
        document.getElementById('txtret').value = fndnull1(ds.Tables[0].Rows[0].RET_NAME);
        document.getElementById('hdnret').value = fndnull1(ds.Tables[0].Rows[0].RET_CODE);
        document.getElementById('txtcpton').value = fndnull1(ds.Tables[0].Rows[0].CAPTION);
        document.getElementById('txtkeyn').value = fndnull1(ds.Tables[0].Rows[0].KEY_NO);
        document.getElementById('drpbillto').value = fndnull1(ds.Tables[0].Rows[0].BILL_TO);

        document.getElementById('txtagcommper').value = fndnull1(ds.Tables[0].Rows[0].AG_COMM_PER);
        document.getElementById('txtagaddcommper').value = fndnull1(ds.Tables[0].Rows[0].AG_ADDL_COMM_PER);
        document.getElementById('drpratetype').value = fndnull1(ds.Tables[0].Rows[0].RATE_TYPE_CODE);
        document.getElementById('drpagrateamt').value = fndnull1(ds.Tables[0].Rows[0].AGREED_FLAG);
        document.getElementById('txtagrateamt').value = fndnull1(ds.Tables[0].Rows[0].AGREED_AMT);

        document.getElementById('drpprem').value = fndnull1(ds.Tables[0].Rows[0].PREM_CODE);
        document.getElementById('txtsptype').value = fndnull1(ds.Tables[0].Rows[0].PREM_TYPE);
        document.getElementById('txtprem').value = fndnull1(ds.Tables[0].Rows[0].PREM);
        document.getElementById('txtpermgrd').value = fndnull1(ds.Tables[0].Rows[0].PREM_AMT);

        document.getElementById('drpprimprem').value = fndnull1(ds.Tables[0].Rows[0].PRIME_PREM_CODE);
        document.getElementById('txtprimetype').value = fndnull1(ds.Tables[0].Rows[0].PRIME_PREM_TYPE);
        document.getElementById('txtprimprem').value = fndnull1(ds.Tables[0].Rows[0].PRIME_PREM_PER);
        document.getElementById('txtprimpremg').value = fndnull1(ds.Tables[0].Rows[0].PRIME_PREM_AMT);

        document.getElementById('drpdiscount').value = fndnull1(ds.Tables[0].Rows[0].CASH_DISCOUNT_TYPE);
        document.getElementById('txtdiscount').value = fndnull1(ds.Tables[0].Rows[0].CASH_DISCOUNT);
        document.getElementById('txtdicgrd').value = fndnull1(ds.Tables[0].Rows[0].CASH_DISCOUNT_AMT);

        document.getElementById('txtamt').value = fndnull1(ds.Tables[0].Rows[0].NET_AMT);
        document.getElementById('txtgrosgrd').value = fndnull1(ds.Tables[0].Rows[0].GROSS_AMT);
        document.getElementById('txtservictaxg').value = fndnull1(ds.Tables[0].Rows[0].SEVICE_TAX_AMT);
        document.getElementById('txtbillamt').value = fndnull1(ds.Tables[0].Rows[0].TOTAL_NET_AMT);
        document.getElementById('txtagcommgrd').value = fndnull1(ds.Tables[0].Rows[0].AG_COMM_AMT);
        document.getElementById('txtaddagcommgrd').value = fndnull1(ds.Tables[0].Rows[0].AG_ADDL_COMM_AMT);

        document.getElementById('drpsalegroup').value = fndnull1(ds.Tables[0].Rows[0].SALES_GROUP);
        document.getElementById('drpsalestype').value = fndnull1(ds.Tables[0].Rows[0].SALES_TYPE);
        
        if (document.getElementById('drpagrateamt').value == "A") {
            document.getElementById('divamtch').style.display = "block";
        }
        else {
            document.getElementById('divamtch').style.display = "none";
        }
        monthbind();
        filgriddate();

    }
    return false;
}
function filgriddate() {
    var PCOMP_CODE = document.getElementById('hdncompcode').value;
    var PCENT_CODE = document.getElementById('hdncenter').value;
    var PBRANCH_CODE = document.getElementById('hiddenbranch').value;
    var PAD_TYPE_CODE = "";
    var PBOOKING_TYPE = document.getElementById('drpbookingtype').value;
    var PBOOKING_NO = document.getElementById('txtbokng').value;
    var PBOOKING_DATE = document.getElementById('txtbokngdate').value;
    var PCHANNEL = "";
    var PTAPE_ID = "";
    var PSCH_DATE = "";
    var PRODP = "";
    var dateformat = document.getElementById('hiddendateformat').value;
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
    var res_error1 = Booking.FetchDatadet(PCOMP_CODE, PCENT_CODE, PBRANCH_CODE, PAD_TYPE_CODE, PBOOKING_TYPE, PBOOKING_NO, PBOOKING_DATE, PCHANNEL, PTAPE_ID, PSCH_DATE, PRODP, dateformat, PEXTRA, PEXTRA1, PEXTRA2, PEXTRA3, PEXTRA4, PEXTRA5);

    var dsGrid = res_error1.value;
    if (dsGrid == null) {
        alert(res_error1.error.description);
        return false;
    }


    if (dsGrid.Tables[0].Rows.length > 0) {
        var Sno, Channel, tapidcode, primcode, rowid, spotcode, nubervalue, agrate, programcode, prem, disc, agcomm, netamt, Channelcode, chekid, Adtype, Adtypecode, TapeId, Schueduledate, RODPTYPE, FromTime, EndTime, Program, Sopttype, Seg, Segcode, Postion, Spot, Duration, Rate, Gross, Status, servtaxamt, billamtgrid, primeamtgr;

        var dayg1, dayg2, dayg3, dayg4, dayg5, dayg6, dayg7, dayg8, dayg9, dayg10, dayg11, dayg12, dayg13, dayg14, dayg15, dayg16, dayg17, dayg18, dayg19, dayg20, dayg21, dayg22, dayg23, dayg24, dayg25, dayg26, dayg27, dayg28, dayg29, dayg30, dayg31;

        str = "<div id=\"drincrgfdiv\" runat=\"server\" style=\"OVERFLOW: auto; max-height: 200px; width:1300px;\">";
        str += "<table cellpadding=\"0\" cellspacing=\"1px\" id=\"drincrgfGrid\"  width=\1300px\"    border=1><tr>";

        str += "<td align=\"left\" valign=\"top\" style='width:20px' class=\"GridHdtdr\">Edit</td>";
        str += "<td align=\"left\" valign=\"top\" style='width:50px' class=\"GridHdtdr\">Sno</td>";
        str += "<td align=\"left\" valign=\"top\" style='width:50px' class=\"GridHdtdr\">Channel</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:30px' class=\"GridHdtdr\">Ad Type</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:30px' class=\"GridHdtdr\">Comm Id </td>";
        str += "<td align=\"center\" valign=\"top\" style='width:30px' class=\"GridHdtdr\">Sch Date</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:30px' class=\"GridHdtdr\">Prime Time</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:30px' class=\"GridHdtdr\">From Time</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:30px' class=\"GridHdtdr\">End Time</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:30px' class=\"GridHdtdr\">Program</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:30px' class=\"GridHdtdr\">Spot Type</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:30px;display:none;' class=\"GridHdtdr\">Seg</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:30px;display:none;' class=\"GridHdtdr\">Pos</td>";

        str += "<td align=\"center\" valign=\"top\" style='width:30px' class=\"GridHdtdr\">Dur</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:30px;text-align:right;' class=\"GridHdtdr\">Spot</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">1</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">2</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">3</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">4</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">5</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">6</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">7</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">8</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">9</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">10</td>";

        str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">11</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">12</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">13</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">14</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">15</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">16</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">17</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">18</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">19</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">20</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">21</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">22</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">23</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">24</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">25</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">26</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">27</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">28</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">29</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">30</td>";
        str += "<td align=\"center\" valign=\"top\" style='width:15px' class=\"GridHdtdr\">31</td>";
        str += "<td align=\"right\" valign=\"top\" style='width:30px;text-align:right;' class=\"GridHdtdr\">Rate</td>";
        str += "<td align=\"right\" valign=\"top\" style='width:30px;text-align:right;' class=\"GridHdtdr\">Ag Rate/Amt</td>";
        str += "<td align=\"right\" valign=\"top\" style='width:30px;text-align:right;' class=\"GridHdtdr\">Gross</td>";
        str += "<td align=\"right\" valign=\"top\" style='width:30px;text-align:right;' class=\"GridHdtdr\">Pos Prem</td>";
        str += "<td align=\"right\" valign=\"top\" style='width:30px;text-align:right;' class=\"GridHdtdr\">Prime Prem</td>";
        str += "<td align=\"right\" valign=\"top\" style='width:30px;text-align:right;' class=\"GridHdtdr\">Disc</td>";
        str += "<td align=\"right\" valign=\"top\" style='width:30px;text-align:right;' class=\"GridHdtdr\">Ag Comm</td>";
        str += "<td align=\"right\" valign=\"top\" style='width:30px;text-align:right;' class=\"GridHdtdr\">Add Ag Comm</td>";
        str += "<td align=\"right\" valign=\"top\" style='width:30px;text-align:right;' class=\"GridHdtdr\">Taxable Amt</td>";
        str += "<td align=\"right\" valign=\"top\" style='width:30px;text-align:right;' class=\"GridHdtdr\">GST Amt</td>";
        str += "<td align=\"right\" valign=\"top\" style='width:30px;text-align:right;' class=\"GridHdtdr\">Bill Amt</td>";
        str += "<td align=\"right\" valign=\"top\" style='width:30px' class=\"GridHdtdr\">Status</td>";
        str += "</tr></table></div>";
        document.getElementById('tdbokkinggrid').innerHTML = str;

        for (var i = 0; i < dsGrid.Tables[0].Rows.length; i++) {

            Make_Row = document.createElement("tr");
            Make_Row.id = "sstr_" + i;

            Sno = "Sno_" + i;
            Channel = "Channel_" + i;
            Channelcode = "Channelcode_" + i;
            Adtype = "Adtype_" + i;
            Adtypecode = "Adtypecode_" + i;
            TapeId = "TapeId_" + i;
            Schueduledate = "Schueduledate_" + i;
            RODPTYPE = "RODPTYPE_" + i;
            FromTime = "FromTime_" + i;
            EndTime = "EndTime_" + i;
            Program = "Program_" + i;
            Sopttype = "Sopttype_" + i;
            Seg = "Seg_" + i;
            Segcode = "Segcode_" + i;
            Postion = "Postion_" + i;
            Spot = "Spot_" + i;
            Duration = "Duration_" + i;
            Rate = "Rate_" + i;
            Gross = "Gross_" + i;
            Status = "Status_" + i;
            chekid = "chekid_" + i;
            agrate = "agrate_" + i;
            prem = "prem_" + i;
            disc = " disc_" + i;
            agcomm = "agcomm_" + i;
            addAgComm = "addAgComm_" + i;
            netamt = "netamt_" + i;
            servtaxamt = "servtaxamt_" + i;
            billamtgrid = "billamtgrid_" + i;
            primeamtgr = "primeamtgr_" + i;

            tapidcode = "tapidcode_" + i;
            primcode = "primcode_" + i;
            programcode = "programcode_" + i;
            nubervalue = "nubervalue_" + i;

            spotcode = "spotcode_" + i;

            rowid = "rowid_" + i;

            dayg1 = "dayg1_" + i;
            dayg2 = "dayg2_" + i;
            dayg3 = "dayg3_" + i;
            dayg4 = "dayg4_" + i;
            dayg5 = "dayg5_" + i;
            dayg6 = "dayg6_" + i;
            dayg7 = "dayg7_" + i;
            dayg8 = "dayg8_" + i;
            dayg9 = "dayg9_" + i;
            dayg10 = "dayg10_" + i;
            dayg11 = "dayg11_" + i;
            dayg12 = "dayg12_" + i;
            dayg13 = "dayg13_" + i;
            dayg14 = "dayg14_" + i;
            dayg15 = "dayg15_" + i;
            dayg16 = "dayg16_" + i;
            dayg17 = "dayg17_" + i;
            dayg18 = "dayg18_" + i;
            dayg19 = "dayg19_" + i;
            dayg20 = "dayg20_" + i;
            dayg21 = "dayg21_" + i;
            dayg22 = "dayg22_" + i;
            dayg23 = "dayg23_" + i;
            dayg24 = "dayg24_" + i;
            dayg25 = "dayg25_" + i;
            dayg26 = "dayg26_" + i;
            dayg27 = "dayg27_" + i;
            dayg28 = "dayg28_" + i;
            dayg29 = "dayg29_" + i;
            dayg30 = "dayg30_" + i;
            dayg31 = "dayg31_" + i;



            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.style.display = "none";
            str = "<input class=\"gridtextr\" style='width:80px' readonly type=\"text\" id=" + rowid + "  value='" + dsGrid.Tables[0].Rows[i].INSERTION_ID + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.style.display = "none";
            str = "<input class=\"gridtextr\" disabled style='width:80px' readonly type=\"text\" id=" + spotcode + "  value='" + dsGrid.Tables[0].Rows[i].SPOT_TYPE + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.style.display = "none";
            str = "<input class=\"gridtextr\" style='width:80px' readonly type=\"text\" id=" + nubervalue + "  value='" + dsGrid.Tables[0].Rows[i].NO_DAYS + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.style.display = "none";
            str = "<input class=\"gridtextr\" style='width:80px' readonly type=\"text\" id=" + tapidcode + "  value='" + dsGrid.Tables[0].Rows[i].COMM_ID + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.style.display = "none";
            str = "<input class=\"gridtextr\" style='width:80px' readonly type=\"text\" id=" + primcode + "  value='" + dsGrid.Tables[0].Rows[i].RODP + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);


            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.style.display = "none";
            str = "<input class=\"gridtextr\" style='width:80px' readonly type=\"text\" id=" + programcode + "  value='" + dsGrid.Tables[0].Rows[i].PROGRAMME_CODE + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);


            make_td = document.createElement("td");
            make_td.className = "GridHdtd";
            make_td.align = "center";
            str = "<input class=\"gridtext\"  disabled style='width:20px' " + " type=\"radio\"  NAME=rpt  onclick='return editgriddata(event)'   id=" + chekid + " value='' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "20px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style='width:20px' readonly type=\"text\" id=" + Sno + "  value='" + parseInt(i + 1) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.style.display = "none";
            str = "<input class=\"gridtextr\" style='width:100px' readonly type=\"text\" id=" + Channelcode + "   value='" + dsGrid.Tables[0].Rows[i].CHANNEL_CODE + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "100px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style='width:50px' readonly type=\"text\" id=" + Channel + "   value='" + dsGrid.Tables[0].Rows[i].CHANNEL_NAME + "' title='" + dsGrid.Tables[0].Rows[i].CHANNEL_NAME + "' title='" + dsGrid.Tables[0].Rows[i].CHANNEL_NAME + "'/>";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.style.display = "none";
            str = "<input class=\"gridtextr\" style='width:250px' readonly type=\"text\" id=" + Adtypecode + "  value='" + dsGrid.Tables[0].Rows[i].AD_TYPE_CODE + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "100px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style='width:50px' readonly type=\"text\" id=" + Adtype + "  value='" + dsGrid.Tables[0].Rows[i].AD_TYPE_DESC + "' title='" + dsGrid.Tables[0].Rows[i].AD_TYPE_DESC + "' title='" + dsGrid.Tables[0].Rows[i].AD_TYPE_DESC + "'/>";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);


            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "100px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style='width:60px' readonly type=\"text\" id=" + TapeId + "  value='" + dsGrid.Tables[0].Rows[i].TAPE_NO + "' title='" + dsGrid.Tables[0].Rows[i].TAPE_NO + "' title='" + dsGrid.Tables[0].Rows[i].TAPE_NO + "'/>";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            var chkdate = dsGrid.Tables[0].Rows[i].SCH_DATE;
            var datafill = chkdate.split("/")
            var monthg = datafill[1];
            var year = datafill[2];
            var PSCH_DATE = monthg + "/" + year;

            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "100px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style='width:50px' readonly type=\"text\" id=" + Schueduledate + "  value='" + PSCH_DATE + "' title='" + dsGrid.Tables[0].Rows[i].PSCH_DATE + "' title='" + dsGrid.Tables[0].Rows[i].PSCH_DATE + "'/>";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);


            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "50px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style='width:80px' readonly type=\"text\" id=" + RODPTYPE + "  value='" + dsGrid.Tables[0].Rows[i].RODPNAME + "' title='" + dsGrid.Tables[0].Rows[i].RODPNAME + "' title='" + dsGrid.Tables[0].Rows[i].RODPNAME + "'/>";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "50px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style='width:50px' readonly type=\"text\" id=" + FromTime + "  value='" + dsGrid.Tables[0].Rows[i].FROM_TIME + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);


            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "100px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style='width:50px' readonly type=\"text\" id=" + EndTime + "  value='" + dsGrid.Tables[0].Rows[i].TO_TIME + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);




            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "100px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style='width:80px' readonly type=\"text\" id=" + Program + "  value='" + fndnull1(dsGrid.Tables[0].Rows[i].PROG_NAME) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);
            var SPOTNAME = "";

            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "50px");
            make_td.align = "center";
            if (dsGrid.Tables[0].Rows[i].SPOT_TYPE == "P") {
                SPOTNAME = "Paid";
            }
            else {
                SPOTNAME = "Bonus";

            }
            str = "<input class=\"gridtextr\" style='width:50px;text-align:center;' readonly type=\"text\" id=" + Sopttype + "   value='" + SPOTNAME + "' />";
            make_td.innerHTML = str;

            Make_Row.appendChild(make_td);


            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "50px");
            make_td.align = "center";
            make_td.style.display = "none";
            str = "<input class=\"gridtextr\" style='width:50px' readonly type=\"text\" id=" + Seg + "  value='" + fndnull1(dsGrid.Tables[0].Rows[i].SEG_CODE) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);



            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.style.display = "none";
            str = "<input class=\"gridtextr\" style='width:100px' readonly type=\"text\" id=" + Segcode + " value='" + fndnull1(dsGrid.Tables[0].Rows[i].SEG_CODE) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);




            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "50px");
            make_td.align = "center";
            make_td.style.display = "none";
            str = "<input class=\"gridtextr\" style='width:50px' readonly type=\"text\" id=" + Postion + "  value='" + fndnull1(dsGrid.Tables[0].Rows[i].POSTION) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);



            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "50px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style='width:50px' readonly type=\"text\" id=" + Duration + "  value='" + dsGrid.Tables[0].Rows[i].DURATION + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);


            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "50px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style='width:50px;text-align:right;' readonly type=\"text\" id=" + Spot + "  value='" + dsGrid.Tables[0].Rows[i].NO_OF_SPOT + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);





            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "15px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg1 + " value='" + fndnull1(dsGrid.Tables[0].Rows[i].DAY_1) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);


            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "15px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg2 + " value='" + fndnull1(dsGrid.Tables[0].Rows[i].DAY_2) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);




            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "15px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg3 + " value='" + fndnull1(dsGrid.Tables[0].Rows[i].DAY_3) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);




            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "15px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\"  style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg4 + "  value='" + fndnull1(dsGrid.Tables[0].Rows[i].DAY_4) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);




            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "15px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg5 + "  value='" + fndnull1(dsGrid.Tables[0].Rows[i].DAY_5) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);




            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "15px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg6 + "  value='" + fndnull1(dsGrid.Tables[0].Rows[i].DAY_6) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);




            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "15px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg7 + "  value='" + fndnull1(dsGrid.Tables[0].Rows[i].DAY_7) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);




            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "15px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg8 + "  value='" + fndnull1(dsGrid.Tables[0].Rows[i].DAY_8) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);




            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "15px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg9 + "  value='" + fndnull1(dsGrid.Tables[0].Rows[i].DAY_9) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);



            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "15px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg10 + " value='" + fndnull1(dsGrid.Tables[0].Rows[i].DAY_10) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);




            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "15px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg11 + "  value='" + fndnull1(dsGrid.Tables[0].Rows[i].DAY_11) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);




            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "15px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg12 + " value='" + fndnull1(dsGrid.Tables[0].Rows[i].DAY_12) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);




            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "15px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg13 + "  value='" + fndnull1(dsGrid.Tables[0].Rows[i].DAY_13) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);




            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "15px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg14 + " value='" + fndnull1(dsGrid.Tables[0].Rows[i].DAY_14) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);




            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "15px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg15 + " value='" + fndnull1(dsGrid.Tables[0].Rows[i].DAY_15) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);




            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "15px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg16 + " value='" + fndnull1(dsGrid.Tables[0].Rows[i].DAY_16) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);




            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "15px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg17 + " value='" + fndnull1(dsGrid.Tables[0].Rows[i].DAY_17) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);




            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "15px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg18 + " value='" + fndnull1(dsGrid.Tables[0].Rows[i].DAY_18) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);




            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "15px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg19 + " value='" + fndnull1(dsGrid.Tables[0].Rows[i].DAY_19) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);



            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "15px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg20 + "  value='" + fndnull1(dsGrid.Tables[0].Rows[i].DAY_20) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);




            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "15px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg21 + "  value='" + fndnull1(dsGrid.Tables[0].Rows[i].DAY_21) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);


            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "15px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg22 + "  value='" + fndnull1(dsGrid.Tables[0].Rows[i].DAY_22) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);




            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "15px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg23 + "  value='" + fndnull1(dsGrid.Tables[0].Rows[i].DAY_23) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);




            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "15px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg24 + " value='" + fndnull1(dsGrid.Tables[0].Rows[i].DAY_24) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);




            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "15px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg25 + "  value='" + fndnull1(dsGrid.Tables[0].Rows[i].DAY_25) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);




            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "15px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg26 + " value='" + fndnull1(dsGrid.Tables[0].Rows[i].DAY_26) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);




            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "15px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg27 + "  value='" + fndnull1(dsGrid.Tables[0].Rows[i].DAY_27) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);




            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "15px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg28 + " value='" + fndnull1(dsGrid.Tables[0].Rows[i].DAY_28) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);




            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "15px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg29 + "  value='" + fndnull1(dsGrid.Tables[0].Rows[i].DAY_29) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);



            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "15px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg30 + "  value='" + fndnull1(dsGrid.Tables[0].Rows[i].DAY_30) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);



            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "15px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style=\"width:15px; cursor:pointer; color:Blue;\" onclick='return getopen(event);'  readonly type=\"text\" id=" + dayg31 + " value='" + fndnull1(dsGrid.Tables[0].Rows[i].DAY_31) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);







            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "100px");
            // make_td.align = "right";
            str = "<input class=\"gridtextr\" style='width:70px;text-align:right;' readonly type=\"text\" id=" + Rate + "  value='" + fndnull1(dsGrid.Tables[0].Rows[i].RATE_AMT) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);



            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "70px");
            // make_td.align = "right";
            str = "<input class=\"gridtextr\"  style='width:70px;text-align:right;' readonly type=\"text\" id=" + agrate + " value='" + fndnull1(dsGrid.Tables[0].Rows[i].AGRED_AMT) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);




            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "50px");
            //make_td.align = "right";
            str = "<input class=\"gridtextr\" style='width:50px;text-align:right;' readonly type=\"text\" id=" + Gross + " value='" + fndnull1(dsGrid.Tables[0].Rows[i].GROSS_AMT) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);



            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "50px");
            //make_td.align = "right";
            str = "<input class=\"gridtextr\" style='width:50px;text-align:right;' readonly type=\"text\" id=" + prem + " value='" + fndnull1(dsGrid.Tables[0].Rows[i].PREM_AMT) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "50px");
            //   make_td.align = "right";
            str = "<input class=\"gridtextr\" style='width:50px;text-align:right;' readonly type=\"text\" id=" + primeamtgr + " value='" + fndnull1(dsGrid.Tables[0].Rows[i].PRIME_PREM_AMT) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);



            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "50px");
            // make_td.align = "right";
            str = "<input class=\"gridtextr\" style='width:50px;text-align:right;' readonly type=\"text\" id=" + disc + " value='" + fndnull1(dsGrid.Tables[0].Rows[i].DIS_AMT) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);


            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "50px");
            // make_td.align = "right";
            str = "<input class=\"gridtextr\" style='width:50px;text-align:right;' readonly type=\"text\" id=" + agcomm + " value='" + fndnull1(dsGrid.Tables[0].Rows[i].COMM_AMT) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "50px");
            // make_td.align = "right";
            str = "<input class=\"gridtextr\" style='width:50px;text-align:right;' readonly type=\"text\" id=" + addAgComm + " value='" + fndnull1(dsGrid.Tables[0].Rows[i].ADDL_COMM_AMT) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "50px");
            // make_td.align = "right";
            str = "<input class=\"gridtextr\" style='width:50px;text-align:right;' readonly type=\"text\" id=" + netamt + " value='" + fndnull1(dsGrid.Tables[0].Rows[i].NET_AMT) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "50px");
            //   make_td.align = "right";
            str = "<input class=\"gridtextr\" style='width:50px;text-align:right;' readonly type=\"text\" id=" + servtaxamt + " value='" + fndnull1(dsGrid.Tables[0].Rows[i].SEVICE_TAX_AMT) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);


            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "50px");
            // make_td.align = "right";
            str = "<input class=\"gridtextr\" style='width:50px;text-align:right;' readonly type=\"text\" id=" + billamtgrid + " value='" + fndnull1(dsGrid.Tables[0].Rows[i].TOTAL_NET_AMT) + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.align = "center";
            str = "<select class=\"griddrop\" style='width:70px'  disabled  id=" + Status + " value='' onchange=\"return Blankgross();\" >";
            str = str + "<option value=\"B\">BOOKED</option>";
            str = str + "<option value=\"P\">ON AIR</option>";
            str = str + "<option value=\"C\">CANCELLED</option>";
            str = str + "<option value=\"H\">HOLD</option>";
            str = str + "<option value=\"I\">INVOICED</option>";
            str = str + "</select>";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);
            document.getElementById('drincrgfdiv').getElementsByTagName('tbody')[0].appendChild(Make_Row);
            document.getElementById(Status).value = dsGrid.Tables[0].Rows[i].INS_STATUS;
        }
        gridcalction();
    }
    return false;
}
function ClearClick() {

    document.getElementById('txtbokng').value = "";
    document.getElementById('txtbokngdate').value = "";
    document.getElementById('txtstartdate').value = "";
    document.getElementById('txtenddate').value = "";
    document.getElementById('txtagncy').value = "";
    document.getElementById('drppaaymode').value = "";
    document.getElementById('txtagoutstand').value = "";
    document.getElementById('txtclint').value = "";
    document.getElementById('txtdeal').value = "";
    document.getElementById('drpbookingtype').value = "N";
    document.getElementById('txtrno').value = "";
    document.getElementById('txtrdate').value = "";
    document.getElementById('txtdokitno').value = "";
    document.getElementById('drpbookstatus').value = "";
    document.getElementById('txtindustry').value = "----- Select Industry -----";
    document.getElementById('txtproduct').value = "----- Select Product -----";
    document.getElementById('txtbrand').value = "----- Select Brand -----";
    document.getElementById('txtevent').value = "----- Select Event -----";
    document.getElementById('txtexcutive').value = "----- Select Executive -----";
    document.getElementById('txtret').value = "----- Select Retainer -----";
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
    document.getElementById('drpbillto').value = "";
    document.getElementById('txtagcommper').value = "";
    document.getElementById('drpratetype').value = "";
    document.getElementById('drpagrateamt').value = "";
    document.getElementById('txtagrateamt').value = "";
    document.getElementById('drpprem').value = "";
    document.getElementById('txtprem').value = "";
    document.getElementById('drpdiscount').value = "";
    document.getElementById('txtdiscount').value = "";
    document.getElementById('txtamt').value = "";
    document.getElementById('drpadtype').value = "0";

    document.getElementById('drpsalegroup').value = "0";
    document.getElementById('drpsalestype').selectedIndex = 0;
    
    document.getElementById('txttapid').value = "-- Select Tap No --";
    document.getElementById('rodptype').value = "-- Select Prime Time --";
    document.getElementById('txtfromtime').value = "";
    document.getElementById('txttotime').value = "";

    document.getElementById('txtnProgName').value = "--Select Program Name--";
    document.getElementById('drpspottype').value = "";
    //  document.getElementById('txtsegment').value = "";
    //  document.getElementById('txtpostion').value = "";
    document.getElementById('hiddenprogram').value = "";
    document.getElementById('hdnprime').value = "";
    document.getElementById('hdntapid').value = "";

    document.getElementById('hdrowid').value = "";
    document.getElementById('days1').value = "";
    document.getElementById('days2').value = "";
    document.getElementById('days3').value = "";
    document.getElementById('days4').value = "";
    document.getElementById('days5').value = "";
    document.getElementById('days6').value = "";
    document.getElementById('days7').value = "";
    document.getElementById('days8').value = "";
    document.getElementById('days9').value = "";
    document.getElementById('days10').value = "";
    document.getElementById('days11').value = "";
    document.getElementById('days12').value = "";
    document.getElementById('days13').value = "";
    document.getElementById('days14').value = "";
    document.getElementById('days15').value = "";
    document.getElementById('days16').value = "";
    document.getElementById('days17').value = "";
    document.getElementById('days18').value = "";
    document.getElementById('days19').value = "";
    document.getElementById('days20').value = "";
    document.getElementById('days21').value = "";
    document.getElementById('days22').value = "";
    document.getElementById('days23').value = "";
    document.getElementById('days24').value = "";
    document.getElementById('days25').value = "";
    document.getElementById('days26').value = "";
    document.getElementById('days27').value = "";
    document.getElementById('days28').value = "";
    document.getElementById('days29').value = "";
    document.getElementById('days30').value = "";
    document.getElementById('days31').value = "";
    document.getElementById('saveshow').style.display = "none";
    document.getElementById('showcreate').style.display = "block";
    document.getElementById('editshow').style.display = "none";

    document.getElementById('daysgr1').value = "";
    document.getElementById('daysgr2').value = "";
    document.getElementById('daysgr3').value = "";
    document.getElementById('daysgr4').value = "";
    document.getElementById('daysgr5').value = "";
    document.getElementById('daysgr6').value = "";
    document.getElementById('daysgr7').value = "";
    document.getElementById('daysgr8').value = "";
    document.getElementById('daysgr9').value = "";
    document.getElementById('daysgr10').value = "";
    document.getElementById('daysgr11').value = "";
    document.getElementById('daysgr12').value = "";
    document.getElementById('daysgr13').value = "";
    document.getElementById('daysgr14').value = "";
    document.getElementById('daysgr15').value = "";
    document.getElementById('daysgr16').value = "";
    document.getElementById('daysgr17').value = "";
    document.getElementById('daysgr18').value = "";
    document.getElementById('daysgr19').value = "";
    document.getElementById('daysgr20').value = "";
    document.getElementById('daysgr21').value = "";
    document.getElementById('daysgr22').value = "";
    document.getElementById('daysgr23').value = "";
    document.getElementById('daysgr24').value = "";
    document.getElementById('daysgr25').value = "";
    document.getElementById('daysgr26').value = "";
    document.getElementById('daysgr27').value = "";
    document.getElementById('daysgr28').value = "";
    document.getElementById('daysgr29').value = "";
    document.getElementById('daysgr30').value = "";
    document.getElementById('daysgr31').value = "";


    document.getElementById('txtdur').value = "";
    document.getElementById('txtspot').value = "";
    document.getElementById('txtgrosgrd').value = "";
    document.getElementById('txtpermgrd').value = "";
    document.getElementById('txtprimpremg').value = "";
    document.getElementById('txtdicgrd').value = "";
    document.getElementById('txtagcommgrd').value = "";
    document.getElementById('txtaddagcommgrd').value = "";
    document.getElementById('txtamt').value = "";

    document.getElementById('txtservictaxg').value = "";
    document.getElementById('txtbillamt').value = "";



    document.getElementById('drpspottype').value = "P";

    document.getElementById('txtbokngdate').value = document.getElementById('hdndate').value;
    document.getElementById('txtstartdate').value = document.getElementById('hdndate').value;
    document.getElementById('txtrdate').value = document.getElementById('hdndate').value;

    copytodate('N');
    postcreatgrid();
    DsblFlds();
    return false;
}
function fndnull1(myval) {
    if (myval == "undefined" || myval == null) {
        myval = "";
    }
    return myval
}
function ChangeRoNo() {
    if (trim(document.getElementById('txtrno').value) == "") {

        document.getElementById('drpbookstatus').value = "U";
    }
    else {
        document.getElementById('drpbookstatus').value = "C";
        document.getElementById('txtdokitno').value = "";
    }
}

function datechk(activeid) {
    // disbalfielddate();
    var date = document.getElementById('txtstartdate').value;
    var enddate = document.getElementById('txtenddate').value;
    if (enddate == "") {
        alert("Please Select End Date");

        document.getElementById('txtenddate').focus();
        daysbalnk();
        return false;
    }
    var dateformat = document.getElementById('hiddendateformat').value;
    var chkdate = document.getElementById('drpmonth').value;
    var datafill = chkdate.split("/")
    var monthg = datafill[0];
    var year = datafill[1];


    if (dateformat == "dd/mm/yyyy") {
        date = date.split('/');
        date = date[1] + "/" + date[0] + "/" + date[2];
        enddate = enddate.split('/');
        enddate = enddate[1] + "/" + enddate[0] + "/" + enddate[2];
    }
    else if (dateformat == "mm/dd/yyyy") {

    }
    else if (dateformat == "yyyy/mm/dd") {
        date = date.split('/');
        date = date[1] + "/" + date[2] + "/" + date[0];
        enddate = enddate.split('/');
        enddate = enddate[1] + "/" + enddate[2] + "/" + enddate[0];
    }
    else {
        alert("Dateformat is either null or blank");
        return false;
    }
    var P_EXTRA = "";
    var P_EXTRA1 = ""
    var todate = new Date(enddate);
    var frdate = new Date(date);
    if (todate < frdate) {
        alert("Booking Date To must be greater than  Booking Date From");
        document.getElementById('txtenddate').value = "";
        document.getElementById('txtenddate').focus();
        return false;
    }
    if (activeid == "days1") {
        var pSchueduledate = monthg + "/" + "01" + "/" + year;
        var mainres = Booking.monthdatechk(date, enddate, pSchueduledate, P_EXTRA, P_EXTRA1);
        var mainds = mainres.value;
        if (mainds.Tables[0].Rows[0].DATECHK == "Y") {
            document.getElementById('days1').disabled = false;
        }
        else {
            if (document.getElementById('days1').value != "") {
                alert("Please Enter Spot Between Start Date and End Date")
                document.getElementById('days1').value = "";
            }

            document.getElementById('days1').disabled = true;

        }
        document.getElementById("days1").style.backgroundColor = "white";
        document.getElementById('days2').focus();
    }
    if (activeid == "days2") {
        var pSchueduledate = monthg + "/" + "02" + "/" + year;
        var mainres = Booking.monthdatechk(date, enddate, pSchueduledate, P_EXTRA, P_EXTRA1);
        var mainds = mainres.value;
        if (mainds.Tables[0].Rows[0].DATECHK == "Y") {
            document.getElementById('days2').disabled = false;
        }
        else {
            if (document.getElementById('days2').value != "") {
                alert("Please Enter Spot Between Start Date and End Date")
                document.getElementById('days2').value = "";
            }

            document.getElementById('days2').disabled = true;

        }
        document.getElementById("days2").style.backgroundColor = "white";
        document.getElementById('days3').focus();
    }
    if (activeid == "days3") {
        var pSchueduledate = monthg + "/" + "03" + "/" + year;
        var mainres = Booking.monthdatechk(date, enddate, pSchueduledate, P_EXTRA, P_EXTRA1);
        var mainds = mainres.value;
        if (mainds.Tables[0].Rows[0].DATECHK == "Y") {
            document.getElementById('days3').disabled = false;
        }
        else {
            if (document.getElementById('days3').value != "") {
                alert("Please Enter Spot Between Start Date and End Date")
                document.getElementById('days3').value = "";
            }

            document.getElementById('days3').disabled = true;

        }
        document.getElementById("days3").style.backgroundColor = "white";
        document.getElementById('days4').focus();
    }
    if (activeid == "days4") {
        var pSchueduledate = monthg + "/" + "04" + "/" + year;
        var mainres = Booking.monthdatechk(date, enddate, pSchueduledate, P_EXTRA, P_EXTRA1);
        var mainds = mainres.value;
        if (mainds.Tables[0].Rows[0].DATECHK == "Y") {
            document.getElementById('days4').disabled = false;
        }
        else {
            if (document.getElementById('days4').value != "") {
                alert("Please Enter Spot Between Start Date and End Date")
                document.getElementById('days4').value = "";
            }

            document.getElementById('days4').disabled = true;

        }
        document.getElementById("days4").style.backgroundColor = "white";
        document.getElementById('days5').focus();
    }

    if (activeid == "days5") {
        var pSchueduledate = monthg + "/" + "05" + "/" + year;
        var mainres = Booking.monthdatechk(date, enddate, pSchueduledate, P_EXTRA, P_EXTRA1);
        var mainds = mainres.value;
        if (mainds.Tables[0].Rows[0].DATECHK == "Y") {
            document.getElementById('days5').disabled = false;
        }
        else {
            if (document.getElementById('days5').value != "") {
                alert("Please Enter Spot Between Start Date and End Date")
                document.getElementById('days5').value = "";
            }

            document.getElementById('days5').disabled = true;

        }
        document.getElementById("days5").style.backgroundColor = "white";
        document.getElementById('days6').focus();
    }

    if (activeid == "days6") {
        var pSchueduledate = monthg + "/" + "06" + "/" + year;
        var mainres = Booking.monthdatechk(date, enddate, pSchueduledate, P_EXTRA, P_EXTRA1);
        var mainds = mainres.value;
        if (mainds.Tables[0].Rows[0].DATECHK == "Y") {
            document.getElementById('days6').disabled = false;
        }
        else {
            if (document.getElementById('days6').value != "") {
                alert("Please Enter Spot Between Start Date and End Date")
                document.getElementById('days6').value = "";
            }

            document.getElementById('days6').disabled = true;

        }
        document.getElementById("days6").style.backgroundColor = "white";
        document.getElementById('days7').focus();
    }


    if (activeid == "days7") {
        var pSchueduledate = monthg + "/" + "07" + "/" + year;
        var mainres = Booking.monthdatechk(date, enddate, pSchueduledate, P_EXTRA, P_EXTRA1);
        var mainds = mainres.value;
        if (mainds.Tables[0].Rows[0].DATECHK == "Y") {
            document.getElementById('days7').disabled = false;
        }
        else {
            if (document.getElementById('days7').value != "") {
                alert("Please Enter Spot Between Start Date and End Date")
                document.getElementById('days7').value = "";
            }

            document.getElementById('days7').disabled = true;

        }
        document.getElementById("days7").style.backgroundColor = "white";
        document.getElementById('days8').focus();
    }


    if (activeid == "days8") {
        var pSchueduledate = monthg + "/" + "08" + "/" + year;
        var mainres = Booking.monthdatechk(date, enddate, pSchueduledate, P_EXTRA, P_EXTRA1);
        var mainds = mainres.value;
        if (mainds.Tables[0].Rows[0].DATECHK == "Y") {
            document.getElementById('days8').disabled = false;
        }
        else {
            if (document.getElementById('days8').value != "") {
                alert("Please Enter Spot Between Start Date and End Date")
                document.getElementById('days8').value = "";
            }

            document.getElementById('days8').disabled = true;

        }
        document.getElementById("days8").style.backgroundColor = "white";
        document.getElementById('days9').focus();
    }

    if (activeid == "days9") {
        var pSchueduledate = monthg + "/" + "09" + "/" + year;
        var mainres = Booking.monthdatechk(date, enddate, pSchueduledate, P_EXTRA, P_EXTRA1);
        var mainds = mainres.value;
        if (mainds.Tables[0].Rows[0].DATECHK == "Y") {
            document.getElementById('days9').disabled = false;
        }
        else {
            if (document.getElementById('days9').value != "") {
                alert("Please Enter Spot Between Start Date and End Date")
                document.getElementById('days9').value = "";
            }

            document.getElementById('days9').disabled = true;

        }
        document.getElementById("days9").style.backgroundColor = "white";
        document.getElementById('days10').focus();
    }

    if (activeid == "days10") {
        var pSchueduledate = monthg + "/" + "10" + "/" + year;
        var mainres = Booking.monthdatechk(date, enddate, pSchueduledate, P_EXTRA, P_EXTRA1);
        var mainds = mainres.value;
        if (mainds.Tables[0].Rows[0].DATECHK == "Y") {
            document.getElementById('days10').disabled = false;
        }
        else {
            if (document.getElementById('days10').value != "") {
                alert("Please Enter Spot Between Start Date and End Date")
                document.getElementById('days10').value = "";
            }

            document.getElementById('days10').disabled = true;

        }
        document.getElementById("days10").style.backgroundColor = "white";
        document.getElementById('days11').focus();
    }

    if (activeid == "days11") {
        var pSchueduledate = monthg + "/" + "11" + "/" + year;
        var mainres = Booking.monthdatechk(date, enddate, pSchueduledate, P_EXTRA, P_EXTRA1);
        var mainds = mainres.value;
        if (mainds.Tables[0].Rows[0].DATECHK == "Y") {
            document.getElementById('days11').disabled = false;
        }
        else {
            if (document.getElementById('days11').value != "") {
                alert("Please Enter Spot Between Start Date and End Date")
                document.getElementById('days11').value = "";
            }



        }
        document.getElementById("days11").style.backgroundColor = "white";
        document.getElementById('days12').focus();
    }
    if (activeid == "days12") {
        var pSchueduledate = monthg + "/" + "12" + "/" + year;
        var mainres = Booking.monthdatechk(date, enddate, pSchueduledate, P_EXTRA, P_EXTRA1);
        var mainds = mainres.value;
        if (mainds.Tables[0].Rows[0].DATECHK == "Y") {
            document.getElementById('days12').disabled = false;
        }
        else {
            if (document.getElementById('days12').value != "") {
                alert("Please Enter Spot Between Start Date and End Date")
                document.getElementById('days12').value = "";
            }

            document.getElementById('days12').disabled = true;

        }
        document.getElementById("days12").style.backgroundColor = "white";
        document.getElementById('days13').focus();
    }
    if (activeid == "days13") {
        var pSchueduledate = monthg + "/" + "13" + "/" + year;
        var mainres = Booking.monthdatechk(date, enddate, pSchueduledate, P_EXTRA, P_EXTRA1);
        var mainds = mainres.value;
        if (mainds.Tables[0].Rows[0].DATECHK == "Y") {
            document.getElementById('days13').disabled = false;
        }
        else {
            if (document.getElementById('days13').value != "") {
                alert("Please Enter Spot Between Start Date and End Date")
                document.getElementById('days13').value = "";
            }

            document.getElementById('days13').disabled = true;

        }
        document.getElementById("days13").style.backgroundColor = "white";
        document.getElementById('days14').focus();
    }
    if (activeid == "days14") {
        var pSchueduledate = monthg + "/" + "14" + "/" + year;
        var mainres = Booking.monthdatechk(date, enddate, pSchueduledate, P_EXTRA, P_EXTRA1);
        var mainds = mainres.value;
        if (mainds.Tables[0].Rows[0].DATECHK == "Y") {
            document.getElementById('days14').disabled = false;
        }
        else {
            if (document.getElementById('days14').value != "") {
                alert("Please Enter Spot Between Start Date and End Date")
                document.getElementById('days14').value = "";
            }

            document.getElementById('days14').disabled = true;

        }
        document.getElementById("days14").style.backgroundColor = "white";
        document.getElementById('days15').focus();
    }

    if (activeid == "days15") {
        var pSchueduledate = monthg + "/" + "15" + "/" + year;
        var mainres = Booking.monthdatechk(date, enddate, pSchueduledate, P_EXTRA, P_EXTRA1);
        var mainds = mainres.value;
        if (mainds.Tables[0].Rows[0].DATECHK == "Y") {
            document.getElementById('days15').disabled = false;
        }
        else {
            if (document.getElementById('days15').value != "") {
                alert("Please Enter Spot Between Start Date and End Date")
                document.getElementById('days15').value = "";
            }

            document.getElementById('days15').disabled = true;

        }
        document.getElementById("days15").style.backgroundColor = "white";
        document.getElementById('days16').focus();
    }

    if (activeid == "days16") {
        var pSchueduledate = monthg + "/" + "16" + "/" + year;
        var mainres = Booking.monthdatechk(date, enddate, pSchueduledate, P_EXTRA, P_EXTRA1);
        var mainds = mainres.value;
        if (mainds.Tables[0].Rows[0].DATECHK == "Y") {
            document.getElementById('days16').disabled = false;
        }
        else {
            if (document.getElementById('days16').value != "") {
                alert("Please Enter Spot Between Start Date and End Date")
                document.getElementById('days16').value = "";
            }

            document.getElementById('days16').disabled = true;

        }
        document.getElementById("days16").style.backgroundColor = "white";
        document.getElementById('days17').focus();
    }


    if (activeid == "days17") {
        var pSchueduledate = monthg + "/" + "17" + "/" + year;
        var mainres = Booking.monthdatechk(date, enddate, pSchueduledate, P_EXTRA, P_EXTRA1);
        var mainds = mainres.value;
        if (mainds.Tables[0].Rows[0].DATECHK == "Y") {
            document.getElementById('days17').disabled = false;
        }
        else {
            if (document.getElementById('days17').value != "") {
                alert("Please Enter Spot Between Start Date and End Date")
                document.getElementById('days17').value = "";
            }

            document.getElementById('days17').disabled = true;

        }
        document.getElementById("days17").style.backgroundColor = "white";
        document.getElementById('days18').focus();
    }


    if (activeid == "days18") {
        var pSchueduledate = monthg + "/" + "18" + "/" + year;
        var mainres = Booking.monthdatechk(date, enddate, pSchueduledate, P_EXTRA, P_EXTRA1);
        var mainds = mainres.value;
        if (mainds.Tables[0].Rows[0].DATECHK == "Y") {
            document.getElementById('days18').disabled = false;
        }
        else {
            if (document.getElementById('days18').value != "") {
                alert("Please Enter Spot Between Start Date and End Date")
                document.getElementById('days18').value = "";
            }

            document.getElementById('days18').disabled = true;

        }
        document.getElementById("days18").style.backgroundColor = "white";
        document.getElementById('days19').focus();
    }

    if (activeid == "days19") {
        var pSchueduledate = monthg + "/" + "19" + "/" + year;
        var mainres = Booking.monthdatechk(date, enddate, pSchueduledate, P_EXTRA, P_EXTRA1);
        var mainds = mainres.value;
        if (mainds.Tables[0].Rows[0].DATECHK == "Y") {
            document.getElementById('days19').disabled = false;
        }
        else {
            if (document.getElementById('days19').value != "") {
                alert("Please Enter Spot Between Start Date and End Date")
                document.getElementById('days19').value = "";
            }

            document.getElementById('days19').disabled = true;

        }
        document.getElementById("days19").style.backgroundColor = "white";
        document.getElementById('days20').focus();
    }

    if (activeid == "days20") {
        var pSchueduledate = monthg + "/" + "20" + "/" + year;
        var mainres = Booking.monthdatechk(date, enddate, pSchueduledate, P_EXTRA, P_EXTRA1);
        var mainds = mainres.value;
        if (mainds.Tables[0].Rows[0].DATECHK == "Y") {
            document.getElementById('days20').disabled = false;
        }
        else {
            if (document.getElementById('days20').value != "") {
                alert("Please Enter Spot Between Start Date and End Date")
                document.getElementById('days20').value = "";
            }

            document.getElementById('days20').disabled = true;

        }
        document.getElementById("days20").style.backgroundColor = "white";
        document.getElementById('days21').focus();
    }
    if (activeid == "days21") {
        var pSchueduledate = monthg + "/" + "21" + "/" + year;
        var mainres = Booking.monthdatechk(date, enddate, pSchueduledate, P_EXTRA, P_EXTRA1);
        var mainds = mainres.value;
        if (mainds.Tables[0].Rows[0].DATECHK == "Y") {
            document.getElementById('days21').disabled = false;
        }
        else {
            if (document.getElementById('days21').value != "") {
                alert("Please Enter Spot Between Start Date and End Date")
                document.getElementById('days21').value = "";
            }

            document.getElementById('days21').disabled = true;

        }
        document.getElementById("days21").style.backgroundColor = "white";
        document.getElementById('days22').focus();
    }
    if (activeid == "days22") {
        var pSchueduledate = monthg + "/" + "22" + "/" + year;
        var mainres = Booking.monthdatechk(date, enddate, pSchueduledate, P_EXTRA, P_EXTRA1);
        var mainds = mainres.value;
        if (mainds.Tables[0].Rows[0].DATECHK == "Y") {
            document.getElementById('days22').disabled = false;
        }
        else {
            if (document.getElementById('days22').value != "") {
                alert("Please Enter Spot Between Start Date and End Date")
                document.getElementById('days22').value = "";
            }

            document.getElementById('days22').disabled = true;

        }
        document.getElementById("days22").style.backgroundColor = "white";
        document.getElementById('days23').focus();
    }
    if (activeid == "days23") {
        var pSchueduledate = monthg + "/" + "23" + "/" + year;
        var mainres = Booking.monthdatechk(date, enddate, pSchueduledate, P_EXTRA, P_EXTRA1);
        var mainds = mainres.value;
        if (mainds.Tables[0].Rows[0].DATECHK == "Y") {
            document.getElementById('days23').disabled = false;
        }
        else {
            if (document.getElementById('days23').value != "") {
                alert("Please Enter Spot Between Start Date and End Date")
                document.getElementById('days23').value = "";
            }

            document.getElementById('days23').disabled = true;

        }
        document.getElementById("days23").style.backgroundColor = "white";
        document.getElementById('days24').focus();
    }
    if (activeid == "days24") {
        var pSchueduledate = monthg + "/" + "24" + "/" + year;
        var mainres = Booking.monthdatechk(date, enddate, pSchueduledate, P_EXTRA, P_EXTRA1);
        var mainds = mainres.value;
        if (mainds.Tables[0].Rows[0].DATECHK == "Y") {
            document.getElementById('days24').disabled = false;
        }
        else {
            if (document.getElementById('days24').value != "") {
                alert("Please Enter Spot Between Start Date and End Date")
                document.getElementById('days24').value = "";
            }

            document.getElementById('days24').disabled = true;

        }
        document.getElementById("days24").style.backgroundColor = "white";
        document.getElementById('days25').focus();
    }

    if (activeid == "days25") {
        var pSchueduledate = monthg + "/" + "25" + "/" + year;
        var mainres = Booking.monthdatechk(date, enddate, pSchueduledate, P_EXTRA, P_EXTRA1);
        var mainds = mainres.value;
        if (mainds.Tables[0].Rows[0].DATECHK == "Y") {
            document.getElementById('days25').disabled = false;
        }
        else {
            if (document.getElementById('days25').value != "") {
                alert("Please Enter Spot Between Start Date and End Date")
                document.getElementById('days25').value = "";
            }

            document.getElementById('days25').disabled = true;

        }
        document.getElementById("days25").style.backgroundColor = "white";
        document.getElementById('days26').focus();
    }

    if (activeid == "days26") {
        var pSchueduledate = monthg + "/" + "26" + "/" + year;
        var mainres = Booking.monthdatechk(date, enddate, pSchueduledate, P_EXTRA, P_EXTRA1);
        var mainds = mainres.value;
        if (mainds.Tables[0].Rows[0].DATECHK == "Y") {
            document.getElementById('days26').disabled = false;
        }
        else {
            if (document.getElementById('days26').value != "") {
                alert("Please Enter Spot Between Start Date and End Date")
                document.getElementById('days26').value = "";
            }

            document.getElementById('days26').disabled = true;

        }
        document.getElementById("days26").style.backgroundColor = "white";
        document.getElementById('days27').focus();
    }


    if (activeid == "days27") {
        var pSchueduledate = monthg + "/" + "27" + "/" + year;
        var mainres = Booking.monthdatechk(date, enddate, pSchueduledate, P_EXTRA, P_EXTRA1);
        var mainds = mainres.value;
        if (mainds.Tables[0].Rows[0].DATECHK == "Y") {
            document.getElementById('days27').disabled = false;
        }
        else {
            if (document.getElementById('days27').value != "") {
                alert("Please Enter Spot Between Start Date and End Date")
                document.getElementById('days27').value = "";
            }

            document.getElementById('days27').disabled = true;

        }
        document.getElementById("days27").style.backgroundColor = "white";
        document.getElementById('days28').focus();
    }


    if (activeid == "days28") {
        var pSchueduledate = monthg + "/" + "28" + "/" + year;
        var mainres = Booking.monthdatechk(date, enddate, pSchueduledate, P_EXTRA, P_EXTRA1);
        var mainds = mainres.value;
        if (mainds.Tables[0].Rows[0].DATECHK == "Y") {
            document.getElementById('days28').disabled = false;
        }
        else {
            if (document.getElementById('days28').value != "") {
                alert("Please Enter Spot Between Start Date and End Date")
                document.getElementById('days28').value = "";
            }

            document.getElementById('days28').disabled = true;

        }
        document.getElementById("days28").style.backgroundColor = "white";
        document.getElementById('days29').focus();
    }

    if (activeid == "days29") {

        var pSchueduledate = monthg + "/" + "29" + "/" + year;
        var mainres = Booking.monthdatechk(date, enddate, pSchueduledate, P_EXTRA, P_EXTRA1);
        var mainds = mainres.value;
        var mainds = mainres.value;
        if (mainds == null) {
            if (document.getElementById('days29').value != "") {
                alert("Please Enter Valid Date ")
                document.getElementById('days29').value = "";
            }

            document.getElementById('days29').disabled = true;

            return false;
        }
        else {
            if (mainds.Tables[0].Rows[0].DATECHK == "Y") {
                document.getElementById('days29').disabled = false;
            }
            else {
                if (document.getElementById('days29').value != "") {
                    alert("Please Enter Spot Between Start Date and End Date")
                    document.getElementById('days29').value = "";
                }

                document.getElementById('days29').disabled = true;

            }
        }
        document.getElementById('days30').focus();
        document.getElementById("days29").style.backgroundColor = "white";


    }

    if (activeid == "days30") {

        var pSchueduledate = monthg + "/" + "30" + "/" + year;
        var mainres = Booking.monthdatechk(date, enddate, pSchueduledate, P_EXTRA, P_EXTRA1);

        var mainds = mainres.value;
        if (mainds == null) {
            if (document.getElementById('days30').value != "") {
                alert("Please Enter Valid Date ")
                document.getElementById('days30').value = "";
            }

            document.getElementById('days30').disabled = true;

            return false;
        }
        else {
            if (mainds.Tables[0].Rows[0].DATECHK == "Y") {
                document.getElementById('days30').disabled = false;
            }
            else {
                if (document.getElementById('days30').value != "") {
                    alert("Please Enter Spot Between Start Date and End Date")
                    document.getElementById('days30').value = "";
                }

                document.getElementById('days30').disabled = true;

            }
        }

        document.getElementById('days31').focus();
        document.getElementById("days30").style.backgroundColor = "white";
    }

    if (activeid == "days31") {

        var pSchueduledate = monthg + "/" + "31" + "/" + year;
        var mainres = Booking.monthdatechk(date, enddate, pSchueduledate, P_EXTRA, P_EXTRA1);
        var mainds = mainres.value;
        if (mainds == null) {
            if (document.getElementById('days31').value != "") {
                alert("Please Enter Valid Date ")
                document.getElementById('days31').value = "";
            }

            document.getElementById('days31').disabled = true;
            document.getElementById('btnpost').focus();
            return false;
        }
        else {
            if (mainds.Tables[0].Rows[0].DATECHK == "Y") {
                document.getElementById('days31').disabled = false;
            }
            else {
                if (document.getElementById('days31').value != "") {
                    alert("Please Enter Spot Between Start Date and End Date")
                    document.getElementById('days31').value = "";
                }

                document.getElementById('days31').disabled = true;
                document.getElementById('btnpost').focus();
            }
        }


    }

    return false;
}
function amtcharge() {
    flagdata = "1";

    var PCOMP_CODE = document.getElementById('hdncompcode').value;
    var PCENT_CODE = document.getElementById('hdncenter').value;
    var PRATE_TYPE = document.getElementById('drpratetype').value;
    var PAGREED_TYPE = document.getElementById('drpagrateamt').value;
    var PPREMIUM_TYPE = document.getElementById('txtsptype').value;
    var PDiscount_TYPE = document.getElementById('drpdiscount').value;
    var pbookdate = document.getElementById('txtbokngdate').value;
    var PDEALNO = document.getElementById('hdndeal').value;
    if (document.getElementById('txtstartdate').value == "") {
        alert("Please Select Start Date");
        document.getElementById('txtstartdate').focus();
        return false;
    }
    if (document.getElementById('txtenddate').value == "") {
        alert("Please Select End Date");
        document.getElementById('txtenddate').focus();
        return false;
    }
    if (PRATE_TYPE == "" || PRATE_TYPE == "0") {
        alert("Enter Rate Type");
        document.getElementById('drpratetype').focus();
        return false;
    }
    var dateformat = document.getElementById('hiddendateformat').value;
    var PEXTRA4 = document.getElementById('txtstartdate').value;
    var PEXTRA5 = document.getElementById('txtenddate').value;
    if (dateformat == "dd/mm/yyyy") {
        PEXTRA4 = PEXTRA4.split('/');
        PEXTRA4 = PEXTRA4[1] + "/" + PEXTRA4[0] + "/" + PEXTRA4[2];

        PEXTRA5 = PEXTRA5.split('/');
        PEXTRA5 = PEXTRA5[1] + "/" + PEXTRA5[0] + "/" + PEXTRA5[2];
    }
    else if (dateformat == "mm/dd/yyyy") {

    }
    else if (dateformat == "yyyy/mm/dd") {
        PEXTRA4 = PEXTRA4.split('/');
        PEXTRA4 = PEXTRA4[1] + "/" + PEXTRA4[2] + "/" + PEXTRA4[0];

        PEXTRA5 = PEXTRA5.split('/');
        PEXTRA5 = PEXTRA5[1] + "/" + PEXTRA5[2] + "/" + PEXTRA5[0];
    }
    else {
        alert("Dateformat is either null or blank");
        return false;
    }
    
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
    var noin = 0;
    var PPREMIUM_CODE = document.getElementById('drpprem').value;
    var PPRIME_PREMIUM_CODE = document.getElementById('drpprimprem').value;
    var PPRIME_PREMIUM_TYPE = document.getElementById('txtprimetype').value;
    var PSERVICE_TAX_CODE = document.getElementById('drpservictype').value;
    var PAGREED_AMT = document.getElementById('txtagrateamt').value;
    var PEXTRA2 = document.getElementById('txtspot').value;
    var PEXTRA3 = document.getElementById('hdngencode').value;
    var PAGENY_COMM = document.getElementById('txtagcommper').value;
    var PAGENCY_ADDL_COMM = document.getElementById('txtagaddcommper').value;
    var gridlength = document.getElementById('drincrgfGrid').rows.length;
    for (var i = 0; i < (gridlength - 1); i++) {
        if (document.getElementById("sstr_" + i).style.display != "none") {
            if (document.getElementById("Status_" + i).value != "C") {
                noin++;

            }
        }
    }
    for (var k = 0; k < (gridlength - 1); k++) {
        if (document.getElementById("sstr_" + k).style.display != "none") {
            var PCHANNEL_CODE = document.getElementById("Channelcode_" + k).value;
            var PAD_TYPE = document.getElementById("Adtypecode_" + k).value;
            var PTAP_ID = document.getElementById("tapidcode_" + k).value;
            var PSPOT_TYPE = document.getElementById("spotcode_" + k).value;
            var PPROGRAMME_CODE = document.getElementById("programcode_" + k).value;
            var PPRIME_TIME_CODE = document.getElementById("primcode_" + k).value;
            var PPREMIUM_AMT = document.getElementById("prem_" + k).value;
            var PDiscount_AMT = document.getElementById("disc_" + k).value;

            var PPRIME_PREMIUM_AMT = document.getElementById("primeamtgr_" + k).value;
            var PNO_OF_SPOT = document.getElementById("Spot_" + k).value;

            var PEXTRA = noin;
            var PEXTRA1 = "";
            var PEXTRA6 = "";

            var resr = Booking.ratecal(PCOMP_CODE, PCENT_CODE, PCHANNEL_CODE, PRATE_TYPE, PAD_TYPE, PTAP_ID, PSPOT_TYPE, PNO_OF_SPOT, PPROGRAMME_CODE, PPRIME_TIME_CODE, PDEALNO, PAGREED_TYPE, PAGREED_AMT, PPREMIUM_TYPE, PPREMIUM_AMT, PPREMIUM_CODE, PPRIME_PREMIUM_CODE, PPRIME_PREMIUM_TYPE, PPRIME_PREMIUM_AMT, PSERVICE_TAX_CODE, PDiscount_TYPE, PDiscount_AMT, PAGENY_COMM, PAGENCY_ADDL_COMM, pbookdate, PEXTRA, PEXTRA1, PEXTRA2, PEXTRA3, PEXTRA4, PEXTRA5, PEXTRA6);
            var dsrate = resr.value;
            if (dsrate == null) {
                alert(res_error.error.description);
                return false
            }
            document.getElementById("Rate_" + k).value = fndnull1(dsrate.Tables[0].Rows[0].CARD_RATE);
            document.getElementById("agrate_" + k).value = fndnull1(dsrate.Tables[0].Rows[0].AGREED_AMT);
            document.getElementById("Gross_" + k).value = fndnull1(dsrate.Tables[0].Rows[0].GROSS_AMT);
            document.getElementById("prem_" + k).value = fndnull1(dsrate.Tables[0].Rows[0].PREMIUM_AMT);
            document.getElementById("disc_" + k).value = fndnull1(dsrate.Tables[0].Rows[0].DISCOUNT_AMT);
            document.getElementById("agcomm_" + k).value = fndnull1(dsrate.Tables[0].Rows[0].AGENCY_COMM);
            document.getElementById("addAgComm_" + k).value = fndnull1(dsrate.Tables[0].Rows[0].AGENCY_ADDL_COMM);
            document.getElementById("netamt_" + k).value = fndnull1(dsrate.Tables[0].Rows[0].NET_AMT);
            document.getElementById("primeamtgr_" + k).value = fndnull1(dsrate.Tables[0].Rows[0].PRIME_PREMIUM_AMT);
            document.getElementById("servtaxamt_" + k).value = fndnull1(dsrate.Tables[0].Rows[0].SERVICE_TAX_AMT);
            document.getElementById("billamtgrid_" + k).value = fndnull1(dsrate.Tables[0].Rows[0].TOTAL_NET_BILL);
        }
    }
    gridcalction();
    return false;
}
function ratecalcultion() {
    if (document.getElementById('txtstartdate').value == "") {
        alert("Please Select Start Date");
        document.getElementById('txtstartdate').focus();
        return false;
    }
    if (document.getElementById('txtenddate').value == "") {
        alert("Please Select End Date");
        document.getElementById('txtenddate').focus();
        return false;
    }
    var PCOMP_CODE = document.getElementById('hdncompcode').value;
    var PCENT_CODE = document.getElementById('hdncenter').value;
    var PCHANNEL_CODE = document.getElementById('drpchannel').value;
    var PRATE_TYPE = document.getElementById('drpratetype').value;
    if (PRATE_TYPE == "" || PRATE_TYPE == "0") {
        alert("Enter Rate Type");
        document.getElementById('drpratetype').focus();
        return false;
    }
    var PAD_TYPE = document.getElementById('drpadtype').value;
    var PTAP_ID = document.getElementById('hdntapid').value;
    var PSPOT_TYPE = document.getElementById('drpspottype').value;
    var PNO_OF_SPOT = pSpot;
    var PPROGRAMME_CODE = document.getElementById('hiddenprogram').value;
    var PPRIME_TIME_CODE = document.getElementById('hdnprime').value;

    var PAGREED_TYPE = document.getElementById('drpagrateamt').value;
    var PAGREED_AMT = document.getElementById('txtagrateamt').value;

    var PPREMIUM_TYPE = document.getElementById('txtsptype').value;
    var PPREMIUM_AMT = document.getElementById('txtprem').value;
    var PDiscount_TYPE = document.getElementById('drpdiscount').value;
    var PDiscount_AMT = document.getElementById('txtdiscount').value;
    var PAGENY_COMM = document.getElementById('txtagcommper').value;
    var PAGENCY_ADDL_COMM = document.getElementById('txtagaddcommper').value;
    var pbookdate = document.getElementById('txtbokngdate').value;
    var PDEALNO = document.getElementById('hdndeal').value;

    var PPREMIUM_CODE = document.getElementById('drpprem').value;
    var PPRIME_PREMIUM_CODE = document.getElementById('drpprimprem').value;
    var PPRIME_PREMIUM_TYPE = document.getElementById('txtprimetype').value;
    var PPRIME_PREMIUM_AMT = document.getElementById('txtprimprem').value;
    var PSERVICE_TAX_CODE = document.getElementById('drpservictype').value;

    var PEXTRA = "";
    var PEXTRA1 = "";
    var PEXTRA2 = "";
    var PEXTRA3 = document.getElementById('hdngencode').value;
    var PEXTRA6 = "";
    var dateformat = document.getElementById('hiddendateformat').value;
    var PEXTRA4 = document.getElementById('txtstartdate').value;
    var PEXTRA5 = document.getElementById('txtenddate').value;
    if (dateformat == "dd/mm/yyyy") {
        PEXTRA4 = PEXTRA4.split('/');
        PEXTRA4 = PEXTRA4[1] + "/" + PEXTRA4[0] + "/" + PEXTRA4[2];

        PEXTRA5 = PEXTRA5.split('/');
        PEXTRA5 = PEXTRA5[1] + "/" + PEXTRA5[0] + "/" + PEXTRA5[2];
    }
    else if (dateformat == "mm/dd/yyyy") {

    }
    else if (dateformat == "yyyy/mm/dd") {
        PEXTRA4 = PEXTRA4.split('/');
        PEXTRA4 = PEXTRA4[1] + "/" + PEXTRA4[2] + "/" + PEXTRA4[0];

        PEXTRA5 = PEXTRA5.split('/');
        PEXTRA5 = PEXTRA5[1] + "/" + PEXTRA5[2] + "/" + PEXTRA5[0];
    }
    else {
        alert("Dateformat is either null or blank");
        return false;
    }
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
    var resr = Booking.ratecal(PCOMP_CODE, PCENT_CODE, PCHANNEL_CODE, PRATE_TYPE, PAD_TYPE, PTAP_ID, PSPOT_TYPE, PNO_OF_SPOT, PPROGRAMME_CODE, PPRIME_TIME_CODE, PDEALNO, PAGREED_TYPE, PAGREED_AMT, PPREMIUM_TYPE, PPREMIUM_AMT, PPREMIUM_CODE, PPRIME_PREMIUM_CODE, PPRIME_PREMIUM_TYPE, PPRIME_PREMIUM_AMT, PSERVICE_TAX_CODE, PDiscount_TYPE, PDiscount_AMT, PAGENY_COMM, PAGENCY_ADDL_COMM, pbookdate, PEXTRA, PEXTRA1, PEXTRA2, PEXTRA3, PEXTRA4, PEXTRA5, PEXTRA6);
    var dsrate = resr.value;
    if (dsrate == null) {
        alert(res_error.error.description);
        return false
    }
    pRate = fndnull1(dsrate.Tables[0].Rows[0].CARD_RATE);
    agrateamt = fndnull1(dsrate.Tables[0].Rows[0].AGREED_AMT);
    pGross = fndnull1(dsrate.Tables[0].Rows[0].GROSS_AMT);
    ppremamt = fndnull1(dsrate.Tables[0].Rows[0].PREMIUM_AMT);
    pdisamt = fndnull1(dsrate.Tables[0].Rows[0].DISCOUNT_AMT);
    pagcomamt = fndnull1(dsrate.Tables[0].Rows[0].AGENCY_COMM);
    paddagcomamt = fndnull1(dsrate.Tables[0].Rows[0].AGENCY_ADDL_COMM);
    pnetamt = fndnull1(dsrate.Tables[0].Rows[0].NET_AMT);
    pprpremamt = fndnull1(dsrate.Tables[0].Rows[0].PRIME_PREMIUM_AMT);
    pservamtamt = fndnull1(dsrate.Tables[0].Rows[0].SERVICE_TAX_AMT);
    ptotbillamt = fndnull1(dsrate.Tables[0].Rows[0].TOTAL_NET_BILL);

    return false;
}


//*****************************************Deal Entry ****************************************************
function Binddeal(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtdeal") {


        document.getElementById("divdeal").style.display = "block";
        aTag = eval(document.getElementById("txtdeal"))
        var btag;
        var leftpos = 0;
        var toppos = 0;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divdeal').scrollLeft;
        var scrolltop = document.getElementById('divdeal').scrollTop;
        document.getElementById('divdeal').style.left = document.getElementById("txtdeal").offsetLeft + leftpos - tot + "px";
        document.getElementById('divdeal').style.top = document.getElementById("txtdeal").offsetTop + toppos - scrolltop + "px"; //"510px";


        var PCOMP_CODE = document.getElementById('hdncompcode').value;
        var PCENT_CODE = document.getElementById('hdncenter').value;
        var PBRANCH_C = document.getElementById('hiddenbranch').value;
        var PDEAL_NO = "";
        var PDEAL_DESC = document.getElementById('txtdeal').value.toUpperCase();
        var PDEAL_DATE = "";
        var PAGENCY = document.getElementById('hdngencode').value;
        var PCLIENT = document.getElementById('hdnclient').value;
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        var PEXTRA3 = "";
        var PEXTRA4 = "";
        var PEXTRA5 = "";

        Booking.Binddeal(PCOMP_CODE, PCENT_CODE, PBRANCH_C, PDEAL_NO, PDEAL_DESC, PDEAL_DATE, PAGENCY, PCLIENT, PEXTRA1, PEXTRA2, PEXTRA3, PEXTRA4, PEXTRA5, binddeal_callback);

    }

    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtdeal") {
            document.getElementById('hdndeal').value = "";
        }
    }
    else if (key == 27) {
        document.getElementById("divdeal").style.display = "none";
        document.getElementById('txtdeal').focus();
        return false;
    }
    else if (key == 13) {
        if (document.getElementById("divdeal").style.display == "block") {
            filldeal(event);
            return false;
        }
        if (document.activeElement.id == "istdeal") {
            filldeal(event);
            return false;
        }
        document.getElementById("divdeal").style.display = "none";
    }
    else if (key == 38) {
        if (document.getElementById("divdeal").style.display == "block") {
            if (document.getElementById('istdeal').value == '0') {
                document.getElementById('txtdeal').focus();
            }
        }
    }


    else if (key == 9) {
        document.getElementById("divdeal").style.display = "none";
        //document.getElementById('txtorg_rep').focus();
        //return false;
    }


    else if (key == 40) {
        if (document.getElementById("divdeal").style.display == "block") {
            document.getElementById("istdeal").focus();
        }
    }

    else {
        document.getElementById("divdeal").style.display = "block";
        aTag = eval(document.getElementById("txtdeal"))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divdeal').scrollLeft;
        var scrolltop = document.getElementById('divdeal').scrollTop;
        document.getElementById('divdeal').style.left = document.getElementById("txtdeal").offsetLeft + leftpos - tot + "px";
        document.getElementById('divdeal').style.top = document.getElementById("txtdeal").offsetTop + toppos - scrolltop + "px"; //"510px";
        var PCOMP_CODE = document.getElementById('hdncompcode').value;
        var PCENT_CODE = document.getElementById('hdncenter').value;
        var PBRANCH_C = document.getElementById('hiddenbranch').value;
        var PDEAL_NO = "";
        var PDEAL_DESC = document.getElementById('txtdeal').value.toUpperCase();
        var PDEAL_DATE = "";
        var PAGENCY = document.getElementById('hdngencode').value;
        var PCLIENT = document.getElementById('hdnclient').value;
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        var PEXTRA3 = "";
        var PEXTRA4 = "";
        var PEXTRA5 = "";

        Booking.Binddeal(PCOMP_CODE, PCENT_CODE, PBRANCH_C, PDEAL_NO, PDEAL_DESC, PDEAL_DATE, PAGENCY, PCLIENT, PEXTRA1, PEXTRA2, PEXTRA3, PEXTRA4, PEXTRA5, binddeal_callback);

    }


}

function binddeal_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("istdeal");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select Deal No---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].DEAL_DESC, ds.Tables[0].Rows[i].DEAL_NO);
        }


    }

    document.getElementById('hdndeal').value = "";
    document.getElementById("istdeal").selectedIndex = 1;
    return false;
}

function filldeal(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtdeal" || document.activeElement.id == "istdeal") {
            document.getElementById("divdeal").style.display = "none";
            document.getElementById('txtdeal').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {

        if (document.getElementById("istdeal").value == "0") {
            alert("Please Select Program Name");
            return false;
        }
        else {
            document.getElementById("divdeal").style.display = "none";
            var lstvalue = document.getElementById('istdeal').value;
            for (var k = 0; k < document.getElementById("istdeal").length; k++) {
                if (document.getElementById('istdeal').options[k].value == lstvalue) {
                    document.getElementById('hdndeal').value = document.getElementById('istdeal').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtdeal').value = document.getElementById('istdeal').options[k].textContent;
                    else
                        document.getElementById('txtdeal').value = document.getElementById('istdeal').options[k].innerText;

                    break;
                }
            }
        }
        document.getElementById('drpchannel').focus();
        filldealdata();
        return false;
    }

}

function filldealdata() {
    var PCOMP_CODE = document.getElementById('hdncompcode').value;
    var PCENT_CODE = document.getElementById('hdncenter').value;
    var PBRANCH_C = document.getElementById('hiddenbranch').value;
    var PDEAL_NO = document.getElementById('hdndeal').value;
    var PDEAL_DESC = document.getElementById('txtdeal').value.toUpperCase();
    var PDEAL_DATE = "";
    var PAGENCY = document.getElementById('hdngencode').value;
    var PCLIENT = document.getElementById('hdnclient').value;
    var PEXTRA1 = "";
    var PEXTRA2 = "";
    var PEXTRA3 = "";
    var PEXTRA4 = "";
    var PEXTRA5 = "";

    var dealrec = Booking.Binddeal(PCOMP_CODE, PCENT_CODE, PBRANCH_C, PDEAL_NO, PDEAL_DESC, PDEAL_DATE, PAGENCY, PCLIENT, PEXTRA1, PEXTRA2, PEXTRA3, PEXTRA4, PEXTRA5)
    var dsdeal = dealrec.value;
    if (dsdeal == null) {
        alert(res.error.description);
        return false;
    }
    if (dsdeal.Tables[0].Rows.length > 0) {

        document.getElementById('hdnexcutive').value = dsdeal.Tables[0].Rows[0].EXEC_CODE;
        document.getElementById('hdnret').value = dsdeal.Tables[0].Rows[0].RET_CODE;
        document.getElementById('hiddenindustry').value = dsdeal.Tables[0].Rows[0].IND_CODE;
        document.getElementById('hiddenproduct').value = dsdeal.Tables[0].Rows[0].PROD_CODE;
        document.getElementById('hiddenbrand').value = dsdeal.Tables[0].Rows[0].BRAND_CODE;
        document.getElementById('hideenevent').value = dsdeal.Tables[0].Rows[0].EVENT_CODE;
        document.getElementById('txtcpton').value = dsdeal.Tables[0].Rows[0].CAPTION;

        document.getElementById('txtexcutive').value = dsdeal.Tables[0].Rows[0].EXEC_NAME;
        document.getElementById('txtret').value = dsdeal.Tables[0].Rows[0].RET_NAME;
        document.getElementById('txtindustry').value = dsdeal.Tables[0].Rows[0].INDUSTRY_NAME;
        document.getElementById('txtproduct').value = dsdeal.Tables[0].Rows[0].PROD_NAME;
        document.getElementById('txtbrand').value = dsdeal.Tables[0].Rows[0].BRAND_NAME;
        document.getElementById('txtevent').value = dsdeal.Tables[0].Rows[0].EVENT_NAME;
        document.getElementById('txtevent').value = dsdeal.Tables[0].Rows[0].EVENT_NAME;



    }
    return false;

}
function copytodate(t) {
    document.getElementById('txtstartdate').style.backgroundColor = "white";
    var PFRDATE = document.getElementById('txtstartdate').value;
    var dateformat = document.getElementById('hiddendateformat').value;
    if (dateformat = "dd/mm/yyyy") {
        PFRDATE = PFRDATE.split('/');
        PFRDATE = PFRDATE[1] + "/" + PFRDATE[0] + "/" + PFRDATE[2];
    }
    else if (dateformat = "mm/dd/yyyy") {

    }
    else if (dateformat = "yyyy/mm/dd") {
        PFRDATE = PFRDATE.split('/');
        PFRDATE = PFRDATE[1] + "/" + PFRDATE[2] + "/" + PFRDATE[0];
    }
    else {
        alert("Dateformat is either null or blank");
        return false;
    }
    var PBILLFREQ = "M";
    var PCAL_TYPE = "AD";
    var PEXTRA1 = "";
    var PEXTRA2 = "";
    var PEXTRA3 = "";

    var res = Booking.GetLastDAte(PFRDATE, PBILLFREQ, PCAL_TYPE, PEXTRA1, PEXTRA2, PEXTRA3);
    var ds = res.value;
    if (ds == null) {
        alert(res.error.description);
        return false;
    }
    if (ds.Tables[0].Rows.length > 0) {
        // document.getElementById('txtfrdate').value = ds.Tables[0].Rows[0].FROM_DATE;
        document.getElementById('txtenddate').value = ds.Tables[0].Rows[0].TO_DATE;
        monthbind();
    }
    return false;
}
function daysbalnk() {
    document.getElementById('days1').value = "";
    document.getElementById('days2').value = "";
    document.getElementById('days3').value = "";
    document.getElementById('days4').value = "";
    document.getElementById('days5').value = "";
    document.getElementById('days6').value = "";
    document.getElementById('days7').value = "";
    document.getElementById('days8').value = "";
    document.getElementById('days9').value = "";
    document.getElementById('days10').value = "";
    document.getElementById('days11').value = "";
    document.getElementById('days12').value = "";
    document.getElementById('days13').value = "";
    document.getElementById('days14').value = "";
    document.getElementById('days15').value = "";
    document.getElementById('days16').value = "";
    document.getElementById('days17').value = "";
    document.getElementById('days18').value = "";
    document.getElementById('days19').value = "";
    document.getElementById('days20').value = "";
    document.getElementById('days21').value = "";
    document.getElementById('days22').value = "";
    document.getElementById('days23').value = "";
    document.getElementById('days24').value = "";
    document.getElementById('days25').value = "";
    document.getElementById('days26').value = "";
    document.getElementById('days27').value = "";
    document.getElementById('days28').value = "";
    document.getElementById('days29').value = "";
    document.getElementById('days30').value = "";
    document.getElementById('days31').value = "";

    return false;
}

function gridcalction() {
    var gridlength = document.getElementById('drincrgfGrid').rows.length;
    var nettotal = 0;
    var gross = 0;
    var PremAmt = 0;
    var DiscAmt = 0;
    var AgComm = 0;
    var addAgComm = 0;
    var primepremamt = 0;
    var servitaxamt = 0;
    var billamt = 0;
    var dursp = 0;
    var spotsp = 0;
    var daysp1 = 0;
    var daysp2 = 0;
    var daysp3 = 0;
    var daysp4 = 0;
    var daysp5 = 0;
    var daysp6 = 0;
    var daysp7 = 0;
    var daysp8 = 0;
    var daysp9 = 0;
    var daysp10 = 0;
    var daysp11 = 0;
    var daysp12 = 0;
    var daysp13 = 0;
    var daysp14 = 0;
    var daysp15 = 0;
    var daysp16 = 0;
    var daysp17 = 0;
    var daysp18 = 0;
    var daysp19 = 0;
    var daysp20 = 0;
    var daysp21 = 0;
    var daysp22 = 0;
    var daysp23 = 0;
    var daysp24 = 0;
    var daysp25 = 0;
    var daysp26 = 0;
    var daysp27 = 0;
    var daysp28 = 0;
    var daysp29 = 0;
    var daysp30 = 0;
    var daysp31 = 0;

    for (var k = 0; k < (gridlength - 1); k++) {

        if (document.getElementById("sstr_" + k).style.display != "none") {
            if (document.getElementById("Gross_" + k).value != "") {
                gross = gross + parseFloat(document.getElementById("Gross_" + k).value);
            }
            if (document.getElementById("netamt_" + k).value != "") {
                nettotal = nettotal + parseFloat(document.getElementById("netamt_" + k).value);
            }
            if (document.getElementById("prem_" + k).value != "") {

                PremAmt = PremAmt + parseFloat(document.getElementById("prem_" + k).value);
            }
            if (document.getElementById("disc_" + k).value != "") {

                DiscAmt = DiscAmt + parseFloat(document.getElementById("disc_" + k).value);
            }
            if (document.getElementById("agcomm_" + k).value != "") {

                AgComm = AgComm + parseFloat(document.getElementById("agcomm_" + k).value);
            }
            if (document.getElementById("addAgComm_" + k).value != "") {

                addAgComm = addAgComm + parseFloat(document.getElementById("addAgComm_" + k).value);
            }
            if (document.getElementById("primeamtgr_" + k).value != "") {

                primepremamt = primepremamt + parseFloat(document.getElementById("primeamtgr_" + k).value);
            }

            if (document.getElementById("servtaxamt_" + k).value != "") {

                servitaxamt = servitaxamt + parseFloat(document.getElementById("servtaxamt_" + k).value);
            }
            if (document.getElementById("billamtgrid_" + k).value != "") {

                billamt = billamt + parseFloat(document.getElementById("billamtgrid_" + k).value);
            }

            if (document.getElementById("Duration_" + k).value != "") {

                dursp = dursp + parseInt(document.getElementById("Duration_" + k).value);
            }
            if (document.getElementById("Spot_" + k).value != "") {

                spotsp = spotsp + parseInt(document.getElementById("Spot_" + k).value);
            }
            if (document.getElementById("dayg1_" + k).value != "") {

                daysp1 = daysp1 + parseInt(document.getElementById("dayg1_" + k).value);
            }
            if (document.getElementById("dayg2_" + k).value != "") {

                daysp2 = daysp2 + parseInt(document.getElementById("dayg2_" + k).value);
            }
            if (document.getElementById("dayg3_" + k).value != "") {

                daysp3 = daysp3 + parseInt(document.getElementById("dayg3_" + k).value);
            }
            if (document.getElementById("dayg4_" + k).value != "") {

                daysp4 = daysp4 + parseInt(document.getElementById("dayg4_" + k).value);
            }
            if (document.getElementById("dayg5_" + k).value != "") {

                daysp5 = daysp5 + parseInt(document.getElementById("dayg5_" + k).value);
            }
            if (document.getElementById("dayg6_" + k).value != "") {

                daysp6 = daysp6 + parseInt(document.getElementById("dayg6_" + k).value);
            }
            if (document.getElementById("dayg7_" + k).value != "") {

                daysp7 = daysp7 + parseInt(document.getElementById("dayg7_" + k).value);
            }
            if (document.getElementById("dayg8_" + k).value != "") {

                daysp8 = daysp8 + parseInt(document.getElementById("dayg8_" + k).value);
            }
            if (document.getElementById("dayg9_" + k).value != "") {

                daysp9 = daysp9 + parseInt(document.getElementById("dayg9_" + k).value);
            }
            if (document.getElementById("dayg10_" + k).value != "") {

                daysp10 = daysp10 + parseInt(document.getElementById("dayg10_" + k).value);
            }
            if (document.getElementById("dayg11_" + k).value != "") {

                daysp11 = daysp11 + parseInt(document.getElementById("dayg11_" + k).value);
            }
            if (document.getElementById("dayg12_" + k).value != "") {

                daysp12 = daysp12 + parseInt(document.getElementById("dayg12_" + k).value);
            }
            if (document.getElementById("dayg13_" + k).value != "") {

                daysp13 = daysp13 + parseInt(document.getElementById("dayg13_" + k).value);
            }
            if (document.getElementById("dayg14_" + k).value != "") {

                daysp14 = daysp14 + parseInt(document.getElementById("dayg14_" + k).value);
            }
            if (document.getElementById("dayg15_" + k).value != "") {

                daysp15 = daysp15 + parseInt(document.getElementById("dayg15_" + k).value);
            }
            if (document.getElementById("dayg16_" + k).value != "") {

                daysp16 = daysp16 + parseInt(document.getElementById("dayg16_" + k).value);
            }
            if (document.getElementById("dayg17_" + k).value != "") {

                daysp17 = daysp17 + parseInt(document.getElementById("dayg17_" + k).value);
            }
            if (document.getElementById("dayg18_" + k).value != "") {

                daysp18 = daysp18 + parseInt(document.getElementById("dayg18_" + k).value);
            }
            if (document.getElementById("dayg19_" + k).value != "") {

                daysp19 = daysp19 + parseInt(document.getElementById("dayg19_" + k).value);
            }
            if (document.getElementById("dayg20_" + k).value != "") {

                daysp20 = daysp20 + parseInt(document.getElementById("dayg20_" + k).value);
            }
            if (document.getElementById("dayg21_" + k).value != "") {

                daysp21 = daysp21 + parseInt(document.getElementById("dayg21_" + k).value);
            }
            if (document.getElementById("dayg22_" + k).value != "") {

                daysp22 = daysp22 + parseInt(document.getElementById("dayg22_" + k).value);
            }
            if (document.getElementById("dayg23_" + k).value != "") {

                daysp23 = daysp23 + parseInt(document.getElementById("dayg23_" + k).value);
            }
            if (document.getElementById("dayg24_" + k).value != "") {

                daysp24 = daysp24 + parseInt(document.getElementById("dayg24_" + k).value);
            }
            if (document.getElementById("dayg25_" + k).value != "") {

                daysp25 = daysp25 + parseInt(document.getElementById("dayg25_" + k).value);
            }
            if (document.getElementById("dayg26_" + k).value != "") {

                daysp26 = daysp26 + parseInt(document.getElementById("dayg26_" + k).value);
            }
            if (document.getElementById("dayg27_" + k).value != "") {

                daysp27 = daysp27 + parseInt(document.getElementById("dayg27_" + k).value);
            }
            if (document.getElementById("dayg28_" + k).value != "") {

                daysp28 = daysp28 + parseInt(document.getElementById("dayg28_" + k).value);
            }
            if (document.getElementById("dayg29_" + k).value != "") {

                daysp29 = daysp29 + parseInt(document.getElementById("dayg29_" + k).value);
            }
            if (document.getElementById("dayg30_" + k).value != "") {

                daysp30 = daysp30 + parseInt(document.getElementById("dayg30_" + k).value);
            }

            if (document.getElementById("dayg31_" + k).value != "") {

                daysp31 = daysp31 + parseInt(document.getElementById("dayg31_" + k).value);
            }
        }
    }
    document.getElementById("txtgrosgrd").value = gross.toFixed(2);
    document.getElementById("txtamt").value = nettotal.toFixed(2);
    document.getElementById("txtpermgrd").value = PremAmt.toFixed(2);
    document.getElementById("txtdicgrd").value = DiscAmt.toFixed(2);
    document.getElementById("txtagcommgrd").value = AgComm.toFixed(2);
    document.getElementById("txtaddagcommgrd").value = addAgComm.toFixed(2);

    document.getElementById("txtprimpremg").value = primepremamt.toFixed(2);
    document.getElementById("txtservictaxg").value = servitaxamt.toFixed(2);
    document.getElementById("txtbillamt").value = billamt.toFixed(2);

    document.getElementById("daysgr1").value = daysp1;
    document.getElementById("daysgr2").value = daysp2;
    document.getElementById("daysgr3").value = daysp3;
    document.getElementById("daysgr4").value = daysp4;
    document.getElementById("daysgr5").value = daysp5;
    document.getElementById("daysgr6").value = daysp6;
    document.getElementById("daysgr7").value = daysp7;
    document.getElementById("daysgr8").value = daysp8;
    document.getElementById("daysgr9").value = daysp9;
    document.getElementById("daysgr10").value = daysp10;
    document.getElementById("daysgr11").value = daysp11;
    document.getElementById("daysgr12").value = daysp12;
    document.getElementById("daysgr13").value = daysp13;
    document.getElementById("daysgr14").value = daysp14;
    document.getElementById("daysgr15").value = daysp15;
    document.getElementById("daysgr16").value = daysp16;
    document.getElementById("daysgr17").value = daysp17;
    document.getElementById("daysgr18").value = daysp18;
    document.getElementById("daysgr19").value = daysp19;
    document.getElementById("daysgr20").value = daysp20;
    document.getElementById("daysgr21").value = daysp21;
    document.getElementById("daysgr22").value = daysp22;
    document.getElementById("daysgr23").value = daysp23;
    document.getElementById("daysgr24").value = daysp24;
    document.getElementById("daysgr25").value = daysp25;
    document.getElementById("daysgr26").value = daysp26;
    document.getElementById("daysgr27").value = daysp27;
    document.getElementById("daysgr28").value = daysp28;
    document.getElementById("daysgr29").value = daysp29;
    document.getElementById("daysgr30").value = daysp30;
    document.getElementById("daysgr31").value = daysp31;

    document.getElementById("txtdur").value = dursp;
    document.getElementById("txtspot").value = spotsp;
}
function calspot() {
    pSpot = 0;

    if (document.getElementById('days1').value != "") {
        pSpot = pSpot + parseInt(document.getElementById('days1').value);
    }
    if (document.getElementById('days2').value != "") {
        pSpot = pSpot + parseInt(document.getElementById('days2').value);
    }
    if (document.getElementById('days3').value != "") {
        pSpot = pSpot + parseInt(document.getElementById('days3').value);
    }
    if (document.getElementById('days4').value != "") {
        pSpot = pSpot + parseInt(document.getElementById('days4').value);
    }
    if (document.getElementById('days5').value != "") {
        pSpot = pSpot + parseInt(document.getElementById('days5').value);
    }
    if (document.getElementById('days6').value != "") {
        pSpot = pSpot + parseInt(document.getElementById('days6').value);
    }
    if (document.getElementById('days7').value != "") {
        pSpot = pSpot + parseInt(document.getElementById('days7').value);
    }
    if (document.getElementById('days8').value != "") {
        pSpot = pSpot + parseInt(document.getElementById('days8').value);
    }
    if (document.getElementById('days9').value != "") {
        pSpot = pSpot + parseInt(document.getElementById('days9').value);
    }
    if (document.getElementById('days10').value != "") {
        pSpot = pSpot + parseInt(document.getElementById('days10').value);
    }
    if (document.getElementById('days11').value != "") {
        pSpot = pSpot + parseInt(document.getElementById('days11').value);
    }
    if (document.getElementById('days12').value != "") {
        pSpot = pSpot + parseInt(document.getElementById('days12').value);
    }
    if (document.getElementById('days13').value != "") {
        pSpot = pSpot + parseInt(document.getElementById('days13').value);
    }
    if (document.getElementById('days14').value != "") {
        pSpot = pSpot + parseInt(document.getElementById('days14').value);
    }
    if (document.getElementById('days15').value != "") {
        pSpot = pSpot + parseInt(document.getElementById('days15').value);
    }
    if (document.getElementById('days16').value != "") {
        pSpot = pSpot + parseInt(document.getElementById('days16').value);
    }
    if (document.getElementById('days17').value != "") {
        pSpot = pSpot + parseInt(document.getElementById('days17').value);
    }
    if (document.getElementById('days18').value != "") {
        pSpot = pSpot + parseInt(document.getElementById('days18').value);
    }
    if (document.getElementById('days19').value != "") {
        pSpot = pSpot + parseInt(document.getElementById('days19').value);
    }
    if (document.getElementById('days20').value != "") {
        pSpot = pSpot + parseInt(document.getElementById('days20').value);
    }
    if (document.getElementById('days21').value != "") {
        pSpot = pSpot + parseInt(document.getElementById('days21').value);
    }
    if (document.getElementById('days22').value != "") {
        pSpot = pSpot + parseInt(document.getElementById('days22').value);
    }
    if (document.getElementById('days23').value != "") {
        pSpot = pSpot + parseInt(document.getElementById('days23').value);
    }
    if (document.getElementById('days24').value != "") {
        pSpot = pSpot + parseInt(document.getElementById('days24').value);
    }
    if (document.getElementById('days25').value != "") {
        pSpot = pSpot + parseInt(document.getElementById('days25').value);
    }
    if (document.getElementById('days26').value != "") {
        pSpot = pSpot + parseInt(document.getElementById('days26').value);
    }
    if (document.getElementById('days27').value != "") {
        pSpot = pSpot + parseInt(document.getElementById('days27').value);
    }
    if (document.getElementById('days28').value != "") {
        pSpot = pSpot + parseInt(document.getElementById('days28').value);
    }
    if (document.getElementById('days29').value != "") {
        pSpot = pSpot + parseInt(document.getElementById('days29').value);
    }
    if (document.getElementById('days30').value != "") {
        pSpot = pSpot + parseInt(document.getElementById('days30').value);
    }
    if (document.getElementById('days31').value != "") {
        pSpot = pSpot + parseInt(document.getElementById('days31').value);
    }

    return false;
}

function monthbind() {
    disbalfield();
    document.getElementById("txtenddate").style.backgroundColor = "white";
    document.getElementById('drpmonth').value = "";
    document.getElementById('drpmonth').selectedIndex = 0;
    var date = document.getElementById('txtstartdate').value;
    var enddate = document.getElementById('txtenddate').value;
    var dateformat = document.getElementById('hiddendateformat').value;
    if (document.getElementById('txtstartdate').value == "") {
        alert("Please Select Start Date");
        document.getElementById('txtstartdate').focus();
        return false;
    }
    if (document.getElementById('txtenddate').value == "") {
        alert("Please Select End Date");
        document.getElementById('txtenddate').value = document.getElementById('txtstartdate').value;
        document.getElementById('txtenddate').focus();
        return false;
    }

    if (dateformat == "dd/mm/yyyy") {
        date = date.split('/');
        date = date[1] + "/" + date[0] + "/" + date[2];
        enddate = enddate.split('/');
        enddate = enddate[1] + "/" + enddate[0] + "/" + enddate[2];
    }
    else if (dateformat == "mm/dd/yyyy") {

    }
    else if (dateformat == "yyyy/mm/dd") {
        date = date.split('/');
        date = date[1] + "/" + date[2] + "/" + date[0];
        enddate = enddate.split('/');
        enddate = enddate[1] + "/" + enddate[2] + "/" + enddate[0];
    }
    else {
        alert("Dateformat is either null or blank");
        return false;
    }
    var PEXTRA = "";
    var PEXTRA1 = ""
    var todate = new Date(enddate);
    var frdate = new Date(date);
    if (todate < frdate) {
        alert("Booking Date To must be greater than  Booking Date From");
        document.getElementById('txtenddate').value = document.getElementById('txtstartdate').value;
        document.getElementById('txtenddate').focus();
        return false;
    }

    var res = Booking.Bindmonth(date, enddate, PEXTRA, PEXTRA1);
    Call_Bindmonth(res);

}

function Call_Bindmonth(res) {
    var ds = res.value;
    if (ds == null) {
        alert(res.error.description);
        return false
    }
    var pkgitem = document.getElementById('drpmonth');
    pkgitem.options.length = 0;
    if (ds.Tables[0].Rows.length > 0) {
        for (var i = 0; i < ds.Tables[0].Rows.length; i++) {
            pkgitem.options[pkgitem.options.length] = new Option(ds.Tables[0].Rows[i].MONTHS, ds.Tables[0].Rows[i].MON + "/" + ds.Tables[0].Rows[i].YR);
        }
    }

   // enableddis();

}
function enableddis() {
    var frmd = document.getElementById('txtstartdate').value.split('/')[0];
    var tomd = document.getElementById('txtenddate').value;



    document.getElementById('days1').disabled = true;
    document.getElementById('days2').disabled = true;
    document.getElementById('days3').disabled = true;
    document.getElementById('days4').disabled = true;
    document.getElementById('days5').disabled = true;
    document.getElementById('days6').disabled = true;
    document.getElementById('days7').disabled = true;
    document.getElementById('days8').disabled = true;
    document.getElementById('days9').disabled = true;
    document.getElementById('days10').disabled = true;
    document.getElementById('days11').disabled = true;
    document.getElementById('days12').disabled = true;
    document.getElementById('days13').disabled = true;
    document.getElementById('days14').disabled = true;
    document.getElementById('days15').disabled = true;
    document.getElementById('days16').disabled = true;
    document.getElementById('days17').disabled = true;
    document.getElementById('days18').disabled = true;
    document.getElementById('days19').disabled = true;
    document.getElementById('days20').disabled = true;
    document.getElementById('days21').disabled = true;
    document.getElementById('days22').disabled = true;
    document.getElementById('days23').disabled = true;
    document.getElementById('days24').disabled = true;
    document.getElementById('days25').disabled = true;
    document.getElementById('days26').disabled = true;
    document.getElementById('days27').disabled = true;
    document.getElementById('days28').disabled = true;
    document.getElementById('days29').disabled = true;
    document.getElementById('days30').disabled = true;
    document.getElementById('days31').disabled = true;
    return false;
}
function pospremvalue() {
    document.getElementById('txtprem').value = "";
    document.getElementById('txtsptype').value = "";
    var PCOMPCODE = document.getElementById("hdncompcode").value;
    var SPL_POSITION_CODE = document.getElementById("drpprem").value;
    var PEXTRA = "";
    var res = Booking.Bindposamt(PCOMPCODE, SPL_POSITION_CODE, PEXTRA);
    var ds = res.value;
    if (ds.Tables[0].Rows.length > 0) {
        document.getElementById('txtprem').value = ds.Tables[0].Rows[0].SPL_POSITION_CHARGES;
        document.getElementById('txtsptype').value = ds.Tables[0].Rows[0].SPL_POSITION_CHARGES_TYPE;
    }
    else {
        document.getElementById('txtprem').value = "";
        document.getElementById('txtsptype').value = "";
    }
    return false;
}
function fillblank() {
    document.getElementById('txtdiscount').value = "";
    return false;
}
function rattypfill() {
    if (document.getElementById('drpagrateamt').value == "0") {
        alert("Please Enter Rate/Amt");
        document.getElementById('drpagrateamt').focus();
        document.getElementById('txtagrateamt').value = "";
        return false;
    }
}
function rateblank() {
    document.getElementById('txtagrateamt').value = "";
    if (document.getElementById('drpagrateamt').value == "A") {
        document.getElementById('divamtch').style.display = "block";
    }
    else {
        document.getElementById('divamtch').style.display = "none";
    }
    return false;
}
function primepremvalue() {
    document.getElementById('txtprimprem').value = "";
    document.getElementById('txtprimetype').value = "";
    var PCOMPCODE = document.getElementById("hdncompcode").value;
    var PRIME_POSITION_CODE = document.getElementById("drpprimprem").value;
    var PEXTRA = "";
    var res = Booking.Bindprimeposamt(PCOMPCODE, PRIME_POSITION_CODE, PEXTRA);
    var ds = res.value;
    if (ds.Tables[0].Rows.length > 0) {
        document.getElementById('txtprimprem').value = ds.Tables[0].Rows[0].PRIME_PREM_CHARGES;
        document.getElementById('txtprimetype').value = ds.Tables[0].Rows[0].PRIME_PREM_CHARGES_TYPE;
    }
    else {
        document.getElementById('txtprimprem').value = "";
        document.getElementById('txtprimetype').value = "";
    }
    return false;
}
function Generatedocblo() {
    document.getElementById("txtrno").style.backgroundColor = "white";
    if (document.getElementById('txtrno').value == "") {
        if (confirm("Do you want to generate Dokit Booking?")) {
            GenerateDokitNo();
            document.getElementById('txtrdate').focus();
            //return false;
        }
    }
}

function blankcreat() {

    document.getElementById('txtbokng').value = "";
    document.getElementById('txtagncy').value = "";
    document.getElementById('drppaaymode').value = "";
    document.getElementById('txtagoutstand').value = "";
    document.getElementById('txtclint').value = "";
    document.getElementById('txtdeal').value = "";
    document.getElementById('drpbookingtype').value = "N";
    document.getElementById('txtrno').value = "";
    document.getElementById('txtdokitno').value = "";
    document.getElementById('drpbookstatus').value = "";
    document.getElementById('txtindustry').value = "----- Select Industry -----";
    document.getElementById('txtproduct').value = "----- Select Product -----";
    document.getElementById('txtbrand').value = "----- Select Brand -----";
    document.getElementById('txtevent').value = "----- Select Event -----";
    document.getElementById('txtexcutive').value = "----- Select Executive -----";
    document.getElementById('txtret').value = "----- Select Retainer -----";
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
    document.getElementById('drpbillto').value = "A";
    document.getElementById('txtagcommper').value = "";
    document.getElementById('drpratetype').value = "0";
    document.getElementById('drpagrateamt').value = "0";
    document.getElementById('txtagrateamt').value = "";
    document.getElementById('drpprem').value = "0";
    document.getElementById('drpprimprem').value = "0";
    document.getElementById('txtprem').value = "";
    document.getElementById('drpdiscount').value = "P";
    document.getElementById('txtdiscount').value = "";
    document.getElementById('txtamt').value = "";
    document.getElementById('drpadtype').value = "0";
    document.getElementById('txttapid').value = "-- Select Tap No --";
    document.getElementById('rodptype').value = "-- Select Prime Time --";
    document.getElementById('txtfromtime').value = "";
    document.getElementById('txttotime').value = "";

    document.getElementById('txtnProgName').value = "--Select Program Name--";
    document.getElementById('drpspottype').value = "P";
    // document.getElementById('txtsegment').value = "";
    // document.getElementById('txtpostion').value = "";
    document.getElementById('hiddenprogram').value = "";
    document.getElementById('hdnprime').value = "";
    document.getElementById('hdntapid').value = "";

    document.getElementById('hdrowid').value = "";
    document.getElementById('days1').value = "";
    document.getElementById('days2').value = "";
    document.getElementById('days3').value = "";
    document.getElementById('days4').value = "";
    document.getElementById('days5').value = "";
    document.getElementById('days6').value = "";
    document.getElementById('days7').value = "";
    document.getElementById('days8').value = "";
    document.getElementById('days9').value = "";
    document.getElementById('days10').value = "";
    document.getElementById('days11').value = "";
    document.getElementById('days12').value = "";
    document.getElementById('days13').value = "";
    document.getElementById('days14').value = "";
    document.getElementById('days15').value = "";
    document.getElementById('days16').value = "";
    document.getElementById('days17').value = "";
    document.getElementById('days18').value = "";
    document.getElementById('days19').value = "";
    document.getElementById('days20').value = "";
    document.getElementById('days21').value = "";
    document.getElementById('days22').value = "";
    document.getElementById('days23').value = "";
    document.getElementById('days24').value = "";
    document.getElementById('days25').value = "";
    document.getElementById('days26').value = "";
    document.getElementById('days27').value = "";
    document.getElementById('days28').value = "";
    document.getElementById('days29').value = "";
    document.getElementById('days30').value = "";
    document.getElementById('days31').value = "";

    document.getElementById('daysgr1').value = "";
    document.getElementById('daysgr2').value = "";
    document.getElementById('daysgr3').value = "";
    document.getElementById('daysgr4').value = "";
    document.getElementById('daysgr5').value = "";
    document.getElementById('daysgr6').value = "";
    document.getElementById('daysgr7').value = "";
    document.getElementById('daysgr8').value = "";
    document.getElementById('daysgr9').value = "";
    document.getElementById('daysgr10').value = "";
    document.getElementById('daysgr11').value = "";
    document.getElementById('daysgr12').value = "";
    document.getElementById('daysgr13').value = "";
    document.getElementById('daysgr14').value = "";
    document.getElementById('daysgr15').value = "";
    document.getElementById('daysgr16').value = "";
    document.getElementById('daysgr17').value = "";
    document.getElementById('daysgr18').value = "";
    document.getElementById('daysgr19').value = "";
    document.getElementById('daysgr20').value = "";
    document.getElementById('daysgr21').value = "";
    document.getElementById('daysgr22').value = "";
    document.getElementById('daysgr23').value = "";
    document.getElementById('daysgr24').value = "";
    document.getElementById('daysgr25').value = "";
    document.getElementById('daysgr26').value = "";
    document.getElementById('daysgr27').value = "";
    document.getElementById('daysgr28').value = "";
    document.getElementById('daysgr29').value = "";
    document.getElementById('daysgr30').value = "";
    document.getElementById('daysgr31').value = "";


    document.getElementById('txtdur').value = "";
    document.getElementById('txtspot').value = "";
    document.getElementById('txtgrosgrd').value = "";
    document.getElementById('txtpermgrd').value = "";
    document.getElementById('txtprimpremg').value = "";
    document.getElementById('txtdicgrd').value = "";
    document.getElementById('txtagcommgrd').value = "";
    document.getElementById('txtaddagcommgrd').value = "";
    document.getElementById('txtamt').value = "";

    document.getElementById('txtservictaxg').value = "";
    document.getElementById('txtbillamt').value = "";





    document.getElementById('txtbokngdate').value = document.getElementById('hdndate').value;
    document.getElementById('txtstartdate').value = document.getElementById('hdndate').value;
    document.getElementById('txtrdate').value = document.getElementById('hdndate').value;

    copytodate('N');
    return false;
}
function industryopen() {
    var fromname = "BOK";
    var industry = document.getElementById('txtindustry').value;
    if (industry == "") {
        return false;
    }
    var w = 1400;
    var h = 600;
    var left = (window.screen.width / 2) - ((w / 2) + 10);
    var top = (window.screen.height / 2) - ((h / 2) + 50);
    var win = window.open("IndustryMaster.aspx?fromname=" + fromname + "&industry=" + industry, 'Search_booking', 'width=1400px,height=600px ,status=0,toolbar=0,resizable=0,left=' + left + ',top=' + top + ',screenX=' + left + ',screenY=' + top + ',scrollbars=yes');
    return false;
}
function productopen() {
    var fromname = "BOK";
    var industrycode = document.getElementById('hiddenindustry').value;
    var product = document.getElementById('txtproduct').value;
    if (product == "") {
        return false;
    }
    var w = 1400;
    var h = 600;
    var left = (window.screen.width / 2) - ((w / 2) + 10);
    var top = (window.screen.height / 2) - ((h / 2) + 50);
    var win = window.open("ProductMaster.aspx?fromname=" + fromname + "&product=" + product + "&industrycode=" + industrycode, 'Search_booking', 'width=1400px,height=600px ,status=0,toolbar=0,resizable=0,left=' + left + ',top=' + top + ',screenX=' + left + ',screenY=' + top + ',scrollbars=yes');
    return false;
}
function brandopen() {
    var fromname = "BOK";
    var productcode = document.getElementById('hiddenproduct').value;
    var brand = document.getElementById('txtbrand').value;
    if (brand == "") {
        return false;
    }
    var w = 1400;
    var h = 600;
    var left = (window.screen.width / 2) - ((w / 2) + 10);
    var top = (window.screen.height / 2) - ((h / 2) + 50);
    var win = window.open("BrandMaster.aspx?fromname=" + fromname + "&brand=" + brand + "&productcode=" + productcode, 'Search_booking', 'width=1400px,height=600px ,status=0,toolbar=0,resizable=0,left=' + left + ',top=' + top + ',screenX=' + left + ',screenY=' + top + ',scrollbars=yes');
    return false;
}
function eventopen() {
    var fromname = "BOK";
    var event = document.getElementById('txtevent').value;
    if (event == "") {
        return false;
    }
    var w = 1400;
    var h = 600;
    var left = (window.screen.width / 2) - ((w / 2) + 10);
    var top = (window.screen.height / 2) - ((h / 2) + 50);
    var win = window.open("EventMaster.aspx?fromname=" + fromname + "&event=" + event, 'Search_booking', 'width=1400px,height=600px ,status=0,toolbar=0,resizable=0,left=' + left + ',top=' + top + ',screenX=' + left + ',screenY=' + top + ',scrollbars=yes');
    return false;
}
function commopen() {
    if (document.getElementById('hdntapid').value == "") {
        if (document.getElementById('hdngencode').value == "") {
            alert("Please Select Agency");
            document.getElementById('txtagncy').focus();
            return false;
        }
        if (document.getElementById('hdnclient').value == "") {
            alert("Please Select Client");
            document.getElementById('txtclint').focus();
            return false;
        }
        if (document.getElementById('drpchannel').value == "") {
            alert("Please Select Channel");
            document.getElementById('drpchannel').focus();
            return false;
        }

        var fromname = "BOK";
        var commname = document.getElementById('txttapid').value;
        var channel = document.getElementById('drpchannel').value;
        var clientcode = document.getElementById('hdnclient').value;
        var agencycode = document.getElementById('hdngencode').value;
        var clientname = document.getElementById('txtclint').value;
        var agencyname = document.getElementById('txtagncy').value;

        if (commname == "") {
            return false;
        }
        var left = 180;
        var top = 250;
        var win = window.open("BMS_COMM_MAST.aspx?fromname=" + fromname + "&channel=" + channel + "&clientcode=" + clientcode + "&agencycode=" + agencycode + "&clientname=" + clientname + "&agencyname=" + agencyname + "&commname=" + commname, 'Search_booking', 'width=500px,height=150px ,status=0,toolbar=0,resizable=0,left=' + left + ',top=' + top + ',screenX=' + left + ',screenY=' + top + ',scrollbars=yes');
        return false;
    }
}


function cheackclient() {
    document.getElementById('txtclint').style.textAlign = "left";
    document.getElementById('txtclint').style.color = "black";

    if (document.getElementById('hdnclient').value == "" && document.getElementById("divclient").style.display == "none" && document.getElementById('txtclint').value != "") {
        if (confirm("This Client Name does not exist in Client Master. Do you want to create ?")) {
//            window.open('ClientMaster.aspx?mode=' + 'NEW' + '&Clientname=' + document.getElementById('txtclint').value + '&centername=' + document.getElementById('hdncenter').value, 'clientmast', 'width=1500px,height=1000px')
            //           document.getElementById('drpbookingtype').focus();

            ClientDetClick();
        }
        else {
            document.getElementById('txtclint').value = "";
            document.getElementById('txtclint').focus();
        }

    }
    document.getElementById('txtclint').style.backgroundColor = "white";
   return false;
}