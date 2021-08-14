import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [OTHERS, setOTHERS] = useState({
    TRIDENT: 0,
    EXIDEIND: 0,
    RELAXO: 0
  });

  const [PAINTS, setPAINTS] = useState({
    ASIAN: 0,
    BERGER: 0,
    NEROLAC: 0
  });

  const [IT, setIT] = useState({
    INFOSYS: 0,
    WIPRO: 0,
    LTI: 0,
    INDIAMART: 0,
    NAUKRI: 0,
    HCLTECH: 0
  });

  const [CHEMICAL, setCHEMICAL] = useState({
    BLACKROSE: 0,
    NAVINFLUORO: 0,
    ALKLYAMINES: 0,
    ATUL: 0,
    AARTIIND: 0,
    AARTISURF: 0,
    LUXCHEM: 0,
    DEEPAKNITRITE: 0,
    MANORG: 0,
    SUMICHEM: 0
  });

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
    PIDILITE: 0,
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
    const blackrosePrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/chemical/blackrose"
    );

    const navinfluoroPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/chemical/navinfluoro"
    );

    const atulPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/chemical/atul"
    );

    const alklyaminesPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/chemical/alklyamines"
    );

    const aartiindPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/chemical/aartiind"
    );

    const aartisurfPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/chemical/aartisurf"
    );

    const laxmichemPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/chemical/laxmichem"
    );

    const deepaknitritePrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/chemical/deepaknitrite"
    );

    const manorgPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/chemical/manorg"
    );

    const sumichemPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/chemical/sumichem"
    );

    const infosysPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/infoandtech/infosys"
    );

    const wiproPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/infoandtech/wipro"
    );

    const ltiPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/infoandtech/lti"
    );

    const indiamartPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/infoandtech/indiamart"
    );

    const hcltechPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/infoandtech/hcltech"
    );

    const naukriPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/infoandtech/naukri"
    );

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

    setCHEMICAL({
      BLACKROSE: blackrosePrice.data.price,
      NAVINFLUORO: navinfluoroPrice.data.price,
      ATUL: atulPrice.data.price,
      ALKLYAMINES: alklyaminesPrice.data.price,
      AARTIIND: aartiindPrice.data.price,
      AARTISURF: aartisurfPrice.data.price,
      LUXCHEM: laxmichemPrice.data.price,
      DEEPAKNITRITE: deepaknitritePrice.data.price,
      MANORG: manorgPrice.data.price,
      SUMICHEM: sumichemPrice.data.price
    });

    setIT({
      INFOSYS: infosysPrice.data.price,
      WIPRO: wiproPrice.data.price,
      HCLTECH: hcltechPrice.data.price,
      INDIAMART: indiamartPrice.data.price,
      NAUKRI: naukriPrice.data.price
    });

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

      <h1>INFO. AND TECH. </h1>
      <h3> INFOSYS : {IT.INFOSYS} </h3>
      <h3> WIPRO : {IT.WIPRO} </h3>
      <h3> HCLTECH : {IT.HCLTECH} </h3>
      <h3> NAUKRI : {IT.NAUKRI} </h3>
      <h3> INDIAMART : {IT.INDIAMART} </h3>

      <h1>CHEMICAL </h1>
      <h3> AARTIIND : {CHEMICAL.AARTIIND} </h3>
      <h3> AARTISURF : {CHEMICAL.AARTISURF} </h3>
      <h3> ALKLYAMINES : {CHEMICAL.ALKLYAMINES} </h3>
      <h3> NAVINFLUORO : {CHEMICAL.NAVINFLUORO} </h3>
      <h3> ATUL : {CHEMICAL.ATUL} </h3>
      <h3> DEEPAKNITRITE : {CHEMICAL.DEEPAKNITRITE} </h3>
      <h3> MANORG : {CHEMICAL.MANORG} </h3>
      <h3> SUMICHEM : {CHEMICAL.SUMICHEM} </h3>
      <h3> LUXCHEM : {CHEMICAL.LUXCHEM} </h3>
      <h3> BLACKROSE : {CHEMICAL.BLACKROSE} </h3>
    </div>
  );
}
