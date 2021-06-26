import React from "react";
import { Image, View } from "react-native";

import { styles } from "./styles";
import DiscordSvg from '../../assets/discord.svg'

const { CDN_IMAGE } = process.env

type Props = {
  guildId: string;
  iconId: string | null;
}

export function GuildIcon({ guildId, iconId}: Props) {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`
  
  
  //'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC3fluX-_d6vz79AlvyJfHYoLjY2kH7R6hrprDsCDN5zdq4ClajzpKWTHGHYwvLQ7gDGE&usqp=CAU'

  return (
    <View style={styles.container}>
      {
        iconId ?
        <Image 
          source={{ uri }}
          style={styles.image}
          resizeMode="cover"
        />
        :
        <DiscordSvg 
          width={40}
          height={40}
        />
      }
    </View>

  )
}