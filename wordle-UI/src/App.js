import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";

function App() {
  const [word, setWord] = useState(null);
  const [getWord, setGetWord] = useState(true);

  useEffect(() => {
    var acquireWord = async () => {
        var response = null;
        try {
            response = await fetch('https://localhost:7147/Word?test=false');
        } catch (err) {
            console.log(err);
            console.log('Help! I\'m broken - failed to get a response from the desired endpoint.');
        }

        if (response != null) {
            if (response.status >= 200 && response.status <= 299) {
                const responseText = await response.text();
                console.log('Response text: ' + responseText);
                setWord(responseText);
            } else {
                console.log(response.status, response.statusText);
                console.log('Help! I\'m broken - received invalid response code.');
            }
        }
    };

    if (getWord) {
        acquireWord();
        console.log('word is: ' + word);
        setGetWord(false);
    };

  }, [setWord]);


  return (
    <div className="App">
      <h1>Wordle</h1>
      {word && <Wordle word={word} />}
    </div>
  );
}

export default App