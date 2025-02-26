import { useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import { View, Text, BackHandler, Alert } from "react-native";
import styles from "../../src/styles/pagamento.styles";
import { Icon, Divider } from "react-native-paper";
import { useSelector } from "react-redux";
import TimerCircle from "../../src/components/timerCircle/timer-circle";

const Pagamento = () => {
  const router = useRouter();
  const total = useSelector((state: any) => state.carrinho.total);

  const finalizar = () => {
    router.push("/final");
  };

  useEffect(() => {
    const backAction = () => {
     
      return true; // Retorna true para impedir a navegação
    };

    // Adiciona o listener para o evento de voltar
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    // Limpa o listener quando o componente é desmontado
    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.destravadoContainer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalTexto}>Total</Text>
          <Text style={styles.valorTotalTexto}>
            <Text style={styles.moedaTexto}>R$ </Text>
            <Text style={styles.valorTexto}>{Math.floor(total)}</Text>
            <Text style={styles.centavosTexto}>,{(total % 1).toFixed(2).substring(2)}</Text>
          </Text>
        </View>
        

        <Divider style={styles.divider} />
      
        <Text style={styles.destravadoTitulo}>
          Porta <Text style={styles.destravadoAmarelo}>destravada!</Text>
        </Text>
        <Text style={styles.destravadoSubtitulo}>Retire seus produtos</Text>
        <TimerCircle duration={60} onComplete={finalizar} />
        <Text style={styles.tempoAvisoTexto}>
          Após 60 segundos, a porta se trancará automaticamente
        </Text>
        <Text style={styles.pagamentoTexto}>
          Faça o pagamento na {" "}
          <Text style={styles.maquinetaTexto}>maquineta</Text> {" "}
          ao lado
        </Text>
        <View style={styles.iconContainer}>
          <Icon
            source="arrow-down-circle-outline"
            color="black"
            size={70}
          />
        </View>
      </View>
    </View>
  );
};

export default Pagamento;
