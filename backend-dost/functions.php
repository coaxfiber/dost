<?php 


function spUser_PersonalInformation_Get($email)
{
  //normally this info would be pulled from a database.
  //build JSON array
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spUser_PersonalInformation_Get
    @userName = :email");  
  $stmt->bindParam(':email', $email);
  $stmt->execute();
  $app_list = array(
              "id" => null);
  $app_list = array(
               0 => $app_list);
  $x=0;

while ($row = $stmt ->fetch()) {
    $app_list[$x] = array(
              "id" => $row[0],
              "lname" => $row[1],
              "fname" => $row[2],
              "mname" => $row[3],
              "ext" => $row[4],
              "birthdate" => $row[5],
              "placeofbirth" => $row[6],
              "sex" => $row[7],
              "civilstatus" => $row[8],
              "height" => $row[9],
              "weight" => $row[10],
              "bloodtype" => $row[11],
              "GSISno" => $row[12],
              "pagibigno" => $row[13],
              "philhealthno" => $row[14],
              "tinno" => $row[15],
              "agencyemloyeeno" => $row[16],
              "citizenship" => $row[17],
              "residentialaddress" => $row[18],
              "permanentaddressstreet" => $row[19],
              "permanentaddresspsgc" => $row[20],
              "telno" => $row[21],
              "mobileno" => $row[22]

              );
            $x++;
        
}
  return  $app_list;
}

function spResearchPublicationDetails_Insert($rid,$title,$volume,$issue,$year,$publisher)
{
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spResearchPublicationDetails_Insert
    @Research_id = $rid,
    @title = '$title',
    @volume = '$volume',
    @issue = '$issue',
    @year = '$year',
    @publisher = '$publisher'
    ");  
  $stmt->execute();
  $app_list = array(
              "status" => 'success' );

  return  $app_list;
}

function spResearchPublicationDetails_Select($rid)
{
  //normally this info would be pulled from a database.
  //build JSON array
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spResearchPublicationDetails_Select
    @Research_id = $rid");  
  $stmt->execute();
  $app_list = array(
              "id" => null);
  $app_list = array(
               0 => $app_list);
  $x=0;

while ($row = $stmt ->fetch()) {
    $app_list[$x] = array(
              "id" => $row[0],
              "researchid" => $row[1],
              "title" => $row[2],
              "volume" => $row[3],
              "issue" => $row[4],
              "year" => $row[5],
              "publisher" => $row[6]
              );
            $x++;
        
}
  return  $app_list;
}

function spResearchPublicationDetails_Delete($id)
{
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spResearchPublicationDetails_Delete
    @id = $id
    ");  
  $stmt->execute();
  $app_list = array(
              "ok" =>null
               );
  return  $app_list;
}


function spAuthor_Delete($id)
{
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spAuthor_Delete
    @id = $id
    ");  
  $stmt->execute();
  $row = $stmt ->fetch();
  $app_list = array(
              "status" =>$row[0]
               );

  return  $app_list;
}

function spAuthor_Insert($fname,$mname,$lname,$sname,$cid){
  $database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spAuthor_Insert
   @FirstName = :fname,
   @MiddleName = :mname,
    @Surname =:lname,
    @NameExtension =:sname,
    @companyID = '$cid'
    ");  


  $stmt->bindParam(':fname', $fname);
  $stmt->bindParam(':mname', $mname);
  $stmt->bindParam(':lname', $lname);
  $stmt->bindParam(':sname', $sname);
  $stmt->execute();
  $app_list = array(
              "status" => 'success' );

  return  $app_list;
}

function spResearchResearchStatus_Insert($rid,$remarks,$status){
  $database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spResearchResearchStatus_Insert
    @Research_id = $rid,
    @Remarks = '$remarks',
    @researchStatus_id = $status
    ");  
  $stmt->execute();
  $app_list = array(
              "status" => 'success2' );

  return  $app_list;
}

function spResearchDocument_Insert($rid,$name,$doc,$type,$status)
{
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spResearchDocument_Insert
    @Research_id = $rid,
    @name = '$name',
    @document = '$doc',
    @type = '$type',
    @documentStatus_id = '$status'
    ");  
  $stmt->execute();
  $app_list = array(
              "status" => 'success' );

  return  $app_list;
}

