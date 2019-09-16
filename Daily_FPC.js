var browser = navigator.appName
var dsgexec;
var currpage = 0;
var editflag;
var maxreconpage;
if (browser == "Microsoft Internet Explorer") {
    maxreconpage = 20;
}
else {
    maxreconpage = 17;
}
flagtab=0;
flag = 0;

var headertext="";
function Ronload() {
  
    on_clear();

    return false;
}

function on_clear() {
    document.getElementById('txtnChName').selectedIndex = 1;
    document.getElementById('txtnDate').value = "";
    document.getElementById('txtnChName').focus();
    creategrid();
  
    return false;
}


function creategrid() {

   

    var srno = "";
    var stime = "";
    var etime = "";
    var prtype = "";
    var prname = "";
    var orgrpt = "";
    var seg = "";
    var epide = "";
    var tapno = "";
    var durt = "";
    var rowidno = "";
    var del = "";
    var ssrno = "";
    var prcode = "";
    var orgrptname = "";
    var typei = "";
    str = "<div id=\"griddivform1\" runat=\"server\" style=\"OVERFLOW: auto;WIDTH:100% \">";
    str += "<table cellpadding=\"0\" cellspacing=\"1px\" id=\"tblGridfrom\"  border=1><tr>";
    str += "<td align=\"center\" valign=\"top\"  class=\"GridHderMtd4\">Sr.No</td>";
    str += "<td align=\"center\" valign=\"top\"  class=\"GridHderMtd4\">Start Time</td>";
    str += "<td align=\"center\" valign=\"top\"  class=\"GridHderMtd4\">End Time</td>";
    str += "<td align=\"center\" valign=\"top\" class=\"GridHderMtd4\">	Program Name</td>";
  
    str += "<td align=\"center\" valign=\"top\"  class=\"GridHderMtd4\">Episode No</td>";
    str += "<td align=\"center\" valign=\"top\"  class=\"GridHderMtd4\">Tape No</td>";
    str += "<td align=\"center\" valign=\"top\" class=\"GridHderMtd4\">	Orignal/Repeat</td>";
    str += "<td align=\"center\" valign=\"top\" class=\"GridHderMtd4\">Duration (Min)</td>";
    str += "<td align=\"center\" valign=\"top\"  class=\"GridHderMtd4\">Del</td>";

    str += "</tr></table></div>";
 
        document.getElementById('FPCResult').innerHTML = str;

        //var gridtab_vari2 = document.getElementById('tblGridfrom').rows.length;

        for (var i = 0; i < 5; i++) {
            var gridtab_vari = document.getElementById('tblGridfrom');

            ssrno++;
            Make_Row = document.createElement("tr");
            Make_Row.id = "sstr_" + i;

            srno = "srno_" + i;
            stime = "stime_" + i;
            etime = "etime_" + i;
            prtype = "prtype_" + i;
            prname = "prname_" + i;
            orgrpt = "orgrpt_" + i;
            orgrptname = "orgrptname_" + i;
            seg = "seg_" + i;
            epide = "epide_" + i;
            tapno = "tapno_" + i;
            durt = "durt_" + i;
            del = "del_" + i;
            rowidno = "rowidno_" + i;
            prcode = "prcode_" + i;
            typei = "typei_" + i;



            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.style.display = "none";
            make_td.align = "center";
            str = "<input class=\"newgridtext\"  style='width:5px; background-color: #ffffcc;'  type=\"text\" id=" + typei + "  value='' />";

            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.align = "center";
            make_td.setAttribute("width", "6%");
            str = "<input class=\"newgridtext\" readonly style='width:100%; background-color: #ffffcc;'  type=\"text\" id=" + srno + "  value='' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.style.display = "none";
            make_td.align = "center";
            str = "<input class=\"newgridtext\"  style='width:5px; background-color: #ffffcc;'  type=\"text\" id=" + rowidno + "  value='' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.align = "center";
            make_td.setAttribute("width", "12%");
            str = "<input class=\"newgridtext\" readonly style='width:100%; background-color: #ffffcc;'  type=\"text\" id=" + stime + "  value='' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.className = "GridHdtd3";
            make_td.align = "center";
            make_td.setAttribute("width", "12%");
            str = "<input class=\"newgridtext\" readonly style='width:100%; background-color: #ffffcc;' type=\"text\" id=" + etime + "   value='' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.style.display = "none";

            str = "<input class=\"newgridtext\"  readonly style='width:100%; background-color: #ffffcc;'  type=\"text\" id=" + prtype + "  value='' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.style.display = "none";
            str = "<input class=\"newgridtext\" readonly   style='width:100%; background-color: #ffffcc;' type=\"text\" id=" + prcode + "   value='' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            //cursor: pointer; color: Blue; onclick='return gotgrid(event);' 
            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.align = "center";
            make_td.setAttribute("width", "16%");
            str = "<input class=\"newgridtext\" readonly   style='width:100%; background-color: #ffffcc;'  type=\"text\" id=" + prname + "   value='' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

         
            make_td = document.createElement("td");
            make_td.className = "GridHdtd3";
            make_td.align = "center";
            make_td.setAttribute("width", "12%");
            str = "<input class=\"newgridtext\"    readonly   style='width:100%; background-color: #ffffcc;' type=\"text\" id=" + epide + " value='' />";
         
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtd3";
            make_td.align = "center";
            make_td.setAttribute("width", "12%");
            str = "<input class=\"newgridtext\"    readonly   style='width:100%; background-color: #ffffcc;' type=\"text\" id=" + tapno + " value='' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);


            make_td = document.createElement("td");
            make_td.align = "center";
            make_td.style.display = "none";
            make_td.setAttribute("width", "12%");
            str = "<input class=\"newgridtext\" readonly style='width:100% ; background-color: #ffffcc;'  type=\"text\" id=" + seg + "  value='' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);


            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "12%");
            str = "<select  readonly class=\"dropdown\"   style='width:100%; height:16px;background-color: #ffffcc;' type=\"text\" id=" + orgrpt + "  <option value='O'>Orignal</option> <option value='R'>Repeat</option>/>";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            //make_td = document.createElement("td");
            //make_td.className = "GridHdtdr";
            //make_td.setAttribute("width", "12%");
            //str = "<input class=\"newgridtext\" readonly   style='width:100%; background-color: #ffffcc;' type=\"text\" id=" + orgrptname + "   value='' />";
            //make_td.innerHTML = str;
            //Make_Row.appendChild(make_td);



            make_td = document.createElement("td");
            make_td.className = "GridHdtd3";
            make_td.align = "center";
            make_td.setAttribute("width", "12%");
            str = "<input class=\"newgridtext\" readonly   style='width:100%; background-color: #ffffcc;' type=\"text\" id=" + durt + " value='' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtd3";
            make_td.align = "center";
            make_td.setAttribute("width", "6%");
            str = "<p  style=\"width:100%; border: 1px solid #929292; padding:0px; margin:0px;\"><input type=\"image\"  img src=\"images/gtk-cancel.png\" id=" + del + "  onclick='return deleteclick(this.id)'/></p>";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            document.getElementById('griddivform1').getElementsByTagName('tbody')[0].appendChild(Make_Row);
        }


  

    return false;
}


function onblurcol1(res) {
    onblurcol(res);
    if (document.getElementById(res).value != "") {
        var strtdate = document.getElementById(res).value.split("/")[1] + "/" + document.getElementById(res).value.split("/")[0] + "/" + document.getElementById(res).value.split("/")[2];
        var start = new Date(strtdate);
        var n = start.getDay();
        if (n == "0") {
            document.getElementById("txtdayname").value = "Sunday";
        }
        else if (n == "1") {
            document.getElementById("txtdayname").value = "Monday";
        }
        else if (n == "2") {
            document.getElementById("txtdayname").value = "Tuesday";
        }
        else if (n == "3") {
            document.getElementById("txtdayname").value = "Wednesday";
        }
        else if (n == "4") {
            document.getElementById("txtdayname").value = "Thursday";
        }
        else if (n == "5") {
            document.getElementById("txtdayname").value = "Friday";
        }
        else if (n == "6") {
            document.getElementById("txtdayname").value = "Satureday";
        }


    }
    else {
        document.getElementById("txtdayname").value = "";
    }
    return false;
}



function on_create() {

    document.getElementById('form_tag').style.display = "block";
    document.getElementById('btnform').disabled = true;

    document.getElementById('divgrid').style.display = "none";
    document.getElementById('divdata').style.display = "block";
    document.getElementById('saveshow').style.display = "block";
    document.getElementById('showcreate').style.display = "none";
    document.getElementById('hidetr').style.display = "none";
    document.getElementById('txtnChName').focus();
    CancelClick();
    if (document.getElementById('txtnChName').options.length == 2) {
        document.getElementById('txtnChName').selectedIndex = 1;
    }
    return false;
}

