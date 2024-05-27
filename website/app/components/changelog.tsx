/* eslint-disable @typescript-eslint/naming-convention, react/no-danger */

import { marked } from 'marked';
import { getChangelog } from '@/lib/octokit';
import { dateFormatter } from '@/lib/date';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { ReactElement } from 'react';

export const Changelog = async (): Promise<ReactElement> => {
  const changelog = await getChangelog();

  return (
    <div className="relative h-screen overflow-auto py-20">
      <Accordion
        type="single"
        className="prose prose-neutral max-w-lg mx-auto"
        defaultValue={String(changelog.data[0].id)}
        collapsible
      >
        {changelog.data.map((release) => (
          <AccordionItem value={String(release.id)} key={release.id}>
            <AccordionTrigger>
              <p className="m-0 flex-1">{release.name}</p>
              <time dateTime={release.created_at} className="shrink-0 m-0">
                {dateFormatter.format(new Date(release.created_at))}
              </time>
            </AccordionTrigger>
            <AccordionContent>
              <div
                dangerouslySetInnerHTML={{
                  __html: release.body ? marked.parse(release.body) : '',
                }}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
