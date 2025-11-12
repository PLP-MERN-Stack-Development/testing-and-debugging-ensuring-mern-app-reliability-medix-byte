import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let canceled = false;
    async function fetch() {
      try {
        const res = await axios.get(url);
        if (!canceled) setData(res.data);
      } catch (e) {
        if (!canceled) setData(null);
      } finally {
        if (!canceled) setLoading(false);
      }
    }
    fetch();
    return () => { canceled = true; };
  }, [url]);

  return { data, loading };
}
