<?php
include_once 'config/database2.php';
$database = new Database();
$db = $database->getConnection();

//$stmtpersoninfo = $db->prepare("exec spOTR_EnrolledCourseSelect @idnumber = '0600874'");  
$stmtpersoninfo = $db->prepare("exec spAuthor_List");  
$stmtpersoninfo ->execute();
$x=-1;
while ($rec = $stmtpersoninfo ->fetch()) {
echo  ++$x." - ".$rec[0]."<br>";
echo  ++$x." - ".$rec[1]."<br>";
echo  ++$x." - ".$rec[2]."<br>";
echo  ++$x." - ". $rec[3]."<br>";
echo  ++$x." - ".$rec[4]."<br>";
echo  ++$x." - ".$rec[5]."<br>";
echo  ++$x." - ".$rec[6]."<br>";
echo  ++$x." - ".$rec[7]."<br>";
echo  ++$x." - ".$rec[8]."<br>";
echo  ++$x." - ". $rec[9]."<br>";
echo  ++$x." - ". $rec[10]."<br>";
echo  ++$x." - ". $rec[11]."<br>";
echo  ++$x." - ". $rec[12]."<br>";
echo  ++$x." - ". $rec[13]."<br>";
echo  ++$x." - ". $rec[14]."<br>";
echo  ++$x.$rec[15]."<br>";$x=-1;
}
