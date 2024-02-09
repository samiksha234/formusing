var cssOutEl = document.getElementById("cssOp");
var cssBtnWrapEl = document.getElementById("cssBtnWrap");

function cssPrint() {
  document.getElementById("studentForm").style.display = "none";
      var printContent = document.querySelector(".print-content");
      printContent.style.visibility = "visible";



document.getElementById("signature-input").style.display="none";
var printContent = document.querySelector(".print-content");
      printContent.style.visibility = "visible";




  var printContent = document.querySelector(".print-content");
      printContent.style.visibility = "visible";
cssOutEl.innerHTML = "Printing the document...";
   cssBtnWrapEl.style.display = "none";


    // Hide the buttons when printing
submitBtn.style.display = "none";
updateValuesBtn.style.display = "none";


   print();
setTimeout(function () {
      document.getElementById("submitBtn").style.display = "inline-block";
      document.getElementById("updateValuesBtn").style.display = "inline-block";
      printContent.style.visibility = "hidden";
      document.getElementById("studentForm").style.display = "block";
          printContent.style.visibility = "hidden";
        cssBtnWrapEl.style.display = "block";
      cssOutEl.innerHTML = ""; // Clear the printing message
  }, 1000); // Adjust the timeout value as needed
}
// Function to show the buttons again after printing
function openForm() {
var form = document.getElementById("studentForm");
var profNameInput = document.getElementById("profName");
var collegeNameInput = document.getElementById("collegeName");
var  recommendedByInput =document.getElementById("recommendedBy");
var emailInput = document.getElementById("email");
var mobileNumberInput = document.getElementById("mobileNumber");
var placenameInput=document.getElementById("placename");
var dateInput=document.getElementById("date");
var workshopInput=document.getElementById("workshop");
var contactPersonNameInput=document.getElementById("contactPersonName");
form.style.display = "block";

}
function updateValues() {
var profNameInput = document.getElementById("profName").value;
var collegeNameInput = document.getElementById("collegeName").value;
var recommendedByInput = document.getElementById("recommendedBy").value;
var emailInput = document.getElementById("email").value;
var mobileNumberInput = document.getElementById("mobileNumber").value;
var placenameInput = document.getElementById("placename").value;
var dateInput = document.getElementById("date").value;
var workshopInput = document.getElementById("workshop").value;
var contactPersonNameInput = document.getElementById("contactPersonName");
// var contactPersonNameInput = document.getElementById("contactPerson");
var signatureInput = document.getElementById("signature");
var signatureFileName = signatureInput.value.split("\\").pop(); //get the signature 
var formattedDate = new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(parsedDate);

// Update content with form values
document.getElementById("initiativeHeading").innerText = 'An Initiative of Ministry of Education';
document.getElementById("missionHeading").innerText = 'Under the National Mission on Education through ICT';
document.getElementById("collegeNameItalics").innerText = collegeNameInput;
document.getElementById("nodalCenter").innerText = 'Official Nodal Center';
document.getElementById("iitKanpur").innerText = 'Indian Institute of Technology Kanpur';
document.getElementById("moesInitiative").innerText = 'MoE’s initiative of Virtual Labs';
document.getElementById("profNameSpan").innerText = profNameInput;
document.getElementById("coordinatorName").innerText = recommendedByInput;
document.getElementById("approvalDate").innerText = '31st Dec 2024';
document.getElementById("contactPerson").innerText = 'Mr. ' + workshop;
// document.getElementById("contactPerson").innerText =  contactPerson;
document.getElementById("signaturePara").innerText = 'Signature: ' + signatureFileName;
// Check if the contactPersonName has not been modified by the user
if (contactPersonNameInput.value === "Mr. Sanjay Singh") {
  document.getElementById("contactPersonName").innerText = 'Mr. ' + recommendedByInput;
}
document.getElementById("contactEmail").innerText = emailInput;
document.getElementById("contactPhone").innerText = mobileNumberInput;
document.getElementById("placeSpan").innerText = placenameInput;
document.getElementById("dateSpan").innerText = dateInput;

// Update paragraphs with form values
document.getElementById("profNamePara").innerText = 'Professor\s Name:' + profNameInput;
// updating collegeName and workshop in the paragraphs
document.getElementById("collegeNamePara").innerText = 'College Name: ' + collegeNameInput;
document.getElementById("recommendedByPara").innerText = 
document.getElementById("emailPara").innerText = 
document.getElementById("mobileNumberPara").innerText = 
document.getElementById("placenamePara").innerText = 
document.getElementById("datePara").innerText = 
// Exclude updating workshop in the paragraph
document.getElementById("workshopPara").innerText ='workshop inimated by:' + workshopInput;
// document.getElementById("workshopPara").innerText ='workshop inimated by:' + contactPerson;
}
var paragraphs = document.querySelectorAll('.dynamic-update');
paragraphs.forEach(function (paragraph) {
   switch (paragraph.id) {
      case 'profNamePara':
       paragraph.innerText = 'Professor\'s Name: ' + profNameInput.value;
         break;
      case 'collegeNamePara':
         paragraph.innerText = 'College Name: ' + collegeNameInput.value;
         break;
      case 'recommendedByPara':
         paragraph.innerText = 'Recommended By: ' + recommendedByInput.value;
        
       break;
      case 'emailPara':
         paragraph.innerText = 'Email ID: ' + emailInput.value;
         break;
      case 'mobileNumberPara':
         paragraph.innerText = 'Mobile Number: ' + mobileNumberInput.value;
         break;
     case 'placenamePara':
         paragraph.innerText = 'Place: ' + placenameInput.value;
         break;
      case 'datePara':
         paragraph.innerText = 'Date: ' + dateInput.value;
         break;
      case 'workshopPara':
        paragraph.innerText = 'workshop inimated by: ' + workshopInput.value;
// paragraph.innerText = 'Workshop Initiated By: ' + contactPerson.value;
         break;
        // Add more cases as needed for other form fields
   }
});
function openForm() {
   var form = document.getElementById("studentForm");
   form.style.display = "block";
     var form = document.getElementById("studentForm");
      var profNameInput = document.getElementById("profName");
      var collegeNameInput = document.getElementById("collegeName");
      var recommendedByInput = document.getElementById("recommendedBy");
      var emailInput = document.getElementById("email");
      var mobileNumberInput = document.getElementById("mobileNumber");
     var placenameInput = document.getElementById("placename");
      var dateInput = document.getElementById("date");
      var workshopInput = document.getElementById("workshop");

      // Set default values
      profNameInput.value = "Prof. Kantesh Balani";
      collegeNameInput.value = "Indian Institute of Technology";
      recommendedByInput.value = "Mr. Sanjay Singh";
      emailInput.value = "vlabiitk@gmail.com";
      mobileNumberInput.value = "+91-9936385453";
      placenameInput.value = "Kanpur";
      dateInput.value = "Jan/31/2024";
      workshopInput.value = "Mr. Dhananjay Umrao";

    // Update paragraphs with form values
      var paragraphs = document.querySelectorAll('.dynamic-update');
      paragraphs.forEach(function (paragraph) {
         switch (paragraph.id) {
            case 'profNamePara':
              paragraph.innerText = profNameInput.value;
               break;
            case 'collegeNamePara':
              // paragraph.innerText = collegeNameInput.value;
               break;
            case 'recommendedByPara':
          //   paragraph.innerText = recommendedByInput.value;
               break;
            case 'emailPara':
         //      paragraph.innerText = emailInput.value;
         
               break;
             //  workshopPara
               //case 'workshopinimatedby':
               case 'workshopPara':
            //  paragraph.innerText = workshopInput.value;
               break;
            case 'mobileNumberPara':
            //   paragraph.innerText = mobileNumberInput.value;
               break;
            // Add more cases as needed for other form fields
         }

    });
      form.style.display = "block";
}
function updateContent() {
      // Get form values
      var profNameInput = document.getElementById("profName").value;
      var collegeNameInput = document.getElementById("collegeName").value;
      var recommendedByInput = document.getElementById("recommendedBy").value;
      var emailInput = document.getElementById("email").value;
      var mobileNumberInput = document.getElementById("mobileNumber").value;
      var placenameInput = document.getElementById("placename").value;
      var dateInput = document.getElementById("date").value;
      var workshopInput = document.getElementById("workshop").value;

      // Update content with form values
      document.getElementById("profNamePara").innerText = 'Professor\'s Name: ' + profNameInput;
      document.getElementById("collegeNamePara").innerText = 'College Name: ' + collegeNameInput;
      document.getElementById("recommendedByPara").innerText = 'Recommended By: ' + recommendedByInput;
      document.getElementById("emailPara").innerText = 'Email ID: ' + emailInput;
      document.getElementById("mobileNumberPara").innerText = 'Mobile Number: ' + mobileNumberInput;
      document.getElementById("placenamePara").innerText = 'Place: ' + placenameInput;
      document.getElementById("datePara").innerText = 'Date: ' + dateInput;
      document.getElementById("workshopPara").innerText = 'workshop inimated by: ' + workshopInput;
  }

  document.getElementById("updateValuesBtn").addEventListener("click", function() {
      updateContent();
  });
