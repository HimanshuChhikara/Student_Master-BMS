function Entertabfun(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    document.onkeydown = function (e) {
        if (e != undefined) {
            if (e.ctrlKey && e.keyCode === 83) {
                e.preventDefault();
                if (document.getElementById('btnsave1').disabled == false) {
                    // SaveClick();
                    document.getElementById('btnsave1').click();
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

            else if (e.ctrlKey && e.keyCode === 77) {
                e.preventDefault();
                if (document.getElementById('btnedit').disabled == false) {
                    document.getElementById('btnedit').click();
                    return false;
                }
            }


            else if (e.ctrlKey && e.keyCode === 69) {
                e.preventDefault();
                if (document.getElementById('btnlastview').disabled == false) {
                    document.getElementById('btnlastview').click();
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
            else if (e.ctrlKey && e.keyCode === 37) {
                e.preventDefault();
                if (document.getElementById('btnprevious').disabled == false) {
                    document.getElementById('btnprevious').click();
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
            else if (e.ctrlKey && e.keyCode === 36) {
                e.preventDefault();
                if (document.getElementById('btnfirst').disabled == false) {
                    document.getElementById('btnfirst').click();
                    return false;
                }
            }
            else if (e.ctrlKey && e.keyCode === 88) {
                e.preventDefault();
                if (document.getElementById('btnexit').disabled == false) {
                    document.getElementById('btnexit').click();
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
        }



    };
    if (key == 13) {

        if (document.activeElement.id == "txtdealno") {
            if (document.getElementById('txtdealdate').disabled == false)
                document.getElementById('txtdealdate').focus();
            return false;
        }
        if (document.activeElement.id == "txtdealdate") {
            if (document.getElementById('txtdealname').disabled == false)
                document.getElementById('txtdealname').focus();
            return false;
        }
        if (document.activeElement.id == "txtdealname") {
            if (document.getElementById('txtagency').disabled == false)
                document.getElementById('txtagency').focus();
            return false;
        }
        if (document.activeElement.id == "txtagency") {
            if (document.getElementById("divagency").style.display != "none")
            {
                fillAgency(event);


            }
            if (document.getElementById('txtclient').disabled == false)
                document.getElementById('txtclient').focus();
            return false;
        }
        if (document.activeElement.id == "txtclient") {
            if (document.getElementById("divclient").style.display != "none")
            {
                fillClient(event);


            }
            if (document.getElementById('drppaymode').disabled == false)
                document.getElementById('drppaymode').focus();
            return false;
        }
        if (document.activeElement.id == "drppaymode") {
            if (document.getElementById('drpsertax').disabled == false)
                document.getElementById('drpsertax').focus();
            return false;
        }
        if (document.activeElement.id == "drpsertax") {
            if (document.getElementById('txtexec').disabled == false)
                document.getElementById('txtexec').focus();
            return false;
        }

        if (document.activeElement.id == "txtexec") {

            if (document.getElementById("divexec").style.display != "none")
            {
                fillExec(event);


            }
            if (document.getElementById('txtret').disabled == false)
                document.getElementById('txtret').focus();
            return false;
        }
        if (document.activeElement.id == "txtret") {
            if (document.getElementById("divret").style.display != "none")
            {
                fillRet(event);


            }
            if (document.getElementById('txtindustry').disabled == false)
                document.getElementById('txtindustry').focus();
            return false;
        }
        if (document.activeElement.id == "txtindustry") {
            if (document.getElementById("divindus").style.display != "none")
            {
                fillIndustry(event);


            }
            if (document.getElementById('txtproduct').disabled == false)
                document.getElementById('txtproduct').focus();
            return false;
        }
        if (document.activeElement.id == "txtproduct") {
            if (document.getElementById("divprod").style.display != "none")
            {
                fillProduct(event);

            }
            if (document.getElementById('txtbrand').disabled == false)
                document.getElementById('txtbrand').focus();
            return false;
        }
        if (document.activeElement.id == "txtbrand") {
            if (document.getElementById("divbrand").style.display != "none") {
                fillBrand(event);

            }
            if (document.getElementById('txtevent').disabled == false)
                document.getElementById('txtevent').focus();
            return false;
        }
        if (document.activeElement.id == "txtevent") {
            if (document.getElementById("divevent").style.display != "none") {
                fillEvent(event);

            }
            if (document.getElementById('txtsdate').disabled == false)
                document.getElementById('txtsdate').focus();
            return false;
        }
        if (document.activeElement.id == "txtsdate") {
            if (document.getElementById('txtedate').disabled == false)
                document.getElementById('txtedate').focus();
            return false;
        }
        if (document.activeElement.id == "txtedate") {
            if (document.getElementById('txtclosedt').disabled == false)
                document.getElementById('txtclosedt').focus();
            return false;
        }
        if (document.activeElement.id == "txtclosedt") {
            if (document.getElementById('txtcaption').disabled == false)
                document.getElementById('txtcaption').focus();
            return false;
        }
        if (document.activeElement.id == "txtcaption") {
            if (document.getElementById('drpchannel').disabled == false)
                document.getElementById('drpchannel').focus();
            return false;
        }
        if (document.activeElement.id == "drpchannel") {
            if (document.getElementById('txtroadcat').disabled == false)
                document.getElementById('txtroadcat').focus();
            return false;
        }
        if (document.activeElement.id == "txtroadcat") {
            if (document.getElementById("divroadcat").style.display != "none")
            {
                fillroadcat(event);

            }

            if (document.getElementById('txtstime').disabled == false)
                document.getElementById('txtstime').focus();
            return false;
          
        }
        if (document.activeElement.id == "txtstime") {
            if (document.getElementById('txtetime').disabled == false)
                document.getElementById('txtetime').focus();
            return false;
        }
        if (document.activeElement.id == "txtetime") {
            if (document.getElementById('drpadtype').disabled == false)
                document.getElementById('drpadtype').focus();
            return false;
        }
        
        //if (document.activeElement.id == "drpntctype") {
        //    if (document.getElementById('drpadtype').disabled == false)
        //        document.getElementById('drpadtype').focus();
        //    return false;
        //}
        //if (document.activeElement.id == "drpadtype") {
        //    if (document.getElementById('drpspottype').disabled == false)
        //        document.getElementById('drpspottype').focus();
        //    return false;
        //}

        //if (document.activeElement.id == "drporgrept") {
        //    if (document.getElementById('rbtnsponser').checked == true) {
        //        document.getElementById('drpsponsertype').focus();
        //    }
        //    else {
        //        document.getElementById('drpadtype').focus();
        //    }
        //    return false;
        //}
        //if (document.activeElement.id == "drpsponsertype") {
        //    if (document.getElementById('drpadtype').disabled == false)
        //        document.getElementById('drpadtype').focus();
        //    return false;
        //}

        if (document.activeElement.id == "drpadtype") {
            if (document.getElementById('drpspottype').disabled == false)
                document.getElementById('drpspottype').focus();
            return false;
        }
        if (document.activeElement.id == "drpspottype") {
            if (document.getElementById('txtsecspot').disabled == false)
                document.getElementById('txtsecspot').focus();
            return false;
        }

        if (document.activeElement.id == "txtsecspot") {
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
            if (document.getElementById('txtprem').disabled == false)
                document.getElementById('txtprem').focus();
            return false;
        }

        if (document.activeElement.id == "txtprem") {
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
            if (document.getElementById('drpweekday').disabled == false)
                document.getElementById('drpweekday').focus();
            return false;
        }

        if (document.activeElement.id == "drpweekday") {
            if (document.getElementById('btnGSubmit').disabled == false)
                document.getElementById('btnGSubmit').focus();
            return false;
        }
        if (document.activeElement.id == "btnGSubmit") {
            if (document.getElementById('btnsave').disabled == false)
                document.getElementById('btnsave').focus();
            return false;
        }
        if (document.activeElement.id == "btnsave") {
            if (document.getElementById('txtMdealno').disabled == false)
                document.getElementById('txtMdealno').focus();
            return false;
        }
        if (document.activeElement.id == "txtMdealno") {
            if (document.getElementById('txtMdealdt').disabled == false)
                document.getElementById('txtMdealdt').focus();
            return false;
        }
        if (document.activeElement.id == "txtMdealdt") {
            if (document.getElementById('txtMdealname').disabled == false)
                document.getElementById('txtMdealname').focus();
            return false;
        }
        if (document.activeElement.id == "txtMdealname") {
            if (document.getElementById('txtMagency').disabled == false)
                document.getElementById('txtMagency').focus();
            return false;
        }
        if (document.activeElement.id == "txtMagency") {
            if (document.getElementById('txtMclient').disabled == false)
                document.getElementById('txtMclient').focus();
            return false;
        }
        if (document.activeElement.id == "txtMclient") {
            if (document.getElementById('txtMdealno').disabled == false)
                document.getElementById('txtMdealno').focus();
            return false;
        }
        //=====

        if (document.activeElement.id == "lstchannel") {
            FillChannel();
            return false;
        }
       
        //else if (document.activeElement.id == "lstroadcat") {
        //    fillroadcat();
        //    return false;
        //} //
        else if (document.activeElement.id == "lstagency") {
            fillAgency();
            return false;
        }
        else if (document.activeElement.id == "lstclient") {
            fillClient();
            return false;
        }
        else if (document.activeElement.id == "lstexec") {
            fillExec();
            return false;
        }
        else if (document.activeElement.id == "lstret") {
            fillRet();
            return false;
        }
        else if (document.activeElement.id == "lstindus") {
            fillIndustry();
            return false;
        }
        else if (document.activeElement.id == "lstprod") {
            fillProduct();
            return false;
        }
        else if (document.activeElement.id == "lstbrand") {
            fillBrand();
            return false;
        }
        else if (document.activeElement.id == "lstevent") {
            fillEvent();
            return false;
        }
        else if (document.activeElement.id == "lstroadcat") {
            fillroadcat();
            return false;
        }
        else if (document.activeElement.type == "button" || document.activeElement.type == "submit" || document.activeElement.type == "image") {
            event.keyCode = 13;
            return key;
        }
        else {
            event.keyCode = 9;
            return event.keyCode;
        }

    }
    else if (key == 113) {
        if (document.activeElement.id == "txtagency") {
            if (document.getElementById('txtagency').value.length <= 2) {
                alert("Please Enter Minimum 3 Character For Searching.");
                document.getElementById('txtagency').value = "";
                return false;
            }

            BindAgency("F2");
        }
        else if (document.activeElement.id == "txtclient") {
            if (document.getElementById('txtclient').value.length <= 2) {
                alert("Please Enter Minimum 3 Character For Searching.");
                document.getElementById('txtclient').value = "";
                return false;
            }
            BindClient("F2");
        }
        else if (document.activeElement.id == "txtexec") {
            BindExec("F2");
        }
        else if (document.activeElement.id == "txtret") {
            BindRet("F2");
        }
        else if (document.activeElement.id == "txtindustry") {
            BindIndustry("F2");
        }
        else if (document.activeElement.id == "txtproduct") {
            BindProduct("F2");
        }
        else if (document.activeElement.id == "txtbrand") {
            BindBrand("F2");
        }
        else if (document.activeElement.id == "txtevent") {
            BindEvent("F2");
        }
        else if (document.activeElement.id == "drpchannel") {
            //  BindChannel("F2");
        }
        //else if (document.activeElement.id == "txtnProgName") {
        //    Bindprogram("F2");
        //}
        else if (document.activeElement.id == "txtroadcat") {
            BindRoadCat("F2");
        }
    }
    else if ((key == 8) ) {
        if (document.activeElement.id == "drpchannel") {
            document.getElementById('hdnchannel').value = "";
            //GetRateDetails();
        }
        //else if (document.activeElement.id == "txtnProgName") {
        //    document.getElementById('hiddenprogram').value = "";
        //    GetRateDetails();
        //}
        else if (document.activeElement.id == "txtroadcat") {
            document.getElementById('hdnroadcat').value = "";
           // GetRateDetails();
        }
        else if (document.activeElement.id == "txtagency") {
            document.getElementById('hdnagency').value = "";
        }
        else if (document.activeElement.id == "txtclient") {
            document.getElementById('hdnclient').value = "";
        }
        else if (document.activeElement.id == "txtexec") {
            document.getElementById('hdnexec').value = "";
        }
        else if (document.activeElement.id == "txtret") {
            document.getElementById('hdnret').value = "";
        }
        else if (document.activeElement.id == "txtindustry") {
            document.getElementById('hdnindustry').value = "";
        }
        else if (document.activeElement.id == "txtproduct") {
            document.getElementById('hdnproduct').value = "";
        }
        else if (document.activeElement.id == "txtbrand") {
            document.getElementById('hdnbrand').value = "";
        }
        else if (document.activeElement.id == "txtevent") {
            document.getElementById('hdnevent').value = "";
        }
    }
    else if (key == 27 || key==16 || key==17) {
        if (document.activeElement.id == "drpchannel" || document.activeElement.id == "lstchannel") {
            document.getElementById("divchannel").style.display = "none";
            document.getElementById('drpchannel').focus();
            return false;
        }
        //else if (document.activeElement.id == "txtnProgName" || document.activeElement.id == "istprogram") {
        //    document.getElementById("divprogram").style.display = "none";
        //    document.getElementById('txtnProgName').focus();
        //    return false;
        //}
        else if (document.activeElement.id == "txtroadcat" || document.activeElement.id == "lstroadcat") {
            document.getElementById("divroadcat").style.display = "none";
            document.getElementById('txtroadcat').focus();
            return false;
        }
        else if (document.activeElement.id == "txtagency" || document.activeElement.id == "lstagency") {
            document.getElementById("divagency").style.display = "none";
            document.getElementById('txtagency').focus();
            return false;
        }
        else if (document.activeElement.id == "txtclient" || document.activeElement.id == "lstclient") {
            document.getElementById("divclient").style.display = "none";
            document.getElementById('txtclient').focus();
            return false;
        }
        else if (document.activeElement.id == "txtexec" || document.activeElement.id == "lstexec") {
            document.getElementById("divexec").style.display = "none";
            document.getElementById('txtexec').focus();
            return false;
        }
        else if (document.activeElement.id == "txtret" || document.activeElement.id == "lstret") {
            document.getElementById("divret").style.display = "none";
            document.getElementById('txtret').focus();
            return false;
        }
        else if (document.activeElement.id == "txtindustry" || document.activeElement.id == "lstindus") {
            document.getElementById("divindus").style.display = "none";
            document.getElementById('txtindustry').focus();
            return false;
        }
        else if (document.activeElement.id == "txtproduct" || document.activeElement.id == "lstprod") {
            document.getElementById("divprod").style.display = "none";
            document.getElementById('txtproduct').focus();
            return false;
        }
        else if (document.activeElement.id == "txtbrand" || document.activeElement.id == "lstbrand") {
            document.getElementById("divbrand").style.display = "none";
            document.getElementById('txtbrand').focus();
            return false;
        }
        else if (document.activeElement.id == "txtevent" || document.activeElement.id == "lstevent") {
            document.getElementById("divevent").style.display = "none";
            document.getElementById('txtevent').focus();
            return false;
        }
    }
    else if (key == 9 || key == 37 || key == 39) {
        return true;
    }
    else if (key == 40) {

        if (document.activeElement.id == "drpchannel" && document.getElementById("divchannel").style.display == "block") {
            document.getElementById("lstchannel").focus();
        }
       
        else if (document.activeElement.id == "txtroadcat" && document.getElementById("divroadcat").style.display == "block") {
            document.getElementById("lstroadcat").focus();
        } 
        else if (document.activeElement.id == "txtagency" && document.getElementById("divagency").style.display == "block") {
            document.getElementById("lstagency").focus();
        }
        else if (document.activeElement.id == "txtclient" && document.getElementById("divclient").style.display == "block") {
            document.getElementById("lstclient").focus();
        }
        else if (document.activeElement.id == "txtexec" && document.getElementById("divexec").style.display == "block") {
            document.getElementById("lstexec").focus();
        }
        else if (document.activeElement.id == "txtret" && document.getElementById("divret").style.display == "block") {
            document.getElementById("lstret").focus();
        }
        else if (document.activeElement.id == "txtindustry" && document.getElementById("divindus").style.display == "block") {
            document.getElementById("lstindus").focus();
        }
        else if (document.activeElement.id == "txtproduct" && document.getElementById("divprod").style.display == "block") {
            document.getElementById("lstprod").focus();
        }
        else if (document.activeElement.id == "txtbrand" && document.getElementById("divbrand").style.display == "block") {
            document.getElementById("lstbrand").focus();
        }
        else if (document.activeElement.id == "txtevent" && document.getElementById("divevent").style.display == "block") {
            document.getElementById("lstevent").focus();
        }
    }
    else if (key == 38) {
        if (document.activeElement.id == "lstchannel" && document.getElementById("divchannel").style.display == "block") {
            if (document.getElementById('lstchannel').value == '0') {
                document.getElementById('drpchannel').focus();
            }
        }
        if (document.activeElement.id == "istprogram" && document.getElementById("divprogram").style.display == "block") {
            if (document.getElementById('istprogram').value == '0') {
                document.getElementById('txtnProgName').focus();
            }
        }
        else if (document.activeElement.id == "lstroadcat" && document.getElementById("divroadcat").style.display == "block") {
            if (document.getElementById('lstroadcat').value == '0') {
                document.getElementById('txtroadcat').focus();
            }
        }
        if (document.activeElement.id == "lstagency" && document.getElementById("divagency").style.display == "block") {
            if (document.getElementById('lstagency').value == '0') {
                document.getElementById('txtagency').focus();
            }
        }
        else if (document.activeElement.id == "lstclient" && document.getElementById("divclient").style.display == "block") {
            if (document.getElementById('lstclient').value == '0') {
                document.getElementById('txtclient').focus();
            }
        }
        if (document.activeElement.id == "lstexec" && document.getElementById("divexec").style.display == "block") {
            if (document.getElementById('lstexec').value == '0') {
                document.getElementById('txtexec').focus();
            }
        }
        else if (document.activeElement.id == "lstret" && document.getElementById("divret").style.display == "block") {
            if (document.getElementById('lstret').value == '0') {
                document.getElementById('txtret').focus();
            }
        }
        if (document.activeElement.id == "lstindus" && document.getElementById("divindus").style.display == "block") {
            if (document.getElementById('lstindus').value == '0') {
                document.getElementById('txtindustry').focus();
            }
        }
        else if (document.activeElement.id == "lstprod" && document.getElementById("divprod").style.display == "block") {
            if (document.getElementById('lstprod').value == '0') {
                document.getElementById('txtproduct').focus();
            }
        }
        if (document.activeElement.id == "lstbrand" && document.getElementById("divbrand").style.display == "block") {
            if (document.getElementById('lstbrand').value == '0') {
                document.getElementById('txtbrand').focus();
            }
        }
        else if (document.activeElement.id == "lstevent" && document.getElementById("divevent").style.display == "block") {
            if (document.getElementById('lstevent').value == '0') {
                document.getElementById('txtevent').focus();
            }
        }
    }
        else if( key != 46){

        if (document.activeElement.id == "drpchannel") {
            //BindChannel("G");
        }
        //else if (document.activeElement.id == "txtnProgName") {
        //    Bindprogram("G");
        //}
        //else if (document.activeElement.id == "txtroadcat") {
        //    BindRoadCat("G");
        //}
        else if (document.activeElement.id == "txtagency") {
            BindAgency("G");
        }
        else if (document.activeElement.id == "txtclient") {
            BindClient("G");
        }
        else if (document.activeElement.id == "txtexec") {
            BindExec("G");
        }
        else if (document.activeElement.id == "txtret") {
            BindRet("G");
        }
        else if (document.activeElement.id == "txtindustry") {
            BindIndustry("G");
        }
        else if (document.activeElement.id == "txtproduct") {
            BindProduct("G");
        }
        else if (document.activeElement.id == "txtbrand") {
            BindBrand("G");
        }
        else if (document.activeElement.id == "txtevent") {
            BindEvent("G");
        }
        }
    else {
        return true;
    }
   /// return false;
}
function BindAgency(PSEACH) {
    aTag = eval(document.getElementById("txtagency"))
    var btag;
    var leftpos = 0;
    var toppos = 5;
    do {
        aTag = eval(aTag.offsetParent);
        leftpos += aTag.offsetLeft;
        toppos += aTag.offsetTop;
        btag = eval(aTag)
    } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
    var tot = document.getElementById('divagency').scrollLeft;
    var scrolltop = document.getElementById('divagency').scrollTop;
    document.getElementById('divagency').style.left = document.getElementById("txtagency").offsetLeft + leftpos - tot + "px";
    document.getElementById('divagency').style.top = document.getElementById("txtagency").offsetTop + toppos - scrolltop + 20 + "px"; //"510px";
    var PCOMP_CODE = document.getElementById('hiddencompcode').value;
    var PCENT_CODE = document.getElementById('hiddencenter').value;
    var PDESC = document.getElementById('txtagency').value.toUpperCase();
    var PEXTRA = "";
    var PEXTRA1 = "";
    var PEXTRA2 = "";

    var resval = Deal_Master.BindAgency(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2);
    bindagency_callback(resval);
}
function bindagency_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("lstagency");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("------------- Select  Agency --------------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {
        document.getElementById("divagency").style.display = "block";

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].AGENCY_NAME, ds.Tables[0].Rows[i].AGENCY_CODE_SUBCODE);
        }


    }

    document.getElementById('hdnagency').value = "";
    document.getElementById("lstagency").value = "0";
    document.getElementById("lstagency").selectedIndex = 1;
    return false;
}

function fillAgency() {

    if (document.getElementById("lstagency").value == "0") {
        //alert("Please Select Agency");
        return false;
    }
    else {
        document.getElementById("divagency").style.display = "none";
        var lstvalue = document.getElementById('lstagency').value;
        for (var k = 0; k < document.getElementById("lstagency").length; k++) {
            if (document.getElementById('lstagency').options[k].value == lstvalue) {
                document.getElementById('hdnagency').value = document.getElementById('lstagency').options[k].value;
                if (browser != "Microsoft Internet Explorer")
                    document.getElementById('txtagency').value = document.getElementById('lstagency').options[k].textContent;
                else
                    document.getElementById('txtagency').value = document.getElementById('lstagency').options[k].innerText;

                break;
            }
        }
    }
    document.getElementById('txtagency').focus();
    fillpaymode();
    return false;
}
function fillpaymode() {
    var pbookdate = document.getElementById('txtdealdate').value;
    var padtype = "DS";
    var agencode = document.getElementById('hdnagency').value;
    var pcompcode = document.getElementById('hiddencompcode').value;
    var dateformat = document.getElementById('hiddendateformat').value;
    var CENT_CODE = document.getElementById('hiddencenter').value;
    var BRANCH_CODE = document.getElementById('hdnbranch').value;
    var EXTRA = "";
    var EXTRA1 = "";

    document.getElementById("drppaymode").options.length = 1;

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
        var res1 = Deal_Master.Bindagpaymode(agencode, pcompcode, pbookdate, padtype);
        callbindagpaymode(res1);


    }
}


function callbindagpaymode(res) {

    var ds = res.value;
    var pkgitem = document.getElementById("drppaymode");

    if (ds != null && typeof (ds) == "object" && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            pkgitem.options[pkgitem.options.length] = new Option(ds.Tables[0].Rows[i].PAYMODE_DESC, ds.Tables[0].Rows[i].PAYMODE_CODE);
        }
        document.getElementById("drppaymode").value = ds.Tables[0].Rows[0].DEFAULT_PAYMODE;
    }


    return false;
}

function BindClient(PSEACH) {
    aTag = eval(document.getElementById("txtclient"))
    var btag;
    var leftpos = 0;
    var toppos = 5;
    do {
        aTag = eval(aTag.offsetParent);
        leftpos += aTag.offsetLeft;
        toppos += aTag.offsetTop;
        btag = eval(aTag)
    } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
    var tot = document.getElementById('divclient').scrollLeft;
    var scrolltop = document.getElementById('divclient').scrollTop;
    document.getElementById('divclient').style.left = document.getElementById("txtclient").offsetLeft + leftpos - tot + "px";
    document.getElementById('divclient').style.top = document.getElementById("txtclient").offsetTop + toppos - scrolltop + 20 + "px"; //"510px";
    var PCOMP_CODE = document.getElementById('hiddencompcode').value;
    var PCENT_CODE = "";
    var PDESC = document.getElementById('txtclient').value.toUpperCase();
    var PEXTRA = "";
    var PEXTRA1 = "";
    var PEXTRA2 = "";

    var resval = Deal_Master.BindClient(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2);
    bindcl_callback(resval);
}
function bindcl_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("lstclient");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("------------- Select  Client --------------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {
        document.getElementById("divclient").style.display = "block";

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].CLIENT_NAME, ds.Tables[0].Rows[i].CLIENT_CODE);
        }


    }

    document.getElementById('hdnclient').value = "";
    document.getElementById("lstclient").value = "0";
    document.getElementById("lstclient").selectedIndex = 1;
    return false;
}

