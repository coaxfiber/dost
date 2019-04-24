<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true ");
header("Access-Control-Allow-Methods: OPTIONS, GET, POST");
header("Access-Control-Allow-Headers: Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control");
header('Content-Type: application/json');

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include_once 'config/database.php';


$possible_url = array("proposalinsert","proposallists", "proposaldelete", 'programinsert', 'getprojecttitles','projectadd','removeprojecttitle','removebudget','FundingAgency_List','addbudget','getbudget','proposaldone','login','getuserinfo','projectinsert','company_List','projectaddcoopagency','getcoopagency','projectdeletecoopagency');

$value = "An error has occurred";

if (isset($_GET["action"]) && in_array($_GET["action"], $possible_url))
{
  switch ($_GET["action"])
    {
      case "proposalinsert":
        $value = insertProposal(
          $_POST["GeneralTitle"],
          $_POST["LeadAgency"],
          $_POST["Street"],
          $_POST["Address_PSGC"],
          $_POST["Telephone"],
          $_POST["Fax"],
          $_POST["Email"],
          $_POST["FundingAgency_id"],
          $_POST["TotalDuration"],
          $_POST["createdBy"]);
        break;
      case "proposallists":
        $value = proposallists($_GET["user"]);
        break;
      case "proposaldelete":
        $value = proposaldelete($_GET["proposalid"]);
        break;
      case "programinsert":
        $value = programinsert($_GET["proposalid"]);
        break;
      case "getprojecttitles":
        $value = getprojecttitles($_GET["programid"]);
        break;
      case "projectadd":
        $value = projectadd(
          $_POST["programid"],
          $_POST["title"],
          $_POST["duration"]);
        break;
      case "removeprojecttitle":
        $value = removeprojecttitle($_GET["projectid"]);
        break;
      case "removebudget":
        $value = removebudget($_GET["bid"]);
        break;
      case "FundingAgency_List":
        $value = FundingAgency_List();
        break;
      case "addbudget":
        $value = addbudget($_POST["programid"],$_POST["sof"],$_POST["ps"],$_POST["moe"],$_POST["co"]);
        break;
      case "getbudget":
        $value = getbudget($_GET["programid"]);
        break;
      case "proposaldone":
        $value = proposaldone($_POST["esummary"],$_POST["pid"]);
        break;
      case "login":
        $value = login($_POST["username"],$_POST["password"],$_POST["appname"],$_POST["appsecret"]);
        break;
      case "getuserinfo":
        $value = getuserinfo($_GET["id"]);
        break;
      case "company_List":
        $value = company_List();
        break;
      case "projectinsert":
        $value = projectinsert(
          $_POST["programid"],
          $_POST["title"],
          $_POST["duration"],
          $_POST["station"],
          $_POST["implementation"],
          $_POST["significance"],
          $_POST["objectives"],
          $_POST["literature"],
          $_POST["basis"],
          $_POST["methodology"],
          $_POST["expectedoutput"],
          $_POST["targetb"],
          $_POST["programid"],
          $_POST["programid"],
          $_POST["programid"],
          $_POST["programid"],
          $_POST["programid"],
          $_POST["programid"]);
        break;
      case "getcoopagency":
        $value = getcoopagency($_GET["projectid"]);
        break;
      case "projectaddcoopagency":
        $value = projectaddcoopagency(
          $_POST["pid"],
          $_POST["cid"]);
        break;
      case "projectdeletecoopagency":
        $value = projectdeletecoopagency($_GET["id"]);
        break;
    }
}

function projectdeletecoopagency($id)
{
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spProposal_ProjectCooperatingAgencies_Delete
    @id = $id");  
  $stmt->execute();
  $app_list = array(
              "ok" =>"ok"
               );
  return  $app_list;
}
function getcoopagency($projectid)
{
  //normally this info would be pulled from a database.
  //build JSON array
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spProposal_ProjectCooperatingAgency_List
    @Project_id = $projectid");  
  $stmt->execute();
  $app_list = array(
              "id" => null);
  $app_list = array(
               0 => $app_list);
  $x=0;
while ($row = $stmt ->fetch()) {
    $app_list[$x] = array(
              "id" => $row[0],
              "name" =>  $row[1]  );
            $x++;
        
}
  return  $app_list;
}
function projectaddcoopagency($pid,$cid)
{
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spProposal_ProjectCooperatingAgency_Insert_Update
    @Project_id = $pid,@companyID = '$cid'");  
  $stmt->execute();
  $app_list = array(
              "status" => "success" );

  return  $app_list;
}

