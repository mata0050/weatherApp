import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const useRequest = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    axios
      .get(url)
      .then((result) => {
        setLoading(false);
        setData(result.data);
        setErrorMsg('');
      })
      .catch((err) => {
        console.log(err);
        toast.error('Error loading data, check the spellings');
        setLoading(false);
      });
  }, [url]);

  return { data, loading, errorMsg };
};

export default useRequest;
