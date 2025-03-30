import clsx from "clsx";
import { useCallback, useState } from "react";

const BASE_URL = import.meta.env.BASE_URL

export const ImageSlider = (props: { images: string[] }) => {
  const [btnEvent, setBtnEvent] = useState<{
    idx: number;
  }>({ idx: 0 });

  const onNext = useCallback(
    (nextIdx: number) => {
      return () =>
        setBtnEvent({
          idx: nextIdx + 1 >= props.images.length ? 0 : nextIdx + 1,
        });
    },
    [props.images]
  );

  const onBack = useCallback(
    (nextIdx: number) => {
      return () =>
        setBtnEvent({
          idx: nextIdx - 1 < 0 ? props.images.length - 1 : nextIdx - 1,
        });
    },
    [props.images]
  );

  return (
    <div className="slider relative h-65 overflow-hidden flex">
      {props.images.map((i) => {
        let transform = `translateX(-${100 * btnEvent.idx}%)`;

        if (btnEvent.idx === 0) {
          transform = `translateX(0%)`;
        }

        return (
          <div
          key={i}
          style={{
              transform,
            }}
            className="flex justify-center"
          >
            <img
              data-idx={btnEvent.idx}
              className={clsx("h-65 animate-relative")}
              src={`${BASE_URL}${i}`}
              alt={i.split("/").pop()?.split(".")[0]}
            />
          </div>
        );
      })}
      {props.images.length > 1 ? (
        <>
          <span
            onClick={onBack(btnEvent.idx)}
            className="absolute rounded-4xl dark:bg-white/40 bg-black/40 left-2 top-2/4 text-3xl p-1.5 cursor-pointer"
          >
            &#8592;
          </span>
          <span
            onClick={onNext(btnEvent.idx)}
            className="absolute rounded-4xl dark:bg-white/40 bg-black/40 right-2 top-2/4 text-3xl p-1.5 cursor-pointer"
          >
            &#8594;
          </span>
        </>
      ) : undefined}
    </div>
  );
};
