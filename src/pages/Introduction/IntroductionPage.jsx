import React from 'react'
import {Link} from 'react-router-dom'
import ActionButton from '../../components/UI/Buttons/ActionButton/ActionButton'
import classes from './IntroductionPage.module.css'
import chardPNG from '../../data/images/chard.png'
import foodArtPNG from '../../data/images/foodArt.png'


const IntroductionPage = () => {
  return (  
    <div className={classes.contentContainer}>
      <main>
        <section>
          <div className={classes.titleWrapper}>
            <div className={classes.titleText}>
              <span>
                We’re <i>farmers</i>, <i>purveyors</i>, and <i>eaters</i><br/>of organically grown food.
              </span>
            </div>
            <div>
              <Link to="/products">
                <ActionButton children={"Browse our shop"}/>
              </Link>
            </div>
          </div>
        </section>
        <div className={classes.imagesWrapper}>
          <div className={classes.leftImageWrapper}>
            <img
              alt='chard'
              src={chardPNG} 
              className={classes.leftImage}
            />
          </div>
          <div className={classes.rightImageWrapper}>
            <img 
              alt='food preview'
              src={foodArtPNG} 
              className={classes.rightImage}
            />
            <span>
              <b>Central California</b> — The person who grew these was located in Central California and, er, hopefully very well-compensated.
            </span>
          </div>
        </div>
        <div className={classes.footerContainer}>
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
        </div>
      </main>
    </div>
  )
}

export default IntroductionPage