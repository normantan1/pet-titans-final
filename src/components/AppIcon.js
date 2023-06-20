import React from "react";
import { View, Image } from "react-native";

const AppIcon = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={require("../../assets/logo.jpg")}
        style={{
          width: 30,
          height: 30,
          borderRadius: 30 / 2,
          marginLeft: 0,
        }}
      />
    </View>
  );
};

export default AppIcon;