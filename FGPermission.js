//====================This javascript is used for Button Permission and form permission........=================//

var currenttime = new Date();

var montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")
var serverdate=new Date(currenttime)

function padlength(what){
var output=(what.toString().length==1)? "0"+what : what
return output
}

function displaytime()
{
	serverdate.setSeconds(serverdate.getSeconds()+1)
	var username = document.getElementById('Username').value;
	var datestring=montharray[serverdate.getMonth()]+" "+padlength(serverdate.getDate())+", "+serverdate.getFullYear()
	var timestring=padlength(serverdate.getHours())+":"+padlength(serverdate.getMinutes())+":"+padlength(serverdate.getSeconds())
	//document.getElementById("tP1").innerHTML= username + "&nbsp;" + datestring+" "+timestring
}
function Clock()
{
	setInterval("displaytime()", 1000);
}



var FlagStatus;

function ChkRptPermission(formname) {
    var browser = navigator.appName;
    var id;

    if (browser != "Microsoft Internet Explorer") {
        var httpRequest = null;
        httpRequest = new XMLHttpRequest();
        if (httpRequest.overrideMimeType) {
            httpRequest.overrideMimeType('text/xml');
        }

        httpRequest.onreadystatechange = function() { alertContents(httpRequest) };

        httpRequest.open("GET", "ChkButtonPermission.aspx?page=" + formname, false);
        httpRequest.send('');
        //alert(httpRequest.readyState);
        if (httpRequest.readyState == 4) {
            //alert(httpRequest.status);
            if (httpRequest.status == 200) {
                id = httpRequest.responseText;
            }
            else {
                alert('There was a problem with the request.');
            }
        }
    }
    else {

        var page;
        var xml = new ActiveXObject("Microsoft.XMLHTTP");
        xml.Open("GET", "ChkButtonPermission.aspx?page=" + formname, false);
        xml.Send();
        id = xml.responseText;
    }

    if (id == "0" || id == 0 || id == "") {
        alert("You Are Not Authorised To See This Form");
        FlagStatus = 1;
        //window.open("Default.aspx?)
        window.location.href = 'Default.aspx';
      
        //window.close();
        return false;

    }
}
function getPermission(formname)
{
    var browser = navigator.appName;
    var id;

    if (browser != "Microsoft Internet Explorer") {
        var httpRequest = null;
        httpRequest = new XMLHttpRequest();
        if (httpRequest.overrideMimeType) {
            httpRequest.overrideMimeType('text/xml');
        }

        //httpRequest.onreadystatechange = function() { alertContents(httpRequest) };

        httpRequest.open("GET", "ChkButtonPermission.aspx?page=" + formname, false);
        httpRequest.send('');
        //alert(httpRequest.readyState);
        if (httpRequest.readyState == 4) {
            //alert(httpRequest.status);
            if (httpRequest.status == 200) {
                id = httpRequest.responseText;
            }
            else {
                alert('There was a problem with the request.');
            }
        }
    }
    else {

        var page;
        var xml = new ActiveXObject("Microsoft.XMLHTTP");
        xml.Open("GET", "ChkButtonPermission.aspx?page=" + formname, false);
        xml.Send();
        id = xml.responseText;
    }  


	    if (id != 0) {
		if(id=="0")//||id=="8")
		{
			
			
			
			FlagStatus = 0;	

			document.getElementById('btncrt').disabled = true;
			document.getElementById('btnform').disabled = true;
			document.getElementById('btnclear').disabled = true;
			document.getElementById('hdndel').value = "D";
			document.getElementById('btnedit').disabled = true;
			document.getElementById('btnsave').disabled = true;
			document.getElementById('prev').disabled = true;
			document.getElementById('next').disabled = true;
			alert("You Are Not Authorised To See This Form");
			FlagStatus = 1;
			window.location.href = 'Default.aspx';
		
			
			return false;


        }
        if (id == "8") {
        
            
            document.getElementById('btncrt').disabled = true;
            document.getElementById('btnform').disabled = false;
            document.getElementById('btnclear').disabled = false;
            document.getElementById('hdndel').value = "D";
            document.getElementById('btnedit').disabled = true;
            document.getElementById('btnsave').disabled = true;
            document.getElementById('prev').disabled = true;
            document.getElementById('next').disabled = true;
            FlagStatus = 1;
          
            return false;
        }
		if(id=="1"||id=="9")
		{
		
			document.getElementById('btncrt').disabled = false;
			document.getElementById('btnform').disabled = false;
			document.getElementById('btnclear').disabled = false;
			document.getElementById('hdndel').value = "D";
			document.getElementById('btnedit').disabled = false;
			document.getElementById('btnsave').disabled = false;
			document.getElementById('prev').disabled = false;
			document.getElementById('next').disabled = false;
			document.getElementById('btncrt').focus();
			FlagStatus = 1;
			
			return false;
		}
		if(id=="2"||id=="10")
		{
			
		

			document.getElementById('btncrt').disabled = true;
			document.getElementById('btnform').disabled = true;
			document.getElementById('btnclear').disabled = false;
			document.getElementById('hdndel').value = "D";
			document.getElementById('btnedit').disabled = true;
			document.getElementById('btnsave').disabled = true;
			document.getElementById('prev').disabled = true;
			document.getElementById('next').disabled = true;
			FlagStatus = 2;
		
			return false;
			
		}
		if(id=="3"||id=="11")
		{
			

			document.getElementById('btncrt').disabled = false;
			document.getElementById('btnform').disabled = false;
			document.getElementById('btnclear').disabled = false;
			document.getElementById('hdndel').value = "D";
			document.getElementById('btnedit').disabled = true;
			document.getElementById('btnsave').disabled = true;
			document.getElementById('prev').disabled = true;
			document.getElementById('next').disabled = true;
			
			
			FlagStatus = 3;
		
			return false;

		}
		if(id=="4"||id=="12" )
		{
			
			

			document.getElementById('btncrt').disabled = true;
			document.getElementById('btnform').disabled = false;
			document.getElementById('btnclear').disabled = false;
			document.getElementById('hdndel').value = "E";
			document.getElementById('btnedit').disabled = true;
			document.getElementById('btnsave').disabled = true;
			document.getElementById('prev').disabled = true;
			document.getElementById('next').disabled = true;
			FlagStatus = 4;
			
			return false;
		}
		if(id=="5" ||id=="13")
		{
		

			document.getElementById('btncrt').disabled = false;
			document.getElementById('btnform').disabled = false;
			document.getElementById('btnclear').disabled = false;
			document.getElementById('hdndel').value = "E";
			document.getElementById('btnedit').disabled = true;
			document.getElementById('btnsave').disabled = false;
			document.getElementById('prev').disabled = true;
			document.getElementById('next').disabled = true;
			FlagStatus = 5;
			
			return false;
			
		}
		if(id=="6"||id=="14")
		{
			
			document.getElementById('btncrt').disabled = true;
			document.getElementById('btnform').disabled = false;
			document.getElementById('btnclear').disabled = false;
			document.getElementById('hdndel').value = "E";
			document.getElementById('btnedit').disabled = false;
			document.getElementById('btnsave').disabled = false;
			document.getElementById('prev').disabled = true;
			document.getElementById('next').disabled = true;
			FlagStatus = 6;
		
			return false;
		}
		if(id=="7"||id=="15") {
		    document.getElementById('btncrt').disabled = false;
		    document.getElementById('btnform').disabled = false;
		    document.getElementById('btnclear').disabled = false;
		    document.getElementById('hdndel').value = "E";
		    document.getElementById('btnedit').disabled = false;
		    document.getElementById('btnsave').disabled = false;
		    document.getElementById('prev').disabled = false;
		    document.getElementById('next').disabled = false;
			FlagStatus = 7;
		
			
			return false;
		}
	}
	else {

	    FlagStatus = 0;
	    document.getElementById('btncrt').disabled = true;
	    document.getElementById('btnform').disabled = true;
	    document.getElementById('btnclear').disabled = true;
	    document.getElementById('hdndel').value = "D";
	    document.getElementById('btnedit').disabled = true;
	    document.getElementById('btnsave').disabled = true;
	    document.getElementById('prev').disabled = true;
	    document.getElementById('next').disabled = true;
	    alert("You Are Not Authorised To See This Form");
	    FlagStatus = 1;
	    window.location.href = 'Default.aspx';
	    return false;
	}
	return false;
}