function fillClient() {

    if (document.getElementById("lstclient").value == "0") {
        //  alert("Please Select Prime Time");
        return false;
    }
    else {
        document.getElementById("divclient").style.display = "none";
        var lstvalue = document.getElementById('lstclient').value;
        for (var k = 0; k < document.getElementById("lstclient").length; k++) {
            if (document.getElementById('lstclient').options[k].value == lstvalue) {
                document.getElementById('hdnclient').value = document.getElementById('lstclient').options[k].value;
                if (browser != "Microsoft Internet Explorer")
                    document.getElementById('txtclient').value = document.getElementById('lstclient').options[k].textContent;
                else
                    document.getElementById('txtclient').value = document.getElementById('lstclient').options[k].innerText;

                break;
            }
        }
    }
    document.getElementById('txtclient').focus();
    return false;
}
function BindExec(PSEACH) {
    aTag = eval(document.getElementById("txtexec"))
    var btag;
    var leftpos = 0;
    var toppos = 5;
    do {
        aTag = eval(aTag.offsetParent);
        leftpos += aTag.offsetLeft;
        toppos += aTag.offsetTop;
        btag = eval(aTag)
    } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
    var tot = document.getElementById('divexec').scrollLeft;
    var scrolltop = document.getElementById('divexec').scrollTop;
    document.getElementById('divexec').style.left = document.getElementById("txtexec").offsetLeft + leftpos - tot + "px";
    document.getElementById('divexec').style.top = document.getElementById("txtexec").offsetTop + toppos - scrolltop + 20 + "px"; //"510px";
    var PCOMP_CODE = document.getElementById('hiddencompcode').value;
    var PEXEC_TEAM = "";
    var PDESC = document.getElementById('txtexec').value.toUpperCase();
    var PEXTRA = "";
    var PEXTRA1 = "";

    var resval = Deal_Master.BindExec(PCOMP_CODE, PEXEC_TEAM, PDESC, PSEACH, PEXTRA, PEXTRA1);
    bindexec_callback(resval);
}
function bindexec_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("lstexec");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("------------- Select  Executive --------------", "0");
    if (ds != null && ds.Rows.length > 0) {
        document.getElementById("divexec").style.display = "block";

        for (var i = 0; i < ds.Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Rows[i].EXEC_NAME, ds.Rows[i].EXEC_CODE);
        }


    }

    document.getElementById('hdnexec').value = "";
    document.getElementById("lstexec").value = "0";
    document.getElementById("lstexec").selectedIndex = 1;
    return false;
}

