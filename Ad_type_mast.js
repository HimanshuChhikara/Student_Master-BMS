var browser = navigator.appName;
var dsgexec;
var currpage = 0;
var flag = "";
//var editflag;
var maxreconpage;
if (browser == "Microsoft Internet Explorer") {
    maxreconpage = 20;
}
else {
    maxreconpage = 17;
}
function on_create() {
    document.getElementById('form_tag').style.display = "block";
    document.getElementById('btnform').disabled = true;
    document.getElementById('divgrid').style.display = "none";
    document.getElementById('divdata').style.display = "block";
    document.getElementById('showcreate').style.display = "none";
    document.getElementById('editshow').style.display = "none";
    document.getElementById('saveshow').style.display = "block";
    document.getElementById('hidetr').style.display = "none";

    on_clear();

    document.getElementById('txtnCode').disabled = true;
    document.getElementById('ddlnMode').disabled = false;
    document.getElementById('txtnDesc').disabled = false;
    document.getElementById('ddlnFctType').disabled = false;
    document.getElementById('txtnFctDesc').disabled = false;
    document.getElementById('ddlnStatus').disabled = false;
    document.getElementById('txtnAdType').disabled = false;
    document.getElementById('txttotfct').disabled = false;
    document.getElementById('ddlnMode').focus();


    flag = "save";
    return false;
}
function on_clear() {
    document.getElementById('txtnCode').value = "";
    document.getElementById('txtnDesc').value = "";
    document.getElementById('ddlnFctType').value = "FT";
    document.getElementById('txtnFctDesc').value = "";
    document.getElementById('ddlnStatus').value = "AC0";
    document.getElementById('txtnAdType').value = "";
    document.getElementById('txttotfct').value = "";
    if (document.getElementById('ddlnMode').options.length == 2) {
        document.getElementById('ddlnMode').selectedIndex = 1;
    }
    return false;
}
function Hidelable(res) {
    document.getElementById("Hdnvalue").value = res;
    document.getElementById('BTNHIDE').click();
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

function on_load() {
    getPermission('Ad_type_mast');
    document.getElementById('btncrt').focus();
   
    return false;
}
function Entertabfun(event) {
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
            else if (e.ctrlKey && e.keyCode === 13) {
                e.preventDefault();
                if (document.getElementById('btncrt').disabled == false) {
                    createdata();
                    return false;
                }
            }
            else if (e.ctrlKey && e.keyCode === 82) {
                e.preventDefault();
                if (document.getElementById('btnclear').disabled == false) {
                    CancelClick();
                    return false;
                }
            }
            // else if (e.ctrlKey && e.keyCode === 88) {
            //  e.preventDefault();
            //   if (document.getElementById('btnExit').disabled == false) {
            //      ExitClick();
            //      return false;
            // }
            //  }


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
      
        if (document.activeElement.id == "ddlnStatus") {
            if (document.getElementById('txthsncode').disabled == false)
                document.getElementById('txthsncode').focus();
            return false;
        }
        if (document.activeElement.id == "txthsncode") {
            if (document.getElementById('btnsave').disabled == false)
                document.getElementById('btnsave').focus();
            return false;
        }
       
    }
    else if (document.activeElement.type == "button" || document.activeElement.type == "submit" || document.activeElement.type == "image") {
        return key;
    }
}

function GenerateCode() {
    var PCOMP_CODE = document.getElementById('hiddencompcode').value;
    var PCENT_CODE = document.getElementById('hiddencenter').value;
    var PNAME = trim(document.getElementById('txtnDesc').value.toUpperCase());
    var PEXTRA = "";
    var PEXTRA1 = "";
    var PEXTRA2 = "";
    var PEXTRA3 = "";

    var res = Ad_type_mast.Gencode(PCOMP_CODE, PCENT_CODE, PNAME, PEXTRA, PEXTRA1, PEXTRA2, PEXTRA3);
    var ds = res.value;
    if (ds == null) {
        alert(res.error.description);
        return false;
    }
    if (ds.Tables[0].Rows.length > 0) {
        document.getElementById('hdngencode').value = ds.Tables[0].Rows[0].GENCODE;
    }
}

