import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [FMCG, setFMCG] = useState({
    VBL: 0,
    MARICO: 0,
    TATACONSUMER: 0,
    TRENT: 0
  });
  useEffect(async () => {
    const vblPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/fmcg/vbl"
    );

    const maricoPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/fmcg/marico"
    );

    const tataConsumerPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/fmcg/tataconsumer"
    );

    const trentltdPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/fmcg/trentltd"
    );

    setFMCG({
      VBL: vblPrice.data.price,
      MARICO: maricoPrice.data.price,
      TATACONSUMER: tataConsumerPrice.data.price,
      TRENT: trentltdPrice.data.price
    });
  }, []);
  return (
    <div className="App">
      <h1>FMCG</h1>
      <h3> VBL : {FMCG.VBL} </h3>
      <h3> MARICO : {FMCG.MARICO} </h3>
      <h3> TATA-CONSUMER : {FMCG.TATACONSUMER} </h3>
      <h3> TRENT-Ltd : {FMCG.TRENT} </h3>
    </div>
  );
}
