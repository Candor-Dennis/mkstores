function hideMe() {
    let hideItem = document.getElementById("checkout");
    window.onload(hideItem.style.display = 'none');
}

function showItem() {

    let item = document.getElementById("checkout");
    let action =  item.style.display = 'block';
    if (action = true) {
        document.getElementById("banner").style.display = 'none'
    } else {
        console.log("i cannot hide")
    }
}