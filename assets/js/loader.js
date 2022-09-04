var __pdata;
var __GET = {};

if (document.location.toString().indexOf('?') !== -1) {
    let query = document.location
                    .toString()
                    .replace(/^.*?\?/, '')
                    .replace(/#.*$/, '')
                    .split('&');

    for (let i = 0, l = query.length; i < l; i++) {
        let aux = decodeURIComponent(query[i]).split('=');
        __GET[aux[0]] = aux[1];
    }
}

$(document).ready(function() {

    let lang = (__GET['lang'] == null ? 'en' : __GET['lang']); //Defaut: English
    let loadingBar = new ldBar('.loader-bar', {
            'data-type':'stroke',
            'data-fill-dir':'ltr'
        });
    let loadMainPage = function() {
        return axios.request({
            url: 'main.html',
            method: 'get',
            timeout: 60000,
            onDownloadProgress: function(e) {
                if (e.lengthComputable) {
                    loadingBar.set((e.loaded/e.total) * 100, false);
                }
            }
        });
    };

    let loadPersonalData = function(language) {
        return axios.get(`assets/file/cv_${language}.min.json`, {responseType: 'json'});
        // return axios.get(`assets/file/cv_${language}.json`, {responseType: 'json'});
    };

    Promise.all([loadPersonalData(lang),loadMainPage()]).then(function (responses) {
        
        loadingBar.set(100,true);
        __pdata = responses[0].data;
        $('.main-container').html(responses[1].data);

        let anim = {
            'animation-duration' : '0.6s',
            'animation-delay' : '1.75s'
        };

        setTimeout(() => {
            $('.loader-container').hide();    
        }, 2500);

        $('.loader-container').addClass('ld ld-fade-out').css(anim);
    })
    .catch((error) => { console.log(error) });

    moment.locale(lang);
});