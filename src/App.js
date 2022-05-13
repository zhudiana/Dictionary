import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import { Container, Switch } from "@mui/material";
import Header from "./Components/Header/Header";
import Definitions from "./Components/Definitions/Definitions";
import { alpha, styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const [LightMode, setLightMode] = useState(false);

  const DarkMode = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: grey[600],
      "&:hover": {
        backgroundColor: alpha(grey[600], theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: grey[600],
    },
  }));

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );

      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dictionaryApi();
  }, [word, category]);

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        backgroundColor: LightMode ? "#fff" : "#282534",
        color: LightMode ? "black" : "white",
        transition: "all 0.5s linear",
      }}
    >
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            position: "absolut",
            top: 0,
            right: 15,
            paddingTop: 10,
          }}
        >
          <span style={{ marginLeft: "80%" }}>
            {LightMode ? "Light" : "Dark"} Mode
          </span>
          <DarkMode
            checked={LightMode}
            onChange={() => setLightMode(!LightMode)}
          />
        </div>
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
          LightMode={LightMode}
        />
        {meanings && (
          <Definitions word={word} meanings={meanings} category={category} />
        )}
      </Container>
    </div>
  );
}

export default App;
