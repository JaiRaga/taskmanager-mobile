import { View, Text } from "react-native";
import React, {useState} from "react";
import Header from "./Header";
import ListItems from "./ListItems";

const Home = () => {
  const initialTodos = [
    {
      title: "Buy Lunch",
      date: "Fri, 08 Jan 2021 16:32:11 GMT",
      key: 1,
    },
    {
      title: "Wash Car",
      date: "Sat, 08 Jan 2021 16:32:11 GMT",
      key: 2,
    },
    {
      title: "Go to Gym",
      date: "Mon, 08 Jan 2021 16:32:11 GMT",
      key: 3,
    },
  ];

  const [todos, setTodos] = useState(initialTodos)

  return (
    <>
      <Header />
      <ListItems todos={todos} setTodos={setTodos} />
    </>
  );
};

export default Home;
