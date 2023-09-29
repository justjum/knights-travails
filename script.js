
class board {
    constructor() {
        this.nodesList = buildBoard(8,8);
    }

    setNodes() {
        console.log(this.nodesList);
        for (let x=0; x<this.nodesList.length; x++) {
            //console.log(`setting node ${x}`)
            new node(this.nodesList[x], this.nodesList);
            
        }
    }

    moveKnight(startPosition, endPosition, moves=[]) {
        const root = buildTree(startPosition);
    }
}

class node {
    constructor(position, nodesList) {
        this.position = position[0];
        this.adjList = buildAdjList(position, nodesList);
    }

}

function buildBoard(top, side, array = []) {
    for (let x = 0; x < top; x++) {
        for (let y = 0; y<side; y++) {
            array.push([x, y])
        }
    }
    
    //console.log(array);
    return array;
}

function buildAdjList(position, nodesList, adjList=[]) {
    let x = position[0]
    let y = position[1]
    let moves = []
    moves.push([position[0]+2, position[1]+1],[position[0]+1, position[1]+2],[position[0]+2, position[1]-1], [position[0]+1, position[1]-2], [position[0]-2, position[1]-1],[position[0]-1, position[1]-2], [position[0]+1, position[1]-2],[position[0]+2, position[1]-1])
    for (i in moves) {
        //console.log(moves[i]);
        //console.log(nodesList);
        if (0 < moves[i][0] && moves[i][0]<=7 && 0 < moves[i][1] && moves[i][1]<=7 ) {
            adjList.push(moves[i]);
        }
    }
    //console.log(moves);
    return adjList;
}

const gameBoard = new board();

console.log(gameBoard.nodesList)



gameBoard.setNodes();

