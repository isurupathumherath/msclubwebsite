import React, { Component } from 'react';
import BoardData from './BoardsData.json';
import BoardCard from '../../component/BoardCard/BoardCard';
import './BoardsList.css';

export default class BoardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      year: 2021,
    };
  }

  incrementNumber = (number) => {
    const num = Number(number);
    return num + 1;
  };

  handleClick(id, year) {
    this.setState({ id: id - 1, year: Number(year) });
  }

  render() {
    const nextBoard = this.state;

    return (
      <div className="container">
        <div className="row">
          <span className="board-topic mt-2">
            Meet the Board{' '}
            <b className="board-topic-year">
              {nextBoard.year} - {this.incrementNumber(nextBoard.year)}
            </b>
          </span>
          <hr />
          <div className="col-md-2 pt-4">
            {BoardData.data.map((board) => (
              <div className="row" key={board.id}>
                <button
                  type="button"
                  className="btndiv year-btn col text-center"
                  onClick={() => this.handleClick(board.id, board.year)}
                >
                  {board.year} - {this.incrementNumber(board.year)}
                </button>
              </div>
            ))}
          </div>
          <div className="col-md-10">
            <div className="row">
              {BoardData.data[nextBoard.id].board.map((member) => (
                <div className="col-md-4 col-sm-6" key={member.id}>
                  <BoardCard
                    image={member.image}
                    name={member.name}
                    position={member.position}
                    socialmedia={member.socialmedia}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
