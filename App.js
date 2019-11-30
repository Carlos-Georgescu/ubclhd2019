import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
//no need to put path extenction, no js
import ComponentsScreen from './src/screens/ComponentsScreen';
import SelectScreen from './src/screens/SelectScreen'
import TextScreen from './src/screens/TextScreen';

//stackNavigator is used to show what we are going to display at any given time
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: SelectScreen,
    Text: TextScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Ubique'
    }
  }
);

export default createAppContainer(navigator);