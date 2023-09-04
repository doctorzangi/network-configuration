import React from 'react'
import styles from './editor.module.css'

const Editor = () => {
  return (
    <div className={styles.main}>
        <textarea name="editor" cols="60" rows="30"></textarea>
        <div className={styles.buttons}>
            <button>Discard</button>
            <button>Save to Drafts</button>
            <button>Preview</button>
            <button>Save</button>
        </div>
    </div>
  )
}

export default Editor