function save_data() {

    document.getElementById('txtnDesc').value = trim(document.getElementById('txtnDesc').value.toUpperCase());
    document.getElementById('txtnFctDesc').value = trim(document.getElementById('txtnFctDesc').value.toUpperCase());
    document.getElementById('txtnAdType').value = trim(document.getElementById('txtnAdType').value.toUpperCase());

    if (document.getElementById('txtnDesc').value == "") {
        alert("please select description");
        document.getElementById('txtnDesc').focus();
        return false;
    }
    if (document.getElementById('txtnFctDesc').value == "") {
        alert("please select Fct Description");
        document.getElementById('txtnFctDesc').focus();
        return false;
    }
    //    if (document.getElementById('txtnAdType').value == "") {
    //        alert("please select main add type");
    //        document.getElementById('txtnAdType').focus();
    //        return false;
    //    }

    InsUpDel();
}
function edit_data() {
    editdata();
    return false;
}
function del_data() {
    return false;
}
function InsUpDel() {
    var msg = Ad_type_mast.checkSession();
    if (msg.value == "false") {
        alert("Your session has been expired");
        window.location.href = "Login.aspx";
        return false;
    }
    else {
        var PCOMP_CODE = document.getElementById('hiddencompcode').value;
        var PAD_MODE_CODE = document.getElementById('ddlnMode').value;
        var PAD_TYPE_CODE = "";
        var PAD_TYPE_DESC = document.getElementById('txtnDesc').value;
        var PFCT_TYPE_FLAG = document.getElementById('ddlnFctType').value;
        var PFCT_DESC = document.getElementById('txtnFctDesc').value;
        var PMAIN_AD_TYPE = document.getElementById('txtnAdType').value;
        var PREMARKS = "";
        var PSTATUS = document.getElementById('ddlnStatus').value;
        var PIP = document.getElementById('hdnip').value;
        var PCREATED_BY = document.getElementById('hiddenuserid').value;
        var PTYPE = "";
        var PEXTRA = document.getElementById('txttotfct').value;
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        var PEXTRA3 = "";
        var PEXTRA4 = "";
        var PEXTRA5 = "";

        if (flag == "save") {
            PTYPE = "I";
            GenerateCode();
            PAD_TYPE_CODE = document.getElementById('hdngencode').value;
        }
        else if (flag == "edit") {
            PTYPE = "U";
            PAD_TYPE_CODE = document.getElementById('txtnCode').value;
        }
        else if (flag == "del") {
            PTYPE = "D"
            PAD_TYPE_CODE = document.getElementById('txtnCode').value;
        }
        var res = Ad_type_mast.InsUp(PCOMP_CODE, PAD_MODE_CODE, PAD_TYPE_CODE, PAD_TYPE_DESC, PFCT_TYPE_FLAG, PFCT_DESC, PMAIN_AD_TYPE, PREMARKS, PSTATUS, PIP, PCREATED_BY, PTYPE, PEXTRA, PEXTRA1, PEXTRA2, PEXTRA3, PEXTRA4, PEXTRA5);
        if (res.value == null) {
            alert(res.error.description);
            return false;
        }
        else {
            alert("Record Succesfully Saved...");
            on_clear();

            return false;
        }
    }
}
function fillgrid(txt_id, input) {
    document.getElementById('divgrid').style.display = "block";
    document.getElementById('divcrete').style.display = "block";
    document.getElementById('divdata').style.display = "none";
    document.getElementById('showcreate').style.display = "block";
    document.getElementById('saveshow').style.display = "none";
    document.getElementById('hidetr').style.display = "block";
    document.getElementById('move_tag').style.display = "none";
    document.getElementById('btnform').disabled = false;
    var PAD_TYPE_CODE = "";
    var PAD_MODE_CODE = document.getElementById('txtmodtype').value;
    var PAD_TYPE_DESC = document.getElementById('txtaddesc').value;
    var PMAIN_AD_TYPE = document.getElementById('txtmainadtype').value;
    var PEXTRA = document.getElementById('txtfctdesc').value;
    var PEXTRA1 = document.getElementById('txtfcttype').value;

    if (document.getElementById('txtaddesc').value == "Search here...") {
        PAD_TYPE_DESC = "";
    }
    if (document.getElementById('txtmodtype').value == "Search here...") {
        PAD_MODE_CODE = "";
    }

    if (document.getElementById('txtfcttype').value == "Search here...") {
        PEXTRA1 = "";
    }
    if (document.getElementById('txtfctdesc').value == "Search here...") {
        PEXTRA = "";
    }
    if (document.getElementById('txtmainadtype').value == "Search here...") {
        PMAIN_AD_TYPE = "";
    }
    var PCOMP_CODE = document.getElementById('hiddencompcode').value;


    var res = Ad_type_mast.Exec(PCOMP_CODE, PAD_MODE_CODE, PAD_TYPE_CODE, PAD_TYPE_DESC, PMAIN_AD_TYPE, PEXTRA, PEXTRA1);
    if (res == null) {
        alert(res.error.description);
        return false;
    }
    dsgexec = res.value;
    currpage = 1;
    if (dsgexec.Tables[0].Rows.length > 0) {
        document.getElementById('lbltpage').value = Math.ceil(dsgexec.Tables[0].Rows.length / maxreconpage);

        document.getElementById('imgbtnprevgrid').style.opacity = "0.2";
        if (parseInt(document.getElementById('lbltpage').value) == 1) {

            document.getElementById('imgbtnnextgrid').style.opacity = "0.2";
            document.getElementById('imgbtnnextgrid').disabled = true;
            document.getElementById('imgbtnprevgrid').disabled = true;
        }
        else {
            document.getElementById('imgbtnnextgrid').style.opacity = "1";
            document.getElementById('imgbtnnextgrid').disabled = false;

        }
        call_GridExecute();
    }
    else {
        document.getElementById('imgbtnnextgrid').style.opacity = "0.2";
        document.getElementById('imgbtnnextgrid').disabled = true;
        document.getElementById('imgbtnnextgrid').disabled = true;
        document.getElementById('txtcurrpage').value = "";
        document.getElementById('lbltpage').value = 0;
        document.getElementById('result').innerHTML = "";
    }
    return false;
}
function CngPageNo() {
    if (document.getElementById('txtcurrpage').value == "") {
        alert("Enter valid page no.");
        return false;
    }
    else {
        if (parseInt(document.getElementById('txtcurrpage').value) < 1) {
            alert("Page No cannot be zero");
            return false;
        }
        else if (parseInt(document.getElementById('txtcurrpage').value) > parseInt(document.getElementById('lbltpage').value)) {
            alert("Page No cannot be greater than " + parseInt(document.getElementById('lbltpage').value));
            document.getElementById('txtcurrpage').value = "";
            document.getElementById('txtcurrpage').focus();
            return false;
        }
        else {
            currpage = parseInt(document.getElementById('txtcurrpage').value);
            if (currpage == 1) {
                document.getElementById('imgbtnprevgrid').style.opacity = "0.2";
                document.getElementById('imgbtnprevgrid').disabled = true;
                document.getElementById('imgbtnnextgrid').style.opacity = "1";
                document.getElementById('imgbtnnextgrid').disabled = false;
            }
            else if (currpage >= parseInt(document.getElementById('lbltpage').value)) {
                document.getElementById('imgbtnnextgrid').style.opacity = "0.2";
                document.getElementById('imgbtnnextgrid').disabled = true;
                document.getElementById('imgbtnprevgrid').style.opacity = "1";
                document.getElementById('imgbtnprevgrid').disabled = false;
            }
            else {
                document.getElementById('imgbtnprevgrid').style.opacity = "1";
                document.getElementById('imgbtnnextgrid').style.opacity = "1";
                document.getElementById('imgbtnnextgrid').disabled = false;
                document.getElementById('imgbtnprevgrid').disabled = false;
            }
            call_GridExecute();
        }
        return false;
    }
}
function PrevPageClick() {
    currpage--;
    if (currpage < 1) {
        currpage = 1;
        document.getElementById('imgbtnprevgrid').disabled = true;
        document.getElementById('imgbtnnextgrid').disabled = false;
        document.getElementById('imgbtnnextgrid').style.opacity = "1";
        return false;
    }
    else if (currpage == 1) {
        document.getElementById('imgbtnprevgrid').disabled = true;
        document.getElementById('imgbtnprevgrid').style.opacity = "0.2";

    }
    document.getElementById('imgbtnnextgrid').disabled = false;
    document.getElementById('imgbtnnextgrid').style.opacity = "1";

    call_GridExecute();
    return false;
}
function NextPageClick() {
    currpage++;
    if (currpage >= parseInt(document.getElementById('lbltpage').value)) {
        document.getElementById('imgbtnnextgrid').style.opacity = "0.2";
        document.getElementById('imgbtnnextgrid').disabled = true;
    }
    document.getElementById('imgbtnprevgrid').disabled = false;
    document.getElementById('imgbtnprevgrid').style.opacity = "1";

    call_GridExecute();
    return false;
}
function call_GridExecute(res) {

    document.getElementById('txtcurrpage').value = currpage;
    ExecuteGridRec();
    return false;
}
function ExecuteGridRec() {
    var sno = "";
    var adtypedes = "";
    var modetype = "";
    var fcttype = "";
    var fctdesc = "";
    var mainadtype = "";
    var del = "";
    var addtype = "";
    var snonum = "";
    var mistypcode = "";
    var pageno = "";
    var modecode = "";
    str = "<div id=\"griddiv\" runat=\"server\" style=\"OVERFLOW: auto;WIDTH:100%; height:400px;  \">";
    str += "<table id=\"tblGrid\" width=\"100%\"><tr style=\"display:none;\"></tr></table></div>";

    document.getElementById('result').innerHTML = str;

    var pclass = "";
    var frec = 0;
    var trec = 0;
    frec = (currpage - 1) * maxreconpage;
    if (currpage < parseInt(document.getElementById('lbltpage').value)) {
        trec = currpage * maxreconpage;
    }
    else {
        trec = dsgexec.Tables[0].Rows.length;
    }
    for (var k = frec; k < trec; k++) {
        var gridtab_vari = document.getElementById('tblGrid');
        snonum++;
        Make_Row = document.createElement("tr");

        Make_Row.id = "sstr_" + k;

        if (k % 2 == 0) {
            Make_Row.style.backgroundColor = "#F7F6F3";
        }
        else {
            Make_Row.style.backgroundColor = "white";
        }

        sno = "sno_" + k;
        adtypedes = "adtypedes_" + k;
        modetype = "modetype_" + k;
        fcttype = "fcttype_" + k;
        fctdesc = "fctdesc_" + k;
        mainadtype = "mainadtype_" + k;
        mistypcode = "mistypcode_" + k;
        del = "del_" + k;
        modecode = "modecode_" + k;

        //             Make_Row.style.borderBottom = "1px solid gray";

        make_td = document.createElement("td");
        make_td.className = "GridHdtd3";
        make_td.align = "center";

        make_td.width = "6%";
        if (k % 2 == 0) {
            str = "<input class=\"gridtext\" readonly  style=\"width:100%\" type=\"text\" id=" + sno + "   value='" + parseInt(k + 1) + "' />";
        }
        else {
            str = "<input class=\"gridtext2\" readonly  style=\"width:100%\" type=\"text\" id=" + sno + "   value='" + parseInt(k + 1) + "' />";
        }
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);


        make_td = document.createElement("td");
        make_td.align = "center";
        make_td.width = "32%";

        if (k % 2 == 0) {
            str = "<input class=\"gridtext\" style=\"width:100%; cursor:pointer; color:Blue;\" onclick='return getopen(event);' ReadOnly='true' type=\"text\" id=" + adtypedes + "  value='" + dsgexec.Tables[0].Rows[k].AD_TYPE_DESC + "' />";
        }
        else {
            str = "<input class=\"gridtext2\" style=\"width:100%; cursor:pointer; color:Blue;\" onclick='return getopen(event);' ReadOnly='true' type=\"text\" id=" + adtypedes + "  value='" + dsgexec.Tables[0].Rows[k].AD_TYPE_DESC + "' />";
        }
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);

        make_td = document.createElement("td");
        make_td.style.display = "none";
        make_td.align = "center";
        make_td.width = "20%";
        if (k % 2 == 0) {
            str = "<input class=\"gridtext\" style=\"width:100%\" type=\"text\" id=" + mistypcode + "  value='" + dsgexec.Tables[0].Rows[k].AD_TYPE_CODE + "' />";
        }
        else {
            str = "<input class=\"gridtext2\" style=\"width:100%\" type=\"text\" id=" + mistypcode + "  value='" + dsgexec.Tables[0].Rows[k].AD_TYPE_CODE + "' />";
        }
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);


        make_td = document.createElement("td");
        make_td.style.display = "none";
        make_td.align = "center";
        make_td.width = "20%";
        if (k % 2 == 0) {
            str = "<input class=\"gridtext\" disabled style=\"width:100%\" type=\"text\" id=" + modecode + "  value='" + dsgexec.Tables[0].Rows[k].AD_MODE_CODE + "' />";
        }
        else {
            str = "<input class=\"gridtext2\" disabled style=\"width:100%\" type=\"text\" id=" + modecode + "  value='" + dsgexec.Tables[0].Rows[k].AD_MODE_CODE + "' />";
        }
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);


        make_td = document.createElement("td");
        make_td.className = "GridHdtd3";
        make_td.align = "center";
        make_td.width = "28%";
        var modtype = "";
        if (dsgexec.Tables[0].Rows[k].AD_TYPE_DESC == "RD") {
            modtype = "RADIO";
        }
        else {
            modtype = "TELEVISION";
        }
        if (k % 2 == 0) {
            str = "<input class=\"gridtext\" readonly  style=\"width:100%\" type=\"text\" id=" + modetype + "   value='" + modtype + "'  />";
        }
        else {
            str = "<input class=\"gridtext2\" readonly  style=\"width:100%\" type=\"text\" id=" + modetype + "   value='" + modtype + "'  />";
        }
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);

        make_td = document.createElement("td");
        make_td.className = "GridHdtd3";
        make_td.align = "center";
        make_td.width = "12%";
        var fcttype = "";
        if (dsgexec.Tables[0].Rows[k].FCT_TYPE_FLAG == "FT") {
            fcttype = "FCT Typ";
        }
        else {
            fcttype = "Non FCT Type";
        }
        if (k % 2 == 0) {
            str = "<input class=\"gridtext\" readonly  style=\"width:100%\" type=\"text\" id=" + fcttype + "   value='" + fcttype + "'  />";
        }
        else {
            str = "<input class=\"gridtext2\" readonly  style=\"width:100%\" type=\"text\" id=" + fcttype + "   value='" + fcttype + "'  />";
        }
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);

        make_td = document.createElement("td");
        make_td.className = "GridHdttd3";
        make_td.align = "center";
        make_td.width = "10";
        if (k % 2 == 0) {
            str = "<input class=\"gridtext\" readonly  style='width:175px;' type=\"text\" id=" + fctdesc + "   value='" + dsgexec.Tables[0].Rows[k].FCT_DESC + "'  />";
        }
        else {
            str = "<input class=\"gridtext2\" readonly  style='width:175px;' type=\"text\" id=" + fctdesc + "   value='" + dsgexec.Tables[0].Rows[k].FCT_DESC + "'  />";
        }
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);

        make_td = document.createElement("td");
        make_td.className = "GridHdttd3";
        make_td.align = "center";
        make_td.style.display = "none";
        make_td.width = "10";
        if (k % 2 == 0) {
            str = "<input class=\"gridtext\" readonly  style='width:200px;' type=\"text\" id=" + mainadtype + "   value='" + dsgexec.Tables[0].Rows[k].MAIN_AD_TYPE + "'  />";
        }
        else {
            str = "<input class=\"gridtext2\" readonly  style='width:200px;' type=\"text\" id=" + mainadtype + "   value='" + dsgexec.Tables[0].Rows[k].MAIN_AD_TYPE + "'  />";
        }
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);


        make_td = document.createElement("td");
        make_td.className = "GridHdtd3";
        make_td.align = "center";



        if (document.getElementById('hdndel').value == "E") {
            str = "<p style=\"width:100%; padding:0px; margin:0px;\"><input type=\"image\" img src=\"images/gtk-cancel.png\" id=" + del + "  onclick='return deleteclick(event)'/></p>";
        }
        else {
            str = "<p style=\"width:100%; padding:0px; margin:0px;\"><input readonly type=\"image\" img src=\"images/gtk-cancel.png\" id=" + del + "  '/></p>";
        }
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);

        document.getElementById('griddiv').getElementsByTagName('tbody')[0].appendChild(Make_Row);

    }
}
function open_list() {
    document.getElementById('divgrid').style.display = "block";
    document.getElementById('divdata').style.display = "none";
    document.getElementById('editshow').style.display = "none";
    document.getElementById('saveshow').style.display = "none";
    document.getElementById('move_tag').style.display = "none";
    document.getElementById('movetage').style.display = "block";
    document.getElementById('showcreate').style.display = "block";
    document.getElementById('btnform').disabled = false;
    document.getElementById('hidetr').style.display = "block";

    //editflag = "N";
    return false
}

