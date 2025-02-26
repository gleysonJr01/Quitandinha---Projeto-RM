import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Svg, { Circle } from "react-native-svg";

const TimerCircle = ({ duration, onComplete }: { duration: number; onComplete: () => void }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
      setProgress(((duration - (timeLeft - 1)) / duration) * 100);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  // Aumentando o tamanho do círculo
  const radius = 60; // Antes era 50
  const strokeWidth = 12; // Antes era 10
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (progress / 100) * circumference;

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Svg height="140" width="140" viewBox="0 0 140 140">
        {/* Fundo do círculo */}
        <Circle
          cx="70"
          cy="70"
          r={radius}
          stroke="#fff" // Cinza escuro para melhor contraste
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Círculo de progresso */}
        <Circle
          cx="70"
          cy="70"
          r={radius}
          stroke="#FFD700" // Amarelo ouro
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          strokeLinecap="round"
        />
      </Svg>
      <Text style={{ 
        position: "absolute", 
        fontSize: 32, // Aumentado para melhor visibilidade
        fontWeight: "bold", 
        color: "#FFD700" // Amarelo ouro
      }}>
        {timeLeft}s
      </Text>
    </View>
  );
};

export default TimerCircle;
