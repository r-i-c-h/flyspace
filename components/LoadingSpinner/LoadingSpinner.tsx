import styles from './LoadingSpinner.module.css';

declare module "react" {
  // Apparently this is the cleanest way to augment the CSS Interface to accept
  // an argument for a CSS variable / custom-properties 🤷‍♂️
  interface CSSProperties {
    "--size"?: string
  }
}
export default function LoadingSpinner({ size }: { size?: string | number }) {
  if (!size) { size = `3rem`; } //TODO: Fix hacky way to enforce a default value 🤫
  if (typeof size === 'number') {
    size = `${size}rem`
  }
  return (<div
    className={styles.loader}
    style={{ "--size": size }}
  >
  </div>);
}