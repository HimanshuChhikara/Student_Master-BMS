

function Bindfromtime(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txtfromtime") {
        document.getElementById("divfromtime").style.display = "block";
        aTag = eval(document.getElementById("txtfromtime"))
        var btag;
        var leftpos = 0;
        var toppos = 25;
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
        
        var pcomp_code = document.getElementById('hdncompcode').value;
        var pfrom = document.getElementById('txtfromtime').value.toUpperCase();
        var ptimecode = "";
        var pextra = "";
        DailyFCTMasterIBC.Bindfromprime(pcomp_code, pfrom, ptimecode, pextra, bindfromtime_callback);
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
        //if (document.activeElement.id == "istfrome") {
            Fillfromtime(event);
        //    return false;
        //}
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
        
        document.getElementById('txtnProgType').focus();
        return false;
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
       
        var pcomp_code = document.getElementById('hdncompcode').value;
        var pfrom = document.getElementById('txtfromtime').value.toUpperCase();
        var ptimecode = "";
        var pextra = "";
        DailyFCTMasterIBC.Bindfromprime(pcomp_code, pfrom, ptimecode, pextra, bindfromtime_callback);

    }
}

function bindfromtime_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("istfrome");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("----- Select From Time-----", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].FROM_TIME, ds.Tables[0].Rows[i].TO_TIME);
        }
    }

    document.getElementById('txttotime').value = "";
    //document.getElementById("istfrome").value = "0";
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

function Focusfromtime() {
    if (document.getElementById('txtfromtime').value == "----- Select From Time-----") {
        document.getElementById('txtfromtime').value = "";
    }
    document.getElementById('txtfromtime').style.textAlign = "left";
    document.getElementById('txtfromtime').style.color = "black";
    document.getElementById('txtfromtime').style.backgroundColor = "#99FFFF";
}
function Blurfromtime() {
    if (document.getElementById('txtfromtime').value == "") {
        document.getElementById('txtfromtime').value = "";
        document.getElementById('txtfromtime').value = "----- Select From Time-----";
        document.getElementById('txtfromtime').style.textAlign = "center";
        document.getElementById('txtfromtime').style.color = "gray";
    }

    else {
        document.getElementById('txtfromtime').style.textAlign = "left";
        document.getElementById('txtfromtime').style.color = "black";
    }

    document.getElementById('txtfromtime').style.backgroundColor = "white";
    return false;
}


function Bindtotime(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 113 && document.activeElement.id == "txttotime") {
        document.getElementById("divtotime").style.display = "block";
        aTag = eval(document.getElementById("txttotime"))
        var btag;
        var leftpos = 0;
        var toppos = 25;
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
       
        var pcomp_code = document.getElementById('hdncompcode').value;
        var pfrom = document.getElementById('txttotime').value.toUpperCase();
        var ptimecode = "";
        var pextra = "";
        DailyFCTMasterIBC.Bindfromprime(pcomp_code, pfrom, ptimecode, pextra, bindtotime_callback);
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
        //if (document.activeElement.id == "isttotime") {
          Filltotime(event);
        //    return false;
        //}
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
              
        document.getElementById('txtnProgType').focus();
        return false;
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
        var pcomp_code = document.getElementById('hdncompcode').value;
        var pfrom = document.getElementById('txttotime').value.toUpperCase();
        var ptimecode = "";
        var pextra = "";
        DailyFCTMasterIBC.Bindfromprime(pcomp_code, pfrom, ptimecode, pextra, bindtotime_callback);

    }
}

