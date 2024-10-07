import { createStackNavigator } from "@react-navigation/stack";
const { Screen, Navigator } = createStackNavigator();

import HomeScreen from "../screen/Home/home-screen";
import SkillScreen from "../screen/Skills/skill-screen";



export function StackRoutes() {
  return (
    <Navigator>
      <Screen name="home" component={HomeScreen}
        options={{
          title: "Portifólio",
        }}
      
      />
      <Screen name="skills" component={SkillScreen} />
    </Navigator>
  );
}
