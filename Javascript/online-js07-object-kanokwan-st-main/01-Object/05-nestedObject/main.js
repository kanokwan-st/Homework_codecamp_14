const product1 = {
    name: 'Water',
    distributor: {
      name: 'Giraffe Water Company',
      address: {
        street: 'Phetchaburi',
        subdistrict: 'Thanonphetchaburi',
        district: 'Ratchathewi',
        province: 'Bangkok'
      }
    }
  };

  console.log(product1.distributor.address.province);
  
  if (Object.keys(product2).length === 0 && product2.constructor === Object) {
    console.log(product1.distributor.address.province);
  }
  
