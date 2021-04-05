(function () {
    "use strict";
    if (window.location.href.includes("safeshare.tv")) {
        redirectSS();
    } else if (window.location.href.includes("video.link")) {
        redirectVL();
    }

    function redirectSS() {
        let id;
        try {
            id = document
                .getElementById("iframe-embed")
                .attributes[2].nodeValue.split("/")[4]
                .split("?")[0];
            window.location.replace("https://vimeo.com/" + id);
        } catch (err) {
            id = document
                .getElementById("iframe-embed")
                .src.split("videoID=")[1]
                .split("&")[0];
            window.location.replace("https://youtube.com/watch?v=" + id);
        }
    }

    function redirectVL() {
        let id = document.getElementsByTagName("script");
        for (let i in id) {
            if (String(id[i].innerHTML).includes("var safeYTVideoID =")) {
                let videoCode = id[i].innerHTML.split('videoId = \'')[1].split('\',')[0];
                window.location.replace("https://youtube.com/watch?v=" + videoCode);
            }
        }
    }
})();
