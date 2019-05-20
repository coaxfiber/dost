<?php 
class Database{ 
 
    // specify your own database credentials 
   private $host = "LAPTOP-PIS1HRE9\SQLEXPRESS01"; 
    
   // private $host = "192.168.137.33"; 
    private $db_name = "ResearchReporistory"; 
    private $username = "ResearchRepoDbAdmin2"; 
    private $password = "UsltReseacrhRepo#2018"; 
    public $conn; 
 
    // get the database connection 
    public function getConnection(){ $this->conn = null;
         
        try{
            $this->conn = new PDO("sqlsrv:server=" . $this->host . ";Database=" . $this->db_name, $this->username, $this->password);
        }catch(PDOException $exception){
            echo "Connection error: " . $exception->getMessage();
        }
         
        return $this->conn;
    }
}
?>