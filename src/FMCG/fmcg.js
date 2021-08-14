import { useState, useEffect } from "react";
import axios from "axios";
import { RouteComponents } from "../ROUTECOMPONENT/routecomponent";

export const FMCG = () => {
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
    <>
      {" "}
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
      </table>
    </>
  );
};
