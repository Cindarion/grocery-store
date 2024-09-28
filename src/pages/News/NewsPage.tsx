import classes from "./NewsPage.module.css"
import PageHeading from "src/components/UI/PageHeading/PageHeading"
import { newsSortOptions } from "src/constants/sortOptions"

const NewsPage = () => {
  const newsSortProps = newsSortOptions;

  return (
    <div className={classes.pageContainer}>
      <PageHeading
        titleString="News"
        includeSearchBar="Search for news"
        includeSortOptions={newsSortProps}
      />
      <main>
        <div>
          
        </div>
      </main>
    </div>
  )
}

export default NewsPage