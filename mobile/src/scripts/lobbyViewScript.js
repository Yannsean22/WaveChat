import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import styles from "../styles/lobbyViewStyles.css";

import {
  loadLocalData,
  createGuestProfile,
} from "../bin/App_data/LocalData";

export default function LobbyView({ onFinish }) {
  const [step, setStep] = useState("lobby");
  const [profiles, setProfiles] = useState([]);

  const [profile, setProfile] = useState({
    name: "",
    birthday: "",
    spokenLanguage: "en",
    signLanguage: "asl",
  });

  useEffect(() => {
    async function loadProfiles() {
      const data = await loadLocalData();
      setProfiles(data.profiles || []);
    }

    loadProfiles();
  }, []);

  const updateProfile = (key, value) => {
    setProfile((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const next = async () => {
    if (step === "lobby") {
      setStep("name");
    } else if (step === "name") {
      setStep("birthday");
    } else if (step === "birthday") {
      setStep("spoken");
    } else if (step === "spoken") {
      setStep("sign");
    } else if (step === "sign") {
      const newProfile = await createGuestProfile(profile);

      console.log("Saved guest profile:", newProfile);

      setProfiles((prev) => [...prev, newProfile]);
      setStep("lobby");

      setProfile({
        name: "",
        birthday: "",
        spokenLanguage: "en",
        signLanguage: "asl",
      });

      if (onFinish) onFinish(newProfile);
    }
  };

  const back = () => {
    if (step === "name") setStep("lobby");
    else if (step === "birthday") setStep("name");
    else if (step === "spoken") setStep("birthday");
    else if (step === "sign") setStep("spoken");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WaveChat</Text>

      {step === "lobby" && (
        <View style={styles.lobbyWrap}>
          {profiles.length > 0 && (
            <View style={styles.profileSection}>
              <Text style={styles.profileLabel}>Select a profile</Text>

              {profiles.map((p) => (
                <TouchableOpacity
                  key={p.id}
                  style={styles.profileCard}
                  onPress={() => {
                    console.log("Selected profile:", p);
                    if (onFinish) onFinish(p);
                  }}
                >
                  <Text style={styles.profileName}>{p.screenName}</Text>
                  <Text style={styles.profileMeta}>
                    {p.mode === "guest" ? "Guest profile" : "Local profile"} ·{" "}
                    {p.spokenLanguage.toUpperCase()} /{" "}
                    {p.signLanguage.toUpperCase()}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          <View style={styles.buttonWrap}>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => setStep("name")}
            >
              <Text style={styles.primaryButtonText}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => setStep("name")}
            >
              <Text style={styles.secondaryButtonText}>Continue as Guest</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {step === "name" && (
        <View style={styles.card}>
          <TouchableOpacity style={styles.backButton} onPress={back}>
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>

          <Text style={styles.cardTitle}>What should we call you?</Text>

          <TextInput
            style={styles.input}
            placeholder="Screen name"
            placeholderTextColor="#777"
            value={profile.name}
            onChangeText={(v) => updateProfile("name", v)}
          />

          <TouchableOpacity style={styles.primaryButton} onPress={next}>
            <Text style={styles.primaryButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      )}

      {step === "birthday" && (
        <View style={styles.card}>
          <TouchableOpacity style={styles.backButton} onPress={back}>
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>

          <Text style={styles.cardTitle}>Date of Birth</Text>

          <TextInput
            style={styles.input}
            placeholder="MM/DD/YYYY"
            placeholderTextColor="#777"
            value={profile.birthday}
            onChangeText={(v) => updateProfile("birthday", v)}
            keyboardType="numbers-and-punctuation"
          />

          <TouchableOpacity style={styles.primaryButton} onPress={next}>
            <Text style={styles.primaryButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      )}

      {step === "spoken" && (
        <View style={styles.card}>
          <TouchableOpacity style={styles.backButton} onPress={back}>
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>

          <Text style={styles.cardTitle}>Spoken Language</Text>

          <View style={styles.optionGrid}>
            {[
              ["en", "English"],
              ["es", "Spanish"],
              ["fr", "French"],
              ["pt", "Portuguese"],
            ].map(([value, label]) => (
              <TouchableOpacity
                key={value}
                style={[
                  styles.optionButton,
                  profile.spokenLanguage === value &&
                    styles.optionButtonActive,
                ]}
                onPress={() => updateProfile("spokenLanguage", value)}
              >
                <Text
                  style={[
                    styles.optionText,
                    profile.spokenLanguage === value &&
                      styles.optionTextActive,
                  ]}
                >
                  {label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={styles.primaryButton} onPress={next}>
            <Text style={styles.primaryButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      )}

      {step === "sign" && (
        <View style={styles.card}>
          <TouchableOpacity style={styles.backButton} onPress={back}>
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>

          <Text style={styles.cardTitle}>Sign Language</Text>

          <View style={styles.optionGrid}>
            {[
              ["asl", "ASL"],
              ["bsl", "BSL"],
              ["isl", "International Sign"],
            ].map(([value, label]) => (
              <TouchableOpacity
                key={value}
                style={[
                  styles.optionButton,
                  profile.signLanguage === value && styles.optionButtonActive,
                ]}
                onPress={() => updateProfile("signLanguage", value)}
              >
                <Text
                  style={[
                    styles.optionText,
                    profile.signLanguage === value && styles.optionTextActive,
                  ]}
                >
                  {label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={styles.primaryButton} onPress={next}>
            <Text style={styles.primaryButtonText}>Finish</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}