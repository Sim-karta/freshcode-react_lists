import NewsCard from "../../../entities/news/ui/NewsCard";
import { newsList } from "../model/news-data";

const NewsFeed = () => {
    return (
        <>
            <ul>
                {newsList.map((news, index) => {
                    return (
                        <li>
                            <NewsCard news={news} isFirst={index === 0} />
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default NewsFeed;
