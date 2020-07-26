import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


// TO RUN ONE OF 4 examples, comment other three examples to not override them one by one
// ##1 React.createElement
const myHeader = React.createElement(
  'h1',
  { className: 'header_title'},
  'Some title generated using createElement'
)

const rootElement = document.getElementById('root')

ReactDOM.render(myHeader, rootElement)


// ##2 React.Component
class SecondExample extends React.Component {
  render() {
    return <h1>Second title generated using ReactComponent</h1>;
  }
}

ReactDOM.render(<SecondExample/>, document.getElementById('root'))


// ##3 React.PureComponent
class ThirdExample extends React.PureComponent {
  render() {
    return <h1>Third title generated using ReactPureComponent</h1>;
  }
}

ReactDOM.render(<ThirdExample/>, document.getElementById('root'))


// ##4 Functional Component
function GenerateFourthTitle()
{
  return <h1>Fourth title generated using functional component</h1>;
}

ReactDOM.render(
  <GenerateFourthTitle/>,
  document.getElementById('root')
)
// export default GenerateFourthTitle;


// the end

serviceWorker.unregister();
