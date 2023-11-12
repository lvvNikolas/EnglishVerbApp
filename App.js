import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import VerbTrainerScreen from './Components/VerbTrainerScreen';

const AppNavigator = createStackNavigator(
  {
    Home: VerbTrainerScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);