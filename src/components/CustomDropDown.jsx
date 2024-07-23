import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { border, color, spacing } from "../constants/constants";

const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
];

export default function DropdownComponent({ placeholder }) {
  const [value, setValue] = useState(null);

  return (
    <Dropdown
      style={styles.container}
      placeholderStyle={{ color: color.text.secondary }}
      data={data}
      maxHeight={200}
      labelField="label"
      valueField="value"
      placeholder={placeholder}
      value={value}
      onChange={(item) => {
        setValue(item.value);
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 40,
    paddingVertical: spacing.s8,
    paddingHorizontal: spacing.s14,
    marginBottom: spacing.s52,
    borderColor: color.border.secondary,
    borderWidth: 1,
    borderRadius: border.radius.sm,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
});