function bindtotime_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("isttotime");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("----- Select To Time----", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].TO_TIME, ds.Tables[0].Rows[i].TO_TIME);
        }
    }

    document.getElementById('txttotime').value = "";
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
           return false;
        }
        else {
            document.getElementById("divtotime").style.display = "none";
            var lstvalue = document.getElementById('isttotime').value;
            for (var k = 0; k < document.getElementById("isttotime").length; k++) {
                if (document.getElementById('isttotime').options[k].value == lstvalue) {
                  
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

function Focustotime() {
    if (document.getElementById('txttotime').value == "----- Select To Time----") {
        document.getElementById('txttotime').value = "";
    }
    document.getElementById('txttotime').style.textAlign = "left";
    document.getElementById('txttotime').style.color = "black";
    document.getElementById('txttotime').style.backgroundColor = "#99FFFF";
}
function Blurtotime() {
    if (document.getElementById('txttotime').value == "") {
        document.getElementById('txttotime').value = "";
        document.getElementById('txttotime').value = "----- Select To Time----";
        document.getElementById('txttotime').style.textAlign = "center";
        document.getElementById('txttotime').style.color = "gray";
    }

    else {
        document.getElementById('txttotime').style.textAlign = "left";
        document.getElementById('txttotime').style.color = "black";
    }

    document.getElementById('txttotime').style.backgroundColor = "white";
    return false;
}


//************************* bind exec grid*************************************************************

var tid = "";
function getexec(event, res) {

    var key = event.keyCode ? event.keyCode : event.which;
    var id = res.split("_")[1];
    if (key == 113 && document.activeElement.id == (res)) {
        tid = res;
    
    document.getElementById("divexec").style.display = "block";
        aTag = eval(document.getElementById(res))
       var btag;
        var leftpos = -230;
        var toppos = 0;
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
        var tot = document.getElementById('divexec').scrollLeft;
        var scrolltop = document.getElementById('divexec').scrollTop;
        document.getElementById('divexec').style.left = document.getElementById(res).offsetLeft + leftpos - tot + "px";
        document.getElementById('divexec').style.top = document.getElementById(res).offsetTop + toppos - scrolltop + 18 + "px"; //"510px";
        var pcomp_code = document.getElementById('hdncompcode').value;
        var pfrom = document.getElementById(res).value.toUpperCase();
        var ptimecode = "";
        var pextra = "";
        DailyFCTMasterIBC.Bindfromprime(pcomp_code, pfrom, ptimecode, pextra, bindexec_callback);
    }
   
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == (res)) {
            document.getElementById(res.split("_")[0] + "_" + res.split("_")[1] + "_txtexcecode").value = "";

        }
    }
    else if (key == 27) {
        document.getElementById("divexec").style.display = "none";
        document.getElementById(tid).focus();
        return false;
    }
    else if (key == 13) {
        if (document.getElementById("divexec").style.display == "block") {
            filllexecname(event);
            document.getElementById("divexec").style.display == "none";
            return false;
        }
        if (document.activeElement.id == "lstexe") {
            filllexecname(event);
            return false;
        }
      
        if (document.activeElement.id == res) {
            document.getElementById(res.split("_")[0] + "_" + res.split("_")[1] + "_txtretname").focus();
            return false;
        }
    }

    else if (key == 36 || key == 37 || key == 39) {
        document.getElementById("divexec").style.display = "none";
    }
      
    else if (key == 38) {
        if (document.getElementById("divexec").style.display == "block") {
            if (document.getElementById("lstexe").value == '0') {
                document.getElementById(res).focus();

            }
        }
    }
    else if (key == 40) {
        if (document.getElementById("divexec").style.display == "block") {
            document.getElementById("lstexe").focus();
        }
    }
    else {
         document.getElementById("divexec").style.display = "block";
        aTag = eval(document.getElementById(res))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            if (toppos > 0) {
                toppos = 0;
            }

            btag = eval(aTag)
        }
       while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divexec').scrollLeft;
        var scrolltop = document.getElementById('divexec').scrollTop;
        document.getElementById('divexec').style.left = document.getElementById(res).offsetLeft + leftpos - tot + "px";
        document.getElementById('divexec').style.top = document.getElementById(res).offsetTop + toppos - scrolltop + "px"; //"510px";
        
        var pcomp_code = document.getElementById('hdncompcode').value;
        var pfrom = document.getElementById(res).value.toUpperCase();
        var ptimecode = "";
        var pextra = "";
        DailyFCTMasterIBC.Bindfromprime(pcomp_code, pfrom, ptimecode, pextra, bindexec_callback);
    
   }
   
}

function bindexec_callback(response) {
    var ds = response.value;
   
    var lstitem = document.getElementById("lstexe");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select Exec Name ---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].FROM_TIME, ds.Tables[0].Rows[i].TO_TIME);
        }


    }

      document.getElementById("lstexe").selectedIndex = 1;
    
    return false;
}

