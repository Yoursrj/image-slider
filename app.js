/* image =(0,1,2,3) lenth =4 */

let flag = 0;

function controller(x) {
     flag = flag + x; //2+1=3(image) ....2+(-1)=1(image) let flag=2(image number)
     slideshow(flag);
}


slideshow(flag);
//num or fLAG same ahi bas function mein alag  naam likhte hai isilie
function slideshow(num) { 
     let slides = document.getElementsByClassName('carousel-slide');

     //slides.length = no, of images 
     //image number last pe aajaye to wapas 1 pe nhejme ke liye
     if (num == slides.length) { 
          flag = 0; 
          num = 0;
     }
     //image ka number 0 se kam ho tab length ke barabar kar do jo 4 hai par no 4..then //do slides.length-1 which is 4-1 =3 
     if (num < 0) {
          flag = slides.length - 1; 
           
          num = slides.length - 1;
     }
     for (let y of slides) {
          y.style.display = "none";
     }

     slides[num].style.display = "block";

}
