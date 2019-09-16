//===================== This Javascript is used for Master field Validation ======================//
//Declaration of Global Varible

var daid;
var browser = navigator.appName;
// For Checking the Date
function settime1() {
    var dateformat = document.getElementById('hiddendateformat').value;
    if (document.activeElement.id.indexOf('dan') < 0 && daid.id != '') {
        alert(" Please Fill The Date In " + dateformat + " Format");
        daid.focus();
        daid.value = "";

    }
    //input.focus();
}

function checkdate(input) {
    var flagret = "T";
    var dateformat = document.getElementById('hiddendateformat').value;
    //==================To enter Date Without "/" ============================//
    var dateInitial = "20";
    var dateenter = input.value;
    if (dateenter.indexOf('/') < 0) {
        var date12 = "";
        flagret = "F";
        if (dateformat == "mm/dd/yyyy") {
            if (dateenter.length >= "8")
                date12 = dateenter.substring(0, 2) + "/" + dateenter.substring(2, 4) + "/" + dateenter.substring(4, 8);
            else if (dateenter.length >= "6")
                date12 = dateenter.substring(0, 2) + "/" + dateenter.substring(2, 4) + "/" + dateInitial + dateenter.substring(4, 6);
            else
                date12 = input.value;
        }
        if (dateformat == "yyyy/mm/dd") {
            if (dateenter.length >= "8")
                date12 = dateenter.substring(0, 4) + "/" + dateenter.substring(4, 6) + "/" + dateenter.substring(6, 8);
            else if (dateenter.length >= "6")
                date12 = dateInitial + dateenter.substring(0, 2) + "/" + dateenter.substring(2, 4) + "/" + dateenter.substring(4, 6);
            else
                date12 = input.value;
        }
        if (dateformat == "dd/mm/yyyy") {
            if (dateenter.length >= "8")
                date12 = dateenter.substring(0, 2) + "/" + dateenter.substring(2, 4) + "/" + dateenter.substring(4, 8);
            else if (dateenter.length >= "6")
                date12 = dateenter.substring(0, 2) + "/" + dateenter.substring(2, 4) + "/" + dateInitial + dateenter.substring(4, 6);
            else
                date12 = input.value;
        }
        input.value = date12;
    }
    //==============================================================================//
    if (dateformat == "mm/dd/yyyy") {
        var validformat = /^\d{2}\/\d{2}\/\d{4}$/ //Basic check for format validity

    }
    if (dateformat == "yyyy/mm/dd") {
        var validformat = /^\d{4}\/\d{2}\/\d{2}$/ //Basic check for format validity
    }
    if (dateformat == "dd/mm/yyyy") {
        var validformat = /^\d{2}\/\d{2}\/\d{4}$/ //Basic check for format validity
    }

    if (!validformat.test(input.value)) {
        if (input.value == "") {
            return true;
        }
        //setTimeout(settime1, 15);
        daid = input;
        var res = settime1();
        //return false;
        return res;
    }
    else { //Detailed check for valid date ranges
        if (dateformat == "yyyy/mm/dd") {
            var yearfield = input.value.split("/")[0]
            var monthfield = input.value.split("/")[1]
            var dayfield = input.value.split("/")[2]
            var dayobj = new Date(yearfield, monthfield - 1, dayfield)
        }
        if (dateformat == "mm/dd/yyyy") {
            var yearfield = input.value.split("/")[2]
            var monthfield = input.value.split("/")[0]
            var dayfield = input.value.split("/")[1]
            //var dayobj = new Date(monthfield-1, dayfield, yearfield)
            var dayobj = new Date(yearfield, monthfield - 1, dayfield)

        }
        if (dateformat == "dd/mm/yyyy") {
            var yearfield = input.value.split("/")[2]
            var monthfield = input.value.split("/")[1]
            var dayfield = input.value.split("/")[0]
            //var dayobj = new Date(dayfield, monthfield-1, yearfield)
            var dayobj = new Date(yearfield, monthfield - 1, dayfield)
        }
    }

    //if ((dayobj.getMonth()+1!=monthfield)||(dayobj.getDate()!=dayfield)||(dayobj.getFullYear()!=yearfield)) 
    var abcd = dayobj.getMonth() + 1;

    var date1 = dayobj.getDate();
    var year1 = dayobj.getFullYear();
    if ((abcd != monthfield) || (date1 != dayfield) || (year1 != yearfield)) {
        alert(" Please Fill The Date In " + dateformat + " Format");
        input.value = "";
        return false;
    }



    returnval = true



    if (returnval == false)

        input.select()
    //return returnval//****Changed by Kuldeep Bhati
    if (flagret == "F")
        return false;
    else
        return returnval;

}
function dateenter(event) {
    if ((event.keyCode >= 46 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105) || (event.keyCode == 111) || (event.keyCode == 127) || (event.keyCode == 191) || (event.keyCode == 8) || (event.keyCode == 9) || (event.keyCode == 13)) {
        return true;
    }
    else {
        return false;
    }
}
function datecurr(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if ((key >= 48 && key <= 57) || (key == 47) || (key == 11)) {

        return true;
    }
    else {
        return false;
    }
}
//Special Character Check Validator Function
function ClientSpecialchar(event) {
    var key = event.keyCode ? event.keyCode : event.which;

    if ((key >= 48 && key <= 57) || (key == 8) || (key == 189) || (key >= 97 && key <= 122) || (key == 9 || key == 32) || (key >= 65 && key <= 90)) {
        return true;
    }
    else {
        return false;
    }
}

