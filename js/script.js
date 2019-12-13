
//CHAT

$('#message').keyup(function (e) {
   /* var currentText = $(this).val()
      $('#chat-box').html(currentText) */
   if (e.keyCode === 13) {
      var text = $('#message').val()
      var username = $('#username').val()
      var date = new Date()
      var dateFormat = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() + ' ' + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
      var paragraph = $('<p class="chat-txt-green">' + username + '  ' + '<small class="chat-txt">' + dateFormat + '</small>' + '</p>' + '<p class="chat-txt">' + text + '</p>')
      $('#chat-box').append(paragraph) &&
         $(this).val('');
   };
   if (e.keyCode === 27) {
      $(this).val('');
   };
});

$('#send-btn').click(function (e) {
   var text = $('#message').val()
   var username = $('#username').val()
   var date = new Date();
   var dateFormat = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() + '.' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
   var paragraph = $('<p class="chat-txt-green">' + username + '  ' + '<small class="chat-txt">' + dateFormat + '</small>' + '</p>' + '<p class="chat-txt">' + text + '</p>')
   $('#chat-box').append(paragraph) &&
      $('#message').val('');
})




//REGISTER

$('#form').submit(function (e){
   var a = document.forms["registration-form"]["a"].value;
   var b = document.forms["registration-form"]["b"].value;
   var c = document.forms["registration-form"]["c"].value;
   var d = document.forms["registration-form"]["d"].value;
   var country = document.forms["registration-form"]["country"].value;
   if (e.keyCode === 13 && a == "", b == "", c == "", d == "", country == "") {
      alert("please fill out required (*) fields");
      return false;
   }  
   
   if (b != c) {
      alert("passwords do not match");
      return false; 
   }

   if($('#terms').is(':checked') == false){
      event.preventDefault();
      alert('please accept our terms and conditions!');
      return false;
   }   

   if($('#pass1').val().length < 8){ 
      alert('password should consist of at least 8 characters');
      $(this).focus(); 
      return false; 
   }
});











