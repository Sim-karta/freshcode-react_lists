import { useCallback, useState } from "react";
import NewsCard from "../../../entities/news/ui/NewsCard";
import { newsList } from "../model/news-data";
import styles from "./newsFeed.module.scss";

const NewsFeed = () => {
    const [newsItems, setNewsItems] = useState(newsList);
    const [activeCard, setActiveCard] = useState(null);

    const onClick = useCallback((id) => {
        setActiveCard(id);
    }, []);

    const onDelete = useCallback((id) => {
        setNewsItems((items) => items.filter((news) => news.title !== id));
        setActiveCard((current) => (current === id ? null : current));
    }, []);

    return (
        <>
            <ul className={styles.newsList}>
                {newsItems.map((news, index) => {
                    return (
                        <NewsCard
                            key={news.title}
                            id={news.title}
                            news={news}
                            isFirst={index === 0}
                            isActive={news.title === activeCard}
                            onClick={onClick}
                            onDelete={onDelete}
                        />
                    );
                })}
            </ul>
        </>
    );
};

export default NewsFeed;
