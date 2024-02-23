import bfs from "./bfs.js";
import Graph from "./create_graph.js";

import dfs from "./dfs.js";
import self_made_graph from "./self_made_graph.js";





let  g1 = new Graph()


g1.addVertex('A')
g1.addVertex('B')
g1.addVertex('C')

g1.addEdge('A' , 'B')




// console.log(bfs(g1 , 'A'));
console.log(dfs( self_made_graph , 'A'));




// console.log(g1);