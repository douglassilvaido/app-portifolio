import React from "react";
import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import { styles } from "./linksComponentsStyles";
import * as Clipboard from "expo-clipboard";

export default function LinksComponents() {
  function handleButtonCopyLinkedin() {
    Clipboard.setStringAsync("https://www.linkedin.com/in/douglas-henrique-2b2113228/");
  }
  function handleButtonCopyGithub() {
    Clipboard.setStringAsync("https://github.com/douglassilvaido");
  }
  function handleButtonCopyEmail() {
    Clipboard.setStringAsync("douglasinsin@gmail.com");
  }
  return (
    <View>
      <View style={styles.containerLinks}>
        <Pressable onPress={handleButtonCopyLinkedin}>
          <Text style={styles.links}>LINKEDIN</Text>
        </Pressable>
        <Pressable
        onPress={handleButtonCopyGithub}>
          <Text style={styles.links}>GITHUB</Text>
        </Pressable>
        <Pressable
        onPress={handleButtonCopyEmail}>
          <Text style={styles.links}>E-MAIL</Text>
        </Pressable>
      </View>
    </View>
  );
}
