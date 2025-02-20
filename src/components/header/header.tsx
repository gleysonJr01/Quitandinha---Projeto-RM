import React, { useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import { IconButton, Searchbar } from "react-native-paper";

interface HeaderProps {
  onToggleSearch: () => void;
}
const Header: React.FC<HeaderProps> = ({ onToggleSearch }) => {
  const [search, setSearch] = useState(""); 

;

  return (
    <View style={styles.header}>
      <Image source={require("../../../assets/logo-4.png")} style={styles.logo} />
      <IconButton icon="magnify" size={28} onPress={onToggleSearch} />

     

    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFD700", 
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  logo: {
    width: 90,
    height: 90,
    resizeMode: "contain",
    marginRight: 10,
  },

});
export default Header;
