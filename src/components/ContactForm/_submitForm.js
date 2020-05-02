import axios from 'axios';

const _submitForm = async data => {
  const res = await axios.get('https://hooks.zapier.com/hooks/catch/1517046/ordka2n/', {params: data});

  return res.data;
};

export default _submitForm;
