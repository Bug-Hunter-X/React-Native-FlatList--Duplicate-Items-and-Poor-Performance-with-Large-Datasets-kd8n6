# React Native FlatList Performance Issue

This repository demonstrates a common performance issue encountered when using the `FlatList` component in React Native with large datasets. The problem involves duplicate items and slow scrolling due to incorrect key handling within the `renderItem` function.

## Bug Reproduction

1. Clone the repository.
2. Run `npm install`.
3. Run the application on an emulator or device.
4. Scroll through the list; notice the slow performance and potentially duplicated items.

## Solution

The solution involves correctly implementing the `keyExtractor` function to provide unique keys for each item in the dataset. This ensures that `FlatList` efficiently updates and renders only necessary items.