const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
  ];

  const findCherries = inventory.filter( element => {
    return element.name == 'cherries'
  })

  console.log(findCherries[0]);