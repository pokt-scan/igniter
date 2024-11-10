import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosError } from "axios";
import get from "lodash/get";
const GET_RAW_TX_TIMEOUT_MESSAGE = "timeout getting the tx";

const COIN_MARKET_CAP_API_KEY = process.env.COIN_MARKET_CAP_API_KEY;
export const POKT_NETWORK_COIN_MARKET_CAP_ID = 11823;
export const COIN_MARKET_CAP_QUOTES_LISTING_URL =
  "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest";

async function getPoktPriceInfo(apiKey = COIN_MARKET_CAP_API_KEY) {
  try {
    const response = await axios.get(COIN_MARKET_CAP_QUOTES_LISTING_URL, {
      headers: {
        Accepts: "application/json",
        "X-CMC_PRO_API_KEY": apiKey,
      },
      params: {
        id: POKT_NETWORK_COIN_MARKET_CAP_ID,
      },
    });
    return {
      usd_price: get(
        response.data,
        `data.${POKT_NETWORK_COIN_MARKET_CAP_ID}.quote.USD.price`,
        0
      ),
      percent_change_24h: get(
        response.data,
        `data.${POKT_NETWORK_COIN_MARKET_CAP_ID}.quote.USD.percent_change_24h`,
        0
      ),
    };
  } catch (e) {
    console.error("getPoktPriceInfo", e);

    const error = e as AxiosError<{ message: string }>;
    if (axios.isCancel(error)) {
      throw new Error(GET_RAW_TX_TIMEOUT_MESSAGE);
    }
    if (error?.response?.status === 400 && error?.response?.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error("Failed to get POKT price info");
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const poktPriceInfo = await getPoktPriceInfo();
    res.status(200).json(poktPriceInfo);
  } catch (e) {
    console.error("poktPrice", e);
    res.status(500).json({ error: e.message });
  }
}
