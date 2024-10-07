import React from "react";
import { ScrollView, View, Text } from "react-native";
import { styles } from "./habsComponentsStyle";

export function Habs() {
  return (
    <View style={styles.habs}>
      <View>
        <Text style={styles.nameHabs}>HTML: </Text>
        <Text style={styles.nameHabs}>Git: </Text>
        <Text style={styles.nameHabs}>Excel: </Text>
        <Text style={styles.nameHabs}>CSS3: </Text>
        <Text style={styles.nameHabs}>JavaScript: </Text>
        <Text style={styles.nameHabs}>GitHub: </Text>
        <Text style={styles.nameHabs}>Bootstrap: </Text>
        <Text style={styles.nameHabs}>React: </Text>
        <Text style={styles.nameHabs}>SQL: </Text>
        <Text style={styles.nameHabs}>Jason: </Text>
        <Text style={styles.nameHabs}>TypeScript: </Text>
        <Text style={styles.nameHabs}>.NET: </Text>
        <Text style={styles.nameHabs}>Node.js: </Text>
        <Text style={styles.nameHabs}>C# </Text>
      </View>

      <View>
        <Text style={styles.nivelHabs}> ⭐⭐⭐⭐⭐ </Text>
        <Text style={styles.nivelHabs}> ⭐⭐⭐⭐ </Text>
        <Text style={styles.nivelHabs}> ⭐⭐⭐⭐ </Text>
        <Text style={styles.nivelHabs}> ⭐⭐⭐⭐ </Text>
        <Text style={styles.nivelHabs}> ⭐⭐⭐ </Text>
        <Text style={styles.nivelHabs}> ⭐⭐⭐ </Text>
        <Text style={styles.nivelHabs}> ⭐⭐⭐ </Text>
        <Text style={styles.nivelHabs}> ⭐⭐⭐ </Text>
        <Text style={styles.nivelHabs}> ⭐⭐⭐ </Text>
        <Text style={styles.nivelHabs}> ⭐⭐⭐ </Text>
        <Text style={styles.nivelHabs}> ⭐⭐ </Text>
        <Text style={styles.nivelHabs}> ⭐⭐ </Text>
        <Text style={styles.nivelHabs}> ⭐⭐ </Text>
        <Text style={styles.nivelHabs}> ⭐⭐ </Text>
      </View>
    </View>
  );
}
