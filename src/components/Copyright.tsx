import styles from './Copyright.module.css';

export default function Copyright() {
  return (
    <footer class={styles.footer}>
      <p>
        License: <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-SA 3.0</a>
      </p>
      <p>
        Content © <a href="https://github.com/yuc1013" target="_blank" rel="noopener noreferrer">yuc1013</a>
      </p>
      <p>
        Theme background adapted from <a href="https://github.com/rocksdanister" target="_blank" rel="noopener noreferrer">rocksdanister</a> (CC BY-NC-SA 3.0)
      </p>
    </footer>
  );
}