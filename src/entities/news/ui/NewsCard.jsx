import { useState } from "react";
import LikeNewsButton from "../../../features/likeNews/LikeNewsButton";
import styles from "./NewsCard.module.scss";
import DeleteNewsButton from "../../../features/deleteNews/ui/DeleteNewsButton";

const NewsCard = (props) => {
    const { id, news, isFirst = false, isActive, onClick, onDelete } = props;

    const [isLiked, setIsLiked] = useState(false);

    const title = isFirst ? news.title : `${news.title.slice(0, 30)}...`;

    return (
        <article
            className={`${styles.newsCard} ${isActive ? styles.isActive : ""}`}
            onClick={() => {
                onClick(id);
            }}
        >
            <div className={styles.newsCard__header}>
                <img
                    className={styles.newsCard__image}
                    src={news.headerBgSrc}
                    alt={news.title}
                />
                <LikeNewsButton
                    className={`${styles.newsCard__like} ${isLiked ? styles.isActive : ""}`}
                    ariaLabel={isLiked ? "Прибрати лайк" : "Поставити лайк"}
                    setIsLike={setIsLiked}
                >
                    <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill={isLiked ? "currentColor" : "none"}
                        aria-hidden="true"
                    >
                        <path
                            d="M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1546 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </LikeNewsButton>
                <DeleteNewsButton
                    className={styles.newsCard__delete}
                    aria-label="Видалити новину"
                    cardId={id}
                    onDelete={onDelete}
                >
                    <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M3.99989 4L19.9999 20M16.4999 16.7559C15.1473 17.4845 13.6185 17.9999 11.9999 17.9999C8.46924 17.9999 5.36624 15.5478 3.5868 13.7788C3.1171 13.3119 2.88229 13.0784 2.7328 12.6201C2.62619 12.2933 2.62616 11.7066 2.7328 11.3797C2.88233 10.9215 3.11763 10.6875 3.58827 10.2197C4.48515 9.32821 5.71801 8.26359 7.17219 7.42676M19.4999 14.6335C19.8329 14.3405 20.138 14.0523 20.4117 13.7803L20.4146 13.7772C20.8832 13.3114 21.1182 13.0779 21.2674 12.6206C21.374 12.2938 21.3738 11.7068 21.2672 11.38C21.1178 10.9219 20.8827 10.6877 20.4133 10.2211C18.6338 8.45208 15.5305 6 11.9999 6C11.6624 6 11.3288 6.02241 10.9999 6.06448M13.3228 13.5C12.9702 13.8112 12.507 14 11.9999 14C10.8953 14 9.99989 13.1046 9.99989 12C9.99989 11.4605 10.2135 10.9712 10.5608 10.6113"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </DeleteNewsButton>
            </div>
            <div className={styles.newsCard__body}>
                <h2 className={styles["newsCard__body-title"]}>{title}</h2>
                <p className={styles["newsCard__body-info"]}>
                    {isFirst ? news.body : ""}
                </p>
            </div>
            <div className={styles.newsCard__footer}>
                <ul className={styles.newsCard__tags}>
                    {news.category.map((tag) => (
                        <li className={styles["newsCard__tags-item"]} key={tag}>
                            #{tag}
                        </li>
                    ))}
                </ul>
                <p className={styles.newsCard__date}>
                    <time dateTime={news.date}>{news.date}</time>
                </p>
            </div>
        </article>
    );
};

export default NewsCard;
