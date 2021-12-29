import * as React from "react";
import Store from "./redux/store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/Home/HomeScreen";
import LoginScreen from "./screens/Auth/LoginScreen";
import RegisterScreen from "./screens/Auth/RegisterScreen";
import SearchScreen from "./screens/SearchScreen";
import ReelsScreen from "./screens/ReelsScreen";
import BuyScreen from "./screens/BuyScreen";
import ProfileScreen from "./screens/ProfileScreen";

import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
  Feather,
  Entypo,
  Fontisto,
} from "@expo/vector-icons";
import { Image } from "react-native";
import NewPostScreen from "./screens/Home/NewPostScreen";

// initialize stacks
const HomeStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();
const ReelsStack = createNativeStackNavigator();
const BuyStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeIndex" component={HomeScreen} />
      <HomeStack.Screen name="NewPostIndex" component={NewPostScreen} />
    </HomeStack.Navigator>
  );
}

function SearchStackScreen() {
  return (
    <SearchStack.Navigator screenOptions={{ headerShown: false }}>
      <SearchStack.Screen name="SearchIndex" component={SearchScreen} />
    </SearchStack.Navigator>
  );
}

function ReelsStackScreen() {
  return (
    <ReelsStack.Navigator screenOptions={{ headerShown: false }}>
      <ReelsStack.Screen name="ReelsIndex" component={ReelsScreen} />
    </ReelsStack.Navigator>
  );
}

function BuyStackScreen() {
  return (
    <BuyStack.Navigator screenOptions={{ headerShown: false }}>
      <BuyStack.Screen name="BuyIndex" component={BuyScreen} />
    </BuyStack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        screenOptions={{ headerShown: false }}
        name="ProfileIndex"
        component={ProfileScreen}
      />
    </ProfileStack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          size = 24;
          color = "black";
          if (route.name === "SearchStackTab") {
            return focused ? (
              <Feather name="search" size={size} color={color} />
            ) : (
              <Ionicons name="search-outline" size={size} color={color} />
            );
          } else if (route.name === "ReelsStackTab") {
            return focused ? (
              <MaterialCommunityIcons
                name="video-plus"
                size={27}
                color={color}
              />
            ) : (
              <MaterialCommunityIcons
                name="video-plus-outline"
                size={27}
                color={color}
              />
            );
          } else if (route.name === "BuyStackTab") {
            return focused ? (
              <Fontisto name="shopping-bag" size={size} color={color} />
            ) : (
              <Feather name="shopping-bag" size={size} color={color} />
            );
          } else if (route.name === "ProfileStackTab") {
            return (
              <Image
                source={{
                  uri: "https://randomuser.me/api/portraits/women/10.jpg",
                }}
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 40,
                  resizeMode: "contain",
                  borderWidth: focused ? 3 : 0,
                  borderColor: "#ff8501",
                }}
              />
            );
          } else {
            return focused ? (
              <MaterialIcons name="home" size={27} color={color} />
            ) : (
              <MaterialCommunityIcons
                name="home-outline"
                size={27}
                color={color}
              />
            );
          }
        },
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "black",
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="HomeStackTab"
        component={HomeStackScreen}
        options={{ tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="SearchStackTab"
        component={SearchStackScreen}
        options={{ tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="ReelsStackTab"
        component={ReelsStackScreen}
        options={{ tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="BuyStackTab"
        component={BuyStackScreen}
        options={{ tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="ProfileStackTab"
        component={ProfileStackScreen}
        options={{ tabBarShowLabel: false }}
      />
    </Tab.Navigator>
  );
}

function AuthStackScreen() {
  return (
    <AuthStack.Navigator initialRouteName="LoginIndex" screenOptions={{ headerShown: false }}>
      <AuthStack.Screen
        screenOptions={{ headerShown: false }}
        name="LoginIndex"
        component={LoginScreen}
      />
      <AuthStack.Screen
        screenOptions={{ headerShown: false }}
        name="RegisterIndex"
        component={RegisterScreen}
      />
      <AuthStack.Screen
        screenOptions={{ headerShown: false }}
        name="TabIndex"
        component={TabNavigator}
      />
    </AuthStack.Navigator>
  );
}

export default function RootNavigator() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <AuthStackScreen />
      </NavigationContainer>
    </Provider>
  );
}
