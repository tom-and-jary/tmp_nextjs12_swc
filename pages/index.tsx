import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { EditorProps } from '@toast-ui/react-editor';
import dynamic from 'next/dynamic';


const Editor = dynamic<EditorProps>(() => import('@toast-ui/react-editor')
    .then(m => m.Editor), { ssr: false });


const Home: NextPage = () => {
  return (
    <div className={styles.container}>


        <Editor
            placeholder="hi"
            previewStyle="vertical"
            height="600px"
            initialEditType="markdown"


        />




    </div>
  )
}

export default Home