function spResearchDocument_Select($rid,$type)
{
  //normally this info would be pulled from a database.
  //build JSON array
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spResearchDocument_Select
    @Research_id = $rid,
    @type = $type");  
  $stmt->execute();
  $app_list = array(
              "id" => null);
  $app_list = array(
               0 => $app_list);
  $x=0;

while ($row = $stmt ->fetch()) {
    $app_list[$x] = array(
              "id" => $row[0],
              "researchid" => $row[1],
              "name" => $row[2],
              "value" => $row[3],
              "dateuploaded" => $row[4],
              "type" => $row[5],
              "statusid" => $row[6]
              );
            $x++;
        
}
  return  $app_list;
}

function spResearchDocument_Delete($id)
{
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spResearchDocument_Delete
    @id = $id
    ");  
  $stmt->execute();
  $app_list = array(
              "ok" =>null
               );
  return  $app_list;
}


function spResearchFundingAgency_Delete($id)
{
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spResearchFundingAgency_Delete
    @id = $id
    ");  
  $stmt->execute();
  $app_list = array(
              "ok" =>null
               );
  return  $app_list;
}
function spResearchFundingAgency_Select($id)
{
  //normally this info would be pulled from a database.
  //build JSON array
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spResearchFundingAgency_Select
    @Research_id = $id");  
  $stmt->execute();
  $app_list = array(
              "id" => null);
  $app_list = array(
               0 => $app_list);
  $x=0;

while ($row = $stmt ->fetch()) {
    $app_list[$x] = array(
              "id" => $row[0],
              "sof" => $row[1],
              "sofid" => $row[2],
              "name" => $row[3],
              "desc" => $row[4]
              );
            $x++;
        
}
  return  $app_list;
}
function spResearchFundingAgency_Insert_Update($rid,$did)
{
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spResearchFundingAgency_Insert_Update
    @Research_id = $rid,
    @SourceOfFundID = '$did'
    ");  
  $stmt->execute();
  $app_list = array(
              "status" => "success" );

  return  $app_list;
}



function spResearchProgramDiscipline_Delete($id)
{
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spResearchProgramDiscipline_Delete
    @id = $id");  
  $stmt->execute();
  $app_list = array(
              "ok" =>null
               );
  return  $app_list;
}
function spResearchProgramDiscipline_Select($id)
{
  //normally this info would be pulled from a database.
  //build JSON array
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spResearchProgramDiscipline_Select
    @Research_id = $id");  
  $stmt->execute();
  $app_list = array(
              "id" => null);
  $app_list = array(
               0 => $app_list);
  $x=0;

while ($row = $stmt ->fetch()) {
    $app_list[$x] = array(
              "id" => $row[0],
              "rid" => $row[1],
              "did" => $row[2],
              "desc" => $row[3]
              );
            $x++;
        
}
  return  $app_list;
}
function spResearchProgramDiscipline_Insert_Update($rid,$did)
{
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spResearchProgramDiscipline_Insert_Update
    @Research_id = $rid,
    @ProgramDiscipline = '$did'
    ");  
  $stmt->execute();
  $app_list = array(
              "status" => "success" );

  return  $app_list;
}

function spFundingAgency_Select_NotIn($rid)
{
  //normally this info would be pulled from a database.
  //build JSON array
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spFundingAgency_Select_NotIn
   @Research_id= $rid");  
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
              "desc" =>  $row[2]);
            $x++;
        
}
  return  $app_list;
}



function spProgramDiscipline_Select_NotIn($rid)
{
  //normally this info would be pulled from a database.
  //build JSON array
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spProgramDiscipline_Select_NotIn
    @ResearchId= $rid");  
  $stmt->execute();
  $app_list = array(
              "id" => null);
  $app_list = array(
               0 => $app_list);
  $x=0;
while ($row = $stmt ->fetch()) {
    $app_list[$x] = array(
              "id" => $row[0],
              "desc" =>  $row[1]);
            $x++;
        
}
  return  $app_list;
}