function CancelClick() {
    document.getElementById('txtnChName').value = "";
    document.getElementById('txtnDate').value = "";
    document.getElementById('txtnProgType').value = "";
    document.getElementById('txtnProgName').value = "";
    document.getElementById('ddlnOrgRpt').value = "NR";
    document.getElementById('txtnPartNo').value = "";
    document.getElementById('txtnEpsoNo').value = "";
    document.getElementById('txtnTapeNo').value = "";
    document.getElementById('txtnFPCTime').value = "";
    document.getElementById('txtnDuartion').value = "";
    if (document.getElementById('txtnChName').options.length == 2) {
        document.getElementById('txtnChName').selectedIndex = 1;
    }
    return false;
}
function Entertabfun(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 13) {
        if (document.activeElement.id == "txtnChName") {
            if (document.getElementById('txtnDate').disabled == false)
                document.getElementById('txtnDate').focus();
            return false;
        }
        if (document.activeElement.id == "txtnDate") {
            if (document.getElementById('txtdayname').disabled == false)
                document.getElementById('txtdayname').focus();
            return false;
        }
        if (document.activeElement.id == "txtnProgType") {
            if (document.getElementById('txtnProgName').disabled == false)
                document.getElementById('txtnProgName').focus();
            return false;
        }
        if (document.activeElement.id == "txtnProgName") {
            if (document.getElementById('ddlnOrgRpt').disabled == false)
                document.getElementById('ddlnOrgRpt').focus();
            return false;
        }
        if (document.activeElement.id == "ddlnOrgRpt") {
            if (document.getElementById('txtnPartNo').disabled == false)
                document.getElementById('txtnPartNo').focus();
            return false;
        }
        if (document.activeElement.id == "txtnPartNo") {
            if (document.getElementById('txtnEpsoNo').disabled == false)
                document.getElementById('txtnEpsoNo').focus();
            return false;
        }
        if (document.activeElement.id == "txtnEpsoNo") {
            if (document.getElementById('txtnTapeNo').disabled == false)
                document.getElementById('txtnTapeNo').focus();
            return false;
        }
        if (document.activeElement.id == "txtnTapeNo") {
            if (document.getElementById('txtnFPCTime').disabled == false)
                document.getElementById('txtnFPCTime').focus();
            return false;
        }
        if (document.activeElement.id == "txtnFPCTime") {
            if (document.getElementById('txtnDuartion').disabled == false)
                document.getElementById('txtnDuartion').focus();
            return false;
        }
     

        if (document.activeElement.id == "txtdayname") {
            document.getElementById('btnsubmit').focus();
            return false;
        }
       

    }
    else if (document.activeElement.type == "button" || document.activeElement.type == "submit" || document.activeElement.type == "image") {
        return key;
    }
}

function SaveClick() {
    var msg = Daily_FPC.checkSession();
    if (msg.value == "false") {
        alert("Your session has been expired");
        window.location.href = "Login.aspx";
        return false;
    }

    if (document.getElementById('txtnChName').value == "" || document.getElementById('txtnChName').value == "0") {
        alert("Please Enter Channel Name");
        document.getElementById('txtnChName').value = "";
        document.getElementById('txtnChName').focus();

       
        return false;
    }
     var PCOMP_CODE = document.getElementById('hiddencompcode').value;
     var PCENT_CODE = document.getElementById('hdncenter').value;
     var PCHANNEL_CODE = document.getElementById('txtnChName').value;
     var dateformat = "";
    var PFPC_DATE = document.getElementById('txtnFPCTime').value;
    var PPROG_TYPE = "";
    var PPROG_CODE = "";
    var PORG_REP = "";
    var PPART_NO = document.getElementById('txtnPartNo').value;
    var PEPISODE_NO = document.getElementById('txtnEpsoNo').value;
    var PTAPE_NO = document.getElementById('txtnTapeNo').value;
    var PSTART_TIME = "";
    var PEND_TIME ="";
    var PDURATION = document.getElementById('txtnDuartion').value;
    var PROWID = "";
    var PTYPE = "";
    var PREMARKS = "";
    var PSTATUS = "";
    var PIP = document.getElementById('hdnip').value;
    var PCREATED_BY = document.getElementById('hdnuserid').value;
    var PEXTRA = "";
    var PEXTRA1 = "";
    var PEXTRA2 = "";
    var PEXTRA3 = "";
    var PEXTRA4 = "";
    var PEXTRA5 = "";
    if (headertext == "Edit") // in case of modify mode
    {
//        if (document.getElementById('txtnTapeNo').value == "" || document.getElementById('txtnTapeNo').value == "0") {
//            alert("Please Enter Tape No");
//            document.getElementById('txtnTapeNo').value = "";
//            document.getElementById('txtnTapeNo').focus();

//            return false;
//        }

//        if (document.getElementById('txtnDuartion').value == "" || document.getElementById('txtnDuartion').value == "0") {
//            alert("Please Enter Duration");
//            document.getElementById('txtnDuartion').value = "";
//            document.getElementById('txtnDuartion').focus();

//            return false;
//        }

//        var PSTART_TIME = document.getElementById('txtStartTime').value;

        var res = Daily_FPC.submit(PCOMP_CODE, PCENT_CODE, PCHANNEL_CODE, PFPC_DATE, PPROG_TYPE, PPROG_CODE, PORG_REP, PPART_NO, PEPISODE_NO, PTAPE_NO, PSTART_TIME, PEND_TIME, PDURATION, PROWID, PTYPE, PREMARKS, PSTATUS, PIP, PCREATED_BY,dateformat, PEXTRA, PEXTRA1, PEXTRA2, PEXTRA3, PEXTRA4, PEXTRA5);
        var ds = res.value;
        //        if (ds.Tables[0].Rows.length > 0) {
        //            alert("This Discription has been already assigned")
        //            document.getElementById('txtdes').value = "";
        //            document.getElementById('txtdes').focus();
        //            return false;


        //        }
        Call_Modify();

        return false;
    }
    
    else // in case of save mode
    {
        var gridlength = (document.getElementById('tblGridfrom').rows.length - 1);
        for (var i = 0; i < gridlength; i++) {
            if (document.getElementById("sstr_" + i).style.display != 'none') {

//                if (document.getElementById("stime_" + i).value == "") {
//                    alert("Please Select Start Time");
//                    document.getElementById("stime_" + i).focus();
//                    return false;
//                }

                if (document.getElementById("etime_" + i).value == "") {
                    alert("Please Select End Time Name");
                    document.getElementById("etime_" + i).focus();
                    return false;
                }
                if (document.getElementById("prtype_" + i).value == "") {
                    alert("Please Select Program Type");
                    document.getElementById("prtype_" + i).focus();
                    return false;
                }

                if (document.getElementById("prname_" + i).value == "") {
                    alert("Please Select Program Name");
                    document.getElementById("prname_" + i).focus();
                    return false;
                }
                if (document.getElementById("orgrpt_" + i).value == "") {
                    alert("Please Select Org/Rept");
                    document.getElementById("orgrpt_" + i).focus();
                    return false;
                }
                if (document.getElementById("durt_" + i).value == "") {
                    alert("Please Select Duration");
                    document.getElementById("durt_" + i).focus();
                    return false;
               }
               
            }
        }
         
         call_save();  
       
         
    }
}
     
function call_save() {



    var PCOMP_CODE = document.getElementById('hdncompcode').value;
    var PCENT_CODE = document.getElementById('hdncenter').value;
    var PCHANNEL_CODE = document.getElementById('txtnChName').value;
    var PFPC_DATE = document.getElementById('txtnDate').value;
    var dateformat = document.getElementById('hiddendateformat').value;


    if (PFPC_DATE != "") {
        if (dateformat == "dd/mm/yyyy") {
            PFPC_DATE = PFPC_DATE.split('/');
            PFPC_DATE = PFPC_DATE[1] + "/" + PFPC_DATE[0] + "/" + PFPC_DATE[2];
        }
        else if (dateformat == "mm/dd/yyyy") {

        }
        else if (dateformat == "yyyy/mm/dd") {
            PFPC_DATE = PFPC_DATE.split('/');
            PFPC_DATE = PFPC_DATE[1] + "/" + PFPC_DATE[2] + "/" + PFPC_DATE[0];
        }
        else {
            alert("Dateformat is either null or blank");
            return false;
        }
    }
    var PPART_NO = document.getElementById('txtnPartNo').value;
    var PROWID = "";
    var PTYPE = "I";
    var PREMARKS = "";
    var PSTATUS = "";
    var PIP = document.getElementById('hdnip').value;
    var PCREATED_BY = document.getElementById('hdnuserid').value;
    var PEXTRA = "";
    var PEXTRA1 = "";
    var PEXTRA2 = "";
    var PEXTRA3 = "";
    var PEXTRA4 = "";
    var PEXTRA5 = "";
                var gridlength = (document.getElementById('tblGridfrom').rows.length - 1);
                        for (var i = 0; i < gridlength; i++) {
                        if (document.getElementById("sstr_" + i).style.display != "none") {

                            var PSTART_TIME = document.getElementById("stime_" + i).value;
                        var PEND_TIME = document.getElementById("etime_" + i).value;
                        var PPROG_TYPE = document.getElementById("prtype_" + i).value;
                        var PORG_REP = document.getElementById("orgrpt_" + i).value;
                        var PEPISODE_NO = document.getElementById("epide_" + i).value;
                        var PTAPE_NO = document.getElementById("tapno_" + i).value;
                        var PDURATION = document.getElementById("durt_" + i).value;
                      var PPROG_TYPE =document.getElementById("prtype_" + i).value;
                      var PPROG_CODE = document.getElementById("prcode_" + i).value;
                      if (document.getElementById("typei_" + i).value == "I") {
                          var res_error = Daily_FPC.submit(PCOMP_CODE, PCENT_CODE, PCHANNEL_CODE, PFPC_DATE, PPROG_TYPE, PPROG_CODE, PORG_REP, PPART_NO, PEPISODE_NO, PTAPE_NO, PSTART_TIME, PEND_TIME, PDURATION, PROWID, "I", PREMARKS, PSTATUS, PIP, PCREATED_BY, dateformat, PEXTRA, PEXTRA1, PEXTRA2, PEXTRA3, PEXTRA4, PEXTRA5);
                      }
                      else {
                          var res_error = Daily_FPC.submit(PCOMP_CODE, PCENT_CODE, PCHANNEL_CODE, PFPC_DATE, PPROG_TYPE, PPROG_CODE, PORG_REP, PPART_NO, PEPISODE_NO, PTAPE_NO, PSTART_TIME, PEND_TIME, PDURATION, PROWID, "U", PREMARKS, PSTATUS, PIP, PCREATED_BY, dateformat, PEXTRA, PEXTRA1, PEXTRA2, PEXTRA3, PEXTRA4, PEXTRA5);
                      }
                          if (res_error.value == null) 
                          {
                            alert(res_error.error.description);
                            return false;
                         }
                      }         
            }


            alert("Record Succesfully Saved...");
            document.getElementById('txtdate').value = document.getElementById('txtnDate').value;
          //  CancelClick();
          fillgrid('F');

          return false;
    
   }
  
 