function updateStatus()
{
	
	
	if(FlagStatus==2||FlagStatus==3)
	{
		

		document.getElementById('btncrt').disabled = false;
		document.getElementById('btnform').disabled = false;
		document.getElementById('btnclear').disabled = false;
		document.getElementById('hdndel').value = "D";
		document.getElementById('btnedit').disabled = false;
		document.getElementById('btnsave').disabled = false;
		document.getElementById('prev').disabled = false;
		document.getElementById('next').disabled = false;
	}
	if(FlagStatus==4)
	{


		document.getElementById('btncrt').disabled = true;
		document.getElementById('btnform').disabled = false;
		document.getElementById('btnclear').disabled = true;
		document.getElementById('hdndel').value = "E";
		document.getElementById('btnedit').disabled = true;
		document.getElementById('btnsave').disabled = true;
		document.getElementById('prev').disabled = false;
		document.getElementById('next').disabled = false;
	
	}
	if(FlagStatus==5)
	{
	


		document.getElementById('btncrt').disabled = true;
		document.getElementById('btnform').disabled = false;
		document.getElementById('btnclear').disabled = true;
		document.getElementById('hdndel').value = "E";
		document.getElementById('btnedit').disabled = true;
		document.getElementById('btnsave').disabled = true;
		document.getElementById('prev').disabled = false;
		document.getElementById('next').disabled = false;
		
	}
	if(FlagStatus==6||FlagStatus==7)
	{
		

		document.getElementById('btncrt').disabled = true;
		document.getElementById('btnform').disabled = false;
		document.getElementById('btnclear').disabled = true;
		document.getElementById('hdndel').value = "E";
		document.getElementById('btnedit').disabled = true;
		document.getElementById('btnsave').disabled = true;
		document.getElementById('prev').disabled = false;
		document.getElementById('next').disabled = false;
		
	}
	if(FlagStatus==1 || FlagStatus==0)
	{
	

		document.getElementById('btncrt').disabled = true;
		document.getElementById('btnform').disabled = true;
		document.getElementById('btnclear').disabled = true;
		document.getElementById('hdndel').value = "D";
		document.getElementById('btnedit').disabled = true;
		document.getElementById('btnsave').disabled = true;
		document.getElementById('prev').disabled = true;
		document.getElementById('next').disabled = true;
		
	}

	return false;

}

