export const STATE_NAMES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California",
  "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
  "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
  "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
  "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

interface HintMap {
  first: string;  // Obscure fact or broad hint
  last: string;   // Dead giveaway hint
  [key: string]: string;  // Map from incorrect guesses to comparative hints
}

export interface StateData {
  name: string;
  hints: HintMap;
}

export const STATES: StateData[] = [
  {
    name: "California",
    hints: {
      first: "This state has an extinct animal on its flag",
      last: "This state is known as the Golden State",
      "Alabama": "Alabama and this state have major ports, but this state has 8 times more tech companies",
      "Alaska": "Alaska and this state have significant fishing industries, but this state has 54 times more people",
      "Arizona": "Arizona and this state share a border, but this state has 6 times more tech jobs",
      "Arkansas": "Arkansas and this state have significant agriculture, but this state has 13 times more people",
      "Colorado": "Colorado and this state have major ski resorts, but this state has 7 times more tech companies",
      "Connecticut": "Connecticut and this state have major defense contractors, but this state has 11 times more people",
      "Delaware": "Delaware and this state have major corporate presence, but this state has 40 times more people",
      "Florida": "Florida and this state have major theme parks, but this state has 3 times more tech jobs",
      "Georgia": "Georgia and this state have major film industries, but this state has 4 times more tech companies",
      "Hawaii": "Hawaii and this state have significant tourism, but this state has 27 times more people",
      "Idaho": "Idaho and this state have significant agriculture, but this state has 22 times more people",
      "Illinois": "Illinois and this state have major cities, but this state has 3 times more tech jobs",
      "Indiana": "Indiana and this state have major manufacturing, but this state has 6 times more tech companies",
      "Iowa": "Iowa and this state have significant agriculture, but this state has 12 times more people",
      "Kansas": "Kansas and this state have significant agriculture, but this state has 13 times more people",
      "Kentucky": "Kentucky and this state have major automotive industries, but this state has 9 times more tech jobs",
      "Louisiana": "Louisiana and this state have major ports, but this state has 8 times more tech companies",
      "Maine": "Maine and this state have significant coastlines, but this state has 29 times more people",
      "Maryland": "Maryland and this state have major research centers, but this state has 6 times more tech jobs",
      "Massachusetts": "Massachusetts and this state have major tech sectors, but this state has 6 times more people",
      "Michigan": "Michigan and this state have major tech sectors, but this state has 4 times more startups",
      "Minnesota": "Minnesota and this state have major medical industries, but this state has 7 times more tech jobs",
      "Mississippi": "Mississippi and this state have major ports, but this state has 13 times more people",
      "Missouri": "Missouri and this state have major aerospace sectors, but this state has 6 times more tech jobs",
      "Montana": "Montana and this state have national parks, but this state has 39 times more people",
      "Nebraska": "Nebraska and this state have significant agriculture, but this state has 20 times more people",
      "Nevada": "Nevada and this state share a border, but this state has 13 times more people",
      "New Hampshire": "New Hampshire and this state have major tech presence, but this state has 29 times more people",
      "New Jersey": "New Jersey and this state have major ports, but this state has 4 times more tech jobs",
      "New Mexico": "New Mexico and this state have major research labs, but this state has 19 times more people",
      "New York": "New York and this state have major entertainment industries, but this state has twice as many tech jobs",
      "North Carolina": "North Carolina and this state have major research centers, but this state has 4 times more tech jobs",
      "North Dakota": "North Dakota and this state have significant agriculture, but this state has 54 times more people",
      "Ohio": "Ohio and this state have major manufacturing, but this state has 3 times more tech jobs",
      "Oklahoma": "Oklahoma and this state have significant agriculture, but this state has 10 times more people",
      "Oregon": "Oregon and this state share a border, but this state has 10 times more people",
      "Pennsylvania": "Pennsylvania and this state have major tech sectors, but this state has 3 times more startups",
      "Rhode Island": "Rhode Island and this state have significant coastlines, but this state has 37 times more people",
      "South Carolina": "South Carolina and this state have major manufacturing, but this state has 8 times more tech jobs",
      "South Dakota": "South Dakota and this state have significant tourism, but this state has 45 times more people",
      "Tennessee": "Tennessee and this state have major entertainment industries, but this state has 6 times more tech jobs",
      "Texas": "Texas and this state have major tech hubs, but this state has twice as many startups",
      "Utah": "Utah and this state have major tech sectors, but this state has 12 times more people",
      "Vermont": "Vermont and this state have significant tourism, but this state has 62 times more people",
      "Virginia": "Virginia and this state have major tech sectors, but this state has 5 times more startups",
      "Washington": "Washington and this state have major tech sectors, but this state has 5 times more people",
      "West Virginia": "West Virginia and this state have significant tourism, but this state has 21 times more people",
      "Wisconsin": "Wisconsin and this state have significant manufacturing, but this state has 7 times more tech jobs",
      "Wyoming": "Wyoming and this state have national parks, but this state has 68 times more people"
    }
  },
  {
    name: "New York",
    hints: {
      first: "This state's highest point is named after a US Vice President",
      last: "This state has the Statue of Liberty",
      "Alabama": "Alabama and this state have major ports, but this state has 4 times more financial firms",
      "Alaska": "Alaska and this state have significant fishing industries, but this state has 27 times more people",
      "Arizona": "Arizona and this state have major financial sectors, but this state has 3 times more banks",
      "Arkansas": "Arkansas and this state have significant agriculture, but this state has 6 times more people",
      "California": "California and this state have major entertainment industries, but this state has twice as many theaters",
      "Colorado": "Colorado and this state have major financial sectors, but this state has 4 times more banks",
      "Connecticut": "Connecticut and this state have major financial sectors, but this state has 5 times more banks",
      "Delaware": "Delaware and this state have major corporate presence, but this state has 9 times more people",
      "Florida": "Florida and this state have major tourism, but this state has twice as many museums",
      "Georgia": "Georgia and this state have major airports, but this state has 3 times more international flights",
      "Hawaii": "Hawaii and this state have significant tourism, but this state has 14 times more people",
      "Idaho": "Idaho and this state have significant agriculture, but this state has 12 times more people",
      "Illinois": "Illinois and this state have major financial centers, but this state has twice as many banks",
      "Indiana": "Indiana and this state have significant manufacturing, but this state has 3 times more people",
      "Iowa": "Iowa and this state have significant agriculture, but this state has 6 times more people",
      "Kansas": "Kansas and this state have significant agriculture, but this state has 7 times more people",
      "Kentucky": "Kentucky and this state have major horse racing, but this state has 4 times more people",
      "Louisiana": "Louisiana and this state have major ports, but this state has 4 times more international trade",
      "Maine": "Maine and this state have significant coastlines, but this state has 15 times more people",
      "Maryland": "Maryland and this state have major seaports, but this state has 3 times more international trade",
      "Massachusetts": "Massachusetts and this state have major financial sectors, but this state has twice as many banks",
      "Michigan": "Michigan and this state have major financial sectors, but this state has twice as many banks",
      "Minnesota": "Minnesota and this state have major financial sectors, but this state has 3 times more banks",
      "Mississippi": "Mississippi and this state have major ports, but this state has 7 times more people",
      "Missouri": "Missouri and this state have major financial sectors, but this state has 3 times more banks",
      "Montana": "Montana and this state have significant tourism, but this state has 19 times more people",
      "Nebraska": "Nebraska and this state have significant agriculture, but this state has 10 times more people",
      "Nevada": "Nevada and this state have major tourism, but this state has twice as many hotels",
      "New Hampshire": "New Hampshire and this state have significant tourism, but this state has 15 times more people",
      "New Jersey": "New Jersey and this state share a border, but this state has twice as many financial firms",
      "New Mexico": "New Mexico and this state have significant research labs, but this state has 10 times more people",
      "North Carolina": "North Carolina and this state have major banking centers, but this state has twice as many financial firms",
      "North Dakota": "North Dakota and this state have significant agriculture, but this state has 27 times more people",
      "Ohio": "Ohio and this state have major manufacturing, but this state has twice as many financial firms",
      "Oklahoma": "Oklahoma and this state have significant energy sectors, but this state has 5 times more people",
      "Oregon": "Oregon and this state have significant coastlines, but this state has 5 times more people",
      "Pennsylvania": "Pennsylvania and this state share a border, but this state has twice as many financial firms",
      "Rhode Island": "Rhode Island and this state have significant coastlines, but this state has 18 times more people",
      "South Carolina": "South Carolina and this state have major ports, but this state has 4 times more international trade",
      "South Dakota": "South Dakota and this state have significant tourism, but this state has 23 times more people",
      "Tennessee": "Tennessee and this state have major entertainment industries, but this state has 3 times more theaters",
      "Texas": "Texas and this state have major financial centers, but this state has twice as many banks",
      "Utah": "Utah and this state have major financial sectors, but this state has 6 times more people",
      "Vermont": "Vermont and this state share a border, but this state has 31 times more people",
      "Virginia": "Virginia and this state have major ports, but this state has twice as many financial firms",
      "Washington": "Washington and this state have major financial sectors, but this state has 3 times more banks",
      "West Virginia": "West Virginia and this state have significant tourism, but this state has 11 times more people",
      "Wisconsin": "Wisconsin and this state have significant manufacturing, but this state has 3 times more people",
      "Wyoming": "Wyoming and this state have significant tourism, but this state has 35 times more people"
    }
  },
  {
    name: "Texas",
    hints: {
      first: "This state's name comes from a Caddo word meaning 'friends' or 'allies'",
      last: "This state's flag has a lone star",
      "Alabama": "Alabama and this state have space centers, but this state launches 3 times more rockets annually",
      "Alaska": "Alaska and this state produce oil, but this state has 42 times more people",
      "Arizona": "Arizona and this state have major deserts, but this state has twice as many professional sports teams",
      "Arkansas": "Arkansas and this state raise cattle, but this state has 5 times more ranches",
      "California": "California and this state have major tech hubs, but this state produces 3 times more energy",
      "Colorado": "Colorado and this state have major cattle ranches, but this state has 5 times more livestock",
      "Connecticut": "Connecticut and this state have major defense contractors, but this state has 7 times more military bases",
      "Delaware": "Delaware and this state have major corporate presence, but this state has 30 times more land area",
      "Florida": "Florida and this state have major space programs, but this state has twice as many cattle",
      "Georgia": "Georgia and this state have major airports, but this state has 3 times more wind power",
      "Hawaii": "Hawaii and this state have popular beaches, but this state has 45 times more land area",
      "Idaho": "Idaho and this state have significant agriculture, but this state has 17 times more cattle",
      "Illinois": "Illinois and this state have major cities, but this state has 3 times more renewable energy",
      "Indiana": "Indiana and this state have major auto plants, but this state has 4 times more tech companies",
      "Iowa": "Iowa and this state have wind farms, but this state produces 3 times more renewable energy",
      "Kansas": "Kansas and this state have cattle ranches, but this state has 3 times more oil production",
      "Kentucky": "Kentucky and this state have major horse breeding, but this state has 6 times more ranches",
      "Louisiana": "Louisiana and this state have major ports, but this state has 5 times more wind power",
      "Maine": "Maine and this state have significant coastlines, but this state has 23 times more people",
      "Maryland": "Maryland and this state have major research centers, but this state has 4 times more tech jobs",
      "Massachusetts": "Massachusetts and this state have major tech sectors, but this state has twice as much renewable energy",
      "Michigan": "Michigan and this state have major manufacturing, but this state has twice as much renewable energy",
      "Minnesota": "Minnesota and this state have major medical centers, but this state has 5 times more hospitals",
      "Mississippi": "Mississippi and this state have major ports, but this state has 8 times more tech companies",
      "Missouri": "Missouri and this state have significant aerospace sectors, but this state has 4 times more tech jobs",
      "Montana": "Montana and this state have cattle ranches, but this state has 27 times more people",
      "Nebraska": "Nebraska and this state have major cattle industries, but this state has 14 times more tech jobs",
      "Nevada": "Nevada and this state have major gaming industries, but this state has 9 times more people",
      "New Hampshire": "New Hampshire and this state have significant manufacturing, but this state has 22 times more people",
      "New Jersey": "New Jersey and this state have major oil refineries, but this state has 4 times more land area",
      "New Mexico": "New Mexico and this state have major oil fields, but this state has 13 times more people",
      "New York": "New York and this state have major cities, but this state has 3 times more renewable energy",
      "North Carolina": "North Carolina and this state have major banking centers, but this state has twice as many tech jobs",
      "North Dakota": "North Dakota and this state produce oil, but this state has 37 times more people",
      "Ohio": "Ohio and this state have major manufacturing, but this state has twice as much renewable energy",
      "Oklahoma": "Oklahoma and this state produce oil, but this state has 7 times more wind power",
      "Oregon": "Oregon and this state have major tech presence, but this state has 7 times more cattle",
      "Pennsylvania": "Pennsylvania and this state have major energy industries, but this state has twice as many tech jobs",
      "Rhode Island": "Rhode Island and this state have ocean access, but this state has 27 times more people",
      "South Carolina": "South Carolina and this state have major auto plants, but this state has 5 times more tech jobs",
      "South Dakota": "South Dakota and this state have significant tourism, but this state has 33 times more people",
      "Tennessee": "Tennessee and this state have major music scenes, but this state has 4 times more tech jobs",
      "Utah": "Utah and this state have major tech sectors, but this state has 8 times more people",
      "Vermont": "Vermont and this state have dairy farms, but this state has 45 times more people",
      "Virginia": "Virginia and this state have major military presence, but this state has 3 times more bases",
      "Washington": "Washington and this state have major tech sectors, but this state has 4 times more cattle",
      "West Virginia": "West Virginia and this state have energy industries, but this state has 14 times more tech jobs",
      "Wisconsin": "Wisconsin and this state have significant manufacturing, but this state has 5 times more tech jobs",
      "Wyoming": "Wyoming and this state have major energy industries, but this state has 49 times more people"
    }
  },
  {
    name: "Florida",
    hints: {
      first: "This state gets struck by hurricanes annually",
      last: "This state has the southernmost point in the continental US",
      "Alabama": "Alabama and this state have beaches on the Gulf of Mexico, but this state has twice as many tourists",
      "Alaska": "Alaska and this state have significant fishing industries, but this state has 26 times more people",
      "Arizona": "Arizona and this state have major retirement communities, but this state has 3 times more theme parks",
      "Arkansas": "Arkansas and this state have significant agriculture, but this state has 7 times more citrus farms",
      "California": "California and this state have major theme parks, but this state has twice as many beaches",
      "Colorado": "Colorado and this state have major tourism, but this state has 3 times more golf courses",
      "Connecticut": "Connecticut and this state have major insurance companies, but this state has 5 times more retirees",
      "Delaware": "Delaware and this state have no state income tax, but this state has 8 times more coastline",
      "Georgia": "Georgia and this state have major ports, but this state has 3 times more beaches",
      "Hawaii": "Hawaii and this state have major tourism industries, but this state has 14 times more people",
      "Idaho": "Idaho and this state have significant agriculture, but this state has 12 times more people",
      "Illinois": "Illinois and this state have major tourist cities, but this state has 3 times more beaches",
      "Indiana": "Indiana and this state have major auto racing events, but this state has 4 times more theme parks",
      "Iowa": "Iowa and this state have significant agriculture, but this state has 6 times more people",
      "Kansas": "Kansas and this state have major aerospace industries, but this state has 7 times more tourists",
      "Kentucky": "Kentucky and this state have major horse racing, but this state has 4 times more golf courses",
      "Louisiana": "Louisiana and this state have major ports, but this state has 4 times more tourists",
      "Maine": "Maine and this state have significant coastlines, but this state has 15 times more people",
      "Maryland": "Maryland and this state have major ports, but this state has 3 times more beaches",
      "Massachusetts": "Massachusetts and this state have major tourism, but this state has 3 times more theme parks",
      "Michigan": "Michigan and this state have significant coastlines, but this state has twice as many tourists",
      "Minnesota": "Minnesota and this state have major tourism, but this state has 5 times more beaches",
      "Mississippi": "Mississippi and this state have Gulf Coast beaches, but this state has 6 times more tourists",
      "Missouri": "Missouri and this state have major tourism, but this state has 4 times more theme parks",
      "Montana": "Montana and this state have significant tourism, but this state has 19 times more people",
      "Nebraska": "Nebraska and this state have major insurance companies, but this state has 10 times more people",
      "Nevada": "Nevada and this state have major tourism, but this state has twice as many international visitors",
      "New Hampshire": "New Hampshire and this state have no state income tax, but this state has 13 times more people",
      "New Jersey": "New Jersey and this state have major tourism, but this state has twice as many beaches",
      "New Mexico": "New Mexico and this state have significant aerospace industries, but this state has 10 times more people",
      "New York": "New York and this state have major tourism, but this state has 3 times more theme parks",
      "North Carolina": "North Carolina and this state have major beaches, but this state has twice as many tourists",
      "North Dakota": "North Dakota and this state have significant agriculture, but this state has 25 times more people",
      "Ohio": "Ohio and this state have major theme parks, but this state has 3 times more beaches",
      "Oklahoma": "Oklahoma and this state have significant agriculture, but this state has 5 times more people",
      "Oregon": "Oregon and this state have significant coastlines, but this state has 5 times more people",
      "Pennsylvania": "Pennsylvania and this state have major tourism, but this state has twice as many theme parks",
      "Rhode Island": "Rhode Island and this state have significant coastlines, but this state has 18 times more people",
      "South Carolina": "South Carolina and this state have major beaches, but this state has 3 times more tourists",
      "South Dakota": "South Dakota and this state have significant tourism, but this state has 18 times more people",
      "Tennessee": "Tennessee and this state have major tourism, but this state has twice as many theme parks",
      "Texas": "Texas and this state have major space programs, but this state has 3 times more beaches",
      "Utah": "Utah and this state have major tourism, but this state has 3 times more theme parks",
      "Vermont": "Vermont and this state have significant tourism, but this state has 31 times more people",
      "Virginia": "Virginia and this state have major beaches, but this state has twice as many tourists",
      "Washington": "Washington and this state have significant coastlines, but this state has 3 times more beaches",
      "West Virginia": "West Virginia and this state have significant tourism, but this state has 11 times more people",
      "Wisconsin": "Wisconsin and this state have significant tourism, but this state has 3 times more theme parks",
      "Wyoming": "Wyoming and this state have significant tourism, but this state has 35 times more people"
    }
  },
  {
    name: "Ohio",
    hints: {
      first: "This state's name comes from an Iroquois word meaning 'great river'",
      last: "This state is home to the Rock and Roll Hall of Fame",
      "Alabama": "Alabama and this state have major manufacturing, but this state has twice as many factories",
      "Alaska": "Alaska and this state have significant mining, but this state has 17 times more people",
      "Arizona": "Arizona and this state have major universities, but this state has 3 times more manufacturing jobs",
      "Arkansas": "Arkansas and this state have significant manufacturing, but this state has 3 times more factories",
      "California": "California and this state have major tech sectors, but this state has twice as many manufacturing jobs",
      "Colorado": "Colorado and this state have major aerospace, but this state has 3 times more manufacturing",
      "Connecticut": "Connecticut and this state have major manufacturing, but this state has twice as many factories",
      "Delaware": "Delaware and this state have major chemical industries, but this state has 12 times more people",
      "Florida": "Florida and this state have major tourism, but this state has twice as many manufacturing jobs",
      "Georgia": "Georgia and this state have major manufacturing, but this state has 3 times more factories",
      "Hawaii": "Hawaii and this state have significant tourism, but this state has 11 times more manufacturing",
      "Idaho": "Idaho and this state have significant agriculture, but this state has 7 times more people",
      "Illinois": "Illinois and this state have major manufacturing, but this state has twice as many factories",
      "Indiana": "Indiana and this state share a border, but this state has twice as many manufacturing jobs",
      "Iowa": "Iowa and this state have significant manufacturing, but this state has 4 times more factories",
      "Kansas": "Kansas and this state have significant agriculture, but this state has 4 times more manufacturing",
      "Kentucky": "Kentucky and this state share a border, but this state has twice as many manufacturing jobs",
      "Louisiana": "Louisiana and this state have major ports, but this state has 3 times more manufacturing",
      "Maine": "Maine and this state have significant manufacturing, but this state has 9 times more factories",
      "Maryland": "Maryland and this state have significant manufacturing, but this state has twice as many factories",
      "Massachusetts": "Massachusetts and this state have major manufacturing, but this state has 3 times more factories",
      "Michigan": "Michigan and this state share a border, but this state has twice as many manufacturing jobs",
      "Minnesota": "Minnesota and this state have major manufacturing, but this state has twice as many factories",
      "Mississippi": "Mississippi and this state have major manufacturing, but this state has 3 times more factories",
      "Missouri": "Missouri and this state have major manufacturing, but this state has twice as many factories",
      "Montana": "Montana and this state have significant mining, but this state has 11 times more people",
      "Nebraska": "Nebraska and this state have significant agriculture, but this state has 6 times more manufacturing",
      "Nevada": "Nevada and this state have significant mining, but this state has 4 times more people",
      "New Hampshire": "New Hampshire and this state have significant manufacturing, but this state has 9 times more people",
      "New Jersey": "New Jersey and this state have major manufacturing, but this state has twice as many factories",
      "New Mexico": "New Mexico and this state have significant research labs, but this state has 6 times more people",
      "New York": "New York and this state have major manufacturing, but this state has 3 times more factories",
      "North Carolina": "North Carolina and this state have major manufacturing, but this state has twice as many factories",
      "North Dakota": "North Dakota and this state have significant agriculture, but this state has 13 times more people",
      "Oklahoma": "Oklahoma and this state have significant manufacturing, but this state has twice as many factories",
      "Oregon": "Oregon and this state have significant manufacturing, but this state has 3 times more factories",
      "Pennsylvania": "Pennsylvania and this state share a border, but this state has twice as many manufacturing jobs",
      "Rhode Island": "Rhode Island and this state have significant manufacturing, but this state has 12 times more people",
      "South Carolina": "South Carolina and this state have major manufacturing, but this state has twice as many factories",
      "South Dakota": "South Dakota and this state have significant agriculture, but this state has 14 times more people",
      "Tennessee": "Tennessee and this state have major manufacturing, but this state has twice as many factories",
      "Texas": "Texas and this state have major manufacturing, but this state has 3 times more factories per capita",
      "Utah": "Utah and this state have significant manufacturing, but this state has 4 times more people",
      "Vermont": "Vermont and this state have significant manufacturing, but this state has 19 times more people",
      "Virginia": "Virginia and this state have major manufacturing, but this state has twice as many factories",
      "Washington": "Washington and this state have major manufacturing, but this state has twice as many factories",
      "West Virginia": "West Virginia and this state share a border, but this state has 7 times more people",
      "Wisconsin": "Wisconsin and this state have major manufacturing, but this state has twice as many factories",
      "Wyoming": "Wyoming and this state have significant mining, but this state has 22 times more people"
    }
  },
  {
    name: "Michigan",
    hints: {
      first: "This state's northern border was disputed in the 'Toledo War' of 1835",
      last: "This state borders four of the five Great Lakes",
      "Alabama": "Alabama and this state have major auto plants, but this state has 3 times more car manufacturing",
      "Alaska": "Alaska and this state have significant freshwater resources, but this state has 7 times more people",
      "Arizona": "Arizona and this state have major universities, but this state has twice as many auto plants",
      "Arkansas": "Arkansas and this state have significant manufacturing, but this state has 4 times more factories",
      "California": "California and this state have major tech sectors, but this state has twice as many auto plants",
      "Colorado": "Colorado and this state have major winter sports, but this state has 3 times more lakes",
      "Connecticut": "Connecticut and this state have major manufacturing, but this state has 3 times more auto plants",
      "Delaware": "Delaware and this state have major chemical industries, but this state has 9 times more people",
      "Florida": "Florida and this state have significant coastlines, but this state has twice as many lakes",
      "Georgia": "Georgia and this state have major auto plants, but this state produces twice as many vehicles",
      "Hawaii": "Hawaii and this state have significant tourism, but this state has 14 times more manufacturing jobs",
      "Idaho": "Idaho and this state have significant mining, but this state has 5 times more people",
      "Illinois": "Illinois and this state have major manufacturing, but this state has twice as many auto plants",
      "Indiana": "Indiana and this state have major auto industries, but this state produces 3 times more vehicles",
      "Iowa": "Iowa and this state have significant manufacturing, but this state has 3 times more factories",
      "Kansas": "Kansas and this state have significant agriculture, but this state has 3 times more manufacturing",
      "Kentucky": "Kentucky and this state have major auto plants, but this state produces twice as many vehicles",
      "Louisiana": "Louisiana and this state have major ports, but this state has twice as many manufacturing jobs",
      "Maine": "Maine and this state border Canada, but this state has 8 times more people",
      "Maryland": "Maryland and this state have significant manufacturing, but this state has twice as many auto plants",
      "Massachusetts": "Massachusetts and this state have major universities, but this state has 3 times more auto plants",
      "Minnesota": "Minnesota and this state border the Great Lakes, but this state has twice as many auto plants",
      "Mississippi": "Mississippi and this state have major auto plants, but this state produces 4 times more vehicles",
      "Missouri": "Missouri and this state have major auto plants, but this state produces 3 times more vehicles",
      "Montana": "Montana and this state have significant mining, but this state has 10 times more people",
      "Nebraska": "Nebraska and this state have significant agriculture, but this state has 5 times more manufacturing",
      "Nevada": "Nevada and this state have significant mining, but this state has 3 times more people",
      "New Hampshire": "New Hampshire and this state have significant winter sports, but this state has 8 times more people",
      "New Jersey": "New Jersey and this state have major manufacturing, but this state has twice as many auto plants",
      "New Mexico": "New Mexico and this state have significant research labs, but this state has 5 times more people",
      "New York": "New York and this state have major manufacturing, but this state has 3 times more auto plants",
      "North Carolina": "North Carolina and this state have major manufacturing, but this state has twice as many auto plants",
      "North Dakota": "North Dakota and this state have significant agriculture, but this state has 12 times more people",
      "Ohio": "Ohio and this state have major auto industries, but this state produces twice as many vehicles",
      "Oklahoma": "Oklahoma and this state have significant manufacturing, but this state has twice as many factories",
      "Oregon": "Oregon and this state have significant forests, but this state has twice as many manufacturing jobs",
      "Pennsylvania": "Pennsylvania and this state have major manufacturing, but this state has twice as many auto plants",
      "Rhode Island": "Rhode Island and this state have significant manufacturing, but this state has 10 times more people",
      "South Carolina": "South Carolina and this state have major auto plants, but this state produces 3 times more vehicles",
      "South Dakota": "South Dakota and this state have significant agriculture, but this state has 11 times more people",
      "Tennessee": "Tennessee and this state have major auto plants, but this state produces twice as many vehicles",
      "Texas": "Texas and this state have major manufacturing, but this state has 3 times more auto plants",
      "Utah": "Utah and this state have significant mining, but this state has 3 times more people",
      "Vermont": "Vermont and this state have significant winter sports, but this state has 17 times more people",
      "Virginia": "Virginia and this state have major manufacturing, but this state has twice as many auto plants",
      "Washington": "Washington and this state have major manufacturing, but this state has twice as many auto plants",
      "West Virginia": "West Virginia and this state have significant manufacturing, but this state has 5 times more people",
      "Wisconsin": "Wisconsin and this state border the Great Lakes, but this state has twice as many auto plants",
      "Wyoming": "Wyoming and this state have significant mining, but this state has 18 times more people"
    }
  }
];

export function getRandomState(): StateData {
  return STATES[Math.floor(Math.random() * STATES.length)];
}

export function isValidStateName(name: string): boolean {
  return STATE_NAMES.some(state => 
    state.toLowerCase() === name.trim().toLowerCase()
  );
}

export function getNextHint(state: StateData, previousGuess: string | null, hintNumber: number): string {
  if (hintNumber === 0) return state.hints.first;
  if (hintNumber === 3) return state.hints.last;
  
  // If there's a previous guess and we have a specific hint for it, use that
  if (previousGuess && state.hints[previousGuess]) {
    return state.hints[previousGuess];
  }
  
  // If we don't have a specific hint for the guess, return a generic comparative hint
  const genericHints = {
    "California": "This state has different geography and climate than California",
    "Texas": "This state differs significantly in size and climate from Texas",
    "Florida": "This state has a very different climate and geography than Florida",
    "New York": "This state has different weather patterns and geography than New York"
  };
  
  return genericHints[previousGuess as keyof typeof genericHints] || "Keep guessing to learn more about this state";
}