function Call_Modify() {
    var PCOMP_CODE = document.getElementById('hdncompcode').value;
    var PCENT_CODE = document.getElementById('hdncenter').value;
    var PCHANNEL_CODE = document.getElementById('txtnChName').value;
    var PFPC_DATE = document.getElementById('txtnDate').value;
    var dateformat = document.getElementById('hiddendateformat').value;


    if (PFPC_DATE != "") {
        if (dateformat == "dd/mm/yyyy") {
            PFPC_DATE = PFPC_DATE.split('/');
            PFPC_DATE = PFPC_DATE[1] + "/" + PFPC_DATE[0] + "/" + PFPC_DATE[2];
        }
        else if (dateformat == "mm/dd/yyyy") {

        }
        else if (dateformat == "yyyy/mm/dd") {
            PFPC_DATE = PFPC_DATE.split('/');
            PFPC_DATE = PFPC_DATE[1] + "/" + PFPC_DATE[2] + "/" + PFPC_DATE[0];
        }
        else {
            alert("Dateformat is either null or blank");
            return false;
        }
    }
    var PPART_NO = document.getElementById('txtnPartNo').value;
    var PROWID = "";
    var PTYPE = "I";
    var PREMARKS = "";
    var PSTATUS = "";
    var PIP = document.getElementById('hdnip').value;
    var PCREATED_BY = document.getElementById('hdnuserid').value;
    var PEXTRA = "";
    var PEXTRA1 = "";
    var PEXTRA2 = "";
    var PEXTRA3 = "";
    var PEXTRA4 = "";
    var PEXTRA5 = "";
    var gridlength = (document.getElementById('tblGridfrom').rows.length - 1);
    for (var i = 0; i < gridlength; i++) {
        if (document.getElementById("sstr_" + i).style.display != "none") {

            var PSTART_TIME = document.getElementById("stime_" + i).value;
            var PEND_TIME = document.getElementById("etime_" + i).value;
            var PPROG_TYPE = document.getElementById("prtype_" + i).value;
            var PORG_REP = document.getElementById("orgrpt_" + i).value;
            var PEPISODE_NO = document.getElementById("epide_" + i).value;
            var PTAPE_NO = document.getElementById("tapno_" + i).value;
            var PDURATION = document.getElementById("durt_" + i).value;
            var PPROG_TYPE = document.getElementById("prtype_" + i).value;
            var PPROG_CODE = document.getElementById("prcode_" + i).value;
            var PROWID = document.getElementById("rowidno_" + i).value;
     
                var res_error = Daily_FPC.submit(PCOMP_CODE, PCENT_CODE, PCHANNEL_CODE, PFPC_DATE, PPROG_TYPE, PPROG_CODE, PORG_REP, PPART_NO, PEPISODE_NO, PTAPE_NO, PSTART_TIME, PEND_TIME, PDURATION, PROWID, "U", PREMARKS, PSTATUS, PIP, PCREATED_BY, dateformat, PEXTRA, PEXTRA1, PEXTRA2, PEXTRA3, PEXTRA4, PEXTRA5);
            
            if (res_error.value == null) {
                alert(res_error.error.description);
                return false;
            }
        }
    }






    alert("Record Updated Succesfully");
    document.getElementById('txtdate').value = document.getElementById('txtnDate').value;
    //CancelClick();
   
    fillgrid('F');
    return false;

}


function fillgrid(txt_id, input) {
    document.getElementById('divgrid').style.display = "block";
    document.getElementById('divcrete').style.display = "block";
    document.getElementById('divdata').style.display = "none";
    document.getElementById('showcreate').style.display = "block";
    document.getElementById('saveshow').style.display = "none";
    document.getElementById('hidetr').style.display = "block";
    document.getElementById('move_tag').style.display = "none";
    document.getElementById('movetage').style.display = "block";
    document.getElementById('btnform').disabled = false;


    var PCOMP_CODE = document.getElementById('hdncompcode').value;
    var PCHANNEL_CODE = document.getElementById('txtchname').value;
    if (document.getElementById('txtchname').value == "Search here...") {
        PCHANNEL_CODE = "";
    }
    var PPROG_CODE = document.getElementById('txtprogname').value;
    if (document.getElementById('txtprogname').value == "Search here...") {
         PPROG_CODE = "";
     }
     var PFPC_DATE = document.getElementById('txtdate').value;
     var dateformat = document.getElementById('hiddendateformat').value;


     if (PFPC_DATE != "") {
         if (dateformat == "dd/mm/yyyy") {
             PFPC_DATE = PFPC_DATE.split('/');
             PFPC_DATE = PFPC_DATE[1] + "/" + PFPC_DATE[0] + "/" + PFPC_DATE[2];
         }
         else if (dateformat == "mm/dd/yyyy") {

         }
         else if (dateformat == "yyyy/mm/dd") {
             PFPC_DATE = PFPC_DATE.split('/');
             PFPC_DATE = PFPC_DATE[1] + "/" + PFPC_DATE[2] + "/" + PFPC_DATE[0];
         }
         else {
             alert("Dateformat is either null or blank");
             return false;
         }
     }

    var PCENT_CODE = document.getElementById('hdncenter').value;
   
    var PPROG_TYPE = "";
   // var PPROG_CODE = "";
    var PORG_REP = "";
    var PPART_NO ="";
    var PEPISODE_NO = "";
    var PTAPE_NO = "";
    var PSTART_TIME = "";
    var PEND_TIME ="";
    var PDURATION = "";
    var PROWID = "";
    var PTYPE = "G";
    var PREMARKS = "";
    var PSTATUS = "";
    var PIP = "";
    var PCREATED_BY = "";
    var PEXTRA = "";
    var PEXTRA1 = "";
    var PEXTRA2 = "";
    var PEXTRA3 = "";
    var PEXTRA4 = "";
    var PEXTRA5 = "";
   
    var res = Daily_FPC.submit(PCOMP_CODE, PCENT_CODE, PCHANNEL_CODE, PFPC_DATE, PPROG_TYPE, PPROG_CODE, PORG_REP, PPART_NO, PEPISODE_NO, PTAPE_NO, PSTART_TIME, PEND_TIME, PDURATION, PROWID, PTYPE, PREMARKS, PSTATUS, PIP, PCREATED_BY,dateformat, PEXTRA, PEXTRA1, PEXTRA2, PEXTRA3, PEXTRA4, PEXTRA5);
    if (res.value == null) {
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
        document.getElementById('imgbtnprevgrid').disabled = true;
        document.getElementById('txtcurrpage').value = "";
        document.getElementById('lbltpage').value = 0;
        document.getElementById('result').innerHTML = "";
    }
    return false;
    call_GridExecute();
}

function call_GridExecute(res) {

    document.getElementById('txtcurrpage').value = currpage;
    ExecuteGridRec();
    return false;
}

