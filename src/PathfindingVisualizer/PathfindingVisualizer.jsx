import React, { Component } from 'react';
import Node from "./Node/Node";

import './PathfindingVisualizer.css';

const START_NODE_ROW = 10;
const START_NODE_COL == 15;
const FINISH_NODE_ROW == 10;
const FINISH_NODE_COL == 10;

export default class PathfindingVisualizer extends Component {
	constructor() {
		super();
		this.state = {
			grid: [],
			mouseIsPressed: false
		};

		componentDidMount() {
			const grid = getInitialGrid();
			this.setState({grid});
		}

		handleMouseDown(x, y) {
			
		}
	}

	render() {
		return <Node />;
	}
}

const getNewGridWithWallToggled = (grid, x, y)  => {
	const newGrid = grid.slice();
	const node = newGrid[x][y];
	const newNode = {
		// abc = {a: "this", b: "that"}  // ...abc === a={abc.a}, b = {abc.b}
		...node,
		isWall: !node.isWall
	}
	newGrid[x][y] = newNode;

	return newGrid;
}
