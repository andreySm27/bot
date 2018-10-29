onst Discord = require(‘discord.js’);

const client = new Discord.Client();

var prefix = ‘+++’

client.on(‘message’, message => {
    if(message.author === client.user) return;
    if(message.content.startsWith(prefix + ‘help’)) {
        
//-------------------------------------

message.channel.sendMessage('-create-item Вафелька');
message.channel.sendMessage('-edit-item Price "Вафелька" 20');
message.channel.sendMessage('-edit-item Description "Вафелька" "Вафелька к Чаю"');
message.channel.sendMessage('-edit-item Inventory "Вафелька" yes');
message.channel.sendMessage('-edit-item Reply "Вафелька" "Вафелька к Чаю"');
message.channel.sendMessage('-edit-item Stock "Вафелька" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Чаек :tea:');
message.channel.sendMessage('-edit-item Price "Чаек :tea:" 30');
message.channel.sendMessage('-edit-item Description "Чаек :tea:" "Просто ЗЕЛЕНЫЙ Чай :D"');
message.channel.sendMessage('-edit-item Inventory "Чаек :tea:" yes');
message.channel.sendMessage('-edit-item Reply "Чаек :tea:" "Просто ЗЕЛЕНЫЙ Чай :D"');
message.channel.sendMessage('-edit-item Stock "Чаек :tea:" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Молоко :milk:');
message.channel.sendMessage('-edit-item Price "Молоко :milk:" 50');
message.channel.sendMessage('-edit-item Description "Молоко :milk:" "Молочко для Кошечки :3"');
message.channel.sendMessage('-edit-item Inventory "Молоко :milk:" yes');
message.channel.sendMessage('-edit-item Reply "Молоко :milk:" "Молочко для Кошечки :3"');
message.channel.sendMessage('-edit-item Stock "Молоко :milk:" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Chicken');
message.channel.sendMessage('-edit-item Price "Chicken" 100');
message.channel.sendMessage('-edit-item Description "Chicken" "None provided"');
message.channel.sendMessage('-edit-item Inventory "Chicken" yes');
message.channel.sendMessage('-edit-item Reply "Chicken" "None provided"');
message.channel.sendMessage('-edit-item Stock "Chicken" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Виселица');
message.channel.sendMessage('-edit-item Price "Виселица" 100');
message.channel.sendMessage('-edit-item Description "Виселица" "Веревка + мыло = решение ?"');
message.channel.sendMessage('-edit-item Inventory "Виселица" yes');
message.channel.sendMessage('-edit-item Reply "Виселица" "Веревка + мыло = решение ?"');
message.channel.sendMessage('-edit-item Stock "Виселица" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Тыквенная ириска :candy:');
message.channel.sendMessage('-edit-item Price "Тыквенная ириска :candy:" 100');
message.channel.sendMessage('-edit-item Description "Тыквенная ириска :candy:" "Еще один вид конфеток :3"');
message.channel.sendMessage('-edit-item Inventory "Тыквенная ириска :candy:" yes');
message.channel.sendMessage('-edit-item Reply "Тыквенная ириска :candy:" "Еще один вид конфеток :3"');
message.channel.sendMessage('-edit-item Stock "Тыквенная ириска :candy:" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Тыква :jack_o_lantern:');
message.channel.sendMessage('-edit-item Price "Тыква :jack_o_lantern:" 100');
message.channel.sendMessage('-edit-item Description "Тыква :jack_o_lantern:" "Это хеллоуинская тыква"');
message.channel.sendMessage('-edit-item Inventory "Тыква :jack_o_lantern:" yes');
message.channel.sendMessage('-edit-item Reply "Тыква :jack_o_lantern:" "Это хеллоуинская тыква"');
message.channel.sendMessage('-edit-item Stock "Тыква :jack_o_lantern:" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Обычный кухонный нож :knife:');
message.channel.sendMessage('-edit-item Price "Обычный кухонный нож :knife:" 100');
message.channel.sendMessage('-edit-item Description "Обычный кухонный нож :knife:" "Помните его?Ну тот самый нож который можно использовать при сломанных лифтах..."');
message.channel.sendMessage('-edit-item Inventory "Обычный кухонный нож :knife:" yes');
message.channel.sendMessage('-edit-item Reply "Обычный кухонный нож :knife:" "Помните его?Ну тот самый нож который можно использовать при сломанных лифтах..."');
message.channel.sendMessage('-edit-item Stock "Обычный кухонный нож :knife:" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Револьвер');
message.channel.sendMessage('-edit-item Price "Револьвер" 100');
message.channel.sendMessage('-edit-item Description "Револьвер" "Это конец ?"');
message.channel.sendMessage('-edit-item Inventory "Револьвер" yes');
message.channel.sendMessage('-edit-item Reply "Револьвер" "Это конец ?"');
message.channel.sendMessage('-edit-item Stock "Револьвер" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Подарочек :gift:');
message.channel.sendMessage('-edit-item Price "Подарочек :gift:" 120');
message.channel.sendMessage('-edit-item Description "Подарочек :gift:" "Клептомания это плохо("');
message.channel.sendMessage('-edit-item Inventory "Подарочек :gift:" yes');
message.channel.sendMessage('-edit-item Reply "Подарочек :gift:" "Клептомания это плохо("');
message.channel.sendMessage('-edit-item Stock "Подарочек :gift:" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Шаурма :burrito:');
message.channel.sendMessage('-edit-item Price "Шаурма :burrito:" 160');
message.channel.sendMessage('-edit-item Description "Шаурма :burrito:" "Шаурме для истинного Ашота!"');
message.channel.sendMessage('-edit-item Inventory "Шаурма :burrito:" yes');
message.channel.sendMessage('-edit-item Reply "Шаурма :burrito:" "Шаурме для истинного Ашота!"');
message.channel.sendMessage('-edit-item Stock "Шаурма :burrito:" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Душистая мята');
message.channel.sendMessage('-edit-item Price "Душистая мята" 200');
message.channel.sendMessage('-edit-item Description "Душистая мята" "Это мята только наоборот"');
message.channel.sendMessage('-edit-item Inventory "Душистая мята" yes');
message.channel.sendMessage('-edit-item Reply "Душистая мята" "Это мята только наоборот"');
message.channel.sendMessage('-edit-item Stock "Душистая мята" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Набор «Япония» :bento:');
message.channel.sendMessage('-edit-item Price "Набор «Япония» :bento:" 200');
message.channel.sendMessage('-edit-item Description "Набор «Япония» :bento:" "Для истинного японца!"');
message.channel.sendMessage('-edit-item Inventory "Набор «Япония» :bento:" yes');
message.channel.sendMessage('-edit-item Reply "Набор «Япония» :bento:" "Для истинного японца!"');
message.channel.sendMessage('-edit-item Stock "Набор «Япония» :bento:" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Цветок розы :rose:');
message.channel.sendMessage('-edit-item Price "Цветок розы :rose:" 203');
message.channel.sendMessage('-edit-item Description "Цветок розы :rose:" "Розы знают много,но они скрывают это от нас...поэтому,просто используй секатор что бы прорвать их плети..."');
message.channel.sendMessage('-edit-item Inventory "Цветок розы :rose:" yes');
message.channel.sendMessage('-edit-item Reply "Цветок розы :rose:" "Розы знают много,но они скрывают это от нас...поэтому,просто используй секатор что бы прорвать их плети..."');
message.channel.sendMessage('-edit-item Stock "Цветок розы :rose:" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Бабочка :butterfly:');
message.channel.sendMessage('-edit-item Price "Бабочка :butterfly:" 210');
message.channel.sendMessage('-edit-item Description "Бабочка :butterfly:" "Это жестоко,тебе так не кажется?"');
message.channel.sendMessage('-edit-item Inventory "Бабочка :butterfly:" yes');
message.channel.sendMessage('-edit-item Reply "Бабочка :butterfly:" "Это жестоко,тебе так не кажется?"');
message.channel.sendMessage('-edit-item Stock "Бабочка :butterfly:" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Грибы :mushroom:');
message.channel.sendMessage('-edit-item Price "Грибы :mushroom:" 229');
message.channel.sendMessage('-edit-item Description "Грибы :mushroom:" "ОБЫЧНЫЕ грибочки :3"');
message.channel.sendMessage('-edit-item Inventory "Грибы :mushroom:" yes');
message.channel.sendMessage('-edit-item Reply "Грибы :mushroom:" "ОБЫЧНЫЕ грибочки :3"');
message.channel.sendMessage('-edit-item Stock "Грибы :mushroom:" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Попкорн :popcorn:');
message.channel.sendMessage('-edit-item Price "Попкорн :popcorn:" 256');
message.channel.sendMessage('-edit-item Description "Попкорн :popcorn:" "Это можно использовать когда следишь за ссорой"');
message.channel.sendMessage('-edit-item Inventory "Попкорн :popcorn:" yes');
message.channel.sendMessage('-edit-item Reply "Попкорн :popcorn:" "Это можно использовать когда следишь за ссорой"');
message.channel.sendMessage('-edit-item Stock "Попкорн :popcorn:" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Тропический коктейль');
message.channel.sendMessage('-edit-item Price "Тропический коктейль" 300');
message.channel.sendMessage('-edit-item Description "Тропический коктейль" "Почувствуй вкус тропиков!"');
message.channel.sendMessage('-edit-item Inventory "Тропический коктейль" yes');
message.channel.sendMessage('-edit-item Reply "Тропический коктейль" "Почувствуй вкус тропиков!"');
message.channel.sendMessage('-edit-item Stock "Тропический коктейль" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Печёная гуава');
message.channel.sendMessage('-edit-item Price "Печёная гуава" 300');
message.channel.sendMessage('-edit-item Description "Печёная гуава" "Это же тропический фрукт!"');
message.channel.sendMessage('-edit-item Inventory "Печёная гуава" yes');
message.channel.sendMessage('-edit-item Reply "Печёная гуава" "Это же тропический фрукт!"');
message.channel.sendMessage('-edit-item Stock "Печёная гуава" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Ловец снов');
message.channel.sendMessage('-edit-item Price "Ловец снов" 333');
message.channel.sendMessage('-edit-item Description "Ловец снов" "Это может исказить вашу реальность..."');
message.channel.sendMessage('-edit-item Inventory "Ловец снов" yes');
message.channel.sendMessage('-edit-item Reply "Ловец снов" "Это может исказить вашу реальность..."');
message.channel.sendMessage('-edit-item Stock "Ловец снов" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Приготовленный королевский краб');
message.channel.sendMessage('-edit-item Price "Приготовленный королевский краб" 400');
message.channel.sendMessage('-edit-item Description "Приготовленный королевский краб" "Это райская еда!"');
message.channel.sendMessage('-edit-item Inventory "Приготовленный королевский краб" yes');
message.channel.sendMessage('-edit-item Reply "Приготовленный королевский краб" "Это райская еда!"');
message.channel.sendMessage('-edit-item Stock "Приготовленный королевский краб" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Цветок правды :cherry_blossom:');
message.channel.sendMessage('-edit-item Price "Цветок правды :cherry_blossom:" 403');
message.channel.sendMessage('-edit-item Description "Цветок правды :cherry_blossom:" "Этот цветок знает больше роз,этот цветок лечебнее пыльцы маргаритки..."');
message.channel.sendMessage('-edit-item Inventory "Цветок правды :cherry_blossom:" yes');
message.channel.sendMessage('-edit-item Reply "Цветок правды :cherry_blossom:" "Этот цветок знает больше роз,этот цветок лечебнее пыльцы маргаритки..."');
message.channel.sendMessage('-edit-item Stock "Цветок правды :cherry_blossom:" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Восточный вискас :rice:');
message.channel.sendMessage('-edit-item Price "Восточный вискас :rice:" 436');
message.channel.sendMessage('-edit-item Description "Восточный вискас :rice:" "Это вискас!"');
message.channel.sendMessage('-edit-item Inventory "Восточный вискас :rice:" yes');
message.channel.sendMessage('-edit-item Reply "Восточный вискас :rice:" "Это вискас!"');
message.channel.sendMessage('-edit-item Stock "Восточный вискас :rice:" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Пиво :beer:');
message.channel.sendMessage('-edit-item Price "Пиво :beer:" 500');
message.channel.sendMessage('-edit-item Description "Пиво :beer:" "Для истинных мужиков!Или Мери...В прочем если ты не мужик тебя унесёт в нарнию..."');
message.channel.sendMessage('-edit-item Inventory "Пиво :beer:" yes');
message.channel.sendMessage('-edit-item Reply "Пиво :beer:" "Для истинных мужиков!Или Мери...В прочем если ты не мужик тебя унесёт в нарнию..."');
message.channel.sendMessage('-edit-item Stock "Пиво :beer:" 0');


//-------------------------------------

message.channel.sendMessage('-create-item :sunrise:Фотография рассвета');
message.channel.sendMessage('-edit-item Price ":sunrise:Фотография рассвета" 500');
message.channel.sendMessage('-edit-item Description ":sunrise:Фотография рассвета" "Эта фотография такая красивая..."');
message.channel.sendMessage('-edit-item Inventory ":sunrise:Фотография рассвета" yes');
message.channel.sendMessage('-edit-item Reply ":sunrise:Фотография рассвета" "Эта фотография такая красивая..."');
message.channel.sendMessage('-edit-item Stock ":sunrise:Фотография рассвета" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Плюшевый Спот');
message.channel.sendMessage('-edit-item Price "Плюшевый Спот" 555');
message.channel.sendMessage('-edit-item Description "Плюшевый Спот" "Демонический волк"');
message.channel.sendMessage('-edit-item Inventory "Плюшевый Спот" yes');
message.channel.sendMessage('-edit-item Reply "Плюшевый Спот" "Демонический волк"');
message.channel.sendMessage('-edit-item Stock "Плюшевый Спот" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Леденец :lollipop:');
message.channel.sendMessage('-edit-item Price "Леденец :lollipop:" 555');
message.channel.sendMessage('-edit-item Description "Леденец :lollipop:" "Вот это оружие против стресса"');
message.channel.sendMessage('-edit-item Inventory "Леденец :lollipop:" yes');
message.channel.sendMessage('-edit-item Reply "Леденец :lollipop:" "Вот это оружие против стресса"');
message.channel.sendMessage('-edit-item Stock "Леденец :lollipop:" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Живая свинья :pig2:');
message.channel.sendMessage('-edit-item Price "Живая свинья :pig2:" 654');
message.channel.sendMessage('-edit-item Description "Живая свинья :pig2:" "Они нарушили законы,это их наказание!"');
message.channel.sendMessage('-edit-item Inventory "Живая свинья :pig2:" yes');
message.channel.sendMessage('-edit-item Reply "Живая свинья :pig2:" "Они нарушили законы,это их наказание!"');
message.channel.sendMessage('-edit-item Stock "Живая свинья :pig2:" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Пицца :pizza:');
message.channel.sendMessage('-edit-item Price "Пицца :pizza:" 666');
message.channel.sendMessage('-edit-item Description "Пицца :pizza:" "Большая Пицца только для тебя!"');
message.channel.sendMessage('-edit-item Inventory "Пицца :pizza:" yes');
message.channel.sendMessage('-edit-item Reply "Пицца :pizza:" "Большая Пицца только для тебя!"');
message.channel.sendMessage('-edit-item Stock "Пицца :pizza:" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Недо-Герцог рыброн :shark:');
message.channel.sendMessage('-edit-item Price "Недо-Герцог рыброн :shark:" 666');
message.channel.sendMessage('-edit-item Description "Недо-Герцог рыброн :shark:" "Это Герцог роброн в уменьшенном виде...ненавижу тебя!"');
message.channel.sendMessage('-edit-item Inventory "Недо-Герцог рыброн :shark:" yes');
message.channel.sendMessage('-edit-item Reply "Недо-Герцог рыброн :shark:" "Это Герцог роброн в уменьшенном виде...ненавижу тебя!"');
message.channel.sendMessage('-edit-item Stock "Недо-Герцог рыброн :shark:" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Изумруды');
message.channel.sendMessage('-edit-item Price "Изумруды" 667');
message.channel.sendMessage('-edit-item Description "Изумруды" "Это настоящие изумруды!"');
message.channel.sendMessage('-edit-item Inventory "Изумруды" yes');
message.channel.sendMessage('-edit-item Reply "Изумруды" "Это настоящие изумруды!"');
message.channel.sendMessage('-edit-item Stock "Изумруды" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Что?! :comet:️');
message.channel.sendMessage('-edit-item Price "Что?! :comet:️" 888');
message.channel.sendMessage('-edit-item Description "Что?! :comet:️" "Чегооооо?!!??"');
message.channel.sendMessage('-edit-item Inventory "Что?! :comet:️" yes');
message.channel.sendMessage('-edit-item Reply "Что?! :comet:️" "Чегооооо?!!??"');
message.channel.sendMessage('-edit-item Stock "Что?! :comet:️" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Торт :birthday:');
message.channel.sendMessage('-edit-item Price "Торт :birthday:" 999');
message.channel.sendMessage('-edit-item Description "Торт :birthday:" "Отпразднуем днюху!Даже если у тебя нет днюхи....не ври нам!"');
message.channel.sendMessage('-edit-item Inventory "Торт :birthday:" yes');
message.channel.sendMessage('-edit-item Reply "Торт :birthday:" "Отпразднуем днюху!Даже если у тебя нет днюхи....не ври нам!"');
message.channel.sendMessage('-edit-item Stock "Торт :birthday:" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Катана');
message.channel.sendMessage('-edit-item Price "Катана" 1,000');
message.channel.sendMessage('-edit-item Description "Катана" "Сделай мир лучше ! Убей себя"');
message.channel.sendMessage('-edit-item Inventory "Катана" yes');
message.channel.sendMessage('-edit-item Reply "Катана" "Сделай мир лучше ! Убей себя"');
message.channel.sendMessage('-edit-item Stock "Катана" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Шоколад :chocolate_bar:');
message.channel.sendMessage('-edit-item Price "Шоколад :chocolate_bar:" 1,000');
message.channel.sendMessage('-edit-item Description "Шоколад :chocolate_bar:" "Этим можно успокоить разъярённую Силки..."');
message.channel.sendMessage('-edit-item Inventory "Шоколад :chocolate_bar:" yes');
message.channel.sendMessage('-edit-item Reply "Шоколад :chocolate_bar:" "Этим можно успокоить разъярённую Силки..."');
message.channel.sendMessage('-edit-item Stock "Шоколад :chocolate_bar:" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Звезда манны :star2:');
message.channel.sendMessage('-edit-item Price "Звезда манны :star2:" 1,000');
message.channel.sendMessage('-edit-item Description "Звезда манны :star2:" "Эта звездочка не совсем звездочка..."');
message.channel.sendMessage('-edit-item Inventory "Звезда манны :star2:" yes');
message.channel.sendMessage('-edit-item Reply "Звезда манны :star2:" "Эта звездочка не совсем звездочка..."');
message.channel.sendMessage('-edit-item Stock "Звезда манны :star2:" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Russian Vodka');
message.channel.sendMessage('-edit-item Price "Russian Vodka" 2,000');
message.channel.sendMessage('-edit-item Description "Russian Vodka" "Это настоящая русская водка"');
message.channel.sendMessage('-edit-item Inventory "Russian Vodka" yes');
message.channel.sendMessage('-edit-item Reply "Russian Vodka" "Это настоящая русская водка"');
message.channel.sendMessage('-edit-item Stock "Russian Vodka" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Шампанское :champagne:');
message.channel.sendMessage('-edit-item Price "Шампанское :champagne:" 5,000');
message.channel.sendMessage('-edit-item Description "Шампанское :champagne:" "Это не просто заставит вас покатится...это вас сведёт с ума...и не только...и ещё многое другое..."');
message.channel.sendMessage('-edit-item Inventory "Шампанское :champagne:" yes');
message.channel.sendMessage('-edit-item Reply "Шампанское :champagne:" "Это не просто заставит вас покатится...это вас сведёт с ума...и не только...и ещё многое другое..."');
message.channel.sendMessage('-edit-item Stock "Шампанское :champagne:" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Пиво на всех');
message.channel.sendMessage('-edit-item Price "Пиво на всех" 5,000');
message.channel.sendMessage('-edit-item Description "Пиво на всех" "Это пиво раскроет вам все о Нарнии"');
message.channel.sendMessage('-edit-item Inventory "Пиво на всех" yes');
message.channel.sendMessage('-edit-item Reply "Пиво на всех" "Это пиво раскроет вам все о Нарнии"');
message.channel.sendMessage('-edit-item Stock "Пиво на всех" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Человечина 🥩');
message.channel.sendMessage('-edit-item Price "Человечина 🥩" 10,000');
message.channel.sendMessage('-edit-item Description "Человечина 🥩" "Мало вероятно что это можно есть...вы ведь знаете что Силки не делится добычей?"');
message.channel.sendMessage('-edit-item Inventory "Человечина 🥩" yes');
message.channel.sendMessage('-edit-item Reply "Человечина 🥩" "Мало вероятно что это можно есть...вы ведь знаете что Силки не делится добычей?"');
message.channel.sendMessage('-edit-item Stock "Человечина 🥩" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Костюм пришельца :alien:');
message.channel.sendMessage('-edit-item Price "Костюм пришельца :alien:" 25,000');
message.channel.sendMessage('-edit-item Description "Костюм пришельца :alien:" "Почувствуйте себя в своей тарелке!Бип-бип"');
message.channel.sendMessage('-edit-item Inventory "Костюм пришельца :alien:" yes');
message.channel.sendMessage('-edit-item Reply "Костюм пришельца :alien:" "Почувствуйте себя в своей тарелке!Бип-бип"');
message.channel.sendMessage('-edit-item Stock "Костюм пришельца :alien:" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Костюм призрака :ghost:');
message.channel.sendMessage('-edit-item Price "Костюм призрака :ghost:" 25,000');
message.channel.sendMessage('-edit-item Description "Костюм призрака :ghost:" "Какой хеллоуин без призраков?"');
message.channel.sendMessage('-edit-item Inventory "Костюм призрака :ghost:" yes');
message.channel.sendMessage('-edit-item Reply "Костюм призрака :ghost:" "Какой хеллоуин без призраков?"');
message.channel.sendMessage('-edit-item Stock "Костюм призрака :ghost:" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Самолёт :airplane_small:');
message.channel.sendMessage('-edit-item Price "Самолёт :airplane_small:" 112,001');
message.channel.sendMessage('-edit-item Description "Самолёт :airplane_small:" "Самолёт с облепихой!"');
message.channel.sendMessage('-edit-item Inventory "Самолёт :airplane_small:" yes');
message.channel.sendMessage('-edit-item Reply "Самолёт :airplane_small:" "Самолёт с облепихой!"');
message.channel.sendMessage('-edit-item Stock "Самолёт :airplane_small:" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Элексир Жизни ₮_₮');
message.channel.sendMessage('-edit-item Price "Элексир Жизни ₮_₮" 1,000,000');
message.channel.sendMessage('-edit-item Description "Элексир Жизни ₮_₮" "Стремная жидкость, но она может вернуть людей из того мира)"');
message.channel.sendMessage('-edit-item Inventory "Элексир Жизни ₮_₮" yes');
message.channel.sendMessage('-edit-item Reply "Элексир Жизни ₮_₮" "Стремная жидкость, но она может вернуть людей из того мира)"');
message.channel.sendMessage('-edit-item Stock "Элексир Жизни ₮_₮" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Мешочек с драгоценными камнями');
message.channel.sendMessage('-edit-item Price "Мешочек с драгоценными камнями" 10,000,000');
message.channel.sendMessage('-edit-item Description "Мешочек с драгоценными камнями" "Тут осколки какого-то самоцвета"');
message.channel.sendMessage('-edit-item Inventory "Мешочек с драгоценными камнями" yes');
message.channel.sendMessage('-edit-item Reply "Мешочек с драгоценными камнями" "Тут осколки какого-то самоцвета"');
message.channel.sendMessage('-edit-item Stock "Мешочек с драгоценными камнями" 0');


//-------------------------------------

message.channel.sendMessage('-create-item Конфетка :candy:');
message.channel.sendMessage('-edit-item Price "Конфетка :candy:" ∞');
message.channel.sendMessage('-edit-item Description "Конфетка :candy:" "Успокой свои нервы этой ириской!"');
message.channel.sendMessage('-edit-item Inventory "Конфетка :candy:" yes');
message.channel.sendMessage('-edit-item Reply "Конфетка :candy:" "Успокой свои нервы этой ириской!"');
message.channel.sendMessage('-edit-item Stock "Конфетка :candy:" 0');


     }
});

client.login(NTA2MTM3MzAyNTQ5MTM1MzYx.DrgyvQ.enqAMjTS0GE-jMdrG1nvS2DvshI);