function fillExec() {

    if (document.getElementById("lstexec").value == "0") {
        // alert("Please Select Executive");
        return false;
    }
    else {
        document.getElementById("divexec").style.display = "none";
        var lstvalue = document.getElementById('lstexec').value;
        for (var k = 0; k < document.getElementById("lstexec").length; k++) {
            if (document.getElementById('lstexec').options[k].value == lstvalue) {
                document.getElementById('hdnexec').value = document.getElementById('lstexec').options[k].value;
                if (browser != "Microsoft Internet Explorer")
                    document.getElementById('txtexec').value = document.getElementById('lstexec').options[k].textContent;
                else
                    document.getElementById('txtexec').value = document.getElementById('lstexec').options[k].innerText;

                break;
            }
        }
    }
    document.getElementById('txtexec').focus();
    return false;
}
function BindRet(PSEACH) {
    aTag = eval(document.getElementById("txtret"))
    var btag;
    var leftpos = 0;
    var toppos = 5;
    do {
        aTag = eval(aTag.offsetParent);
        leftpos += aTag.offsetLeft;
        toppos += aTag.offsetTop;
        btag = eval(aTag)
    } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
    var tot = document.getElementById('divret').scrollLeft;
    var scrolltop = document.getElementById('divret').scrollTop;
    document.getElementById('divret').style.left = document.getElementById("txtret").offsetLeft + leftpos - tot  + "px";
    document.getElementById('divret').style.top = document.getElementById("txtret").offsetTop + toppos - scrolltop + 20 + "px"; //"510px";
    var PCOMP_CODE = document.getElementById('hiddencompcode').value;
    var PCENT_CODE = document.getElementById('hiddencenter').value;
    var PCHANNEL = "";
    var PDESC = document.getElementById('txtret').value.toUpperCase();
    var PEXTRA = "";
    var PEXTRA1 = "";

    var resval = Deal_Master.BindRetainer(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1);
    bindret_callback(resval);
}
function bindret_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("lstret");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("------------- Select Retainer --------------", "0");
    if (ds != null && ds.Rows.length > 0) {
        document.getElementById("divret").style.display = "block";

        for (var i = 0; i < ds.Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Rows[i].RET_NAME, ds.Rows[i].RET_CODE);
        }


    }

    document.getElementById('hdnret').value = "";
    document.getElementById("lstret").value = "0";
    document.getElementById("lstret").selectedIndex = 1;
    return false;
}

