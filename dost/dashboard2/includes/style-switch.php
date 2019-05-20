<style type="text/css">
  .switch {
  position: relative;
  margin: 10px 5px;
  height: 35px;
  width: 204px;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
}
 
.switch-label {

  position: relative;
  z-index: 2;
  float: left;
  width: 100px;
  line-height: 33px;
  font-size: 15px;
  color: black;
  text-align: center;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.45);
  cursor: pointer;
}
 
.switch-label:active {
  font-weight: bold;
}
 
.switch-label-off {
  padding-left: 2px;
}
 
.switch-label-on {
  padding-right: 2px;
}
 
.switch-input {
  display: none;
}
 
.switch-input:checked + .switch-label {
  font-weight: bold;
  color: white;
  -webkit-transition: 0.15s ease-out;
  -moz-transition: 0.15s ease-out;
  -o-transition: 0.15s ease-out;
  transition: 0.15s ease-out;
}
 
.switch-input:checked + .switch-label-on ~ .switch-selection {
  /* Note: left: 50% doesn't transition in WebKit */
  left: 103px;
}
 
.switch-selection {
  display: block;
  position: absolute;
  z-index: 1;
  top: 2px;
  left: 2px;
  width: 100px;
  height: 30px;
  background: #65bd63;
  border-radius: 3px;
  background-image: -webkit-linear-gradient(top, #9dd993, #65bd63);
  background-image: -moz-linear-gradient(top, #9dd993, #65bd63);
  background-image: -o-linear-gradient(top, #9dd993, #65bd63);
  background-image: linear-gradient(to bottom, #9dd993, #65bd63);
  -webkit-box-shadow: inset 0 1px rgba(255, 255, 255, 0.5), 0 0 2px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.5), 0 0 2px rgba(0, 0, 0, 0.2);
  -webkit-transition: left 0.15s ease-out;
  -moz-transition: left 0.15s ease-out;
  -o-transition: left 0.15s ease-out;
  transition: left 0.15s ease-out;
}
 
.switch-blue .switch-selection {
  background: #3aa2d0;
  background-image: -webkit-linear-gradient(top, #4fc9ee, #3aa2d0);
  background-image: -moz-linear-gradient(top, #4fc9ee, #3aa2d0);
  background-image: -o-linear-gradient(top, #4fc9ee, #3aa2d0);
  background-image: linear-gradient(to bottom, #4fc9ee, #3aa2d0);
}
 
</style>