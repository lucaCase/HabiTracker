export async function isChromeStorageAvailable(): Promise<boolean> {
  try {
    await chrome.storage.local.get(null);
    return true;
  } catch (error) {
    return false;
  }
}