function getopen(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    activeidgp = document.activeElement.id;
    var id = activeidgp.split("_");

    glcode = document.getElementById('mistypcode_' + id[1]).value.toUpperCase();


    var PCOMP_CODE = document.getElementById('hiddencompcode').value;
    var PAD_MODE_CODE = "";
    var PAD_TYPE_CODE = glcode;
    var PAD_TYPE_DESC = "";
    var PMAIN_AD_TYPE = "";
    var PEXTRA = "";
    var PEXTRA1 = "";

    var res = Ad_type_mast.Exec(PCOMP_CODE, PAD_MODE_CODE, PAD_TYPE_CODE, PAD_TYPE_DESC, PMAIN_AD_TYPE, PEXTRA, PEXTRA1);
    document.getElementById('divgrid').style.display = "none";
    document.getElementById('divdata').style.display = "block";
    document.getElementById('form_tag').style.display = "block";
    document.getElementById('editshow').style.display = "block";
    document.getElementById('showcreate').style.display = "none";
    document.getElementById('hidetr').style.display = "none";

    dsexe = res.value;
    rownum = 0;
    document.getElementById('ddlnMode').value = dsexe.Tables[0].Rows[rownum].AD_MODE_CODE;
    document.getElementById('txtnCode').value = dsexe.Tables[0].Rows[rownum].AD_TYPE_CODE;
    document.getElementById('txtnDesc').value = dsexe.Tables[0].Rows[rownum].AD_TYPE_DESC;
    document.getElementById('ddlnFctType').value = dsexe.Tables[0].Rows[rownum].FCT_TYPE_FLAG;
    document.getElementById('txtnFctDesc').value = dsexe.Tables[0].Rows[rownum].FCT_DESC;
    document.getElementById('ddlnStatus').value = dsexe.Tables[0].Rows[rownum].STATUS;
    document.getElementById('txtnAdType').value = dsexe.Tables[0].Rows[rownum].MAIN_AD_TYPE;
    document.getElementById('txttotfct').value = dsexe.Tables[0].Rows[rownum].TOT_FCT;

    document.getElementById('ddlnMode').disabled = true;
    document.getElementById('txtnCode').disabled = true;
    document.getElementById('txtnDesc').disabled = true;
    document.getElementById('ddlnFctType').disabled = true;
    document.getElementById('txtnFctDesc').disabled = true;
    document.getElementById('ddlnStatus').disabled = true;
    document.getElementById('txtnAdType').disabled = true;
    document.getElementById('txttotfct').disabled = true;
    return false;
}
function deleteclick(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (confirm("Are you sure you want to delete this record?")) {
        activeidgp = document.activeElement.id;
        var id = activeidgp.split("_");


        // glmode = document.getElementById('mode_desc_' + id[1]).value.toUpperCase();

        var PCOMP_CODE = document.getElementById('hiddencompcode').value;
        var PAD_MODE_CODE = document.getElementById('modecode_' + id[1]).value.toUpperCase();
        var PAD_TYPE_CODE = document.getElementById('mistypcode_' + id[1]).value.toUpperCase();
        var PAD_TYPE_DESC = "";
        var PFCT_TYPE_FLAG = "";
        var PFCT_DESC = "";
        var PMAIN_AD_TYPE = "";
        var PREMARKS = "";
        var PSTATUS = "";
        var PIP = "";
        var PCREATED_BY = "";
        var PTYPE = "D";
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        var PEXTRA3 = "";
        var PEXTRA4 = "";
        var PEXTRA5 = "";
        var res = Ad_type_mast.InsUp(PCOMP_CODE, PAD_MODE_CODE, PAD_TYPE_CODE, PAD_TYPE_DESC, PFCT_TYPE_FLAG, PFCT_DESC, PMAIN_AD_TYPE, PREMARKS, PSTATUS, PIP, PCREATED_BY, PTYPE, PEXTRA, PEXTRA1, PEXTRA2, PEXTRA3, PEXTRA4, PEXTRA5);
        if (res.value == null) {
            alert(res.error.description);
            return false;
        }

        alert("Record Succesfully Deleted...");
    }

    fillgrid('F');
    return false;
}
function editdata() {
    document.getElementById('saveshow').style.display = "block";
    document.getElementById('editshow').style.display = "none";
    document.getElementById('ddlnMode').disabled = false;
    document.getElementById('txtnCode').disabled = true;
    document.getElementById('txtnDesc').disabled = false;
    document.getElementById('ddlnFctType').disabled = false;
    document.getElementById('txtnFctDesc').disabled = false;
    document.getElementById('ddlnStatus').disabled = false;
    document.getElementById('txtnAdType').disabled = false;
    document.getElementById('btnform').disabled = true;
    document.getElementById('txttotfct').disabled = false;
    flag = "edit";
    //editflag = "Y";
}
function PreviousClick() {
    rownum--;
    ExecuteRecords(rownum);
    if (rownum == 0) {
        document.getElementById('prev').disabled = true;
        document.getElementById('prev').style.opacity = "0.2";
        document.getElementById('prev').style.filter = "alpha(opacity = 20)";
        document.getElementById('next').disabled = false;
        document.getElementById('next').style.opacity = "1";
        document.getElementById('next').style.filter = "alpha(opacity = 100)";
    }
    else {
        document.getElementById('next').disabled = false;
        document.getElementById('next').style.opacity = "1";
        document.getElementById('next').style.filter = "alpha(opacity = 100)";
    }
    return false;
}
function NextClick() {
    var rowlength = dsexe.Tables[0].Rows.length;
    rownum++;
    ExecuteRecords(rownum);
    if (rownum == rowlength - 1) {
        document.getElementById('next').disabled = true;
        document.getElementById('next').style.opacity = "0.2";
        document.getElementById('next').style.filter = "alpha(opacity = 20)";
        document.getElementById('prev').disabled = false;
        document.getElementById('prev').style.opacity = "1";
        document.getElementById('prev').style.filter = "alpha(opacity = 100)";
    }
    else {
        document.getElementById('prev').disabled = false;
        document.getElementById('prev').style.opacity = "1";
        document.getElementById('prev').style.filter = "alpha(opacity = 100)";
    }
    return false;
}
function open_form() {
    if (document.getElementById('txtaddesc').value != "" || document.getElementById('txtaddesc').value != "") {
        document.getElementById('divgrid').style.display = "none";
        document.getElementById('divdata').style.display = "block";

        document.getElementById('hidetr').style.display = "none";
        document.getElementById('move_tag').style.display = "block";
        document.getElementById('movetage').style.display = "none";

        var gltadtype = document.getElementById('txtaddesc').value.toUpperCase();
        if (document.getElementById('txtaddesc').value == "Search here...") {
            gltadtype = "";
        }

        var PCOMP_CODE = document.getElementById('hiddencompcode').value;
        var PAD_MODE_CODE = "";
        var PAD_TYPE_CODE = "";
        var PAD_TYPE_DESC = gltadtype;
        var PMAIN_AD_TYPE = "";
        var PEXTRA = "";
        var PEXTRA1 = "";

        var res = Ad_type_mast.Exec(PCOMP_CODE, PAD_MODE_CODE, PAD_TYPE_CODE, PAD_TYPE_DESC, PMAIN_AD_TYPE, PEXTRA, PEXTRA1);
        call_Execute(res);
        document.getElementById('ddlnMode').disabled = true;
        document.getElementById('txtnCode').disabled = true;
        document.getElementById('txtnDesc').disabled = true;
        document.getElementById('ddlnFctType').disabled = true;
        document.getElementById('txtnFctDesc').disabled = true;
        document.getElementById('ddlnStatus').disabled = true;
        document.getElementById('txtnAdType').disabled = true;
        hiddentext = "query";
        document.getElementById('prev').disabled = true;
        document.getElementById('prev').style.opacity = "0.2";
        document.getElementById('prev').style.filter = "alpha(opacity = 20)";
        if ((res.value).Tables[0].Rows.length == 1) {
            document.getElementById('prev').disabled = true;
            document.getElementById('prev').style.opacity = "0.2";
            document.getElementById('prev').style.filter = "alpha(opacity = 20)";
            document.getElementById('next').disabled = true;
            document.getElementById('next').style.opacity = "0.2";
            document.getElementById('next').style.filter = "alpha(opacity = 20)";
        }
        document.getElementById('divgrid').style.display = "none";
        document.getElementById('divdata').style.display = "block";

        document.getElementById('editshow').style.display = "block";
        document.getElementById('showcreate').style.display = "none";
    }
    else {
        alert("First Enter 'Master Description'/'Master Name'");
        return false;
    }
    return false;
}
function call_Execute(res) {
    dsexe = res.value;
    rownum = 0;
    if (dsexe == null) {
        alert(res.error.description);
        return false;
    }
    ExecuteRecords(rownum);
    return false;
}