function fillRet() {

    if (document.getElementById("lstret").value == "0") {
        //  alert("Please Select Retainer");
        return false;
    }
    else {
        document.getElementById("divret").style.display = "none";
        var lstvalue = document.getElementById('lstret').value;
        for (var k = 0; k < document.getElementById("lstret").length; k++) {
            if (document.getElementById('lstret').options[k].value == lstvalue) {
                document.getElementById('hdnret').value = document.getElementById('lstret').options[k].value;
                if (browser != "Microsoft Internet Explorer")
                    document.getElementById('txtret').value = document.getElementById('lstret').options[k].textContent;
                else
                    document.getElementById('txtret').value = document.getElementById('lstret').options[k].innerText;

                break;
            }
        }
    }
    document.getElementById('txtret').focus();
    return false;
}
function BindIndustry(PSEACH) {
    aTag = eval(document.getElementById("txtindustry"))
    var btag;
    var leftpos = 0;
    var toppos = 5;
    do {
        aTag = eval(aTag.offsetParent);
        leftpos += aTag.offsetLeft;
        toppos += aTag.offsetTop;
        btag = eval(aTag)
    } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
    var tot = document.getElementById('divindus').scrollLeft;
    var scrolltop = document.getElementById('divindus').scrollTop;
    document.getElementById('divindus').style.left = document.getElementById("txtindustry").offsetLeft + leftpos - tot + "px";
    document.getElementById('divindus').style.top = document.getElementById("txtindustry").offsetTop + toppos - scrolltop + 20 + "px"; //"510px";
    var PCOMP_CODE = document.getElementById('hiddencompcode').value;
    var PCENT_CODE = document.getElementById('hiddencenter').value;
    var PDESC = document.getElementById('txtindustry').value.toUpperCase();
    var PEXTRA = "";
    var PEXTRA1 = "";
    var PEXTRA2 = "";

    var resval = Deal_Master.BindIndustry(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2);
    bindIndus_callback(resval);
}
function bindIndus_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("lstindus");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("------------- Select  Industry --------------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {
        document.getElementById("divindus").style.display = "block";

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].INDUSTRY_NAME, ds.Tables[0].Rows[i].INDUSTRY_CODE);
        }


    }

    document.getElementById('hdnindustry').value = "";
    document.getElementById("lstindus").value = "0";
    document.getElementById("lstindus").selectedIndex = 1;
    return false;
}

