import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/plane"
      );

      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(meanings);

  useEffect(() => {
    dictionaryApi();
  }, []);

  return <div className="App">dictionmaertgrefvl</div>;
}

export default App;
