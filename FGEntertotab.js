// JScript File

function tabvalue (event,id)
{
var browser=navigator.appName;
//alert(event.keyCode);
 if(browser!="Microsoft Internet Explorer")
 {
        if(event.which==13)
        {
        if(document.activeElement.id==id)
        {
            if(document.getElementById('btnSave').disabled==false)
                document.getElementById('btnSave').focus();
            return;
        }
        else if(document.activeElement.type=="button" || document.activeElement.type=="submit" || document.activeElement.type=="image")
        {
            event.which=13;
            return event.which;
        }
        else
        {
        event.which=9;
        return event.which;
        }
        }
 }       
else
{
     if(event.keyCode==13)
        {
            if(document.activeElement.id==id)
            {
                if(document.getElementById('btnSave').disabled==false)
                    document.getElementById('btnSave').focus();
              return;
            }
            else if(document.activeElement.type=="button" || document.activeElement.type=="submit" || document.activeElement.type=="image")
            {
                event.keyCode=13;
                return event.keyCode;

            }
            else
            {
                event.keyCode=9;
                return event.keyCode;
            }
        }
        
        if(event.keyCode==120)
        {
           var formname=document.URLUnencoded.substring(document.URLUnencoded.lastIndexOf("/")+1,document.URLUnencoded.lastIndexOf("."));
           window.open("Help.aspx?formname="+formname);
          
        }
}

}


//----------------------------For SchemeMaster--------------------------------------------------//

function tabvaluescheme (event,id)
{
    var browser=navigator.appName;
    if(browser!="Microsoft Internet Explorer")
    {
        if(event.which==13)
        {
        if(document.activeElement.id==id)
        {
            document.getElementById("tblgrid").rows(1).cells(0).children[0].focus();
        }
        else if(document.activeElement.type=="button" || document.activeElement.type=="submit" || document.activeElement.type=="image")
        {
            event.which=13;
            return event.which;

        }
        else
        {
            event.which=9;
            return event.which;
        }
        }
     }       
    else
    {
       if(event.keyCode==13)
         {
           if(document.activeElement.id==id)
            {
                document.getElementById("tblgrid").rows(1).cells(0).children[0].focus();
            }
            if(document.activeElement.type=="button" || document.activeElement.type=="submit" || document.activeElement.type=="image")// || document.activeElement.type=="text")
            {
                event.keyCode=13;
                return event.keyCode;

            }
            else
            {
               event.keyCode=9;
               return event.keyCode;
            }
         }
        
        if(event.keyCode==120)
        {
           var formname=document.URLUnencoded.substring(document.URLUnencoded.lastIndexOf("/")+1,document.URLUnencoded.lastIndexOf("."));
           window.open("Help.aspx?formname="+formname);
          
        }
      }
 }

