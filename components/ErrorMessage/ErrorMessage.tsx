import styles from './ErrorMessage.module.css'

export default function ErrorMessage({ text }: { text?: string | undefined }) {
  if (!text) {
    text = `An unknown error has occured.`
  }

  return (
    <div className={styles.error_box}>
      <h2>Uh-Oh 😓</h2>
      <h3>System Error</h3>
      <p>ERROR: {text}</p>
    </div>);
}