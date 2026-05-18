import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  Animated,
  ActivityIndicator,
} from "react-native";

import styles from "./boot.css.js";

export default function Boot({ onFinish }) {
  const scaleAnim = useRef(new Animated.Value(0.55)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;
  const titleOpacity = useRef(new Animated.Value(0.75)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.delay(500),

      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 1600,
          useNativeDriver: true,
        }),
        Animated.timing(titleOpacity, {
          toValue: 1,
          duration: 1600,
          useNativeDriver: true,
        }),
      ]),

      Animated.delay(2200),

      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start(() => {
      if (onFinish) onFinish();
    });
  }, []);

  return (
    <Animated.View style={[styles.boot, { opacity: opacityAnim }]}>
      <Animated.Text
        style={[
          styles.title,
          {
            transform: [{ scale: scaleAnim }],
            opacity: titleOpacity,
          },
        ]}
      >
        WAVECHAT
      </Animated.Text>

      <ActivityIndicator
        style={styles.spinner}
        size="large"
        color="#4f7cff"
      />
    </Animated.View>
  );
}