import "./styles/main.css"
import React from "react";
import {useState, useEffect} from 'react';

function App() {
  const [elementComp, setElementComp] = useState(true);

  const deleteElement = () => {
    setElementComp(!elementComp)
  }

  useEffect(() => {
    console.log(elementComp);
  }, [elementComp])

  return (
    <div className="container">
      <div className="header">
        <div className="logo"></div>

        <div className="menu">
          <a href="#">Главная</a>
          <a href="#">О компании</a>
          <a href="#">Услуги</a>
          <a href="#">Контакты</a>
          <button>Заказать звонок</button>
        </div>

        <div className="burgerMenu">
                  <input id="menu__toggle" type="checkbox"/>
                  <label className="menu__btn" htmlFor="menu__toggle" onClick={deleteElement}>
                    <span></span>
                  </label>

                  <ul className="menu__box">
                    <div className="logo2"></div>
                    <li><a href="#" className="menu__item">Главная</a></li>
                    <li><a href="#" className="menu__item">О компании</a></li>
                    <li><a href="#" className="menu__item">Услуги</a></li>
                    <li><a href="#" className="menu__item">Контакты</a></li>
                    <li><a href="#" className="menu__item">Связаться с нами</a></li>

                    <div className="menu__contacts">
                      <p>ruslanmakhmatov@gmail.com</p>
                      <p className="menu__textContacts">+7 (775) 993-25-87</p>
                    </div>
                  </ul>
        </div>

      </div>

      <div className="main">
        <div className={elementComp ? "main__image" : "main__none"}></div>

        <div className="main__textes">
          <p className="main__text-1">Главная</p>
          <h1 className="main__text-2">Ваш представитель в Павлодарской Области</h1>
          <p className="main__text-3">
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris
          </p>
          <button className="main__btn">Подробнее</button>
        </div>
      </div>

      <div className="box-1">
        <div className="box-1__textes">
          <div className="box-1__text-1">
            <p>О компании</p>
            <h2><span>Огромный опыт</span> на сельскохозяйственных культур</h2>
          </div>

          <div className="box-1__text-2">

            <p className="text-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>

            <p className="text-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <button>Связаться с нами</button>

          </div>
        </div>

        <div className="box-1__numbers">
          <div className="box-1__infoNumber">
            <h2>600</h2>
            <p>Lorem ipsum dolor sit amet,</p>
          </div>

          <div className="box-1__infoNumber">
            <h2>600</h2>
            <p>Lorem ipsum dolor sit amet,</p>
          </div>

          <div className="box-1__infoNumber">
            <h2>600</h2>
            <p>Lorem ipsum dolor sit amet,</p>
          </div>

          <div className="box-1__infoNumber">
            <h2>600</h2>
            <p>Lorem ipsum dolor sit amet,</p>
          </div>
        </div>
      </div>

      <div className="box-2">
        <div className="box-2__textes">
          <p className="box-2__text-1">
            Услуги
          </p>

          <p className="box-2__text-2">
            Наши <span>Услуги</span>
          </p>

          <p className="box-2__text-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          </p>
        </div>

        <div className="box-2__info">
          <div className="box-2__blockInfo">
                <div className="box-2__image"></div>

                <h3>Сопровождение</h3>

                <p>Официально представляем интересы Вашей компании, избавляя от необходимости 
                  личного участия в рабочих процессах. Мы готовы взять на себя координацию вопросов.
                </p>

                <div className="box-2__elipse"></div>
          </div>

          <div className="box-2__blockInfo">
                <div className="box-2__image"></div>

                <h3>Сопровождение</h3>

                <p>Официально представляем интересы Вашей компании, избавляя от необходимости 
                  личного участия в рабочих процессах. Мы готовы взять на себя координацию вопросов.
                </p>

                <div className="box-2__elipse"></div>
          </div>

          <div className="box-2__blockInfo">
                <div className="box-2__image"></div>

                <h3>Сопровождение</h3>

                <p>Официально представляем интересы Вашей компании, избавляя от необходимости 
                  личного участия в рабочих процессах. Мы готовы взять на себя координацию вопросов.
                </p>

                <div className="box-2__elipse"></div>
          </div>
        </div>
      </div>

      <div className="formEmail">
            <div className="formEmail__form">
                  <div className="formEmail__text">

                  <p className="formEmail__text-1">
                    Контакты
                  </p>

                  <p className="formEmail__text-2">
                    Получить <span>консультацию</span>
                  </p>

                  <p className="formEmail__text-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  </p>

                  </div>

                  <div className="formEmail__contacts">
                    <input placeholder="Ваше имя" type="text" className="formEmail__name"></input> 

                    <input placeholder="Ваш телефон" type="text" className="formEmail__telephone"></input>

                    <select className="formEmail__options">
                      <option className="placeholder" disabled selected>Услуга</option>
                      <option className="formEmail__option-1">variant 1</option>
                      <option className="formEmail__option-2">variant 2</option>
                      <option className="formEmail__option-3">variant 3</option>
                    </select>

                    <button>Отправить</button>

                    <p className="formEmail__adressEmail">ruslanmakhmatov@gmail.com</p>

                    <p className="menu__textContacts">+7 (775) 993-25-87</p>
                  </div>
            </div>

            <div className="formEmail__image">

            </div>
      </div>

      <div className="footer">
        <div className="footer__logo"></div>

        <div className="footer__menu">
          <a href="#">Главная</a>
          <a href="#">О компании</a>
          <a href="#">Услуги</a>
          <a href="#">Контакты</a>
        </div>

        <button>Вверх</button>
      </div>

      <div className="sparkStudio"></div>
    </div>
  );
}

export default App;
