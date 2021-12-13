// template_3vk4kt4
// service_217o5x6
// USID : user_wQN1dbkTBXYTdAa9tLeUv

//----------------------------------------------------
// SEND CONTACT FORM
//----------------------------------------------------
function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList.add("modal__overlay--visible");
    emailjs
        .sendForm(
            'service_217o5x6',
            'template_3vk4kt4',
            event.target,
            'user_wQN1dbkTBXYTdAa9tLeUv'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible")
            success.classList.add("modal__overlay--visible");
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert("email service temporarily unavailable");
        });
}
//----------------------------------------------------
// OPEN / CLOSE MODAL
//----------------------------------------------------
let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open"); 
    }
    isModalOpen = true;
    document.body.classList.add("modal--open");
}
//----------------------------------------------------
// CONTRAST THEME
//----------------------------------------------------
let contrastToggle = true;
function toggleContrast() {
    if (contrastToggle) {
        contrastToggle = false;
        return (document.body.classList.add("contrast-theme"),
                document.getElementsByClassName("lines")[0].classList.add("light--off"));
    }
    contrastToggle = true;
    document.body.classList.remove("contrast-theme");
    document.getElementsByClassName("lines")[0].classList.remove("light--off");
}
//----------------------------------------------------
// SHAPES MOVING
//----------------------------------------------------
const scaleFactor = 1 / 20;
function moveShapes(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const bollInt = isOdd ? 1 : -1;
        shapes[i].style.transform = `translate(${x * bollInt}px, ${y * bollInt}px) rotate(${y * x / 4}deg)`;
    }
}