function ExecuteGridRec() {
     var srno1 = "";
     var progid, dategid, chanellgid, epgid, startgid, endgid, durgid;
     var ssrno1="";
     str = "<div id=\"griddiv\" runat=\"server\" style=\"OVERFLOW: auto;WIDTH:100%; height:400px; \">";
     str += "<table id=\"tblGridfrom\" width=\"100%\"><tr style=\"display:none;\"></tr></table></div>";
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
        ssrno1++;
        Make_Row = document.createElement("tr");

        Make_Row.id = "sstr1_" + k;
        
        if (k % 2 == 0) {
            Make_Row.style.backgroundColor = "#F7F6F3";
        }
        else {
            Make_Row.style.backgroundColor = "white";
        }
     
        srno1  = "srno1_" + k;
        progid = "progid_" + k;
        dategid = "dategid_" + k;
        chanellgid = "chanellgid_" + k;
        epgid = "epgid_" + k;
        startgid = "startgid_" + k;
        endgid = "endgid_" + k;
        durgid = "durgid_" + k;
        
        
        make_td = document.createElement("td");
        make_td.align = "center";
        make_td.width = "2%"
        if (k % 2 == 0) {
            str = "<input class=\"gridtext\" readonly  style='width:100%' type=\"text\" id=" + srno1 + "   value='" + ssrno1 + "' />";
        }
        else {
            str = "<input class=\"gridtext2\" readonly style='width:100%'  type=\"text\" id=" + srno1 + "  value='" + ssrno1 + "' />";
        }
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);



        make_td = document.createElement("td");
        make_td.className = "GridHdtd3";
        make_td.align = "center";
        make_td.width = "10%";
        if (k % 2 == 0) {
            str = "<input class=\"gridtext\" readonly  style='width:100%' type=\"text\" id=" + progid + "   value='" + dsgexec.Tables[0].Rows[k].PROG_NAME + "'  />";
        }
        else {
            str = "<input class=\"gridtext2\" readonly  style='width:100%' type=\"text\" id=" + progid + "   value='" + dsgexec.Tables[0].Rows[k].PROG_NAME + "'  />";
        }


        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);
        

        make_td = document.createElement("td");
        make_td.className = "GridHdtd3";
        make_td.align = "center";
        make_td.width = "8%";
        if (k % 2 == 0) {
            str = "<input class=\"gridtext\" style=\"width:100%; cursor:pointer; color:Blue;\" onclick='return getopen(event);' ReadOnly='true' type=\"text\" id=" + dategid + " value='" + dsgexec.Tables[0].Rows[k].FPC_DATE + "' title='" + "" + "' />";
        }
        else {
            str = "<input class=\"gridtext2\" style=\"width:100%; cursor:pointer; color:Blue;\" onclick='return getopen(event);' ReadOnly='true' type=\"text\" id=" + dategid + " value='" + dsgexec.Tables[0].Rows[k].FPC_DATE + "' title='" + "" + "' />";
        }
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);

        make_td = document.createElement("td");
        make_td.className = "GridHdtd3";
        make_td.align = "center";
        make_td.width = "10%";
        if (k % 2 == 0) {
            str = "<input class=\"gridtext\" readonly  style='width:100%' type=\"text\" id=" + chanellgid + "   value='" + dsgexec.Tables[0].Rows[k].CHANNEL_NAME + "'  />";
        }
        else {
            str = "<input class=\"gridtext2\" readonly  style='width:100%' type=\"text\" id=" + chanellgid + "   value='" + dsgexec.Tables[0].Rows[k].CHANNEL_NAME + "'  />";
        }


        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);

        make_td = document.createElement("td");
        make_td.className = "GridHdtd3";
        make_td.align = "center";
        make_td.width = "8%";
        if (k % 2 == 0) {
            str = "<input class=\"gridtext\" readonly  style='width:100%' type=\"text\" id=" + epgid + "   value='" + fndnull1(dsgexec.Tables[0].Rows[k].EPISODE_NO) + "'  />";
        }
        else {
            str = "<input class=\"gridtext2\" readonly  style='width:100%' type=\"text\" id=" + epgid + "   value='" + fndnull1(dsgexec.Tables[0].Rows[k].EPISODE_NO) + "'  />";
        }


        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);



        make_td = document.createElement("td");
        make_td.className = "GridHdtd3";
        make_td.align = "center";
        make_td.width = "8%";
        if (k % 2 == 0) {
            str = "<input class=\"gridtext\" readonly  style='width:100%' type=\"text\" id=" + startgid + "   value='" + fndnull1(dsgexec.Tables[0].Rows[k].START_TIME) + "'  />";
        }
        else {
            str = "<input class=\"gridtext2\" readonly  style='width:100%' type=\"text\" id=" + startgid + "   value='" + fndnull1(dsgexec.Tables[0].Rows[k].START_TIME) + "'  />";
        }
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);


        make_td = document.createElement("td");
        make_td.className = "GridHdtd3";
        make_td.align = "center";
        make_td.width = "8%";
        if (k % 2 == 0) {
            str = "<input class=\"gridtext\" readonly  style='width:100%' type=\"text\" id=" + endgid + "   value='" + fndnull1(dsgexec.Tables[0].Rows[k].END_TIME) + "'  />";
        }
        else {
            str = "<input class=\"gridtext2\" readonly  style='width:100%' type=\"text\" id=" + endgid + "   value='" + fndnull1(dsgexec.Tables[0].Rows[k].END_TIME) + "'  />";
        }
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);


        make_td = document.createElement("td");
        make_td.className = "GridHdtd3";
        make_td.align = "center";
        make_td.width = "8%";
        if (k % 2 == 0) {
            str = "<input class=\"gridtext\" readonly  style='width:100%' type=\"text\" id=" + durgid + "   value='" + fndnull1(dsgexec.Tables[0].Rows[k].DURATION) + "'  />";
        }
        else {
            str = "<input class=\"gridtext2\" readonly  style='width:100%' type=\"text\" id=" + durgid + "   value='" + fndnull1(dsgexec.Tables[0].Rows[k].DURATION) + "'  />";
        }
        make_td.innerHTML = str;
        Make_Row.appendChild(make_td);

        document.getElementById('griddiv').getElementsByTagName('tbody')[0].appendChild(Make_Row);

    }
}



function deleteclick(id) {

    var key = event.keyCode ? event.keyCode : event.which;
    if (confirm("Are you sure you want to delete this record?")) {
        activeidgp = document.activeElement.id;
        var id = activeidgp.split("_");

        var PCOMP_CODE = document.getElementById('hdncompcode').value;
    var PCENT_CODE = document.getElementById('hdncenter').value;
    var PCHANNEL_CODE = document.getElementById('txtnChName').value;
    var PFPC_DATE = document.getElementById('txtnDate').value;
    var PPROG_TYPE = "";
    var PPROG_CODE = "";
    var PORG_REP = "";
    var PPART_NO = "";
    var PEPISODE_NO = "";
    var PTAPE_NO = "";
    var PSTART_TIME = "";
    var PEND_TIME ="";
    var PDURATION = "";
    var PROWID = document.getElementById("rowidno_" + id[1]).value;
    var PTYPE = "D";
    var PREMARKS = "";
    var PSTATUS = "";
    var PIP = document.getElementById('hdnip').value;
    var PCREATED_BY = "";
    var PEXTRA = "";
    var PEXTRA1 = "";
    var PEXTRA2 = "";
    var PEXTRA3 = "";
    var PEXTRA4 = "";
    var PEXTRA5 = "";
    var dateformat = "";

    PFPC_DATE = PFPC_DATE.split("/");
    PFPC_DATE = PFPC_DATE[1] + "/" + PFPC_DATE[0] + "/" + PFPC_DATE[2];
    
        var res_error = Daily_FPC.submit(PCOMP_CODE, PCENT_CODE, PCHANNEL_CODE, PFPC_DATE, PPROG_TYPE, PPROG_CODE, PORG_REP, PPART_NO, PEPISODE_NO, PTAPE_NO, PSTART_TIME, PEND_TIME, PDURATION, PROWID, PTYPE, PREMARKS, PSTATUS, PIP, PCREATED_BY,dateformat, PEXTRA, PEXTRA1, PEXTRA2, PEXTRA3, PEXTRA4, PEXTRA5);
        if (res_error.value == null) {
            alert(res_error.error.description);
            return false
        }



        alert("Record Succesfully Deleted...");
    }

    fillgrid('F');
    return false;
}

function deleteclick1(event) {

    var key = event.keyCode ? event.keyCode : event.which;
    if (confirm("Are you sure you want to delete this record?")) {
        activeidgp = document.activeElement.id;
        var id = activeidgp.split("_");

    var PCOMP_CODE = document.getElementById('hiddencompcode').value;
    var PCENT_CODE = document.getElementById('hiddencenter').value;
    var PCHANNEL_CODE = "";
    var PFPC_DATE = "";
    var PPROG_TYPE = "";
    var PPROG_CODE = "";
    var PORG_REP = document.getElementById('orgrpt1_' + id[1]).value;
    var PPART_NO = "";
    var PEPISODE_NO = "";
    var PTAPE_NO = "";
    var PSTART_TIME = "";
    var PEND_TIME ="";
    var PDURATION = "";
    var PROWID = "";
    var PTYPE = "D";
    var PREMARKS = "";
    var PSTATUS = "";
    var PIP = document.getElementById('hdnip').value;
    var PCREATED_BY = "";
    var PEXTRA = "";
    var PEXTRA1 = "";
    var PEXTRA2 = "";
    var PEXTRA3 = "";
    var PEXTRA4 = "";
    var PEXTRA5 = "";
    var dateformat = "";
    var res_error = Daily_FPC.submit(PCOMP_CODE, PCENT_CODE, PCHANNEL_CODE, PFPC_DATE, PPROG_TYPE, PPROG_CODE, PORG_REP, PPART_NO, PEPISODE_NO, PTAPE_NO, PSTART_TIME, PEND_TIME, PDURATION, PROWID, PTYPE, PREMARKS, PSTATUS, PIP, PCREATED_BY, dateformat,PEXTRA, PEXTRA1, PEXTRA2, PEXTRA3, PEXTRA4, PEXTRA5);
        if (res_error.value == null) {
            alert(res_error.error.description);
            return false
        }



        alert("Record Succesfully Deleted...");
    }

    fillgrid('F');
    return false;
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

    editflag = "N";
    return false
}

