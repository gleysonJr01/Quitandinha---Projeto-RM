import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { View, Image, Text, TouchableOpacity, BackHandler } from "react-native";
import styles from "../../src/styles/final.styles";
import { useDispatch } from "react-redux";
import { resetarCarrinho } from "../../redux/listaSlice"; // Certifique-se de ter essa action em seu redux

const Final = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const finalizarCompra = () => {
    dispatch(resetarCarrinho()); // Esvazia o carrinho
    router.push("/"); // Redireciona para a página inicial
  };

  useEffect(() => {
    const backAction = () => {
      // Impede o retorno para a tela anterior
      return true; // Retorna true para impedir o comportamento padrão de voltar
    };

    // Adiciona o listener para o evento de voltar
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    // Limpa o listener quando o componente for desmontado
    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo-1.png")} style={styles.image} />
      
      <Text style={[styles.thankYouText, { textAlign: "center" }]}>
        Muito Obrigado por comprar com a{" "}
        <Text style={styles.highlightText}>Quitandinha</Text>, volte sempre!
      </Text>
      
      <TouchableOpacity style={styles.button} onPress={finalizarCompra}>
        <Text style={styles.buttonText}>Voltar para o início</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Final;
