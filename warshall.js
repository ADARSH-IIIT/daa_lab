let graph = [
    [0, 5, Infinity, 10],
    [Infinity, 0, 3, Infinity],
    [Infinity, Infinity, 0, 1],
    [Infinity, Infinity, Infinity, 0]
  ];



  function floydWarshall(graph) {
    let dist = [];
    for (let i = 0; i < graph.length; i++) {
      dist[i] = [];
      for (let j = 0; j < graph.length; j++) {
        if (i === j) {
          dist[i][j] = 0;
        } else if (!isFinite(graph[i][j])) {
          dist[i][j] = Infinity;
        } else {
          dist[i][j] = graph[i][j];
        }
      }
    }
    
    for (let k = 0; k < graph.length; k++) {
      for (let i = 0; i < graph.length; i++) {
        for (let j = 0; j < graph.length; j++) {
          if (dist[i][j] > dist[i][k] + dist[k][j]) {
            dist[i][j] = dist[i][k] + dist[k][j];
          }
        }
      }
    }
    
    return dist;
  }


 console.log(floydWarshall(graph)); 