<?php  
    include('includes/header.php');

$_SESSION['userID'] = '1';
?>
<div class="container-fluid">

          <!-- Breadcrumbs-->
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Dashboard</a>
            </li>
            <li class="breadcrumb-item active">Proposals</li>
          </ol>
          <?php 
    		include_once 'config/database.php';
          	$database = new Database();
			$db = $database->getConnection();
			$stmt = $db->prepare("exec spResearchProposal_List
									 @UserID = ".$_SESSION['userID']);  
			$stmt ->execute();
			
          ?>

          <!-- DataTables Example -->
          <div class="card mb-3">
            <div class="card-header">
              <i class="fas fa-table"></i>
              Proposals</div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th style="display: none"></th>
                      <th>ID</th>
                      <th>Title</th>
                      <th>Status</th>
                      <th>Date Published</th>
                      <th><center>- Action -</center></th>
                    </tr>
                  </thead>
                  <tbody>
                  	<?php 
                  	while ($rec = $stmt ->fetch()) {
                  	?>
                    <tr>
                      <th style="display: none"></th>
                      <td><a href="proposal-edit?w=<?php echo $rec[0]; ?>"><?php echo $rec[0]; ?></a></td>
                      <td><a href="proposal-edit?w=<?php echo $rec[0]; ?>">
                      	<?php 
                      	$stmtpdetails = $db->prepare("exec spResearchProposalDetails_List
												 @ResearchProposalID = ".$rec[0]);  
						$stmtpdetails ->execute();
						while ($rec2 = $stmtpdetails ->fetch()) { 
							$title = $rec2[2];
							$startDate = $rec2[11];
						}
						echo $title;
                      	?></a></td>
                      <td>
                      	Submitted
                      </td>
                      <td><?php 
                      	$date=date_create($startDate);
						echo date_format($date,"M d, Y");
                       $rec[0]; ?></td>
                      <td>
                      	<center>
	                      	<button class="btn btn-info btn-sm"><i class="fas fa-file-pdf"></i></button>
	                      	<button class="btn btn-info btn-sm"><i class="fas fa-edit"></i></button>
	                        <button class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                    	</center>
                      </td>
                    </tr>

                  	<?php 
                  		}
                  	?>

                  </tbody>
                </table>
              </div>
            </div>
            <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
          </div>

        </div>
        <!-- /.container-fluid -->
<?php  
    include('includes/footer.php');
?>
<script type="text/javascript">
	$('#dataTable').bootstrapTable({
    showFilter: true,
    showMultiSort: true,
    sortPriority: [{
        "sortName": "Location",
        "sortOrder": "desc"
    }]
});
</script>