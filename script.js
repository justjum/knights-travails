
class board {
    constructor() {
        this.nodesList = buildBoard(8,8);
        this.adjacencyList = new Map();
    }

    setNodes() {
        //console.log(this.nodesList);
        for (let x=0; x<this.nodesList.length; x++) {
            //console.log(`setting node ${x}`)
            this.nodesList[x] = new node(this.nodesList[x], this.nodesList);
            
        }
    }

    addVertex(nodesList) {
       // for (i in nodesList) {
            this.adjacencyList.set(nodesList, []);
            
        //}
        
    }

    addEdges(v, w) {
        this.adjacencyList(v).push(w);
        this.adjacencyList(w).push(v);
        console.log(this.adjacencyList);
    }

    moveKnight(adjList = this.nodesList, startPosition, endPosition, moveCounter=0, moves=[]) {
        if (startPosition[0] === endPosition[0] && startPosition[1] === endPosition[1]) {
            return console.log('Same position, no moves');
        }
        else {
            let adjacent = this.getAdjacent(adjList, startPosition);
            return knightMoves(adjacent, startPosition, endPosition, moveCounter, moves)
            
        }
        
    }

    getAdjacent(nodesList, position) {
        for (i in nodesList) {
            if ((nodesList[i].position[0] === position[0] && nodesList[i].position[1] === position[1] )) {
                //console.log(nodesList[i].adjList)
                return nodesList[i].adjList
            }
            else {
            
            }

        }

        
    }
}

class node {
    constructor(position, nodesList) {
        this.position = position;
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
    moves.push([position[0]+2, position[1]+1],[position[0]+1, position[1]+2],[position[0]-1, position[1]+2], [position[0]-2, position[1]+1], [position[0]-2, position[1]-1],[position[0]-1, position[1]-2], [position[0]+1, position[1]-2],[position[0]+2, position[1]-1])
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

function knightMoves(adjacent, prevPosition, endPosition, moveCounter, moves, ) {
    
    for (i in adjacent) {
        currentPosition = adjacent[i];
        console.log(currentPosition); 
        console.log(prevPosition);  
        console.log(adjacent);
        if ((adjacent[i][0] === endPosition[0] && adjacent[i][1] === endPosition[1] )) {
            moveCounter++;
            console.log(`Found it in ${moveCounter} moves`)
            return moves.push(moveCounter);
        }
        else {
            let adjList = gameBoard.getAdjacent(gameBoard.nodesList, adjacent[i])
            for (i in adjList) {
                if (adjList[i][0] === prevPosition[0] && adjList[i][1] === prevPosition[1]){
                    adjList.splice(i, 1);
                }
            }
            prevPosition = currentPosition;
            moveCounter++;
            return knightMoves(adjList, prevPosition, endPosition, moveCounter, moves)
        }
        
    }
}

const gameBoard = new board();

gameBoard.setNodes();

gameBoard.addVertex(gameBoard.nodesList);

gameBoard.addEdges();


//console.log(gameBoard.nodesList);

//console.log(gameBoard.nodesList[27])

//gameBoard.moveKnight([2,3],[3,2])

//gameBoard.moveKnight(gameBoard.nodesList, [3,3], [6,6])