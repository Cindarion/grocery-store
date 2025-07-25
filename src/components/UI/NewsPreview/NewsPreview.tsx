import classes from "./NewsPreview.module.css"

// Test
import news_test_img from '@/data/images/news-img.png'

const NewsPreview = () => {
  return (
    <div className={classes.previewContentContainer}>
        <div className={classes.previewImgWrapper}>
          <span />
          <img src={news_test_img} alt="news test img" />
        </div>
        <div className={classes.previewTitleWrapper}>
          <h1>
            Introducing new features
          </h1>
          <span>
            Dive deeper into the products you love. 
            Our detailed product pages now offer comprehensive information
          </span>
        </div>
        <div className={classes.newsPaginationWrapper}>
          <span>&lt;</span>
          <li>○</li>
          <li>●</li>
          <li>○</li>
          <span>&gt;</span>
        </div>
      </div>
  )
}

export default NewsPreview