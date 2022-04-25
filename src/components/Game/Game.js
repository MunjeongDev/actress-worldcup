import React, { useState, useEffect } from "react";
import { FlexBox } from "./style";

const items = [
  {
    name: "곽선영",
    src: require("../../img/곽선영.jpg"),
  },
  {
    name: "김규리",
    src: require("../../img/김규리.jpg"),
  },
  {
    name: "김서형",
    src: require("../../img/김서형.jpg"),
  },
  {
    name: "김선영",
    src: require("../../img/김선영.png"),
  },
  {
    name: "김혜수",
    src: require("../../img/김혜수.jpg"),
  },
  ,
  {
    name: "김희애",
    src: require("../../img/김희애.jpg"),
  },
  ,
  {
    name: "배해선",
    src: require("../../img/배해선.jpg"),
  },
  ,
  {
    name: "백지원",
    src: require("../../img/백지원.jpg"),
  },
  ,
  {
    name: "염정아",
    src: require("../../img/염정아.jpg"),
  },
  ,
  {
    name: "염혜란",
    src: require("../../img/염혜란.jpg"),
  },
  ,
  {
    name: "예수정",
    src: require("../../img/예수정.jpg"),
  },
  ,
  {
    name: "이영애",
    src: require("../../img/이영애.jpg"),
  },
  ,
  {
    name: "이혜영",
    src: require("../../img/fried-rice.jpg"),
  },
  ,
  {
    name: "볶음밥",
    src: require("../../img/이혜영.jpg"),
  },
  ,
  {
    name: "장영남",
    src: require("../../img/장영남.jpg"),
  },
  ,
  {
    name: "추자현",
    src: require("../../추자현.jpg"),
  },
];

const Game = () => {
  const [actresses, setActresses] = useState([]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);
  useEffect(() => {
    items.sort(() => Math.random() - 0.5);
    setActresses(items);
    setDisplays([items[0], items[1]]);
  }, []);

  const clickHandler = (actress) => () => {
    if (actresses.length <= 2) {
      if (winners.length === 0) {
        setDisplays([actress]);
      } else {
        let updatedActress = [...winners, actress];
        setActresses(updatedActress);
        setDisplays([updatedActress[0], updatedActress[1]]);
        setWinners([]);
      }
    } else if (actresses.length > 2) {
      setWinners([...winners, actress]);
      setDisplays([actresses[2], actresses[3]]);
      setActresses(actresses.slice(2));
    }
  };
  return (
    <FlexBox>
      <h1 className="title">Favorite Worldcup</h1>
      {displays.map((d) => {
        return (
          <div className="flex-1" key={d.name} onClick={clickHandler(d)}>
            <img className="actress-img" src={d.src} />
            <div className="name">{d.name}</div>
          </div>
        );
      })}
    </FlexBox>
  );
};

export default Game;
