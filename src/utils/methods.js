import axios from 'axios';

export const getAxios = async (url, headers, setData, setLoading, setError) => {
  setLoading(true);
  try {
    const response = await axios.get(url, { headers });
    console.log(response.data);
    setData(response.data);
    setLoading(false);
  } catch (err) {
    if (setError) setError(err);
    console.log('Error', err);
    setLoading(false);
  }
};

data = [
  {
    label: 'nombre',
    key: 'key',
    icon: 'icon',
  },
  {
    label: 'nombre',
    key: 'key',
    icon: 'icon',
  },
  {
    label: 'nombre',
    key: 'key',
    icon: 'icon',
    children: [
      {
        label: 'nombre (de la pantalla)',
        key: 'key (de la pantalla)',
      },
    ],
  },
];
