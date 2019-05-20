let Cell = function (x,y) {
    this.x =x;
    this.y =y;
    this.getHTML =function () {
        let left = this.x*40;
        let top =this.y*40;
       let cellhtml= "<div  style='width: 40px;height: 40px ; position: absolute;top: "+ top+"px"+";left: "+left+"px"+";border:solid 1px blue '></div>";
        return cellhtml;
    }
};

let Banco = function (numberrows,numbercols,elementId) {
    this.rows =numberrows;
    this.cols =numbercols;
    this.cells =[];
    this.elementId = elementId;

     this.draw =function () {
         let gameBoardDiv = document.getElementById(this.elementId);
         gameBoardDiv.innerHTML = "";
         for (let i=0;i<this.rows;i++){
             let row =[];
             this.cells.push(row);
             for (let j=0;j<this.cols;j++){
                 let cell = new Cell(i,j);
                 row.push(cell);
                 gameBoardDiv.innerHTML += cell.getHTML();
             }
         }
return gameBoardDiv.innerHTML
     }
};
let banco = new Banco(20,20,"game-board");
banco.draw();



