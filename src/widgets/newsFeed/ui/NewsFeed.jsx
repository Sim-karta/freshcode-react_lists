import { useCallback, useState } from "react";
import NewsCard from "../../../entities/news/ui/NewsCard";
import { newsList } from "../model/news-data";
import styles from "./newsFeed.module.scss";

const NewsFeed = () => {
    const [activeCard, setActiveCard] = useState(null);

    const onClick = useCallback(
        (index) => {
            setActiveCard(index);
        },
        [activeCard],
    );

    return (
        <>
            <ul className={styles.newsList}>
                {newsList.map((news, index) => {
                    return (
                        <NewsCard
                            key={index}
                            id={index}
                            news={news}
                            isFirst={index === 0}
                            isActive={index === activeCard}
                            onClick={onClick}
                        />
                    );
                })}
            </ul>
        </>
    );
};

export default NewsFeed;
