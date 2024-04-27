import React from 'react'
import GreenButton from '../../components/UI/buttons/GreenButton'
import classes from './HomePage.module.css'
import chardPNG from '../../components/images/chard.png'
import foodArtPNG from '../../components/images/foodArt.png'


const HomePage = () => {
  return (
    <div className={classes.contentWrapper}>
      <div className={classes.titleWrapper}>
        <div className={classes.titleText}>
          <span>We’re <i>farmers</i>, <i>purveyors</i>, and <i>eaters</i> of organically grown food.</span>
        </div>
        <div>
          <GreenButton>Browse our shop</GreenButton>
        </div>
      </div>
      <div className={classes.imagesWrapper}>
        <div className={classes.leftImageWrapper}>
          <img src={chardPNG} className={classes.leftImage}/>
        </div>
        <div className={classes.rightImageWrapper}>
          <img src={foodArtPNG} className={classes.rightImage}/>
          <span>
            <b>Central California</b> — The person who grew these was located in Central California and, er, hopefully very well-compensated.
          </span>
        </div>
      </div>
      <footer>
        <div className={classes.footerLeftTitle}>
          <p><b>WHAT WE BELIEVE</b></p>
        </div>
        <div className={classes.footerRightText}>
          <p>
            We believe in produce. Tasty produce. Produce like:
          </p>
          <p>
            Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers. Jicamas. Cauliflowers. Brussels sprouts. 
            Shallots. Japanese eggplants. Asparagus. Artichokes—Jerusalem artichokes, too. Radishes. Broccoli. Baby broccoli. 
            Broccolini. Bok choy. Scallions. Ginger. Cherries. Raspberries. Cilantro. Parsley. Dill. 
          </p>
          <p>
            What are we forgetting?
          </p>
          <p>
            Oh! Onions. Yams. Avocados. Lettuce. Arugula (to some, “rocket”). Persian cucumbers, in addition to aforementioned
            “normal” cucumbers. Artichokes. Zucchinis. Pumpkins. Squash (what some cultures call pumpkins). 
            Sweet potatoes and potato-potatoes. Jackfruit. Monk fruit. Fruit of the Loom. Fruits of our labor (this website).
            Sorrel. Pineapple. Mango. Gooseberries. Blackberries. Tomatoes. Heirloom tomatoes. Beets. Chives. Corn. Endive. 
            Escarole, which, we swear, we’re vendors of organic produce, but if you asked us to describe what escaroles are...
          </p>
        </div>
      </footer>
    </div>
  )
}

export default HomePage