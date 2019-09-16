var browser = navigator.appName
var dsgexec;
var currpage = 0;
var editflag;
var maxreconpage;
var chknamemod;
if (browser == "Microsoft Internet Explorer") {
    maxreconpage = 20;
}
else {
    maxreconpage = 17;
}




function Hidelable(res) {
    document.getElementById("Hdnvalue").value = res;
    document.getElementById('BTNHIDE').click();
    return true;

}



function Entertabfun(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    document.onkeydown = function (e) {
        if (e != undefined) {
            if (e.ctrlKey && e.keyCode === 83) {
                e.preventDefault();
                if (document.getElementById('Buttonsav1').style.display == "block") {
                    document.getElementById('Buttonsav1').click();
                    //SaveClick();
                    return false;
                }
            }
            else if (e.ctrlKey && e.keyCode === 13) {
                e.preventDefault();
                if (document.getElementById('btncrt').style.display == "block") {
                    document.getElementById('btncrt').click();
                    //NewClick();
                    return false;
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
                if (document.getElementById('btnlist').disabled == false) {
                    document.getElementById('btnlist').click();
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


        }


    };

    if (key == 13) {
        if (document.activeElement.id == "ddlnMode") {
            if (document.getElementById('txtnCode').disabled == false)
                document.getElementById('txtnCode').focus();
            else {
                if (document.getElementById('txtnDesc').disabled == false)
                    document.getElementById('txtnDesc').focus();
                return false;
            }
            return false;
        }
        if (document.activeElement.id == "txtnCode") {
            if (document.getElementById('txtnDesc').disabled == false)
                document.getElementById('txtnDesc').focus();
            return false;
        }
        if (document.activeElement.id == "txtnDesc") {
            if (document.getElementById('ddlnFctType').disabled == false)
                document.getElementById('ddlnFctType').focus();
            return false;
        }
        if (document.activeElement.id == "ddlnFctType") {
            if (document.getElementById('txtnFctDesc').disabled == false)
                document.getElementById('txtnFctDesc').focus();
            return false;
        }
        if (document.activeElement.id == "txtnFctDesc") {
            if (document.getElementById('txttotfct').disabled == false)
                document.getElementById('txttotfct').focus();
            return false;
        }
        if (document.activeElement.id == "txttotfct") {
            if (document.getElementById('ddlnStatus').disabled == false)
                document.getElementById('ddlnStatus').focus();
            return false;
        }
        //        if (document.activeElement.id == "ddlnStatus") {
        //            if (document.getElementById('txtnAdType').disabled == false)
        //                document.getElementById('txtnAdType').focus();
        //            return false;
        //        }
        if (document.activeElement.id == "ddlnStatus") {
            if (document.getElementById('txthsncode').disabled == false)
                document.getElementById('txthsncode').focus();
            return false;
        }
        if (document.activeElement.id == "txthsncode") {
            if (document.getElementById('Buttonsav1').disabled == false)
                document.getElementById('Buttonsav1').focus();
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

