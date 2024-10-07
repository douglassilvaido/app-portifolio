import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./skill.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
