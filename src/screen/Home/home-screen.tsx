import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";


import { Perfil } from "../../../components/PerfilComponents/perfilComponent";
import LinksComponents from "../../../components/LinkComponent/linksComponents";
import styles from "./homeStyles";



export default function HomeScreen({ navigation }: any) {
  
  function navToSkills() {
    navigation.navigate('skills')
  }

  return (
    <View style={{ alignItems:'center' }}>
      <View style={styles.containerPerfil}>
        <Perfil />
        <Text style={styles.descPerfil}>Douglas Henrique</Text>
      </View>
      <View style={styles.containerLinks}>
        <Text style={styles.buttonToSkill} onPress={navToSkills} >SKILLS
        </Text>
        <LinksComponents />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