function IsNumeric(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (event.shiftKey == true) {
        return false;
    }
    if (key > 47 && key < 58) {
        return true;
    }
    else {
        return false;
    }
}

//Allow Number values only
function ClientisNumber(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (event.shiftKey == true)
        return false;
    if ((key >= 48 && key <= 57) || (key == 9) || (key == 11) || (key == 13) || (key == 37) || (key == 39) || (key == 8) || (key >= 96 && key <= 105)) {

        return true;
    }
    else {
        return false;
    }
}
//Allow float values onlye
function EnterFloat(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    if (event.shiftKey == true)
        return false;
    if ((key >= 48 && key <= 57) || (key == 9) || (key == 11) || (key == 13) || (key == 37) || (key == 46) || (key == 39) || (key == 8) || (key == 190) || (key >= 96 && key <= 105)) {

        return true;
    }
    else {
        return false;
    }
}
// For Email id Validateion....
function ClientEmailCheck(q) {
    var theurl = document.getElementById(q).value;

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(theurl) || document.getElementById(q).value == "") {
        onblurcol(q);
        return (true)
    }
    alert("Invalid E-mail Address! Please re-enter.");
    document.getElementById(q).value = "";
    document.getElementById(q).focus();
    return (false)
}

//Remove Space
function LTrim(value) {
    var re = /\s*((\S+\s*)*)/;
    return value.replace(re, "$1");
}
// Removes ending whitespaces
function RTrim(value) {
    var re = /((\s*\S+)*)\s*/;
    return value.replace(re, "$1");
}
// Removes leading and ending whitespaces
function trim(value) {
    return LTrim(RTrim(value));
}
//==For Checking Hours...
function ChkHour(resid) {
    if (document.getElementById(resid).value >= 25) {
        alert("Hours value should not be greater than 24");
        document.getElementById(resid).value = "";
        document.getElementById(resid).focus();
        return false;
    }
    return false;
}
//==For Checking Minutes...
function ChkMinute(resid) {
    if (document.getElementById(resid).value != "") {
        var minenter = parseInt(document.getElementById(resid).value);
        if (minenter > 60) {
            alert("The minutes should not be greater than 60 ");
            document.getElementById(minenter).value = "";
            document.getElementById(minenter).focus();
            return false;
        }
    }
}
//=======For Checking Decimal Value should be of 2 decimal places..
function CheckFloatValue(resid) {
    var num = document.getElementById(resid).value;
    var tomatch = /^\d*(\.\d{1,2})?$/;
    if (tomatch.test(num)) {
        return true;
    }
    else {
        alert("Input error");

        document.getElementById(resid).value = "";
        document.getElementById(resid).focus();
        return false;
    }
}
//============For checking time to be entered==============//
//Allow Time Hours:minuets format  values only
function Entertime(event) {
    var key = event.keyCode ? event.keyCode : event.which;
    //    if (event.shiftKey == true)
    //        return false;
    if ((key >= 48 && key <= 57) || (key == 9) || (key == 11) || (key == 13) || (key == 58) || (key == 8)) {

        return true;
    }
    else {
        return false;
    }
}


function checktimearr(resid) {
    var a, b, c, f, err = 0;
    var hh, mm, temp = "";
    a = document.getElementById(resid).value;
    temp = document.getElementById(resid).value;
    if (a.length == 4) {
        hh = a.substring(0, 2);
        mm = a.substring(2, 4);
        temp = hh + ":" + mm;
        document.getElementById(resid).value = temp;
    }
    a = temp;
    if (a.length != 5)
        err = 1;
    b = a.substring(0, 2);
    c = a.substring(2, 3);
    f = a.substring(3, 5);

    //    m = b * 60 + f;
    /*if(h<m)
    {
    alert('Departure time will be greatater than the arrival time.')
    $('txtdep').value="";
    $('txtdep').focus()
    return false;
    }
    */
    if (/\D/g.test(b)) err = 1;
    if (/\D/g.test(f)) err = 1;
    if (b < 0 || b > 23) err = 1;
    if (f < 0 || f > 59) err = 1;
    if (c != ':') err = 1;

    //    if (err == 1) {
    if (err == 1 && document.getElementById(resid).value != "") {
        alert('Entered time or format is not valid. Enter the time in xx:xx format');
        document.getElementById(resid).value = "";
        document.getElementById(resid).focus()
        return false;
    }
    //        else {
    //            return false;
    //        }
    //        document.getElementById(resid).focus()

    //    }

}

