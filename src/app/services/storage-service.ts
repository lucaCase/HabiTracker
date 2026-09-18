import { Service } from '@angular/core';
import { isChromeStorageAvailable } from '../utils/storage.utils';

@Service()
export class StorageService {
  constructor() {}

  async getStorageItem(key: string): Promise<string | null> {
    if (!(await isChromeStorageAvailable())) {
      return localStorage.getItem(key);
    }
    return chrome.storage.local.get(key);
  }

  async setChromeStorageItem(key: string, value: any): Promise<void> {
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }

    if (!(await isChromeStorageAvailable())) {
      localStorage.setItem(key, value);
    } else {
      await chrome.storage.local.set({ [key]: value });
    }
  }

  async clearChromeStorage(): Promise<void> {
    if (!(await isChromeStorageAvailable())) {
      localStorage.clear();
    } else {
      await chrome.storage.local.clear();
    }
  }

  async removeChromeStorageItem(key: string): Promise<void> {
    if (!(await isChromeStorageAvailable())) {
      localStorage.removeItem(key);
    } else {
      await chrome.storage.local.remove(key);
    }
  }
}
