import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import AddTodo from '../container/AddTodo';
import ResultList from './ResultList';
// import People from './People';
import PeopleList from '../container/PeopleList';

class App extends Component {

  render() {
    return (
        <div>
          <AddTodo />
          <ResultList />
          {/*<People />*/}
          <PeopleList/>
        </div>
    );
  }
}

export default App;
