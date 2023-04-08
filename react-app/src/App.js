import './App.css';

import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulComponent';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunction from './components/ConditionalRenderingFunction';
import NestingComponents from './components/NestingComponents';
import MethodAsPropsParent from './components/MethodAsPropsParent';
import RenderingList from './components/RenderingList';
import LifeCyclesCDM from './components/LifeCyclesCDM';
import LifeCyclesCDU from './components/LifeCyclesCDU';
import LifeCyclesCWU from './components/LifeCyclesCWU';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';


function App() {
  return (
    <div className="App">
       <UncontrolledForm />
    </div>
  );
}

export default App;
