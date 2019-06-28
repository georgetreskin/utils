import includes from 'lodash/includes';
import isArray from 'lodash/isArray';

function single(image: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    if (image && includes(image, 'data:image')) {
      img.crossOrigin = 'anonymous';
    }
    if (!image) {
      reject();
    } else {
      img.onload = () => resolve(img);
      img.onerror = () => reject();
      img.src = image;
    }
  });
}

export default function preloadImages(images: string | string[]): Promise<any> {
  if (isArray(images)) {
    return Promise.all((images as string[]).map((image: string) => single(image)))
  }
  return single(images as string);
}
