for (var i = 1; i <= 8; i++) {
    var row = document.createElement("div");
    row.setAttribute("class", "row");

    for (var j = 1; j<=8; j++) {
        var cell = document.createElement("div");
        var $class = "";
        $class = ((j % 2 !== 0) && (i % 2 !==0))? "cell cell-white": "cell";
        $class = ((j % 2 == 0) && (i % 2 !==0))? "cell cell-black": $class;
        $class = ((j % 2 !== 0) && (i % 2 ==0))? "cell cell-black": $class;
        $class = ((j % 2 == 0) && (i % 2 ==0))? "cell cell-white": $class;
        cell.setAttribute("class", $class);
       
        row.appendChild(cell);
    }
    document.getElementById("container").appendChild(row);
}