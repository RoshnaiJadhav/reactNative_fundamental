import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,ScrollView  } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Flexbox from "./src/Screens/Flexbox";
import ButtonS from "./src/Screens/Button_S";
import List from "./src/Screens/List";
import Scroll_View from "./src/Screens/Scroll_View";
import Images from "./src/Screens/Images";
import Animations from "./src/Screens/Animations";
import Profile from "./src/Components/Profile";
import Button from "./src/Components/Button";
import Counter from "./src/Components/Counter";
import React, { useState } from "react";
import FunctionalComponent from "./src/Screens/FunctionalComponent";
import ClassComponent from "./src/Screens/ClassComponent";


function HomeScreen({ navigation }) {
  const [count, setCount] = useState(0);
  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Count :{count}</Text>
        <Button
          title="Increment"
          style={[styles.button, styles.buttonText]}
          onPress={Increment}
        />
        <Button
          title="Decrement"
          style={[styles.button, styles.buttonText]}
          onPress={Decrement}
        />

        <Button
          style={[styles.button, styles.buttonText]}
          title="Flexbox"
          onPress={() => navigation.navigate("Flexbox")}
        />
        <Button
          style={[styles.button, styles.buttonText]}
          title="Button_S"
          onPress={() => navigation.navigate("Button_S")}
        />
        <Button
          style={[styles.button, styles.buttonText]}
          title="List"
          onPress={() => navigation.navigate("List")}
        />
        <Button
          style={[styles.button, styles.buttonText]}
          title="Scroll_View"
          onPress={() => navigation.navigate("Scroll_View")}
        />
        <Button
          style={[styles.button, styles.buttonText]}
          title="Images"
          onPress={() => navigation.navigate("Images")}
        />
        <Button
          style={[styles.button, styles.buttonText]}
          title="Animations"
          onPress={() => navigation.navigate("Animations")}
        />
        <Button
          style={[styles.button, styles.buttonText]}
          title="Profile"
          onPress={() => navigation.navigate("Profile")}
        />
        <Button
          style={[styles.button, styles.buttonText]}
          title="Counter"
          onPress={() => navigation.navigate("Counter")}
        />
        <Button
          style={[styles.button, styles.buttonText]}
          title="Counter"
          onPress={() => navigation.navigate("Counter")}
        />
        <FunctionalComponent />
        <ClassComponent/>
      </ScrollView>
    </View>
  );
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Flexbox" component={Flexbox} />

        <Stack.Screen name="ButtonS" component={ButtonS} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Scroll_View" component={Scroll_View} />
        <Stack.Screen name="Images" component={Images} />
        <Stack.Screen name="Animations" component={Animations} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BDAFDE",
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
    borderWidth: 5,
    borderColor: "white",
    borderRadius: 30,
  },
  homesrc: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#6629CB",
    padding: 10,
    borderRadius: 5,
    margin: 10,
    minWidth: 150,
  },
  buttonText: {
    color: "black",
  },
});
export default App;
