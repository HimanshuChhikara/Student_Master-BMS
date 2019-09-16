function misload() {

    // getPermission('RPT_Billprint');
    open_fpc();
    creatgrid();
    document.getElementById('btnsave').disabled = true;
    document.getElementById('btndel').disabled = true;
    return false;
}

function CancelClick() {
    document.getElementById('txtschfrdate').value = "";
    creatgrid();
  return false;
}
function Entertabfun(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (key == 13) {

        if (document.activeElement.id == "drpChannel") {
            if (document.getElementById('txtschfrdate').disabled == false)
                document.getElementById('txtschfrdate').focus();
            return false;
        }

        if (document.activeElement.id == "txtschfrdate") {
            if (document.getElementById('btnrunrept').disabled == false)
                document.getElementById('btnrunrept').focus();
            return false;
        }
        
        }
            else if (document.activeElement.type == "button" || document.activeElement.type == "submit" || document.activeElement.type == "image") {
        return key;
    }
}
function creatgrid() {
 
    var fromtime, totime,fcttime, segment, progcode, progname;

 
    
    str = "<div id=\"drincrgfdiv\" runat=\"server\" style=\"OVERFLOW: auto; max-height: 300px; width:590px;\">";
    str += "<table cellpadding=\"0\" cellspacing=\"1px\" id=\"drincrgfGrid\"  width=\590px\"    border=1><tr style='background-color: #336699; height: 25px;' >";
    str += "<td align=\"left\" valign=\"top\" style='width:190px' class=\"GridHdtd\">From Time</td>";
    str += "<td align=\"left\" valign=\"top\" style='width:190px' class=\"GridHdtd\">To Time</td>";
    str += "<td align=\"left\" valign=\"top\" style='width:190px' class=\"GridHdtd\">FCT Duration</td>";
    str += "<td align=\"left\" valign=\"top\" style='width:190px' class=\"GridHdtd\">Program Name</td>";
    str += "<td align=\"left\" valign=\"top\" style='width:190px' class=\"GridHdtd\">Segment</td>";
    str += "</tr></table></div>";
    document.getElementById('tdbokkinggrid').innerHTML = str;

    for (var i = 0; i < 4; i++) {

        Make_Row = document.createElement("tr");
        Make_Row.id = "sstr_" + i;

        fromtime = "fromtime_" + i;
        totime = "totime_" + i;
        fcttime = "fcttime_" + i;
        segment = "segment_" + i;
        progcode = "progcode_" + i;
        progname = "progname_" + i;

      



        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "190px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:190px' readonly type=\"text\" id=" + fromtime + " value=''  />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);




        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "190px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:190px' readonly type=\"text\" id=" + totime + " value=''  />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);


        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "190px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:190px'  type=\"text\" id=" + fcttime + " value=''  />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);

        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "190px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:190px'  type=\"text\" id=" + progname + " value=''  />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);

        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "95px");
        make_td.align = "center";
        make_td.style.display = "none";
        str = "<input class=\"gridtextr\" style='width:95px'  type=\"text\" id=" + progcode + " value=''  />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);

        make_td = document.createElement("td");
        make_td.className = "GridHdtdr";
        make_td.setAttribute("width", "95px");
        make_td.align = "center";
        str = "<input class=\"gridtextr\" style='width:95px'  type=\"text\" id=" + segment + " value=''  />";
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);
        
        document.getElementById('drincrgfdiv').getElementsByTagName('tbody')[0].appendChild(Make_Row);
    }
    return false;


}
function factdata() {
    if (browser != "Microsoft Internet Explorer")
        lblname = document.getElementById('lblschfrdate').textContent;
    else
        lblname = document.getElementById('lblschfrdate').innerText;

    if (lblname.indexOf('*') >= 0) {
        if (document.getElementById('txtschfrdate').value == "") {
            alert("Please Select " + (lblname.replace('*', "")));
            document.getElementById('txtschfrdate').focus();
            return false;
        }
    }

  
    var PCOMP_CODE = document.getElementById('hiddencompcode').value;
    var PCENT_CODE = document.getElementById('hiddencenter').value;
    var PBRANCH_CODE = document.getElementById('hdnbranch').value;
    var PCHANNEL_CODE = document.getElementById('drpChannel').value;
    var PFCT_DATE = document.getElementById('txtschfrdate').value;
var PEXTRA1 = "";
var PEXTRA2 = "";
var PEXTRA3 = "";
var PEXTRA4 = "";
var PEXTRA5 = "";
var PEXTRA6 = "";
var PDATE_FORMAT = document.getElementById('hiddendateformat').value;
if (PDATE_FORMAT == "dd/mm/yyyy") {
    PFCT_DATE = PFCT_DATE.split('/');
    PFCT_DATE = PFCT_DATE[1] + "/" + PFCT_DATE[0] + "/" + PFCT_DATE[2];
   }
else if (PDATE_FORMAT == "mm/dd/yyyy") {

}
else if (pdateformat == "yyyy/mm/dd") {
PFCT_DATE = PFCT_DATE.split('/');
PFCT_DATE = PFCT_DATE[1] + "/" + PFCT_DATE[2] + "/" + PFCT_DATE[0];
    }
else {
    alert("Dateformat is either null or blank");
    return false;
}

var res = dilyfcttime.factdata(PCOMP_CODE, PCENT_CODE, PBRANCH_CODE, PCHANNEL_CODE, PFCT_DATE, PEXTRA1, PEXTRA2, PEXTRA3, PEXTRA4, PEXTRA5, PEXTRA6);
    var ds = res.value;
    if (ds == null) {
        alert(res.error.description);
        return false;
    }
    if (ds.Tables[0].Rows.length > 0) {
        document.getElementById('btnsave').disabled = false;
        document.getElementById('btndel').disabled = false;
        var fromtime, totime, fcttime, rowid, chkboxid, progname, progname, segment;


        str = "<div id=\"drincrgfdiv\" runat=\"server\" style=\"OVERFLOW: auto; width:1000px;\">";
        str += "<table cellpadding=\"0\" cellspacing=\"1px\" id=\"drincrgfGrid\"  width=\1000px\"    border=1><tr style='background-color: #336699; height: 25px;' >";
        str += "<td align=\"left\" valign=\"top\" style='width:175px' class=\"GridHdtd\">From Time</td>";
        str += "<td align=\"left\" valign=\"top\" style='width:175px' class=\"GridHdtd\">To Time</td>";
        str += "<td align=\"left\" valign=\"top\" style='width:175px' class=\"GridHdtd\">FCT Duration</td>";
        str += "<td align=\"left\" valign=\"top\" style='width:175px' class=\"GridHdtd\">Program Name</td>";
        str += "<td align=\"left\" valign=\"top\"  class=\"GridHdtd\">Seg</td>";
        str += "<td align=\"left\" valign=\"top\"><input type=\"checkbox\" id='chkAll'  class=\"GridHdtdr\" onclick=\"return Checkall(this.id);\" runat=\"server\" /></td>";
  
        str += "</tr></table></div>";
        document.getElementById('tdbokkinggrid').innerHTML = str;


        for (var i = 0; i < ds.Tables[0].Rows.length; i++) {

            Make_Row = document.createElement("tr");
            Make_Row.id = "sstr_" + i;
            fromtime = "fromtime_" + i;
            totime = "totime_" + i;
            fcttime = "fcttime_" + i;
            rowid = "rowid_" + i;
            progname = "progname_" + i;
            progcode = "progcode_" + i;
            segment = "segment_" + i;
            chkboxid = "chkboxid_" + i;




            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "175px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style='width:190px' readonly type=\"text\" id=" + fromtime + " value='" + ds.Tables[0].Rows[i].FROM_TIME + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);




            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "175px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style='width:190px' readonly type=\"text\" id=" + totime + " value='" + ds.Tables[0].Rows[i].TO_TIME + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);


            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "175px");
            make_td.align = "center";
            if (ds.Tables[0].Rows[i].TOT_FCT == null) {
                str = "<input class=\"gridtextr\" style='width:190px' MaxLength='3'   onkeypress=\"return ClientisNumber(event);\" type=\"text\" id=" + fcttime + " value='' />";
            }
            else
            {
                str = "<input class=\"gridtextr\" style='width:190px;' MaxLength='3'   onkeypress=\"return ClientisNumber(event);\" type=\"text\" id=" + fcttime + " value='" + ds.Tables[0].Rows[i].TOT_FCT + "' />";
            }
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);


            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "250px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style='width:250px' readonly  type=\"text\" id=" + progname + " value='" + ds.Tables[0].Rows[i].PROGRAMME_NAME + "'  />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "95px");
            make_td.align = "center";
            make_td.style.display = "none";
            str = "<input class=\"gridtextr\" style='width:95px' readonly  type=\"text\" id=" + progcode + " value='" + ds.Tables[0].Rows[i].PRGRAMME_CODE + "'  />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "95px");
            make_td.align = "center";
            str = "<input class=\"gridtextr\" style='width:95px'  readonly  type=\"text\" id=" + segment + " value='" + ds.Tables[0].Rows[i].SEG + "'  />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.style.display = "none";
            if (ds.Tables[0].Rows[i].ROWID == null) {
                str = "<input class=\"newgridtext\" readonly   style='width:100%' type=\"text\" id=" + rowid + "   value='' />";
            }
            else {
                str = "<input class=\"newgridtext\" readonly   style='width:100%' type=\"text\" id=" + rowid + "   value='" + ds.Tables[0].Rows[i].ROWID + "' />";
            }
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.align = "center";
            str = "<input class=\"gridtext\" style='width:16px'  type=\"checkbox\" id=" + chkboxid + " value='' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            document.getElementById('drincrgfdiv').getElementsByTagName('tbody')[0].appendChild(Make_Row);
        }

    }
    return false;
}
function Checkall(resid) {
    if (document.getElementById('drincrgfGrid') == null) {
        alert("Please Fill Grid First.");
        return false;
    }
    var gridlength = document.getElementById('drincrgfGrid').rows.length;
    if (document.getElementById("chkAll").checked == true) {
        for (var k = 0; k < (gridlength - 1); k++) {
            if (document.getElementById("chkboxid_" + k).disabled == false)
                document.getElementById("chkboxid_" + k).checked = true;
          

        }
    }
    else {
        for (var k = 0; k < (gridlength - 1); k++) {
            if (document.getElementById("chkboxid_" + k).disabled == false)
                document.getElementById("chkboxid_" + k).checked = false;

       

        }
    }
}
function savadate() {
    if (browser != "Microsoft Internet Explorer")
        lblname = document.getElementById('lblschfrdate').textContent;
    else
        lblname = document.getElementById('lblschfrdate').innerText;

    if (lblname.indexOf('*') >= 0) {
        if (document.getElementById('txtschfrdate').value == "") {
            alert("Please Select " + (lblname.replace('*', "")));
            document.getElementById('txtschfrdate').focus();
            return false;
        }
    }


    var PCOMP_CODE = document.getElementById('hiddencompcode').value;
    var PCENT_CODE = document.getElementById('hiddencenter').value;
    var PBRANCH_CODE = document.getElementById('hdnbranch').value;
    var PCHANNEL_CODE = document.getElementById('drpChannel').value;
    var PFCT_DATE = document.getElementById('txtschfrdate').value;
    var PEXTRA1 = "";
    var PEXTRA2 = "";
    var PEXTRA3 = "";
    var PEXTRA4 = "";
    var PEXTRA5 = "";
    var PEXTRA6 = "";
    var PTYPE = "";
    var PTYPE = "";
    var PUSERID = document.getElementById('hiddenuserid').value;
    var PUSERIP = document.getElementById('hdnip').value;
    var PDATE_FORMAT = document.getElementById('hiddendateformat').value;
    if (PDATE_FORMAT == "dd/mm/yyyy") {
        PFCT_DATE = PFCT_DATE.split('/');
        PFCT_DATE = PFCT_DATE[1] + "/" + PFCT_DATE[0] + "/" + PFCT_DATE[2];
    }
    else if (PDATE_FORMAT == "mm/dd/yyyy") {

    }
    else if (pdateformat == "yyyy/mm/dd") {
        PFCT_DATE = PFCT_DATE.split('/');
        PFCT_DATE = PFCT_DATE[1] + "/" + PFCT_DATE[2] + "/" + PFCT_DATE[0];
    }
    else {
        alert("Dateformat is either null or blank");
        return false;
    }
        var gridlength = document.getElementById('drincrgfGrid').rows.length;
        for (var k = 0; k < (gridlength - 1); k++) {
            var PFROM_TIME = document.getElementById("fromtime_" + k).value;
            var PTO_TIME = document.getElementById("totime_" + k).value;
            var PDURATION = document.getElementById("fcttime_" + k).value;
            var PROWID = document.getElementById("rowid_" + k).value;
            PEXTRA1 = document.getElementById("progcode_" + k).value;
            PEXTRA2 = document.getElementById("segment_" + k).value;
            if (PROWID == "" || PROWID == null) {
            
                var res_error = dilyfcttime.datasave(PCOMP_CODE, PCENT_CODE, PBRANCH_CODE, PCHANNEL_CODE, PFCT_DATE,PUSERID,PUSERIP,PFROM_TIME,PTO_TIME,PDURATION,PROWID, PEXTRA1, PEXTRA2, PEXTRA3, PEXTRA4, PEXTRA5, PEXTRA6,"I");
                if (res_error.value == null) {
                    alert(res_error.error.description);
                    return false
                }
            }
            else {
                var res_error = dilyfcttime.datasave(PCOMP_CODE, PCENT_CODE, PBRANCH_CODE, PCHANNEL_CODE, PFCT_DATE, PUSERID, PUSERIP, PFROM_TIME, PTO_TIME, PDURATION, PROWID, PEXTRA1, PEXTRA2, PEXTRA3, PEXTRA4, PEXTRA5, PEXTRA6, "U");
                if (res_error.value == null) {
                    alert(res_error.error.description);
                    return false
                }
            }
        }
        alert("Record Succesfully Save...");
        factdata();
        return false;
    }
    function deletdata() {
        if (browser != "Microsoft Internet Explorer")
            lblname = document.getElementById('lblschfrdate').textContent;
        else
            lblname = document.getElementById('lblschfrdate').innerText;

        if (lblname.indexOf('*') >= 0) {
            if (document.getElementById('txtschfrdate').value == "") {
                alert("Please Select " + (lblname.replace('*', "")));
                document.getElementById('txtschfrdate').focus();
                return false;
            }
        }


        var PCOMP_CODE = document.getElementById('hiddencompcode').value;
        var PCENT_CODE = document.getElementById('hiddencenter').value;
        var PBRANCH_CODE = document.getElementById('hdnbranch').value;
        var PCHANNEL_CODE = document.getElementById('drpChannel').value;
        var PFCT_DATE = document.getElementById('txtschfrdate').value;
        var PEXTRA1 = "";
        var PEXTRA2 = "";
        var PEXTRA3 = "";
        var PEXTRA4 = "";
        var PEXTRA5 = "";
        var PEXTRA6 = "";
        var PTYPE = "";
        var PTYPE = "";
        var PUSERID = document.getElementById('hiddenuserid').value;
        var PUSERIP = document.getElementById('hdnip').value;
        var PDATE_FORMAT = document.getElementById('hiddendateformat').value;
        if (PDATE_FORMAT == "dd/mm/yyyy") {
            PFCT_DATE = PFCT_DATE.split('/');
            PFCT_DATE = PFCT_DATE[1] + "/" + PFCT_DATE[0] + "/" + PFCT_DATE[2];
        }
        else if (PDATE_FORMAT == "mm/dd/yyyy") {

        }
        else if (pdateformat == "yyyy/mm/dd") {
            PFCT_DATE = PFCT_DATE.split('/');
            PFCT_DATE = PFCT_DATE[1] + "/" + PFCT_DATE[2] + "/" + PFCT_DATE[0];
        }
        else {
            alert("Dateformat is either null or blank");
            return false;
        }
    
    var gridlength = document.getElementById('drincrgfGrid').rows.length;
    for (var k = 0; k < (gridlength - 1); k++) {
        var PFROM_TIME = document.getElementById("fromtime_" + k).value;
        var PTO_TIME = document.getElementById("totime_" + k).value;
        var PDURATION = document.getElementById("fcttime_" + k).value;

         PEXTRA1 = document.getElementById("progcode_" + k).value;
         PEXTRA2 = document.getElementById("segment_" + k).value;
        var PROWID = document.getElementById("rowid_" + k).value;
        if (document.getElementById("chkboxid_" + k).checked == true) {
            var res_error = dilyfcttime.datasave(PCOMP_CODE, PCENT_CODE, PBRANCH_CODE, PCHANNEL_CODE, PFCT_DATE, PUSERID, PUSERIP, PFROM_TIME, PTO_TIME, PDURATION, PROWID, PEXTRA1, PEXTRA2, PEXTRA3, PEXTRA4, PEXTRA5, PEXTRA6, "D");
            if (res_error.value == null) {
                alert(res_error.error.description);
                return false
            }
        }
    }
    alert("Record Succesfully Deleted...");
    factdata();
    return false;
    }