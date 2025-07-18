document.getElementById("aBc456").addEventListener("click", function() {
    let el = document.getElementById("aBc456");
    let title = document.getElementById("xYz123");
    let phone = document.getElementById("dEf789");
    
    el.classList.add("hidden");
    setTimeout(function() {
        title.classList.add("visible");
        phone.classList.add("visible");
        document.getElementById("jKl345").play();
    }, 2000); // 0x7d0 in hex = 2000 ms
});

// Block right-click
document.oncontextmenu = function(e) {
    e.preventDefault();
    return false;
};

// Block certain key combinations (dev tools)
document.onkeydown = function(e) {
    if (event.keyCode == 123) return false; // F12
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false;
};
