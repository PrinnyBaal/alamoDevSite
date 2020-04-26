

// if (localStorage.getItem("savedChars") === null) {
//   localStorage.setItem('savedChars', JSON.stringify(savedChars));
// }
//
// if (localStorage.getItem("activeChar") === null) {
//   localStorage.setItem('activeChar', 0);
// }





 const faqSnippets=[
   {
     question:"What platforms will the game launch on?",
     answer:"Answer about above question"
   },
   {
     question:"Do I need a VR headset or can I play without one?",
     answer:"Answer about above question"
   },
   {
     question:"How often will the game be updated?",
     answer:"once more, an answer"
   },
   {
     question:"What kind of changes can we expect in each update?",
     answer:"once more, an answer"
   },




 ];

//Note that this url needs to be an EMBED url otherwise the video payer will refuse to connect.  You can right click a video and select 'get embed code' then get the url listed after 'src'
 const trailerURL="https://www.youtube.com/embed/3RJ-3AAo4nM";

 const contactSnippets=[
   {name:"E-Mail",
    info:"BlueCollarGamesForever@GMail.com"
 }

 ];

 const linkSnippets=[
   {
     image:"../images/clientLogo.png",
     text:"Subscribe on Youtube",
     link:"https://www.youtube.com/channel/UCtTjX1tZ_pNsht_aZ0B2uAA/featured"
   },
   {
     image:"../images/discordIcon.png",
     text:"Join in on Discord",
     link:"https://discord.gg/2vcRjtd"
   },
   {
     image:"../images/steamLogo.png",
     text:"Wishlist the game on Steam",
     link:"https://store.steampowered.com/app/1290620/Member_the_Alamo/"
   },

 ];

 const gameDescription="Member the Alamo? is a VR shooter loosely based on the historic battle that birthed Texas. You will fight alongside larger than life heroes as you defend the Alamo from Santa Anna and his Mexican army that outnumber you 100 to 1.";
 const quickFacts=["<b>Projected Release Date:</b> Coming Soon <br><br>",
                  "<b>Developer:</b> Blue Collar Games <br><br>",
                  "<b>Platforms:</b> VR <br><br>",
                  "<b>Rating:</b> M (17+) <br><br>",
                  "<b>Trailer:</b> https://www.youtube.com/watch?v=3RJ-3AAo4nM <br><br>",
                  "<b>Press E-Mail:</b> BlueCollarGamesForever@GMail.com <br><br>"];


 const gallerySnippets=[

   {image:"../images/screenshotMech.png",
    title:"The opposing Forces",
    blurb:"Challenges you face may not exactly line up to what you remember in history class"},
    {image:"../images/titleHeader.png",
     title:"Game Logo",
     blurb:"The logo used in most of our publications"},
   {image:"../images/screenshotCast.png",
    title:"Larger Than Life",
    blurb:"Follow and guide the stories of a colorful cast of heroes"},

    {image:"../images/clientLogo.png",
    title:"Blue Collar Games' Logo",
    blurb:""},
    {image:"../images/screenshotBattle.png",
     title:"Varied In-Game Action",
     blurb:"Make the most of VR with fun gunslinging action"},


 ];


 let ci={
   jumpTo:function(anchor){
     window.location.href = "#"+anchor;
   },
   dieRoll:function(dieSides){
     return Math.floor(Math.random()*dieSides)+1;
   },
   array_move:function(arr, old_index, new_index) {
     //https://stackoverflow.com/questions/5306680/move-an-array-element-from-one-array-position-to-another
     if (new_index >= arr.length) {
         var k = new_index - arr.length + 1;
         while (k--) {
             arr.push(undefined);
         }
     }
     arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
     return arr; // for testing
   },
   checkCommonGround:function(array1, array2){
     //tests if array1 and 2 have ANY elements in common
     let commonGround=false;
     if (array1.length<array2.length){
       for (let i=0, len=array1.length; i<len; i++){
         if (array2.includes(array1[i])){commonGround=true; break;}
       }
     }else{
       for (let i=0, len=array2.length; i<len; i++){
         if (array1.includes(array2[i])){commonGround=true; break;}
       }
     }

     return commonGround;
   },
   copyToClipboard:(copyText, completionText)=>{
     /* Get the text field */


    /* Select the text field */

    let range = document.createRange();
    let selection=window.getSelection();
    console.log(copyText);
    //copyText=document.getElementById(copyText);
    console.log(copyText);
    range.selectNode(copyText);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");



    /* Alert the copied text */
    ci.fyiUser(completionText);
  },
  fyiUser:(text)=>{
    $("#alertBanner").removeClass("activeAlert");
    $("#alertBanner").html(text);
    $("#alertBanner").addClass("activeAlert");
    setTimeout(removeBanner, 5000)

    function removeBanner(){
      $("#alertBanner").removeClass("activeAlert");
    }
  },
  newWindow:(url)=>{
    window.open(url);
  }

 }

function resetStorage(){
  if (window.confirm("Do you really want to delete all your saved info?")) {
  localStorage.clear();
  location.reload();
}
}