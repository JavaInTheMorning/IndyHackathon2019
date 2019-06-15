import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './src/home/homeScreen';
import LoginScreen from './src/Login/loginScreen';
import SignUpScreen from './src/signUp/signUp';
import InitializeScreen from './src/initialize/initialize';

const MainNavigator = createStackNavigator(
  {
  Initialization: {screen: InitializeScreen},
  Login: {screen: LoginScreen},
  SignUp: {screen: SignUpScreen},
  Home: {screen: HomeScreen},
}
);

const App = createAppContainer(MainNavigator);

export default App;