import "./style.scss"
import { Header } from '../../components/Header'
import { Main } from "../../components/Main"
import { Footer } from "../../components/Footer"
import { useState } from "react"

export function Home() {
  const [onTag , setOnTag] = useState();

  const onHeaderFilterClick = (tag) => {
    setOnTag(tag)
  }

  if(onTag) {
    return(
      <div className="container">
        <Header onFilterButton={onHeaderFilterClick}/>
        <Main tagOnFilter={onTag}/>
        <Footer />
    </div>
    )
  }

  return (
    <div className="container">
      <Header onFilterButton={onHeaderFilterClick}/>
      <Main />
      <Footer />
    </div>
  )
}
       