function editdata() {
    document.getElementById('saveshow').style.display = "block";
    document.getElementById('editshow').style.display = "none";
    document.getElementById('btnform').disabled = true;
    document.getElementById('btnsubmit').style.display = "none";
    headertext = "Edit";
    document.getElementById('txtnChName').disabled = false;
    document.getElementById('txtnProgType').disabled = false;
    document.getElementById('txtnProgName').disabled = false;
    document.getElementById('ddlnOrgRpt').disabled = false;
    document.getElementById('txtnEpsoNo').disabled = false;
    document.getElementById('txtnTapeNo').disabled = false;
    document.getElementById('txtnDuartion').disabled = false;
//    document.getElementById('txtChannelName').focus();
    editflag = "Y";
    return false;

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

   
    
    return false;
}
function getopen(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    activeidgp = document.activeElement.id;
    var id = activeidgp.split("_");

    var PCOMP_CODE = document.getElementById('hdncompcode').value;
    var PCHANNEL_CODE = "";
    if (document.getElementById('txtchname').value == "Search here...") {
        PCHANNEL_CODE = "";
    }
    var PPROG_CODE = "";
    if (document.getElementById('txtprogname').value == "Search here...") {
        PPROG_CODE = "";
    }
    var PFPC_DATE = document.getElementById('dategid_' + id[1]).value.toUpperCase();
    var dateformat = document.getElementById('hiddendateformat').value;


    if (PFPC_DATE != "") {
        if (dateformat == "dd/mm/yyyy") {
            PFPC_DATE = PFPC_DATE.split('/');
            PFPC_DATE = PFPC_DATE[1] + "/" + PFPC_DATE[0] + "/" + PFPC_DATE[2];
        }
        else if (dateformat == "mm/dd/yyyy") {

        }
        else if (dateformat == "yyyy/mm/dd") {
            PFPC_DATE = PFPC_DATE.split('/');
            PFPC_DATE = PFPC_DATE[1] + "/" + PFPC_DATE[2] + "/" + PFPC_DATE[0];
        }
        else {
            alert("Dateformat is either null or blank");
            return false;
        }
    }

    var PCENT_CODE = document.getElementById('hdncenter').value;

    var PPROG_TYPE = "";
    var PPROG_CODE = "";
    var PORG_REP = "";
    var PPART_NO = "";
    var PEPISODE_NO = "";
    var PTAPE_NO = "";
    var PSTART_TIME = "";
    var PEND_TIME = "";
    var PDURATION = "";
    var PROWID = "";
    var PTYPE = "G";
    var PREMARKS = "";
    var PSTATUS = "";
    var PIP = "";
    var PCREATED_BY = "";
    var PEXTRA = "";
    var PEXTRA1 = "";
    var PEXTRA2 = "";
    var PEXTRA3 = "";
    var PEXTRA4 = "";
    var PEXTRA5 = "";
    var res = Daily_FPC.submit(PCOMP_CODE, PCENT_CODE, PCHANNEL_CODE, PFPC_DATE, PPROG_TYPE, PPROG_CODE, PORG_REP, PPART_NO, PEPISODE_NO, PTAPE_NO, PSTART_TIME, PEND_TIME, PDURATION, PROWID, PTYPE, PREMARKS, PSTATUS, PIP, PCREATED_BY,dateformat, PEXTRA, PEXTRA1, PEXTRA2, PEXTRA3, PEXTRA4, PEXTRA5);


    document.getElementById('divgrid').style.display = "none";
    document.getElementById('divdata').style.display = "block";
    document.getElementById('form_tag').style.display = "block";
    document.getElementById('editshow').style.display = "block";
    document.getElementById('showcreate').style.display = "none";
    document.getElementById('hidetr').style.display = "none";
    document.getElementById('btnsubmit').style.display = "none";
    dsexe = res.value;
    rownum = 0;
    document.getElementById('txtnChName').value = fndnull1(dsexe.Tables[0].Rows[rownum].CHANNEL_CODE);
    document.getElementById('hiddenprogtype').value = fndnull1(dsexe.Tables[0].Rows[rownum].PROG_TYPE_CODE);
    document.getElementById('txtnProgType').value = fndnull1(dsexe.Tables[0].Rows[rownum].PROG_TYPE_NAME);
    
    document.getElementById('txtnProgName').value = fndnull1(dsexe.Tables[0].Rows[rownum].PROG_NAME);
    document.getElementById('ddlnOrgRpt').value = fndnull1(dsexe.Tables[0].Rows[rownum].ORG_REP);
    document.getElementById('txtnPartNo').value = fndnull1(dsexe.Tables[0].Rows[rownum].PART_NO);
    document.getElementById('txtnEpsoNo').value = fndnull1(dsexe.Tables[0].Rows[rownum].EPISODE_NO);
    document.getElementById('txtnTapeNo').value = fndnull1(dsexe.Tables[0].Rows[rownum].TAPE_NO);
    document.getElementById('txtnDuartion').value = fndnull1(dsexe.Tables[0].Rows[rownum].DURATION);
    document.getElementById('txtnDate').value = fndnull1(dsexe.Tables[0].Rows[rownum].FPC_DATE);
    Addrowonsh();
    if (editflag == "Y") {
            document.getElementById('txtnChName').disabled = false;
            document.getElementById('txtnProgType').disabled = false;
            document.getElementById('txtnProgName').disabled = false;
            document.getElementById('ddlnOrgRpt').disabled = false;
            document.getElementById('txtnPartNo').disabled = false;
            document.getElementById('txtnEpsoNo').disabled = false;
            document.getElementById('txtnTapeNo').disabled = false;
           document.getElementById('txtnFPCTime').disabled = false;
           document.getElementById('txtnDuartion').disabled = false;

           var gridlength1 = (document.getElementById('tblGridfrom').rows.length - 1);
              for (var i = 0; i < gridlength1; i++) {

                  document.getElementById('del_' + i).disabled = false;
    }
        }
        else {
            document.getElementById('txtnChName').disabled = true;
            document.getElementById('txtnProgType').disabled = true;
            document.getElementById('txtnProgName').disabled = true;
            document.getElementById('ddlnOrgRpt').disabled = true;
            document.getElementById('txtnPartNo').disabled = true;
            document.getElementById('txtnEpsoNo').disabled = true;
            document.getElementById('txtnTapeNo').disabled = true;
            document.getElementById('txtnFPCTime').disabled = true;
            document.getElementById('txtnDuartion').disabled = true;

            var gridlength1 = (document.getElementById('tblGridfrom').rows.length - 1);
              for (var i = 0; i < gridlength1; i++) {

                  document.getElementById('del_' + i).disabled = true;
    }
        }
       

    return false;

}

