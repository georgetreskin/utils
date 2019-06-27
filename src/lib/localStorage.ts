import store from 'store2';

export const canUse = () => {
  try {
    if (
      typeof navigator === 'undefined' ||
      /MSIE\s8\.0/.test(navigator.userAgent) ||
      !window.localStorage
    ) {
      return false;
    }
    const testKey = `local_storage_test`;
    window.localStorage.setItem(testKey, 'true');
    window.localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
};

export const set = (key: string, value: any) => {
  if (canUse()) {
    try {
      store.set(key, value);
    } catch (e) {
      return null;
    }
  }
  return null;
};

export const get = (key: string) => {
  try {
    return canUse() && store.get(key);
  } catch (e) {
    return null;
  }
};
