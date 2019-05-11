<?php
$name = $_POST['projtitle'];
$mons = $_POST['mons'];

// optional
// echo "You chose the following color(s): <br>";

foreach ($name as $color => $what){ 
    echo $color."-".$what."-".$mons[$color]."<br />";
}

?>
