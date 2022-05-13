import { TextField } from "@mui/material";
import "./Header.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import categories from "../../Data/category";

const Header = ({ category, setCategory, word, setWord, LightMode }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: LightMode ? "#000" : "#fff",
      },
      type: LightMode ? "light" : "dark",
    },
  });
  const handleChange = (language) => {
    setCategory(language);
    setWord("");
  };

  return (
    <div className="header">
      <span className="title">{word ? word : "Word hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            label="search a word"
            variant="standard"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            className="select"
            select
            label="Language"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
            SelectProps={{
              native: true,
            }}
            variant="standard"
          >
            {categories.map((option) => (
              <option key={option.label} value={option.label}>
                {option.value}
              </option>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
