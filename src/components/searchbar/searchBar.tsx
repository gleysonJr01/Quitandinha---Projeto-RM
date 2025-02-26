import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Searchbar, IconButton } from "react-native-paper";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onClose: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onClose }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (text: string) => {
    setSearch(text);
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Ex: Biscoito de chocolate"
        value={search}
        onChangeText={handleSearch}
        style={styles.searchBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "#fff",
  },
  searchBar: {
    backgroundColor: "#fff",
    borderRadius: 20,
    marginRight: 10,
  },
});

export default SearchBar;
