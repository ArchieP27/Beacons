export function generateRandomName() {
  const animals = ["Fox", "Owl", "Panda", "Tiger", "Dolphin", "Wolf", "Hawk"];
  const adjectives = ["Bright", "Silent", "Brave", "Misty", "Lively", "Lucky"];
  const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
  const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNum = Math.floor(100 + Math.random() * 900);
  return `${randomAdj}${randomAnimal}${randomNum}`;
}
