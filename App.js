import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import { lightBg, spacing } from "./theme";
import generatePassword from "./lib/generatePassword";
import Slider from "@react-native-community/slider";
import Checkbox from "expo-checkbox";
import * as Clipboard from 'expo-clipboard';

export default function App() {
  const [text, updateText] = useState("");
  const [length, updateLength] = useState(10);
  const [isUpperCase, updateUpperCase] = useState(true);
  const [isSymbols, updateSymbols] = useState(false);
  const [isNumbers, updateNumbers] = useState(true);

  const generate = () => {
    const options = {
      length: length,
      isNumbers: isNumbers,
      isUpperCase: isUpperCase,
      isSymbols: isSymbols,
    };

    var pw = generatePassword(options);
    updateText(pw);
  };

  const onPressTextInput = () => {
    if(!text) {
      alert('Press generate to make a password!');
    }
    else{
      Clipboard.setString(text);
      alert("Copied to clipboard!");
    }
  }

  return (
    <SafeAreaView style={{flex: 1,}}>
      <View style={styles.container}>
        {/* <Text>{title}</Text> */}
        <StatusBar style="auto" />
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
          <Checkbox
            value={isUpperCase}
            onValueChange={updateUpperCase}
            style={styles.checkbox}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Numbers?</Text>
          <Checkbox
            value={isNumbers}
            onValueChange={updateNumbers}
            style={styles.checkbox}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Symbols?</Text>
          <Checkbox
            value={isSymbols}
            onValueChange={updateSymbols}
            style={styles.checkbox}
          />
        </View>

        <View style={styles.separator} />
        <TextInput
          value={text}
          onChangeText={updateText}
          style={styles.textInput}
          editable={false}
          onPressIn={onPressTextInput}
        />
        <Button title="Generate!" onPress={generate} style={styles.button} />
        <Text style={styles.fixedFooter}>github.com/dhisonp</Text>
        <Text style={styles.fixedHeader}>Simple Password Generator</Text>
      </View>
    </SafeAreaView>
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
    borderRadius: 4,
    borderColor: "black",
    backgroundColor: lightBg,
    width: "80%",
    minHeight: 40,
    margin: spacing,
    marginVertical: 16,
    padding: 4,
    fontSize: 16,
    textAlign: 'center'
  },
  slider: {
    width: 240,
    height: 40,
  },
  separator: {
    marginVertical: 24,
  },
  label: {
    fontWeight: "bold",
    // fontSize: 16,
    // margin: smallSpacing,
  },
  button: {
  },
  row: {
    flexDirection: "row",
    marginVertical: spacing,
    justifyContent: "space-between",
    width: "75%",
  },
  checkbox: {
    // marginLeft: 24,
  },
  fixedFooter: {
    color: "gray",
    position: "absolute",
    bottom: 0,
  },
  fixedHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    top: 24,
    position: 'absolute'
  }
});
