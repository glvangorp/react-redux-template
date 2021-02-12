import { connect } from "react-redux";

import logo from "./logo.svg";

import * as sampleActions from "./actions/sample-actions";

import "./App.css";

const mapStateToProps = state => {
  return {
    toggled: state.sample.toggled,
    comic: state.sample.comic
  };
};

const App = ({ toggled, comic, dispatch }) => {
  const toggleState = e => {
    dispatch(sampleActions.toggle());
  };

  const getComic = () => {
    dispatch(sampleActions.getComic());
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>state.toggled: {toggled ? "TRUE" : "FALSE"}</p>
        <button onClick={e => toggleState(e)}>Toggle State</button>

        <div className="flex">
          <img src={comic && comic.img} />
          <button onClick={getComic}>Get Comic</button>
        </div>
      </header>
    </div>
  );
};

export default connect(mapStateToProps)(App);
