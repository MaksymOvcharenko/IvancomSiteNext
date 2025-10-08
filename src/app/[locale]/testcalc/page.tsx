import CalculatorSwitcher from '@/components/DeliveryCalculator/CalculatorPLtoUA/CalculatorSwitcher/CalculatorSwitcher'
import React from 'react'
import styles from './DeliveryCalculator.module.css'
const page = () => {
  return (
    <div className={styles.page}><div className={styles.container}><CalculatorSwitcher/></div></div>
  )
}

export default page