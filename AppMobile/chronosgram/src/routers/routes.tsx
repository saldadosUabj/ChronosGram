import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./stack/stackRoutes";


export default function Routes(){
    return(
        <NavigationContainer>
            <StackRoutes/>
        </NavigationContainer>
    )
}