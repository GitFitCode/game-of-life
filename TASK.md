# GitFitCode Coding Challenge

## Conway's Game of Life

A cellular automaton is a system of cells that exists in a grid in one or many dimensions. Conway's Game of Life is a cellular automaton in two dimensions. The idea is that you have a collection of cells (or squares on a grid) that change by some computation for each generation. 

The computation is really just the rules that you can find with the link below. These rules will decide the each cell's state, in our case, 0 or 1 (Alive or dead). Please use the link below to learn the rules. The goal is to create a JavaScript app that uses console.log() to output the cells.

[Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

### For the first version of the project you should implement a solution with the following: ###

* Has a grid size of at least 25 by 25

* Alive cells should be populated randomly

* The game should be outputted to the user for at least 20 seconds (i.e. make turns automatically)

---

While the above bullet points are the end points for the first, JavaScript-only version, it will probably be helpful to implement simpler solutions first. The following steps are just a suggestion; you can complete the Game of Life Project in a completely different order too.

### Possible incremental steps or solutions: ###

1.  * create a smaller grid (5x5 for example) to check that your implementation is correct
    * manually make marks on the grid and/or manually advance the state of the board (make turn)

2.  * increase the size of the grid
    * populate the grid with random marks

3.  * add the timer functionality 

