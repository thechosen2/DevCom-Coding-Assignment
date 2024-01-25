function updateAge(){
    const currentDate = new Date();
    const birthDate = new Date(2005, 0, 11);

    const age = (currentDate - birthDate) / (365.25 * 24 * 60 * 60 * 1000);
    document.getElementById("age").innerText = age.toFixed(9);
}
updateAge();
// function nameRot(x){
//     if(x.innerText=="Pranav Malpani"||x.innerText=="PranavMalpani")typeWriter("thechosen1", x)
//     else if(x.innerText=="thechosen1")typeWriter("thechosen2", x);
//     else if(x.innerText=="thechosen2")typeWriter("thechosen3", x);
//     else if(x.innerText=="thechosen3")typeWriter("anavpr.ay", x);
//     else if(x.innerText=="anavpr.ay")typeWriter("Pranav Malpani", x);
// }

function typeWriter(txt, x) {
        x.innerText = "";
        i=0;
        while(i < txt.length) {
        x.innerText += txt.charAt(i);
        i++;
    }
}
setInterval(updateAge, 5);