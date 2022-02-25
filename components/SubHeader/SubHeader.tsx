import styles from './SubHeader.module.css'

const SubHeader = () => {
  return (
    <div className={styles.subheaderContainer}>
      <div className="px-10 space-y-5">
        <h1 className="text-6xl max-w-xl font-serif">
          <span className="underline decoration-black decoration-4">
            Medium
          </span>{' '}
          is a place to write, read, and connect
        </h1>

        <h2>
          It's easy and free to post your thinking on any topic and connect with
          millions of readers.
        </h2>
      </div>

      <img
        src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
        className="hidden md:inline-flex h-32 lg:h-full"
        alt="medium"
      />
    </div>
  )
}

export default SubHeader
