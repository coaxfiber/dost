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
include_once 'functions.php';


$possible_url = array("proposalinsert","proposallists", "proposaldelete", 'programinsert', 'getprojecttitles','projectadd','removeprojecttitle','removebudget','removebudget2','FundingAgency_List','addbudget','getbudget','addbudget2','getbudget2','proposaldone','login','getuserinfo','projectinsert','company_List','projectaddcoopagency','getcoopagency','projectdeletecoopagency',
  'projectclassificationupdate',
  'spProposal_ProjectDiscipline_Insert_Update',
  'spProposal_ProjectPriorityAgenda_Insert_Update',
  'spProposal_ProjectMOI_Insert_Update',
  'spProposal_ProjectSector_Insert_Update',
  'statuschange',
  'degreelevel',
  'researchadd',
  'spProposal_ProjectProponent_Insert',
  'spProposal_ProjectProponent_Delete',
  'spProposal_ProjectProponent_List',
  'spResearch_List',
  'spResearchAuthor_Insert_Update',
  'spResearchAuthorDelete',
  'spResearchAuthor_Select');

$value = "An error has occurred";

if (isset($_GET["action"]) && in_array($_GET["action"], $possible_url))
{
  switch ($_GET["action"])
    {

      case "spResearchAuthor_Select":
        $value = spResearchAuthor_Select($_GET["rid"]);
        break;
      case "spResearchAuthor_Insert_Update":
        $value = spResearchAuthor_Insert_Update(
          $_POST["rid"],
          $_POST["aid"]);
        break;
      case "spResearchAuthorDelete":
        $value = spResearchAuthorDelete($_GET["rid"]);
        break;


      case "spResearch_List":
        $value = spResearch_List($_GET["company"]);
        break;
      case "spProposal_ProjectProponent_List":
        $value = spProposal_ProjectProponent_List($_GET["projectid"]);
        break;
      case "spProposal_ProjectProponent_Insert":
        $value = spProposal_ProjectProponent_Insert(
          $_POST["pid"],
          $_POST["fname"],
          $_POST["lname"],
          $_POST["mname"],
          $_POST["sname"],
          $_POST["percent"],
          $_POST["type"]);
        break;
      case "spProposal_ProjectProponent_Delete":
        $value = spProposal_ProjectProponent_Delete($_GET["id"]);
        break;
      case "statuschange":
        $value = statuschange($_POST["proposalid"],$_POST["statusid"],$_POST["remarks"],$_POST["userid"],$_POST["type"]);
        break;
      case "degreelevel":
        $value = degreelevel();
        break;
      case "spProposal_ProjectSector_Insert_Update":
        $value = spProposal_ProjectSector_Insert_Update($_GET["projectid"],$_GET["cid"]);
        break;
      case "spProposal_ProjectMOI_Insert_Update":
        $value = spProposal_ProjectMOI_Insert_Update($_GET["projectid"],$_GET["cid"]);
        break;
      case "spProposal_ProjectPriorityAgenda_Insert_Update":
        $value = spProposal_ProjectPriorityAgenda_Insert_Update($_GET["projectid"],$_GET["cid"]);
        break;
      case "spProposal_ProjectDiscipline_Insert_Update":
        $value = spProposal_ProjectDiscipline_Insert_Update($_GET["projectid"],$_GET["cid"]);
        break;
      case "projectclassificationupdate":
        $value = projectclassificationupdate($_GET["projectid"],$_GET["cid"]);
        break;
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
      case "removebudget2":
        $value = removebudget2($_GET["bid"]);
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
      case "addbudget2":
        $value = addbudget2($_POST["projectid"],$_POST["sof"],$_POST["ps"],$_POST["moe"],$_POST["co"]);
        break;
      case "getbudget2":
        $value = getbudget2($_GET["projectid"]);
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
          $_POST["id"],
          $_POST["title"],
          $_POST["duration"],
          $_POST["rndstation"],
          $_POST["siteofi"],
          $_POST["significance"],
          $_POST["objectives"],
          $_POST["literature"],
          $_POST["sbasis"],
          $_POST["methodology"],
          $_POST["majora"],
          $_POST["expectedoutput"],
          $_POST["targetb"],
          $_POST["start"],
          $_POST["completion"]);
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
      case "researchadd":
        $value = researchadd($_POST["title"],$_POST["abstract"],$_POST["company"],$_POST["degreelevel"],$_POST["user"]);
        break;
    }
}




//return JSON array
if ($value == "An error has occurred") {
$filename="sable";
  $database = new Database();
$db = $database->getConnection();
$programid=1128;
  $stmt = $db->prepare("exec spProposal_Project_List
    @Program_id = $programid");  
  $stmt->execute();
  $app_list = array(
              "id" => null);
  $app_list = array(
               0 => $app_list);
  $x=0;
while ($row = $stmt ->fetch()) {
    $str =  $row[26];
        
}


//header('Content-Type:application/pdf');
header('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
header('Content-Transfer-Encoding: binary');
header('Content-Disposition: attachment; filename=my.xlsx');
ob_clean();
flush();
echo base64_decode($str);

exit();

}else
exit(json_encode($value));
?>