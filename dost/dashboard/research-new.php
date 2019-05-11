<?php  
    include('includes/header.php');
?>
<div class="container-fluid">
  <form method="POST" action="engine.php">
          <!-- Breadcrumbs-->
    <div class="row">
    <div class="col-xl-9 col-sm-12 mb-12">
          <div class="card mb-3">
            <div class="card-header">
              
          <h4>Add New Research</h4></div>
            <div class="card-body">
              
                <input type="text" class="form-control" placeholder="Enter Title" required="required" id="title">

        <div style="height: 20px"></div>
              &nbsp;Abstract:
        <div style="height: 10px"></div>
                <textarea class="form-control" style="height: 200px" id="abstract" required="required"></textarea>
            </div>
          </div>

           
          <div class="card mb-3">
            <div class="card-header">
              <b>Author</b></div>
            <div class="card-body">
              <table id="dataTable" width="100%" cellspacing="0">
                <tbody>
                <tr>
                  <td>
                <input type="text" class="form-control" placeholder="Author"></td>
                <td><button class="btn btn-basic" style="border-style: solid;border-color: gray;border-width: 1px; color:black;background-color: white"><i class="fas fa-plus-circle"></i> Add</button></td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-left: 20px"><button class="btn btn-basic" style="color:black;background-color: white"><i class="fas fa-minus-circle"></i> Elton Bagne</button></td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-left: 20px"><button class="btn btn-basic" style="color:black;background-color: white"><i class="fas fa-minus-circle"></i> Vice Ganda</button></td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-left: 20px"><button class="btn btn-basic" style="color:black;background-color: white"><i class="fas fa-minus-circle"></i> Angel Locsin</button></td>
                </tr>
                </tbody>
              </table>
            </div>
          </div> 

    <div class="row">

    <div class="col-xl-6 col-sm-12 mb-12">
     <div class="card mb-3">
            <div class="card-header">
              <b>Categories</b></div>
            <div class="card-body">
              <div style="height: 150px;overflow-y: scroll;">
                 <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>  
                 <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>  
                 <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>  
                 <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>  
                 <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>   
                 <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>   
                 <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>   
                 <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>   
                 <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>   
                 <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>   
                 <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>                
              </div>
            </div>
          </div>
    </div>
    <div class="col-xl-6 col-sm-12 mb-12">
      <div class="card mb-3">
            <div class="card-header">
              <b>Subjects</b></div>
            <div class="card-body">
              <div style="height: 150px;overflow-y: scroll;">
                 <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>  
                 <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>  
                 <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>  
                 <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>  
                 <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>   
                 <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>   
                 <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>   
                 <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>   
                 <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>   
                 <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>   
                 <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>                
              </div>
            </div>
          </div>
    </div>

    </div>
        </div>
      <div class="col-xl-3 col-sm-12 mb-12">

          <div class="card mb-3">
            <div class="card-header">
              <i class="fas fa-table"></i>
              <b>Publish</b></div>
            <div class="card-body">
              <i class="fa fa-fw fa-database"></i> Status: 
              <select class="btn btn-basic" id="rstatus"  style="border-style: solid;border-color: gray;border-width: 1px;">
            <option>Restricted</option>
            <option>Received</option>
            <option>Reviewed</option>
            <option>On hold</option>
            <option>Rejected</option>
            <option>Posted</option>
            <option>Archived</option>
          </select>
        <div style="height: 10px"></div>
              <i class="fa fa-fw fa-ban"></i> Visibility: 
              <select class="btn btn-basic" id="sel1"  style="border-style: solid;border-color: gray;border-width: 1px;">
            <option>Public</option>
            <option>hidden</option>
            <option>Draft</option>
          </select>
          <div style="height: 10px"></div>
              <i class="fa fa-fw fa-address-book"></i> Degree Level: 
              <select class="btn btn-basic" id="sel1"  style="border-style: solid;border-color: gray;border-width: 1px;">
            <option>College</option>
            <option>Graduate School</option>
            <option>Employee</option>
          </select>
        <div style="height: 10px"></div>
          <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/gijgo@1.9.10/js/gijgo.min.js" type="text/javascript"></script>
            <link href="https://cdn.jsdelivr.net/npm/gijgo@1.9.10/css/gijgo.min.css" rel="stylesheet" type="text/css" />
            <table>
              <tr>
              <td><i class="fa fa-fw fa-calendar"></i> Production Date: </td>
              <td>            <input id="datepicker" width="150" style="border-style: solid;border-color: gray;border-width: 1px;" id="pdate" /></td>
              </tr>
            </table>
            <script>
                $('#datepicker').datepicker({
                    uiLibrary: 'bootstrap4'
                });
                var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!

            var yyyy = today.getFullYear();
            if (dd < 10) {
              dd = '0' + dd;
            } 
            if (mm < 10) {
              mm = '0' + mm;
            } 
            var today = mm + '/' + dd + '/' + yyyy;
            document.getElementById('datepicker').value= today;
            </script>
            </div>
            <div class="card-header">
              <button class="btn btn-info" style="float: right;width: ">Save</button></div>
          </div>


          <div class="card mb-3">
            <div class="card-header">
              <b>Marerial</b></div>
            <div class="card-body">
                      <div class="funkyradio">
              <div class="funkyradio-default">
                  <input type="radio" name="radio" id="radio1" value="" />
                  <label for="radio1">Book</label>
              </div>
              <div class="funkyradio-primary">
                  <input type="radio" name="radio" id="radio2" checked/>
                  <label for="radio2">Second Option primary</label>
              </div>
              <div class="funkyradio-success">
                  <input type="radio" name="radio" id="radio3" />
                  <label for="radio3">Third Option success</label>
              </div>
              <div class="funkyradio-danger">
                  <input type="radio" name="radio" id="radio4" />
                  <label for="radio4">Fourth Option danger</label>
              </div>
              <div class="funkyradio-warning">
                  <input type="radio" name="radio" id="radio5" />
                  <label for="radio5">Fifth Option warning</label>
              </div>
              <div class="funkyradio-info">
                  <input type="radio" name="radio" id="radio6" />
                  <label for="radio6">Sixth Option info</label>
              </div>
          </div>
            </div>
            <input type="hidden" name="" id="mtype">
          </div>
          
          <div class="card mb-3">
            <div class="card-header">
              <b>Featured Image</b></div>
            <div class="card-body" style="overflow: hidden;">
              <style type="text/css">

                  #img-upload{
                      width: 100%;
                  }
                  
              </style>
              <script type="text/javascript">
                $(document).ready( function() {
                    $(document).on('change', '.btn-file :file', function() {
                  var input = $(this),
                    label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
                  input.trigger('fileselect', [label]);
                  });

                  $('.btn-file :file').on('fileselect', function(event, label) {
                      
                      var input = $(this).parents('.input-group').find(':text'),
                          log = label;
                      
                      if( input.length ) {
                          input.val(log);
                      } else {
                          if( log ) alert(log);
                      }
                    
                  });
                  function readURL(input) {
                      if (input.files && input.files[0]) {
                          var reader = new FileReader();
                          
                          reader.onload = function (e) {
                              $('#img-upload').attr('src', e.target.result);
                          }
                          
                          reader.readAsDataURL(input.files[0]);
                      }
                  }

                  $("#imgInp").change(function(){
                      readURL(this);
                  });   
                  $("#imgInp2").change(function(){
                      readURL(this);
                  });   
                });
              </script>
                <div class="form-group">
                    <label>Upload Image</label>
                    <div class="input-group">
                        <span class="input-group-btn">
                                <input  type="file" id="imgInp" name="image" required="required">
                            
                        </span>
                    </div>
                    <img id='img-upload' width="100%" />
                </div>
            </div>
          </div>


          <div class="card mb-3">
            <div class="card-header">
              <b>PDF Document</b></div>
            <div class="card-body">
              
                <div class="form-group">
                    <label>Upload Image</label>
                    <div class="input-group">
                        <span class="input-group-btn">
                                <input type="file" id="imgInp2" name="document" required="required">
                        </span>
                    </div>
                    <img id='img-upload' width="100%" />
                </div>
            </div>
          </div>
          <div class="card mb-3">
            <div class="card-header">
              <b>Tags</b></div>
            <div class="card-body">
              <table>
                <tr>
                  <td>
                <input type="text" class="form-control" placeholder="Enter Tag"></td>
                <td style="width: 50px"><button class="btn btn-basic" style="border-style: solid;border-color: gray;border-width: 1px; color:black;background-color: white"><i class="fas fa-plus-circle"></i> Add</button></td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-left: 20px"><button class="btn btn-basic" style="color:black;background-color: white"><i class="fas fa-minus-circle"></i> tag1</button></td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-left: 20px"><button class="btn btn-basic" style="color:black;background-color: white"><i class="fas fa-minus-circle"></i> tag2</button></td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-left: 20px"><button class="btn btn-basic" style="color:black;background-color: white"><i class="fas fa-minus-circle"></i> tag3</button></td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-left: 20px"><button class="btn btn-basic" style="color:black;background-color: white"><i class="fas fa-minus-circle"></i> tag4</button></td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-left: 20px"><button class="btn btn-basic" style="color:black;background-color: white"><i class="fas fa-minus-circle"></i> tag5</button></td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-left: 20px"><button class="btn btn-basic" style="color:black;background-color: white"><i class="fas fa-minus-circle"></i> tag6</button></td>
                </tr>
              </table>
            </div>
          </div>

         
      </div>-->

      </div>
    </form>
    </div>
        <!-- /.container-fluid -->
<?php  
    include('includes/footer.php');
?>