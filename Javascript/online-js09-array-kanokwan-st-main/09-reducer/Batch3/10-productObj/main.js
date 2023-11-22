const products = [
    { id: 1, name: 'Crystal' },
    { id: 4, name: 'Namthip' },
    { id: 5, name: 'Nestle' }
  ];
  // { 1: { name: 'Crystal' }, 4: { name: 'Namthip' }, 5: { name: 'Nestle' } };

  const productObj = products.reduce((obj,x) => {
    obj[x.id] = { name: x.name };
    return(obj);
  }, {});

  console.log(productObj);