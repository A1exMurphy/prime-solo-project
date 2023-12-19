import { Link } from "react-router-dom/cjs/react-router-dom.min"
import './NavMenu.css';



function NavMenu() {


    /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
    function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    }
    
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }


    return (
<div class="dropdown">
  <button onClick={myFunction} class="dropbtn">Dropdown</button>
  <div id="myDropdown" class="dropdown-content">
    <Link to="/beercollection">Beer Collection</Link>
    <br></br>
    <Link to="/tappedbeers">Tapped Beers</Link>
    <br></br>
    <Link to="/changethetap">Change the Tap</Link>
  </div>
</div>
    )
}

export default NavMenu;