function open_form() {
    if (document.getElementById('txtprogname').value != "" || document.getElementById('ddlnOrgRpt').value != "") {
        document.getElementById('divgrid').style.display = "none";
        document.getElementById('divdata').style.display = "block";

        document.getElementById('hidetr').style.display = "none";
        document.getElementById('move_tag').style.display = "block";
        document.getElementById('movetage').style.display = "none";

        var PCOMP_CODE = document.getElementById('hdncompcode').value;
    var PCENT_CODE = document.getElementById('hdncenter').value;

    var PCHANNEL_CODE = document.getElementById('txtnChName').value;
    var PFPC_DATE = document.getElementById('txtnDate').value;
    var dateformat = document.getElementById('hiddendateformat').value;


    if (PFPC_DATE != "") {
        if (dateformat == "dd/mm/yyyy") {
            PFPC_DATE = PFPC_DATE.split('/');
            PFPC_DATE = PFPC_DATE[1] + "/" + PFPC_DATE[0] + "/" + PFPC_DATE[2];
        }
        else if (dateformat == "mm/dd/yyyy") {

        }
        else if (dateformat == "yyyy/mm/dd") {
            PFPC_DATE = PFPC_DATE.split('/');
            PFPC_DATE = PFPC_DATE[1] + "/" + PFPC_DATE[2] + "/" + PFPC_DATE[0];
        }
        else {
            alert("Dateformat is either null or blank");
            return false;
        }
    }
    var PPROG_TYPE = document.getElementById('txtnProgType').value;
    var PPROG_CODE = "";
    var PORG_REP = document.getElementById('ddlnOrgRpt').value;
    var PPART_NO = document.getElementById('txtnPartNo').value;
    var PEPISODE_NO = document.getElementById('txtnEpsoNo').value;
    var PTAPE_NO = document.getElementById('txtnTapeNo').value;
    var PSTART_TIME = "";
    var PEND_TIME ="";
    var PDURATION = document.getElementById('txtnDuartion').value;
    var PROWID = "";
    var PTYPE = "G";
    var PREMARKS = "";
    var PSTATUS = "";
    var PIP = document.getElementById('hdnip').value;
    var PCREATED_BY = "";
    var PEXTRA = "";
    var PEXTRA1 = "";
    var PEXTRA2 = "";
    var PEXTRA3 = "";
    var PEXTRA4 = "";
    var PEXTRA5 = "";

        var res = Daily_FPC.submit(PCOMP_CODE, PCENT_CODE, PCHANNEL_CODE, PFPC_DATE, PPROG_TYPE, PPROG_CODE, PORG_REP, PPART_NO, PEPISODE_NO, PTAPE_NO, PSTART_TIME, PEND_TIME, PDURATION, PROWID, PTYPE, PREMARKS, PSTATUS, PIP, PCREATED_BY,dateformat, PEXTRA, PEXTRA1, PEXTRA2, PEXTRA3, PEXTRA4, PEXTRA5);
        call_Execute(res);
    
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
      //  alert("First Enter 'Master Description'/'Master Name'");
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
function fndnull1(myval) {
    if (myval == "undefined" || myval == null) {
        myval = "";
    }
    return myval
}
function ExecuteRecords() {
    if (dsexe.Tables[0].Rows.length > 0) {
        document.getElementById('txtnChName').value = fndnull1(dsexe.Tables[0].Rows[rownum].CHANNEL_CODE);
        document.getElementById('hiddenprogtype').value =  fndnull1(dsexe.Tables[0].Rows[rownum].PROG_TYPE_CODE);
        document.getElementById('txtnProgType').value = fndnull1( dsexe.Tables[0].Rows[rownum].PROG_TYPE_NAME);

        document.getElementById('txtnProgName').value =  fndnull1(dsexe.Tables[0].Rows[rownum].PROG_NAME);
        document.getElementById('ddlnOrgRpt').value =  fndnull1(dsexe.Tables[0].Rows[rownum].ORG_REP);
        document.getElementById('txtnPartNo').value =  fndnull1(dsexe.Tables[0].Rows[rownum].PART_NO);
        document.getElementById('txtnEpsoNo').value =  fndnull1(dsexe.Tables[0].Rows[rownum].EPISODE_NO);
        document.getElementById('txtnTapeNo').value =  fndnull1(dsexe.Tables[0].Rows[rownum].TAPE_NO);
        document.getElementById('txtnDuartion').value =  fndnull1(dsexe.Tables[0].Rows[rownum].DURATION);
        document.getElementById('txtnDate').value =  fndnull1(dsexe.Tables[0].Rows[rownum].FPC_DATE);
        Addrowonsh();
        if (editflag == "Y") {
            document.getElementById('txtnChName').disabled = false;
            document.getElementById('txtnProgType').disabled = false;
            document.getElementById('txtnProgName').disabled = false;
            document.getElementById('ddlnOrgRpt').disabled = false;
            document.getElementById('txtnPartNo').disabled = false;
            document.getElementById('txtnEpsoNo').disabled = false;
            document.getElementById('txtnTapeNo').disabled = false;
            document.getElementById('txtnFPCTime').disabled = false;
            document.getElementById('txtnDuartion').disabled = false;

            var gridlength1 = (document.getElementById('tblGridfrom').rows.length - 1);
            for (var i = 0; i < gridlength1; i++) {

                document.getElementById('del_' + i).disabled = false;
            }
        }
        else {
            document.getElementById('txtnChName').disabled = true;
            document.getElementById('txtnProgType').disabled = true;
            document.getElementById('txtnProgName').disabled = true;
            document.getElementById('ddlnOrgRpt').disabled = true;
            document.getElementById('txtnPartNo').disabled = true;
            document.getElementById('txtnEpsoNo').disabled = true;
            document.getElementById('txtnTapeNo').disabled = true;
            document.getElementById('txtnFPCTime').disabled = true;
            document.getElementById('txtnDuartion').disabled = true;

            var gridlength1 = (document.getElementById('tblGridfrom').rows.length - 1);
            for (var i = 0; i < gridlength1; i++) {

                document.getElementById('del_' + i).disabled = true;
            }
        }
       
    }
}
function gotgrid(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    activeidgp = document.activeElement.id;
    var id = activeidgp.split("_");
    var PCOMP_CODE = document.getElementById('hdncompcode').value;
    var PCENT_CODE = document.getElementById('hdncenter').value;
    var PPROG_CODE = document.getElementById('prcode_' + id[1]).value.toUpperCase();
    var PEPISODE_CODE = document.getElementById('epide_' + id[1]).value.toUpperCase();
    var resgrid = Daily_FPC.segment(PCOMP_CODE, PCENT_CODE, PPROG_CODE, PEPISODE_CODE);
    var dsGrid = resgrid.value;
    if (dsGrid == null) {
        alert(res.error.description);
        return false;
    }


    if (dsGrid.Tables[0].Rows.length > 0) {
        var seg, segcap, viedoid, tcrin, tcrout, dur;

        

            str = "<div id=\"griddivsegm\" runat=\"server\" style=\"OVERFLOW:  max-height: 150px; auto;WIDTH:100%;  \">";
            str += "<table id=\"tblGridsegment\" width=\"100%\"><tr style=\"display:none;\"></tr></table></div>";
            document.getElementById('Segmentres').innerHTML = str;

            var gridtab_vari2 = document.getElementById('tblGridsegment').rows.length;

            for (var k = 0; k < dsGrid.Tables[0].Rows.length; k++) {
            Make_Row = document.createElement("tr");
            Make_Row.id = "sstr1_" + k;

            seg = "seg_" + k;
            segcap = "segcap_" + k;
            viedoid = "viedoid_" + k;
            tcrin = "tcrin_" + k;
            tcrout = "tcrout_" + k;
            dur = "dur_" + k;


            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.align = "center";
            make_td.width = "8%"
            str = "<input class=\"newgridtext\" readonly style='width:100%; background-color: #ffffff'  type=\"text\" id=" + seg + "  value='" + dsGrid.Tables[0].Rows[k].SEGMENT_NO + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.align = "center";
            make_td.width = "22%"
            str = "<input class=\"newgridtext\" readonly style='width:100%; background-color: #ffffff'  type=\"text\" id=" + segcap + "  value='" + dsGrid.Tables[0].Rows[k].SEG_CAPTION + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);


            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.align = "center";
            make_td.width = "16%"
            str = "<input class=\"newgridtext\" readonly style='width:100%'  type=\"text\" id=" + viedoid + "  value='" + dsGrid.Tables[0].Rows[k].VIDEO_ID + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);


            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.align = "center";
            make_td.width = "16%"
            str = "<input class=\"newgridtext\" readonly style='width:100%'  type=\"text\" id=" + tcrin + "  value='" + dsGrid.Tables[0].Rows[k].TCR_IN + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);



            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.align = "center";
            make_td.width = "16%"
            str = "<input class=\"newgridtext\" readonly style='width:100%'  type=\"text\" id=" + tcrout + "  value='" + dsGrid.Tables[0].Rows[k].TCR_OUT + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.align = "center";
            make_td.width = "16%"
            str = "<input class=\"newgridtext\" readonly style='width:100%'  type=\"text\" id=" + dur + "  value='" + dsGrid.Tables[0].Rows[k].TOTAL_PROG_DURATION + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            document.getElementById('griddivsegm').getElementsByTagName('tbody')[0].appendChild(Make_Row);
        }


        return false;
    }
}
//*********************************************************gride******************************************************************



   function Addrowonsh() {

       var PCOMP_CODE = document.getElementById('hdncompcode').value;
    var PCENT_CODE = document.getElementById('hdncenter').value;
    var PCHANNEL_CODE = document.getElementById('txtnChName').value;
    var PFPC_DATE = document.getElementById('txtnDate').value;
     var dateformat = document.getElementById('hiddendateformat').value;
     if (document.getElementById('txtnChName').value == "" || document.getElementById('txtnChName').value == "0") {
         alert("Please Enter Channel Name");         
         document.getElementById('txtnChName').focus();
         return false;
     }
     if (document.getElementById('txtnDate').value == "") {
         alert("Please Enter Sc Date");
         document.getElementById('txtnDate').focus();
         return false;
     }

     if (PFPC_DATE != "") {
                if (dateformat == "dd/mm/yyyy") {
                    PFPC_DATE = PFPC_DATE.split('/');
                    PFPC_DATE = PFPC_DATE[1] + "/" + PFPC_DATE[0] + "/" + PFPC_DATE[2];
                }
                else if (dateformat == "mm/dd/yyyy") {

                }
                else if (dateformat == "yyyy/mm/dd") {
                PFPC_DATE = PFPC_DATE.split('/');
                PFPC_DATE = PFPC_DATE[1] + "/" + PFPC_DATE[2] + "/" + PFPC_DATE[0];
                }
                else {
                    alert("Dateformat is either null or blank");
                    return false;
                }
            }
    var PPROG_TYPE  = "";
    var PPROG_CODE = "";
    var PORG_REP = "";
    var PPART_NO = "";
    var PEPISODE_NO = "";
    var PTAPE_NO = "";
    var PSTART_TIME = "";
    var PEND_TIME ="";
    var PDURATION = "";
    var PROWID = "";
    var PTYPE = "F";
    var PREMARKS = "";
    var PSTATUS = "";
    var PIP = "";
    var PCREATED_BY = "";
    var PEXTRA = "";
    var PEXTRA1 = "";
    var PEXTRA2 = "";
    var PEXTRA3 = "";
    var PEXTRA4 = "";
    var PEXTRA5 = "";

    var res = Daily_FPC.submit(PCOMP_CODE, PCENT_CODE, PCHANNEL_CODE, PFPC_DATE, PPROG_TYPE, PPROG_CODE, PORG_REP, PPART_NO, PEPISODE_NO, PTAPE_NO, PSTART_TIME, PEND_TIME, PDURATION, PROWID, PTYPE, PREMARKS, PSTATUS, PIP, PCREATED_BY,dateformat, PEXTRA, PEXTRA1, PEXTRA2, PEXTRA3, PEXTRA4, PEXTRA5);
    ds = res.value;
 

        var srno = "";
        var stime = "";
        var etime = "";
        var prtype = "";
        var prname = "";
        var orgrpt = "";
        var seg = "";
        var epide = "";
        var tapno = "";
        var durt = "";
        var rowidno = "";
        var del = "";
        var ssrno = "";
        var prcode = "";
        var typei = "";
        str = "<div id=\"griddivform1\" runat=\"server\" style=\"OVERFLOW: auto;WIDTH:100% \">";
        str += "<table cellpadding=\"0\" cellspacing=\"1px\" id=\"tblGridfrom\"  border=1><tr>";
        str += "<td align=\"center\" valign=\"top\"  class=\"GridHderMtd4\">Sr.No</td>";
        str += "<td align=\"center\" valign=\"top\"  class=\"GridHderMtd4\">Start Time</td>";
        str += "<td align=\"center\" valign=\"top\"  class=\"GridHderMtd4\">End Time</td>";
        str += "<td align=\"center\" valign=\"top\" class=\"GridHderMtd4\">	Program Name</td>";
        str += "<td align=\"center\" valign=\"top\"  class=\"GridHderMtd4\">Episode No</td>";
        str += "<td align=\"center\" valign=\"top\"  class=\"GridHderMtd4\">Tape No</td>";
        str += "<td align=\"center\" valign=\"top\"  class=\"GridHderMtd4\">Orignal/Repeat</td>";
        str += "<td align=\"center\" valign=\"top\" class=\"GridHderMtd4\">Duration (Min)</td>";
        str += "<td align=\"center\" valign=\"top\"  class=\"GridHderMtd4\">Del</td>";

        str += "</tr></table></div>";
        if (ds.Tables[0].Rows.length > 0) {
        document.getElementById('FPCResult').innerHTML = str;

        var gridtab_vari2 = document.getElementById('tblGridfrom').rows.length;

        for (var i = 0; i < ds.Tables[0].Rows.length; i++) {
            var gridtab_vari = document.getElementById('tblGridfrom');

            ssrno++;
            Make_Row = document.createElement("tr");
            Make_Row.id = "sstr_" + i;

            srno = "srno_" + i;
            stime = "stime_" + i;
            etime = "etime_" + i;
            prtype = "prtype_" + i;
            prname = "prname_" + i;
            orgrpt = "orgrpt_" + i;
            seg = "seg_" + i;
            epide = "epide_" + i;
            tapno = "tapno_" + i;
            durt = "durt_" + i;
            del = "del_" + i;
            rowidno = "rowidno_" + i;
            prcode = "prcode_" + i;
            typei = "typei_" + i;


  
            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.style.display = "none";
            make_td.align = "center";
            str = "<input class=\"newgridtext\"  style='width:5px; background-color: #ffffcc;'  type=\"text\" id=" + typei + "  value='" + ds.Tables[0].Rows[i].FCNAME + "' />";

            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.align = "center";
            make_td.setAttribute("width", "6%");
            str = "<input class=\"newgridtext\" readonly style='width:100%; background-color: #ffffcc;'  type=\"text\" id=" + srno + "  value='" + ssrno + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.style.display = "none";
            make_td.align = "center";
            str = "<input class=\"newgridtext\"  style='width:5px; background-color: #ffffcc;'  type=\"text\" id=" + rowidno + "  value='" + ds.Tables[0].Rows[i].ROW_ID + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.align = "center";
            make_td.setAttribute("width", "12%");
            str = "<input class=\"newgridtext\" readonly style='width:100%; background-color: #ffffcc;'  type=\"text\" id=" + stime + "  value='" + ds.Tables[0].Rows[i].STATR_TIME + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.className = "GridHdtd3";
            make_td.align = "center";
            make_td.setAttribute("width", "12%");
            str = "<input class=\"newgridtext\" readonly style='width:100%; background-color: #ffffcc;' type=\"text\" id=" + etime + "   value='" + ds.Tables[0].Rows[i].END_TIME + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.style.display = "none";

            str = "<input class=\"newgridtext\"  readonly style='width:100%; background-color: #ffffcc;'  type=\"text\" id=" + prtype + "  value='" + ds.Tables[0].Rows[i].PROG_TYPE_CODE + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.style.display = "none";
            str = "<input class=\"newgridtext\" readonly   style='width:100%; background-color: #ffffcc;' type=\"text\" id=" + prcode + "   value='" + ds.Tables[0].Rows[i].PROG_CODE + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            //cursor: pointer; color: Blue; onclick='return gotgrid(event);' 
            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.align = "center";
            make_td.setAttribute("width", "16%");
            str = "<input class=\"newgridtext\" onkeydown=\"return getprogramgrid(event);\"   style=\"width:100%;\"  type=\"text\" id=" + prname + "   value='" + ds.Tables[0].Rows[i].PROG_NAME + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtd3";
            make_td.align = "center";
            make_td.setAttribute("width", "12%");
            if (ds.Tables[0].Rows[i].EPISODE_NO == null || ds.Tables[0].Rows[i].EPISODE_NO == "") {
                str = "<input class=\"newgridtext\"    style='width:100%' type=\"text\" id=" + epide + " value='' />";
            }
            else {
                str = "<input class=\"newgridtext\"    style='width:100%' type=\"text\" id=" + epide + " value='" + ds.Tables[0].Rows[i].EPISODE_NO + "' />";

            }
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtd3";
            make_td.align = "center";
            make_td.setAttribute("width", "12%");
            if (ds.Tables[0].Rows[i].TAPE_NO == null || ds.Tables[0].Rows[i].TAPE_NO == "") {
                str = "<input class=\"newgridtext\"    style='width:100%' type=\"text\" id=" + tapno + " value='' />";
            }
            else {
                str = "<input class=\"newgridtext\"    style='width:100%' type=\"text\" id=" + tapno + " value='" + ds.Tables[0].Rows[i].TAPE_NO + "' />";
            }
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);


            make_td = document.createElement("td");
            make_td.align = "center";
            make_td.setAttribute("width", "12%");
            make_td.style.display = "none";
            if (ds.Tables[0].Rows[i].SEG == null || ds.Tables[0].Rows[i].SEG == "") {
                str = "<input class=\"newgridtext\"  readonly style='width:100%'  type=\"text\" id=" + seg + "  value='' />";
            }
            else {
                str = "<input class=\"newgridtext\" readonly style='width:100% ; background-color: #ffffcc;'  type=\"text\" id=" + seg + "  value='" + ds.Tables[0].Rows[i].SEG + "' />";
            }
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);


            make_td = document.createElement("td");
            make_td.className = "GridHdtdr";
            make_td.setAttribute("width", "12%");
           // str = "<input class=\"newgridtext\" readonly   style='width:100%; background-color: #ffffcc;' type=\"text\" id=" + orgrpt + "   value='" + ds.Tables[0].Rows[i].ORG_REP + "' />";
            str = "<select  readonly class=\"dropdown\"   style='width:100%;height:16px;background-color: #ffffcc;' type=\"text\" id=" + orgrpt + "  <option value='0'>--Select--</option> <option value='O'>Orignal</option> <option value='R'>Repeat</option>/>";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);




            make_td = document.createElement("td");
            make_td.className = "GridHdtd3";
            make_td.align = "center";
            make_td.setAttribute("width", "12%");
            str = "<input class=\"newgridtext\" readonly   style='width:100%; background-color: #ffffcc;' type=\"text\" id=" + durt + " value='" + ds.Tables[0].Rows[i].DURATION + "' />";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);

            make_td = document.createElement("td");
            make_td.className = "GridHdtd3";
            make_td.align = "center";
            make_td.setAttribute("width", "6%");
            str = "<p  style=\"width:100%; border: 1px solid #929292; padding:0px; margin:0px;\"><input type=\"image\"  img src=\"images/gtk-cancel.png\" id=" + del + "  onclick='return deleteclick(this.id)'/></p>";
            make_td.innerHTML = str;
            Make_Row.appendChild(make_td);


           

            document.getElementById('griddivform1').getElementsByTagName('tbody')[0].appendChild(Make_Row);
            document.getElementById("orgrpt_" + i).value = ds.Tables[0].Rows[i].ORG_REP;
        }

    }
    else {
        alert("There is no Record");
    }
  
    return false;
}



