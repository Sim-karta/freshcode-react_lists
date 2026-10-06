import NewsCard from "../../../entities/news/ui/NewsCard";
import { newsList } from "../model/news-data";
import styles from "./newsFeed.module.scss";

const NewsFeed = () => {
    return (
        <>
            <ul className={styles.newsList}>
                {newsList.map((news, index) => {
                    return <NewsCard news={news} isFirst={index === 0} />;
                })}
            </ul>
        </>
    );
};

export default NewsFeed;
