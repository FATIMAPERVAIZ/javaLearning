function swapPic(id,newpic){
javascript:void(0);
document.getElementById(id).src = newpic;
// var pic = document.getElementById("before");
//  pic.className = "change"

document.getElementById("before").className='change'; 
}
function getAddress() {
    let link = document.getElementById("linkl"); // Correct ID
    if (link) {
        var address = link.href; // Get the href attribute
        console.log(address); // Log the address to the console
    } else {
        console.log("Element not found");
    }
     }