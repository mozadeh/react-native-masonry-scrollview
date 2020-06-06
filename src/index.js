var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
function generateMasonryGrid(data, columns) {
    return data.reduce((collection, child, childIndex) => {
        const itemIndex = child.column
        //const itemIndex = childIndex % columns;
        if (collection[itemIndex]) {
            collection[itemIndex].push(child.component);
        }
        else {
            collection[itemIndex] = [];
            collection[itemIndex].push(child.component);
        }
        return collection;
    }, []);
}
const RNMasonryScrollView = (_a) => {
    var { children = [], columns = 2, columnStyle = null, oddColumnStyle = null, evenColumnStyle = null, horizontal } = _a, otherProps = __rest(_a, ["children", "columns", "columnStyle", "oddColumnStyle", "evenColumnStyle", "horizontal"]);
    const masonryGrid = generateMasonryGrid(children, columns);
    return (<ScrollView contentContainerStyle={horizontal ? styles.horizontalColumnStyle : styles.verticalColumnStyle} horizontal={horizontal} {...otherProps}>
      {masonryGrid.map((column, columnIndex) => {
        return (<View key={columnIndex} style={[
            !horizontal
                ? styles.horizontalColumnStyle
                : styles.verticalColumnStyle,
            columnStyle,
            columnIndex % 2 === 0 ? evenColumnStyle : oddColumnStyle
        ]}>
            {column.map(item => item)}
          </View>);
    })}
    </ScrollView>);
};
const styles = StyleSheet.create({
    verticalColumnStyle: { flexDirection: "row" },
    horizontalColumnStyle: { flexDirection: "column" }
});
export default RNMasonryScrollView;
