<?php 
$allowed = array('http://localhost', 'domain2', 'domain3'); 
session_start();
$user="1";
$mode="2";
if (false) {
   	echo 'Not Allowed!';
}
if(isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowed)){
    // SELECT credentials for this user account from database isset($_GET['api_key'], $_GET['app_secret']
    if(true){
    		include_once 'config/database.php';
			//$stmtpersoninfo = $db->prepare("exec spOTR_EnrolledCourseSelect @idnumber = '0600874'");
			if ($mode==1) {
				$title = $_POST['title'];
				$implementingAgency = $_POST['implementingAgency'];
				$researchAndDevelopmentStationPSGC = $_POST['researchAndDevelopmentStationPSGC'];
				$researchArea = $_POST['researchArea'];
				$significance = $_POST['significance'];
				$objectives = $_POST['objectives'];
				$expectedOutput = $_POST['expectedOutput'];
				$targetBeneficiaries = $_POST['targetBeneficiaries'];
				$duration = $_POST['duration'];
				$StartDate = $_POST['StartDate'];
				$completionDate = $_POST['completionDate'];
				$methodology = $_POST['methodology'];
				$ResearchProposalID = getProposalID($user);

				$ProposalDetailID = insertProposalDetails($ResearchProposalID,$title,$implementingAgency,$researchAndDevelopmentStationPSGC,$researchArea,$significance,$objectives,$expectedOutput,$targetBeneficiaries,$duration,$StartDate,$completionDate,$methodology);
			}

			if ($mode==2) {
				echo getProposalID($user);
			}

    }else{
   		echo 'Not Allowed!';
    }
}else{
   		echo 'Not Allowed!';
    // not allowed
}


function getProposalID($user)
{		
	$database = new Database();
	$db = $database->getConnection();
	$stmt = $db->prepare("exec spResearchProposal_Insert @createdBy = '".$user."'");  
	$stmt ->execute();
	while ($rec = $stmt ->fetch()) {
		return $rec[0];
	}
}

function insertProposalDetails($ResearchProposalID,$title,$implementingAgency,$researchAndDevelopmentStationPSGC,$researchArea,$significance,$objectives,$expectedOutput,$targetBeneficiaries,$duration,$StartDate,$completionDate,$methodology)
{	
	$ResearchProposalID = htmlspecialchars(strip_tags($ResearchProposalID));
	$title = htmlspecialchars(strip_tags($title));
	$implementingAgency = htmlspecialchars(strip_tags($implementingAgency));
	$researchAndDevelopmentStationPSGC = htmlspecialchars(strip_tags($researchAndDevelopmentStationPSGC));
	$researchArea = htmlspecialchars(strip_tags($researchArea));
	$significance = htmlspecialchars(strip_tags($significance));
	$objectives = htmlspecialchars(strip_tags($objectives));
	$expectedOutput = htmlspecialchars(strip_tags($expectedOutput));
	$targetBeneficiaries = htmlspecialchars(strip_tags($targetBeneficiaries));
	$duration = htmlspecialchars(strip_tags($duration));
	$StartDate = htmlspecialchars(strip_tags($StartDate));
	$completionDate = htmlspecialchars(strip_tags($completionDate));
	$methodology = htmlspecialchars(strip_tags($methodology));

	$database = new Database();
	$db = $database->getConnection();
	$stmt = $db->prepare("exec spResearchProposalDetails_Insert 
							 @ResearchProposalID = '".$ResearchProposalID."',".
							"@title = '".$title."',".
							"@implementingAgency = '".$implementingAgency."',".
							"@researchAndDevelopmentStationPSGC = '".$researchAndDevelopmentStationPSGC."',".
							"@researchArea = '".$researchArea."',".
							"@significance = '".$significance."',".
							"@objectives = '".$objectives."',".
							"@expectedOutput = '".$expectedOutput."',".
							"@targetBeneficiaries = '".$targetBeneficiaries."',".  
							"@duration = '".$duration."',".
							"@StartDate = '".$StartDate."',".
							"@completionDate = '".$completionDate."',".
							"@methodology = '".$methodology);  
	$stmt ->execute();
	while ($rec = $stmt ->fetch()) {
		return $rec[0];
	}

}



$name = $_GET['projtitle'];

foreach ($name as $color){ 
    echo $color."<br />";
}


?> 