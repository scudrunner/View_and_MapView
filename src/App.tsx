import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import FlightItem from "./FlightCard";
import MyMap from "./MyMap";

export default function App() {
  return (
    <View>
      <View>
        {FlightItem()}
        {FlightItem()}
        <MyMap />
      </View>
    </View>
  );
}
