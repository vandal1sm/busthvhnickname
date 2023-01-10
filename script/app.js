const gen__btn = document.querySelector("#gen__btn");
const gen__solution = document.querySelector("#gen__solution");

let firstLetterMale = ["стильный", "гибкий", "эластичный", "скрипящий", "гламурный", "сладкий", "синий", "агрессивный", "летающий", "лёгкий", "сдержанный", "красный", "модный", "ответственный", "экономический", "фармацевтический", "спинной", "космический", "тайный", "качественный", "властный", "лошадиный", "иностранный", "молниеносный", "воздушный", "жгучий", "крутой", "силиконовый", "скрытый", "жоский", "магучий", "дон", "салам", "чмо","ебырь","потаскивающий", "дрифтер", "сипующий", "куряга", "мелкочлен", "каратель", "членозубый", "ебанутый", "шипучка", "герой", "сбебанк", "толстый", "хуеглот", "луа", "програмист", "too fucking easy", "на бутылку русак", "ебать тебя унесло", "рефандни пожалуйста", "Too Slow", "BaimGOD", "Lol", "Dead", "1 нищий", "Нифига ты упал))", "ez собака", "Слишком изи", "1", "Соси бич", "1 СЛИТЫЙЙ", "Изи мапа", "Закерил бота", "чет изи", "бездарный", "Ебать", "лютый крякер", "ньюкамер", "зубастик", "картавый", "одноглазый", "победитель", "каратель", "копатель", "куллер", "овнящий", "закрывающий", "2009", "2007", "2006", "Килька", "Отдалась интеллигенту", "Фаллос", "Пароход", "Дернул", "из Тамбова", "на Арбате", "на скорой помощи", "на Победе", "стриптиз"];
let firstLetterFemale = ["скрипящая", "ровная", "тропическая", "ультраправая", "бодрая", "недовольная", "столовая", "опасная", "улётная", "индукционная", "шоколадная"];
let secondLetterMale = ["роутер", "камень", "антон", "кувшин", "мальчик", "инкассатор", "апельсин", "мясник", "спрут", "огурец", "кокос", "пельмень", "фонарик", "кирпич", "нотариус", "автобус", "ломбард", "поручень", "невролог", "ананас", "сифилис", "хлеб", "таксист", "гражданин", "подик", "шкаф", "перчик", "мaйoнeз", "василий", "мир", "хач", "макс", "абу", "абдурахман", "чуркабес", "ебанат", "настя", "джони", "батон", "денис", "мертвый", "дед инсайд", "пепси", "чипсоед", "алах", "банан", "азер", "дагестан", "пузатый", "кузя", "денислам", "ганжубас", "пидорас", "дикарь", "кракозябра", "олень", "хуесос", "чорт", "крутой", "саси", "легко", "чулпан"];
let secondLetterFemale = ["розетка", "табуретка", "лесбиянка", "ножка", "аренда", "кость", "дружба", "жена", "улитка", "печка", "маршрутка"];
let uniqueNames = ["татарка из сша", "сексуальное преимущество", "открытое окно", "грифон тинькофф", "позвоночник онлайн", "ипотека у дома", "судьба помидора", "тимоха бадабум", "как там жизнь с рупастой?", "бля пиздос может рефнешь???", "на бутылку русак", "ебать тебя унесло",];

let allItemsLenght = firstLetterMale.length + firstLetterFemale.length + uniqueNames.length;
let maleChance = Math.floor(firstLetterMale.length / allItemsLenght * 100);
let femaleChance = Math.floor(firstLetterFemale.length / allItemsLenght * 100);
let uniqueChance = Math.floor(uniqueNames.length / allItemsLenght * 100);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

gen__btn.addEventListener("click", function() {
    let answer;
    let randNum = getRandomInt(100);
    if (randNum < maleChance) 
        answer = firstLetterMale[getRandomInt(firstLetterMale.length)] + " " + secondLetterMale[getRandomInt(secondLetterMale.length)];
    else if (randNum < maleChance + femaleChance)
        answer = firstLetterFemale[getRandomInt(firstLetterFemale.length)] + " " + secondLetterFemale[getRandomInt(secondLetterFemale.length)];
    else
        answer = uniqueNames[getRandomInt(uniqueNames.length)]
    gen__solution.classList.remove("invis");
    gen__solution.textContent = "Ваш ник: " + answer;
});