//********************************************************program type f2*****************************************************************************


function Bindprogtype(event) {
    var key = event.keyCode ? event.keyCode : event.which; 
    if (key == 113 && document.activeElement.id == "txtnProgType") {


        document.getElementById("divprogtype").style.display = "block";
        aTag = eval(document.getElementById("txtnProgType"))
        var btag;
        var leftpos = 0;
        var toppos = 0;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divprogtype').scrollLeft;
        var scrolltop = document.getElementById('divprogtype').scrollTop;
        document.getElementById('divprogtype').style.left = document.getElementById("txtnProgType").offsetLeft + leftpos - tot + "px";
        document.getElementById('divprogtype').style.top = document.getElementById("txtnProgType").offsetTop + toppos - scrolltop + "px"; //"510px";
        var PCOMP_CODE = document.getElementById('hdncompcode').value;
        var PCENT_CODE = document.getElementById('hdncenter').value;
        var PSEACH = "";
        var PDESC = document.getElementById('txtnProgType').value.toUpperCase();
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PMIS_TYPE="PRM";
        Daily_FPC.Bindprogtype(PCOMP_CODE, PCENT_CODE, PMIS_TYPE, PDESC, PSEACH, PEXTRA, PEXTRA1, bindprogtype_callback);

    }

    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == "txtnProgType") {
            document.getElementById('hiddenprogtype').value = "";
        }
    }
    else if (key == 27) {
        document.getElementById("divprogtype").style.display = "none";
        document.getElementById('txtnProgType').focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "istprogtype") {
         //  fillladtypemast();
            return false;
        }
    }
    else if (key == 38) {
        if (document.getElementById("divprogtype").style.display == "block") {
            if (document.getElementById('istprogtype').value == '0') {
                document.getElementById('txtnProgType').focus();
            }
        }
    }
    else if (key == 9) {
document.getElementById("divprogtype").style.display = "none";
document.getElementById('txtnDate').focus();
return false;
}
    
     else if (key == 40) {
        if (document.getElementById("divprogtype").style.display == "block") {
            document.getElementById("istprogtype").focus();
        }
    }

    else {
        document.getElementById("divprogtype").style.display = "block";
        aTag = eval(document.getElementById("txtnProgType"))
        var btag;
        var leftpos = 0;
        var toppos = 10;
        do {
            aTag = eval(aTag.offsetParent);
            leftpos += aTag.offsetLeft;
            toppos += aTag.offsetTop;
            btag = eval(aTag)
        } while (aTag.tagName != "BODY" && aTag.tagName != "HTML");
        var tot = document.getElementById('divprogtype').scrollLeft;
        var scrolltop = document.getElementById('divprogtype').scrollTop;
        document.getElementById('divprogtype').style.left = document.getElementById("txtnProgType").offsetLeft + leftpos - tot + "px";
        document.getElementById('divprogtype').style.top = document.getElementById("txtnProgType").offsetTop + toppos - scrolltop + "px"; //"510px";
        var PCOMP_CODE = document.getElementById('hdncompcode').value;
         var PCENT_CODE = document.getElementById('hdncenter').value;
        var PSEACH = "G";
        var PDESC = document.getElementById('txtnProgType').value.toUpperCase();
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PMIS_TYPE="PRM";
        Daily_FPC.Bindprogtype(PCOMP_CODE, PCENT_CODE, PMIS_TYPE, PDESC, PSEACH, PEXTRA, PEXTRA1, bindprogtype_callback);

    }
   

}

