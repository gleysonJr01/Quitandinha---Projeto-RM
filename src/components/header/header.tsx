import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { IconButton } from "react-native-paper";
import { useRouter } from "expo-router"; // Importar o hook de navegação

interface HeaderProps {
  onToggleSearch: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSearch }) => {
  const [clickCount, setClickCount] = useState(0);
  const router = useRouter(); // Hook de navegação

  const handleLogoClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount === 5) {
      router.push('/configuracoes'); // Navegar para a tela de configurações
    }
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleLogoClick}>
        <Image
          source={require("../../../assets/logo-4.png")}
          style={styles.logo}
        />
      </TouchableOpacity>
      <IconButton icon="magnify" size={28} onPress={onToggleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFD700",
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginTop: -15
  },
  logo: {
    width: 90,
    height: 90,
    resizeMode: "contain",
  },
});

export default Header;
