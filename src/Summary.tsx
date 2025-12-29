import { Extra } from "./ExtraList";
import { useExtras } from "./ExtrasContext";

export default function Summary() {
  const extras = useExtras()?.filter((e) => e.status === true);
  const extraSum = extras?.reduce((acc, e) => (acc += e.price), 0) || 0;

  return (
    <div className="summary">
      <div className="total">
        <div className="total__amount">
          <span className="total__label">Итого</span>
          <span className="total__sum">{14000 + extraSum} ₽</span>
        </div>
        <div className="total__button-wrapper">
          <button className="total__pay-button">Оформить заказ</button>
        </div>
      </div>
      <div className="summary__content">
        {extras?.map((extra) => (
          <Extra key={extra.id} extra={extra} />
        ))}
      </div>
    </div>
  );
}
