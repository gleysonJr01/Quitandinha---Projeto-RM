import { useRouter } from "expo-router";
import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "../../src/styles/final.styles";
import { IconButton } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { resetarCarrinho } from "../../redux/listaSlice";

const Final = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  
  const carrinho = useSelector((state: any) => state.carrinho.carrinho);
  const total = useSelector((state: any) => state.carrinho.total);

  const encerrarCompra = () => {
    dispatch(resetarCarrinho()); // Esvazia o carrinho
    router.push("/"); // Redireciona para a página inicial
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo-1.png")} style={styles.image} />

      <View style={styles.pagamentoContainer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalTexto}>Total</Text>
          <Text style={styles.valorTotalTexto}>
            <Text style={styles.moedaTexto}>R$ </Text>
            <Text style={styles.valorTexto}>{Math.floor(total)}</Text>
            <Text style={styles.centavosTexto}>,{(total % 1).toFixed(2).substring(2)}</Text>
          </Text>
        </View>
        <Text style={styles.pagamentoTexto}>Faça o pagamento na maquineta ao lado</Text>
        <View style={styles.iconContainer}>
          <IconButton icon="cash-register" iconColor="black" size={50} />
          <IconButton icon="arrow-right" iconColor="black" size={30} style={styles.setaIcon} />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={encerrarCompra}>
        <Text style={styles.buttonText}>Encerrar compra</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Final;
