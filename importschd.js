
function exitimp() {

    document.getElementById("hdndivflag").value = "N";
    document.getElementById("map").style.display = "none";

    return false;
}
function displayfld() {
    if (document.getElementById("hdndivflag").value != "Y")
        document.getElementById("map").style.display = "none";
}
function saveimp() {

    document.getElementById("map").style.display = "none";
    document.getElementById("hdndivflag").value = "N";


}
function onload()
{
    displayfld();
   
    document.getElementById('drpchannel').focus();
    //open_sch();
    return false;
}
function importclick() {


    if (document.getElementById("drpchannel").value == "0") {
        alert("Please Select Channel Name");
        document.getElementById("drpbankname").focus();
        return false;
    }

    if (document.getElementById("txtscfrdate").value == "") {
        alert("Please Enter Date");
        document.getElementById("txtscfrdate").focus();
        return false;
    }
    document.getElementById("hdndivflag").value = "Y";
    if (document.getElementById("hdnbillformat").value == "IBC24") {
        document.getElementById("map").style.display = "none";
    }
    else {
        document.getElementById("map").style.display = "";
    }
}
function sumbitdate() {
    if (document.getElementById("drpchannel").value == "0") {
        alert("Please Select Channel Name");
        document.getElementById("drpbankname").focus();
        return false;
    }

    if (document.getElementById("txtscfrdate").value == "") {
        alert("Please Enter Date");
        document.getElementById("txtscfrdate").focus();
        return false;
    }
    var PCOMP_CODE = document.getElementById('hdncompcode').value; 
      var  PCENT_CODE= document.getElementById('hdncenter').value;
      var PBRANCH_CODE = document.getElementById('hiddenbranch').value;
      var PSCH_DATE = document.getElementById('txtscfrdate').value;
      var  PCHANNEL_CODE= document.getElementById('drpchannel').value;
        var  PSCH_TIME  = "";
        var PPROGRAMME_NAME = "";
        var PPROGRAMME_CODE = "";
        var PDUR_TIME = "";
        var PIP = "";
        var PCREATED_BY = "";
        var pdateformat = document.getElementById('hiddendateformat').value;
        if (pdateformat == "dd/mm/yyyy") {
            PSCH_DATE = PSCH_DATE.split('/');
            PSCH_DATE = PSCH_DATE[1] + "/" + PSCH_DATE[0] + "/" + PSCH_DATE[2];


        }
        else if (pdateformat == "mm/dd/yyyy") {

        }
        else if (pdateformat == "yyyy/mm/dd") {
     
            PSCH_DATE = PSCH_DATE.split('/');
            PSCH_DATE = PSCH_DATE[1] + "/" + PSCH_DATE[0] + "/" + PSCH_DATE[2];  

        }
        else {
            alert("Dateformat is either null or blank");
            return false;
        }
        var res = importschd.fillgriddate(PCOMP_CODE, PCENT_CODE, PBRANCH_CODE, PCHANNEL_CODE, PSCH_DATE, PIP, PCREATED_BY, "", "E")
        if (res == null) {
            alert(res.error.description);

            return false;
        }
        var sno;
        var gonair;
        var gdatetime;
        var gid;
        var gseg;
        var gtitle;
        var gduration;
        var gstatus;
        var gdevice;
        var del;
        var grecon;
        var gch;
        var rowid;
        var gtype;
        var gsec;
        var snno = 0;
       // str = "<div id=\"griddiv\" runat=\"server\" style=\"OVERFLOW: auto;WIDTH:100%; HEIGHT: 250px;\"><table cellpadding=\"0\" cellspacing=\"1\" id=\"tblGrid\" width=\"100%\"   border=1><tr><td align=\"center\" valign=\"top\" class=\"GridHdtdr\">SI.NO</td><td align=\"center\" valign=\"top\" class=\"GridHdtdr\">Time</td><td align=\"center\" valign=\"top\" class=\"GridHdtdr\">Programme</td><td align=\"center\" valign=\"top\" class=\"GridHdtdr\">Codeno</td><td align=\"center\" valign=\"top\" class=\"GridHdtdr\">Duration</td><td align=\"center\" valign=\"top\" class=\"GridHdtdr\">Del</td></tr></table></div>";
        str = "<div id=\"griddiv\" runat=\"server\" style=\"OVERFLOW: auto;WIDTH:100% \">";
        str += "<table cellpadding=\"0\" cellspacing=\"1px\" id=\"tblGrid\"  border=1><tr>";
        str += "<td align=\"center\" valign=\"top\"  class=\"GridHderMtd4\">Sr.No</td>";
        str += "<td align=\"center\" valign=\"top\" class=\"GridHderMtd4\">On Air</td>";
        str += "<td align=\"center\" valign=\"top\" class=\"GridHderMtd4\">Date Time</td>";
        str += "<td align=\"center\" valign=\"top\" class=\"GridHderMtd4\">Id</td>";
        str += "<td align=\"center\" valign=\"top\"  class=\"GridHderMtd4\">Seg</td>";
        str += "<td align=\"center\" valign=\"top\"  class=\"GridHderMtd4\">Title</td>";
        str += "<td align=\"center\" valign=\"top\"  class=\"GridHderMtd4\">Duration</td>";
        str += "<td align=\"center\" valign=\"top\"  class=\"GridHderMtd4\">Status</td>";
        str += "<td align=\"center\" valign=\"top\"  class=\"GridHderMtd4\">Device</td>";
        str += "<td align=\"center\" valign=\"top\"  class=\"GridHderMtd4\">CH</td>";
        str += "<td align=\"center\" valign=\"top\"  class=\"GridHderMtd4\">Reconcile</td>";
        str += "<td align=\"center\" valign=\"top\"  class=\"GridHderMtd4\">Type</td>";
        str += "<td align=\"center\" valign=\"top\"  class=\"GridHderMtd4\">Sec</td>";

        str += "</tr></table></div>";


        document.getElementById('structdettd').innerHTML = str;
    var ds = res.value;
    if (ds.Tables[0].Rows.length) {
        document.getElementById('btnsave').disabled = false;
        for (var i = 0; i < ds.Tables[0].Rows.length; i++) {
            snno++;

            var gridtab_vari = document.getElementById('tblGrid');
            

            Make_Row = document.createElement("tr");
            Make_Row.id = "sstr_" + i;
            sno = "sno_" + i;
            gonair = "gonair_" + i;
            gdatetime = "gdatetime_" + i;
            gid = "gid_" + i;
            gseg = "gseg_" + i;
            gtitle = "gtitle_" + i;
            gduration = "gduration_" + i;
            gstatus = "gstatus_" + i;
            gdevice = "gdevice_" + i;
            del = "del_" + i;
            grecon = "grecon_" + i;
            gch = "gch_" + i;
            rowid = "rowid_" + i;
            gtype = "gtype_" + i;
            gsec = "gsec_" + i;

            make_td = document.createElement("td");
            make_td.className = "GridHdtd";
            make_td.align = "center";
            make_td.setAttribute("width", "5%");
            str = "<input class=\"gridtext\" style='width:100%' readonly  type=\"text\" id=" + sno + " value='" + snno + " '  />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtd";
            make_td.align = "center";
            make_td.setAttribute("width", "7%");
            str = "<input class=\"gridtext\" style='width:100%' readonly  type=\"text\" style='width:60px' id=" + gonair + " value='" + ds.Tables[0].Rows[i].ONAIR_DATE + " '  />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtd";
            make_td.align = "center";
            make_td.setAttribute("width", "7%");
            str = "<input class=\"gridtext\" style='width:100%' readonly   type=\"text\" id=" + gdatetime + " value='" + ds.Tables[0].Rows[i].RUN_DATE_TIME + " '  />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtd";
            make_td.align = "center";
            make_td.setAttribute("width", "7%");
            str = "<input class=\"gridtext\" style='width:100%' readonly  type=\"text\"  id=" + gid + " value='" + ds.Tables[0].Rows[i].VIDEO_ID + " '  />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtd";
            make_td.align = "center";
            make_td.setAttribute("width", "4%");
            str = "<input class=\"gridtext\" style='width:100%' readonly  type=\"text\" id=" + gseg + " value='" + ds.Tables[0].Rows[i].SEG + " '  />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtd";
            make_td.align = "center";
            make_td.setAttribute("width", "12%");
            str = "<input class=\"gridtext\" style='width:100%' readonly  type=\"text\"  id=" + gtitle + " value='" + ds.Tables[0].Rows[i].TITLE + " '  />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtd";
            make_td.align = "center";
            make_td.setAttribute("width", "8%");
            str = "<input class=\"gridtext\" style='width:100%' readonly  type=\"text\" s id=" + gduration + " value='" + ds.Tables[0].Rows[i].DURATION + " '  />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtd";
            make_td.setAttribute("width", "5%");
            str = "<input class=\"gridtext\" style='width:100%' readonly  type=\"text\"  id=" + gstatus + " value=' '  />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtd";
            make_td.align = "center";
            make_td.setAttribute("width", "9%");
            str = "<input class=\"gridtext\" style='width:100%' readonly  type=\"text\" id=" + gdevice + " value='" + ds.Tables[0].Rows[i].DEVICE + " '  />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtd";
            make_td.align = "center";
            make_td.setAttribute("width", "5%");
            str = "<input class=\"gridtext\" style='width:100%' readonly  type=\"text\" id=" + gch + " value='" + ds.Tables[0].Rows[i].CH + " '  />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtd";       
            make_td.align = "center";
            make_td.setAttribute("width", "9%");
            str = "<input class=\"gridtext\" style='width:100%' readonly  type=\"text\" id=" + grecon + " value='" + ds.Tables[0].Rows[i].RECONCILE + " '  />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtd";
            make_td.align = "center";
            make_td.setAttribute("width", "5%");
            str = "<input class=\"gridtext\" style='width:100%' readonly  type=\"text\" id=" + gtype + " value='" + ds.Tables[0].Rows[i].TYPE + " '  />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtd";
            make_td.align = "center";
            make_td.setAttribute("width", "5%");
            str = "<input class=\"gridtext\" style='width:100%' readonly  type=\"text\" id=" + gsec + " value='" + ds.Tables[0].Rows[i].SEC + " '  />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            //make_td = document.createElement("td");
            //make_td.className = "GridHdtd3";
            //make_td.align = "center";


            //str = "<p style=\"width:100%; padding:0px; margin:0px;\"><input type=\"image\" img src=\"images/gtk-cancel.png\" id=" + del + "  onclick='return deleteclick(event)'/></p>";
       
            //make_td.innerHTML = str;
            //Make_Row.appendChild(make_td);

            document.getElementById('griddiv').getElementsByTagName('tbody')[0].appendChild(Make_Row);

       
        }
    }
    return false;
}
function deleteclick(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (confirm("Are you sure you want to delete this record?")) {
        activeidgp = document.activeElement.id;
        var id = activeidgp.split("_");
        var rowid = document.getElementById('rowid_' + id[1]).value.toUpperCase();
        var PCOMP_CODE = document.getElementById('hdncompcode').value;
        var PCENT_CODE = document.getElementById('hdncenter').value;
        var res = importschd.fillgriddate(PCOMP_CODE, PCENT_CODE, "", "", "", "", "", "", "", "", "", rowid, "D")
        if (res == null) {
            alert(res.error.description);

            return false;
        }
      
        
        alert("Record Succesfully Deleted...");
    }
    sumbitdate();
    return false;
}
function Entertabfun() {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 13) {

        if (document.activeElement.id == "drpchannel") {
            if (document.getElementById('txtscfrdate').disabled == false)
                document.getElementById('txtscfrdate').focus();
            return false;

        }
        if (document.activeElement.id == "txtscfrdate") {
            if (document.getElementById('txtfilename').disabled == false)
                document.getElementById('txtfilename').focus();
            return false;

        }
        if (document.activeElement.id == "txtfilename") {
            if (document.getElementById('btnimport').disabled == false)
                document.getElementById('btnimport').focus();
            return false;

        }
    }
}
function deletedata() {
    if (document.getElementById("drpchannel").value == "0") {
        alert("Please Select Channel Name");
        document.getElementById("drpbankname").focus();
        return false;
    }

    if (document.getElementById("txtscfrdate").value == "") {
        alert("Please Enter Date");
        document.getElementById("txtscfrdate").focus();
        return false;
    }
    var PCOMP_CODE = document.getElementById('hdncompcode').value;
    var PCENT_CODE = document.getElementById('hdncenter').value;
    var PBRANCH_CODE = document.getElementById('hiddenbranch').value;
    var PSCH_DATE = document.getElementById('txtscfrdate').value;
    var PCHANNEL_CODE = document.getElementById('drpchannel').value;
    var PIP = document.getElementById('hdnip').value;
    var PCREATED_BY = document.getElementById('hiddenuserid').value;

    var pdateformat = document.getElementById('hiddendateformat').value;
    if (pdateformat == "dd/mm/yyyy") {
        PSCH_DATE = PSCH_DATE.split('/');
        PSCH_DATE = PSCH_DATE[1] + "/" + PSCH_DATE[0] + "/" + PSCH_DATE[2];


    }
    else if (pdateformat == "mm/dd/yyyy") {

    }
    else if (pdateformat == "yyyy/mm/dd") {

        PSCH_DATE = PSCH_DATE.split('/');
        PSCH_DATE = PSCH_DATE[1] + "/" + PSCH_DATE[0] + "/" + PSCH_DATE[2];

    }
    else {
        alert("Dateformat is either null or blank");
        return false;
    }




    var PSCH_TIME = "";
    var PPROGRAMME_NAME = "";
    var PPROGRAMME_CODE = "";
    var PDUR_TIME = "";

    var res = importschd.fillgriddate(PCOMP_CODE, PCENT_CODE, PBRANCH_CODE, PCHANNEL_CODE, PSCH_DATE, PSCH_TIME, PPROGRAMME_NAME, PPROGRAMME_CODE, PDUR_TIME, PIP, PCREATED_BY, "", "MD")
    if (res == null) {
        alert(res.error.description);

        return false;
    }
    alert("Record Succesfully Deleted...");
    sumbitdate();
    return false;
}
function savdate() {
    if (document.getElementById("drpchannel").value == "0") {
        alert("Please Select Channel Name");
        document.getElementById("drpbankname").focus();
        return false;
    }

    if (document.getElementById("txtscfrdate").value == "") {
        alert("Please Enter Date");
        document.getElementById("txtscfrdate").focus();
        return false;
    }
    var PCOMP_CODE = document.getElementById('hdncompcode').value;
    var PCENT_CODE = document.getElementById('hdncenter').value;
    var PBRANCH_CODE = document.getElementById('hiddenbranch').value;
    var PSCH_DATE = document.getElementById('txtscfrdate').value;
    var PCHANNEL_CODE = document.getElementById('drpchannel').value;
    var PIP = document.getElementById('hdnip').value;
    var PCREATED_BY = document.getElementById('hiddenuserid').value;

    var pdateformat = document.getElementById('hiddendateformat').value;
    if (pdateformat == "dd/mm/yyyy") {
        PSCH_DATE = PSCH_DATE.split('/');
        PSCH_DATE = PSCH_DATE[1] + "/" + PSCH_DATE[0] + "/" + PSCH_DATE[2];


    }
    else if (pdateformat == "mm/dd/yyyy") {

    }
    else if (pdateformat == "yyyy/mm/dd") {

        PSCH_DATE = PSCH_DATE.split('/');
        PSCH_DATE = PSCH_DATE[1] + "/" + PSCH_DATE[0] + "/" + PSCH_DATE[2];

    }
    else {
        alert("Dateformat is either null or blank");
        return false;
    }





    var PSCH_TIME = "";
    var PPROGRAMME_NAME = "";
    var PPROGRAMME_CODE = "";
    var PDUR_TIME = "";

    var res = importschd.fillgriddate(PCOMP_CODE, PCENT_CODE, PBRANCH_CODE, PCHANNEL_CODE, PSCH_DATE, PSCH_TIME, PPROGRAMME_NAME, PPROGRAMME_CODE, PDUR_TIME, PIP, PCREATED_BY, "", "S")
    if (res == null) {
        alert(res.error.description);

        return false;
    }
    var ds = res.value;
    if (ds.Tables.length > 0) {
        if (ds.Tables[0].Rows[0].RES == "N") {
            alert("Scheduling Already Exists For This Date");
            return false;
        }
    }

    //        }
    alert("Record Succesfully Saved..");
    return false;


}

