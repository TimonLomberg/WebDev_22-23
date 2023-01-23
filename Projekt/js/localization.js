
// We are using window to estimate language so we must wait for it to load
window.onload = () => {

    //Load locale
    initLocale();
    let locale = window.localStorage.getItem('locale');

    //Seach for all keys to replace
    let matches = document.body.innerHTML.match(/{{.+?}}/g);

    //Replace all keys in copy of body html
    let modHtml = document.body.innerHTML;
    for (const key of matches) {
        let cleanedKey = key.replace('{{','').replace('}}','');
        let text = getStringForKey(locale, cleanedKey);
        modHtml = modHtml.replace(key, text)
    }

    //Load modified copy of body html
    document.body.innerHTML = modHtml;
}

//Get the users language from local storage
//If not set we estimate language with navigator.languages
//If navigator.languages is not available fall back to navigator.language
function getOrInitLang() {
    let l = window.localStorage.getItem('lang');

    if(l != null) {
        return l;
    }

    let tmp = (navigator.languages && navigator.languages.length) ? navigator.languages[0] : navigator.language;
    window.localStorage.setItem('lang', tmp);
    return tmp;
}

//Fetch the locale file (according to our language in local storage) from the server and store contents in local storage
function initLocale() {
    //Load stored language
    let lang = getOrInitLang();
    
    //Make AJAX request to fetch locale file of language
    let result = '';
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", lang + '.lang', false);
    xmlhttp.send();
    if(xmlhttp.status==200) {
        result = xmlhttp.responseText;
    }

    if(result === '') {
        xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", 'en.lang', false);
        xmlhttp.send();
        if(xmlhttp.status==200) {
            result = xmlhttp.responseText;
        }
    }
    //Store locale file (so that we dont have to fetch it again each time we want to use it)
    window.localStorage.setItem('locale', result);
}

//Seaches the locale for the value of a given key
function getStringForKey(locale, key) {
    let s = locale.split('\r\n'); // <-- CHANGE THIS IN CASE OF MODIFYING THE LOCALE FILES OUTSIDE WINDOWS OS!!
    for (line of s) {
        if(line.substring(0, line.indexOf('=')) === key) {
            return line.substring(line.indexOf('=') + 1);
        }
    }
    return 'LOCALIZATION ERROR';
}
