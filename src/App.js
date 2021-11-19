// import ChartSection from './components/ChartSection';
import Greeting from './components/Greeting';
import './App.css';
import RepeatMessage from './components/RepeatMessage';
import ButtonSection from './components/ButtonSection';
import CheckBoxSection from './components/CheckBoxSection';
import ButtonStyle from './components/ButtonStyle';
import StateVsRef from './components/StateVsRef';
import PersistentForm from './components/PersistentForm';
import RegisterYourCatForm from './components/form/RegisterYourCatForm';
import MyControlledInput from './components/form/MyControlledInput';
import ProfileImage from './components/ProfileImage';

function App() {
  return (
    <div className="App">
      {/* <ChartSection /> */}
      {/* <Greeting  name ="satyam "/>
      <RepeatMessage message="mozilla"/>
      <ButtonSection />
      <CheckBoxSection />
      <ButtonStyle />
      <StateVsRef />
      <PersistentForm /> */}
      <RegisterYourCatForm />
      <MyControlledInput />
      <ProfileImage />
    </div>
  );
}

export default App;
