// const HOST = 'http://localhost:3000';
// const FRONTEND_HOST = 'http://127.0.0.1:5500';
const HOST = 'https://bye-clicker-api.vercel.app';
const FRONTEND_HOST = 'https://byeclicker.com';

// function changeToSubscribe() {
//     const token = localStorage.getItem('byeClicker_jwt');
//     if (token === null) {
//         window.location.href = `${HOST}/auth/login`;
//     } else {
//         fetch(`${HOST}/auth/verify`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ token: token})
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.success) {
//                 window.location.href = `${FRONTEND_HOST}/subscribe?token=${data.token}`;
//             } else {
//                 localStorage.removeItem('byeClicker_jwt');
//                 window.location.href = `${HOST}/auth/login`;
//             }
//         }).catch((error) => { console.error('Error:', error); });
//     }
// }

function showExtension() {
    window.location.href = 'https://chromewebstore.google.com/detail/byeclicker/kmnlnlkcacgjkngggifcnalkldgpflic';
}

document.getElementById('phone-nav-btn').addEventListener('click', ()=>{
    var timeline3 = gsap.timeline()
    document.getElementById('phone-nav').style.display = 'flex';
    timeline3.to('#phone-nav', {left: '0%', duration: 0.2})
    .from('.animp1', {opacity: 0, y: '-50', stagger: .1, duration: 0.2})
})

document.getElementById('cross').addEventListener('click', ()=>{
    var timeline3 = gsap.timeline()
    timeline3.to('.animp1', {opacity: 0, y: '-50', stagger: .1, duration: 0.2})
    .to('#phone-nav', {left: '100%', duration: 0.2})
    timeline3.set('.animp1', {opacity: 1, y: '0'})
    setTimeout(()=>{
        document.getElementById('phone-nav').style.display = 'none';
    }, 500);
})

document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', ()=>{
        var timeline3 = gsap.timeline()
        timeline3.to('.animp1', {opacity: 0, y: '-50', stagger: .1, duration: 0.2})
        .to('#phone-nav', {left: '100%', duration: 0.2})
        timeline3.set('.animp1', {opacity: 1, y: '0'})
    })
});