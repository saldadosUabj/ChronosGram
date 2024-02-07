import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./tabRoutes";
import StackRoutes from "./StackRoutes";


export default function Routes(){
    return(
        <NavigationContainer>
            <StackRoutes/>
        </NavigationContainer>
    )
}