function filllexecname(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    var id = tid.split("_")[0] + "_" + tid.split("_")[1] + "_txtexcecode";
    
    if (key == 27) {
        if (document.activeElement.id == "lstexe") {
            document.getElementById("divexec").style.display = "none";
            document.getElementById(tid).focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {
        if (document.getElementById("lstexe").value == "0") {
            alert("Please Select Event  Name");
            return false;
        }
        else {
            document.getElementById("divexec").style.display = "none";
            var lstvalue = document.getElementById('lstexe').value;
            for (var k = 0; k < document.getElementById("lstexe").length; k++) {
                if (document.getElementById('lstexe').options[k].value == lstvalue) {
                    document.getElementById(id).value = document.getElementById('lstexe').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById(tid).value = document.getElementById('lstexe').options[k].textContent;
                    else
                        document.getElementById(tid).value = document.getElementById('lstexe').options[k].innerText;

                    break;
                }
            }
        }


        document.getElementById(tid).focus();
        return false;
    }
}

/////************************* bind RET grid********************************************************
var tid = "";
function getreta(event, res) {

   var key = event.keyCode ? event.keyCode : event.which;
    var id = res.split("_")[1];
    if (key == 113 && document.activeElement.id == (res)) {
        tid = res;
    
    document.getElementById("divret").style.display = "block";
        aTag = eval(document.getElementById(res))
       var btag;
        var leftpos = 0;
        var toppos = 0;
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
        var tot = document.getElementById('divret').scrollLeft;
        var scrolltop = document.getElementById('divret').scrollTop;
        document.getElementById('divret').style.left = document.getElementById(res).offsetLeft + leftpos - tot + "px";
        document.getElementById('divret').style.top = document.getElementById(res).offsetTop + toppos - scrolltop + 18 + "px"; //"510px";
        var pcomp_code = document.getElementById('hdncompcode').value;
        var pfrom = document.getElementById(res).value.toUpperCase();
        var ptimecode = "";
        var pextra = "";
        DailyFCTMasterIBC.Bindfromprime(pcomp_code, pfrom, ptimecode, pextra, bindreta_callback);
    }
  
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == (res)) {
            document.getElementById(res.split("_")[0] + "_" + res.split("_")[1] + "_txtretcode").value = "";

        }
    }
    else if (key == 27) {
        document.getElementById("divret").style.display = "none";
        document.getElementById(tid).focus();
        return false;
    }
    else if (key == 13) {
        if (document.getElementById("divret").style.display == "block") {
            filllexecname(event);
            document.getElementById("divret").style.display == "none";
            return false;
        }
        if (document.activeElement.id == "lstret") {
            filllexecname(event);
            return false;
        }
       

        if (document.activeElement.id == res) {
            document.getElementById(res.split("_")[0] + "_" + res.split("_")[1] + "_txtfct1").focus();
            return false;
        }
    }   
    else if (key == 36 || key == 37 || key == 39) {
        document.getElementById("divret").style.display = "none";
    }
      
    else if (key == 38) {
        if (document.getElementById("divret").style.display == "block") {
            if (document.getElementById("lstret").value == '0') {
                document.getElementById(res).focus();

            }
        }
    }
    else if (key == 40) {
        if (document.getElementById("divret").style.display == "block") {
            document.getElementById("lstret").focus();
        }
    }
    else {
         document.getElementById("divret").style.display = "block";
        aTag = eval(document.getElementById(res))
        var btag;
        var leftpos = 0;
        var toppos = 20;
        
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            if (toppos > 0) {
                toppos = 0;
            }

            btag = eval(aTag)
        }
       while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divret').scrollLeft;
        var scrolltop = document.getElementById('divret').scrollTop;
        document.getElementById('divret').style.left = document.getElementById(res).offsetLeft + leftpos - tot + "px";
        document.getElementById('divret').style.top = document.getElementById(res).offsetTop + toppos - scrolltop + "px"; //"510px";
        
        var pcomp_code = document.getElementById('hdncompcode').value;
        var pfrom = document.getElementById(res).value.toUpperCase();
        var ptimecode = "";
        var pextra = "";
        DailyFCTMasterIBC.Bindfromprime(pcomp_code, pfrom, ptimecode, pextra, bindreta_callback);
    
   }
   
}
function bindreta_callback(response) {

   var ds = response.value;
   var lstitem = document.getElementById("lstret");
    lstitem.options.length = 0;

   lstitem.options[0] = new Option("-------- Select To Time ---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].TO_TIME, ds.Tables[0].Rows[i].TO_TIME);
        }
    }

    document.getElementById("lstret").selectedIndex = 1;

    return false;
}

function filllretaname(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    var id = tid.split("_")[0] + "_" + tid.split("_")[1] + "_txtretcode";
    if (key == 27) {
        if (document.activeElement.id == "lstret") {
            document.getElementById("divret").style.display = "none";
            document.getElementById(tid).focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {
        if (document.getElementById("lstret").value == "0") {
            alert("Please Select Retainer  Name");
            return false;
        }
        else {
            document.getElementById("divret").style.display = "none";
            var lstvalue = document.getElementById('lstret').value;
            for (var k = 0; k < document.getElementById("lstret").length; k++) {
                if (document.getElementById('lstret').options[k].value == lstvalue) {
                    document.getElementById(id).value = document.getElementById('lstret').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById(tid).value = document.getElementById('lstret').options[k].textContent;
                    else
                        document.getElementById(tid).value = document.getElementById('lstret').options[k].innerText;

                    break;
                }
            }
        }

        document.getElementById(tid).focus();
        return false;
    }
}
