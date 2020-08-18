// Graph using adjacency matrix
function Vertex(val) {
  this.value = val;
  this.visited = false;
}

function Graph(N) {
  this.vertices = [];

  this.edges = [];
  for (let i = 0; i < N + 1; i++) {
    this.edges.push(new Array(N + 1).fill(0));
  }
}

Graph.prototype.addVertex = function (val) {
  this.vertices.push(new Vertex(val));
};

Graph.prototype.joinVertices = function (a, b) {
  if (!this.vertices.includes(a) || !this.vertices.includes(b))
    throw new Error("vertex not found");

  this.edges[a][b] = 1;
  this.edges[b][a] = 1;
};

var graph = new Graph(4);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.joinVertices(1, 2);
graph.joinVertices(4, 3);
graph.joinVertices(2, 4);
console.log(graph);
