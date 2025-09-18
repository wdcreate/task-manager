export const readLocal = <T>(key: string, fallback: T): T => {
  try {
    const raw = localStorage.getItem(key);

    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch (e) {
    console.error("readLocal error", e);
    return fallback;
  }
};

export const writeLocal = (key: string, value: unknown): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error("writeLocal error", e);
  }
};
