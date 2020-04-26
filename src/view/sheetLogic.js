
sheetProj.view.sheetLogic = {
  setupUserInterface: function () {
    snippetFuncs.createTrailer();

    }
};

let snippetFuncs={
  createFAQ:()=>{
    let faqHTML;
    let faqs='';
    faqSnippets.forEach((snip)=>{
      faqs+=`
      <h3 style="font-weight: bold; font-size:1.3em">${snip.question}</h3>
      <p style="padding-left:3em;">${snip.answer}</p>
      <hr>`

    });

    faqHTML=
      `<div class="activeDisplay" style=" padding-left:3em; padding-top:2em; text-align: center;">
            ${faqs}
          </div>`;
    $("#displaySection").html(faqHTML);
    ci.jumpTo("tabRow");
  },
  createGallery:()=>{
    let galleryHTML;
    let indicators="";
    let items="";
    let factList="";
    gallerySnippets.forEach((snip, index)=>{
      indicators+=`<li data-target="#carouselExampleIndicators" data-slide-to="${index}" class="${index==0? "active":""}"></li>`;
      items+=`
      <div class="carousel-item ${index==0? "active":""}">
        <img class="d-block w-100 carouselImg" src="${snip.image}"  alt="${snip.title}">
        <div class="carousel-caption d-none d-md-block">
          <h5>${snip.title}</h5>
          <p>${snip.blurb}</p>
        </div>
      </div>`;
    });

    quickFacts.forEach((fact)=>{
      factList+=`<li>${fact}</li>`;
    });


    galleryHTML=`
    <div style="display:flex; width:80%; margin-left:10%; margin-right:10%; padding-top:3em;">
      <div style="width:70%;">
        <div style="width:100%;">
          <h3>'Member? The Alamo</h3>
          <p>${gameDescription}</p>
        </div>
        <div style="width:100%;">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            ${indicators}
          </ol>
          <div class="carousel-inner" >
            ${items}
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

        </div>
      </div>


    </div>
    <div style="width:30%; padding-left:2em;">
      <h3>Quick Facts</h3>
      <ul>
      ${factList}
      </ul>
    </div>
    `;


      $("#displaySection").html(galleryHTML);
      ci.jumpTo("tabRow");
  },
  createContacts:()=>{
    let contactHTML;

    let indirectLinks='';
    let directLinks="";

    contactSnippets.forEach((snip, index)=>{
      indirectLinks+=`<p onclick="ci.copyToClipboard(contact${index}, '${snip.name} copied to clipboard!')"><b>${snip.name}</b>: <span class="linkText" id="contact${index}">${snip.info}</span></p>`;
    });


    linkSnippets.forEach((snip)=>{
      directLinks+=`<div class="contactRow"><img class="linkImg" onclick="ci.newWindow('${snip.link}')" src="${snip.image}"><h3 class="linkText" onclick="ci.newWindow('${snip.link}')">${snip.text}</h3></div>`;
    });





    contactHTML=`
    <div id="contactDisplay">

      <h2 style="text-align:center; color:white; text-decoration:underline; padding-top:2em;">Contact Links & Socials:</h2>
      <div id="contactSection" >
        <div class="contactSliceR">
          ${indirectLinks}
        </div>
          <div class="contactSliceL" style="">
            ${directLinks}
          </div>

      </div>
  </div>`;
  $("#displaySection").html(contactHTML);
  ci.jumpTo("tabRow");
},
  createTrailer:()=>{

    let trailerHTML;
    trailerHTML=`
    <div style="display:flex; width:100%;padding-top:3em; justify-content:center;">
      <div class="videoWrapper">
        <iframe width="420" height="315"
          src="${trailerURL}">
        </iframe>
      </div>
    </div>`;
  $("#displaySection").html(trailerHTML);
  ci.jumpTo("tabRow");
  }
}