function spResearchKeyword_Delete($id)
{
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spResearchKeyword_Delete
    @id = $id");  
  $stmt->execute();
  $app_list = array(
              "ok" =>$id
               );
  return  $app_list;
}
function spResearchKeyword_Select($id)
{
  //normally this info would be pulled from a database.
  //build JSON array
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spResearchKeyword_Select
    @Research_id = $id");  
  $stmt->execute();
  $app_list = array(
              "id" => null);
  $app_list = array(
               0 => $app_list);
  $x=0;

while ($row = $stmt ->fetch()) {
    $app_list[$x] = array(
              "id" =>  $row[0],
              "keyword" => $row[1]
              );
            $x++;
        
}
  return  $app_list;
}
function spResearchKeyword_Insert($rid,$kw)
{
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spResearchKeyword_Insert
    @Research_id = $rid,
    @Keyword = :kw
    ");  


  $stmt->bindParam(':kw', $kw);
  $stmt->execute();
  $app_list = array(
              "status" => "success" );

  return  $app_list;
}





function spAuthor_listnot($cid,$rid)
{
  //normally this info would be pulled from a database.
  //build JSON array
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spAuthor_list_NotIn
     @CompanyID = '$cid',
     @Research_id = '$rid'");  
  $stmt->execute();
  $app_list = array(
              "id" => null);
  $app_list = array(
               0 => $app_list);
  $x=0;
while ($row = $stmt ->fetch()) {
    $app_list[$x] = array(
              "id" => $row[0],
              "name" =>  $row[1] ,
              "authorid" =>  $row[2] ,
              "email" =>  $row[3]  );
            $x++;
        
}
  return  $app_list;
}
function spUserViewDomain_Company_By_Username($email)
{
  //normally this info would be pulled from a database.
  //build JSON array
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spUserViewDomain_Company_By_Username
    @username = '$email'");  
  $stmt->execute();
  $app_list = array(
              "id" => $email);
  $app_list = array(
               0 => $app_list);
  $x=0;
while ($row = $stmt ->fetch()) {
    $app_list[$x] = array(
              "roleid" => $row[0],
              "name" =>  $row[1] ,
              "appname" =>  $row[2] ,
              "companyid" =>  $row[3],
              "companyname" =>  $row[4]  );
            $x++;
        
}
  return  $app_list;
}

function spResearchAuthorDelete($aid,$rid)
{
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spResearchAuthorDelete
    @Research_id = $rid,
    @authorid= $aid");  
  $stmt->execute();
  $app_list = array(
              "ok" =>$aid
               );
  return  $app_list;
}
function spResearchAuthor_Select($id)
{
  //normally this info would be pulled from a database.
  //build JSON array
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spResearchAuthor_Select
    @Research_id = $id");  
  $stmt->execute();
  $app_list = array(
              "id" => null);
  $app_list = array(
               0 => $app_list);
  $x=0;
while ($row = $stmt ->fetch()) {
    $app_list[$x] = array(
              "rid" => $row[0],
              "id" => $row[1],
              "name" =>  $row[2]." ".$row[3].' '. $row[4].' '. $row[5] ,
              "userid" =>  $row[6] ,
              "email" =>  $row[7]  );
            $x++;
        
}
  return  $app_list;
}
function spResearchAuthor_Insert_Update($rid,$aid)
{
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spResearchAuthor_Insert_Update
    @Research_id = $rid,
    @Author_id = $aid
    ");  
  $stmt->execute();
  $app_list = array(
              "status" => "success" );

  return  $app_list;
}




function spResearch_List($x)
{
  //normally this info would be pulled from a database.
  //build JSON array
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spResearch_List @CompanyID = '$x'");  
  $stmt->execute();
  $app_list = array(
              "id" => null);
  $app_list = array(
               0 => $app_list);
  $x=0;
  while ($row = $stmt ->fetch()) {
      $app_list[$x] = array(
                "id" => $row[0],
                "title" =>  $row[1],
                "dlid" =>  $row[3],
                "level" =>  $row[4],
                "company" =>  $row[5],
                "datecreated" =>  $row[6],
                "abstract" =>  $row[2] );
              $x++;
  }
  return  $app_list;
}

