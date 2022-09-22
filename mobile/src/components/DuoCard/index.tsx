import { Text, TouchableOpacity, View } from "react-native";
import { GameController } from "phosphor-react-native";

import { DuoInfo } from "../DuoInfo";

import { styles } from "./styles";
import { THEME } from "../../theme";

export interface DuoCardProps {
  id: string;
  hoursEnd: string;
  hoursStart: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: number[];
  yearsPlaying: number;
}

interface Props {
  data: DuoCardProps;
  onConnect: () => void;
}

export function DuoCard({ data, onConnect }: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value={data.name} />

      <DuoInfo
        label="Tempo de jogo"
        value={`${data.yearsPlaying} ano${data.yearsPlaying === 1 ? "" : "s"}`}
      />

      <DuoInfo
        label="Disponibilidade"
        value={`${data.weekDays.length} dia${
          data.weekDays.length === 1 ? "" : "s"
        } \u2022 ${data.hoursStart} - ${data.hoursEnd}`}
      />

      <DuoInfo
        label="Canal de voz"
        value={data.useVoiceChannel ? "Sim" : "Não"}
        colorValue={
          data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
        }
      />

      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <GameController color={THEME.COLORS.TEXT} size={20} />
        <Text style={styles.buttonTitle}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
}
