
        function generate(){
            var size = 8;
            var characters = '0123456789AaBaCc@D$eE!GgF#JkLpVW';
            var randomString = '';
            
            for (var i = 0; i < size; i++) {
              var randomIndex = Math.floor(Math.random() * characters.length);
              randomString += characters[randomIndex];
            }
            // var otp
            // otp = Math.floor(100000 + Math.random() * 900000);
            document.getElementById("otp").value = randomString;
        }
 
            function generateOTP() {
                var otp = Math.floor(100000 + Math.random() * 900000);
            document.getElementById("message").value = otp;
            }