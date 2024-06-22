const myURL = new URL('https://example.org');//ye hamara url hai
myURL.pathname = '/a/b/c';//mein iss url mein ek path jo ki a/b/c hai usko add krna chata hu
myURL.search = '?d=e';//jiska get/search parameter d=e hai
myURL.hash = '#fgh';//finally mein use loi # dena chta hu

console.log(myURL);