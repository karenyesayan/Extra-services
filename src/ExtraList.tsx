import type { Extra } from "./ExtrasContext";
import { useExtras, useExtrasDispatch } from "./ExtrasContext";

export default function ExtraList() {
  const extras = useExtras();

  return (
    <div className="extra-list">
      {extras?.map((extra) => (
        <Extra key={extra.id} variant="lg" extra={extra} />
      ))}
    </div>
  );
}

export function Extra({ extra, variant }: { extra: Extra; variant?: string }) {
  const dispatch = useExtrasDispatch();

  return (
    <div className="extra">
      <div>
        <span className="extra__title">{extra.title}</span>
      </div>
      <div className="extra__info">
        <span className="extra__text">{extra.text}</span>
        <span className="extra__price">{extra.price} ₽</span>
      </div>
      {variant === "lg" && (
        <div className="extra__button-wrapper">
          <button
            onClick={() => {
              dispatch({
                type: "changed",
                id: extra.id,
              });
            }}
            className="extra_button"
          >
            Добавить
          </button>
        </div>
      )}
    </div>
  );
}