function ExecuteRecords(rownum) {
    if (dsexe.Tables[0].Rows.length > 0) {
        document.getElementById('ddlnMode').value = dsexe.Tables[0].Rows[rownum].AD_MODE_CODE;
        document.getElementById('txtnCode').value = dsexe.Tables[0].Rows[rownum].AD_TYPE_CODE;
        document.getElementById('txtnDesc').value = dsexe.Tables[0].Rows[rownum].AD_TYPE_DESC;
        document.getElementById('ddlnFctType').value = dsexe.Tables[0].Rows[rownum].FCT_TYPE_FLAG;
        document.getElementById('txtnFctDesc').value = dsexe.Tables[0].Rows[rownum].FCT_DESC;
        document.getElementById('ddlnStatus').value = dsexe.Tables[0].Rows[rownum].STATUS;
        document.getElementById('txtnAdType').value = dsexe.Tables[0].Rows[rownum].MAIN_AD_TYPE;
        document.getElementById('txttotfct').value = dsexe.Tables[0].Rows[rownum].TOT_FCT;

        //        if (editflag == "Y") {
        //            document.getElementById('txtnCode').disabled = true;
        //            document.getElementById('ddlnMode').disabled = false;
        //            document.getElementById('txtnDesc').disabled = false;
        //            document.getElementById('ddlnFctType').disabled = false;
        //            document.getElementById('txtnFctDesc').disabled = false;
        //            document.getElementById('ddlnStatus').disabled = false;
        //            document.getElementById('txtnAdType').disabled = false;
        //        }
        //        else {
        //            document.getElementById('txtnCode').disabled = true;
        //            document.getElementById('ddlnMode').disabled = true;
        //            document.getElementById('txtnDesc').disabled = true;
        //            document.getElementById('ddlnFctType').disabled = true;
        //            document.getElementById('txtnFctDesc').disabled = true;
        //            document.getElementById('ddlnStatus').disabled = true;
        //            document.getElementById('txtnAdType').disabled = true;
        //        }

    }
}