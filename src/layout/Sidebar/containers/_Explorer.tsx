import React from 'react';

import Link from '../../../components/Ui/Link';
import { Paragraph } from '../../../components/Ui/Texts/Paragraph';
import { ITagItemProps } from '../../../utils/generationTags';
import HashTagIcon from '../assets/img/hash-tag-icon.svg';
import MusicTagIcon from '../assets/img/music-tag-icon.svg';

interface IExplorerProps {
  suggestionTags: ITagItemProps[];
}

export function $Explorer({ suggestionTags }: IExplorerProps) {
  return (
    <div className="relative pt-4 px-2 pb-2 before:absolute before:top-0 before:block before:w-full before:h-[1px] before:bg-gray-100-opacity-12 max-[1280px]:hidden">
      <p className="text-gray-100-opacity-75 text-[14px] pb-4 leading-[20px]">
        Descobrir
      </p>

      <ul className="flex flex-wrap justify-start items-start">
        {suggestionTags.map(({ uuid, name, type, url }) => {
          return (
            <li key={uuid}>
              <Link
                to={url}
                className="flex items-center rounded-full mr-2 bg-gray-100-opacity-08 leading-[18px] h-[24px] mb-[12px] px-[10px] py-[3px]"
              >
                {type === 'any' && <HashTagIcon width={16} height={16} />}
                {type === 'music' && <MusicTagIcon width={16} height={16} />}

                <Paragraph className="pl-2 text-sm text-[#ffffffbf] whitespace-nowrap font-primary overflow-hidden">
                  {name}
                </Paragraph>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
