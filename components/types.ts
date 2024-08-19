export type WithRef<
T extends HTMLElement,
U extends any> =
  U & { ref: React.ForwardedRef<T> }