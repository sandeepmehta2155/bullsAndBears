import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [OTHERS, setOTHERS] = useState({
    TRIDENT: 0,
    EXIDEIND: 0,
    RELAXO: 0
  });

  const [OTHERSPL, setOTHERSPL] = useState({
    TRIDENT_PL: 0,
    EXIDEIND_PL: 0,
    RELAXO_PL: 0
  });

  const [PAINTS, setPAINTS] = useState({
    ASIAN: 0,
    BERGER: 0,
    NEROLAC: 0
  });

  const [PAINTSPL, setPAINTSPL] = useState({
    ASIAN_PL: 0,
    BERGER_PL: 0,
    NEROLAC_PL: 0
  });

  const [IT, setIT] = useState({
    INFOSYS: 0,
    WIPRO: 0,
    LTI: 0,
    INDIAMART: 0,
    NAUKRI: 0,
    HCLTECH: 0
  });

  const [ITPL, setITPL] = useState({
    INFOSYS_PL: 0,
    WIPRO_PL: 0,
    LTI_PL: 0,
    INDIAMART_PL: 0,
    NAUKRI_PL: 0,
    HCLTECH_PL: 0
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

  const [CHEMICALPL, setCHEMICALPL] = useState({
    BLACKROSE_PL: 0,
    NAVINFLUORO_PL: 0,
    ALKLYAMINES_PL: 0,
    ATUL_PL: 0,
    AARTIIND_PL: 0,
    AARTISURF_PL: 0,
    LUXCHEM_PL: 0,
    DEEPAKNITRITE_PL: 0,
    MANORG_PL: 0,
    SUMICHEM_PL: 0
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

  const [BANKINGANDFINANCEPL, setBANKINGANDFINANCEPL] = useState({
    HDFC_PL: 0,
    HDFCBANK_PL: 0,
    HDFCAMC_PL: 0,
    BAJAJFINANCE_PL: 0,
    MUTHOOT_PL: 0,
    ICICIBANK_PL: 0,
    FEDERALBANK_PL: 0,
    CHOLAFIN_PL: 0
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

  const [OGINDUSTRIALPL, setOGINDUSTRIALPL] = useState({
    PIDILITE_PL: 0,
    MOTHERSUMI_PL: 0,
    PRINCEPIPES_PL: 0,
    SONACOMS_PL: 0,
    TATAMOTORS_PL: 0,
    LT_PL: 0,
    RVNL_PL: 0,
    ASTRAL_PL: 0,
    IGL_PL: 0
  });

  const [FMCG, setFMCG] = useState({
    VBL: 0,
    MARICO: 0,
    TATACONSUMER: 0,
    TRENT: 0
  });

  const [FMCGPL, setFMCGPL] = useState({
    VBL_PL: 0,
    MARICO_PL: 0,
    TATACONSUMER_PL: 0,
    TRENT_PL: 0
  });

  useEffect(async () => {
    const tridentPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/other/trident"
    );
    const exideindPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/other/exideind"
    );
    const relaxoPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/other/relaxo"
    );

    const asianpaintsPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/paint/asianpaints"
    );

    const bergerpaintsPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/paint/bergerpaints"
    );

    const kansainerPrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/paint/kansainer"
    );

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

    const pidilitePrice = await axios.get(
      "https://upstoxApi.sandeepmehta215.repl.co/ogindustrial/pidilite"
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

    setOTHERS({
      TRIDENT: tridentPrice.data.price,
      EXIDEIND: exideindPrice.data.price,
      RELAXO: relaxoPrice.data.price
    });

    setPAINTS({
      ASIAN: asianpaintsPrice.data.price,
      BERGER: bergerpaintsPrice.data.price,
      NEROLAC: kansainerPrice.data.price
    });
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
      NAUKRI: naukriPrice.data.price,
      LTI: ltiPrice.data.price
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
      RVNL: rvnlPrice.data.price,
      PIDILITE: pidilitePrice.data.price
    });
  }, []);
  return (
    <div className="App">
      <table>
        <tr>
          <th> STOCK </th>
          <th> LTP </th>
          <th> BUYING-PRICE </th>
          <th> BUYING-QTYs </th>
          <th> P&L </th>
        </tr>
        <tr>
          {" "}
          <h2>FMCG</h2>
        </tr>
        <tr>
          <td>
            <h4>VBL</h4>
          </td>
          <td>{FMCG.VBL}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{FMCGPL.VBL_PL}</td>
        </tr>
        <tr>
          <td>
            <h4>MARICO</h4>
          </td>
          <td>{FMCG.MARICO}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{FMCGPL.MARICO_PL}</td>
        </tr>
        <tr>
          <td>
            <h4>TATA-CONSUMER</h4>
          </td>
          <td>{FMCG.TATACONSUMER}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{FMCGPL.TATACONSUMER_PL}</td>
        </tr>
        <tr>
          <td>
            <h4>TRENT</h4>
          </td>
          <td>{FMCG.TRENT}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{FMCGPL.TRENT_PL}</td>
        </tr>
        {/* ----------------------------------  ------------------- */}
        <tr>
          {" "}
          <h2>O&G / INDUSTRIAL</h2>
        </tr>
        <tr>
          <td>
            <h4>MOTHERSUMI</h4>
          </td>
          <td>{OGINDUSTRIAL.MOTHERSUMI}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{OGINDUSTRIALPL.MOTHERSUMI_PL}</td>
        </tr>
        <tr>
          <td>
            <h4>PRINCEPIPES</h4>
          </td>
          <td>{OGINDUSTRIAL.PRINCEPIPES}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{OGINDUSTRIALPL.PRINCEPIPES_PL}</td>
        </tr>
        <tr>
          <td>
            <h4>SONACOMS</h4>
          </td>
          <td>{OGINDUSTRIAL.SONACOMS}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{OGINDUSTRIALPL.SONACOMS_PL}</td>
        </tr>
        <tr>
          <td>
            <h4>LT</h4>
          </td>
          <td>{OGINDUSTRIAL.LT}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{OGINDUSTRIALPL.LT_PL}</td>
        </tr>
        <tr>
          <td>
            <h4>TATA-MOTORS</h4>
          </td>
          <td>{OGINDUSTRIAL.TATAMOTORS}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{OGINDUSTRIALPL.TATAMOTORS_PL}</td>
        </tr>
        <tr>
          <td>
            <h4>ASTRAL</h4>
          </td>
          <td>{OGINDUSTRIAL.ASTRAL}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{OGINDUSTRIALPL.ASTRAL_PL}</td>
        </tr>
        <tr>
          <td>
            <h4>IGL</h4>
          </td>
          <td>{OGINDUSTRIAL.IGL}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{OGINDUSTRIALPL.IGL_PL}</td>
        </tr>
        <tr>
          <td>
            <h4>RVNL</h4>
          </td>
          <td>{OGINDUSTRIAL.RVNL}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{OGINDUSTRIALPL.RVNL_PL}</td>
        </tr>{" "}
        {/* ------------------------------------------------------ */}
        <tr>
          {" "}
          <h2>BANKING AND FINANCE</h2>{" "}
        </tr>
        <tr>
          <td>
            <h4>HDFC</h4>
          </td>
          <td>{BANKINGANDFINANCE.HDFC}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{BANKINGANDFINANCEPL.HDFC_PL}</td>
        </tr>
        <tr>
          <td>
            <h4>HDFC-BANK</h4>
          </td>
          <td>{BANKINGANDFINANCE.HDFCBANK}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{BANKINGANDFINANCEPL.HDFCBANK_PL}</td>
        </tr>
        <tr>
          <td>
            <h4>HDFC-AMC</h4>
          </td>
          <td>{BANKINGANDFINANCE.HDFCAMC}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{BANKINGANDFINANCEPL.HDFCAMC_PL}</td>
        </tr>
        <tr>
          <td>
            <h4>BAJAJFINANCE</h4>
          </td>
          <td>{BANKINGANDFINANCE.BAJAJFINANCE}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{BANKINGANDFINANCEPL.BAJAJFINANCE_PL}</td>
        </tr>
        <tr>
          <td>
            <h4>MUTHOOT</h4>
          </td>
          <td>{BANKINGANDFINANCE.MUTHOOT}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{BANKINGANDFINANCEPL.MUTHOOT_PL}</td>
        </tr>
        <tr>
          <td>
            <h4>FEDERALBANK</h4>
          </td>
          <td>{BANKINGANDFINANCE.FEDERALBANK}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{BANKINGANDFINANCEPL.FEDERALBANK_PL}</td>
        </tr>
        <tr>
          <td>
            <h4>ICICIBANK</h4>
          </td>
          <td>{BANKINGANDFINANCE.ICICIBANK}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{BANKINGANDFINANCEPL.ICICIBANK_PL}</td>
        </tr>
        <tr>
          <td>
            <h4>CHOLAFIN</h4>
          </td>
          <td>{BANKINGANDFINANCE.CHOLAFIN}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{BANKINGANDFINANCEPL.CHOLAFIN_PL}</td>
        </tr>
        {/* ------------------------------------------------------- */}
        <tr>
          {" "}
          <h2>INFO. AND TECH. </h2>
        </tr>
        <tr>
          <td>
            <h4>INFOSYS</h4>
          </td>
          <td>{IT.INFOSYS}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{ITPL.INFOSYS_PL}</td>
        </tr>
        <tr>
          <td>
            <h4>WIPRO</h4>
          </td>
          <td>{IT.WIPRO}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{ITPL.WIPRO_PL}</td>
        </tr>
        <tr>
          <td>
            <h4>HCLTECH</h4>
          </td>
          <td>{IT.HCLTECH}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{ITPL.HCLTECH_PL}</td>
        </tr>
        <tr>
          <td>
            <h4>NAUKRI</h4>
          </td>
          <td>{IT.NAUKRI}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{ITPL.NAUKRI_PL}</td>
        </tr>
        <tr>
          <td>
            <h4>INDIAMART</h4>
          </td>
          <td>{IT.INDIAMART}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{ITPL.INDIAMART_PL}</td>
        </tr>
        <tr>
          <td>
            <h4>LTI</h4>
          </td>
          <td>{IT.LTI}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{ITPL.LTI_PL}</td>
        </tr>
        <tr>
          <h2>CHEMICAL </h2>
        </tr>
        <tr>
          <td>
            <h4>AARTIIND</h4>
          </td>
          <td>{CHEMICAL.AARTIIND}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{CHEMICALPL.AARTIIND_PL}</td>
        </tr>
        <tr>
          <td>
            <h4>AARTISURF</h4>
          </td>
          <td>{CHEMICAL.AARTISURF}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{CHEMICALPL.AARTISURF_PL}</td>
        </tr>
        <tr>
          <td>
            <h4>ALKLYAMINES</h4>
          </td>
          <td>{CHEMICAL.ALKLYAMINES}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{CHEMICALPL.ALKLYAMINES_PL}</td>
        </tr>
        <tr>
          <td>
            <h4>ATUL</h4>
          </td>
          <td>{CHEMICAL.ATUL}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{CHEMICALPL.ATUL_PL}</td>
        </tr>
        <tr>
          <td>
            <h4>NAVINFLUORO</h4>
          </td>
          <td>{CHEMICAL.NAVINFLUORO}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{CHEMICALPL.NAVINFLUORO_PL}</td>
        </tr>
        <tr>
          <td>
            <h4>DEEPAKNITRITE</h4>
          </td>
          <td>{CHEMICAL.DEEPAKNITRITE}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{CHEMICALPL.DEEPAKNITRITE_PL}</td>
        </tr>
        <tr>
          <td>
            <h4>MANORG</h4>
          </td>
          <td>{CHEMICAL.MANORG}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{CHEMICALPL.MANORG_PL}</td>
        </tr>
        <tr>
          <td>
            <h4>SUMICHEM</h4>
          </td>
          <td>{CHEMICAL.SUMICHEM}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{CHEMICALPL.SUMICHEM_PL}</td>
        </tr>
        <tr>
          <td>
            <h4>LUXCHEM</h4>
          </td>
          <td>{CHEMICAL.LUXCHEM}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{CHEMICALPL.LUXCHEM_PL}</td>
        </tr>
        <tr>
          <td>
            <h4>BLACKROSE</h4>
          </td>
          <td>{CHEMICAL.BLACKROSE}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{CHEMICALPL.BLACKROSE_PL}</td>
        </tr>
        <tr>
          <h2>PAINTS </h2>
        </tr>
        <tr>
          <td>
            <h4>ASIAN</h4>
          </td>
          <td>{PAINTS.ASIAN}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{PAINTSPL.ASIAN_PL}</td>
        </tr>
        <tr>
          <td>
            <h4>BERGER</h4>
          </td>
          <td>{PAINTS.BERGER}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{PAINTSPL.BERGER_PL}</td>
        </tr>
        <tr>
          <td>
            <h4>NEROLAC</h4>
          </td>
          <td>{PAINTS.NEROLAC}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{PAINTSPL.NEROLAC_PL}</td>
        </tr>
        <tr>
          <h2>OTHERS</h2>
        </tr>
        <tr>
          <td>
            <h4>RELAXO</h4>
          </td>
          <td>{OTHERS.RELAXO}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{OTHERSPL.RELAXO_PL}</td>
        </tr>
        <tr>
          <td>
            <h4>TRIDENT</h4>
          </td>
          <td>{OTHERS.TRIDENT}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{OTHERSPL.TRIDENT_PL}</td>
        </tr>
        <tr>
          <td>
            <h4>EXIDEIND</h4>
          </td>
          <td>{OTHERS.EXIDEIND}</td>
          <td>
            <input placeholder="buying price" />
          </td>

          <td>
            <input placeholder="quantity" />
          </td>
          <td>{OTHERSPL.EXIDEIND_PL}</td>
        </tr>
      </table>
    </div>
  );
}
