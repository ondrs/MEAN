# :-)

For my research

Export/import database

```
mongoexport --host 192.168.219.2:27017 --db monitoring --collection vehicles --out vehicles.json
mongoimport --db monitoring --collection vehicles  --file vehicles.json
```

Execute mongo and select db monitoring
```
mongo monitoring
```

Select and copy random 300 vehicles

- brands: Alfa, Audi, BMW, Skoda
- made year >= 2012
- price >= 500000

```javascript
var filter = {
    "brand._id": { $in: [1, 2, 5, 93] },
    "date_made_year": { $gte: 2012 },
    "price": { $gte: 500000 }
};

var count = db.vehicles.count(filter);

for(var i = 0; i < 300; ++i) {
  var vehicle = db.vehicles.find(filter).limit(-1).skip( _rand() * count).next();
  db.getSiblingDB('mean').vehicles.insert(vehicle); }
```
