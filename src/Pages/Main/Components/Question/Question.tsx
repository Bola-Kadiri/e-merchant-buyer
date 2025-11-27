
import style from "./Index.module.css";
import { useState } from 'react';

import {
  AiOutlinePlus as PlusIcon,
  AiOutlineMinus as MinusIcon,
} from "react-icons/ai";

const Question = () => {
  const [question, setQuestion] = useState(false)
  return (
    <div className={style.container}>
      <div className={style.header}>
        <span>Quick answers to your questions</span>
        <h1>
          Frequently Asked <span>Questions</span>
        </h1>
      </div>
      <div className={style.question_container}>
        <ul
          className={
            !question
              ? style.question_highlight
              : style.question_highlight_active
          }
        >
          <li>
            <div className={style.question}>
              <h2>What Services does Fab render</h2>
              {!question ? (
                <PlusIcon
                  onClick={() => setQuestion(true)}
                  className={style.plus_icon}
                />
              ) : (
                <MinusIcon
                  onClick={() => setQuestion(false)}
                  className={style.plus_icon}
                />
              )}
            </div>
            <div
              className={
                !question
                  ? style.question_content
                  : style.question_content_active
              }
            >
              <span className={style.divider}></span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus, architecto optio? Alias odio sit mollitia laudantium
                nostrum sapiente officia accusamus.
              </p>
            </div>
          </li>
          <li>
            <div className={style.question}>
              <h2>How do i get my daily coins</h2>
              {!question ? (
                <PlusIcon
                  onClick={() => setQuestion(true)}
                  className={style.plus_icon}
                />
              ) : (
                <MinusIcon
                  onClick={() => setQuestion(false)}
                  className={style.plus_icon}
                />
              )}
            </div>
            <div
              className={
                !question
                  ? style.question_content
                  : style.question_content_active
              }
            >
              <span className={style.divider}></span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus, architecto optio? Alias odio sit mollitia laudantium
                nostrum sapiente officia accusamus.
              </p>
            </div>
          </li>
          <li>
            <div className={style.question}>
              <h2>How Long does it take for news to be updated</h2>
              {!question ? (
                <PlusIcon
                  onClick={() => setQuestion(true)}
                  className={style.plus_icon}
                />
              ) : (
                <MinusIcon
                  onClick={() => setQuestion(false)}
                  className={style.plus_icon}
                />
              )}
            </div>
            <div
              className={
                !question
                  ? style.question_content
                  : style.question_content_active
              }
            >
              <span className={style.divider}></span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus, architecto optio? Alias odio sit mollitia laudantium
                nostrum sapiente officia accusamus.
              </p>
            </div>
          </li>
          <li>
            <div className={style.question}>
              <h2>How will i withdraw funds</h2>
              {!question ? (
                <PlusIcon
                  onClick={() => setQuestion(true)}
                  className={style.plus_icon}
                />
              ) : (
                <MinusIcon
                  onClick={() => setQuestion(false)}
                  className={style.plus_icon}
                />
              )}
            </div>
            <div
              className={
                !question
                  ? style.question_content
                  : style.question_content_active
              }
            >
              <span className={style.divider}></span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus, architecto optio? Alias odio sit mollitia laudantium
                nostrum sapiente officia accusamus.
              </p>
            </div>
          </li>
          <li>
            <div className={style.question}>
              <h2>Does the platform support referrals</h2>
              {!question ? (
                <PlusIcon
                  onClick={() => setQuestion(true)}
                  className={style.plus_icon}
                />
              ) : (
                <MinusIcon
                  onClick={() => setQuestion(false)}
                  className={style.plus_icon}
                />
              )}
            </div>
            <div
              className={
                !question
                  ? style.question_content
                  : style.question_content_active
              }
            >
              <span className={style.divider}></span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus, architecto optio? Alias odio sit mollitia laudantium
                nostrum sapiente officia accusamus.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Question