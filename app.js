// const HOST = 'http://localhost:3000';
// const FRONTEND_HOST = 'http://127.0.0.1:5500';
const HOST = 'https://bye-clicker-api.vercel.app';
const FRONTEND_HOST = 'https://byeclicker.com';

function changeToSubscribe() {
    const token = localStorage.getItem('byeClicker_jwt');
    if (token === null) {
        window.location.href = `${HOST}/auth/login`;
    } else {
        fetch(`${HOST}/auth/verify`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token: token})
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = `${FRONTEND_HOST}/subscribe?token=${data.token}`;
            } else {
                localStorage.removeItem('byeClicker_jwt');
                window.location.href = `${HOST}/auth/login`;
            }
        }).catch((error) => { console.error('Error:', error); });
    }
}

function showExtension() {
    window.location.href = 'https://chromewebstore.google.com/detail/byeclicker/kmnlnlkcacgjkngggifcnalkldgpflic';
}