function fillIndustry() {

    if (document.getElementById("lstindus").value == "0") {
        // alert("Please Select Industry ");
        return false;
    }
    else {
        document.getElementById("divindus").style.display = "none";
        var lstvalue = document.getElementById('lstindus').value;
        for (var k = 0; k < document.getElementById("lstindus").length; k++) {
            if (document.getElementById('lstindus').options[k].value == lstvalue) {
                document.getElementById('hdnindustry').value = document.getElementById('lstindus').options[k].value;
                if (browser != "Microsoft Internet Explorer")
                    document.getElementById('txtindustry').value = document.getElementById('lstindus').options[k].textContent;
                else
                    document.getElementById('txtindustry').value = document.getElementById('lstindus').options[k].innerText;

                break;
            }
        }
    }
    document.getElementById('txtindustry').focus();
    return false;
}
function BindProduct(PSEACH) {
    aTag = eval(document.getElementById("txtproduct"))
    var btag;
    var leftpos = 0;
    var toppos = 5;
    do {
        aTag = eval(aTag.offsetParent);
        leftpos += aTag.offsetLeft;
        toppos += aTag.offsetTop;
        btag = eval(aTag)
    } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
    var tot = document.getElementById('divprod').scrollLeft;
    var scrolltop = document.getElementById('divprod').scrollTop;
    document.getElementById('divprod').style.left = document.getElementById("txtproduct").offsetLeft + leftpos - tot + "px";
    document.getElementById('divprod').style.top = document.getElementById("txtproduct").offsetTop + toppos - scrolltop + 20 + "px"; //"510px";
    var PCOMP_CODE = document.getElementById('hiddencompcode').value;
    var PCENT_CODE = document.getElementById('hiddencenter').value;
    var PDESC = document.getElementById('txtproduct').value.toUpperCase();
    var PEXTRA = "";
    var PEXTRA1 = "";
    var PEXTRA2 = "";

    var resval = Deal_Master.BindProduct(PCOMP_CODE, PCENT_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2);
    bindProd_callback(resval);
}
function bindProd_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("lstprod");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("------------- Select  Product --------------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {
        document.getElementById("divprod").style.display = "block";

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].PRODUCT_NAME, ds.Tables[0].Rows[i].PRODUCT_CODE);
        }


    }

    document.getElementById('hdnproduct').value = "";
    document.getElementById("lstprod").value = "0";
    document.getElementById("lstprod").selectedIndex = 1;
    return false;
}

