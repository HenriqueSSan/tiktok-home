import Link from '../Ui/Link';
import { Paragraph } from '../Ui/Texts/Paragraph';

interface ITagProps {
  url: string;
  name: string;
}

export function Tag({ url, name }: ITagProps) {
  return (
    <div>
      <Link
        to={url}
        className="flex items-center rounded-full mr-2 leading-[18px] h-[24px] py-[3px]"
      >
        <Paragraph
          as="strong"
          className="text-sm text-common-white whitespace-nowrap font-primary overflow-hidden font-semibold"
        >
          #{name}
        </Paragraph>
      </Link>
    </div>
  );
}
