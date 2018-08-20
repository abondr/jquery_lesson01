<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="icon" href="library/images/icons8-dragonfly-96.png" >
    <title>Jquery Basic Examples</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link href="library/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
    <link href="assets/css/style02.css" rel="stylesheet" type="text/css"/>
  
    </head>
    <body>
        <div class="container">
            <div class='row '>
                <div class='h2'>Jquery CountDown Timer</div>            
            </div>
            <div class='row'>
                <div id="clock01"></div>
            </div>
        </div>
        <script src="library/js/jquery.min.js" type="text/javascript"></script>
        <script src="library/js/bootstrap.bundle.js" type="text/javascript"></script> 
        <script src="assets/js/javascript02.js" type="text/javascript"></script>
        <script>
            initializeClock("#clock01","<?=date("Y-m-d H:i:s", strtotime("+1 month",time()))?>");
        </script>
    </body>
</html>