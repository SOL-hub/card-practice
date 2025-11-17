import { css } from '@emotion/react'

export const colorPalette = css`
  :root {
  --skyBlue50: #BEE0FC;      
  --skyBlue100: #C3E2FD;    
  --skyBlue150: #B3CDE5;      

  --gray100: #A5B0BB;   
  --blue100: #3E7FC9;      
  --blue200: #205495;   

  --yellow100: #FFD788;
  --orange100: #F9A54A;

  --white: #FFFFFF;

  --brown100: #896E5C;
  --black100: #000000;
  }
`
export const colors = {
  skyBlue50: 'var(--skyBlue50)',      
  skyBlue100: 'var(--skyBlue100)',    
  skyBlue150: 'var(--skyBlue150)',      
  gray100: 'var(--gray100)',   
  blue100: 'var(--blue100)',      
  blue200: 'var(--blue200)',   
  yellow100: 'var(--yellow100)',
  orange100: 'var(--orange100)',
  white: 'var(--white)',
  brown100: 'var(--brown100)',
  black100: 'var(--black100)'
}


export type Colors = keyof typeof colors