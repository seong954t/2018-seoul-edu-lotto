function drawCircle(num_list) {
    let container = document.getElementsByClassName("picked-lotto-list")[0];
    let row = document.createElement("div");
    row.className = "ball-row";
    for (i in num_list) {
        let num = num_list[i]
        let span = document.createElement("span");
        span.textContent = num_list[i]
        if(num > 0 && num < 11) {
            span.className = "num-circle num-1-10"
        }
        else if(num > 10 && num < 21) {
            span.className = "num-circle num-11-20"
        }
        else if(num > 20 && num < 31) {
            span.className = "num-circle num-21-30"
        }
        else if(num > 30 && num < 41) {
            span.className = "num-circle num-31-40"
        }
        else {
            span.className = "num-circle num-41-45"
        }
        row.appendChild(span)
    }
    container.appendChild(row)
}