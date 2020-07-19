for (var i = 1; i <= 9; i++) {
    var row = document.createElement("div");
    row.setAttribute("class", "row");

    for (var j = 1; j<=9; j++) {
        var cell = document.createElement("div");
        var $class = "";
        $class = (i === j)? "cell cell-main": "cell";
        $class = (i < j)? "cell cell-umain": $class;
        $class = (i > j)? "cell cell-omain": $class;
        cell.setAttribute("class", $class);

        cell.textContent = i * j;
        row.appendChild(cell);
    }
    document.getElementById("container").appendChild(row);
}