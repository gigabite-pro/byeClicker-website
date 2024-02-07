const HOST = 'https://bye-clicker-api.vercel.app';
const FRONTEND_HOST = 'https://byeclicker.com';

window.onload = () => {
    function getJwtFromUrl() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        if (urlParams.size === 0) {
            return null;
        }
        return urlParams.get('token');
    }

    const token = getJwtFromUrl();
    if (token === null) {
        verify();
    } else {
        localStorage.setItem('byeClicker_jwt', token);
    }

    function verify() {
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
}

function verifyBeforePayment() {
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
                return true;
            } else {
                localStorage.removeItem('byeClicker_jwt');
                window.location.href = `${HOST}/auth/login`;
            }
        }).catch((error) => { console.error('Error:', error); });
    }
}