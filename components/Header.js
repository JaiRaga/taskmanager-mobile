import { View, Text } from "react-native";
import React from "react";
import {Entypo} from "@expo/vector-icons"
import {
  HeaderView,
  HeaderTitle,
  HeaderButton,
  colors,
} from "../styles/styles";

const Header = () => {
  return (
    <HeaderView>
      <HeaderTitle>
        Todos
      </HeaderTitle>
      <HeaderButton>
        <Entypo name="trash" size={25} color={colors.tertiary} />
      </HeaderButton>
    </HeaderView>
  );
};

export default Header;
