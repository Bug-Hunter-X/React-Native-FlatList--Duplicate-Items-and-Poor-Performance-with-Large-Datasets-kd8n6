```javascript
// bug.js
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';

const data = Array.from({ length: 1000 }, (_, i) => ({ id: i, text: `Item ${i}` }));

const App = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Text>{item.text}</Text>}
    />
  );
};

export default App;

// bugSolution.js
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';

const data = Array.from({ length: 1000 }, (_, i) => ({ id: i, text: `Item ${i}` }));

const App = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Text>{item.text}</Text>}
    />
  );
};

export default App;
```