function fillProduct() {

    if (document.getElementById("lstprod").value == "0") {
        //alert("Please Select Product ");
        return false;
    }
    else {
        document.getElementById("divprod").style.display = "none";
        var lstvalue = document.getElementById('lstprod').value;
        for (var k = 0; k < document.getElementById("lstprod").length; k++) {
            if (document.getElementById('lstprod').options[k].value == lstvalue) {
                document.getElementById('hdnproduct').value = document.getElementById('lstprod').options[k].value;
                if (browser != "Microsoft Internet Explorer")
                    document.getElementById('txtproduct').value = document.getElementById('lstprod').options[k].textContent;
                else
                    document.getElementById('txtproduct').value = document.getElementById('lstprod').options[k].innerText;

                break;
            }
        }
    }
    document.getElementById('txtproduct').focus();
    return false;
}
function BindBrand(PSEACH) {
    aTag = eval(document.getElementById("txtbrand"))
    var btag;
    var leftpos = 0;
    var toppos = 5;
    do {
        aTag = eval(aTag.offsetParent);
        leftpos += aTag.offsetLeft;
        toppos += aTag.offsetTop;
        btag = eval(aTag)
    } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
    var tot = document.getElementById('divbrand').scrollLeft;
    var scrolltop = document.getElementById('divbrand').scrollTop;
    document.getElementById('divbrand').style.left = document.getElementById("txtbrand").offsetLeft + leftpos - tot + "px";
    document.getElementById('divbrand').style.top = document.getElementById("txtbrand").offsetTop + toppos - scrolltop + 20 + "px"; //"510px";
    var PCOMP_CODE = document.getElementById('hiddencompcode').value;
    var PDESC = document.getElementById('txtbrand').value.toUpperCase();
    var PEXTRA = "";
    var PEXTRA1 = "";
    var PEXTRA2 = "";

    var resval = Deal_Master.BindBrand(PCOMP_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2);
    bindbrand_callback(resval);
}
function bindbrand_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("lstbrand");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("------------- Select  Brand --------------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {
        document.getElementById("divbrand").style.display = "block";

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].BRAND_NAME, ds.Tables[0].Rows[i].BRAND_CODE);
        }


    }

    document.getElementById('hdnbrand').value = "";
    document.getElementById("lstbrand").value = "0";
    document.getElementById("lstbrand").selectedIndex = 1;
    return false;
}

function fillBrand() {

    if (document.getElementById("lstbrand").value == "0") {
        // alert("Please Select Brand");
        return false;
    }
    else {
        document.getElementById("divbrand").style.display = "none";
        var lstvalue = document.getElementById('lstbrand').value;
        for (var k = 0; k < document.getElementById("lstbrand").length; k++) {
            if (document.getElementById('lstbrand').options[k].value == lstvalue) {
                document.getElementById('hdnbrand').value = document.getElementById('lstbrand').options[k].value;
                if (browser != "Microsoft Internet Explorer")
                    document.getElementById('txtbrand').value = document.getElementById('lstbrand').options[k].textContent;
                else
                    document.getElementById('txtbrand').value = document.getElementById('lstbrand').options[k].innerText;

                break;
            }
        }
    }
    document.getElementById('txtbrand').focus();
    return false;
}
function BindEvent(PSEACH) {
    aTag = eval(document.getElementById("txtevent"))
    var btag;
    var leftpos = 0;
    var toppos = 5;
    do {
        aTag = eval(aTag.offsetParent);
        leftpos += aTag.offsetLeft;
        toppos += aTag.offsetTop;
        btag = eval(aTag)
    } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
    var tot = document.getElementById('divevent').scrollLeft;
    var scrolltop = document.getElementById('divevent').scrollTop;
    document.getElementById('divevent').style.left = document.getElementById("txtevent").offsetLeft + leftpos - tot  + "px";
    document.getElementById('divevent').style.top = document.getElementById("txtevent").offsetTop + toppos - scrolltop + 20 + "px"; //"510px";
    var PCOMP_CODE = document.getElementById('hiddencompcode').value;
    var PDESC = document.getElementById('txtevent').value.toUpperCase();
    var PEXTRA = "";
    var PEXTRA1 = "";
    var PEXTRA2 = "";

    var resval = Deal_Master.BindEvent(PCOMP_CODE, PDESC, PSEACH, PEXTRA, PEXTRA1, PEXTRA2);
    bindevent_callback(resval);
}
function bindevent_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("lstevent");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("------------- Select Event --------------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {
        document.getElementById("divevent").style.display = "block";

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].EVENT_NAME, ds.Tables[0].Rows[i].EVENT_CODE);
        }


    }

    document.getElementById('hdnevent').value = "";
    document.getElementById("lstevent").value = "0";
    document.getElementById("lstevent").selectedIndex = 1;
    return false;
}

function fillEvent() {

    if (document.getElementById("lstevent").value == "0") {
        //alert("Please Select Event");
        return false;
    }
    else {
        document.getElementById("divevent").style.display = "none";
        var lstvalue = document.getElementById('lstevent').value;
        for (var k = 0; k < document.getElementById("lstevent").length; k++) {
            if (document.getElementById('lstevent').options[k].value == lstvalue) {
                document.getElementById('hdnevent').value = document.getElementById('lstevent').options[k].value;
                if (browser != "Microsoft Internet Explorer")
                    document.getElementById('txtevent').value = document.getElementById('lstevent').options[k].textContent;
                else
                    document.getElementById('txtevent').value = document.getElementById('lstevent').options[k].innerText;

                break;
            }
        }
    }
    document.getElementById('txtevent').focus();
    return false;
}


