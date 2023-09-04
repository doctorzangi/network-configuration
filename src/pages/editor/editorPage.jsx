import React from 'react'
import styles from './editorPage.module.css'
import Navbar from '../../Components/navbar/navbar'
import Sidebar from '../../Components/sidebar/sidebar'
import Editor from '../../Components/editor/editor'

const EditorPage = () => {
  return (
    <div>
        <Navbar />
        <div>
            <Sidebar />
            <div className={styles.editor}>
                <Editor />
            </div>
        </div>
    </div>
  )
}

export default EditorPage