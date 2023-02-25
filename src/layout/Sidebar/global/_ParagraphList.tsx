import {
  IParagraphProps,
  Paragraph,
} from '../../../components/Ui/Texts/Paragraph';

export const ParagraphList = ({
  children,
  className,
  ...props
}: IParagraphProps) => {
  return (
    <Paragraph
      className={`text-gray-100-opacity-75 mb-2 px-2 text-[14px] leading-[20px] max-[1280px]:hidden ${className}`}
      {...props}
    >
      {children}
    </Paragraph>
  );
};
