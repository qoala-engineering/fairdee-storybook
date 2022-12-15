import React, { useState } from "react";
import "./_card.scss";
import AccordionArrowUp from '../../assets/icon/arrow-right-orange.svg'

interface Props {
  title?: string;
  accordion?: boolean;
  icon?: any;
  children?: any;
  isOpenAccordion?: boolean;
  hideHeader?: boolean;
  id?: string;
}

const Card: React.FC<Props> = ({
  title,
  accordion,
  children,
  icon,
  isOpenAccordion = true,
  hideHeader = false,
  id,
}) => {
  const [toggleCard, setToggleCard] = useState(isOpenAccordion);
  // [parent] = useAutoAnimate<any>(/* optional config */);
  function handleToggleCard() {
    setToggleCard(!toggleCard);
  }

  function cardHeaders() {
    const accordionHeader = (
      <>
        <header className="accordion" onClick={() => handleToggleCard()}>
          <div className="title-wrapper">
            {icon && (
              <div className={'icon ' + (icon === true ? 'with-bg' : '')}>
                {icon !== true ? <img src={icon} alt="icon" /> : null}
              </div>
            )}
            <p className="title">{title}</p>
          </div>
          <div className="toggle-accordion">
            <img src={AccordionArrowUp} className={toggleCard ? 'open-card' : 'close-card'} alt="arrow-accordion" />
          </div>
        </header>
      </>
    );
    const defaultHeader = (
      <>
        <header className={hideHeader ? 'no-border' : ''}>
          <div className="title-wrapper">
            {icon && <div className="icon"></div>}
            <p className="title">{title}</p>
          </div>
        </header>
      </>
    );
    return accordion ? accordionHeader : defaultHeader;
  }

  function cardBody(children: any) {
    const accordionBody = (
      <>
        {toggleCard && (
          <section className="accordion-card">
            <section className="card-body">{children}</section>
          </section>
        )}
      </>
    );
    const defaultCard = (
      <>
        <section className="card-body">{children}</section>
      </>
    );
    return accordion ? accordionBody : defaultCard;
  }

  return <section className="card">
     {!hideHeader ? <div className="card-header">{cardHeaders()}</div> : null}
      {cardBody(children)}
  </section>;
};
export default Card;