function previewSignature() {
  var input = document.getElementById('signature-input');
  var preview = document.getElementById('signature-preview');

  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
          preview.src = e.target.result;
      };

      reader.readAsDataURL(input.files[0]);
  }
}
// i hide this code 

function openForm() {
var form = document.getElementById("studentForm");
var profNameInput = document.getElementById("profName");
var collegeNameInput = document.getElementById("collegeName");
var  recommendedByInput =document.getElementById("recommendedBy");
var emailInput = document.getElementById("email");
var mobileNumberInput = document.getElementById("mobileNumber");
var placenameInput=document.getElementById("placename");
var dateInput=document.getElementById("date");
var workshopInput=document.getElementById("workshop");
var contactPersonNameInput=document.getElementById("contactPersonName");
form.style.display = "block";
}

function updateValues() {
var profNameInput = document.getElementById("profName").value;
var collegeNameInput = document.getElementById("collegeName").value;
var recommendedByInput = document.getElementById("recommendedBy").value;
var emailInput = document.getElementById("email").value;
var mobileNumberInput = document.getElementById("mobileNumber").value;
var placenameInput = document.getElementById("placename").value;
var dateInput = document.getElementById("date").value;
var workshopInput = document.getElementById("workshop").value;

var contactPersonNameInput = document.getElementById("contactPersonName");

// Update content with form values
document.getElementById("initiativeHeading").innerText = 'An Initiative of Ministry of Education';
document.getElementById("missionHeading").innerText = 'Under the National Mission on Education through ICT';
document.getElementById("collegeNameItalics").innerText = collegeNameInput;
document.getElementById("nodalCenter").innerText = 'Official Nodal Center';
document.getElementById("iitKanpur").innerText = 'Indian Institute of Technology Kanpur';
document.getElementById("moesInitiative").innerText = 'MoE’s initiative of Virtual Labs';
document.getElementById("profNameSpan").innerText = profNameInput;
document.getElementById("coordinatorName").innerText = recommendedByInput;
document.getElementById("approvalDate").innerText = '31st Dec 2024';
document.getElementById("contactPerson").innerText = workshopInput;
// Check if the contactPersonName has not been modified by the user
if (contactPersonNameInput.value === "Mr. Sanjay Singh") {
  document.getElementById("contactPersonName").innerText = 'Mr. ' + recommendedByInput;
}
document.getElementById("contactEmail").innerText = emailInput;
document.getElementById("contactPhone").innerText = mobileNumberInput;
document.getElementById("placeSpan").innerText = placenameInput;
document.getElementById("dateSpan").innerText = dateInput;

// Update paragraphs with form values
document.getElementById("profNamePara").innerText = 
// updating collegeName and workshop in the paragraphs
// document.getElementById("collegeNamePara").innerText = 'College Name: ' + collegeNameInput;
document.getElementById("recommendedByPara").innerText = 
document.getElementById("emailPara").innerText = 
document.getElementById("mobileNumberPara").innerText = 
document.getElementById("placenamePara").innerText = 
document.getElementById("datePara").innerText = 


// Exclude updating workshop in the paragraph
document.getElementById("workshopPara").innerText=workshopInput;
}
var paragraphs = document.querySelectorAll('.dynamic-update');
paragraphs.forEach(function (paragraph) {
   switch (paragraph.id) {
      case 'profNamePara':
       paragraph.innerText = 'Professor\'s Name: ' + profNameInput.value;
         break;
      case 'collegeNamePara':
         paragraph.innerText = 'College Name: ' + collegeNameInput.value;
         break;
      case 'recommendedByPara':
         paragraph.innerText = 'Recommended By: ' + recommendedByInput.value;
        
       break;
      case 'emailPara':
         paragraph.innerText = 'Email ID: ' + emailInput.value;
         break;
      case 'mobileNumberPara':
         paragraph.innerText = 'Mobile Number: ' + mobileNumberInput.value;
         break;
      case 'placenamePara':
         paragraph.innerText = 'Place: ' + placenameInput.value;
         break;
      case 'datePara':
         paragraph.innerText = 'Date: ' + dateInput.value;
         break;
      case 'workshopPara':
         paragraph.innerText = 'workshop inimated by: ' + workshopInput.value;
         break;
        
      // Add more cases as needed for other form fields
   }
});

