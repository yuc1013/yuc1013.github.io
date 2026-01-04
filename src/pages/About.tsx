import Copyright from '../components/Copyright'
import { useTitle } from '../hooks/useTitle'
import styles from './Pages.module.css'

export default function About() {
  useTitle('关于我 | 舞雩夕的主页')
  return (
    <div class={styles.wrapper}>
      <div class={styles.card}>
        <h1>关于我</h1>
        <p>
          你好，我是舞雩夕！
        </p>
        <p>
          <b>Github </b><a href='https://github.com/yuc1013'>@yuc1013</a>
        </p>
        <Copyright />
      </div>
    </div>
  )
}