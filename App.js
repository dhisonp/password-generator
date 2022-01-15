import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState, useEffect } from "react";
import { smallSpacing, spacing } from "./theme";
import generatePassword from "./lib/generatePassword";
import Slider from "@react-native-community/slider";
import CheckBox from "@react-native-community/checkbox";

export default function App() {
  const title = "Welcome to the Simple Password Generator";
  const [text, updateText] = useState("");
  const [length, updateLength] = useState(10);
  const [isUpperCase, updateUpperCase] = useState(true);
  const [isSymbols, updateSymbols] = useState(false);

  const generate = () => {
    var pw = generatePassword(8);
    updateText(pw);
  };

  return (
    <View style={styles.container}>
      {/* <Text>{title}</Text> */}
      <StatusBar style="auto" />
      <View style={styles.seperator} />
      <View style={styles.row}>
        <Text style={styles.label}>Length: </Text>
        <Text>{length}</Text>
      </View>
      <Slider
        minimumValue={8}
        maximumValue={16}
        style={styles.slider}
        value={length}
        onValueChange={updateLength}
        step={1}
      />
      <View style={styles.row}>
        <Text style={styles.label}>Uppercase?</Text>
        <CheckBox value={isUpperCase} onValueChange={updateUpperCase} />
      </View>
      <Button title="Generate!" onPress={generate} style={styles.button} />
      <TextInput
        value={text}
        onChangeText={updateText}
        style={styles.textInput}
        editable={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "black",
    width: "80%",
    margin: spacing,
    marginVertical: 16,
    padding: 4,
  },
  slider: {
    width: 240,
    height: 20,
    marginVertical: spacing,
  },
  seperator: {
    marginVertical: 24,
  },
  label: {
    fontWeight: "bold",
    // fontSize: 16,
    // margin: smallSpacing,
  },
  button: {
    marginVertical: 14,
  },
  row: {
    flexDirection: "row",
  },
});
