setTimeout(() => {
    document.getElementById("post2").style.display = "block";
    setTimeout(() => {
        document.getElementById("post3").style.display = "block";
    }, 2500);
}, 5000);

setTimeout(() => {
    document.body.style.backgroundImage = "url('../../../Windows98Scaled/hacker.gif')";
    document.body.style.backgroundSize = "cover";
    document.getElementById("post3").style.display = "none";
    document.getElementById("post2").style.display = "none";
    document.getElementById("post").style.display = "none";
    document.getElementById("News-ad").style.display = "none";  
}, 20000);