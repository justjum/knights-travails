class gameBoard {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(v) {
        this.adjacencyList.set(v,[]);
    }

    addEdges(v,w) {
        this.adjacencyList.get(v.toString()).push(w.toString());
        this.adjacencyList.get(w.toString()).push(v.toString());
    }

    depthSearch(startPosition, endPosition, queue = [startPosition.toString()], moves = [], visited = [], moveCounter=0, path='') {
        
        while (queue.length>0) {
            console.log('in')
            moveCounter++;
            if (startPosition.toString() === endPosition.toString()) {
                moves.push(moveCounter)
                console.log(path);
                console.log(visited);
                console.log(queue);
                return console.log (`Found it via ${moves} moves`);
            }
            else {
                let moveAdj = this.adjacencyList.get(startPosition.toString());
                visited.push(startPosition.toString());
                queue.shift(1);
                
                for (let m = 0; m<moveAdj.length; m++) {
                    (visited.includes(moveAdj[m]) || queue.includes(moveAdj[m])) ? '' : queue.push(moveAdj[m]);
                    
                }      
            }
            startPosition = queue[0];
        }

    }
}

function buildBoard(top, side, array = []) {
    for (let x = 0; x < top; x++) {
        for (let y = 0; y<side; y++) {
            array.push([x, y])
        }
    }

    return array;
}


function buildAdjArray(board, adjArray=[]) {
    for (i in board) {
        adjArray.push(buildAdjList(board[i]));
    }
    return adjArray;
    
}

function buildAdjList(position, adjList=[]) {
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






let game = new gameBoard();
const board = buildBoard(8,8);


for (i in board) {
    game.addVertex(board[i].toString());
}

console.log(board);

/* for (i in board) {
    
    let adj = buildAdjList(board[i]);
    //console.log(adj);
    return adj;
    //
       
} */

const adj = buildAdjArray(board);

for (a in board) {   
    //console.log(board[a], adj[a]);
        for (b in adj[a]) {
            game.addEdges(board[a], adj[a][b]);
        }
        
    
}

game.depthSearch([0,1],[2,5])

//console.log(game.adjacencyList);

/* let test = new gameBoard;
test.addVertex(2);
test.addVertex(3);
test.addVertex(1);
test.addEdges(2,2);
test.addEdges(2,1);
test.addEdges(2,3);

console.log(test.adjacencyList); */