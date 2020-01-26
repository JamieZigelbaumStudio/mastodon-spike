export class Cookie {
    createCookie = (key, value) => {
        document.cookie = `${escape(key)  }=${  escape(value)  };`;
    };

    readCookie = (name) => {
        const key = `${name  }=`;
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1, cookie.length);
            }
            if (cookie.indexOf(key) === 0) {
                return cookie.substring(key.length, cookie.length);
            }
        }
        return null;
    };

    deleteCookie = (name) => {
        this.createCookie(name, "", -1);
    }
}