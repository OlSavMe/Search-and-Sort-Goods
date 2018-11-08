 
  var goodsList = new List('goods-list', {
    valueNames: ['name', 'brand', 'dep'],
    page: 3,
    pagination: true
  });
  
  goodsList.add( { name: 'Laptop', brand: 'Asus', dep:'Computers' } );
  goodsList.add( { name: 'Kettle', brand: 'Philips', dep:'Kitchen Appliances'});
  goodsList.add( { name: 'Washing Machine', brand: 'Bosh', dep:'Home Equipment'});
  goodsList.add( { name: 'Smartphone', brand: 'Samsung', dep:'Phones'});
  goodsList.add( { name: 'Vaccum Cleaner', brand: 'Philips', dep:'Home Equipment'});