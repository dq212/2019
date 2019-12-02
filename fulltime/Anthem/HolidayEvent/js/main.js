// console.log('in the js 3');


var firstName = getInputVal('firstName');
var lastName = getInputVal('lastName');
var title = getInputVal('title');
var brokerage = getInputVal('brokerage');
var phone = getInputVal('phone');
var email = getInputVal('email');
var eventLocation = "";
var eventDateAndTime = "";
var eventLink = "";

var calId = "";
// the selector will match all input controls of type :checkbox
// and attach a click event handler 
$("input:checkbox[name='location']").on('click', function() {
  // in the handler, 'this' refers to the box clicked on
  var $box = $(this);
  var $card = $(this).parent();
 // console.log($card);
  if ($box.is(":checked")) {
    // the name of the box is retrieved using the .attr() method
    // as it is assumed and expected to be immutable
    var group = "input:checkbox[name='" + $box.attr("name") + "']";
    // the checked state of the group/box on the other hand will change
    // and the current value is retrieved using .prop() method
    $(group).prop("checked", false);

  //   add class and change opacity of all
    $(group).parent().removeClass('light-blue').css('opacity', '0.6');
    $box.prop("checked", true);
   
   
    $card.addClass('light-blue').css('opacity', '1.0');

  } else {
    //$card.removeClass('light-blue');
    $box.prop("checked", false);
    $card.removeClass('light-blue').css('opacity', '1.0');

  }

eventLocation = $box.attr("value");
eventDateAndTime = $box.attr('data-dt');
eventLink = $box.attr('data-link');
calId = $box.attr('data-calID');
// console.log($box.attr("value"));
// console.log(calId + " this is the call ID");
//console.log($box.attr("dt"));

var tyMessage = "Thank you.<br/>" + "You are registered for the " + eventLocation + " event."
var qs = document.getElementById('ty-headline');
    qs.innerHTML = tyMessage;
});



 document.getElementById('add-to-calendar').addEventListener('click', addToCalendar);
  //Listen form from submit

 document.getElementById('btn-register').addEventListener('click', submitForm);


function addToCalendar(e) {
  e.preventDefault ? e.preventDefault() : (e.returnValue = false);
  // console.log(calId + " adding to calendar");
  if (calId == 1){
   document.location = "./invites/Anthem-Blue-Cross-Southern-California-Broker-Holiday-Party.ics";
  } else if ( calId == 2) {
    document.location = "./invites/Anthem-Blue-Cross-Los-Angeles-Holiday-Party.ics";
  } else if ( calId == 3) {
    document.location = "./invites/Anthem-Blue-Cross-Northern-California-Holiday-Party.ics";
  }
  else if ( calId == 4) {
    document.location = "./invites/Anthem-Blue-Cross-San-Diego-Holiday-Party.ics";
  }
  
}

function submitForm(e) {
  e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    // console.log(e);

    //Get values

var firstName = getInputVal('firstName');
var lastName = getInputVal('lastName');
var title = getInputVal('title');
var brokerage = getInputVal('brokerage');
var phone = getInputVal('phone');
var email = getInputVal('email');
var eventLocation = "";
var eventDateAndTime = "";

// console.log(eventLocation + " this is the event location.")
//Save message
 submitToAPI(e);

}