function Exceldata() {

    if (document.getElementById("drpchannel").value == "0") {
        alert("Please Select Channel Name");
        document.getElementById("drpbankname").focus();
        return false;
    }

    if (document.getElementById("txtscfrdate").value == "") {
        alert("Please Enter Date");
        document.getElementById("txtscfrdate").focus();
        return false;
    }
    var PCOMP_CODE = document.getElementById('hdncompcode').value;
    var PCENT_CODE = document.getElementById('hdncenter').value;
    var PBRANCH_CODE = document.getElementById('hiddenbranch').value;
    var PSCH_DATE = document.getElementById('txtscfrdate').value;
    var PCHANNEL_CODE = document.getElementById('drpchannel').value;
    var PSCH_TIME = "";
    var PPROGRAMME_NAME = "";
    var PPROGRAMME_CODE = "";
    var PDUR_TIME = "";
    var PIP = "";
    var PCREATED_BY = "";
    var pdateformat = document.getElementById('hiddendateformat').value;
    if (pdateformat == "dd/mm/yyyy") {
        PSCH_DATE = PSCH_DATE.split('/');
        PSCH_DATE = PSCH_DATE[1] + "/" + PSCH_DATE[0] + "/" + PSCH_DATE[2];


    }
    else if (pdateformat == "mm/dd/yyyy") {

    }
    else if (pdateformat == "yyyy/mm/dd") {

        PSCH_DATE = PSCH_DATE.split('/');
        PSCH_DATE = PSCH_DATE[1] + "/" + PSCH_DATE[0] + "/" + PSCH_DATE[2];

    }
    else {
        alert("Dateformat is either null or blank");
        return false;
    }
    window.open("importschdexcel.aspx?PCOMP_CODE=" + PCOMP_CODE + "&PCENT_CODE=" + PCENT_CODE + "&PBRANCH_CODE=" + PBRANCH_CODE + "&PSCH_DATE=" + PSCH_DATE + "&PCHANNEL_CODE=" + PCHANNEL_CODE + "&PIP=" + PIP + "&PCREATED_BY=" + PCREATED_BY + "&pdateformat=" + pdateformat);
   // window.open("RPT_Coll_Registerprint.aspx?center=" + center + "&centername=" + centername + "&amountto=" + amountto + "&amountfrom=" + amountfrom + "&modulecode=" + modulecode + "&agencycode=" + agencycode + "&narttion=" + narttion + "&reporttype=" + reporttype + "&reporttypename=" + reporttypename + "&branch=" + branch + "&datefrom=" + datefrom + "&dateto=" + dateto + "&extra3=" + extra3 + "&destination=" + destination + "&entrytype=" + entrytype);

    return false;
}