function BindRoadCat(PSEACH) {
    aTag = eval(document.getElementById("txtroadcat"))
    var btag;
    var leftpos = 0;
    var toppos = 5;
    do {
        aTag = eval(aTag.offsetParent);
        leftpos += aTag.offsetLeft;
        toppos += aTag.offsetTop;
        btag = eval(aTag)
    } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
    var tot = document.getElementById('divroadcat').scrollLeft;
    var scrolltop = document.getElementById('divroadcat').scrollTop;
    document.getElementById('divroadcat').style.left = document.getElementById("txtroadcat").offsetLeft + leftpos - tot + "px";
    document.getElementById('divroadcat').style.top = document.getElementById("txtroadcat").offsetTop + toppos - scrolltop + 20 + "px"; //"510px";

    var PCOMPCODE = document.getElementById('hiddencompcode').value;
    var PCHANNELCODE = document.getElementById('drpchannel').value.toUpperCase();
    var PFROMETIEM = "";
    var PTOTIME = "";
    //        var pextra1 = "";
    Deal_Master.Bindprime(PCHANNELCODE, PFROMETIEM, PTOTIME, PCOMPCODE, bindroadcat_callback);
    // bindroadcat_callback(resval);
}
function bindroadcat_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("lstroadcat");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select Prime Time.---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {
        document.getElementById("divroadcat").style.display = "block";

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].DESCRIPTION, ds.Tables[0].Rows[i].TIME_CODE + "-" + ds.Tables[0].Rows[i].MAIN_FROM_TIME + "-" + ds.Tables[0].Rows[i].MAIN_TO_TIME);
        }


    }

    document.getElementById('hdnroadcat').value = "";
    document.getElementById("lstroadcat").value = "0";
    document.getElementById("lstroadcat").selectedIndex = 1;
    return false;
}

function fillroadcat() {

    if (document.getElementById("lstroadcat").value == "0") {
        //  alert("Please Select Prime Time");
        return false;
    }
    else {
        document.getElementById("divroadcat").style.display = "none";
        var lstvalue = document.getElementById('lstroadcat').value;
        for (var k = 0; k < document.getElementById("lstroadcat").length; k++) {
            if (document.getElementById('lstroadcat').options[k].value == lstvalue) {
                //  document.getElementById('hdnroadcat').value = document.getElementById('lstroadcat').options[k].value;
                var from_to = document.getElementById('lstroadcat').options[k].value;
                from_to = from_to.split("-");
                document.getElementById('hdnroadcat').value = from_to[0];
                document.getElementById('txtstime').value = from_to[1];
                document.getElementById('txtetime').value = from_to[2];

                if (browser != "Microsoft Internet Explorer")
                    document.getElementById('txtroadcat').value = document.getElementById('lstroadcat').options[k].textContent;
                else
                    document.getElementById('txtroadcat').value = document.getElementById('lstroadcat').options[k].innerText;

                break;
            }
        }
    }
    //GetRateDetails();
    document.getElementById('txtroadcat').focus();
    document.getElementById('btnhidden').click();
   
    return false;
}

function FocusClient() {
    if (document.getElementById('txtclient').value == "-------- Select Client Name---------") {
        document.getElementById('txtclient').value = "";
    }
    document.getElementById('txtclient').style.textAlign = "left";
    document.getElementById('txtclient').style.color = "black";
    document.getElementById('txtclient').style.backgroundColor = "#99FFFF";
}
function BlurClient() {
    if (document.getElementById('txtclient').value == "") {
        document.getElementById('txtclient').value = "";
        document.getElementById('txtclient').value = "-------- Select Client Name---------";
        document.getElementById('txtclient').style.textAlign = "center";
        document.getElementById('txtclient').style.color = "gray";
    }

    else {
        document.getElementById('txtclient').style.textAlign = "left";
        document.getElementById('txtclient').style.color = "black";
    }
    if (document.getElementById('hdnclient').value == "") {
        document.getElementById('txtclient').value = "";
        document.getElementById('txtclient').value = "-------- Select Client Name---------";
        document.getElementById('txtclient').style.textAlign = "center";
        document.getElementById('txtclient').style.color = "gray";
    }
    document.getElementById('txtclient').style.backgroundColor = "white";
    return false;
}

function FocusAgency() {
    if (document.getElementById('txtagency').value == "-------- Select Agency Name---------") {
        document.getElementById('txtagency').value = "";
    }
    document.getElementById('txtagency').style.textAlign = "left";
    document.getElementById('txtagency').style.color = "black";
    document.getElementById('txtagency').style.backgroundColor = "#99FFFF";
}
function BlurAgency() {
    if (document.getElementById('txtagency').value == "") {
        document.getElementById('txtagency').value = "";
        document.getElementById('txtagency').value = "-------- Select Agency Name---------";
        document.getElementById('txtagency').style.textAlign = "center";
        document.getElementById('txtagency').style.color = "gray";
    }

    else {
        document.getElementById('txtagency').style.textAlign = "left";
        document.getElementById('txtagency').style.color = "black";
    }
    if (document.getElementById('hdnagency').value == "") {
        document.getElementById('txtagency').value = "";
        document.getElementById('txtagency').value = "-------- Select Agency Name---------";
        document.getElementById('txtagency').style.textAlign = "center";
        document.getElementById('txtagency').style.color = "gray";
    }
    document.getElementById('txtagency').style.backgroundColor = "white";
    return false;
}

function Focusexecutive() {
    if (document.getElementById('txtexec').value == "-------- Select Executive ---------") {
        document.getElementById('txtexec').value = "";
    }
    document.getElementById('txtexec').style.textAlign = "left";
    document.getElementById('txtexec').style.color = "black";
    document.getElementById('txtexec').style.backgroundColor = "#99FFFF";
}
function Blurexecutive() {
    if (document.getElementById('txtexec').value == "") {
        document.getElementById('txtexec').value = "";
        document.getElementById('txtexec').value = "-------- Select Executive ---------";
        document.getElementById('txtexec').style.textAlign = "center";
        document.getElementById('txtexec').style.color = "gray";
    }

    else {
        document.getElementById('txtexec').style.textAlign = "left";
        document.getElementById('txtexec').style.color = "black";
    }
    if (document.getElementById('hdnexec').value == "") {
        document.getElementById('txtexec').value = "";
        document.getElementById('txtexec').value = "-------- Select Executive ---------";
        document.getElementById('txtexec').style.textAlign = "center";
        document.getElementById('txtexec').style.color = "gray";
    }
    document.getElementById('txtexec').style.backgroundColor = "white";
    return false;
}


