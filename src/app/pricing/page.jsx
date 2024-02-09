import "./styles.css";
import {contentContOne, heroHome} from "@/shared/data/pages/home.data";
import {FaWhatsapp} from "react-icons/fa6";

export default function Home() {

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1
          className="leading-tighter font-heading mb-6 text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl ">
          Прайслист</h1>
        <section className="typography">
          <div className="price__content-wrap text-slate-600 dark:text-white">
            <table className="display: table;">
              <thead className="">

              <tr>
                <th rowSpan="2">
                  №<br/>
                  п/п
                </th>
                <th rowSpan="2">
                  Наименование услуги
                </th>
                <th rowSpan="2">
                  количество
                </th>
                {/*<th colSpan="4">*/}
                <th rowSpan="2">
                  Цена, без НДС
                </th>
              </tr>

              </thead>
              <tbody>
              <tr>
                <th colSpan="4">
                  Техническое обслуживание
                </th>
              </tr>

              <tr>
                <td>
                  1
                </td>
                <td>
                  Профилактическое обслуживание сплит-системы (чистка наружного и внутреннего блоков мойкой высокого
                  давления, обработка паром и дезинфицирующим средством, проверка работы на всех режимах, протяжка
                  клеммных соединений, замер рабочего и пускового токов, проверка давления всасывания и температуры
                  перегрева (при необходимости))

                </td>
                <td>
                  <span className="">1</span>
                </td>
                <td>
                  <span className="">2000</span>
                </td>

              </tr>

              <tr>
                <td>
                  2
                </td>
                <td>
                  Заправка фреоном R22 или R410a
                </td>
                <td>
                  <span className="">1 грамм</span>
                </td>
                <td>
                  <span className="">8 рублей</span>
                </td>

              </tr>

              <tr>
                <td>
                  3
                </td>
                <td>
                  Замена пускового конденсатора компрессора/вентилятора сплит-системы, замена/ремонт магнитного
                  пускателя
                </td>
                <td>
                  <span className="">1</span>
                </td>
                <td>
                  <span className="">От 2000 до 4000рублей</span>
                </td>
              </tr>

              <tr>
                <td>
                  4
                </td>
                <td>
                  Ремонт внутреннего блока сплит-системы: замена/ремонт модуля управления, крыльчатки вентилятора,
                  электродвигателя вентилятора, электропривода жалюзи, ремонт декоративного обрамления (без учёта
                  стоимости запасных частей)
                </td>
                <td>
                  <span className="">1</span>
                </td>
                <td>
                  <span className="">От 2000 до 5000 рублей</span>
                </td>
              </tr>

              <tr>
                <td>
                  5
                </td>
                <td>
                  Прочистка, мелкий ремонт дренажного трубопровода сплит-системы

                </td>
                <td>
                  <span className="">1</span>
                </td>
                <td>
                  <span className="">От 1000 до 2000 рублей</span>
                </td>
              </tr>

              <tr>
                <td>
                  6
                </td>
                <td>
                  Поиск и устранение утечки хладоагента (протяжка разъёмных соединений фреонопроводов, перевальцовка
                  труб
                  (1стык), пайка (1стык) (без учёта стоимости демонтажно-монтажных работ, заправки хладоагентом)
                </td>
                <td>
                  <span className="">1</span>
                </td>
                <td>
                  <span className="dfe282c522da0fd089330eaf8764a91e">От 1000 до 2500 рублей</span>
                </td>
              </tr>

              <tr className="hidden">
                <td>
                  7
                </td>
                <td>
                  Ремонт/замена дренажной помпы сплит-системы
                </td>
                <td>
                  <span className="c7a006cefa2c4c721171fe86599ae45f">1</span>
                </td>
                <td>
                  <span className="2f2116913767fb2b9e8a634bfbac536b">От 500 до 4000 рублей</span>
                </td>
              </tr>
              <tr className="">
                {/*<tr className="hidden">*/}
                <th colSpan="4">
                  Диагностика
                </th>
              </tr>
              <tr>
                <td>
                  8
                </td>
                <td>
                  Диагностика без ремонта и выезд мастера
                </td>
                <td>
                  <span className="">1</span>
                </td>
                <td>
                  <span className="">500 рублей</span>
                </td>
              </tr>


              <tr className="">
                {/*<tr className="hidden">*/}
                <td>
                  9
                </td>
                <td>
                  Замена крыльчатки вентилятора наружного блока (без учёта стоимости запасных частей)
                </td>

                <td>
                  <span className="">1</span>
                </td>
                <td colSpan="4">
                  <span className="">2000 рублей</span>
                </td>
              </tr>


              <tr className="">
                <td>
                  10
                </td>
                <td>
                  Замена электродвигателя вентилятора наружного блока (без учёта стоимости запасных частей)
                </td>
                <td>
                  <span className="">1</span>
                </td>
                <td colSpan="4">
                  <span className="">2500 рублей</span>
                </td>
              </tr>

              <tr className="">
                <td>
                  11
                </td>
                <td>
                  Восстановление теплоизоляции фреонопроводов (1 метр)
                </td>

                <td>
                  <span className="">1</span>
                </td>
                <td colSpan="4">
                  <span className="">500 рублей</span>
                </td>
              </tr>

              <tr className="">
                <td>
                  12
                </td>
                <td>
                  Пайка трубопроводов (1 стык)
                </td>

                <td>
                  <span className="">1</span>
                </td>
                <td colSpan="4">
                  <span className="">500 рублей</span>
                </td>
              </tr>

              <tr className="">
                <td>
                  13
                </td>
                <td>
                  Пульт дистанционного управления с настройкой
                </td>

                <td>
                  <span className="">1</span>
                </td>
                <td colSpan="4">
                  <span className="">1500 рублей</span>
                </td>
              </tr>

              <tr className="">
                <td>
                  14
                </td>
                <td>
                  Диагностика инверторной сплит-системы, ремонт/замена электронных модулей (без учёта стоимости
                  демонтажно-монтажных работ (при необходимости), запасных частей)
                </td>

                <td>
                  <span className="">1</span>
                </td>
                <td colSpan="4">
                  <span className="">От 1500 до 4000 рублей</span>
                </td>
              </tr>

              <tr className="">
                <td>
                  15
                </td>
                <td>
                  Демонтажно-монтажные работы (выполняемые при необходимости, если ремонт внутреннего или наружного
                  блоков
                  не возможен на месте)
                </td>

                <td>
                  <span className="">1</span>
                </td>
                <td colSpan="4">
                  <span className="">От 2000 до 4000 рублей</span>
                </td>
              </tr>


              </tbody>
              <tfoot>
              <tr>
                <td colSpan="6">
                  &nbsp;* Окончательную стоимость услуги уточняйте у Вашего менеджера по тел.
                  <b>{contentContOne.items[2].description}</b>.
                  Стоимость услуги рассчитывается в зависимости от производительности и оснащения установки.<br/>
                </td>
              </tr>

              </tfoot>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}