function spProposal_ProjectProponent_Delete($id)
{
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spProposal_ProjectProponent_Delete
    @id = $id");  
  $stmt->execute();
  $app_list = array(
              "ok" =>"ok"
               );
  return  $app_list;
}
function spProposal_ProjectProponent_List($projectid)
{
  //normally this info would be pulled from a database.
  //build JSON array
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spProposal_ProjectProponent_List
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
function spProposal_ProjectProponent_Insert($pid,$fname,$lname,$mname,$sname,$percent,$type)
{
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spProposal_ProjectProponent_Insert
    @Project_id = $pid,
    @fName = '$fname',
    @lName = '$lname',
    @mName = '$mname',
    @sName = '$sname',
    @percentTimeDevoted = $percent,
    @ProponentType_id = $type

    ");  
  $stmt->execute();
  $app_list = array(
              "status" => "success" );

  return  $app_list;
}






function researchadd($title,$abstract,$company,$degreelevel,$user)
{

  $database = new Database();
  $db = $database->getConnection();

  $stmt = $db->prepare("exec spResearch_Insert
    @Title = :title,
    @Abstract = :abstract,
    @DegreeLevel_id = '$degreelevel',
    @CompanyID = '$company',
    @CreatedBy = '$user'");  
  $stmt->bindParam(':title', $title);
  $stmt->bindParam(':abstract', $abstract);
  $stmt->execute();
   $row = $stmt ->fetch();
  $app_list = array(
              "id" => $row[0] );
  return  $app_list;
}
function researchedit($id,$title,$abstract,$company,$degreelevel,$user)
{
  $database = new Database();
  $db = $database->getConnection();

  $stmt = $db->prepare("exec spResearch_Update
    @ID = $id,
    @Title = :title,
    @Abstract = $:abstract,
    @DegreeLevel_id = '$degreelevel',
    @CompanyID = '$company',
    @UpdatedBy = '$user'");  
  $stmt->bindParam(':title', $title);
  $stmt->bindParam(':abstract', $abstract);
  $stmt->execute();
   $row = $stmt ->fetch();
  $app_list = array(
              "id" => $id);
  return  $app_list;
}

function degreelevel()
{
  //normally this info would be pulled from a database.
  //build JSON array
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spDegreeLevel_List");  
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
              "description" =>  $row[2]);
            $x++;
        
}
  return  $app_list;
}
function statuschange($proposalid,$statusid,$remarks,$userid,$type)
{
  $database = new Database();
  $db = $database->getConnection();

  $stmt = $db->prepare("exec spProposal_Status_Insert
    @Proposal_id = $proposalid,
    @StatusID = $statusid,
    @Remarks = '$remarks',
    @UserId = $userid,
    @Type = $type");  
  $stmt->execute();
  $app_list = array(
              "ok" =>"ok"
               );
  return  $app_list;
}


function spProposal_ProjectSector_Insert_Update($pid,$cid)
{
  $database = new Database();
  $db = $database->getConnection();

  $stmt = $db->prepare("exec spProposal_ProjectSector_Insert_Update
    @Project_id = $pid,
    @ProjectSector_id = $cid");  
  $stmt->execute();
  $app_list = array(
              "ok" =>"ok"
               );
  return  $app_list;
}
function spProposal_ProjectMOI_Insert_Update($pid,$cid)
{
  $database = new Database();
  $db = $database->getConnection();

  $stmt = $db->prepare("exec spProposal_ProjectMOI_Insert_Update
    @Project_id = $pid,
    @MOI_ID = $cid");  
  $stmt->execute();
  $app_list = array(
              "ok" =>"ok"
               );
  return  $app_list;
}
function spProposal_ProjectPriorityAgenda_Insert_Update($pid,$cid)
{
  $database = new Database();
  $db = $database->getConnection();

  $stmt = $db->prepare("exec spProposal_ProjectPriorityAgenda_Insert_Update
    @Project_id = $pid,
    @PriorityAgenda_id = $cid");  
  $stmt->execute();
  $app_list = array(
              "ok" =>"ok"
               );
  return  $app_list;
}
function projectclassificationupdate($pid,$cid)
{
  $database = new Database();
  $db = $database->getConnection();

  $stmt = $db->prepare("exec spProposal_ProjectClassification_Insert_Update
    @Project_id = $pid,
    @ProjectClassification_id = $cid");  
  $stmt->execute();
  $app_list = array(
              "ok" =>"ok"
               );
  return  $app_list;
}
function spProposal_ProjectDiscipline_Insert_Update($pid,$cid)
{
  $database = new Database();
  $db = $database->getConnection();

  $stmt = $db->prepare("exec spProposal_ProjectDiscipline_Insert_Update
    @Project_id = $pid,
    @ProjectDiscipline_id = $cid");  
  $stmt->execute();
  $app_list = array(
              "ok" =>"ok"
               );
  return  $app_list;
}
function projectinsert($id,$title,$duration,$rndstation,$siteofi,$significance,$objectives,$literature,$sbasis,$methodology,$majora,$expectedoutput,$targetb,$start,$completion){

 $database = new Database();
  $db = $database->getConnection();

  $title=htmlspecialchars(strip_tags($title));
  $duration=htmlspecialchars(strip_tags($duration));
  $rndstation=htmlspecialchars(strip_tags($rndstation));
  $siteofi=htmlspecialchars(strip_tags($siteofi));
  $significance=htmlspecialchars(strip_tags($significance));
  $objectives=htmlspecialchars(strip_tags($objectives));
  $literature=htmlspecialchars(strip_tags($literature));
  $sbasis=htmlspecialchars(strip_tags($sbasis));
  $majora=addslashes($majora);
  $methodology=htmlspecialchars(strip_tags($methodology));
  $expectedoutput=htmlspecialchars(strip_tags($expectedoutput));
  $targetb=htmlspecialchars(strip_tags($targetb));

  //    @SiteOfImplementation_PSGC = '$Address_PSGC',

  $stmt = $db->prepare("exec spProposal_Project_Update
    @id = $id,
    @ProjectTitle = '$title',
    @Duration = $duration,
    @RAndDStation = '$rndstation',
    @Significance = '$significance',
    @Objectives = '$objectives',
    @ReviewOfLiterature = '$literature',
    @ScientificBasis = '$sbasis',
    @Methodology = '$methodology',
    @ExpectedOutput = '$expectedoutput',
    @TargetBeneficiaries = '$targetb',
    @WorkPlan_attachment = :majora,
    @PlannedStartDate = '$start',
    @PlannedCompletionDate = '$completion'");
  $stmt->bindParam(':majora', $majora);  
  $stmt->execute();
  $proposalid = $stmt ->fetch();
  $app_list = array(
              "id" => $id );
    

  return  $app_list;
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

  $stmt = $db->prepare("exec spProposal_List
    @UserID = '$userid'");  
  $stmt->execute();


while ($proposal = $stmt ->fetch()) {
  
$ents=$proposal[0];
   $stmt2 = $db->prepare("exec spProposal_Status_List
    @Proposal_id = $ents");  
  $stmt2->execute();
  $y=0;
  while ($status = $stmt2 ->fetch()) {
     $stat[$y] = array(
                "id" => $status[0],
                "name" => $status[1],
                "remarks" => $status[2],
                "createdby" => $status[3],
                "datecreated" => $status[4],
                "updatedby" => $status[5],
                "dateupdated" => $status[6],
                "type" => $status[7]
                 );
     $y++;
  }
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
              "status" => $stat,
              "datecreated" => $proposal[9]
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
    @Program_id = $pid,@SourceOfFund = '$s',@PS = $ps,@MOE = $moe,@CO = $co");  
  $stmt->execute();
  $app_list = array(
              "ok" =>"ok"
               );
  return  $app_list;
}
 
function addbudget2($pid,$s,$ps,$moe,$co)
{
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spProposal_ProjectEstimatedBudget_Insert
    @Project_id = $pid,@SourceName = '$s',@PS = $ps,@MOE = $moe,@CO = $co");  
  $stmt->execute();
  $app_list = array(
              "ok" =>$ps
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
function removebudget2($id)
{
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spProposal_ProjectEstimatedBudget_Delete
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
              "objectives" => $row[8], 
              "revlit" => $row[11], 
              "sbasis" =>  $row[14], 
              "methodology" =>  $row[17] , 
              "eoutput" =>  $row[20],
              "targetb" =>  $row[23]  );
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
function getbudget2($projectid)
{
  //normally this info would be pulled from a database.
  //build JSON array
$database = new Database();
$db = $database->getConnection();

  $stmt = $db->prepare("exec spProposal_ProjectEstimatedBudget_List
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

 ?>