import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import { ListScreen } from "./src/screens/ListScreen";
import ImageScreeen from "./src/screens/ImageScreeen";
import { CounterScreen } from "./src/screens/CounterScreen";
import { ColorScreen } from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import { CounterWithReducer } from "./src/screens/CounterWithReducer";
import { TextScreen } from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
    Images: ImageScreeen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    ReducerHkCounter: CounterWithReducer,
    TextS: TextScreen,
    Box: BoxScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
