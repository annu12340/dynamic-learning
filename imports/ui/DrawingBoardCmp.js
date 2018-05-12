import React from 'react'
import './DrawingBoard/drawingboard.js'
import './DrawingBoard/drawingboard.scss'

export default class DrawingBoardCmp extends React.Component {

    componentDidMount() {

        this.b = new DrawingBoard.Board('container', {
            background: "#000000",
            color: "#ffffff",
            size: 5,
            controls: ['Color',
              { DrawingMode: { filler: false } },
              { Size: { type: 'dropdown' } },
              'Navigation',
            ],
            webStorage: false
          });;
    }

    render() {

        const boardStyle = {
            width: '400px',
            height: '400px',
        }

        return(<div style = {boardStyle} id="container"></div>)
    }
}