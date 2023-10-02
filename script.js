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

    depthSearch(startPosition, endPosition, queue = [startPosition.toString()], visited = []) {
        const pathMap = new Map();
        appendPath(pathMap, startPosition.toString(), startPosition.toString());
        let thisPath;
        let lastPosition;
        let originalPosition = startPosition;
        //console.log(pathMap);
        while (queue.length>0) {
            if (startPosition.toString() === endPosition.toString()) {
                thisPath = pathMap.get(startPosition.toString());
                return console.log (`Shortest route from ${originalPosition} to ${endPosition} is via ${thisPath}`);
            }
            else {
                let moveAdj = this.adjacencyList.get(startPosition.toString());
                visited.push(startPosition.toString());
                queue.shift(1);
                
                for (let m = 0; m<moveAdj.length; m++) {
                    thisPath = pathMap.get(startPosition.toString());
                    thisPath = `${thisPath} -> ${moveAdj[m]}`;
                    (visited.includes(moveAdj[m]) || queue.includes(moveAdj[m])) ? '' : addPathway(queue, moveAdj[m], pathMap, thisPath);
                    
                }      
            }
            lastPosition = startPosition;
            //console.log(lastPosition.toString());
            startPosition = queue[0];
            //console.log(pathMap.get(lastPosition));

            
            
            //console.log(pathMap)
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

function appendPath(pathMap, vortex, thisPath) {
    pathMap.set(vortex, thisPath);
}

function addPathway(queue, moveAdj, pathMap, thisPath) {
    queue.push(moveAdj);
    appendPath(pathMap, moveAdj, thisPath);
}




let game = new gameBoard();
const board = buildBoard(8,8);


for (i in board) {
    game.addVertex(board[i].toString());
}

//console.log(board);

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

game.depthSearch([0,1],[7,7])

//console.log(game.adjacencyList);

/* let test = new gameBoard;
test.addVertex(2);
test.addVertex(3);
test.addVertex(1);
test.addEdges(2,2);
test.addEdges(2,1);
test.addEdges(2,3);

console.log(test.adjacencyList); */