import { Center, Container, List, Title, Text, Image } from "@mantine/core";
import React from "react";

function PizzaTypes() {
  return (
    <div>
      <Center>
        <Title mt={140}>Здесь вы узнаете каких видов бывают пиццы</Title>
      </Center>
      <Container mt={70}>
        <Title order={2}>Всего существует 9 видов итальянской пиццы:</Title>
        <List size={"xl"} type="unordered" withPadding>
          <List.Item>Неаполитанская пицца (Pizza Napoletana)</List.Item>
          <List.Item>Кальцоне (Calzone)</List.Item>
          <List.Item>Римская пицца (Pizza Romana)</List.Item>
          <List.Item>Пицца в нарезке (Pizza al taglio)</List.Item>
          <List.Item>Сицилийская пицца (Pizza Siciliana)</List.Item>
          <List.Item>Жареная пицца (Pizza fritta)</List.Item>
          <List.Item>Пицца в сковороде (Pizza al tegamino)</List.Item>
          <List.Item>
            Метровая пицца (Pizza al metro или Pizza alla Palla)
          </List.Item>
          <List.Item>Пицца-гурме’. (Pizza Gourmet)</List.Item>
        </List>
        <Title mt={40} order={2}>
          Ниже мы подробнее расскажем о каждом виде:
        </Title>
        <List size={"xl"} type="unordered" withPadding>
          <List.Item>Неаполитанская пицца (Pizza Napoletana)</List.Item>
        </List>
        <Image
          src={
            "https://www.alma.scuolacucina.it/wp-content/uploads/2021/11/PIZZA-NAPOLETANA-3-web-624x416.jpg"
          }
        />
        <Text size={"lg"}>
          Начнем, конечно, с родины этого продукта – Неаполя. Настоящая
          неаполитанская пицца мягкая, а не хрустящая, как думают многие
          иностранцы. Эта мягкость теста обуславливается методом выпечки: при
          около 400 градусов Цельсия в дровяной печи. Талантливый пицца мейкер
          раскатывает пиццу начиная с центра к краям, двигая таким образом
          пузырьки воздуха внутри теста. Благодаря такой технике, в процессе
          выпечки края доходят до готовности до того, как тесто в центре пиццы
          станет твердым. Именно поэтому пицца остается мягкой, нежной, и
          эластичной – характеристики просто необходимые для создания идеальной
          базы для нежной местной моцареллы и сочного помидора. В то же время
          края пиццы значительно увеличиваются в размерах, становятся
          золотистыми, с характерными «пузырьками» по всему диаметру. Правильно
          приготовить неаполитанскую пиццу — это целое искусство. Недаром
          искусство ее изготовления вошло в список нематериального культурного
          наследия человечества ЮНЕСКО.
        </Text>
        <List size={"xl"} type="unordered" withPadding>
          <List.Item>Кальцоне (Calzone)</List.Item>
        </List>
        <Image
          src={
            "https://www.alma.scuolacucina.it/wp-content/uploads/2021/11/calzone-pizza-624x416.jpg"
          }
        />
        <Text size={"lg"}>
          Кальцоне, пожалуй, самая «странная» по виду из нашего списка 9 видов
          итальянской пиццы. На самом деле, это неаполитанская пицца, сложенная
          пополам, так что получается своего рода «пирожок» в форме полумесяца,
          с начинкой внутри. Тесто раскатывается как на обычную пиццу, но без
          создания более плотного края. Представьте, как вы откусываете кусочек
          этой пиццы, а там, за нежным тестом, скрывается сочная, ароматная,
          горячая начинка!
        </Text>
        <List size={"xl"} type="unordered" withPadding>
          <List.Item>Римская пицца (Pizza Romana)</List.Item>
        </List>
        <Image
          src={
            "https://www.alma.scuolacucina.it/wp-content/uploads/2021/11/shutterstock_pizza-romana-624x416.jpg"
          }
        />
        <Text size={"lg"}>
          Пицца в Риме – это полная противоположность своей неаполитанской
          «сестре»: тонкая и хрустящая, ее вполне можно держать в руке за край
          не боясь, что начинка упадет на тарелку.
        </Text>
        <List size={"xl"} type="unordered" withPadding>
          <List.Item>Пицца в нарезке (Pizza al taglio)</List.Item>
        </List>
        <Image
          src={
            "https://www.alma.scuolacucina.it/wp-content/uploads/2021/11/shutterstock_pizza-al-taglio-624x416.jpg"
          }
        />
        <Text size={"lg"}>
          Следующую пиццу в нашем списке «9 видов итальянской пиццы» можно
          запросто определить в категорию стрит фуд. Она выпекается в
          современных электрических духовках в течение около 15 минут, и, как
          следствие, будет достаточно высокой – около 2 см. Из-за
          продолжительности выпекания, многие ингредиенты выкладываются уже на
          готовую пиццу или в самом процессе выпечки, чтобы избежать их
          чрезмерной термообработки. Несмотря на то, что такую пиццу зачастую
          называют «римской», но это не совсем правильно. Найти ее вы можете во
          многих регионах Италии, и в каждом уголке страны она будет иметь свои
          маленькие особенности. Несмотря на то, что такую пиццу можно отнести к
          стрит фуду и вы найдете ее в небольших кафе в разных точках страны,
          она часто является базой для великолепных местных ингредиентов: сыров,
          нарезок, и даже морепродуктов.
        </Text>
        <List size={"xl"} type="unordered" withPadding>
          <List.Item>Сицилийская пицца (Pizza Siciliana)</List.Item>
        </List>
        <Image
          src={
            "https://www.alma.scuolacucina.it/wp-content/uploads/2021/11/shutterstock_1698744682-624x468.jpg"
          }
        />
        <Text size={"lg"}>
          Сицилийская пицца часто ассоциируется с квадратной формой. Хотя, в
          данном случае, мы говорим о сфинчоне, типичной пицце города Палермо.
          Она больше напоминает фокаччу – высокая, обильно приправленная
          специальным томатным соусом, подсушенным на солнце. Но это
          единственный вид пиццы, существующий в этом регионе. Пиццолу’ в
          Сиракузе и скаччата в Катании, например, это виды пиццы, сделанной из
          двух слоев теста между которыми кладется начинка из различных
          ингредиентов. И, конечно, невозможно не упомянуть жареную пиццу,
          сделанную в виде закрытого кармашка. То, что объединяет все эти
          рецепты – это наличии в начинке большинства из них анчоусов, в тесто
          часто добавляется манная крупа, а в качестве сыров используется не
          моцарелла, а местные, сицилийские виды сыров, такие как тума,
          качокавалло и пекорино.
        </Text>
        <List size={"xl"} type="unordered" withPadding>
          <List.Item>Жареная пицца (Pizza fritta)</List.Item>
        </List>
        <Image
          src={
            "https://www.alma.scuolacucina.it/wp-content/uploads/2021/11/PIZZA-NAPOLETANA-3-web-624x416.jpg"
          }
        />
        <Text size={"lg"}>
          Да-да, пиццу можно не только выпекать, но и жарить! Родилась жареная
          пицца, конечно же, в Неаполе, но постепенно получила популярность по
          всей Италии. Смотреть на то, как тесто, свернутое кармашком,
          становится золотистым – зрелище завораживающее! Интересно, что начинка
          при этом остается свежей, не тронутой горячим маслом.
        </Text>
        <List size={"xl"} type="unordered" withPadding>
          <List.Item>Пицца в сковороде (Pizza al tegamino)</List.Item>
        </List>
        <Image
          src={
            "https://www.alma.scuolacucina.it/wp-content/uploads/2021/11/shutterstock_pizza-al-tegamino-624x416.jpg"
          }
        />
        <Text size={"lg"}>
          А что же на севере Италии? Здесь тоже есть свои стили пиццы. В Турине,
          например, существует особый ее вид, выпекаемый в небольшой сковороде.
          Тесто для такой пиццы проходит двойное заквашивание, после чего его
          выкладывают в небольшую сковороду, которая в свою очередь помещается в
          дровяную или электрическую печь. Так как сковорода предварительно
          смазывается оливковым маслом, готовая пицца, получается схожая с
          неаполитанской, но с небольшим эффектом жарки. Найти такую пиццу вы
          сможете только в Турине и некоторых других городах Пьемонта.
        </Text>
        <List size={"xl"} type="unordered" withPadding>
          <List.Item>
            Метровая пицца (Pizza al metro или Pizza alla Palla)
          </List.Item>
        </List>
        <Image
          src={
            "https://www.alma.scuolacucina.it/wp-content/uploads/2021/11/Alma_20180110_043-624x416.jpg"
          }
        />
        <Text size={"lg"}>
          Эта пицца чем-то похожа на нарезанную, но в отличии от последней, она
          готовится непосредственно в печи, а не на противне и как правило
          предназначается для большой компании людей. Она может достигать одного
          метра в длину, отсюда и название. Назвать метровую пиццу отдельным
          стилем может и сложно, но она однозначно привлекает внимание
          оригинальностью исполнения! Как правило такие пиццы получаются
          достаточно хрустящими, толщиной примерно в 1 см.
        </Text>
        <List size={"xl"} type="unordered" withPadding>
          <List.Item>Пицца-гурме’. (Pizza Gourmet) </List.Item>
        </List>
        <Image
          src={
            "https://www.alma.scuolacucina.it/wp-content/uploads/2021/11/CSCI44-BOSCO-scaled-e1638802251995.jpg"
          }
        />
        <Text size={"lg"}>
          Мы привыкли воспринимать пиццу, как нечто ненавязчивое, подходящее для
          любой «гастрономической ситуации», состоящей из ингредиентов высокого
          качества, но в то же время любимых всеми, и, вполне доступных. Однако,
          совсем по-другому мы воспринимаем пиццу-гурме’. Пицца для настоящих
          гурманов подается в ресторанах самого высокого уровня. Делается она с
          использованием материнских дрожжей и, зачастую, муки отличной от муки
          из мягких сортов пшеницы. В качестве ингредиентов для начинки
          используются необычные для пиццы продукты, например, бобы, лимон,
          инжир, дичь. Тесто получается очень легким и подается такая пицца уже
          нарезанной.
        </Text>
      </Container>
    </div>
  );
}

export default PizzaTypes;
