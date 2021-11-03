let data = {
    nodes: [
      //MAIN//
      {"key": 0,"id": "Sandwich", "group": "neutral", "polarity": 0, "count": 1004, "range": "6mo", "size": 4985},
      {"key": 1,"id": "Dover", "group": "neutral", "polarity": 0, "count": 10190, "range": "6mo", "size": 31022},
      {"key": 2,"id": "Hythe", "group": "neutral", "polarity": 0, "count": 240, "range": "6mo", "size": 14516},
      {"key": 3,"id": "New Romney", "group": "neutral", "polarity": 0, "count": 40, "range": "6mo", "size": 6996},
      {"key": 4,"id": "Hastings", "group": "neutral", "polarity": 0, "count": 10051, "range": "6mo", "size": 92855},

      //LIMBS//
      {"key": 5,"id": "Lydd", "group": "neutral", "polarity": 0, "count": 422, "range": "6mo", "size": 6567},
      {"key": 6,"id": "Folkestone", "group": "neutral", "polarity": 0, "count": 1446, "range": "6mo", "size": 46698},
      {"key": 7,"id": "Faversham", "group": "neutral", "polarity": 0, "count": 7641, "range": "6mo", "size": 19316},
      {"key": 8,"id": "Margate", "group": "neutral", "polarity": 0, "count": 11179, "range": "6mo", "size": 61223},
      {"key": 9,"id": "Deal", "group": "neutral", "polarity": 0, "count": 9906, "range": "6mo", "size": 30085},
      {"key": 10,"id": "Ramsgate", "group": "neutral", "polarity": 0, "count": 12348, "range": "6mo", "size": 40408},
      {"key": 11,"id": "Tenterden", "group": "neutral", "polarity": 0, "count": 4900, "range": "6mo", "size": 7735},
      
      //ANCIENT//
      {"key": 12,"id": "Rye", "group": "neutral", "polarity": 0, "count": 3987, "range": "6mo", "size": 9041},
      {"key": 13,"id": "Winchelsea", "group": "neutral", "polarity": 0, "count": 76, "range": "6mo", "size": 600},

      //CONNECTED TOWNS//
      //limbs of Hastings
      {"key": 14,"id": "Gillingham", "group": "neutral", "polarity": 0, "count": 46769, "range": "6mo", "size": 104157}, //former Grange
      {"key": 15,"id": "Bekesbourne", "group": "neutral", "polarity": 0, "count": 87, "range": "6mo", "size": 400},
      {"key": 16,"id": "Eastbourne", "group": "neutral", "polarity": 0, "count": 27282, "range": "6mo", "size": 103745},
      {"key": 17,"id": "Pebsham", "group": "neutral", "polarity": 0, "count": 14, "range": "6mo", "size": 1200},
      {"key": 18,"id": "Pevensey", "group": "neutral", "polarity": 0, "count": 635, "range": "6mo", "size": 3153},
      {"key": 19,"id": "Seaford", "group": "neutral", "polarity": 0, "count": 6150, "range": "6mo", "size": 23463},

      //neutrals  "polarity": 0,of Sandwich
      {"key": 20,"id": "Reculver", "group": "neutral", "polarity": 0, "count": 93, "range": "6mo", "size": 8845},
      {"key": 21,"id": "Sarre", "group": "neutral", "polarity": 0, "count": 9, "range": "6mo", "size": 4887},
      {"key": 22,"id": "Fordwich", "group": "neutral", "polarity": 0, "count": 167, "range": "6mo", "size": 381},
      {"key": 23,"id": "Walmer", "group": "neutral", "polarity": 0, "count": 1047, "range": "6mo", "size": 8176},
      {"key": 24,"id": "Stonar", "group": "neutral", "polarity": 0, "count": 1, "range": "6mo", "size": 1321},
      {"key": 25,"id": "Brightlingsea", "group": "neutral", "polarity": 0, "count": 2897, "range": "6mo", "size": 8076},


      //neutrals  "polarity": 0,of Dover
      {"key": 26,"id": "Birchington", "group": "neutral", "polarity": 0, "count": 117, "range": "6mo", "size": 9961},
      // {"key": 0,"id": "St. Johns", "group": "neutral", "polarity": 0, "count": 80000, "range": "6mo", "size": 10},//DEAD; PART OF MARGATE
      // {"key": 0,"id": "St. Peters", "group": "neutral", "polarity": 0, "count": 80000, "range": "6mo", "size": 	7042},
      {"key": 27,"id": "Ringwould", "group": "neutral", "polarity": 0, "count": 97, "range": "6mo", "size": 2030},
      {"key": 28,"id": "Woodchurch", "group": "neutral", "polarity": 0, "count": 114, "range": "6mo", "size": 1903},
      {"key": 29,"id": "Kingsdown", "group": "neutral", "polarity": 0, "count": 792, "range": "6mo", "size": 1764},

      //neutrals  "polarity": 0,of Hythe
      {"key": 30,"id": "West Hythe", "group": "neutral", "polarity": 0, "count": 150, "range": "6mo", "size": 8022}

    ],
    
    
    links: [
      //LINKS PORTS//

      //SADWICH//
      {"source": "Sandwich", "target": "Dover", "value": 3, "distance": 16.31},
      {"source": "Sandwich", "target": "Hythe", "value": 3, "distance": 28.56},
      {"source": "Sandwich", "target": "New Romney", "value": 3, "distance": 42.54},
      {"source": "Sandwich", "target": "Hastings", "value": 3, "distance": 71.05},
    
      //DOVER//
      {"source": "Dover", "target": "Sandwich", "value": 3, "distance": 16.31},
      {"source": "Dover", "target": "Hythe", "value": 3, "distance": 16.83},
      {"source": "Dover", "target": "New Romney", "value": 3, "distance": 30.46},
      {"source": "Dover", "target": "Hastings", "value": 3, "distance": 60.03},

      //HYTHE//
      {"source": "Hythe", "target": "Sandwich", "value": 3, "distance": 28.56},
      {"source": "Hythe", "target": "Dover", "value": 3, "distance": 16.83},
      {"source": "Hythe", "target": "New Romney", "value": 3, "distance": 14.11},
      {"source": "Hythe", "target": "Hastings", "value": 3, "distance": 43.42},

      //NEW ROMNEY//
      {"source": "New Romney", "target": "Sandwich", "value":3, "distance": 42.54},
      {"source": "New Romney", "target": "Dover", "value": 3, "distance": 30.46},
      {"source": "New Romney", "target": "Hythe", "value": 3, "distance": 14.11},
      {"source": "New Romney", "target": "Hastings", "value": 3, "distance": 29.58},

      //HASTINGS//
      {"source": "Hastings", "target": "New Romney", "value": 3, "distance": 29.58},
      {"source": "Hastings", "target": "Hythe", "value": 3, "distance": 43.42},
      {"source": "Hastings", "target": "Dover", "value": 3, "distance": 60.03},
      {"source": "Hastings", "target": "Sandwich", "value": 3, "distance": 71.05}, 


      //AMCINENT CITIES//

      //RYE//
      {"source": "Rye", "target": "Sandwich", "value": 1, "distance": 55.41},
      {"source": "Rye", "target": "Dover", "value": 1, "distance": 44.91},
      {"source": "Rye", "target": "Hythe", "value": 1, "distance": 28.12},
      {"source": "Rye", "target": "New Romney", "value": 1, "distance": 14.91},
      {"source": "Rye", "target": "Hastings", "value": 1, "distance": 15.65},
      
      {"source": "Winchelsea", "target": "Rye", "value": 1, "distance": 3.68},


      //WINCHELSEA//
      {"source": "Winchelsea", "target": "Sandwich", "value": 1, "distance": 58.89},
      {"source": "Winchelsea", "target": "Dover", "value": 1, "distance": 48.00},
      {"source": "Winchelsea", "target": "Hythe", "value": 1, "distance": 31.31},
      {"source": "Winchelsea", "target": "New Romney", "value": 1, "distance": 17.65},
      {"source": "Winchelsea", "target": "Hastings", "value": 1, "distance": 12.17},

      //LIMBS : NEW ROMNEY
      {"source": "Lydd", "target": "New Romney", "value": 1, "distance": 4.38},


      //LIMBS : DOVER
      {"source": "Margate", "target": "Dover", "value":2, "distance": 29.68},
      {"source": "Folkestone", "target": "Dover", "value":2, "distance": 11.4},
      {"source": "Faversham", "target": "Dover", "value":2, "distance": 36.45},
      //
      {"source": "Birchington", "target": "Dover", "value":1, "distance": 27.42},
      {"source": "Ringwould", "target": "Dover", "value":1, "distance": 7.69},
      {"source": "Kingsdown", "target": "Dover", "value":1, "distance": 8.6},
      {"source": "Woodchurch", "target": "Dover", "value":1, "distance": 38.07},


      //LIMBS : HASTINGS
      //
      {"source": "Gillingham", "target": "Hastings", "value": 1, "distance": 59.10},
      {"source": "Bekesbourne", "target": "Hastings", "value": 1, "distance": 59.95},
      {"source": "Eastbourne", "target": "Hastings", "value": 1, "distance": 22.48},
      {"source": "Pebsham", "target": "Hastings", "value": 1, "distance": 4.95},
      {"source": "Pevensey", "target": "Hastings", "value": 1, "distance": 16.81},
      {"source": "Seaford", "target": "Hastings", "value": 1, "distance": 34.40},


      //LIMBS : SANDWICH
      {"source": "Deal", "target": "Sandwich", "value":2, "distance": 7.32},
      { "source": "Ramsgate", "target": "Sandwich", "value":2, "distance": 7.35 },

      //
      {"source": "Reculver", "target": "Sandwich", "value": 1, "distance": 15.07},
      {"source": "Sarre", "target": "Sandwich", "value": 1, "distance": 9.91},
      {"source": "Fordwich", "target": "Sandwich", "value": 1, "distance": 14.92},
      {"source": "Walmer", "target": "Sandwich", "value": 1, "distance": 8.97},
      {"source": "Stonar", "target": "Sandwich", "value": 1, "distance": 2.43},
      {"source": "Brightlingsea", "target": "Sandwich", "value": 1, "distance": 63.34},
      


      //LIMBS : HYTHE
      {"source": "West Hythe", "target": "Hythe", "value": 1, "distance": 4.47},


      //LIMBS : RYE
      { "source": "Tenterden", "target": "Rye", "value":2, "distance": 13.65 },


      


    ]
  }

  export default data;