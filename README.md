# :-)

For my research

    var filter = { brandId: {$in: [1, 2, 5, 13, 22, 24, 28, 31, 39, 48, 51, 56, 62, 67, 70, 78, 86, 93, 99, 103, 106]} };
    var count = db.cars.count(filter);


    for(var i = 0; i < 300; ++i) {
      var car = db.cars.find(filter).limit(-1).skip( _rand() * count).next()
      db.getSiblingDB('mean').cars.insert(car);}



    mongoexport --host 192.168.219.2:27017 --db mean --collection cars --out cars.json
    mongoimport --db mean --collection cars  --file cars.json


    for(var i = 0; i < 200; ++i)   db.cars.find(filter).limit(-1).skip( _rand() * count);
