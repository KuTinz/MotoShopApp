import React from 'react'
import { StyleSheet, Text, View, Image, Button, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { icons } from './src/constants';
// import Screens
import {HomeScreen, CategoriesScreen, ShoppingCart, 
  SearchScreen, ProfileScreen, LoginScreen, RegisterScreen, NotificationScreen} from './src/screens'

const navOptionHandler = () => ({
  headerShown: false
})

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} options={navOptionHandler}/>
      <ProfileStack.Screen name="Login" component={LoginScreen} options={navOptionHandler}/>
      <ProfileStack.Screen name="Register" component={RegisterScreen} options={navOptionHandler}/>
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? require('./src/assets/icons/home_black.png')
              : require('./src/assets/icons/home.png')
          } else if (route.name === 'Categories') {
            iconName = focused 
              ? require('./src/assets/icons/category_black.png')
              : require('./src/assets/icons/category.png')
          } else if (route.name === 'Search') {
            iconName = focused 
              ? require('./src/assets/icons/search_black.png')
              : require('./src/assets/icons/search.png')
          } else if (route.name === 'Cart') {
            iconName = focused 
              ? require('./src/assets/icons/shopping_cart_black.png')
              : require('./src/assets/icons/shopping_cart.png')
          } else if (route.name === 'Profile') {
            iconName = focused 
              ? require('./src/assets/icons/user_black.png')
              : require('./src/assets/icons/user.png')
          } 

          // You can return any component that you like here!
          return <Image source={iconName} style={{height:20, width:20}}
            resizeMode='contain'
          />;
        },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
      >
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Categories" component={CategoriesScreen}/>
        <Tab.Screen name="Search" component={SearchScreen}/>
        <Tab.Screen name="Cart" component={ShoppingCart}/>
        <Tab.Screen name="Profile" component={ProfileStackScreen}/>
      </Tab.Navigator>
  )
}


// test component 
// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

function CustomDrawerContent(props){
  return(
    <SafeAreaView style={{flex: 1, backgroundColor:'red'}}>
      <View style={{height:150, alignItems:'center', justifyContent:'center', backgroundColor:'blue' }}>
        <Image source={require('./src/assets/icons/user_icon.png')}
        style={{height: 120, width: 120, borderRadius: 60 }}        
        />
      </View>
      <ScrollView style={{marginLeft: 10}}>
        <TouchableOpacity 
        style={{ maginTop: 20 }} 
        onPress={() => props.navigation.navigate('MenuTab')}>
            <Text>MenuTab</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={{ maginTop: 20 }} 
        onPress={() => props.navigation.navigate('Notifications')}>
            <Text>Notifications</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

const Drawer = createDrawerNavigator();



const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="MenuTab" 
        drawerContent={props => CustomDrawerContent(props)} 
        >
        <Drawer.Screen name="MenuTab" component={TabNavigator} />
        <Drawer.Screen name="Notifications" component={NotificationScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return <App />;
};

const styles = StyleSheet.create({})