function submitToAPI(e) {
  // console.log('submitToApi called');
  e.preventDefault ? e.preventDefault() : (e.returnValue = false);

       var URL = "https://b2fgmyl0z5.execute-api.us-east-1.amazonaws.com/prod/contact-us";
      //  console.log('submitToApi called after');
       if (eventLocation == undefined || eventLocation == "") {
        //alert ("Please select a location");
        // console.log('trying to open modal');
        var txt = "Please select a location.";
        openModal(null, txt);
        //$("#firstName").addClass('error');
        return;
    }
            var refn = /[A-Za-z]{1}[A-Za-z]/;
            if (!refn.exec($("#firstName").val())) {
                //alert ("Name can not less than 2 char");
                $("#firstName").addClass('error');
                return;
            } else {
                $("#firstName").removeClass('error');
            }

            var reln = /[A-Za-z]{1}[A-Za-z]/;
            if (!reln.exec($("#lastName").val())) {
                //alert ("Name can not less than 2 char");
                $("#lastName").addClass('error');
                return;
            } else {
              $("#lastName").removeClass('error');
            }

            if ($("#title").val()=="") {
                //alert ("Please enter your Title");
                $("#title").addClass('error');
                return;s
            }else {
              $("#title").removeClass('error');
            }

            if ($("#brokerage").val()=="") {
                //alert ("Please enter your Brokerage name");
                $("#brokerage").addClass('error');
                return;
            } else {
              $("#brokerage").removeClass('error');
            }

            var mobilere = /((\(\d{3}\)?)|(\d{3}))([\s-./]?)(\d{3})([\s-./]?)(\d{4})/;
            if (!mobilere.exec($("#phone").val())) {
               // alert ("Please enter a valid mobile number");
               $("#phone").addClass('error');
                return;
            } else {
              $("#phone").removeClass('error');
            }

            if ($("#email").val()=="") {
                //alert ("Please enter your email");
                $("#email").addClass('error');
                return;
            } else {
              $("#email").removeClass('error');
            }

            var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
            if (!reeamil.exec($("#email").val())) {
                //alert ("Please enter a valid email address");
                $("#email").addClass('error');
                return;
            } else {
              $("#email").removeClass('error');
            }
 
      

       var firstName = $("#firstName").val();
       var lastName = $("#lastName").val();
       var phone = $("#phone").val();
       var email = $("#email").val();
       var title = $("#title").val();
       var brokerage = $("#brokerage").val();
       var data = {
          firstName : firstName,
          lastName : lastName,
          phone: phone,
          title : title,
          brokerage : brokerage,
          email : email,
          brokerage: brokerage,
          eventLocation: eventLocation,
          eventDateAndTime:eventDateAndTime
        };

      // console.log('submitToApi called at the end');

       $.ajax({
         type: "POST",
         url : URL,
         dataType: "json",
         crossDomain: "true",
         contentType: "application/json; charset=utf-8",
         data: JSON.stringify(data),
        
         success: function () {
           // clear form and show a success message
           //alert("Successfull");
           saveMessage(firstName, lastName, title, phone, email, brokerage, eventLocation, eventDateAndTime);
           showThankYou();
            // document.getElementById('contactForm').reset();
           document.getElementById("contactForm").reset();
       //location.reload();
         },
         error: function () {
           // show an error message
           //alert("UnSuccessfull");
         }});
     }

function showThankYou() {
    // console.log('show the thank you.')
    document.getElementById('form-view').style.display = 'none';
    document.getElementById('locations-block').style.display = 'none';
    document.getElementById('ty-view').style.display = 'block';
    $('#form-view').hide();
    $('#locations-block').hide();
    $('#ty-view').show();
}

//Function to get form values

function getInputVal(id)  {
    return document.getElementById(id).value;
}

//Save message to messages

function saveMessage(firstName, lastName, title, phone, email, brokerage, eventLocation, eventDateAndTime) {

    db.collection('registrants').add({
        firstName: firstName, 
        lastName:lastName,
        title:title, 
        phone:phone,
        email:email, 
        brokerage:brokerage,
        eventLocation:eventLocation,
        eventDateAndTime:eventDateAndTime
    })

    var ech = document.getElementById('end-card-headline');
        // console.log(ech);
        ech.innerText = eventLocation;
    var ecc = document.getElementById('end-card-copy');
      /// console.log(ecc);
        ecc.innerText = eventDateAndTime;    
      /// console.log(ecl);      
    // var ecl = document.getElementById('end-card-link');
    //     ecl.innerHTML = eventLink;
}

    //Get modal element
    var modal = document.getElementById('simpleModal');

    // //Get open modal button
    var modalBtn = document.getElementById('modalBtn');
    // //Get close button
    var closeBtn = document.getElementsByClassName('closeBtn')[0];

    var modalContent = document.getElementById('modalBodyCopy');
    
    // //Listen for click
    // modalBtn.addEventListener('click', openModal);

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', clickOutside);

    // //Function to open modal
    function openModal(e, txt) {
        var str = txt;
        console.log('openModal');
        // modal.style.display = 'block';
        $('#simpleModal').show();
        modalContent.innerHTML = str;
        }
    
    function closeModal() {
        // console.log(123);
        // modal.style.display = 'none';
        $('#simpleModal').hide();
    }

    function clickOutside(e) {
        if (e.target == modal)
        // modal.style.display = 'none';
        $('#simpleModal').hide();
    }