import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "WaveChat_LocalData";

export async function loadLocalData() {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);

  if (!raw) {
    return { profiles: [] };
  }

  try {
    return JSON.parse(raw);
  } catch {
    return { profiles: [] };
  }
}

export async function saveLocalData(data) {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export async function createGuestProfile(profileData) {
  const data = await loadLocalData();

  const newProfile = {
    id: "guest_" + Math.random().toString(16).slice(2, 10),
    screenName: profileData.name,
    birthday: profileData.birthday,
    spokenLanguage: profileData.spokenLanguage,
    signLanguage: profileData.signLanguage,
    mode: "guest",
    createdAt: Date.now(),
  };

  data.profiles.push(newProfile);
  await saveLocalData(data);

  return newProfile;
}