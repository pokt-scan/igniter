import { useEffect, useState } from "react";

interface PoktInfo {
  price: number;
  change: number;
}

interface Result extends PoktInfo {
  loading: boolean;
  error: boolean;
}

function usePoktPriceInfo(): Result {
  //hook for fetching pokt price, change, loading, and error. obtained by calling api route at /api/poktPrice
  const [priceInfo, setPriceInfo] = useState<PoktInfo>({
    price: 0,
    change: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/poktPrice")
      .then((res) => res.json())
      .then((data) => {
        setPriceInfo({
          price: data.usd_price,
          change: data.percent_change_24h,
        });
        setLoading(false);
      })
      .catch(() => setError(true));
  }, []);

  return {
    loading,
    error: !!error,
    price: priceInfo.price || 0,
    change: priceInfo.change || 0,
  };
}

export default usePoktPriceInfo;
