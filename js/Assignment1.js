function AreaSelection(selection)
{
    document.getElementById("area1").style.visibility = "hidden";
    document.getElementById("area2").style.visibility = "hidden";

switch (selection)
{
    case "Area 1":
    document.getElementById("area1").style.visibility = "visible";
    break;
    case "Area 2":
    document.getElementById("area2").style.visibility = "visible";
    break;
    case "None": //No menu item selected, so no section should be displayed
    break;
    default:
        alert("Please select a different menu option");
        }
        }