function openForm() {
      var form = document.getElementById("studentForm");
      var profNameInput = document.getElementById("profName");
      var collegeNameInput = document.getElementById("collegeName");
      var recommendedByInput = document.getElementById("recommendedBy");
      var emailInput = document.getElementById("email");
      var mobileNumberInput = document.getElementById("mobileNumber");
       var placenameInput = document.getElementById("placename");
      var dateInput = document.getElementById("date");
      var workshopInput = document.getElementById("workshop");

      // Set default values
      profNameInput.value = "Prof. Kantesh Balani";
      collegeNameInput.value = "Indian Institute of Technology";
      recommendedByInput.value = "Mr. Sanjay Singh";
      emailInput.value = "vlabiitk@gmail.com";
      mobileNumberInput.value = "+91-9936385453";
      placenameInput.value = "Kanpur";
      dateInput.value = "Jan/31/2024";
      workshopInput.value = "Mr. Dhananjay Umrao";
// Update paragraphs with form values
      var paragraphs = document.querySelectorAll('.dynamic-update');
      paragraphs.forEach(function (paragraph) {
         switch (paragraph.id) {
            case 'profNamePara':
           //  paragraph.innerText = profNameInput.value;
               break;
            case 'collegeNamePara':
              // paragraph.innerText = collegeNameInput.value;
               break;
            case 'recommendedByPara':
          //   paragraph.innerText = recommendedByInput.value;
               break;
            case 'emailPara':
         //      paragraph.innerText = emailInput.value;
         
               break;
               case 'workshoPara':
           //   paragraph.innerText = workshopInput.value;
               break;
            case 'mobileNumberPara':
            //   paragraph.innerText = mobileNumberInput.value;
               break;
            // Add more cases as needed for other form fields
         }
         
      });
      form.style.display = "block";
}




















