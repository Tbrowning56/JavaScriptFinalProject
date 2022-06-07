
var createForm = document.getElementById('form1');
createForm.btnCreate.addEventListener("click", createResume);


function createResume(){
    if(!validEmail()){
        alert("Please enter a valid email address!")
        return;
    }
    var doc = createWindow(550, 850).document;

    doc.write("<html");
    doc.write("<head>");

    doc.write("</head>");
    doc.write("<body>");
    writeHead(doc);
    writeBody(doc);

    doc.write("</body>");
    doc.write("</html>")

}

function validEmail(){
    var email = document.getElementById('form1').userEmail.value;
    var valid = true;

    if(email.indexOf("@")< 1){
        valid = false;
    }
    return valid;

}
function createWindow(height, width){
    var size = "height= "+ height + ", width= " + width;
    return window.open("", "", size);

}


function writeHead(doc){
    var fontSize = 12;
    var fontType = "Lucida handwriting, Monaco, monospace";
    var leftMargin = 30; 
    var bottomMargin = '10px';

    var styleStr = "<style>";

    styleStr += "body { ";
    styleStr += ("font-size:" + fontSize + "pt;");
    styleStr += ("font-family:" + fontType + ";");
    styleStr += " } ";

    styleStr += "#left { ";
    styleStr += ("float:left; width:" + (leftMargin - 2) + "%;");
    styleStr += ("margin-bottom:" + bottomMargin + ";");
    styleStr += " } ";

    styleStr += "#right { ";
    styleStr += ("margin-left:" + leftMargin + "%;");
    styleStr += ("margin-bottom:" + bottomMargin + ";");
    styleStr += " } ";

    styleStr += ".clear {"
    styleStr += "clear:both;";
    styleStr += " } "

    styleStr += "#name { ";
    styleStr += "background-color:black;";
    styleStr += "color:white;";
    styleStr += " } ";

    styleStr += "#CO { ";
    styleStr += "border:2px solid black;";
    styleStr+= " } ";

    styleStr += "#CE { ";
    styleStr += "border:2px solid black;";
    styleStr+= " } ";

    styleStr += "#Edu { ";
    styleStr += "border:2px solid black;";
    styleStr+= " } ";

    styleStr += "</style>";
    
    doc.write(styleStr);

    var form = document.getElementById("form1");
    var name = form.userName.value;
    doc.write("<h3 id=\"name\">" +name.toUpperCase() + "</h3>");

    var address = form.userAddress.value;
    var phone = form.userNumber.value;
    var twitter = form.userTwitter.value;
    var linkedIn = form.userLinkedIN.value;
    var gitHub = form.userGit.value;

    doc.write("<h4 id=\"loc\"><u>Location and Phone Number:</u></h4>");
    doc.write("<p>" + address + " \u273B " + phone + "</p>");

    doc.write("<h4 id=\"socialmedia\"><u>Twitter / LinkedIn / Github:</u></h4>");
    doc.write("<p>" + " \u273B " + "@" + twitter + " \u273B " + linkedIn + " \u273B " + gitHub);

    var email = form.userEmail.value;
    doc.write("<h4 id=\"email\"><u>Email for Contact:</u></h4>");
    doc.write("<p><u>" + email + "</u></p>");
    doc.write("<hr>");

}

function writeBody(doc){
    var form = document.getElementById("form1");

    writeSection(doc, "<b id=\"CO\">Career Objectives</b>",form.userCareerObj.value);
    writeSection(doc, "<b id=\"CE\">Coding Experience</b>",form.userPersonal.value);
    writeSection(doc, "<b id=\"Edu\">Education</b>",form.userEducation.value);
    doc.write("<hr>")

    writeSection(doc, "<b>Employment History</b>","");
    writeEmployment(doc);
    doc.write("<hr>")

    writeSection(doc, "<b>References</b>",form.userRef.value);

}

function writeSection(doc, left, right){
    doc.write("<div id=\"left\">" + left + "</div>");
    doc.write("<div id=\"right\">" + right + "</div>");
    doc.write("<div class=\"clear\"></div>");

}

function writeEmployment(doc){
    var previousJobs = document.getElementsByName("userEmployment");
    var startDates = document.getElementsByName("startDate");
    var endDates = document.getElementsByName("endDate");

    for (var i = 0; i< previousJobs.length; i++){
        if(startDates[i].value){
            var date = getDate(startDates[i].value , endDates[i].value);
            writeSection(doc, date, previousJobs[i].value);
        }
    }
}

function getDate(start, end){
    var month = start.charAt(5) + start.charAt(6);
    var year = start.substr(0,4);
    var Stringdate = getMonth(month) + " " + year + " - ";

    if(end){
        var month2 = end.charAt(5) + end.charAt(6);
        var year2 = end.substr(0,4);
        Stringdate += getMonth(month2) + " " + year2;
    }
    return Stringdate;
}

function getMonth(month){
    if (month.length > 0 && (month >= 1 && month <=12)){
        let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        return months[month - 1]
    }
}