function onfocuscolsel(resid) {
    document.getElementById(resid).style.backgroundColor = "#99FFFF";
    document.getElementById(resid).select();
}
function onfocuscol(resid) {
    document.getElementById(resid).style.backgroundColor = "#99FFFF";

}
function onblurcol(resid) {
    document.getElementById(resid).style.backgroundColor = "white";
    return false;
}
function cntonfocus(resid) {

    if (document.getElementById(resid).value == "Search here...") {
        document.getElementById(resid).value = "";
    }
    document.getElementById(resid).style.color = "black";
}
function cntrolonblur(resid) {


    if (document.getElementById(resid).value == "") {
        document.getElementById(resid).value = "Search here...";
        document.getElementById(resid).style.color = "gray";
    }

}

function checkframe(resid) {
    var a, b, c, d, e, f, g, h, err = 0;
    a = document.getElementById(resid).value;

    if (a.length != 11)
        err = 1;
    b = a.substring(0, 2);
    c = a.substring(2, 3);
    d = a.substring(3, 5);
    e = a.substring(5, 6);
    f = a.substring(6, 8);
    g = a.substring(8, 9);
    h = a.substring(9, 11);

    if (/\D/g.test(b)) err = 1;
    if (/\D/g.test(d)) err = 1;
    if (/\D/g.test(f)) err = 1;
    if (/\D/g.test(h)) err = 1;
    if (b < 0 || b > 23) err = 1;
    if (d < 0 || d > 59) err = 1;
    if (f < 0 || f > 59) err = 1;
    if (h < 0 || h > 24) err = 1;
    if (c != ':' || e != ':' || g != ':') err = 1;

    if (err == 1 && document.getElementById(resid).value != "") {
        alert('Entered time or format is not valid. Enter the time in HH:MM:SS:FF format');
        document.getElementById(resid).value = "";
        document.getElementById(resid).focus()
        return false;
    }
}
//=======For Checking Decimal Value should be of 3 decimal places..
function CheckFloat3decimal(resid) {
    var num = document.getElementById(resid).value;
    var tomatch = /^\d*(\.\d{1,3})?$/;
    if (tomatch.test(num)) {
        return true;
    }
    else {
        alert("Input error");

        document.getElementById(resid).value = "";
        document.getElementById(resid).focus();
        return false;
    }
}

function checkframethree(resid) {
var a, b, c, d, e, f, g, h, err = 0;
a = document.getElementById(resid).value;

if (a.length != 8)
err = 1;
b = a.substring(0, 2);
c = a.substring(2, 3);
d = a.substring(3, 5);
e = a.substring(5, 6);
f = a.substring(6, 8);
// g = a.substring(8, 9);
// h = a.substring(9, 11);

if (/\D/g.test(b)) err = 1;
if (/\D/g.test(d)) err = 1;
if (/\D/g.test(f)) err = 1;
// if (/\D/g.test(h)) err = 1;
if (b < 0 || b > 23) err = 1;
if (d < 0 || d > 59) err = 1;
if (f < 0 || f > 59) err = 1;
// if (h < 0 || h > 24) err = 1;
if (c != ':' || e != ':') err = 1;

if (err == 1 && document.getElementById(resid).value != "") {
alert('Entered time or format is not valid. Enter the time in HH:MM:SS format');
document.getElementById(resid).value = "";
document.getElementById(resid).focus()
return false;
}
}




function showalert(res, res1) {
    if (res1 != "" && res1 != "CL") {
        alert(res + " \n Reference Id- " + res1, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=200px, height=50px, top=200px, left=200px');
    }
    else {
        alert(res, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=200px, height=50px, top=200px, left=200px');
    }

    if (res1 == "CL") {
        window.close();
    }
    return false;
}
function Runreprt(res) {
    window.open(res);
   
    return false;
}

function newtabop(res, wwidth, whgt, resz, leftm, topm, srcollba) {
   

    if (wwidth != "") {
       
        window.open(res, 'Booking', 'width=' + wwidth + ',height=' + whgt + ',resizable=' + resz + ' ,left=' + leftm + ',top=' + topm + ',scrollbars=' + srcollba + '');

    }
    else {
        window.open(res);
    }

    return false;
}

function changeBGC(id) {
    id.style.backgroundColor = "#87CEFA"; id.style.color = "#000000"; id.style.fontWeight = "Bold";
}


function changeBGC2(id) {
    id.style.backgroundColor = "#FFFFFF"; id.style.color = "#000000"; id.style.fontWeight = "Normal";
}