function ChkRptPermission(formname) {
    var browser = navigator.appName;
    var id;

    if (browser != "Microsoft Internet Explorer") {
        var httpRequest = null;
        httpRequest = new XMLHttpRequest();
        if (httpRequest.overrideMimeType) {
            httpRequest.overrideMimeType('text/xml');
        }

       // httpRequest.onreadystatechange = function() { alertContents(httpRequest) };

        httpRequest.open("GET", "ChkButtonPermission.aspx?page=" + formname, false);
        httpRequest.send('');
        //alert(httpRequest.readyState);
        if (httpRequest.readyState == 4) {
            //alert(httpRequest.status);
            if (httpRequest.status == 200) {
                id = httpRequest.responseText;
            }
            else {
                alert('There was a problem with the request.');
            }
        }
    }
    else {

        var page;
        var xml = new ActiveXObject("Microsoft.XMLHTTP");
        xml.Open("GET", "ChkButtonPermission.aspx?page=" + formname, false);
        xml.Send();
        id = xml.responseText;
    }

    if (id == "0" || id == 0 || id == "") {
        alert("You Are Not Authorised To See This Form");
        FlagStatus = 1;
        //window.open("Default.aspx?)
        window.location.href = 'Default.aspx';

        //window.close();
        return false;

    }
}
function getPermissionrecipt(formname) {
    var browser = navigator.appName;
    var id;

    if (browser != "Microsoft Internet Explorer") {
        var httpRequest = null;
        httpRequest = new XMLHttpRequest();
        if (httpRequest.overrideMimeType) {
            httpRequest.overrideMimeType('text/xml');
        }

       // httpRequest.onreadystatechange = function() { alertContents(httpRequest) };

        httpRequest.open("GET", "ChkButtonPermission.aspx?page=" + formname, false);
        httpRequest.send('');
        //alert(httpRequest.readyState);
        if (httpRequest.readyState == 4) {
            //alert(httpRequest.status);
            if (httpRequest.status == 200) {
                id = httpRequest.responseText;
            }
            else {
                alert('There was a problem with the request.');
            }
        }
    }
    else {

        var page;
        var xml = new ActiveXObject("Microsoft.XMLHTTP");
        xml.Open("GET", "ChkButtonPermission.aspx?page=" + formname, false);
        xml.Send();
        id = xml.responseText;
    }


    if (id != 0) {
        if (id == "0")//||id=="8")
        {



            FlagStatus = 0;

            document.getElementById('btncrt').disabled = true;
            document.getElementById('btnform').disabled = true;
            document.getElementById('btnSearch').disabled = true;
            document.getElementById('btnclear').disabled = true;
            document.getElementById('hdndel').value = "D";
            document.getElementById('btnedit').disabled = true;
            document.getElementById('btnsave').disabled = true;
            document.getElementById('prev').disabled = true;
            document.getElementById('next').disabled = true;
            alert("You Are Not Authorised To See This Form");
            FlagStatus = 1;
            window.location.href = 'Default.aspx';


            return false;


        }
        if (id == "8") {


            document.getElementById('btncrt').disabled = true;
            document.getElementById('btnform').disabled = false;
            document.getElementById('btnSearch').disabled = false;
            document.getElementById('btnclear').disabled = false;
            document.getElementById('hdndel').value = "D";
            document.getElementById('btnedit').disabled = true;
            document.getElementById('btnsave').disabled = true;
            document.getElementById('prev').disabled = true;
            document.getElementById('next').disabled = true;
            FlagStatus = 1;

            return false;
        }
        if (id == "1" || id == "9") {

            document.getElementById('btncrt').disabled = false;
            document.getElementById('btnform').disabled = false;
            document.getElementById('btnSearch').disabled = false;
            document.getElementById('btnclear').disabled = false;
            document.getElementById('hdndel').value = "D";
            document.getElementById('btnedit').disabled = false;
            document.getElementById('btnsave').disabled = false;
            document.getElementById('prev').disabled = false;
            document.getElementById('next').disabled = false;
            document.getElementById('btncrt').focus();
            FlagStatus = 1;

            return false;
        }
        if (id == "2" || id == "10") {



            document.getElementById('btncrt').disabled = true;
            document.getElementById('btnform').disabled = true;
            document.getElementById('btnSearch').disabled = false;
            document.getElementById('btnclear').disabled = false;
            document.getElementById('hdndel').value = "D";
            document.getElementById('btnedit').disabled = true;
            document.getElementById('btnsave').disabled = true;
            document.getElementById('prev').disabled = true;
            document.getElementById('next').disabled = true;
            FlagStatus = 2;

            return false;

        }
        if (id == "3" || id == "11") {


            document.getElementById('btncrt').disabled = false;
            document.getElementById('btnform').disabled = false;
            document.getElementById('btnSearch').disabled = false;
            document.getElementById('btnclear').disabled = false;
            document.getElementById('hdndel').value = "D";
            document.getElementById('btnedit').disabled = true;
            document.getElementById('btnsave').disabled = true;
            document.getElementById('prev').disabled = true;
            document.getElementById('next').disabled = true;


            FlagStatus = 3;

            return false;

        }
        if (id == "4" || id == "12") {



            document.getElementById('btncrt').disabled = true;
            document.getElementById('btnform').disabled = false;
            document.getElementById('btnSearch').disabled = false;
            document.getElementById('btnclear').disabled = false;
            document.getElementById('hdndel').value = "E";
            document.getElementById('btnedit').disabled = true;
            document.getElementById('btnsave').disabled = true;
            document.getElementById('prev').disabled = true;
            document.getElementById('next').disabled = true;
            FlagStatus = 4;

            return false;
        }
        if (id == "5" || id == "13") {


            document.getElementById('btncrt').disabled = false;
            document.getElementById('btnform').disabled = false;
            document.getElementById('btnSearch').disabled = false;
            document.getElementById('btnclear').disabled = false;
            document.getElementById('hdndel').value = "E";
            document.getElementById('btnedit').disabled = true;
            document.getElementById('btnsave').disabled = false;
            document.getElementById('prev').disabled = true;
            document.getElementById('next').disabled = true;
            FlagStatus = 5;

            return false;

        }
        if (id == "6" || id == "14") {

            document.getElementById('btncrt').disabled = true;
            document.getElementById('btnform').disabled = false;
            document.getElementById('btnSearch').disabled = false;
            document.getElementById('btnclear').disabled = false;
            document.getElementById('hdndel').value = "E";
            document.getElementById('btnedit').disabled = false;
            document.getElementById('btnsave').disabled = false;
            document.getElementById('prev').disabled = true;
            document.getElementById('next').disabled = true;
            FlagStatus = 6;

            return false;
        }
        if (id == "7" || id == "15") {
            document.getElementById('btncrt').disabled = false;
            document.getElementById('btnform').disabled = false;
            document.getElementById('btnSearch').disabled = false;
            document.getElementById('btnclear').disabled = false;
            document.getElementById('hdndel').value = "E";
            document.getElementById('btnedit').disabled = false;
            document.getElementById('btnsave').disabled = false;
            document.getElementById('prev').disabled = false;
            document.getElementById('next').disabled = false;
            FlagStatus = 7;


            return false;
        }
    }
    else {

        FlagStatus = 0;
        document.getElementById('btncrt').disabled = true;
        document.getElementById('btnform').disabled = true;
        document.getElementById('btnSearch').disabled = true;
        document.getElementById('btnclear').disabled = true;
        document.getElementById('hdndel').value = "D";
        document.getElementById('btnedit').disabled = true;
        document.getElementById('btnsave').disabled = true;
        document.getElementById('prev').disabled = true;
        document.getElementById('next').disabled = true;
        alert("You Are Not Authorised To See This Form");
        FlagStatus = 1;
        window.location.href = 'Default.aspx';
        return false;
    }
    return false;
}
