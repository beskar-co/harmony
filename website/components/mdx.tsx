'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { dateFormatter } from '../lib/date';
import type { FC, ComponentProps, ReactNode } from 'react';

const ContentWrapper: FC<ComponentProps<'div'>> = ({ className, children }) => (
  <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
    <div className="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
      <div
        className={twMerge(
          'mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto',
          className
        )}
      >
        {children}
      </div>
    </div>
  </div>
);

export const Article: FC<{
  readonly id: number;
  readonly date: string;
  readonly children: ReactNode;
}> = ({ id, date, children }) => {
  const heightRef = useRef<HTMLDivElement>(null);
  const [heightAdjustment, setHeightAdjustment] = useState(0);

  useEffect(() => {
    const observer = new window.ResizeObserver(() => {
      if (!heightRef.current) {
        return;
      }

      const { height } = heightRef.current.getBoundingClientRect();
      const nextMultipleOf8 = 8 * Math.ceil(height / 8);
      setHeightAdjustment(nextMultipleOf8 - height);
    });

    if (heightRef.current) {
      observer.observe(heightRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <article
      id={id.toString()}
      className="scroll-mt-16"
      style={{ paddingBottom: `${heightAdjustment}px` }}
    >
      <div ref={heightRef}>
        <header className="relative mb-10 xl:mb-0">
          <div className="pointer-events-none absolute left-[max(-0.5rem,calc(50%-18.625rem))] top-0 z-50 flex h-4 items-center justify-end gap-x-2 lg:left-0 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] xl:h-8">
            <Link href={`#${id}`} className="inline-flex">
              <time
                dateTime={date}
                className="hidden xl:pointer-events-auto xl:block xl:text-2xs/4 xl:font-medium xl:text-neutral-500 text-xs"
              >
                {dateFormatter.format(new Date(date))}
              </time>
            </Link>
            <div className="h-[0.0625rem] w-3.5 bg-neutral-400 lg:-mr-3.5 xl:mr-0 xl:bg-neutral-300" />
          </div>
          <ContentWrapper>
            <div className="flex">
              <Link href={`#${id}`} className="inline-flex">
                <time
                  dateTime={date}
                  className="text-2xs/4 font-medium text-neutral-500 dark:text-neutral-500 xl:hidden"
                >
                  {dateFormatter.format(new Date(date))}
                </time>
              </Link>
            </div>
          </ContentWrapper>
        </header>
        <ContentWrapper className="prose prose-neutral dark:prose-invert">
          {children}
        </ContentWrapper>
      </div>
    </article>
  );
};
