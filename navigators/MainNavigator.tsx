import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Pagina1Screen from '../screens/Pagina1Screen';
import Pagina2Screen from '../screens/Pagina2Screen';
import WelcomeScreen from '../screens/WelcomeScreen';
import Pagina3Screen from '../screens/Pagina3Screen';

const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Pagina1" component={Pagina1Screen}/>
            <Tab.Screen name="Pagina2" component={Pagina2Screen}/>
            <Tab.Screen name="Pagina3" component={Pagina3Screen}/>
        </Tab.Navigator>
    );
}

///////////////////////////////////////////
const stack = createStackNavigator();
function MyStack(){
    return(
        <stack.Navigator screenOptions={()=> ({headerShown:false})}>
            <stack.Screen name="Welcome" component={WelcomeScreen}/>
            <stack.Screen name="Bottom" component={MyTabs}/>
        </stack.Navigator>
    )
}
//////////////////////////////////////////////

export default function MainNavigator(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>

    );
}