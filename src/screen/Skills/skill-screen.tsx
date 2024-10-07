import { View, Text, ScrollView } from "react-native";
import { styles } from "./skillStyles";
import { StatusBar } from "expo-status-bar";

import { Perfil } from "../../../components/PerfilComponents/perfilComponent";
import { Habs } from "../../../components/HabsComponent/habsComponent";

export default function SkillScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Perfil />
        <Text style={styles.descSkills}>Minhas Habiliadades:</Text>
        <Habs />

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}