function insertProposal($GeneralTitle,$LeadAgency,$Street,$Address_PSGC,$Telephone,$Fax,$Email,$FundingAgency_id,$TotalDuration,$createdBy)
{
$database = new Database();
$db = $database->getConnection();

  $GeneralTitle=htmlspecialchars(strip_tags($GeneralTitle));
  $LeadAgency=htmlspecialchars(strip_tags($LeadAgency));
  $Street=htmlspecialchars(strip_tags($Street));
  $Address_PSGC=htmlspecialchars(strip_tags($Address_PSGC));
  $Telephone=htmlspecialchars(strip_tags($Telephone));
  $Fax=htmlspecialchars(strip_tags($Fax));
  $Email=htmlspecialchars(strip_tags($Email));

  $stmt = $db->prepare("exec spProposal_Insert
    @GeneralTitle = '$GeneralTitle',
    @LeadAgency = '$LeadAgency',
    @Street = '$Street',
    @Address_PSGC = '$Address_PSGC',
    @Telephone = '$Telephone',
    @Fax = '$Fax',
    @Email = '$Email',
    @FundingAgency_id = $FundingAgency_id,
    @TotalDuration = $TotalDuration,
    @createdBy = $createdBy");  
  $stmt->execute();
  $proposalid = $stmt ->fetch();
  $app_list = array(
              "id" => $proposalid[0] );
    

  return  $app_list;
}


function programinsert($proposalid)
{
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spProposal_Program_Insert_Update
    @ProposalID = '$proposalid'");  
  $stmt->execute();
  $proposalid = $stmt ->fetch();
  $app_list = array(
              "id" => $proposalid[0] );
    

  return  $app_list;
}
function projectadd($programid,$title,$duration)
{
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spProposal_Project_Insert
    @Program_id = '$programid',@ProjectTitle = '$title',@Duration = $duration");  
  $stmt->execute();
  $app_list = array(
              "status" => "success" );

  return  $app_list;
}

function proposallists($userid)
{
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spProposal_List
    @UserID = '$userid'");  
  $stmt->execute();
  
  $x=0;
while ($proposal = $stmt ->fetch()) {
   $app_list[$x] = array(
              "id" => $proposal[0],
              "GeneralTitle" => $proposal[1],
              "Coordinator" => $proposal[2],
              "Agency" => $proposal[3],
              "Address" => $proposal[4],
              "Telephone" => $proposal[5],
              "Fax" => $proposal[6],
              "Email" => $proposal[7],
              "FundingAgency" => $proposal[8],
               );
   $x++;
}
  return  $app_list;
}

 
function proposaldelete($proposalid)
{
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spProposal_Delete
    @id = $proposalid");  
  $stmt->execute();
  $app_list = array(
              "ok" =>"ok"
               );
  return  $app_list;
}

function addbudget($pid,$s,$ps,$moe,$co)
{
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spProposal_ProgramBudgetSummary_Insert
    @Program_id = $pid,@SourceOfFund = $s,@PS = $ps,@MOE = $moe,@CO = $co");  
  $stmt->execute();
  $app_list = array(
              "ok" =>"ok"
               );
  return  $app_list;
}
 
function removeprojecttitle($projectid)
{
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spProposal_Project_Delete
    @id = $projectid");  
  $stmt->execute();
  $app_list = array(
              "ok" =>"ok"
               );
  return  $app_list;
}

function removebudget($id)
{
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spProposal_ProgramBudgetSummary_Delete
    @id = $id");  
  $stmt->execute();
  $app_list = array(
              "ok" =>"ok"
               );
  return  $app_list;
}

function proposaldone($esum,$proposalid)
{
  $esum=htmlspecialchars(strip_tags($esum));
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spProposal_Program_Insert_Update
    @ProposalID = '$proposalid',@Significance = '$esum'");  
  $stmt->execute();
  $app_list = array(
              "ok" =>"ok"
               );
  return  $app_list;
}

function FundingAgency_List()
{
  //normally this info would be pulled from a database.
  //build JSON array
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spFundingAgency_List");  
  $stmt->execute();
  $app_list = array(
              "id" => null);
  $app_list = array(
               0 => $app_list);
  $x=0;
while ($row = $stmt ->fetch()) {
    $app_list[$x] = array(
              "id" => $row[0],
              "name" =>  $row[1],
              "desciption" =>  $row[2]);
            $x++;
        
}
  return  $app_list;
}

function company_List()
{
  //normally this info would be pulled from a database.
  //build JSON array
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spCompany_List");  
  $stmt->execute();
  $app_list = array(
              "id" => null);
  $app_list = array(
               0 => $app_list);
  $x=0;
while ($row = $stmt ->fetch()) {
    $app_list[$x] = array(
              "id" => $row[0],
              "name" =>  $row[1]);
            $x++;
        
}
  return  $app_list;
}
function getprojecttitles($programid)
{
  //normally this info would be pulled from a database.
  //build JSON array
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spProposal_Project_List
    @Program_id = $programid");  
  $stmt->execute();
  $app_list = array(
              "id" => null);
  $app_list = array(
               0 => $app_list);
  $x=0;
while ($row = $stmt ->fetch()) {
    $app_list[$x] = array(
              "id" => $row[0],
              "ptitle" =>  $row[1],
              "duration" =>  $row[2],
              "pdstation" =>  $row[3],
              "siteoi" =>  $row[4], 
              "significance" => $row[5], 
              "objectives" => $row[7], 
              "revlit" => $row[9], 
              "sbasis" =>  $row[17], 
              "methodology" =>  $row[13] , 
              "eoutput" =>  $row[15],
              "targetb" =>  $row[17]  );
            $x++;
        
}
  return  $app_list;
}
function getbudget($programid)
{
  //normally this info would be pulled from a database.
  //build JSON array
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spProposal_ProgramBudgetSummary_List
    @Program_id = $programid");  
  $stmt->execute();
  $app_list = array(
              "id" => null);
  $app_list = array(
               0 => $app_list);
  $x=0;
while ($row = $stmt ->fetch()) {
    $app_list[$x] = array(
              "id" => $row[0],
              "pid" =>  $row[1],
              "sof" =>  $row[2],
              "ps" =>  $row[3],
              "moe" =>  $row[4], 
              "co" => $row[5]);
            $x++;
        
}
  return  $app_list;
}
function login($uname,$pword,$appname,$appsecret)
{
  //normally this info would be pulled from a database.
  //build JSON array

  $uname=htmlspecialchars(strip_tags($uname));
  $pword = md5($pword);
  $appsecret = md5($appsecret);

  $database = new Database();
  $db = $database->getConnection();

  $stmt = $db->prepare("exec spUser_Login
    @username = '$uname',
    @password = '$pword',
    @applicationName = '$appname',
    @appSecret = '$appsecret'");  
  $stmt->execute();
  $app_list = array(
              "id" => null);
    $row = $stmt ->fetch();
    $app_list = array(
              "id" => $row[0],
              "email" =>  $row[1],
              "confirmed" =>  $row[2],
              "lockout" =>  $row[3],
              "codehash" =>  $row[4], 
              "dateregistered" => $row[5], 
              "photo" => $row[6]);

  return  $app_list;
}
function getuserinfo($id)
{
  $database = new Database();
  $db = $database->getConnection();

  $stmt = $db->prepare("exec spUser_PersonalInformation_Get
    @userID = $id");  
  $stmt->execute();
  $app_list = array(
              "id" => null);
    $row = $stmt ->fetch();
    $app_list = array(
              "id" => $row[0],
              "surname" =>  $row[1],
              "fname" =>  $row[2],
              "mname" =>  $row[3],
              "ext" =>  $row[4], 
              "birthdate" => $row[5], 
              "sex" => $row[6], 
              "civilstatus" => $row[7], 
              "height" => $row[8], 
              "weight" => $row[9], 
              "bloodtype" => $row[10], 
              "gsis" => $row[11], 
              "pagibig" => $row[12], 
              "philhealth" => $row[13], 
              "tin" => $row[14], 
              "agency" => $row[15], 
              "citizenship" => $row[16], 
              "address" => $row[17], 
              "psg" => $row[18], 
              "paddress" => $row[19], 
              "telno" => $row[20], 
              "mobileno" => $row[21]);

  return  $app_list;
}



//return JSON array
exit(json_encode($value));
?>