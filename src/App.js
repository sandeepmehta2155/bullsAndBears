import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [BANKINGANDFINANCE, setBANKINGANDFINANCE] = useState({
    HDFC: 0,
    HDFCBANK: 0,
    HDFCAMC: 0,
    BAJAJFINANCE: 0,
    MUTHOOT: 0,
    ICICIBANK: 0,
    FEDERALBANK: 0,
    CHOLAFIN: 0
  });

  const [OGINDUSTRIAL, setOGINDUSTRIAL] = useState({
    MOTHERSUMI: 0,
    PRINCEPIPES: 0,
    SONACOMS: 0,
    TATAMOTORS: 0,
    LT: 0,
    RVNL: 0,
    ASTRAL: 0,
    IGL: 0
  });

  const [FMCG, setFMCG] = useState({
    VBL: 0,
    MARICO: 0,
    TATACONSUMER: 0,
    TRENT: 0
  });
  useEffect(async () => {
    const hdfcPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/bankingandfinance/hdfc"
    );

    const hdfcbankPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/bankingandfinance/hdfcbank"
    );

    const hdfcamcPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/bankingandfinance/hdfcamc"
    );

    const bajajfinancePrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/bankingandfinance/bajajfinance"
    );

    const federalbankPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/bankingandfinance/federalbank"
    );

    const icicibankPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/bankingandfinance/icicibank"
    );

    const cholafinPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/bankingandfinance/cholafin"
    );

    const muthootfinPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/bankingandfinance/muthootfinance"
    );

    const mothersumiPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/ogindustrial/mothersumi"
    );

    const sonacomsPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/ogindustrial/sonacoms"
    );

    const princepipesPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/ogindustrial/pricepipes"
    );

    const tatamotorsPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/ogindustrial/tatamotors"
    );

    const ltPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/ogindustrial/lt"
    );

    const rvnlPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/ogindustrial/rvnl"
    );

    const astralPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/ogindustrial/astralpoly"
    );

    const iglPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/ogindustrial/igl"
    );

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

    setBANKINGANDFINANCE({
      HDFC: hdfcPrice.data.price,
      HDFCAMC: hdfcamcPrice.data.price,
      HDFCBANK: hdfcbankPrice.data.price,
      BAJAJFINANCE: bajajfinancePrice.data.price,
      ICICIBANK: icicibankPrice.data.price,
      MUTHOOT: muthootfinPrice.data.price,
      CHOLAFIN: cholafinPrice.data.price,
      FEDERALBANK: federalbankPrice.data.price
    });

    setFMCG({
      VBL: vblPrice.data.price,
      MARICO: maricoPrice.data.price,
      TATACONSUMER: tataConsumerPrice.data.price,
      TRENT: trentltdPrice.data.price
    });

    setOGINDUSTRIAL({
      MOTHERSUMI: mothersumiPrice.data.price,
      PRINCEPIPES: princepipesPrice.data.price,
      SONACOMS: sonacomsPrice.data.price,
      TATAMOTORS: tatamotorsPrice.data.price,
      LT: ltPrice.data.price,
      ASTRAL: astralPrice.data.price,
      IGL: iglPrice.data.price,
      RVNL: rvnlPrice.data.price
    });
  }, []);
  return (
    <div className="App">
      <h1>FMCG</h1>
      <h3> VBL : {FMCG.VBL} </h3>
      <h3> MARICO : {FMCG.MARICO} </h3>
      <h3> TATA-CONSUMER : {FMCG.TATACONSUMER} </h3>
      <h3> TRENT-Ltd : {FMCG.TRENT} </h3>

      <h1>O&G / INDUSTRIAL</h1>
      <h3> MOTHERSUMI : {OGINDUSTRIAL.MOTHERSUMI} </h3>
      <h3> PRINCEPIPES : {OGINDUSTRIAL.PRINCEPIPES} </h3>
      <h3> SONACOMS : {OGINDUSTRIAL.SONACOMS} </h3>
      <h3> LT : {OGINDUSTRIAL.LT} </h3>
      <h3> TATAMOTORS : {OGINDUSTRIAL.TATAMOTORS} </h3>
      <h3> ASTRAL : {OGINDUSTRIAL.ASTRAL} </h3>
      <h3> IGL : {OGINDUSTRIAL.IGL} </h3>
      <h3> RVNL : {OGINDUSTRIAL.RVNL} </h3>

      <h1>BANKING AND FINANCE </h1>
      <h3> HDFC : {BANKINGANDFINANCE.HDFC} </h3>
      <h3> HDFCAMC : {BANKINGANDFINANCE.HDFCAMC} </h3>
      <h3> HDFCBANK : {BANKINGANDFINANCE.HDFCBANK} </h3>
      <h3> BAJAJFINANCE : {BANKINGANDFINANCE.BAJAJFINANCE} </h3>
      <h3> MUTHOOT : {BANKINGANDFINANCE.MUTHOOT} </h3>
      <h3> FEDERALBANK : {BANKINGANDFINANCE.FEDERALBANK} </h3>
      <h3> ICICIBANK : {BANKINGANDFINANCE.ICICIBANK} </h3>
      <h3> CHOLAFIN : {BANKINGANDFINANCE.CHOLAFIN} </h3>
    </div>
  );
}
