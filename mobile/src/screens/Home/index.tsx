import { useEffect, useState } from "react";
import { FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import logoImg from "../../assets/logo-nlw-esports.png";
import { GameCard } from "../../components/GameCard";
import { Heading } from "../../components/Heading";

import { styles } from "./styles";

import { GameCardProps } from "../../components/GameCard";

export function Home() {
  const navigation = useNavigation();

  const [games, setGames] = useState<GameCardProps[]>([]);

  useEffect(() => {
    fetch("http://192.168.0.22:3333/games")
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate("Game", {
      id,
      title,
      bannerUrl,
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Heading
        title="Encontre seu duo"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        contentContainerStyle={styles.contentList}
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <GameCard data={item} onPress={() => handleOpenGame(item)} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
