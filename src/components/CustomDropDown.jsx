import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { border, color, spacing } from "../constants/constants";

export default function CustomDropDown({ placeholder, data, onChange }) {
  const [value, setValue] = useState("");

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
      onChange={(selected) => {
        setValue(selected.value);
        onChange(selected.value);
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
