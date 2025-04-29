
/*----------menu-btn-script----------*/

let menuBtn=document.getElementById("menu-btn");
let menuList=document.getElementById("nav-list") ;
menuBtn.addEventListener("click",function showList(){
    menuList.style.display="flex";
}) ;
let closeBtn=document.getElementById("close-btn") ;
 closeBtn.addEventListener("click",function closeList(){
    menuList.style.display="none";
}) ;

/*-----feedback-form---script----*/
 let submitBtn=document.getElementById("feedback-btn") ;
 submitBtn.addEventListener("click",function showFeedback(){
    let feedbackArea=document.getElementById("feedback-area") ;
    if(feedbackArea.value !== ""){
    alert("Thank you for your feedback")
    }
 });