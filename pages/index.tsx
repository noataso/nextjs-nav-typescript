import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [isNumber,setIsNumber]=useState<number>(0)
  const handleClick=(e:any)=>{
    // console.log(e.target.children[0].textContent)
    setIsNumber(e.target.children[0].textContent)
  }
  return (
    <div className={styles.container}>
      <div className={styles.tabNav}>
        <div className={styles.tabNavItem} onClick={handleClick}>nav<span>0</span></div>
        <div className={styles.tabNavItem} onClick={handleClick}>nav<span>1</span></div>
        <div className={styles.tabNavItem} onClick={handleClick}>nav<span>2</span></div>
      </div>
      <div className={styles.tabContent}>
        <div className={styles.tabContentItem}>タブその{isNumber}</div>
      </div>
    </div>
  )
}
