let allImages = Array.from(document.querySelectorAll('.slider-container img'));
// console.log(allImages);
let counterOfImages = allImages.length;
let currentImageIndex = 1;
let slideImageNumber:any = document.getElementById('slide-number');
let prevBtn:any = document.getElementById('prev');
let nextBtn:any = document.getElementById('next');
let myPaginations:any = document.getElementById('paginations');

prevBtn.onclick = prevSlide;
nextBtn.onclick = nextSlide;


let paginations = document.createElement('ul');
paginations.setAttribute('id','paginations-ul');

for(let i = 1; i <= counterOfImages; i++){
    let li = document.createElement('li');
    li.setAttribute('data-index',i.toString());
    li.appendChild(document.createTextNode(i.toString()));
    paginations.appendChild(li);
}

myPaginations.appendChild(paginations);
let paginationsNewUL:any = document.getElementById('paginations-ul');
let paginationsBullets:any = Array.from(document.querySelectorAll('#paginations-ul li'));
for(let i = 0; i < paginationsBullets.length; i++){
    paginationsBullets[i].onclick = function (){
        currentImageIndex = parseInt(this.getAttribute('data-index'));
        theChecker();
    }
}

theChecker();

function prevSlide(){
    if(prevBtn.classList.contains('disabled')){
        return false;
    } else {
        currentImageIndex--;
        theChecker();
        return true;
    }
}
function nextSlide(){
    if(nextBtn.classList.contains('disabled')){
        return false;
    } else {
        currentImageIndex++;
        theChecker();
        return true;
    }
}

function theChecker(){
    slideImageNumber.textContent = 'Slide #' +  (currentImageIndex) + ' Of ' + (counterOfImages);
    removeAllActive();
    allImages[currentImageIndex -1].classList.add('active');
    paginationsNewUL.children[currentImageIndex -1].classList.add('active');
    if(currentImageIndex == 1){
        prevBtn.classList.add('disabled');
    }
    else {
        prevBtn.classList.remove('disabled');
    }
    if(currentImageIndex == counterOfImages){
        nextBtn.classList.add('disabled');
    } else {
        nextBtn.classList.remove('disabled');
    }
}
function removeAllActive(){
    allImages.forEach(
        (img:any) => {
            img.classList.remove('active');
        });
    paginationsBullets.forEach(
        (bullets:any) => {
            bullets.classList.remove('active');
        });
}