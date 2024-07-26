const contentImg=document.querySelector(".content-Img-2");

const contentImgH3=document.querySelector(".content-Img-2 h3");

const contentImg_Btn=document.querySelector(".content-Img-2 button");
let flag =1

contentImg_Btn.addEventListener("click", function(){
    if (flag===1) {
        contentImgH3.innerHTML="Your have Subscribe sucessfully";
        contentImg_Btn.innerHTML="Unsubscribe";
        flag=0;
    } else {
        contentImgH3.innerHTML="Subscribe our <br> newsletter";
        contentImg_Btn.innerHTML="Subscribe";
        flag=1
    }
})