import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

// 1. Ознайомся з документацією бібліотеки Vimeo плеєра. Додай бібліотеку як залежність проекту через npm. Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player, але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN. 
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const KEY = "videoplayer-current-time";


// 2. Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення. Додай до проекту бібілотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.
player.on('timeupdate', throttle(onPlay, 1000));


// 3.Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".
const onPlay = function (data) {
    localStorage.setItem(KEY, JSON.stringify(data));
};


// 4. Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
const savedData = localStorage.getItem(KEY);
    if (savedData) {
        player.setCurrentTime(JSON.parse(savedData).seconds);
    } 













