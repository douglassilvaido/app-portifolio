import React from "react";
import { View, Image } from "react-native";
import {styles} from "./perfilComponentStyle";

const imagePerfil  = require('../../assets/imgs/imagePerfil.jpg')


export function Perfil() {
  return (
    <View >
      <Image
        source={imagePerfil}
        style={styles.image}
      ></Image>
    </View>
  );
}

