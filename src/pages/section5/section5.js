import section5 from "./section5.module.css";
function Section5() {
  return (
    <div className={section5.section_5}>
      <div className={section5.section_5_page}>
        <span className={section5.section5_top_text}>
          Преимущества использования нашего сервиса
        </span>
      </div>
      <div className={section5.section5_cards}>
        <div className={section5.section5_card1}>
          <div className={section5.section5_img}></div>
          <span className={section5.section5_desc}>
            100% Надежность и контроль безопасности кошелька, защищены
            операционные системы, серверы приложений.
          </span>
        </div>
        <div className={section5.section5_card1}>
          <div className={section5.section5_img1}></div>
          <span className={section5.section5_desc}>
            Что то про то какие у нас выгодные вложения, удачные инвестиции,
            увеличение прибыли, хороший как и был ожидаем результат
          </span>
        </div>
        <div className={section5.section5_card1}>
          <div className={section5.section5_img2}></div>
          <span className={section5.section5_desc}>
            Не нужно заполнять никаких лишних данных и документов платить
            налоги, все только с участием нашего севиса и Вас.
          </span>
        </div>
        <div className={section5.section5_card1}>
          <div className={section5.section5_img3}></div>
          <span className={section5.section5_desc}>
            Удобный процесс торговли. Одни из самых низких комиссий за
            транзакции, наши комиссии превзошли всех конкурентов.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Section5;
