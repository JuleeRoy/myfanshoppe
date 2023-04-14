var owl = $('.owl1');
owl.owlCarousel({
    loop:true,
    nav:false,
    margin:10,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        300:{
            items:1
        },
        
        400:{
            items:1.3
        },  
        500:{

            items:1.8
        } ,
        600:{

            items:2.8
        } , 
             
        800:{
            items:4.2
        },
        1200:{
            items:5.3
        },
        1500:{
         items:6
        } 
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});


var Deals = $('.deals');
Deals.owlCarousel({
    loop:true,
    nav:false,
    margin:10,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        300:{
            items:1.5
        },
        600:{
            items:2
        },            
        900:{
            items:2.5
        },
        1200:{
            items:3.2

        },
        1500:{
            items:3.5
        },
        1800:{
             items:4.5
        },
        2000:{
            items:5
       },
     
 
    }
});
Deals.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY > 0) {
        Deals.trigger('next.owl');
    } else {
        Deals.trigger('prev.owl');
    }
    e.preventDefault();
});
var Arrival = $('.arrival');
Arrival.owlCarousel({
    loop:true,
    nav:false,
    margin:10,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        300:{
            items:1.5
        },
        600:{
            items:2
        },            
        900:{
            items:2.5
        },
        1200:{
            items:3.2

        },
        1500:{
            items:3.5
        },
        1800:{
             items:4.5
        },
        2000:{
            items:5
       },
     
 
    }
});
Arrival.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY > 0) {
        Arrival.trigger('next.owl');
    } else {
        Arrival.trigger('prev.owl');
    }
    e.preventDefault();
});


var category = $('.category');
category.owlCarousel({
    loop:true,
    nav:false,
    margin:10,
    dots:false,
    responsive:{
        0:{
            items:1.5
        },
        300:{
            items:1.5
        },
        400:{
            items:1.8
        },
        500:{
            items:2.2
        },
        600:{
            items:2.5
        },            
        900:{
            items:3.5
        },
        1200:{
            items:5
        },
        1600:{
            items:6
        },
        1900:{
            items:6
        }
    }
});

category.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY > 0) {
        category.trigger('next.owl');
    } 
    else {
        category.trigger('prev.owl');
    }
    e.preventDefault();
});


// product page crousel

var product_review=$('.product_review').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
// product_review.on('mousewheel', '.owl-stage', function (e) {
//     if (e.deltaY > 0) {
//         product_review.trigger('next.owl');
//     } 
//     else {
//         product_review.trigger('prev.owl');
//     }
//     e.preventDefault();
// });


// more you like crousel
$('.More_item').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        800:{
            items:2
        },
        
        1000:{
            items:2.3
        },
        1200:{
            items:3
        }
    }
})



// quantity box code

// const input=document.getElementById("input");
// const up=document.getElementById("up");
// const down=document.getElementById("down");
// console.log(input.value);
// // input.value=0;
// up.addEventListener("click",()=>{
//     input.value++;
// })
// down.addEventListener("click",()=>{
//     if(input.value>0)
//     {
//         input.value--;
//     }
// })


// filling the heart-icon by clciking on it

// const hrt1=document.querySelector("#hrt1");
// const hrt2=document.querySelector("#hrt2");
// hrt1.addEventListener("click",()=>{
//       hrt1.style.display="none"
//       hrt2.style.display="block"
// })
// hrt2.addEventListener("click",()=>{
//     hrt2.style.display="none"
//     hrt1.style.display="block"
// })

const overview=document.getElementById("overview");
console.log(overview);
const overviewPart=document.getElementById("description");
console.log(overviewPart);
overview.addEventListener("click",()=>{
    console.log("hello")
    
      if(overviewPart.style.display=="block")
      {
        overviewPart.style.display="none";
      }
      else
      {
        overviewPart.style.display="block";
        specificationPart.style.display="none";
      }
    
});
const specification=document.getElementById("specification");
console.log(specification);
const specificationPart=document.getElementById("specificationPart");
console.log(specificationPart);
specification.addEventListener("click",()=>{
    console.log("hello")
    
      if(specificationPart.style.display=="none")
      {
        overviewPart.style.display="none";
        specificationPart.style.display="block";
      }
      else
      {
        specificationPart.style.display="none";
        overviewPart.style.display="block";
      }
    
});
