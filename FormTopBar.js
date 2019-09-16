function open_master() {
    if (document.getElementById('TRMASTER') != null) {
        document.getElementById('TRMASTER').style.display = "block";
        document.getElementById('TRIPD').style.display = "none";
        document.getElementById('TROPD').style.display = "none";
        document.getElementById('TRBILLING').style.display = "none";
        document.getElementById('TRVEHICLE').style.display = "none";
        document.getElementById('TRBILL').style.display = "none";
        document.getElementById('TRSCHEME').style.display = "none";
    }
    return false;
}
function open_fpc() {
    document.getElementById('TRMASTER').style.display = "none";
    document.getElementById('TRIPD').style.display = "block";
    document.getElementById('TROPD').style.display = "none";
    document.getElementById('TRBILLING').style.display = "none";
    document.getElementById('TRVEHICLE').style.display = "none";
    document.getElementById('TRBILL').style.display = "none";
    document.getElementById('TRSCHEME').style.display = "none";

    return false;
}
function open_sch() {
    if (document.getElementById('TRMASTER') != null) {
        document.getElementById('TRMASTER').style.display = "none";
        document.getElementById('TRIPD').style.display = "none";
        document.getElementById('TROPD').style.display = "block";
        document.getElementById('TRBILLING').style.display = "none";
        document.getElementById('TRVEHICLE').style.display = "none";
        document.getElementById('TRBILL').style.display = "none";
        document.getElementById('TRSCHEME').style.display = "none";
    }
    return false;
}
function open_bill() {
    if (document.getElementById('TRMASTER') != null) {
        document.getElementById('TRMASTER').style.display = "none";
        document.getElementById('TRIPD').style.display = "none";
        document.getElementById('TROPD').style.display = "none";
        document.getElementById('TRBILLING').style.display = "block";
        document.getElementById('TRVEHICLE').style.display = "none";
        document.getElementById('TRBILL').style.display = "none";
        document.getElementById('TRSCHEME').style.display = "none";
    }  
    return false;
}
function open_coll() {
    document.getElementById('TRMASTER').style.display = "none";
    document.getElementById('TRIPD').style.display = "none";
    document.getElementById('TROPD').style.display = "none";
    document.getElementById('TRBILLING').style.display = "none";
    document.getElementById('TRVEHICLE').style.display = "block";
    document.getElementById('TRBILL').style.display = "none";
    document.getElementById('TRSCHEME').style.display = "none";
    return false;
}
function open_repo() {
    document.getElementById('TRMASTER').style.display = "none";
    document.getElementById('TRIPD').style.display = "none";
    document.getElementById('TROPD').style.display = "none";
    document.getElementById('TRBILLING').style.display = "none";
    document.getElementById('TRVEHICLE').style.display = "none";
    document.getElementById('TRSCHEME').style.display = "none";
    document.getElementById('TRBILL').style.display = "block";    
    return false;
}

function open_scheme() {
    document.getElementById('TRMASTER').style.display = "none";
    document.getElementById('TRIPD').style.display = "none";
    document.getElementById('TROPD').style.display = "none";
    document.getElementById('TRBILLING').style.display = "none";
    document.getElementById('TRVEHICLE').style.display = "none";
    document.getElementById('TRBILL').style.display = "none";
    document.getElementById('TRSCHEME').style.display = "block";
    return false;
}
function opendncn() {
    window.location.href = "DN_CN_Reason_Master.aspx";
    return false;
}

function open_coll() {
//    document.forms[0]['FormTopBar:hdnuserid'].value
    var pmodule_code = "15";
    var userid = document.getElementById("Topbar1_hdnuserid").value;
    var compcode = document.getElementById("Topbar1_hdncompcode").value;
    var branch = document.getElementById("Topbar1_hdnbranch").value;
    var centername = document.getElementById("Topbar1_hdncentname").value;
    var forname = "Default.aspx";
    var centercode = document.getElementById("Topbar1_hiddencenter").value;

    var res = FormTopBar.FetchModuleUrl(pmodule_code);
    var ds = res.value;
    if (ds == null) {
        alert(res.error.description);
        return false
    }
    if (ds.Tables[0].Rows.length > 0) {

        if (pmodule_code == "15") {
            url = ds.Tables[0].Rows[0].MODULE_URL + "masterlogin.aspx";
            var win = window.open(url + "?centercode=" + centercode + "&compcode=" + compcode + "&userid=" + userid + "&branch=" + branch + "&forname=" + forname + "&centername=" + centername + "&modulecode=" + "15");
        }
    }

    return false;
}

