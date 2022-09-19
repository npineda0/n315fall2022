//this is my model and it handles on the service calls
var homeContent = `<div class="home">
<div class="hero"></div>

<div class="flowerRow">
    <p class="flowerTxt">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti explicabo doloribus,
        nulla tempore doloremque ut debitis aperiam eum odio corporis quaerat molestiae,
        voluptatem facilis laboriosam. Ipsum asperiores saepe recusandae velit!
    </p>
    <div class="flowerImg"></div>
</div>

<div class="flowerRow">
    <div class="flowerImgTwo"></div>
    <p class="flowerTxt">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti explicabo doloribus,
        nulla tempore doloremque ut debitis aperiam eum odio corporis quaerat molestiae,
        voluptatem facilis laboriosam. Ipsum asperiores saepe recusandae velit!
    </p>
</div>
</div>`;
var aboutContent = `<div class="about">
<div class="aboutIntro">
     <p class="aboutIntroTxt">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tenetur
         iure facere magni nulla alias, hic quod placeat excepturi a fuga
         voluptate earum doloribus maiores! Iusto, quidem. Cupiditate, earum in.
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tenetur
         possimus dolores vero impedit magni, itaque eaque et commodi. Recusandae
         culpa delectus eligendi officiis laborum quam labore hic molestias dolor.
     </p>
     <hr>
</div>

<p class="aboutHeader">Lorem Ipsum</p>

<div class="aboutInfo">
    <div class="aboutImg"></div>
    <div class="aboutInfoTxt">
        <p class="aboutName">Lorem Ipsum</p>

        <p class="aboutDescrip">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            beatae quibusdam corporis harum magnam nemo ad, neque culpa,
            tenetur assumenda laudantium dicta. Minus porro modi alias, omnis
            blanditiis reprehenderit quos.</p>
    </div>
</div>

<div class="aboutInfo">
 <div class="aboutImg2"></div>
 <div class="aboutInfoTxt">
     <p class="aboutName">Lorem Ipsum</p>

     <p class="aboutDescrip">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
         beatae quibusdam corporis harum magnam nemo ad, neque culpa,
         tenetur assumenda laudantium dicta. Minus porro modi alias, omnis
         blanditiis reprehenderit quos.</p>
 </div>
</div>

</div>`;
var productsContent = `<div class="products">
<div class="productsHero"></div>

<p class="productsHeader">Lorem ipsum dolor sit</p>

<div class="productsRow">
    <div class="productItem">
        <div class="itemImg"></div>
        <div class="itemTxt">
            <p class="itemName">Lorem Ipsum</p>
            <p class="itemPrice">$$</p>
            <button class="itemBtn">lorem</button>
        </div>
    </div>

    <div class="productItem">
        <div class="itemImg2"></div>
        <div class="itemTxt">
            <p class="itemName">Lorem Ipsum</p>
            <p class="itemPrice">$$</p>
            <button class="itemBtn">lorem</button>
        </div>
    </div>

    <div class="productItem">
        <div class="itemImg3"></div>
        <div class="itemTxt">
            <p class="itemName">Lorem Ipsum</p>
            <p class="itemPrice">$$</p>
            <button class="itemBtn">lorem</button>
        </div>
    </div>
</div>

<div class="productsRow">
    <div class="productItem">
        <div class="itemImg"></div>
        <div class="itemTxt">
            <p class="itemName">Lorem Ipsum</p>
            <p class="itemPrice">$$</p>
            <button class="itemBtn">lorem</button>
        </div>
    </div>

    <div class="productItem">
        <div class="itemImg2"></div>
        <div class="itemTxt">
            <p class="itemName">Lorem Ipsum</p>
            <p class="itemPrice">$$</p>
            <button class="itemBtn">lorem</button>
        </div>
    </div>

    <div class="productItem">
        <div class="itemImg3"></div>
        <div class="itemTxt">
            <p class="itemName">Lorem Ipsum</p>
            <p class="itemPrice">$$</p>
            <button class="itemBtn">lorem</button>
        </div>
    </div>
</div>
</div>`;
var contactContent = `<div class="contact">
<div class="contactMapForm">
    <div class="mapImg"></div>

    <div class="contactForm">
        <input type="text" class="longBox" id="name" placeholder="lorem...">

        <input type="text" class="longBox" id="email" placeholder="loremimpsum...">

        <input type="text" class="bigBox" id="message" placeholder="ipsum...">

        <br/>
        <button>lorem ipsum</button>
    </div>
</div>
</div>`


export function setCurrentPageContent(pageID) {
    //pass through ID and put into app div
    let contentName = pageID + "Content";
    //eval turns string to variable name
    $("#app").html(eval(contentName));
}

//export {};