function Focusretainer() {
    if (document.getElementById('txtret').value == "-------- Select Retainer ---------") {
        document.getElementById('txtret').value = "";
    }
    document.getElementById('txtret').style.textAlign = "left";
    document.getElementById('txtret').style.color = "black";
    document.getElementById('txtret').style.backgroundColor = "#99FFFF";
}
function Blurretainer() {
    if (document.getElementById('txtret').value == "") {
        document.getElementById('txtret').value = "";
        document.getElementById('txtret').value = "-------- Select Retainer ---------";
        document.getElementById('txtret').style.textAlign = "center";
        document.getElementById('txtret').style.color = "gray";
    }

    else {
        document.getElementById('txtret').style.textAlign = "left";
        document.getElementById('txtret').style.color = "black";
    }
    if (document.getElementById('hdnret').value == "") {
        document.getElementById('txtret').value = "";
        document.getElementById('txtret').value = "-------- Select Retainer ---------";
        document.getElementById('txtret').style.textAlign = "center";
        document.getElementById('txtret').style.color = "gray";
    }
    document.getElementById('txtret').style.backgroundColor = "white";
    return false;
}
function Focusindustry() {
    if (document.getElementById('txtindustry').value == "-------- Select Industry ---------") {
        document.getElementById('txtindustry').value = "";
    }
    document.getElementById('txtindustry').style.textAlign = "left";
    document.getElementById('txtindustry').style.color = "black";
    document.getElementById('txtindustry').style.backgroundColor = "#99FFFF";
}
function Blurindustry() {
    if (document.getElementById('txtindustry').value == "") {
        document.getElementById('txtindustry').value = "";
        document.getElementById('txtindustry').value = "-------- Select Industry ---------";
        document.getElementById('txtindustry').style.textAlign = "center";
        document.getElementById('txtindustry').style.color = "gray";
    }

    else {
        document.getElementById('txtindustry').style.textAlign = "left";
        document.getElementById('txtindustry').style.color = "black";
    }
    if (document.getElementById('hdnindustry').value == "") {
        document.getElementById('txtindustry').value = "";
        document.getElementById('txtindustry').value = "-------- Select Industry ---------";
        document.getElementById('txtindustry').style.textAlign = "center";
        document.getElementById('txtindustry').style.color = "gray";
    }
    document.getElementById('txtindustry').style.backgroundColor = "white";
    return false;
}

function Focusproduct() {
    if (document.getElementById('txtproduct').value == "-------- Select Product ---------") {
        document.getElementById('txtproduct').value = "";
    }
    document.getElementById('txtproduct').style.textAlign = "left";
    document.getElementById('txtproduct').style.color = "black";
    document.getElementById('txtproduct').style.backgroundColor = "#99FFFF";
}
function Blurproduct() {
    if (document.getElementById('txtproduct').value == "") {
        document.getElementById('txtproduct').value = "";
        document.getElementById('txtproduct').value = "-------- Select Product ---------";
        document.getElementById('txtproduct').style.textAlign = "center";
        document.getElementById('txtproduct').style.color = "gray";
    }

    else {
        document.getElementById('txtproduct').style.textAlign = "left";
        document.getElementById('txtproduct').style.color = "black";
    }
    if (document.getElementById('hdnproduct').value == "") {
        document.getElementById('txtproduct').value = "";
        document.getElementById('txtproduct').value = "-------- Select Product ---------";
        document.getElementById('txtproduct').style.textAlign = "center";
        document.getElementById('txtproduct').style.color = "gray";
    }
    document.getElementById('txtproduct').style.backgroundColor = "white";
    return false;
}

function Focusbrand() {
    if (document.getElementById('txtbrand').value == "-------- Select Brand ---------") {
        document.getElementById('txtbrand').value = "";
    }
    document.getElementById('txtbrand').style.textAlign = "left";
    document.getElementById('txtbrand').style.color = "black";
    document.getElementById('txtbrand').style.backgroundColor = "#99FFFF";
}
function Blurbrand() {
    if (document.getElementById('txtbrand').value == "") {
        document.getElementById('txtbrand').value = "";
        document.getElementById('txtbrand').value = "-------- Select Brand ---------";
        document.getElementById('txtbrand').style.textAlign = "center";
        document.getElementById('txtbrand').style.color = "gray";
    }

    else {
        document.getElementById('txtbrand').style.textAlign = "left";
        document.getElementById('txtbrand').style.color = "black";
    }
    if (document.getElementById('hdnbrand').value == "") {
        document.getElementById('txtbrand').value = "";
        document.getElementById('txtbrand').value = "-------- Select Brand ---------";
        document.getElementById('txtbrand').style.textAlign = "center";
        document.getElementById('txtbrand').style.color = "gray";
    }
    document.getElementById('txtbrand').style.backgroundColor = "white";
    return false;
}

function Focusevent() {
    if (document.getElementById('txtevent').value == "-------- Select Event ---------") {
        document.getElementById('txtevent').value = "";
    }
    document.getElementById('txtevent').style.textAlign = "left";
    document.getElementById('txtevent').style.color = "black";
    document.getElementById('txtevent').style.backgroundColor = "#99FFFF";
}
function Blurevent() {
    if (document.getElementById('txtevent').value == "") {
        document.getElementById('txtevent').value = "";
        document.getElementById('txtevent').value = "-------- Select Event ---------";
        document.getElementById('txtevent').style.textAlign = "center";
        document.getElementById('txtevent').style.color = "gray";
    }

    else {
        document.getElementById('txtevent').style.textAlign = "left";
        document.getElementById('txtevent').style.color = "black";
    }
    if (document.getElementById('hdnevent').value == "") {
        document.getElementById('txtevent').value = "";
        document.getElementById('txtevent').value = "-------- Select Event ---------";
        document.getElementById('txtevent').style.textAlign = "center";
        document.getElementById('txtevent').style.color = "gray";
    }
    document.getElementById('txtevent').style.backgroundColor = "white";
    return false;
}

function Focusprime() {
    if (document.getElementById('txtroadcat').value == "-------- Select Prime Time---------") {
        document.getElementById('txtroadcat').value = "";
    }
    document.getElementById('txtroadcat').style.textAlign = "left";
    document.getElementById('txtroadcat').style.color = "black";
    document.getElementById('txtroadcat').style.backgroundColor = "#99FFFF";
}
function Blurprime() {
    if (document.getElementById('txtroadcat').value == "") {
        document.getElementById('txtroadcat').value = "";
        document.getElementById('txtroadcat').value = "-------- Select Prime Time---------";
        document.getElementById('txtroadcat').style.textAlign = "center";
        document.getElementById('txtroadcat').style.color = "gray";
    }

    else {
        document.getElementById('txtroadcat').style.textAlign = "left";
        document.getElementById('txtroadcat').style.color = "black";
    }
    if (document.getElementById('hdnroadcat').value == "") {
        document.getElementById('txtroadcat').value = "";
        document.getElementById('txtroadcat').value = "-------- Select Prime Time---------";
        document.getElementById('txtroadcat').style.textAlign = "center";
        document.getElementById('txtroadcat').style.color = "gray";
    }
    document.getElementById('txtroadcat').style.backgroundColor = "white";
    return false;
}