function bindprogtype_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("istprogtype");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select  Program Type---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
           lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].MISC_MAST_NAME, ds.Tables[0].Rows[i].MISC_MAST_CODE);
        }


    }

    document.getElementById('hiddenprogtype').value = "";
    document.getElementById("istprogtype").value = "0";
    return false;
}

function fillprogtype(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if (key == 27) {
        if (document.activeElement.id == "txtnProgType" || document.activeElement.id == "istprogtype") {
            document.getElementById("divprogtype").style.display = "none";
            document.getElementById('txtnProgType').focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {

        if (document.getElementById("istprogtype").value == "0") {
           // alert("Please Select Program Type");
            return false;
        }
        else {
            document.getElementById("divprogtype").style.display = "none";
            var lstvalue = document.getElementById('istprogtype').value;
            for (var k = 0; k < document.getElementById("istprogtype").length; k++) {
                if (document.getElementById('istprogtype').options[k].value == lstvalue) {
                    document.getElementById('hiddenprogtype').value = document.getElementById('istprogtype').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById('txtnProgType').value = document.getElementById('istprogtype').options[k].textContent;
                    else
                        document.getElementById('txtnProgType').value = document.getElementById('istprogtype').options[k].innerText;

                    break;
                }
            }
        }
        document.getElementById('txtnProgType').focus();
        return false;
    }

}

//**************************************************program name f2************************************************

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
        
        var PROG_TYPE= document.getElementById('hiddenprogtype').value.toUpperCase();        
        
        Daily_FPC.Bindprogram(PCOMP_CODE, PCENT_CODE, PROG_TYPE, PDESC, PSEACH, PEXTRA, PEXTRA1, bindprogram_callback);

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
        if (document.activeElement.id == "istprogram") {
         //  fillladtypemast();
            return false;
        }
    }
    else if (key == 9) {
document.getElementById("divprogram").style.display = "none";
document.getElementById('ddlnOrgRpt').focus();
return false;
}
    else if (key == 38) {
        if (document.getElementById("divprogram").style.display == "block") {
            if (document.getElementById('istprogram').value == '0') {
                document.getElementById('txtnProgName').focus();
            }
        }
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
        var toppos = 10;
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
        
        var PROG_TYPE= document.getElementById('hiddenprogtype').value.toUpperCase();
        
        Daily_FPC.Bindprogram(PCOMP_CODE, PCENT_CODE, PROG_TYPE, PDESC, PSEACH, PEXTRA, PEXTRA1, bindprogram_callback);

    }
   

}

function bindprogram_callback(response) {
    var ds = response.value;
    var lstitem = document.getElementById("istprogram");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].PROG_NAME, ds.Tables[0].Rows[i].PROG_ID);
        }


    }

    document.getElementById('hiddenprogram').value = "";
    document.getElementById("istprogram").value = "0";
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
          //  alert("Please Select Program Name");
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
/////************************* bind Program grid
function getprogramgrid(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    activeidgp = document.activeElement.id;
    var id = activeidgp.split("_");

    if (key == 113 && document.activeElement.id == ("prname_" + id[1])) {


        document.getElementById("divprggrid").style.display = "block";
        aTag = eval(document.getElementById("prname_" + id[1]))
        var btag;
        var leftpos = -270;
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
        var tot = document.getElementById('divprggrid').scrollLeft;
        var scrolltop = document.getElementById('divprggrid').scrollTop;
        document.getElementById('divprggrid').style.left = document.getElementById("prname_" + id[1]).offsetLeft + leftpos - tot + "px";
        document.getElementById('divprggrid').style.top = document.getElementById("prname_" + id[1]).offsetTop + toppos - scrolltop + "px"; //"510px";


        var PDESC = document.getElementById('prname_' + id[1]).value.toUpperCase()
        var PCOMP_CODE = document.getElementById('hdncompcode').value;
        var PCENT_CODE = document.getElementById('hdncenter').value;
        var PSEACH = "";        
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PROG_TYPE = "";
        Daily_FPC.Bindprogram(PCOMP_CODE, PCENT_CODE, PROG_TYPE, PDESC, PSEACH, PEXTRA, PEXTRA1, bindprogramgrid_callback);

    }
    else if ((key == 8) || (key == 46)) {
        if (document.activeElement.id == ("prname_" + id[1])) {
            document.getElementById("prcode_" + id[1]).value = "";

        }
    }
    else if (key == 27) {
        document.getElementById("divprggrid").style.display = "none";
        document.getElementById("prname_" + id[1]).focus();
        return false;
    }
    else if (key == 13) {
        if (document.activeElement.id == "istproggrid") {

            return false;
        }
    }

    else if (key == 9) {
        document.getElementById("divprggrid").style.display = "none";
        return false;
    }
    else if (key == 38) {
        if (document.getElementById("divprggrid").style.display == "block") {
            if (document.getElementById("istproggrid").value == '0') {
                document.getElementById("prname_" + id[1]).focus();

            }
        }
    }
    else if (key == 40) {
        if (document.getElementById("divprggrid").style.display == "block") {
            document.getElementById("istproggrid").focus();
        }
    }
    else {
        document.getElementById("divprggrid").style.display = "block";
        aTag = eval(document.getElementById("prname_" + id[1]))
        var btag;
        var leftpos = -270;
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
        var tot = document.getElementById('divprggrid').scrollLeft;
        var scrolltop = document.getElementById('divprggrid').scrollTop;
        document.getElementById('divprggrid').style.left = document.getElementById("prname_" + id[1]).offsetLeft + leftpos - tot + "px";
        document.getElementById('divprggrid').style.top = document.getElementById("prname_" + id[1]).offsetTop + toppos - scrolltop + "px"; //"510px";

        var PDESC = document.getElementById('prname_' + id[1]).value.toUpperCase()
        var PCOMP_CODE = document.getElementById('hdncompcode').value;
        var PCENT_CODE = document.getElementById('hdncenter').value;
        var PSEACH = "";
        var PEXTRA = "";
        var PEXTRA1 = "";
        var PROG_TYPE = "";
        Daily_FPC.Bindprogram(PCOMP_CODE, PCENT_CODE, PROG_TYPE, PDESC, PSEACH, PEXTRA, PEXTRA1, bindprogramgrid_callback);

    }
}
function bindprogramgrid_callback(response) {
    var ds = response.value;
    var id = activeidgp.split("_");
    var lstitem = document.getElementById("istproggrid");
    lstitem.options.length = 0;
    lstitem.options[0] = new Option("-------- Select  Program Name ---------", "0");
    if (ds != null && ds.Tables[0].Rows.length > 0) {

        for (var i = 0; i < ds.Tables[0].Rows.length; ++i) {
            lstitem.options[lstitem.options.length] = new Option(ds.Tables[0].Rows[i].PROG_NAME, ds.Tables[0].Rows[i].PROG_ID);
        }


    }

    document.getElementById("prcode_" + id[1]).value = "";
    document.getElementById("istproggrid").value = "0";
 
    return false;
}

function filllprgramgrid(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    var id = activeidgp.split("_");

    if (key == 27) {
        if (document.activeElement.id == "prname_" || document.activeElement.id == "istproggrid") {
            document.getElementById("divprggrid").style.display = "none";
            document.getElementById("prname_" + id[1]).focus();
            return false;
        }
    }
    if (key == 13 || event.type == "click") {
        if (document.getElementById("istproggrid").value == "0") {
           // alert("Please Select Program Name");
            return false;
        }
        else {
            document.getElementById("divprggrid").style.display = "none";
            var lstvalue = document.getElementById('istproggrid').value;
            for (var k = 0; k < document.getElementById("istproggrid").length; k++) {
                if (document.getElementById('istproggrid').options[k].value == lstvalue) {
                    document.getElementById("prcode_" + id[1]).value = document.getElementById('istproggrid').options[k].value;
                    if (browser != "Microsoft Internet Explorer")
                        document.getElementById("prname_" + id[1]).value = document.getElementById('istproggrid').options[k].textContent;
                    else
                        document.getElementById("prname_" + id[1]).value = document.getElementById('istproggrid').options[k].innerText;

                    break;
                }
            }
        }

        document.getElementById("prname_" + id[1]).focus();
        return false;
    }
}

