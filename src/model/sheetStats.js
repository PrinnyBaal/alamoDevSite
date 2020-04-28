

//FAQ SECTION
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
 ////~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//TRAILER SECTION
//Note that this url needs to be an EMBED url otherwise the video payer will refuse to connect.  You can right click a video and select 'get embed code' then get the url listed after 'src'
const trailerURL="https://www.youtube.com/embed/3RJ-3AAo4nM";
 ////~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//CONTACT SECTION
const mailchimpForm=`<link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}
	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
<form action="https://memberthealamo.us4.list-manage.com/subscribe/post?u=2f8ebaf5b1735df54cd0b0aab&amp;id=20a4ef27c9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_2f8ebaf5b1735df54cd0b0aab_20a4ef27c9" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>`;

//this const controls the lefthand side of the contact section.  Thngs like a physical address would fit naturally here for example
 const contactSnippets=[
   {name:"E-Mail",
    info:"BlueCollarGamesForever@GMail.com"
 }

 ];

//This controls the right-hand side of the contact section.  It ALSO controls the bar of clickable icons at the bottom of the side
 const linkSnippets=[
   {
     image:"./images/youtubeLogo.png",
     text:"Subscribe on Youtube",
     link:"https://www.youtube.com/channel/UCtTjX1tZ_pNsht_aZ0B2uAA/featured"
   },
   {
     image:"./images/discordIcon.png",
     text:"Join in on Discord",
     link:"https://discord.gg/2vcRjtd"
   },
   {
     image:"./images/steamLogo.png",
     text:"Wishlist the game on Steam",
     link:"https://store.steampowered.com/app/1290620/Member_the_Alamo/"
   },
   {
     image:"./images/oculusLogo.png",
     text:"Visit us on the Oculus Store [Coming Soon]",
     link:"https://store.steampowered.com/app/1290620/Member_the_Alamo/"
   },

 ];
 ////~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//PRESS KIT SECTION
 const gameDescription="Member the Alamo? is a VR shooter loosely based on the historic battle that birthed Texas. You will fight alongside larger than life heroes as you defend the Alamo from Santa Anna and his Mexican army that outnumber you 100 to 1.";
 const quickFacts=["<b>Projected Release Date:</b> Coming Soon <br><br>",
                  "<b>Developer:</b> Blue Collar Games <br><br>",
                  "<b>Platforms:</b> VR <br><br>",
                  "<b>Rating:</b> M (17+) <br><br>",
                  "<b>Trailer:</b> https://www.youtube.com/watch?v=3RJ-3AAo4nM <br><br>",
                  "<b>Press E-Mail:</b> BlueCollarGamesForever@GMail.com <br><br>"];


 const gallerySnippets=[

   {image:"./images/screenshotMech.png",
    title:"The opposing Forces",
    blurb:"Challenges you face may not exactly line up to what you remember in history class"},
    {image:"./images/titleHeader.png",
     title:"Game Logo",
     blurb:"The logo used in most of our publications"},
   {image:"./images/screenshotCast.png",
    title:"Larger Than Life",
    blurb:"Follow and guide the stories of a colorful cast of heroes"},

    {image:"./images/clientLogo.png",
    title:"Blue Collar Games' Logo",
    blurb:""},
    {image:"./images/screenshotBattle.png",
     title:"Varied In-Game Action",
     blurb:"Make the most of VR with fun gunslinging action"},


 ];


//This is simply a helper function tha tdeals with behidn the scenes javascript
 let ci={
   jumpTo:function(anchor){
     window.location.href = "#"+anchor;
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
