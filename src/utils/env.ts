/**
 * 环境检测工具
 */

export const isUtools = (): boolean => {
  return typeof (window as any).utools !== 'undefined';
};

export const isMobile = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

export const getEnv = () => {
  if (isUtools()) return 'utools';
  if (isMobile()) return 'mobile';
  return 'pc';
};
