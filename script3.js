const phrases = [
    "Ты самая лучшая",
    "Твоя улыбка освещает мой день",
    "Я люблю тебя бесконечно",
    "Ты — моя мечта",
    "Каждый момент с тобой особенный",
    'Счастье - это быть с тобой',
    'С тобой никогда не скучно',
    'Ты знаешь как заставить меня улыбнуться',
    'Ты всегда чувствуешь моё настроение',
    'Ты любишь меня со всеми моими недостатками',
    'Когда ты обнимаешь меня, всё хорошо',
    'Я могу быть собой, когда ты рядом',
    'Самый лучший день, деньпроведенный с тобой',
    'У тебя такие красивые губы',
    'Я тебе нравлюсь, даже когда ворчу',
    'Ты понимаешь меня с полуслова',
    'Ты никогда не скажешь, что слышишь эту историю в 10й раз',
    'Мы можем говорить обо все и ни о чем',
    'Ты мое вдохновение',
    'Нет никого прекраснее тебя',
    'Ты даешь мне уверенность в себе',
    'Ты знаешь,как подарить мне счастье',
    'Ты всегда чувствуешь,если мне плохо',
    'Я никогда не боюсь, ведь ты со мной',
    'Ты всегда на моей стороне',
    'С тобой так приятно поболтать о чем угодно',
    'Я могу доверять тебе',
    'Ты всегда помогаешь мне,если нужно',
    'Когда я с тобой, все остальное не имеет значения',
    'От одной твоей улыбки пропадает вся моя грусть',
    'Ты всегда слушаешь,когда я говорю',
    'Когда ты рядом,мир вокруг расцветает',
    'Мы-идеальная пара',
    'Меня умиляет твой вид,когда ты спишь',
    'Мысль о тебе наполняет любовью каждый миг',
    'Каждый миг с тобой наполнен радостью',
    'Лучшая ночь-та,что мы проводим вместе',
    'Ты веришь в меня',
    'Ты всегда прекрасно выглядишь',
    'Твои объятия такие ласковые',
    'Твоя поддержка-все для меня',
    'Твои шутки очень смешные',
    'Благодаря тебе я становлюсь лучше',
    'Ты самый удивительный человек на Земле',
    'Я вижу любовь в твоих глазах',
    'Я люблю твою улыбку',
    'Ты всегда знаешь,чем меня порадовать',
    'Ты заботишься обо мне и ничего не требуешь взамен',
    'Ты поймешь,если я забуду о чем-то важном',
    'Иногда мне просто необходимо тебя обнять',
    'Когда мы вместе, время не имеет значения',
    'Тебе интересны все мелочи моей жизни',
    'Твоя любовь меня бережет',
    'Всё стало прекрасно с твоим появлением',
    'Ты можешь сделать ярким любой самый хмурый день',
    'Я хочу,чтобы мы всегда были вместе',
    'Ты всегда радуешь меня просто тем,что ты есть',
    'Ты умеешь находить нужные слова',
    'Твое счастье важнее всего для меня',
    'С тобой хорошо в любом месте',
    'Даже твои маленькие поступки очень важны для меня',
    'Хочу не выпускать тебя из объятий',
    'Ты учишь меня любить',
    'Люблю слушать твой голос',
    'Я люблю всё,что ты делаешь',
    'Ты мое солнышко',

];

const textElement = document.getElementById("changing-text");
let index = 0;

setTimeout(() => {
    const interval = setInterval(() => {
        textElement.style.opacity = "0"; // Исчезновение
        setTimeout(() => {
            index++;
            if(index < phrases.length){
                textElement.textContent = phrases[index];
                textElement.style.opacity = "1"; // Появление
            } else {
                clearInterval(interval)
                textElement.style.opacity = "1"; // Появление
                textElement.textContent = 'Причины бесконечны, но важнее всего то, что я просто люблю тебя, с 14 февраля!!!'
                setTimeout(() => {
                    document.location = 'index4.html'
                }, 3000)
            }
        }, 2000);
    }, 150); // Меняем текст каждые 
}, 2000)

