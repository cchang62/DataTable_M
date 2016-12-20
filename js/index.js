
var selectorObj = document.getElementById("mytabbody");
var tempArrTable = datatab.list;
var timeTicker = {};
var booTTTriggerd = false;

function buildTable(selector, arrData) {
    var temp = "";
    var tempTrNode = {};
    var tdNode = {};

    //var tempTableNodeArr =
    arrData.map(function(eachObj){
        tempTrNode = document.createElement("TR");
        for (tempItem in eachObj){
            tdNode = document.createElement("TD");
            tdNode.appendChild(document.createTextNode(eachObj[tempItem]));
            tempTrNode.appendChild(tdNode);
        }
        //return tempTrNode;
        selector.appendChild(tempTrNode);
    });
    /*
    var tempTableNode = {};
    for(tempTableNode in tempTableNodeArr){
        selector.appendChild(tempTableNodeArr[tempTableNode]);
    }
    */
}

function chkObjExist(selector) {
    //return typeof selector != "undefined";
    return selector != null;
}

function sortTable() {
    tempArrTable = tempArrTable.sort(function(a, b){
        return parseInt(b.id)-parseInt(a.id)
    });
    repaintTable();
}

function repaintTable(){
    cleanTable();
    genTable();
}

function genTable() {
    var selector = document.getElementById("mytabbody")
    if (!chkObjExist(selector)){
        var new_tbody = document.createElement('TBODY');
        new_tbody.setAttribute("id", "mytabbody");
        document.getElementsByTagName('table')[0].appendChild(new_tbody);
        buildTable(document.getElementById("mytabbody"), tempArrTable);
    }
}

function cleanTable() {
    var selector = document.getElementById('mytabbody');
    var tbodyParent = "";
    var new_tbody = "";
    if (chkObjExist(selector)){
        tbodyParent = selector.parentNode;
        tbodyParent.removeChild(selector);
        //new_tbody = document.createElement('TBODY');
        //new_tbody.setAttribute("id", "mytabbody");
        //tbodyParent.appendChild(new_tbody);
    }
    else{
        //new_tbody = document.createElement('TBODY');
        //new_tbody.setAttribute("id", "mytabbody");
        //document.getElementsByTagName('table')[0].appendChild(new_tbody);
    }
}

function shuffle() {
    for (let i = tempArrTable.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [tempArrTable[i - 1], tempArrTable[j]] = [tempArrTable[j], tempArrTable[i - 1]];
    }
    repaintTable();
    /**
     * http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
     * Shuffles array in place.
     * @param {Array} a items The array containing the items.

     function shuffle(a) {
        var j, x, i;
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    }
     */
}

function randTableStart() {
    if (!booTTTriggerd){
        timeTicker = setInterval(shuffle, 1000);
        booTTTriggerd = true;
    }
}

function randTableStop() {
    clearInterval(timeTicker);
    booTTTriggerd = false;
}

buildTable(document.getElementById("mytabbody"), datatab.list)