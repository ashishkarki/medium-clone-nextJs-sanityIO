import styles from './SubHeader.module.css'

const SubHeader = () => {
  return (
    <div className={styles.subheaderContainer}>
      <div className="border border-green-700">
        <div>
          Medium is a place to <br />
          write, read, and <br />
          connect
        </div>

        <div>
          It's easy and free to post your thinking on any topic and connect with
          millions of readers.
        </div>
      </div>

      <div className="border border-solid border-red-600">
        <div className="text-9xl font-bold">M</div>
      </div>
    </div>
  )
}

export default SubHeader
